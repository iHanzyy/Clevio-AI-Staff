"use client";

import { Send } from "lucide-react";
import Image from "next/image";
import Script from "next/script";

const SOFTWARE_APP_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Clevio AI Staff",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
  },
};

export default function ClevioLandingPage() {
  return (
    <>
      <Script id="clevio-ai-staff-schema" type="application/ld+json">
        {JSON.stringify(SOFTWARE_APP_SCHEMA)}
      </Script>

      <div className="relative min-h-screen bg-background text-foreground">
        
        {/* Fullscreen Hero Background */}
        <div className="absolute inset-0 z-0 h-screen w-full overflow-hidden">
             <Image
                src="/hero-image.webp"
                alt="Background Office"
                fill
                priority
                className="object-cover object-center"
             />
             {/* Optional Overlay if needed for contrast */}
             {/* <div className="absolute inset-0 bg-black/10" /> */}
        </div>

        {/* Content Overlay */}
        <main>
           <section className="relative z-10 flex h-screen flex-col items-center justify-center px-4">
            
            {/* 1. Floating Logo Pill */}
            {/* Positioned top-left-ish based on design, or centered top. 
                User image shows it floating top-left area. 
            */}
            <div className="absolute top-12 left-12 lg:top-16 lg:left-24 hidden md:block">
                 <div className="flex items-center justify-center">
                    <Image 
                        src="/ClevioLogoLandingP.webp" // As requested
                        alt="Clevio AI Staff"
                        width={360}
                        height={120}
                        className="h-auto w-[360px]"
                    />
                 </div>
            </div>


             {/* Mobile Logo Fallback (if user checks on mobile despite shouting DESKTOP) */}
             <div className="absolute top-6 left-6 md:hidden">
                 <div className="flex items-center justify-center rounded-full bg-white px-6 py-2 shadow-lg">
                    <Image 
                        src="/ClevioLogoLandingP.webp" 
                        alt="Clevio AI Staff"
                        width={100}
                        height={35}
                        className="h-auto w-[100px]"
                    />
                 </div>
             </div>


            {/* 2. Hero Content: Headline & Input */}
            {/* Position based on image: The man/robot is on the right. Text is on the left.
                So we need a container that splits or positions text to the left.
            */}
            <div className="container mx-auto h-full"> 
                <div className="flex h-full items-center">
                    <div className="w-full md:max-w-xl lg:max-w-2xl pl-4 md:pl-16 lg:pl-24 mt-32">
                        
                        {/* Headline */}
                        <h1 className="text-3xl font-bold leading-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-4xl lg:text-5xl mb-6">
                            Jika Anda bisa mudah<br/>
                            membuat staf dari AI<br/>
                            <span className="font-extrabold block mt-2 tracking-wide">APA PERAN AI ANDA?</span>
                        </h1>

                        {/* Input Field */}
                        <div className="relative mt-8 max-w-md">
                            <input 
                                type="text" 
                                placeholder="Ketik disini......."
                                className="w-full rounded-full border-none bg-white py-4 pl-6 pr-14 text-gray-700 shadow-xl focus:ring-2 focus:ring-blue-400 outline-none text-lg"
                            />
                            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-sky-300/30 p-2 text-sky-400 hover:bg-sky-400 hover:text-white transition-colors">
                                <Send className="h-6 w-6 ml-0.5 fill-current" /> 
                            </button>
                        </div>

                    </div>
                    {/* Right side is empty for the image content */}
                    <div className="hidden md:block md:w-1/2"></div>
                </div>
            </div>

           </section>
        </main>
      </div>
    </>
  );
}
