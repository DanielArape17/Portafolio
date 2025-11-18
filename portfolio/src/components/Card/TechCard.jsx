"use client";

import CardBase from "./CardBase";
import { techIcons } from "@/data/techIcons"; 
import { useGsapFloatingIcons } from "@/hooks/useGsapFloatingIcons";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";


export default function TechCard() {
  const { isSpanish } = useLanguageSelector();
  useGsapFloatingIcons(".tech-icon");

  return (
    <CardBase
      cols={4}
      rows={2}
      className="relative p-4 gap-4 rounded-2xl shadow-[0_0_20px_rgba(78,201,240,0.15)] flex flex-col items-center justify-evenly overflow-hidden"
    >
      <h2 className="text-2xl font-semibold text-[#4EC9F0] z-10">
        {isSpanish ? "Tecnologías que domino" : "Technologies I Master"}
      </h2>

      <div className="z-20 relative flex flex-wrap justify-center gap-8">
        {techIcons.map(({ id, Icon, color, name }) => (
          <button
            key={id}
            className="tech-icon relative cursor-grab active:cursor-grabbing w-16 h-16 flex flex-col items-center justify-center group"
            title={name}
            aria-label={name}
          >
            <Icon size={36} style={{ color }} />
            <span className="absolute bottom-[-1.5rem] text-xs text-[#E7EAF0] bg-[#2A1E36]/80 px-2 py-1 rounded-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
              {name}
            </span>
          </button>
        ))}
      </div>


      <p className="z-10 text-sm font-medium">{isSpanish ? "Gira los iconos" : "Spin the icons"}</p>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(78,201,240,0.12),transparent_70%)] pointer-events-none"></div>
    </CardBase>
  );
}
