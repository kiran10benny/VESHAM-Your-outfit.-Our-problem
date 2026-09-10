import { Language } from "@/lib/mock-data";
import { Download, Share2 } from "lucide-react";
import { useState, useRef } from "react";
import type { RoastResponse } from "@/lib/schema";

type ShareCardProps = {
  language: Language;
  roastData: RoastResponse;
};

export function ShareCard({ language, roastData }: ShareCardProps) {
  const isEn = language === "en";
  const cardRef = useRef<HTMLDivElement>(null);

  const shareText = isEn ? "Share your pain" : "കൂട്ടുകാരെ കാണിക്കുക";
  const downloadText = isEn ? "Save for therapy" : "സേവ് ചെയ്തു വെക്കുക";

  // Pick the first roast sentence from the overall category, or the first category, or fallback to intro
  const getBestLine = () => {
    const overall = roastData.sections.find(s => s.id === "overall");
    if (overall && overall.roast[0]) return overall.roast[0];
    if (roastData.sections[0] && roastData.sections[0].roast[0]) return roastData.sections[0].roast[0];
    return roastData.intro;
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "VESHAM - AI Style Roast",
        text: `I got roasted on VESHAM! Style Score: ${roastData.score}/10.`,
        url: "https://vesham.fun",
      }).catch(console.error);
    } else {
      alert(isEn ? "Sharing not supported on this browser." : "നിങ്ങളുടെ ബ്രൗസറിൽ ഷെയറിങ് ലഭ്യമല്ല.");
    }
  };

  return (
    <section id="share" className="py-12 px-4 max-w-xl mx-auto flex flex-col items-center">
      <h3 className="text-2xl font-black mb-8 text-center">
        {isEn ? "Share your suffering" : "നിന്റെ ദുരന്തം മറ്റുള്ളവരെയും കാണിക്കുക"}
      </h3>

      {/* The Share Card itself */}
      <div
        ref={cardRef}
        className="bg-vesham-bg w-full aspect-[4/5] sm:aspect-square max-w-sm rounded-3xl p-8 flex flex-col border border-vesham-text/10 shadow-xl relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-vesham-yellow rounded-bl-full -z-0 opacity-50" />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex justify-between items-start mb-auto">
            <div>
              <h4 className="font-black text-2xl tracking-tighter">VESHAM</h4>
              <p className="text-[10px] font-bold text-vesham-text/50 uppercase tracking-widest">
                AI STYLE ROAST
              </p>
            </div>

            <div className="text-right">
              <p className="text-[10px] font-bold text-vesham-text/50 uppercase tracking-widest mb-1">
                STYLE SCORE
              </p>
              <p className="font-black text-3xl">
                {roastData.score.toFixed(1)}
              </p>
            </div>
          </div>

          <div className="my-8">
            <p className="text-lg md:text-xl font-bold leading-tight italic">
              "{getBestLine()}"
            </p>
          </div>

          <div className="mt-auto flex justify-between items-end border-t border-vesham-text/10 pt-4">
            <p className="text-xs font-bold text-vesham-text/40">
              vesham.fun
            </p>
            <div className="w-8 h-8 rounded-full bg-vesham-text flex items-center justify-center">
              <span className="text-white text-xs">🤡</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={handleShare}
          className="flex items-center gap-2 bg-vesham-text text-white font-bold px-6 py-3 rounded-full hover:bg-vesham-text/90 transition-colors"
        >
          <Share2 size={18} />
          {isEn ? "Share" : "ഷെയർ ചെയ്യുക"}
        </button>
        {/* Placeholder for download logic */}
        <button
          className="flex items-center gap-2 bg-white border border-vesham-text/10 font-bold px-6 py-3 rounded-full hover:bg-gray-50 transition-colors"
        >
          <Download size={18} />
          {isEn ? "Save Image" : "സേവ് ചെയ്യുക"}
        </button>
      </div>
    </section>
  );
}
