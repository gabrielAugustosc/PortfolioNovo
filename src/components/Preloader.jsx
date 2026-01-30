import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import { loadFull } from "tsparticles";

export default function Preloader({ onComplete }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3500); // 3.5 segundos
    return () => clearTimeout(timer);
  }, [onComplete]);

  
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    

      <div
        style={{
          width: 300,
          height: 80,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          zIndex: 2,
        }}
      >
        {/* Texto centralizado acima da linha */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={showText ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            color: "#fff",
            fontFamily: "sans-serif",
            textAlign: "center",
            width: "100%",
            marginBottom: 16,
            position: "absolute",
            top: 0,
          }}
        >
          <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
            Gabriel Augusto
          </h1>
          <span style={{ fontSize: "1rem", opacity: 0.8 }}>
            Desenvolvedor Web
          </span>
        </motion.div>
        {/* Linha branca animada, sempre na mesma posição */}
        <motion.div
          style={{
            width: "100%",
            height: "1px",
            background: "#fff",
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          onAnimationComplete={() => setShowText(true)}
        />
      </div>
    </div>
  );
}
