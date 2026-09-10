import { Language, RoastLevel } from "@/lib/mock-data";

type RoastSettingsProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
  roastLevel: RoastLevel;
  setRoastLevel: (level: RoastLevel) => void;
  onRoast: () => void;
  disabled: boolean;
};

export function RoastSettings({ 
  language, 
  setLanguage, 
  roastLevel, 
  setRoastLevel, 
  onRoast,
  disabled 
}: RoastSettingsProps) {
  const isEn = language === "en";

  return (
    <section id="settings" className="py-12 px-4 max-w-xl mx-auto">
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-vesham-text/5">
        <h2 className="text-3xl font-black mb-8 text-center">
          {isEn ? "How much truth can you handle?" : "സത്യം കേൾക്കാൻ എത്രത്തോളം ധൈര്യമുണ്ട്?"}
        </h2>
        
        <div className="flex flex-col gap-4 mb-10">
          <button 
            onClick={() => setRoastLevel("mild")}
            className={`p-4 rounded-xl font-bold flex items-center justify-between transition-all border-2 ${
              roastLevel === "mild" 
                ? "border-vesham-text bg-vesham-bg" 
                : "border-transparent bg-vesham-bg/50 hover:bg-vesham-bg"
            }`}
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">🙂</span> 
              <span>{isEn ? "Mild" : "കുറച്ചു മതി"}</span>
            </span>
            {roastLevel === "mild" && <span className="w-3 h-3 rounded-full bg-vesham-text"></span>}
          </button>
          
          <button 
            onClick={() => setRoastLevel("brutal")}
            className={`p-4 rounded-xl font-bold flex items-center justify-between transition-all border-2 ${
              roastLevel === "brutal" 
                ? "border-vesham-text bg-vesham-bg" 
                : "border-transparent bg-vesham-bg/50 hover:bg-vesham-bg"
            }`}
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">🔥</span> 
              <span>{isEn ? "Brutal" : "കുറച്ചു കടുപ്പിക്കാം"}</span>
            </span>
            {roastLevel === "brutal" && <span className="w-3 h-3 rounded-full bg-vesham-text"></span>}
          </button>
          
          <button 
            onClick={() => setRoastLevel("destroy")}
            className={`p-4 rounded-xl font-bold flex items-center justify-between transition-all border-2 ${
              roastLevel === "destroy" 
                ? "border-vesham-red bg-vesham-red/5 text-vesham-red" 
                : "border-transparent bg-vesham-bg/50 hover:bg-vesham-bg"
            }`}
          >
            <span className="flex items-center gap-3">
              <span className="text-2xl">💀</span> 
              <span>{isEn ? "Destroy" : "കത്തിച്ചു കളയാം"}</span>
            </span>
            {roastLevel === "destroy" && <span className="w-3 h-3 rounded-full bg-vesham-red"></span>}
          </button>
        </div>
        
        <div className="mb-10 text-center">
          <p className="text-sm font-bold text-vesham-text/50 uppercase tracking-widest mb-4">
            {isEn ? "Choose language" : "ഭാഷ തിരഞ്ഞെടുക്കുക"}
          </p>
          <div className="inline-flex bg-vesham-bg rounded-full p-1 border border-vesham-text/10">
            <button
              onClick={() => setLanguage("en")}
              className={`px-6 py-2 rounded-full font-bold transition-colors ${
                language === "en" ? "bg-white shadow-sm" : "text-vesham-text/60 hover:text-vesham-text"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("ml")}
              className={`px-6 py-2 rounded-full font-bold font-malayalam transition-colors ${
                language === "ml" ? "bg-white shadow-sm" : "text-vesham-text/60 hover:text-vesham-text"
              }`}
            >
              മലയാളം
            </button>
          </div>
        </div>
        
        <button 
          onClick={onRoast}
          disabled={disabled}
          className={`w-full font-black text-xl px-8 py-5 rounded-2xl transition-all shadow-lg flex items-center justify-center gap-2 ${
            disabled 
              ? "bg-vesham-text/10 text-vesham-text/40 cursor-not-allowed" 
              : "bg-vesham-yellow text-vesham-text hover:bg-[#ebd52a]"
          }`}
        >
          {isEn ? "Roast My Outfit" : "എന്നെ റോസ്റ്റ് ചെയ്യൂ"} &rarr;
        </button>
      </div>
    </section>
  );
}
