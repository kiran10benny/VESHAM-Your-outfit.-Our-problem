import { Language } from "@/lib/mock-data";
import { motion } from "framer-motion";
import { Check, X as XIcon, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

type AnalysisSectionProps = {
  language: Language;
  onComplete: () => void;
  isDataReady: boolean;
};

const STEPS_EN = [
  "Checking the hairstyle...",
  "Looking at the outfit...",
  "Questioning your colour choices...",
  "Inspecting the accessories...",
  "Trying to find something nice to say...",
  "Failed.",
  "Preparing your roast..."
];

const STEPS_ML = [
  "മുടി പരിശോധിക്കുന്നു...",
  "ഡ്രസ്സ് നോക്കുന്നു...",
  "നിന്റെ കളർ സെലക്ഷനെ പറ്റി ആലോചിക്കുന്നു...",
  "ആക്സസറീസ് പരിശോധിക്കുന്നു...",
  "എന്തെങ്കിലും നല്ലത് പറയാൻ പറ്റുമോ എന്ന് നോക്കുന്നു...",
  "കഴിഞ്ഞില്ല.",
  "നിന്നെ റോസ്റ്റ് ചെയ്യാൻ തയ്യാറെടുക്കുന്നു..."
];

export function AnalysisSection({ language, onComplete, isDataReady }: AnalysisSectionProps) {
  const isEn = language === "en";
  const steps = isEn ? STEPS_EN : STEPS_ML;
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (currentStep < steps.length - 1) {
      const delay = currentStep === steps.length - 3 ? 1500 : 800;
      timeout = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, delay);
    } else if (currentStep === steps.length - 1) {
      if (isDataReady) {
        timeout = setTimeout(() => {
          onComplete();
        }, 800);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentStep, steps.length, onComplete, isDataReady]);

  return (
    <section id="analysis" className="py-24 px-4 max-w-xl mx-auto min-h-[60vh] flex flex-col justify-center">
      <h2 className="text-4xl font-black mb-12 text-center animate-pulse">
        {isEn ? "Analyzing your style..." : "നിന്റെ സ്റ്റൈൽ വിശകലനം ചെയ്യുന്നു..."}
      </h2>
      
      <div className="space-y-6">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isDone = index < currentStep;
          const isFailedStep = index === 5; // "Failed."
          
          if (!isActive && !isDone) return null;
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex items-center gap-4 text-xl font-bold ${
                isActive ? "text-vesham-text" : "text-vesham-text/40"
              } ${isFailedStep ? "text-vesham-red" : ""}`}
            >
              <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                isActive 
                  ? "bg-vesham-yellow text-vesham-text" 
                  : isFailedStep 
                    ? "bg-vesham-red text-white" 
                    : "bg-green-500 text-white"
              }`}>
                {isActive ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : isFailedStep ? (
                  <XIcon size={16} />
                ) : (
                  <Check size={16} />
                )}
              </span>
              <span>{step}</span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
