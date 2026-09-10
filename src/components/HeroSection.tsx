import { Language } from "@/lib/mock-data";

export function HeroSection({ language }: { language: Language }) {
  const isEn = language === "en";
  
  return (
    <section className="pt-32 pb-16 px-4 max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-6">
        {isEn ? (
          <>
            Your outfit.<br />
            Our <span className="relative inline-block">
              <span className="relative z-10">problem.</span>
              <span className="absolute bottom-1 left-0 w-full h-4 bg-vesham-yellow/80 -z-0 rotate-[-2deg]"></span>
            </span>
          </>
        ) : (
          <span className="font-malayalam leading-tight">
            നിന്റെ ഡ്രസ്സ്.<br />
            ഞങ്ങളുടെ <span className="relative inline-block">
              <span className="relative z-10">പ്രശ്നം.</span>
              <span className="absolute bottom-2 left-0 w-full h-4 bg-vesham-yellow/80 -z-0 rotate-[-2deg]"></span>
            </span>
          </span>
        )}
      </h1>
      
      <p className="text-lg md:text-xl font-medium text-vesham-text/70 max-w-2xl mx-auto mb-10">
        {isEn 
          ? "Upload a photo. We'll tell you what everyone else was too polite to say."
          : "ഒരു ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യൂ. മറ്റുള്ളവർ മുഖത്ത് നോക്കി പറയാൻ മടിച്ച ആ സത്യം ഞങ്ങൾ പറയാം."
        }
      </p>
      
      <button 
        onClick={() => document.getElementById("upload")?.scrollIntoView({ behavior: "smooth" })}
        className="bg-vesham-text text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-vesham-yellow hover:text-vesham-text transition-colors shadow-lg flex items-center gap-2 mx-auto"
      >
        {isEn ? "Roast My Outfit" : "എന്നെ റോസ്റ്റ് ചെയ്യൂ"} &rarr;
      </button>
    </section>
  );
}
