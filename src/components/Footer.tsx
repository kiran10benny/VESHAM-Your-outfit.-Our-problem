import { Language } from "@/lib/mock-data";

type FooterProps = {
  language: Language;
  onReset: () => void;
};

export function Footer({ language, onReset }: FooterProps) {
  const isEn = language === "en";

  return (
    <footer className="py-12 px-4 border-t border-vesham-text/10 mt-12 bg-white">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center gap-8">
        <button 
          onClick={onReset}
          className="text-lg font-bold underline underline-offset-4 hover:text-vesham-yellow transition-colors"
        >
          {isEn ? "Roast Another Outfit" : "മറ്റൊരു ഫോട്ടോ റോസ്റ്റ് ചെയ്യുക"}
        </button>
        
        <div className="text-center">
          <span className="font-black text-3xl tracking-tighter block mb-2">VESHAM</span>
          <p className="text-sm font-bold text-vesham-text/40">
            &copy; {new Date().getFullYear()} VESHAM. All rights reserved.
          </p>
          <p className="text-xs font-medium text-vesham-text/30 mt-2 max-w-sm mx-auto">
            {isEn 
              ? "Disclaimer: This is a comedic roasting experience. Don't take it personally. Or do. We're just an AI." 
              : "ഇതൊരു തമാശയ്ക്ക് വേണ്ടി ഉണ്ടാക്കിയതാണ്. ആരും സീരിയസ് ആയി എടുക്കരുത്."}
          </p>
        </div>
      </div>
    </footer>
  );
}
