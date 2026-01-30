import React, { useRef, useEffect } from "react";
import {
  Coffee,
  Database,
  Atom,
  Github,
  Smartphone,
  Spline,
  Wallet,
  ArrowRight,
  Figma,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VivoFigma from "../assets/vivoFigma.png";
import SiteVivo from "../assets/SiteVivo.png";
import PereiraSilva from "../assets/SiteAdv.png";
import Portfolio from "../assets/Portfolio.png";
gsap.registerPlugin(ScrollTrigger); // Register GSAP ScrollTrigger plugin

const projectsData = [
  {
    title: "Vivo Figma Onboarding ",
    description:
      "Site desenhado no Figma para o processo de onboarding da Vivo.",
    techs: [Figma, Github],
    image: VivoFigma,
    detailsUrl: "#",
  },
  {
    title: "Site Vivo Onboarding",
    description: "Site desenvolvido para o processo de onboarding da Vivo.",
    techs: [Coffee, Atom, Github],
    image: SiteVivo,
    detailsUrl: "#",
  },
  {
    title: "Pereira & Silva Advocacia",
    description:
      "Site para um escritório de advocacia em fase final de desenvolvimento.",
    techs: [Github, Atom],
    image: PereiraSilva,
    detailsUrl: "#",
  },
  {
    title: "Primeiro Portfólio Pessoal",
    description:
      "Primeiro portfólio pessoal desenvolvido para apresentar meus projetos e habilidades.",
    techs: [Atom, Github],
    image: Portfolio,
    detailsUrl: "#",
  },
];
// Data for projects

export default function ProjectsSection() {
  const sectionRef = useRef(null);
  const listRef = useRef(null);
  const fillRef = useRef(null);
  const slideRefs = useRef([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const listItems = itemRefs.current;
    const slides = slideRefs.current;
    const fill = fillRef.current;

    gsap.registerPlugin(ScrollTrigger);

    // Reset states
    gsap.set(listItems, { color: "#fffce1" });
    gsap.set(slides, { autoAlpha: 0 });

    // First element visible
    if (fill) {
      gsap.set(fill, {
        scaleY: 1 / listItems.length,
        transformOrigin: "top left",
      });
    }
    if (listItems[0]) gsap.set(listItems[0], { color: "#1E90FF" });
    if (slides[0]) gsap.set(slides[0], { autoAlpha: 1 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=" + listItems.length * 50 + "%",
        pin: true,
        scrub: true,
        // markers: true,
      },
    });

    listItems.forEach((item, i) => {
      const previousItem = listItems[i - 1];
      if (previousItem) {
        tl.set(item, { color: "#1E90FF" }, 0.5 * i)
          .to(
            slides[i],
            {
              autoAlpha: 1,
              duration: 0.2,
            },
            "<",
          )
          .set(previousItem, { color: "#1E90FF" }, "<")
          .to(
            slides[i - 1],
            {
              autoAlpha: 0,
              duration: 0.2,
            },
            "<",
          );
      }
    });
    tl.to(
      fill,
      {
        scaleY: 1,
        transformOrigin: "top left",
        ease: "none",
        duration: tl.duration(),
      },
      0,
    ).to({}, {});

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      tl.kill();
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="section pin-section w-full min-h-screen py-8 md:py-16 px-2 md:px-4 bg-black text-white relative flex flex-col md:flex-row items-center justify-center border-t border-b border-dashed border-white/20"
        style={{ minHeight: "100vh" }}
      >
        
        <div className="content flex flex-col md:flex-row w-full max-w-6xl mx-auto relative gap-4 md:gap-12 justify-between items-center md:items-start">
          {/* Lista à esquerda */}
          <ul
            className="ist flex flex-row md:flex-col justify-start md:justify-center gap-6 md:gap-10 relative w-full md:w-[40%] shrink-0 mb-10 md:mb-0 md:pr-10 md:pt-12 
             overflow-x-auto overflow-y-hidden md:overflow-visible scrollbar-hide snap-x"
            ref={listRef}
            style={{ minWidth: 0, maxWidth: 320 }}
          >
            {projectsData.map((project, idx) => (
              <li
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el)}
                style={{ transition: "color 0.2s" }}
                className="text-lg md:text-2xl font-bold tracking-tight leading-tight cursor-pointer whitespace-nowrap snap-center transition-colors duration-200"
              >
                {project.title}
              </li>
            ))}
            <div
              ref={fillRef}
              className="fill absolute bg-[#1E90FF] rounded transition-all duration-300
               bottom-[-8px] md:bottom-auto md:left-[-24px]"
              style={{
                width: 5,
                height: 58* projectsData.length,
                top: 48,
                marginLeft: -16,
                transform: `scaleY(${1 / projectsData.length})`,
                transition: "scaleY 0.2s, height 0.2s, top 0.2s",
              }}
            ></div>
          </ul>

          {/* Cards à direita */}
          <div className="right flex-1 relative min-h-[550px] md:min-h-[600px] w-full">
            {projectsData.map((project, idx) => (
              <div
                key={idx}
                ref={(el) => (slideRefs.current[idx] = el)}
                className="slide absolute w-[85%] md:w-[80%] max-w-[400px] md:max-w-[750px] left-[55%] -translate-x-1/2 top-0 md:top-1/2 md:-translate-y-1/2 opacity-0 invisible bg-[#18181b] border border-white/10 rounded-2xl shadow-2xl p-5 md:p-8 flex flex-col gap-3 items-start"
                style={{ zIndex: 10 - idx }}
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded-lg mb-2 md:mb-4 w-full max-w-[900px] h-[140px] md:h-[250px] object-cover"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                )}
                <h3 className="text-xl md:text-2xl font-bold mb-1">
                  {project.title}
                </h3>
                <p className="text-white/80 mb-2 text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 items-center mb-2 md:mb-4">
                  {project.techs.map((TechIcon, i) => (
                    <TechIcon key={i} size={18} className="text-white/80" />
                  ))}
                </div>
                <a
                  href={project.detailsUrl}
                  className="inline-flex items-center px-3 md:px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors w-fit text-sm md:text-base"
                >
                  Ver Detalhes <ArrowRight className="ml-2" size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
