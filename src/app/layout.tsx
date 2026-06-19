import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Tab Guru — Browse with purpose, not just habit.",
  description: "Tab Guru gently reminds you why each tab exists — so you can browse with purpose, not just habit. No blocking. No judgment. Just a quiet nudge back to what matters. Free Chrome extension.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-slate-900 text-slate-50`}
      >
        {children}
      </body>
    </html>
  );
}
