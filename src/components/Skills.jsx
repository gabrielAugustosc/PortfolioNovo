import React, { useState, useRef, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import ParticlesBackground from "./ParticlesBackground";
import SkillsCarousel from "./SkillsCarousel";
import {
  Coffee,
  Box,
  Database,
  Atom,
  Globe,
  Code2,
  GitBranch,
  Figma,
  Mail,
  Brush,
  AudioWaveform,
  NotebookText,
} from "lucide-react";

const skills = [
  { name: "Java", icon: Coffee },
  { name: "Node.js", icon: Box }, // Box como alternativa para Node.js
  { name: "SQL", icon: Database },
  { name: "Tailwind", icon: Box },
  { name: "React", icon: Atom },
  { name: "HTML/CSS", icon: Globe },
];

const tools = [
  { name: "VS Code", icon: Code2 },
  { name: "Git", icon: GitBranch },
  { name: "Figma", icon: Figma },
  { name: "Postman", icon: Mail },
  { name: "IntelliJ", icon: Code2 },
  { name: "Canva", icon: Brush },
  { name: "Cisco", icon: AudioWaveform },
  { name: "Notion", icon: NotebookText },
];

export default function Skills() {
  const [showSkills, setShowSkills] = useState(true);
  const [showCarousel, setShowCarousel] = useState(false);
  const [carouselType, setCarouselType] = useState("skills");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Imagens para skills
  const skillsImages = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      alt: "Java",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      alt: "SQL",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "JavaScript",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "HTML/CSS",
    },
  ];
  // Imagens para ferramentas
  const toolsImages = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      alt: "VS Code",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      alt: "Git",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      alt: "Figma",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      alt: "Postman",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      alt: "IntelliJ",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
      alt: "Canva",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="text-white relative overflow-hidden min-h-screen w-full py-16 px-4"
    >
      {/* Particles background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <ParticlesBackground />
      </div>
      {/* Conteúdo principal */}
      <div
        className={`relative z-10 w-full flex flex-col items-center justify-center min-h-[70vh] pt-16 transition-all duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-4xl font-extrabold mb-2 w-full text-center">
          Minhas Skills
        </h2>
        <p className="mb-8 mt-2 text-center">
          Uma visão geral das minhas habilidades e ferramentas que utilizo
        </p>
        {/* Toggle Button */}
        <div className="flex items-center mb-8">
          <button
            className={`px-6 py-2 rounded-l-full border-2 border-white font-bold transition-colors duration-200 ${carouselType === "skills" ? "bg-white text-black" : "bg-transparent text-white"}`}
            onClick={() => {
              setCarouselType("skills");
            }}
          >
            Skills 3D
          </button>
          <button
            className={`px-6 py-2 rounded-r-full border-2 border-white font-bold transition-colors duration-200 ${carouselType === "tools" ? "bg-white text-black" : "bg-transparent text-white"}`}
            onClick={() => {
              setCarouselType("tools");
            }}
          >
            Tools 3D
          </button>
        </div>
        {/* Conteúdo dinâmico: apenas carrosseis 3D */}
        <div className="w-full flex items-center justify-center">
          <SkillsCarousel
            items={carouselType === "skills" ? skillsImages : toolsImages}
          />
        </div>
      </div>
    </section>
  );
}
