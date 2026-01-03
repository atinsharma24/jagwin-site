import type { Metadata } from "next";
import { League_Spartan, Open_Sans, Dancing_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

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
  metadataBase: new URL("https://jagwin-site.vercel.app"),
  title: "Jagwin Enterprises LLP | Electrical Safety Solutions",
  description:
    "Complete Electrical Safety Solutions including Lightning Protection System (LPS), Surge Protection Devices (SPD), Chemical Earthing Solutions, Online UPS & SMF Batteries, Servo Stabilizers, Lithium Ion Batteries, Solar EPC & BOS Kit, and Power Quality Audit (PQA).",
  keywords: [
    "Jagwin Enterprises LLP",
    "Electrical Safety Solutions",
    "Lightning Protection System (LPS)",
    "Surge Protection Devices (SPD)",
    "Chemical Earthing Solutions",
    "Online UPS & SMF Batteries",
    "Servo Stabilizers",
    "Lithium Ion Batteries",
    "Solar EPC & BOS Kit",
    "Power Quality Audit (PQA)",
  ],
  openGraph: {
    title: "Jagwin Enterprises LLP | Electrical Safety Solutions",
    description:
      "Complete Electrical Safety Solutions including Lightning Protection System (LPS), Surge Protection Devices (SPD), Chemical Earthing Solutions, Online UPS & SMF Batteries, Servo Stabilizers, Lithium Ion Batteries, Solar EPC & BOS Kit, and Power Quality Audit (PQA).",
    url: "https://jagwin-site.vercel.app/",
    siteName: "Jagwin Enterprises LLP",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Jagwin Enterprises LLP",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jagwin Enterprises LLP | Electrical Safety Solutions",
    description:
      "Complete Electrical Safety Solutions including Lightning Protection System (LPS), Surge Protection Devices (SPD), Chemical Earthing Solutions, Online UPS & SMF Batteries, Servo Stabilizers, Lithium Ion Batteries, Solar EPC & BOS Kit, and Power Quality Audit (PQA).",
    images: ["/images/thumbnail.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${leagueSpartan.variable} ${openSans.variable} ${dancingScript.variable} antialiased bg-gray-100 text-slate-900`}
      >
        <ScrollProgress />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
