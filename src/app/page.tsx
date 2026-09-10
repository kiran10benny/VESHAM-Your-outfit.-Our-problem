"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { UploadSection } from "@/components/UploadSection";
import { MemeArea } from "@/components/MemeArea";
import { RoastSettings } from "@/components/RoastSettings";
import { AnalysisSection } from "@/components/AnalysisSection";
import { RoastExperience } from "@/components/RoastExperience";
import { ShareCard } from "@/components/ShareCard";
import { Footer } from "@/components/Footer";
import { Language, RoastLevel } from "@/lib/mock-data";
import type { RoastResponse } from "@/lib/schema";

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [roastLevel, setRoastLevel] = useState<RoastLevel>("brutal");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [appState, setAppState] = useState<"idle" | "analyzing" | "roasting">("idle");
  const [roastData, setRoastData] = useState<RoastResponse | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleRoast = async () => {
    if (!uploadedImage) return;
    setAppState("analyzing");
    setErrorMsg(null);
    
    // Scroll to analysis section after state updates
    setTimeout(() => {
      document.getElementById("analysis")?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    try {
      const response = await fetch(uploadedImage);
      const blob = await response.blob();
      
      const formData = new FormData();
      formData.append("image", blob, "upload.jpg");
      formData.append("language", language);
      formData.append("roastLevel", roastLevel);

      const apiRes = await fetch("/api/roast", {
        method: "POST",
        body: formData,
      });

      const data = await apiRes.json();

      if (!apiRes.ok) {
        throw new Error(data.error || "Even VESHAM needs a minute. Try again.");
      }

      setRoastData(data);
    } catch (error: any) {
      console.error(error);
      setErrorMsg(error.message);
      setAppState("idle");
      // Scroll back to settings to show error
      setTimeout(() => {
        document.getElementById("settings")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleAnalysisComplete = () => {
    if (errorMsg || !roastData) return; 
    setAppState("roasting");
    
    // Scroll to roast section
    setTimeout(() => {
      document.getElementById("roast")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleReset = () => {
    setUploadedImage(null);
    setRoastData(null);
    setErrorMsg(null);
    setAppState("idle");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // We should only show MemeArea when appState is idle, or perhaps always keep it on the landing part.
  // For single page flow, we can hide the top parts or just let them scroll down.
  // The instructions say "Everything must exist in one long, vertically scrollable page. The page should transition naturally".

  return (
    <main className="min-h-screen relative selection:bg-vesham-yellow selection:text-vesham-text">
      <Navbar language={language} setLanguage={setLanguage} />
      
      {/* 
        We keep the initial sections in the DOM so scrolling works naturally, 
        but we might fade them slightly or just leave them as is. 
      */}
      <div className={appState !== "idle" ? "opacity-30 pointer-events-none transition-opacity duration-1000" : ""}>
        <HeroSection language={language} />
        
        <UploadSection 
          language={language} 
          uploadedImage={uploadedImage} 
          setUploadedImage={(img) => {
            setUploadedImage(img);
            if (img) {
              setTimeout(() => {
                document.getElementById("settings")?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }
          }} 
        />
        
        {!uploadedImage && <MemeArea language={language} />}
        
        {errorMsg && (
          <div className="max-w-xl mx-auto px-4 mt-8">
            <div className="bg-vesham-red/10 border-2 border-vesham-red text-vesham-red p-4 rounded-xl text-center font-bold">
              {errorMsg}
            </div>
          </div>
        )}

        {uploadedImage && (
          <RoastSettings 
            language={language}
            setLanguage={setLanguage}
            roastLevel={roastLevel}
            setRoastLevel={setRoastLevel}
            onRoast={handleRoast}
            disabled={!uploadedImage || appState !== "idle"}
          />
        )}
      </div>

      {appState === "analyzing" && (
        <AnalysisSection 
          language={language} 
          onComplete={handleAnalysisComplete} 
          isDataReady={roastData !== null}
        />
      )}

      {appState === "roasting" && roastData && (
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <RoastExperience 
            language={language} 
            roastData={roastData} 
            uploadedImage={uploadedImage}
          />
          <ShareCard 
            language={language} 
            roastData={roastData} 
          />
          <Footer 
            language={language} 
            onReset={handleReset} 
          />
        </div>
      )}
    </main>
  );
}
