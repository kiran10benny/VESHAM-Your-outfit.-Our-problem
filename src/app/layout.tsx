import type { Metadata } from "next";
import { Inter, Noto_Sans_Malayalam } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoMalayalam = Noto_Sans_Malayalam({
  variable: "--font-noto-malayalam",
  subsets: ["malayalam"],
});

export const metadata: Metadata = {
  title: "VESHAM | AI Style Roast",
  description: "Upload a photo. We'll tell you what everyone else was too polite to say.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${notoMalayalam.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-vesham-bg text-vesham-text">
        {children}
      </body>
    </html>
  );
}
