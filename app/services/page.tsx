import Link from "next/link";
import Image from "next/image";
import { Handshake } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Lightning Protection System",
      image: "/images/lightning.jpg",
      description: "Advanced lightning protection for complete facility safety",
    },
    {
      id: 2,
      title: "Surge Protection Device",
      image: "/images/surge.jpg",
      description: "Protect your equipment from voltage surges and spikes",
    },
    {
      id: 3,
      title: "Chemical Earthing Solution",
      image: "/images/earthing.jpg",
      description: "Low resistance earthing systems for optimal safety",
    },
    {
      id: 4,
      title: "Online UPS",
      image: "/images/ups.jpg",
      description: "Uninterrupted power supply for critical operations",
    },
    {
      id: 5,
      title: "Servo Stabilizer",
      image: "/images/servo.jpg",
      description: "Voltage regulation for sensitive equipment protection",
    },
    {
      id: 6,
      title: "Lithium Ion Batteries",
      image: "/images/battery.jpg",
      description: "High-efficiency energy storage solutions",
    },
    {
      id: 7,
      title: "Solar EPC & BOS",
      image: "/images/solar.jpg",
      description: "Complete solar engineering, procurement & construction",
    },
    {
      id: 8,
      title: "Power Quality Audit",
      image: "/images/audit.jpg",
      description: "Comprehensive power system analysis and optimization",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Page Header */}
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

      {/* Services Grid - 3x3 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Service Cards (1-8) */}
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:scale-105"
            >
              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Orange Title Bar */}
              <div className="bg-primary p-4">
                <h3 className="font-heading font-bold text-white text-lg text-center">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="p-4">
                <p className="font-body text-gray-600 dark:text-gray-300 text-sm text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

          {/* CTA Card - 9th Item */}
          <Link
            href="/contact"
            className="group bg-primary rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center p-12 min-h-[300px]"
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
