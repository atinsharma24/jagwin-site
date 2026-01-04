"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import type { FallbackKey, Service } from "@/lib/services";
import { FALLBACK_IMAGES } from "@/lib/services";

const REVEAL_DELAY_CLASSES = [
  "[transition-delay:0ms]",
  "[transition-delay:35ms]",
  "[transition-delay:70ms]",
  "[transition-delay:105ms]",
  "[transition-delay:140ms]",
  "[transition-delay:175ms]",
  "[transition-delay:210ms]",
  "[transition-delay:245ms]",
  "[transition-delay:280ms]",
  "[transition-delay:315ms]",
  "[transition-delay:350ms]",
  "[transition-delay:385ms]",
] as const;

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
  const revealClassName = index % 2 === 0 ? "reveal-right" : "reveal-left";
  const delayClassName =
    REVEAL_DELAY_CLASSES[index] ??
    REVEAL_DELAY_CLASSES[REVEAL_DELAY_CLASSES.length - 1];

  return (
    <motion.button
      type="button"
      layoutId={`service-card-${service.id}`}
      onClick={() => onOpen(service)}
      aria-label={`Open ${service.title} details`}
      className={`${revealClassName} ${delayClassName} group text-left bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md ui-motion hover:-translate-y-1 hover:shadow-xl hover:border-orange-200 motion-reduce:transform-none focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400/60 ${
        selected ? "opacity-0 pointer-events-none" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 ui-motion ui-motion-slow"
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
