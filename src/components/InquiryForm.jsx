import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaUser,
  FaPhone,
  FaProductHunt,
  FaComment,
  FaPaperPlane,
  FaCheck,
  FaSpinner,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const InquiryForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    product: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const products = [
    "Height Growth",
    "Sexual Wellness",
    "Addiction Recovery",
    "Weight & Hairfall Control",
    "General Ayurvedic Consultation",
    "Customized Treatment Plan",
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", phone: "", product: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);

    // In production, integrate EmailJS here
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-ayurveda-deep"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FaEnvelope className="text-3xl" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-ayurveda-deep to-ayurveda-herbal text-white px-8 py-4 rounded-2xl mb-8 shadow-2xl"
          >
            <FaPaperPlane className="text-ayurveda-healing animate-pulse" />
            <span className="font-semibold text-lg">
              Personalized Consultation
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-8 leading-tight">
            Start Your Healing
            <span className="block text-ayurveda-herbal">Journey Today</span>
          </h2>
          <p className="text-xl md:text-2xl text-ayurveda-deep/70 max-w-4xl mx-auto leading-relaxed font-light">
            Consult with our Ayurvedic experts and begin your transformation
            towards natural, sustainable wellness
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="glass-card rounded-4xl p-8 md:p-12 shadow-2xl border border-white/40"
          >
            {isSubmitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl"
                >
                  <FaCheck className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-3xl md:text-4xl font-bold text-ayurveda-deep mb-6">
                  Thank You for Your Inquiry!
                </h3>
                <p className="text-xl text-ayurveda-deep/70 leading-relaxed max-w-2xl mx-auto">
                  Our Ayurvedic expert will contact you within 24 hours to
                  discuss your personalized wellness solution and guide you on
                  your healing journey.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 bg-gradient-to-r from-ayurveda-deep to-ayurveda-herbal text-white px-8 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Another Inquiry
                </motion.button>
              </motion.div>
            ) : (
              /* Form */
              <form
                id="inquiry-form"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <div className="space-y-4">
                    <label
                      htmlFor="name"
                      className="block text-ayurveda-deep font-semibold text-lg mb-3 flex items-center space-x-3"
                    >
                      <FaUser className="text-ayurveda-herbal" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-ayurveda-deep/20 focus:border-ayurveda-deep focus:ring-4 focus:ring-ayurveda-deep/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-4">
                    <label
                      htmlFor="phone"
                      className="block text-ayurveda-deep font-semibold text-lg mb-3 flex items-center space-x-3"
                    >
                      <FaPhone className="text-ayurveda-herbal" />
                      <span>Phone Number *</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl border-2 border-ayurveda-deep/20 focus:border-ayurveda-deep focus:ring-4 focus:ring-ayurveda-deep/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div className="space-y-4">
                  <label
                    htmlFor="product"
                    className="block text-ayurveda-deep font-semibold text-lg mb-3 flex items-center space-x-3"
                  >
                    <FaProductHunt className="text-ayurveda-herbal" />
                    <span>Product Interest *</span>
                  </label>
                  <select
                    id="product"
                    name="product"
                    required
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-ayurveda-deep/20 focus:border-ayurveda-deep focus:ring-4 focus:ring-ayurveda-deep/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg appearance-none"
                  >
                    <option value="">Select a product or service</option>
                    {products.map((product, index) => (
                      <option key={index} value={product}>
                        {product}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Field */}
                <div className="space-y-4">
                  <label
                    htmlFor="message"
                    className="block text-ayurveda-deep font-semibold text-lg mb-3 flex items-center space-x-3"
                  >
                    <FaComment className="text-ayurveda-herbal" />
                    <span>Message & Health Details</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-6 py-4 rounded-2xl border-2 border-ayurveda-deep/20 focus:border-ayurveda-deep focus:ring-4 focus:ring-ayurveda-deep/20 transition-all duration-300 bg-white/80 backdrop-blur-sm text-lg resize-none"
                    placeholder="Tell us about your health concerns, current conditions, lifestyle, and any specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{
                    scale: isSubmitting ? 1 : 1.02,
                    y: isSubmitting ? 0 : -2,
                  }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-5 rounded-2xl font-semibold text-xl transition-all duration-300 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-ayurveda-deep to-ayurveda-herbal hover:shadow-2xl"
                  } text-white shadow-xl relative overflow-hidden`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-3">
                      <FaSpinner className="animate-spin" />
                      <span>Processing Your Inquiry...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-3">
                      <span>Send Inquiry</span>
                      <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  )}
                </motion.button>

                <p className="text-center text-ayurveda-deep/60 text-lg">
                  Our Ayurvedic expert will contact you within 24 hours for a
                  detailed consultation
                </p>
              </form>
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: FaMapMarkerAlt,
                title: "Location",
                info: "Based in India",
                desc: "Pan-India delivery & worldwide shipping available",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: FaPhone,
                title: "Phone",
                info: "+91 XXXXX XXXXX",
                desc: "Mon-Sun, 9:00 AM - 7:00 PM",
                color: "from-green-500 to-emerald-500",
              },
              {
                icon: FaEnvelope,
                title: "Email",
                info: "info@vaidyashree.com",
                desc: "We reply within 24 hours",
                color: "from-purple-500 to-indigo-500",
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
                  className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl mb-6 mx-auto shadow-lg`}
                >
                  <item.icon className="text-white text-2xl" />
                </motion.div>
                <h4 className="text-2xl font-bold text-ayurveda-deep mb-3 group-hover:text-gradient transition-colors duration-300">
                  {item.title}
                </h4>
                <p className="text-ayurveda-deep font-medium mb-2 text-lg">
                  {item.info}
                </p>
                <p className="text-ayurveda-deep/70 text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;
