"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full h-screen min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient with metallic effect */}
      <div className="absolute inset-0 bg-gradient-industrial z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/40 to-slate-950 z-10" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-20 container mx-auto max-w-5xl px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-6 inline-block"
        >
          <div className="px-4 py-2 border border-primary-600/50 rounded-full bg-primary-600/10 backdrop-blur-sm">
            <p className="text-xs font-sans uppercase tracking-widest text-primary-300">
              ✨ Premium Rare Earth Solutions
            </p>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 text-slate-100"
        >
          Kaytherix <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Industries</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl text-slate-300 mb-8 font-sans font-light max-w-3xl mx-auto"
        >
          Global refiner and manufacturer of rare earth elements, strategic metals, and advanced industrial materials
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-base md:text-lg font-sans mb-12 max-w-2xl mx-auto"
        >
          High-purity processing | Scientific precision | Industrial expertise | Global export capability
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
        >
          <button className="px-8 py-4 bg-primary-600 text-slate-950 font-sans font-semibold rounded hover:bg-primary-500 transition-all duration-300 hover:shadow-glow-teal">
            Request Technical Datasheet
          </button>
          <button className="px-8 py-4 border border-primary-600 text-primary-600 font-sans font-semibold rounded hover:bg-primary-600/10 transition-all duration-300">
            Submit RFQ
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-600 rounded-full flex items-center justify-center">
          <motion.div
            className="w-1 h-2 bg-primary-600 rounded-full"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
