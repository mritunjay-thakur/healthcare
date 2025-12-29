import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaHeart,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Ayurveda", href: "#about" },
    { name: "Our Products", href: "#products" },
    { name: "Ayurvedic Lifestyle", href: "#ayurveda" },
    { name: "Contact Us", href: "#contact" },
  ];

  const products = [
    "Height Growth Solutions",
    "Sexual Wellness",
    "Addiction Recovery",
    "Weight Management",
    "Hairfall Control",
    "Customized Plans",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: FaFacebookF,
      url: "#",
      color: "hover:bg-blue-600",
    },
    { name: "Twitter", icon: FaTwitter, url: "#", color: "hover:bg-blue-400" },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
      color: "hover:bg-pink-600",
    },
    {
      name: "LinkedIn",
      icon: FaLinkedinIn,
      url: "#",
      color: "hover:bg-blue-700",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-ayurveda-deep via-ayurveda-deep to-ayurveda-herbal text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FaLeaf className="text-2xl" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="relative">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                  <FaLeaf className="text-ayurveda-deep text-2xl" />
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -inset-2 border-2 border-ayurveda-healing/50 rounded-2xl"
                ></motion.div>
              </div>
              <div>
                <h1 className="text-3xl font-bold">Vaidyashree</h1>
                <p className="text-ayurveda-healing font-semibold">
                  Ayurvedic Healthcare
                </p>
              </div>
            </motion.div>

            <p className="text-white/80 leading-relaxed mb-8 text-lg font-light">
              Harnessing the ancient wisdom of Ayurveda to provide natural,
              holistic healing solutions for modern health challenges.
              Transforming lives through authentic Ayurvedic practices since
              1970.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-white hover:text-white transition-all duration-300 backdrop-blur-sm ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
              <FaArrowRight className="text-ayurveda-healing" />
              <span>Quick Links</span>
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.href}
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-ayurveda-healing transition-all duration-300 flex items-center space-x-3 text-lg font-light group"
                  >
                    <FaLeaf className="text-ayurveda-healing/60 group-hover:text-ayurveda-healing text-sm" />
                    <span>{link.name}</span>
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
              <FaHeart className="text-ayurveda-healing" />
              <span>Our Products</span>
            </h3>
            <ul className="space-y-4">
              {products.map((product, index) => (
                <li key={index}>
                  <motion.span
                    whileHover={{ x: 5 }}
                    className="text-white/80 hover:text-ayurveda-healing transition-all duration-300 flex items-center space-x-3 text-lg font-light group cursor-pointer"
                  >
                    <FaLeaf className="text-ayurveda-healing/60 group-hover:text-ayurveda-healing text-sm" />
                    <span>{product}</span>
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
              <FaMapMarkerAlt className="text-ayurveda-healing" />
              <span>Contact Info</span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-ayurveda-healing mt-1 text-lg" />
                <div>
                  <p className="font-semibold text-lg">Based in India</p>
                  <p className="text-white/80 text-lg font-light">
                    Pan-India delivery available
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-ayurveda-healing text-lg" />
                <div>
                  <p className="font-semibold text-lg">+91 XXXXX XXXXX</p>
                  <p className="text-white/80 text-lg font-light">
                    Mon-Sun, 9AM-7PM
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-ayurveda-healing text-lg" />
                <div>
                  <p className="font-semibold text-lg">info@vaidyashree.com</p>
                  <p className="text-white/80 text-lg font-light">
                    We reply within 24 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="mt-8">
              <h4 className="font-semibold mb-4 text-lg">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-ayurveda-healing"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-ayurveda-healing text-ayurveda-deep px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Join
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/20 pt-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-white/70 text-lg">
                © {currentYear} Vaidyashree Healthcare. All rights reserved.
              </p>
              <p className="text-white/60 text-sm mt-2">
                Made with <FaHeart className="inline text-ayurveda-healing" />{" "}
                for natural healing and wellness
              </p>
            </div>
            <div className="flex space-x-8 text-sm text-white/70">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, color: "#F9B000" }}
                className="hover:text-ayurveda-healing transition-colors text-lg font-light"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, color: "#F9B000" }}
                className="hover:text-ayurveda-healing transition-colors text-lg font-light"
              >
                Terms of Service
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05, color: "#F9B000" }}
                className="hover:text-ayurveda-healing transition-colors text-lg font-light"
              >
                Disclaimer
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
