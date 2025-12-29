import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png"; // ✅ Adjusted import path

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Ayurveda", href: "#ayurveda" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-effect shadow-2xl" : "bg-green-600"
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* === Logo Section === */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-3"
          >
            <div className="relative w-12 h-12 rounded-2xl overflow-hidden shadow-lg border border-white/10 bg-white flex items-center justify-center">
              <img
                src={logo.src || logo}
                alt="Vaidyashree Logo"
                className="w-22 h-22 scale-150"
              />
            </div>

            {/* Brand Text */}
            <div>
              <h1
                className={`text-xl font-bold transition-colors ${
                  isScrolled ? "text-ayurveda-deep" : "text-white"
                }`}
              >
                Vaidyashree
              </h1>
              <p
                className={`text-xs transition-colors ${
                  isScrolled ? "text-ayurveda-herbal" : "text-white/80"
                }`}
              >
                Ayurvedic Healthcare
              </p>
            </div>
          </motion.div>

          {/* === Desktop Navigation === */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden group ${
                  isScrolled
                    ? "text-ayurveda-deep hover:text-ayurveda-herbal"
                    : "text-white hover:text-ayurveda-healing"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <motion.div
                  className={`absolute inset-0 rounded-full ${
                    isScrolled ? "bg-ayurveda-deep/10" : "bg-white/10"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                />
              </motion.a>
            ))}
          </div>

          {/* === Mobile Menu Button === */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={`lg:hidden p-3 rounded-2xl transition-colors ${
              isScrolled
                ? "text-ayurveda-deep bg-white/80"
                : "text-white bg-white/20"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <FaTimes className="text-lg" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <FaBars className="text-lg" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* === Mobile Navigation === */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`block px-6 py-4 rounded-2xl font-medium transition-all ${
                      isScrolled
                        ? "text-ayurveda-deep bg-white/80 hover:bg-white"
                        : "text-white bg-white/20 hover:bg-white/30"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;
