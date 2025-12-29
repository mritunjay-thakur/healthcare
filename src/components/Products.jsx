import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaRulerVertical,
  FaHeartbeat,
  FaSync,
  FaWeight,
  FaLeaf,
  FaArrowRight,
  FaStar,
} from "react-icons/fa";

const Products = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const products = [
    {
      id: 1,
      name: "Height Growth",
      description:
        "Natural Ayurvedic formulation to support healthy growth and optimal bone development through pure herbal extracts",
      benefits: [
        "Supports bone density & health",
        "Enhances natural growth hormones",
        "Improves nutrition absorption",
      ],
      icon: FaRulerVertical,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: 2,
      name: "Sexual Wellness",
      description:
        "Holistic approach to improve vitality, stamina, and reproductive health using ancient Ayurvedic principles",
      benefits: [
        "Enhances vitality & energy",
        "Improves stamina & endurance",
        "Supports reproductive system health",
      ],
      icon: FaHeartbeat,
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 3,
      name: "Addiction Recovery",
      description:
        "Gentle detoxification and comprehensive support system for overcoming dependencies naturally",
      benefits: [
        "Reduces cravings & withdrawal",
        "Supports body detoxification",
        "Calms nervous system",
      ],
      icon: FaSync,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: 4,
      name: "Weight & Hairfall Control",
      description:
        "Dual-action Ayurvedic formula for healthy weight management and stronger, thicker hair growth",
      benefits: [
        "Boosts metabolism naturally",
        "Reduces hair fall significantly",
        "Improves hair texture & volume",
      ],
      icon: FaWeight,
      color: "from-green-500 to-emerald-600",
    },
  ];

  const scrollToInquiry = (productName) => {
    document
      .getElementById("inquiry-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="products"
      ref={ref}
      className="section-padding bg-gradient-to-b from-white to-ayurveda-cream/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-ayurveda-deep"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <FaLeaf className="text-3xl" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-ayurveda-deep to-ayurveda-herbal text-white px-8 py-4 rounded-2xl mb-8 shadow-2xl"
          >
            <FaStar className="text-ayurveda-healing animate-pulse" />
            <span className="font-semibold text-lg">
              Ayurvedic Formulations
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-8 leading-tight">
            Natural Solutions for
            <span className="block text-ayurveda-herbal">
              Modern Challenges
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-ayurveda-deep/70 max-w-4xl mx-auto leading-relaxed font-light">
            Carefully crafted Ayurvedic remedies that address contemporary
            health concerns with the timeless wisdom of natural healing
            traditions
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
              className="glass-card rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 border border-white/40 group cursor-pointer"
            >
              {/* Product Header with Gradient */}
              <div className={`h-3 bg-gradient-to-r ${product.color}`}></div>

              <div className="p-8">
                {/* Header Section */}
                <div className="flex items-start justify-between mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ayurveda-deep to-ayurveda-herbal rounded-2xl shadow-lg"
                  >
                    <product.icon className="text-white text-2xl" />
                  </motion.div>
                  <div className="w-14 h-14 bg-gradient-to-br from-ayurveda-healing to-amber-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">Ayur</span>
                  </div>
                </div>

                {/* Product Title */}
                <h3 className="text-3xl font-bold text-ayurveda-deep mb-4 group-hover:text-gradient transition-colors duration-300 leading-tight">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-lg text-ayurveda-deep/80 mb-8 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Benefits Section */}
                <div className="mb-8">
                  <h4 className="font-semibold text-ayurveda-deep mb-4 text-lg flex items-center space-x-2">
                    <FaStar className="text-ayurveda-healing" />
                    <span>Key Benefits:</span>
                  </h4>
                  <ul className="space-y-3">
                    {product.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-ayurveda-deep/80 text-lg"
                      >
                        <span className="w-3 h-3 bg-ayurveda-healing rounded-full mr-4 flex-shrink-0"></span>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToInquiry(product.name)}
                  className="w-full bg-gradient-to-r from-ayurveda-deep to-ayurveda-herbal text-white py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group/btn"
                >
                  <span>Order Now</span>
                  <FaArrowRight className="transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quality Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <div className="glass-card rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-ayurveda-deep mb-6">
              Premium Quality Assurance
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-ayurveda-deep/80">
              {[
                { text: "100% Natural & Organic Ingredients", icon: FaLeaf },
                { text: "Traditional Preparation Methods", icon: FaStar },
                { text: "Third-Party Tested & Verified", icon: FaHeartbeat },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center space-x-3 p-4 rounded-2xl bg-white/50"
                >
                  <item.icon className="text-ayurveda-herbal text-xl" />
                  <span className="font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
