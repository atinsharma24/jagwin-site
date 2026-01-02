"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Lightning Protection System",
    "Surge Protection Device",
    "Chemical Earthing Solution",
    "Online UPS",
    "Servo Stabilizer",
    "Lithium Ion Batteries",
    "Solar EPC & BOS",
    "Power Quality Audit",
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

  return (
    <div className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Page Header */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-4 animate-fade-down motion-reduce:animate-none">
            Contact Us
          </h1>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up motion-reduce:animate-none [animation-delay:120ms]">
            Have a project in mind? Get in touch with our expert team today
          </p>
        </div>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-heading font-bold text-3xl text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="font-body text-gray-600 dark:text-gray-300 mb-8">
                We're here to answer your questions and discuss your electrical
                safety and power solution needs.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:+917217674750"
                className="flex items-start space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-1">
                    Phone
                  </h3>
                  <p className="font-body text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">
                    +91 7217674750
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@jagwin.in"
                className="flex items-start space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none group"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <p className="font-body text-gray-600 dark:text-gray-300 group-hover:text-primary transition-colors">
                    info@jagwin.in
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start space-x-4 p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-gray-900 dark:text-white mb-1">
                    Office Address
                  </h3>
                  <p className="font-body text-gray-600 dark:text-gray-300">
                    A-401, 4th Floor, Plot No.1,
                    <br />
                    Shakti Khand-2, Indirapuram,
                    <br />
                    Ghaziabad - 201014 (UP)
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-md">
              <div className="w-full h-64 bg-slate-200 dark:bg-gray-700 shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-500 dark:text-gray-400 mx-auto mb-2" />
                  <p className="font-body text-gray-600 dark:text-gray-300">
                    Map: Indirapuram, Ghaziabad
                  </p>
                  <p className="font-body text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Google Maps embed placeholder
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Inquiry Form */}
          <div>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8">
              <h2 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-6">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body font-semibold text-gray-700 dark:text-gray-300 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white dark:bg-gray-700 text-slate-900 dark:text-white font-body transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block font-body font-semibold text-gray-700 dark:text-gray-300 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white dark:bg-gray-700 text-slate-900 dark:text-white font-body transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body font-semibold text-gray-700 dark:text-gray-300 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white dark:bg-gray-700 text-slate-900 dark:text-white font-body transition-all"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label
                    htmlFor="service"
                    className="block font-body font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Service Interested In *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white dark:bg-gray-700 text-slate-900 dark:text-white font-body transition-all"
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
                    className="block font-body font-semibold text-gray-700 dark:text-gray-300 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50 focus:bg-white dark:bg-gray-700 text-slate-900 dark:text-white font-body transition-all resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-orange-600 text-white font-body font-semibold py-4 px-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
