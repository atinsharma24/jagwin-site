import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80"
            alt="Electrical Infrastructure"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline */}
          <h1 className="font-heading font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Complete Electrical Safety & Power Solutions
          </h1>

          {/* Slogan with Orange Accents */}
          <p className="font-slogan text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-12">
            Electrifying{" "}
            <span className="text-primary font-bold">Safety</span>{" "}
            Illuminating{" "}
            <span className="text-primary font-bold">Protection</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-orange-600 text-white font-body font-semibold text-lg rounded-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-body font-semibold text-lg rounded-lg transition-all transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
