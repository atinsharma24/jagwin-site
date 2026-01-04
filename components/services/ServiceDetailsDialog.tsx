"use client";

import Link from "next/link";
import Image from "next/image";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { Service } from "@/lib/services";
import { FALLBACK_IMAGES } from "@/lib/services";

import ServiceOverviewCard from "@/components/services/ServiceOverviewCard";

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 font-body text-sm text-gray-700 dark:text-gray-300">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-orange-400" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ServiceDetailsDialog({
  service,
  onClose,
}: {
  service: Service;
  onClose: () => void;
}) {
  const [heroSrc, setHeroSrc] = useState(service.image);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    closeButtonRef.current?.focus();
  }, []);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[9999]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Modal positioner (kept below fixed navbar) */}
      <div
        className="absolute inset-0 flex justify-center items-center p-4 sm:p-6"
        onClick={onClose}
      >       
        <motion.div
          layoutId={`service-card-${service.id}`}
          role="dialog"
          aria-modal="true"
          aria-label={`${service.title} details`}
          onClick={(e) => e.stopPropagation()}
          className="relative flex flex-col w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded-2xl border border-gray-200/70 dark:border-gray-700/70 bg-white/95 dark:bg-gray-900/95 shadow-2xl"
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Hero */}
          <div className="relative aspect-[16/9] shrink-0">
              <Image
                src={heroSrc}
                alt={service.title}
                fill
                className="object-cover"
                onError={() => setHeroSrc(FALLBACK_IMAGES[service.fallbackKey])}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="max-w-[42rem]">
                  <h2 className="font-heading font-bold text-white text-2xl sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="font-body text-white/85 text-sm sm:text-base mt-1">
                    {service.description}
                  </p>
                </div>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="absolute top-3 right-3 inline-flex items-center justify-center rounded-full bg-black/55 hover:bg-black/70 ui-motion ui-motion-fast w-10 h-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-white" />
              </button>
          </div>

          {/* Body */}
          <div className="p-5 sm:p-6">
              <div className="flex flex-col lg:flex-row gap-4 lg:items-start lg:justify-between">
                <ServiceOverviewCard
                  title="Overview"
                  subtitle="A concise summary of scope and outcome"
                  className="flex-1"
                >
                  <p className="font-body text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                    {service.overview}
                  </p>
                </ServiceOverviewCard>

                <div className="flex gap-3 lg:flex-col lg:items-stretch lg:w-[220px]">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-lg bg-primary text-white px-4 py-2 ui-motion ui-motion-fast hover:brightness-110 active:brightness-95"
                  >
                    Request Quote
                  </Link>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="inline-flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 ui-motion ui-motion-fast hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    Download Brochure
                  </a>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                <ServiceOverviewCard title="Key Highlights">
                  <BulletList items={service.highlights} />
                </ServiceOverviewCard>

                <ServiceOverviewCard title="Typical Applications">
                  <BulletList items={service.typicalApplications} />
                </ServiceOverviewCard>

                <ServiceOverviewCard
                  title="Deliverables"
                  subtitle="What you receive at handover"
                  className="md:col-span-2"
                >
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 font-body text-sm text-gray-700 dark:text-gray-300">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-orange-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </ServiceOverviewCard>
              </div>

              <div className="mt-5 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/60">
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white">
                    Reference Image (Dummy)
                  </h3>
                  <span className="font-body text-xs text-gray-500 dark:text-gray-400">
                    Sample only
                  </span>
                </div>
                <div className="relative aspect-[16/7]">
                  <Image
                    src="/images/thumbnail.png"
                    alt="Sample reference"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg px-4 py-2 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-100 ui-motion ui-motion-fast hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Close
                </button>
              </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
    ,
    document.body
  );
}
