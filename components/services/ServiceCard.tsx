"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import type { FallbackKey, Service } from "@/lib/services";
import { FALLBACK_IMAGES } from "@/lib/services";

export default function ServiceCard({
  service,
  index,
  selected,
  onOpen,
}: {
  service: Service;
  index: number;
  selected: boolean;
  onOpen: (service: Service) => void;
}) {
  const [src, setSrc] = useState(service.image);
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.button
      type="button"
      layoutId={`service-card-${service.id}`}
      onClick={() => onOpen(service)}
      aria-label={`Open ${service.title} details`}
      initial={
        shouldReduceMotion
          ? { opacity: 0 }
          : { opacity: 0, scale: 0.95, y: 20 }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, scale: 1, y: 0 }
      }
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className={`group text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md ui-motion hover:-translate-y-1 hover:shadow-xl hover:border-orange-200 motion-reduce:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 ${
        selected ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out motion-reduce:transition-none"
          onError={() => setSrc(FALLBACK_IMAGES[service.fallbackKey as FallbackKey])}
        />
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
    </motion.button>
  );
}
