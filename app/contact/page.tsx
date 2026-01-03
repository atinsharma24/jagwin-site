"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import RippleButton from "@/components/RippleButton";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Lightning Protection System (LPS)",
    "Surge Protection Devices (SPD)",
    "Chemical Earthing Solutions",
    "Online UPS & SMF Batteries",
    "Servo Stabilizers",
    "Lithium Ion Batteries",
    "Solar EPC & BOS Kit",
    "Power Quality Audit (PQA)",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will go here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <div className="pt-20 min-h-screen bg-brand-paper dark:bg-gray-900">
      {/* Page Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-brand-ink dark:text-white mb-4 animate-fade-down motion-reduce:animate-none">
            Contact Us
          </h1>
          <p className="font-body text-lg text-brand-ink/70 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up motion-reduce:animate-none [animation-delay:120ms]">
            Have a project in mind? Get in touch with our expert team today
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="reveal-left space-y-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-brand-ink dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="font-body text-brand-ink/70 dark:text-gray-300 mb-8">
                We're here to answer your questions and discuss your electrical
                safety and power solution needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+917217674750"
                className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-brand-line/30 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-brand-ink dark:text-white mb-1">
                    Phone
                  </h3>
                  <p className="font-body text-brand-ink/70 dark:text-gray-300 group-hover:text-primary transition-colors">
                    +91 7217674750
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@jagwin.in"
                className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-brand-line/30 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-brand-ink dark:text-white mb-1">
                    Email
                  </h3>
                  <p className="font-body text-brand-ink/70 dark:text-gray-300 group-hover:text-primary transition-colors">
                    info@jagwin.in
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-gray-800 border-2 border-brand-line/30 dark:border-gray-700 shadow-sm">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-brand-ink dark:text-white mb-1">
                    Office Address
                  </h3>
                  <p className="font-body text-brand-ink/70 dark:text-gray-300">
                    A-401, 4th Floor, Plot No.1,
                    <br />
                    Shakti Khand-2, Indirapuram,
                    <br />
                    Ghaziabad - 201014 (UP)
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <div className="w-full h-64">
                <iframe
                  title="Jagwin Enterprises LLP location map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6692.84493977525!2d77.36575109255958!3d28.646722002627715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfaaf1f649f11%3A0x4d7579e4b7debb7!2sShakti%20Khand%202%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e1!3m2!1sen!2sin!4v1767326177460!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Inquiry Form */}
          <div className="reveal-right">
            <div className="bg-white dark:bg-gray-800 border-2 border-brand-line/30 dark:border-gray-700 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8">
              <h2 className="font-heading font-bold text-2xl text-brand-ink dark:text-white mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body font-semibold text-brand-ink/80 dark:text-gray-300 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-line/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-brand-ink dark:text-white font-body transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-body font-semibold text-brand-ink/80 dark:text-gray-300 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-line/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-brand-ink dark:text-white font-body transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body font-semibold text-brand-ink/80 dark:text-gray-300 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-line/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-brand-ink dark:text-white font-body transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label
                    htmlFor="service"
                    className="block font-body font-semibold text-brand-ink/80 dark:text-gray-300 mb-2"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-line/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-brand-ink dark:text-white font-body transition-all"
                  >
                    <option value="">Select a service...</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block font-body font-semibold text-brand-ink/80 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-brand-line/40 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-700 text-brand-ink dark:text-white font-body transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit Button */}
                <RippleButton type="submit">
                  Send Message
                </RippleButton>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
