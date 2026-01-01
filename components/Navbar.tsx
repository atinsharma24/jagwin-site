"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Moon, Sun, Phone, Menu, X } from "lucide-react";

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }

    // Handle scroll effect
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md shadow-lg border-b border-slate-200 dark:border-gray-700"
          : "bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md border-b border-slate-200 dark:border-gray-700"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <span className="text-white font-heading font-bold text-xl">JE</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-bold text-gray-900 dark:text-white">
                Jagwin Enterprises
              </span>
              <span className="block text-xs text-gray-600 dark:text-gray-400 font-body">
                LLP
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Right Side: Dark Mode Toggle + Call Button */}
          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* Call Now Button - Desktop */}
            <a
              href="tel:+917217674750"
              className="hidden md:flex items-center space-x-2 bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-body font-semibold transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t dark:border-gray-700 mt-2">
            <div className="flex flex-col space-y-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-body text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors px-2 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+917217674750"
                className="flex items-center justify-center space-x-2 bg-primary hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-body font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
