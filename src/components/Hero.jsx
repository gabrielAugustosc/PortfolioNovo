import React from "react";
import { Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black z-0 border-b-8 border-black">
      {/* Partículas de fundo */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <ParticlesBackground />
      </div>
      <motion.h1
        className="text-white text-4xl md:text-5xl font-extrabold text-center mb-8 font-sans relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Estudante de Sistema de informação
      </motion.h1>
      <motion.div
        className="flex gap-8 mt-2 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <motion.button
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border-2 border-white/30 text-white shadow-lg transition focus:outline-none group relative overflow-visible"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="absolute inset-0 rounded-full pointer-events-none group-hover:ring-4 group-hover:ring-[#2791D3] group-hover:ring-opacity-60 transition-all duration-300"></span>
            <Linkedin size={28} strokeWidth={2.2} />
          </motion.button>
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <motion.button
            className="flex items-center justify-center w-14 h-14 rounded-full bg-white/10 border-2 border-white/30 text-white shadow-lg transition focus:outline-none group relative overflow-visible"
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="absolute inset-0 rounded-full pointer-events-none group-hover:ring-4 group-hover:ring-[#2791D3] group-hover:ring-opacity-60 transition-all duration-300"></span>
            <Github size={28} strokeWidth={2.2} />
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}
