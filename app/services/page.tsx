"use client";

import Link from "next/link";
import Image from "next/image";
import { Handshake } from "lucide-react";
import { useState, useEffect } from "react";

const FALLBACK_IMAGES = {
  lightning:
    "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&q=80",
  surge:
    "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&q=80",
  earthing:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80",
  ups:
    "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80",
  stabilizer:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80",
  battery:
    "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80",
  solar:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80",
  audit:
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
} as const;

type FallbackKey = keyof typeof FALLBACK_IMAGES;

function ServiceCard({
  service,
  index,
}: {
  service: {
    id: number;
    title: string;
    image: string;
    fallbackKey: FallbackKey;
    description: string;
  };
  index: number;
}) {
  const [src, setSrc] = useState(service.image);
  const revealClassName = index % 2 === 0 ? "reveal-right" : "reveal-left";

  return (
    <div
      className={`${revealClassName} group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-orange-200 motion-reduce:transform-none`}
      style={{ transitionDelay: `${index * 35}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-600 ease-out"
          onError={() => setSrc(FALLBACK_IMAGES[service.fallbackKey])}
        />
        {/* Hide bottom-right watermark area (GeminiAI)
        <div className="pointer-events-none absolute bottom-0 right-0 h-14 w-24 bg-black/25 backdrop-blur-sm" />
        <div className="pointer-events-none absolute bottom-0 right-0 h-20 w-36 bg-gradient-to-tl from-black/30 via-black/10 to-transparent" /> */}
      </div>

      <div className="bg-primary p-4">
        <h3 className="font-heading font-bold text-white text-lg text-center">
          {service.title}
        </h3>
      </div>

      <div className="p-4">
        <p className="font-body text-gray-600 dark:text-gray-300 text-sm text-center">
          {service.description}
        </p>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Lightning Protection System (LPS)",
      image: "/images/service-lps.png",
      fallbackKey: "lightning" as const,
      description: "Advanced lightning protection for complete facility safety",
    },
    {
      id: 2,
      title: "Surge Protection Devices (SPD)",
      image: "/images/service-spd.png",
      fallbackKey: "surge" as const,
      description: "Protect your equipment from voltage surges and spikes",
    },
    {
      id: 3,
      title: "Chemical Earthing Solutions",
      image: "/images/service-chemical-earthing.png",
      fallbackKey: "earthing" as const,
      description: "Low resistance earthing systems for optimal safety",
    },
    {
      id: 4,
      title: "Online UPS & SMF Batteries",
      image: "/images/service-ups-smf.png",
      fallbackKey: "ups" as const,
      description: "Reliable backup power and battery solutions for critical loads",
    },
    {
      id: 5,
      title: "Servo Stabilizers",
      image: "/images/service-servo-stabilizers.png",
      fallbackKey: "stabilizer" as const,
      description: "Voltage regulation for sensitive equipment protection",
    },
    {
      id: 6,
      title: "Lithium Ion Batteries",
      image: "/images/service-lithium-ion-batteries.png",
      fallbackKey: "battery" as const,
      description: "High-efficiency energy storage solutions",
    },
    {
      id: 7,
      title: "Solar EPC & BOS Kit",
      image: "/images/service-solar-epc.png",
      fallbackKey: "solar" as const,
      description: "Complete solar engineering, procurement & construction",
    },
    {
      id: 8,
      title: "Power Quality Audit (PQA)",
      image: "/images/service-pqa.png",
      fallbackKey: "audit" as const,
      description: "Comprehensive power system analysis and optimization",
    },
  ];

  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Page Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 animate-fade-down motion-reduce:animate-none">
            Our Services
          </h1>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up motion-reduce:animate-none [animation-delay:120ms]">
            Comprehensive electrical safety and power solutions designed for industrial and commercial excellence
          </p>
        </div>
      </section>

      {/* Services Grid - 3x3 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Cards (1-8) */}
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}

          {/* CTA Card - 9th Item */}
          <Link
            href="/contact"
            className="group bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none flex flex-col items-center justify-center p-12 min-h-[300px]"
          >
            <Handshake className="w-24 h-24 text-white mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="font-heading font-bold text-white text-3xl text-center">
              GET A QUOTE
            </h3>
            <p className="font-body text-white/90 text-center mt-4">
              Let's discuss your project requirements
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
