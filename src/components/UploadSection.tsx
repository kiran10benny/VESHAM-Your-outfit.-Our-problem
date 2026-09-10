import { useState, useRef } from "react";
import { Language } from "@/lib/mock-data";
import { UploadCloud, Image as ImageIcon, X } from "lucide-react";

type UploadSectionProps = {
  language: Language;
  uploadedImage: string | null;
  setUploadedImage: (image: string | null) => void;
};

export function UploadSection({ language, uploadedImage, setUploadedImage }: UploadSectionProps) {
  const isEn = language === "en";
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert(isEn ? "Please upload an image file." : "ദയവായി ഒരു ചിത്രം അപ്‌ലോഡ് ചെയ്യുക.");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  if (uploadedImage) {
    return (
      <section id="preview" className="py-12 px-4 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-black mb-2">
          {isEn ? "Is this you?" : "ഇതാണോ നീ?"}
        </h2>
        <p className="text-vesham-text/60 font-medium mb-8">
          {isEn ? "(Last chance to reconsider.)" : "(ഒന്നുകൂടെ ആലോചിക്കാൻ ഇതാണ് അവസാന അവസരം.)"}
        </p>
        
        <div className="relative inline-block mx-auto mb-6 group">
          <img 
            src={uploadedImage} 
            alt="Preview" 
            className="max-h-[60vh] w-auto max-w-full rounded-2xl shadow-xl object-contain bg-white p-2 border-2 border-vesham-text/5"
          />
          <button 
            onClick={() => setUploadedImage(null)}
            className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md text-vesham-red hover:bg-vesham-red hover:text-white transition-colors"
            title="Remove image"
          >
            <X size={20} />
          </button>
        </div>
        
        <div>
          <button 
            onClick={() => setUploadedImage(null)}
            className="text-vesham-text/70 font-semibold hover:text-vesham-text underline underline-offset-4"
          >
            {isEn ? "Change Photo" : "ഫോട്ടോ മാറ്റുക"}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="upload" className="py-12 px-4 max-w-2xl mx-auto">
      <div 
        className={`border-4 border-dashed rounded-3xl p-10 md:p-20 text-center transition-all ${
          isDragging 
            ? "border-vesham-yellow bg-vesham-yellow/5 scale-[1.02]" 
            : "border-vesham-text/15 bg-white hover:border-vesham-text/30"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="bg-vesham-bg w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 text-vesham-text">
          <UploadCloud size={32} />
        </div>
        
        <h3 className="text-2xl font-black mb-2">
          {isEn ? "Drop your photo here" : "നിന്റെ ഫോട്ടോ ഇവിടെ ഇടുക"}
        </h3>
        
        <p className="text-vesham-text/60 font-medium mb-8">
          {isEn ? "or click to upload" : "അല്ലെങ്കിൽ അപ്‌ലോഡ് ചെയ്യാൻ ക്ലിക്ക് ചെയ്യുക"}
        </p>
        
        <input 
          type="file" 
          accept="image/jpeg, image/png, image/webp" 
          className="hidden" 
          ref={fileInputRef}
          onChange={handleChange}
        />
        
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="bg-white border-2 border-vesham-text text-vesham-text font-bold px-8 py-3 rounded-full hover:bg-vesham-text hover:text-white transition-colors mb-8"
        >
          {isEn ? "Select Image" : "ചിത്രം തിരഞ്ഞെടുക്കുക"}
        </button>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-vesham-text/50">
          <span className="flex items-center gap-1"><ImageIcon size={16} /> Full body</span>
          <span className="flex items-center gap-1"><ImageIcon size={16} /> Half body</span>
          <span className="flex items-center gap-1"><ImageIcon size={16} /> Selfie</span>
        </div>
        
        <p className="mt-8 text-sm italic text-vesham-text/40 font-medium">
          {isEn ? '"Any photo. We\'ll find something."' : '"ഏത് ഫോട്ടോ ആയാലും കുഴപ്പമില്ല. ഞങ്ങൾ എന്തെങ്കിലും കണ്ടുപിടിച്ചോളാം."'}
        </p>
        
        <p className="mt-2 text-xs text-vesham-text/30 uppercase tracking-widest">
          JPG &bull; PNG &bull; WEBP (MAX 10MB)
        </p>
      </div>
    </section>
  );
}
