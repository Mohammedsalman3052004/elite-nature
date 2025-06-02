import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Spa in Vellore | Journey Spa Lux – Massage & Wellness",
  description:
    "Experience luxury spa therapies in Vellore at Journey Spa Lux. Full body massage, steam bath & ayurvedic treatments for stress relief and relaxation.",
  keywords: [
    "spa in Vellore",
    "best spa Vellore",
    "full body massage Vellore",
    "ayurvedic massage",
    "steam bath",
    "spa therapy for women",
    "Journey Spa Lux",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
