import type { Metadata } from "next";
import { Cormorant_Infant, Mulish } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Infant({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const mulish = Mulish({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mulish",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica, CA",
  description: "Licensed Clinical Psychologist in Santa Monica offering Therapy for anxiety, trauma, and burnout. In-person & California telehealth",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${mulish.variable} antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
