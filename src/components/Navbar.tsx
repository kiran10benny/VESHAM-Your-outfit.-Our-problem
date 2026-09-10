import { Language } from "@/lib/mock-data";

type NavbarProps = {
  language: Language;
  setLanguage: (lang: Language) => void;
};

export function Navbar({ language, setLanguage }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-vesham-bg/90 backdrop-blur-md border-b border-vesham-text/10">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span className="font-black text-2xl tracking-tighter">VESHAM</span>
          <span className="text-xs font-bold text-vesham-text/60 hidden sm:inline-block">
            AI STYLE ROAST
          </span>
        </div>
        
        <div className="flex items-center gap-6 text-sm font-semibold">
          <div className="hidden sm:flex gap-6">
            <a href="#" className="hover:text-vesham-yellow transition-colors">Home</a>
            <a href="#meme" className="hover:text-vesham-yellow transition-colors">Memes</a>
            <a href="#about" className="hover:text-vesham-yellow transition-colors">About</a>
          </div>
          
          <div className="flex bg-vesham-text/5 rounded-full p-1 border border-vesham-text/10">
            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-1 rounded-full transition-colors ${
                language === "en" ? "bg-white shadow-sm" : "text-vesham-text/60 hover:text-vesham-text"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage("ml")}
              className={`px-3 py-1 rounded-full font-malayalam transition-colors ${
                language === "ml" ? "bg-white shadow-sm" : "text-vesham-text/60 hover:text-vesham-text"
              }`}
            >
              മലയാളം
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
