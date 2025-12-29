import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp, FaTimes, FaComment } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  const handleWhatsAppClick = () => {
    const phoneNumber = "8383844605";
    const message =
      "Hello! I would like to know more about Vaidyashree Healthcare Ayurvedic products and consultation.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, duration: 0.5, type: "spring" }}
      className="fixed bottom-8 right-8 z-50"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Main WhatsApp Button */}
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="relative bg-green-500 text-white p-5 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group"
        title="Chat with us on WhatsApp"
      >
        <div className="relative">
          <FaWhatsapp className="w-8 h-8" />

          {/* Pulsing Effect */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-green-500 rounded-2xl -z-10"
          />
        </div>

        {/* Notification Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 3 }}
          className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center shadow-lg"
        >
          1
        </motion.div>
      </motion.button>

      {/* Enhanced Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="absolute right-20 top-1/2 transform -translate-y-1/2"
          ></motion.div>
        )}
      </AnimatePresence>

      {/* Hover Expanded Info */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-2xl whitespace-nowrap pointer-events-none"
          >
            <div className="text-xs text-gray-600 mt-1">
              Get personalized advice now
            </div>
            <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-white rotate-45"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default WhatsAppButton;
