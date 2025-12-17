import MobileLanding from "@/components/marketing/MobileLanding";
import { MessageCircle } from "lucide-react";

const title = "Clevio - AI Staff Automation untuk WhatsApp Bisnis Indonesia";
const description =
  "Automasi customer service & sales dengan AI staff 24/7. Hemat 80% biaya staf, tingkatkan respon 3x lebih cepat. Integrasi WhatsApp, setup 5 menit.";

export const metadata = {
  title,
  description,
  keywords: [
    "AI Staff",
    "WhatsApp Automation",
    "Customer Service",
    "Sales Automation",
    "Chatbot Indonesia",
  ],
  authors: [{ name: "Clevio Team" }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "id_ID",
    url: "https://clevio.id",
    siteName: "Clevio AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Clevio AI Staff Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import ClevioLandingPage from "@/components/marketing/ClevioLandingPage";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Mobile Content */}
      <div className="md:hidden">
        <MobileLanding />
      </div>

      {/* Desktop Content */}
      <div className="hidden md:block">
        <ClevioLandingPage />
      </div>
    </main>
  );
}
