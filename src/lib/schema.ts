import { z } from "zod";

export const roastSectionSchema = z.object({
  id: z.enum(["hair", "top", "bottom", "shoes", "accessories", "colors", "overall"]),
  title: z.string(),
  roast: z.array(z.string()).min(1),
  improvement: z.string()
});

export const roastResponseSchema = z.object({
  score: z.number().min(0).max(10),
  intro: z.string(),
  sections: z.array(roastSectionSchema),
  finalVerdict: z.string(),
  shareRoast: z.string().max(120)
});

export type RoastSection = z.infer<typeof roastSectionSchema>;
export type RoastResponse = z.infer<typeof roastResponseSchema>;
