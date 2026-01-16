"use client";

import CardBase from "./CardBase";
import { useEffect } from "react";
import { gsap } from "gsap";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";

export default function SoftSkillsCard_Reflejos() {
  const { isSpanish } = useLanguageSelector();

  const skills = isSpanish
    ? ["Escucha activa", "Colaboración", "Resiliencia", "Curiosidad", "Integridad"]
    : ["Active Listening", "Collaboration", "Resilience", "Curiosity", "Integrity"];

  useEffect(() => {
    gsap.to(".softskill-reflex", {
      opacity: 0.7,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: { amount: 1, from: "center" },
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".softskill-reflex");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <CardBase
      cols={4} lgCols={2} rows={2}
      className="relative overflow-hidden rounded-2xl p-0.5
                bg-[url('/images/SoftSkills.webp')] bg-cover bg-center
                border border-white/10 backdrop-blur-md shadow-[0_0_25px_rgba(255,255,255,0.05)] 
                flex flex-col items-center justify-evenly"
    >
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f17]/50 to-[#2B2235]/80"></div>

      <h2 className="text-[#4EC9F0] text-center font-semibold text-lg z-10">
        {isSpanish ? "Habilidades Blandas" : "Soft Skills"}
      </h2>

      <div className="flex flex-wrap justify-center z-10 gap-3 py-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="softskill-reflex relative px-5 py-2 rounded-xl text-sm border border-white/10
                      text-[#E7EAF0] text-sm font-medium cursor-default
                      bg-white/5 backdrop-blur-sm transition-all duration-500
                      shadow-[inset_0_0_12px_rgba(78,201,240,0.1)]
                      hover:shadow-[inset_0_0_18px_rgba(165,141,249,0.25)]
                      before:absolute before:inset-0 before:rounded-xl
                      before:p-[1px] before:bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(78,201,240,0.5),rgba(165,141,249,0.3),transparent_60%)]
                      before:transition-opacity before:duration-500 before:opacity-90"
          >
            {skill}
            <span className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1),transparent)] opacity-40 rounded-xl mix-blend-overlay"></span>
          </div>
        ))}
      </div>
      
      <p className="text-[#E7EAF0] text-center text-sm z-10">
        {isSpanish ? "Pasa sobre las etiquetas" : "Hover over the labels"}
      </p>
    </CardBase>
  );
}
