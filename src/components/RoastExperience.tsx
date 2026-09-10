import { Language } from "@/lib/mock-data";
import { useState } from "react";
import { ChevronDown, RefreshCcw } from "lucide-react";
import type { RoastResponse, RoastSection as RoastSectionType } from "@/lib/schema";

type RoastExperienceProps = {
  language: Language;
  roastData: RoastResponse;
  uploadedImage: string | null;
};

export function RoastExperience({ language, roastData, uploadedImage }: RoastExperienceProps) {
  const isEn = language === "en";

  return (
    <section id="roast" className="pt-12 pb-24 px-4 max-w-3xl mx-auto">
      {/* Intro */}
      <div className="mb-20">
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
          {isEn ? "Okay... we saw it." : "ശരി... ഞങ്ങൾ ആ ഡ്രസ്സ് കണ്ടു."}
        </h2>
        
        <p className="text-2xl font-medium leading-relaxed border-l-4 border-vesham-yellow pl-6 py-2">
          {roastData.intro}
        </p>

        {uploadedImage && (
          <div className="mt-12 bg-white p-3 rounded-2xl shadow-sm border border-vesham-text/5 inline-block -rotate-2">
            <img 
              src={uploadedImage} 
              alt="Your outfit" 
              className="max-h-64 rounded-xl object-contain"
            />
          </div>
        )}
      </div>

      {/* Sections */}
      <div className="space-y-24">
        {roastData.sections.map((section, index) => (
          <RoastSection 
            key={section.id} 
            index={index + 1} 
            section={section} 
            isEn={isEn} 
          />
        ))}
      </div>

      {/* Final Verdict & Score */}
      <div className="mt-32 pt-20 border-t-2 border-vesham-text/10 text-center">
        <h3 className="text-2xl font-black text-vesham-text/50 tracking-[0.2em] mb-12">
          {isEn ? "FINAL VERDICT" : "അവസാന വിധി"}
        </h3>
        
        <p className="text-2xl md:text-3xl font-bold leading-relaxed mb-16 max-w-2xl mx-auto">
          "{roastData.finalVerdict}"
        </p>

        {/* Score Meter */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-vesham-text/5 max-w-md mx-auto">
          <p className="text-sm font-black text-vesham-text/50 uppercase tracking-[0.2em] mb-4">
            {isEn ? "STYLE SCORE" : "സ്റ്റൈൽ സ്കോർ"}
          </p>
          <div className="text-7xl font-black mb-6">
            <span className={roastData.score < 5 ? "text-vesham-red" : "text-vesham-text"}>
              {roastData.score.toFixed(1)}
            </span>
            <span className="text-3xl text-vesham-text/30">/10</span>
          </div>
          
          {/* Secondary Metric */}
          <div className="bg-vesham-bg rounded-xl p-4 flex justify-between items-center">
            <span className="font-bold text-sm uppercase">
              {isEn ? "FASHION CHAOS" : "ഫാഷൻ ദുരന്തം"}
            </span>
            <span className="font-black text-lg">
              {Math.min(100, Math.max(0, 100 - (roastData.score * 10)))}%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function RoastSection({ 
  index, 
  section, 
  isEn 
}: { 
  index: number; 
  section: RoastSectionType; 
  isEn: boolean;
}) {
  return (
    <div className="editorial-section">
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-5xl font-black text-vesham-yellow">
          {index.toString().padStart(2, '0')}
        </span>
        <h3 className="text-3xl font-black uppercase tracking-tight">
          {section.title}
        </h3>
      </div>
      
      <div className="w-full h-px bg-vesham-text/10 mb-8" />
      
      <div className="space-y-6 text-xl md:text-2xl font-medium leading-relaxed mb-12">
        {section.roast.map((paragraph: string, i: number) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
      
      <div className="bg-white rounded-2xl p-6 md:p-8 border border-vesham-text/5 shadow-sm">
        <p className="text-xs font-black text-vesham-text/50 uppercase tracking-[0.2em] mb-3">
          {isEn ? "HOW TO MAKE THIS LESS BAD" : "എങ്ങനെ ഇതിനേക്കാൾ മികച്ചതാക്കാം"}
        </p>
        <p className="text-lg font-bold">
          {section.improvement}
        </p>
      </div>
    </div>
  );
}
