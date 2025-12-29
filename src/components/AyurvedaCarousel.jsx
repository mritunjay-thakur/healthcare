import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaYinYang,
  FaLeaf,
  FaMountain,
  FaClock,
  FaChevronLeft,
  FaChevronRight,
  FaPlay,
  FaPause,
} from "react-icons/fa";

const AyurvedaCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Yoga & Meditation",
      description:
        "Ancient practices for mind-body harmony, inner peace, and spiritual awakening through disciplined practice",
      theme: "yoga",
      color: "from-purple-500 to-indigo-600",
      icon: FaYinYang,
    },
    {
      id: 2,
      title: "Medicinal Herbs",
      description:
        "Powerful natural herbs with proven healing properties from the pristine Himalayan regions",
      theme: "herbs",
      color: "from-green-500 to-emerald-600",
      icon: FaLeaf,
    },
    {
      id: 3,
      title: "Nature Connection",
      description:
        "Healing through harmony with natural elements and understanding cosmic balance principles",
      theme: "nature",
      color: "from-blue-500 to-cyan-600",
      icon: FaMountain,
    },
    {
      id: 4,
      title: "Daily Rituals",
      description:
        "Ayurvedic routines and practices for balanced living and sustainable wellness",
      theme: "rituals",
      color: "from-orange-500 to-amber-600",
      icon: FaClock,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="ayurveda"
      className="section-padding bg-gradient-to-br from-ayurveda-cream to-green-50/30 relative overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-ayurveda-deep to-ayurveda-herbal text-white px-8 py-4 rounded-2xl mb-8 shadow-2xl"
          >
            <FaLeaf className="text-ayurveda-healing animate-pulse" />
            <span className="font-semibold text-lg">Ayurvedic Lifestyle</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-8 leading-tight">
            The Pillars of
            <span className="block text-ayurveda-herbal">Ayurvedic Living</span>
          </h2>
          <p className="text-xl md:text-2xl text-ayurveda-deep/70 max-w-4xl mx-auto leading-relaxed font-light">
            Discover the fundamental principles and practices that form the
            foundation of complete wellness in Ayurvedic tradition
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].color} flex items-center justify-center`}
            >
              <div className="text-center text-white p-8 max-w-4xl">
                {/* Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="inline-flex items-center justify-center w-24 h-24 bg-white/20 rounded-3xl mb-8 backdrop-blur-sm"
                >
                  {React.createElement(slides[currentSlide].icon, {
                    className: "text-4xl",
                  })}
                </motion.div>

                {/* Content */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                  className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto leading-relaxed font-light"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-6">
            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300"
            >
              {isAutoPlaying ? <FaPause /> : <FaPlay />}
            </motion.button>

            {/* Navigation Dots */}
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white hover:bg-white/30 transition-all duration-300 group"
          >
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-2xl p-4 text-white hover:bg-white/30 transition-all duration-300 group"
          >
            <FaChevronRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Additional Lifestyle Tips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          {[
            {
              icon: FaClock,
              title: "Daily Routine (Dinacharya)",
              desc: "Start your day with Ayurvedic rituals aligned with natural cycles for optimal energy and balance throughout the day",
            },
            {
              icon: FaLeaf,
              title: "Balanced Diet",
              desc: "Eat according to your body type and seasonal changes with emphasis on fresh, organic, and locally sourced ingredients",
            },
            {
              icon: FaYinYang,
              title: "Proper Sleep & Rest",
              desc: "Prioritize restorative sleep and mindful rest periods for cellular repair and emotional balance",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-3xl p-8 text-center group cursor-pointer"
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-ayurveda-deep to-ayurveda-herbal rounded-2xl mb-6 mx-auto shadow-lg"
              >
                {React.createElement(item.icon, {
                  className: "text-white text-2xl",
                })}
              </motion.div>
              <h4 className="text-2xl font-bold text-ayurveda-deep mb-4 group-hover:text-gradient transition-colors duration-300">
                {item.title}
              </h4>
              <p className="text-ayurveda-deep/70 leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AyurvedaCarousel;
