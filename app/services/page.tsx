"use client";

import Link from "next/link";
import { Handshake } from "lucide-react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import ServiceCard from "@/components/services/ServiceCard";
import ServiceDetailsDialog from "@/components/services/ServiceDetailsDialog";
import type { Service } from "@/lib/services";
import { SERVICES } from "@/lib/services";

function ServicesContent() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const searchParams = useSearchParams();

  const closeDetails = () => setSelectedService(null);
  const openDetails = (service: Service) => setSelectedService(service);

  // Handle deep linking from URL parameter
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      const serviceId = parseInt(id, 10);
      if (!Number.isNaN(serviceId)) {
        const foundService = SERVICES.find((s) => s.id === serviceId);
        if (foundService) {
          setSelectedService(foundService);
        }
      }
    }
  }, [searchParams]);

  useEffect(() => {
    if (!selectedService) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDetails();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedService]);

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
        <LayoutGroup>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards (1-8) */}
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                selected={selectedService?.id === service.id}
                onOpen={openDetails}
              />
            ))}

            {/* CTA Card - 9th Item */}
            <Link
              href="/contact"
              className="group bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl ui-motion hover:-translate-y-1 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none flex flex-col items-center justify-center p-12 min-h-[300px]"
            >
              <Handshake className="w-24 h-24 text-white mb-6 group-hover:scale-110 ui-motion ui-motion-fast" />
              <h3 className="font-heading font-bold text-white text-3xl text-center">
                GET A QUOTE
              </h3>
              <p className="font-body text-white/90 text-center mt-4">
                Let's discuss your project requirements
              </p>
            </Link>
          </div>

          <AnimatePresence>
            {selectedService ? (
              <ServiceDetailsDialog
                key={selectedService.id}
                service={selectedService}
                onClose={closeDetails}
              />
            ) : null}
          </AnimatePresence>
        </LayoutGroup>
      </section>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-900">
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4">
              Our Services
            </h1>
            <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive electrical safety and power solutions designed for industrial and commercial excellence
            </p>
          </div>
        </section>
      </div>
    }>
      <ServicesContent />
    </Suspense>
  );
}
