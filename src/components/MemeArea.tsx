import { Language } from "@/lib/mock-data";
import cat from "../images/cat.png";
export function MemeArea({ language }: { language: Language }) {
  const isEn = language === "en";

  return (
    <section id="meme" className="py-12 px-4 max-w-2xl mx-auto">
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-vesham-text/10 rotate-[1deg] hover:rotate-0 transition-transform">
        <div className="bg-vesham-bg aspect-square rounded-xl mb-4 flex items-center justify-center overflow-hidden relative">
          <img
            src={cat.src}
            alt="Cat"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex flex-col justify-between p-6">
            <h3 className="font-black text-3xl md:text-5xl text-white uppercase text-center drop-shadow-md" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
              {isEn ? "WHEN YOU THINK" : "നീ വിചാരിക്കും"}
            </h3>
            <h3 className="font-black text-3xl md:text-5xl text-white uppercase text-center drop-shadow-md" style={{ textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000' }}>
              {isEn ? "YOUR OUTFIT IS FIRE" : "നിന്റെ ഡ്രസ്സ് പൊളിയാണെന്ന്"}
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between px-2">
          <span className="font-bold text-sm text-vesham-text/50">@vesham_ai</span>
          <span className="text-xl">🤡</span>
        </div>
      </div>
    </section>
  );
}
