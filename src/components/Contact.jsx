import { Mail, Linkedin, Instagram, Github, Twitter, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-black text-white relative min-h-screen py-16 px-4">
      <div className="w-full">
        <motion.div
          className="mb-10 pl-8 md:pl-12"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold mb-2 text-center">
            Fale Comigo
          </h2>
          <p className="text-lg text-white/70 text-center">
            Estou sempre aberto a novas oportunidades e parcerias.
          </p>
        </motion.div>
        <div className="flex flex-row gap-8 items-center justify-center w-full min-h-[60vh]">
          {/* Esquerda: Contatos */}
          <motion.div
            className="flex flex-col gap-8 items-start justify-center flex-1 h-[200px] max-w-md pl-8 md:pl-12"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="w-full">
              <span className="font-bold text-white/80 text-xl md:text-2xl">
                EMAIL US
              </span>
              <div className="flex items-center gap-3 mt-2 text-lg md:text-xl">
                <Mail size={26} className="opacity-80" />
                <a
                  href="mailto:gabrielsilva@example.com"
                  className="underline hover:text-blue-400 transition"
                >
                  gabrielsilva@example.com
                </a>
              </div>
            </div>
            <div className="w-full">
              <span className="font-bold text-white/80 text-xl md:text-2xl">
                LINKEDIN
              </span>
              <div className="flex items-center gap-3 mt-2 text-lg md:text-xl">
                <Linkedin size={32} className="opacity-80" />
                <a
                  href="https://linkedin.com/gabriel-silva"
                  className="underline hover:text-blue-400 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/gabriel-silva
                </a>
              </div>
            </div>
            <div className="w-full">
              <span className="font-bold text-white/80 text-xl md:text-2xl block text-left">
                SOCIAL
              </span>
              <motion.div
                className="flex flex-row gap-7 mt-2 items-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.15,
                    },
                  },
                }}
              >
                <motion.a
                  href="#"
                  aria-label="Instagram"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Instagram
                    size={32}
                    className="opacity-80 hover:text-pink-400 transition"
                  />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="Github"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  <Github
                    size={32}
                    className="opacity-80 hover:text-gray-400 transition"
                  />
                </motion.a>
                <motion.a
                  href="#"
                  aria-label="Twitter"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Twitter
                    size={32}
                    className="opacity-80 hover:text-blue-400 transition"
                  />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          {/* Direita: Formulário */}
          <motion.div
            className="flex-1 flex justify-center items-center max-w-[700px] px-0"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <form
              className="w-full bg-black/60 border border-white/20 rounded-2xl p-12 shadow-2xl relative min-h-[420px] md:min-h-[520px]"
              style={{ boxShadow: "0 0 32px 4px #fff3, 0 0 0 2px #fff2" }}
            >
              <input
                type="text"
                placeholder="Nome Completo"
                className="w-full mb-3 px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-3 px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <input
                type="text"
                placeholder="Assunto"
                className="w-full mb-3 px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
              <textarea
                placeholder="Mensagem"
                className="w-full mb-3 px-4 py-2 rounded bg-transparent border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
                rows={2}
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-2 rounded-full border-2 border-white text-white font-bold bg-black/60 hover:bg-white hover:text-black transition-colors"
              >
                Enviar <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
