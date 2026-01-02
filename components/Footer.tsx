import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Lightning Protection System",
    "Surge Protection Device",
    "Chemical Earthing Solution",
    "Online UPS",
    "Servo Stabilizer",
    "Lithium Ion Batteries",
  ];

  return (
    <footer className="bg-brand-paper dark:bg-black text-brand-ink/70 dark:text-gray-300 border-t border-brand-line/30 dark:border-gray-800">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="inline-block bg-white/95 px-3 py-2 rounded-md shadow-sm">
                <Image
                  src="/images/logo.png"
                  alt="Jagwin Enterprises LLP"
                  width={140}
                  height={56}
                  className="h-14 w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-brand-ink/60 font-body mb-4">
              Complete Electrical Safety & Power Solutions for Industrial and Commercial Applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-brand-ink dark:text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex text-sm font-body text-brand-ink/60 hover:text-primary transition-all duration-300 hover:translate-x-1 motion-reduce:transform-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-brand-ink dark:text-white font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-sm font-body text-brand-ink/60">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-brand-ink dark:text-white font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a
                href="tel:+917217674750"
                className="flex items-start space-x-3 text-sm font-body text-brand-ink/60 hover:text-primary transition-all duration-300 group"
              >
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                <span>+91 7217674750</span>
              </a>

              <a
                href="mailto:jagwin.ent@gmail.com"
                className="flex items-start space-x-3 text-sm font-body text-brand-ink/60 hover:text-primary transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:text-primary" />
                <span>jagwin.ent@gmail.com</span>
              </a>

              <div className="flex items-start space-x-3 text-sm font-body text-brand-ink/60">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                <span>
                  A-401, 4th Floor, Plot No.1,
                  <br />
                  Shakti Khand-2, Indirapuram,
                  <br />
                  Ghaziabad - 201014 (UP)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slogan Strip - Orange Background */}
      <div className="bg-primary py-4 border-t border-brand-line/30 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center font-slogan text-xl sm:text-2xl text-white">
            Electrifying{" "}
            <span className="font-bold text-white">Safety</span>{" "}
            Illuminating{" "}
            <span className="font-bold text-white">Protection</span>
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-white dark:bg-black border-t border-brand-line/30 dark:border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-body text-brand-ink/60">
            © {new Date().getFullYear()} Jagwin Enterprises LLP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
