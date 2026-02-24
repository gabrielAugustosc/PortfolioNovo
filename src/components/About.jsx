import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/Gemini_Generated_Image_24huit24huit24hu.png";

export default function About() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 px-4 relative z-20 bg-black">
      <motion.div
        className="max-w-6xl w-full rounded-2xl shadow-2xl flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-16 p-8 md:p-12 mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Foto */}
        <motion.div
          className="flex-shrink-0 flex justify-center items-center w-full md:w-auto"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            src={profileImg}
            alt="Foto de perfil"
            className="w-[340px] h-[440px] object-cover rounded-3xl border border-white/20 shadow-md"
          />
        </motion.div>
        {/* Conteúdo + Cards */}
        <motion.div
          className="flex-1 flex flex-col justify-center items-center md:items-start h-full"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Sobre Mim
          </motion.h2>
          <motion.p
            className="text-white/90 text-base md:text-lg mb-6 max-w-xl text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Olá! Sou o Gabriel, tenho 20 anos e sou apaixonado por tecnologia e resolução de problemas. Atualmente no 5º semestre de Sistemas de Informação na FIAP, tenho focado meus estudos e projetos na área de desenvolvimento Back-end. Possuo experiência prática com Java, Node.js e bancos de dados SQL, além de construir interfaces com React, TypeScript e Tailwind CSS. Meu objetivo é sempre criar soluções eficientes e seguras, seja em projetos acadêmicos estruturando plataformas corporativas, ou atuando como freelancer desenvolvendo sites profissionais.
          </motion.p>
          {/* Cards de informações */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="bg-[#232323] border border-white/20 rounded-lg px-5 py-3 flex flex-col">
              <span className="text-white font-bold">Nome:</span>
              <span className="text-white/80 text-sm">Gabriel Augusto</span>
            </div>
            <div className="bg-[#232323] border border-white/20 rounded-lg px-5 py-3 flex flex-col">
              <span className="text-white font-bold">Faculdade:</span>
              <span className="text-white/80 text-sm">
                Sistema de informação
              </span>
            </div>
            <div className="bg-[#232323] border border-white/20 rounded-lg px-5 py-3 flex flex-col">
              <span className="text-white font-bold">Curso:</span>
              <span className="text-white/80 text-sm">
                Sistema de informação
              </span>
            </div>
            <div className="bg-[#232323] border border-white/20 rounded-lg px-5 py-3 flex flex-col">
              <span className="text-white font-bold">Localização:</span>
              <span className="text-white/80 text-sm">São Paulo - SP</span>
            </div>
            <div className="bg-[#232323] border border-white/20 rounded-lg px-5 py-3 flex flex-col">
              <span className="text-white font-bold">Aniversário:</span>
              <span className="text-white/80 text-sm">30/08/2005</span>
            </div>
            <div className="bg-[#232323] border border-white/20 rounded-lg px-5 py-3 flex flex-col">
              <span className="text-white font-bold">Email:</span>
              <span className="text-white/80 text-sm break-all">
                gabrielsilvacavalcante2005@gmail.com
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* Botão de download do CV */}
      <motion.a
        href="/cv.pdf" // Altere para o caminho real do seu CV
        download
        className="mt-8 inline-block px-10 py-3 rounded-full border-2 border-white text-white font-extrabold text-2xl shadow-lg bg-[#232323] hover:bg-white hover:text-[#232323] transition-colors duration-200 mx-auto"
        style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.25)" }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Download CV
      </motion.a>
    </section>
  );
}
