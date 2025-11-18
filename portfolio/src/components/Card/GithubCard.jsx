"use client";
import { useRef } from "react";
import CardBase from "./CardBase";
import { FaGithub } from "react-icons/fa";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";
import { useGsapDynamicGradient } from "@/hooks/useGsapDynamicGradient";

export default function GithubCard() {
  const { isSpanish } = useLanguageSelector();
  const cardRef = useRef(null);
  const bgRef = useRef(null);

  useGsapDynamicGradient(bgRef, {
    duration: 5,
    colors: [
      "rgba(255,122,92,0.25)",
      "rgba(255,190,92,0.1)",
      "rgba(255,255,255,0.05)",
    ],
  });

  return (
    <CardBase
      ref={cardRef}
      cols={3}
      rows={2}
      className="relative overflow-hidden flex flex-col items-center justify-center group border border-transparent hover:border-[#FF7A5C]/40 transition-all duration-500 rounded-2xl"
    >
      {/* Fondo animado */}
      <div
        ref={bgRef}
        className="absolute inset-0 rounded-2xl backdrop-blur-[2px]"
        style={{
          background: "linear-gradient(135deg, rgba(255,122,92,0.2), rgba(255,190,92,0.1))",
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center p-6">
        <FaGithub className="w-20 h-20 text-[#FF7A5C] transition-all duration-500 group-hover:drop-shadow-[0_0_20px_rgba(255,122,92,0.6)]" />
        
        <h3 className="mt-3 text-lg font-semibold text-[#E7EAF0]">
          {isSpanish ? "Mi GitHub" : "My GitHub"}
        </h3>
        <a
          href="https://github.com/DanielArape17"
          target="_blank"
          rel="noreferrer"
          className="text-[#FF7A5C] hover:text-[#FF9E6E] text-sm mt-1 transition-all font-medium"
        >
          {isSpanish ? "Ver perfil →" : "View Profile →"}
        </a>
        <p className="text-xs text-[#B8C2D1] mt-2 italic max-w-[14rem]">
          {isSpanish
            ? "Explora mis proyectos, contribuciones y experimentos."
            : "Explore my projects, contributions, and experiments."}
        </p>
      </div>
    </CardBase>
  );
}