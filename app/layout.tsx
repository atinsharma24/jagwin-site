import type { Metadata } from "next";
import { League_Spartan, Open_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-league-spartan",
  weight: ["400", "700", "900"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jagwin Enterprises LLP - Electrical Safety & Power Solutions",
  description:
    "Complete Electrical Safety & Power Solutions. Lightning Protection, Surge Protection, Earthing Solutions, UPS, Stabilizers, Solar EPC & Power Quality Audit.",
  keywords: [
    "Lightning Protection",
    "Surge Protection",
    "Chemical Earthing",
    "UPS",
    "Servo Stabilizer",
    "Solar EPC",
    "Power Quality Audit",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${leagueSpartan.variable} ${openSans.variable} ${dancingScript.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
