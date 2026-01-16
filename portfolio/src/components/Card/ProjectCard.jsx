import CardBase from "./CardBase";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";

export default function ProjectCard({ cols = 5, rows = 2, image, title, description, tech = [], link }) {
  const { isSpanish } = useLanguageSelector();

  const buttonText = isSpanish ? "Ver Proyecto" : "View Project";

  return (
    <CardBase
  cols={4} lgCols={cols} rows={rows}
  className=" bg-[#111] rounded-2xl overflow-hidden
  shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
>
  {/* Imagen */}
  <div className="overflow-hidden rounded-xl">
    <img src={image} className="w-full h-full object-cover" />
  </div>

  <div className="p-0.5">
    <h3 className="text-white text-xl font-semibold">{title}</h3>

    <p className="text-white/70 text-sm mt-1">{description}</p>

    <div className="flex flex-wrap gap-2 mt-2">
      {tech.map((t, i) => (
        <span key={i} className="bg-[#222] px-1 py-1 text-xs rounded-md text-white/80 border border-white/10">{t}</span>
      ))}
    </div>

    <a href={link} target="_blank" rel="noopener noreferrer" className="block text-center mt-2 py-2 rounded-lg bg-white text-black font-semibold hover:bg-neutral-200 transition-all">
      {buttonText}
    </a>
  </div>
</CardBase>

  );
}


/*
"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function ProjectCard({ image, title, description, tech = [], link }) {
  const cardRef = useRef(null);

  // Tilt effect
  useEffect(() => {
    const card = cardRef.current;

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(card, {
        rotationY: x / 20,
        rotationX: -y / 20,
        transformPerspective: 800,
        ease: "power2.out",
        duration: 0.3,
      });
    };

    const resetTilt = () => {
      gsap.to(card, {
        rotationX: 0,
        rotationY: 0,
        ease: "power2.out",
        duration: 0.6,
      });
    };

    card.addEventListener("mousemove", handleMove);
    card.addEventListener("mouseleave", resetTilt);

    return () => {
      card.removeEventListener("mousemove", handleMove);
      card.removeEventListener("mouseleave", resetTilt);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative w-full max-w-sm rounded-2xl overflow-hidden
        bg-[rgba(20,20,35,0.45)] backdrop-blur-xl border border-white/10
        shadow-[0_0_20px_rgba(80,200,255,0.15)]
        transition-all duration-300 hover:shadow-[0_0_35px_rgba(80,200,255,0.40)]
        p-0.5 group"
    >
      {/* Aura Glow *
      <div className="absolute inset-0 rounded-2xl opacity-40 blur-2xl
        bg-[radial-gradient(circle_at_center,rgba(80,200,255,0.6),transparent_70%)]
        pointer-events-none">
      </div>

      {/* Contenido interno *
      <div className="relative rounded-2xl overflow-hidden bg-[#0e0f18]/70">

        {/* Imagen del proyecto *
        <div className="w-full h-44 overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500
            group-hover:scale-105"
          />
        </div>

        {/* Información *
        <div className="p-4">
          <h3 className="text-lg font-bold text-[#5EE8FF]">{title}</h3>

          <p className="text-white/70 text-sm mt-2">{description}</p>

          {/* Tech tags *
          <div className="flex flex-wrap gap-2 mt-3">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-md bg-[#1f1a34] text-[#7EF3FF]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Botón 
          <a
            href={link}
            target="_blank"
            className="block mt-4 text-center py-2 px-4 rounded-lg
            bg-[#57FFC8] text-[#0d0f1a] font-semibold
            hover:bg-[#7fffd9] transition-all duration-300"
          >
            Ver Proyecto
          </a>
        </div>
      </div>
    </div>
  );
}

*/