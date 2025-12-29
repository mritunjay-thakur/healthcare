import React from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaUserMd,
  FaLeaf,
  FaHeart,
  FaShieldAlt,
  FaStar,
  FaSeedling,
} from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const features = [
    {
      icon: FaSeedling,
      title: "Pure Natural Ingredients",
      description:
        "100% organic herbs sourced from pristine Himalayan environments and certified organic farms",
    },
    {
      icon: FaUserMd,
      title: "Personalized Approach",
      description:
        "Customized medicine based on age, weight, gender, constitution, and specific health conditions",
    },
    {
      icon: FaHeart,
      title: "Holistic Healing",
      description:
        "Comprehensive treatment addressing mind, body, and spirit for complete wellness transformation",
    },
    {
      icon: FaShieldAlt,
      title: "Ancient Wisdom",
      description:
        "Authentic 5,000-year-old Ayurvedic knowledge combined with modern scientific validation",
    },
  ];

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
      id="about"
      ref={ref}
      className="section-padding bg-white/50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-ayurveda-deep"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
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
              The Ayurvedic Difference
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-8 leading-tight">
            Healing Through
            <span className="block text-ayurveda-herbal">Perfect Balance</span>
          </h2>
          <p className="text-xl md:text-2xl text-ayurveda-deep/70 max-w-4xl mx-auto leading-relaxed font-light">
            Ayurveda teaches us that true health is the perfect balance between
            mind, body, and consciousness. Discover the timeless wisdom that has
            healed generations with natural, sustainable solutions.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
              className="glass-card rounded-3xl p-8 text-center group cursor-pointer relative overflow-hidden"
            >
              {/* Hover Effect Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-ayurveda-deep/5 to-ayurveda-herbal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />

              {/* Animated Icon */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-ayurveda-deep to-ayurveda-herbal rounded-3xl mb-6 mx-auto shadow-2xl group-hover:shadow-3xl transition-all duration-300"
              >
                <feature.icon className="text-white text-3xl" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-ayurveda-deep mb-4 group-hover:text-gradient transition-colors duration-300 leading-tight">
                {feature.title}
              </h3>

              <p className="text-ayurveda-deep/70 leading-relaxed font-light text-lg">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card rounded-4xl p-12 md:p-16 relative overflow-hidden"
        >
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-ayurveda-healing/10 to-ayurveda-herbal/10 rounded-full -translate-y-48 translate-x-48"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-ayurveda-deep/10 to-ayurveda-herbal/10 rounded-full translate-y-32 -translate-x-32"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-ayurveda-deep mb-12 leading-tight"
            >
              Your Personalized
              <span className="block text-gradient">Ayurvedic Journey</span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-ayurveda-deep/80 leading-relaxed mb-12 font-light max-w-5xl mx-auto"
            >
              At Vaidyashree Healthcare, we honor your uniqueness. Our
              experienced practitioners craft bespoke treatment plans by
              analyzing your specific constitution (Prakriti), lifestyle
              factors, and health goals to deliver truly transformative healing
              experiences that restore balance and vitality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              {[
                "Age",
                "Weight",
                "Gender",
                "Condition",
                "Lifestyle",
                "Constitution",
                "Diet",
                "Environment",
                "Metabolism",
                "Goals",
              ].map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="bg-gradient-to-r from-ayurveda-deep to-ayurveda-herbal text-white px-6 py-3 rounded-2xl text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center space-x-2"
                >
                  <FaStar className="text-ayurveda-healing text-sm" />
                  <span>{item}</span>
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
