import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI, SchemaType } from "@google/generative-ai";
import { buildVeshamPrompt } from "@/lib/prompts";
import { roastResponseSchema } from "@/lib/schema";

export const maxDuration = 60; // Allow more time for Gemini response

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File | null;
    const language = formData.get("language") as string | null;
    const roastLevel = formData.get("roastLevel") as string | null;

    if (!image) {
      return NextResponse.json({ error: "Upload a photo first." }, { status: 400 });
    }

    if (!language || !roastLevel) {
      return NextResponse.json({ error: "Missing language or roast level." }, { status: 400 });
    }

    if (image.size > 10 * 1024 * 1024) {
      return NextResponse.json({ error: "That's not an image VESHAM can work with. Max 10MB." }, { status: 400 });
    }

    const mimeType = image.type;
    if (!mimeType.startsWith("image/")) {
      return NextResponse.json({ error: "That's not an image VESHAM can work with." }, { status: 400 });
    }

    // Convert image to base64
    const arrayBuffer = await image.arrayBuffer();
    const base64Image = Buffer.from(arrayBuffer).toString("base64");

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Even VESHAM needs a minute. Try again. (API key missing)" }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.6-flash",
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: SchemaType.OBJECT,
          properties: {
            score: { type: SchemaType.NUMBER, description: "Score from 0.0 to 10.0" },
            intro: { type: SchemaType.STRING },
            sections: {
              type: SchemaType.ARRAY,
              items: {
                type: SchemaType.OBJECT,
                properties: {
                  id: { type: SchemaType.STRING, description: "one of: hair, top, bottom, shoes, accessories, colors, overall" },
                  title: { type: SchemaType.STRING },
                  roast: {
                    type: SchemaType.ARRAY,
                    items: { type: SchemaType.STRING }
                  },
                  improvement: { type: SchemaType.STRING }
                },
                required: ["id", "title", "roast", "improvement"]
              }
            },
            finalVerdict: { type: SchemaType.STRING },
            shareRoast: { type: SchemaType.STRING, description: "Max 120 characters" }
          },
          required: ["score", "intro", "sections", "finalVerdict", "shareRoast"]
        }
      }
    });

    const prompt = buildVeshamPrompt(language, roastLevel);

    const result = await model.generateContent([
      prompt,
      {
        inlineData: {
          data: base64Image,
          mimeType
        }
      }
    ]);

    const textResponse = result.response.text();
    if (!textResponse) {
      throw new Error("Empty response from AI");
    }

    // Parse JSON
    const parsedJson = JSON.parse(textResponse);
    
    // Validate with Zod
    const validatedData = roastResponseSchema.parse(parsedJson);

    // If AI couldn't find a person, we handle it if score is 0 and sections are empty
    // but usually Zod will catch invalid formats.
    
    return NextResponse.json(validatedData);

  } catch (error: any) {
    console.error("Roast API Error:", error);
    
    // Check for rate limits or other specific errors
    if (error.status === 429) {
      return NextResponse.json({ error: "Too many people are asking VESHAM to judge them right now." }, { status: 429 });
    }
    
    // Zod validation errors (AI hallucinated structure)
    if (error.name === "ZodError") {
      return NextResponse.json({ error: "Even VESHAM needs a minute. Try again.", details: error.issues }, { status: 500 });
    }

    return NextResponse.json({ error: error.message || "Even VESHAM needs a minute. Try again." }, { status: 500 });
  }
}
