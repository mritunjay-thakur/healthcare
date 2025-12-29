import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHeart,
  FaShieldAlt,
  FaArrowDown,
  FaStar,
} from "react-icons/fa";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 hero-gradient">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#007A4D 1px, transparent 1px),
                             linear-gradient(90deg, #007A4D 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto"
        >
          {/* Company Name - Centered & Prominent */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="inline-block bg-gradient-to-r from-ayurveda-deep via-ayurveda-healing to-ayurveda-herbal p-1 rounded-3xl shadow-2xl">
              <div className="bg-white/95 backdrop-blur-sm px-12 py-6 rounded-2xl border border-white/40">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-ayurveda-deep to-ayurveda-herbal leading-tight">
                  Vaidyashree
                </h1>
                <div className="flex items-center justify-center space-x-4 mt-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ayurveda-deep to-transparent"></div>
                  <span className="text-ayurveda-deep font-light text-lg md:text-xl">
                    Healthcare
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-ayurveda-herbal to-transparent"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main Heading with Enhanced Typography */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-ayurveda-deep drop-shadow-sm">Balance</span>
            <br />
            <span className="text-gradient drop-shadow-sm">Your Life</span>
            <br />
            <span className="text-ayurveda-herbal drop-shadow-sm">
              Naturally
            </span>
          </motion.h2>

          {/* Enhanced Motto Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mb-12"
          >
            <h3 className="text-xl md:text-3xl lg:text-4xl font-light text-ayurveda-deep/80 mb-6 leading-relaxed">
              Where{" "}
              <span className="font-semibold text-ayurveda-healing">
                Ancient Ayurveda
              </span>{" "}
              Meets
              <span className="block font-semibold text-ayurveda-herbal">
                Modern Wellness Science
              </span>
            </h3>
            <p className="text-lg md:text-xl text-ayurveda-deep/60 max-w-4xl mx-auto leading-relaxed font-light">
              Experience the perfect harmony of 5,000-year-old healing
              traditions with contemporary health solutions crafted for your
              modern lifestyle
            </p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 20px 40px rgba(0, 122, 77, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProducts}
              className="group relative bg-gradient-to-r from-ayurveda-deep to-ayurveda-herbal text-white px-12 py-5 rounded-2xl font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Discover Ayurvedic Solutions</span>
                <FaLeaf className="transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-ayurveda-herbal to-ayurveda-deep opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/90 backdrop-blur-sm text-ayurveda-deep px-12 py-5 rounded-2xl font-semibold text-xl border-2 border-ayurveda-deep/20 hover:border-ayurveda-deep hover:shadow-2xl transition-all duration-300"
            >
              <span className="flex items-center space-x-3">
                <span>Book Consultation</span>
                <FaHeart className="text-ayurveda-healing transform group-hover:scale-110 transition-transform duration-300" />
              </span>
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              {
                number: "50+",
                label: "Years of Ayurvedic Excellence",
                icon: FaLeaf,
                delay: 0,
              },
              {
                number: "25K+",
                label: "Lives Transformed",
                icon: FaHeart,
                delay: 0.2,
              },
              {
                number: "100%",
                label: "Natural & Authentic",
                icon: FaShieldAlt,
                delay: 0.4,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: stat.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-card p-8 rounded-3xl text-center group cursor-pointer relative overflow-hidden"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ayurveda-deep to-ayurveda-herbal rounded-2xl mb-6 mx-auto shadow-lg"
                >
                  <stat.icon className="text-white text-2xl" />
                </motion.div>
                <div className="text-4xl font-bold text-ayurveda-deep mb-3 group-hover:text-gradient transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-ayurveda-deep/70 font-medium text-lg">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center space-y-3 text-ayurveda-deep/60 cursor-pointer"
          onClick={scrollToProducts}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-8 h-12 border-2 border-ayurveda-deep/30 rounded-full flex justify-center"
          >
            <FaArrowDown className="text-ayurveda-deep/50 mt-3 animate-bounce" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
