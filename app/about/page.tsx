import { Shield, Clock, Award, User } from "lucide-react";

export default function AboutPage() {
  const features = [
    {
      icon: Award,
      title: "Certified Expertise",
      description:
        "Industry-certified professionals delivering world-class electrical safety solutions",
    },
    {
      icon: Shield,
      title: "Pan-India Service",
      description:
        "Comprehensive nationwide coverage ensuring reliable service wherever you need us",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock technical assistance and emergency response for your peace of mind",
    },
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Page Header */}
      <section className="bg-white dark:bg-dark-bg border-b border-gray-200 dark:border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-gray-900 dark:text-white mb-6 animate-fade-down motion-reduce:animate-none">
            About Jagwin Enterprises LLP
          </h1>
          <p className="font-body text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto animate-fade-up motion-reduce:animate-none [animation-delay:120ms]">
            Leading the industry in electrical safety and power solutions since inception
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="font-slogan text-3xl md:text-4xl lg:text-5xl text-gray-800 dark:text-gray-100 mb-8">
              Electrifying{" "}
              <span className="text-primary font-bold">Safety</span>,
              <br className="sm:hidden" /> Illuminating{" "}
              <span className="text-primary font-bold">Protection</span>
            </p>
            <div className="max-w-3xl mx-auto space-y-4 font-body text-lg text-gray-700 dark:text-gray-300">
              <p>
                At Jagwin Enterprises LLP, we are committed to delivering
                comprehensive electrical safety and power solutions that protect
                your infrastructure and ensure uninterrupted operations.
              </p>
              <p>
                With a focus on industrial excellence and cutting-edge
                technology, we provide lightning protection, surge protection,
                earthing solutions, power backup systems, and renewable energy
                solutions tailored to your specific needs.
              </p>
              <p>
                Our dedication to quality, safety, and customer satisfaction has
                made us a trusted partner for businesses across India.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white dark:bg-dark-bg py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center text-gray-900 dark:text-white mb-12">
            Leadership
          </h2>

          <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Profile Image Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-primary to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                  <User className="w-16 h-16 text-white" />
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-heading font-bold text-2xl text-gray-900 dark:text-white mb-2">
                  Vishal Sharma
                </h3>
                <p className="font-body text-primary font-semibold text-lg mb-4">
                  Project Head
                </p>
                <p className="font-body text-gray-600 dark:text-gray-300 leading-relaxed">
                  Leading Jagwin Enterprises with a vision for excellence in
                  electrical safety and power solutions. With extensive
                  experience in project management and technical expertise,
                  Vishal ensures that every project meets the highest standards
                  of quality and reliability. His commitment to innovation and
                  customer satisfaction drives our team to deliver exceptional
                  results across all our service offerings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-3xl text-center text-gray-900 dark:text-white mb-12">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 active:translate-y-0 motion-reduce:transform-none motion-reduce:transition-none"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="font-body text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="font-body text-xl text-white/90 mb-8">
            Let's discuss how we can secure your electrical infrastructure
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-gray-100 text-primary font-body font-semibold text-lg rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none"
            >
              Get in Touch
            </a>
            <a
              href="tel:+917217674750"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-body font-semibold text-lg rounded-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] motion-reduce:transform-none motion-reduce:transition-none"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
