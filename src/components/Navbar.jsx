import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#sobre" },
  { label: "Skills", href: "#skills" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 px-8 py-3 flex items-center justify-center"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
    >
      <motion.span
        className="absolute left-24 text-white font-extrabold text-xl tracking-tight select-none"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        GSC dev
      </motion.span>
      <motion.ul
        className="flex gap-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.7,
            },
          },
        }}
      >
        {navLinks.map((link) => (
          <motion.li
            key={link.label}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4 }}
          >
            <a
              href={link.href}
              className="text-white font-bold text-lg hover:text-white/80 transition-colors duration-200 px-1 border-b-2 border-transparent hover:border-blue-500"
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </motion.nav>
  );
}
