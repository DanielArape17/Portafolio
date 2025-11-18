"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function useGsapTiltEffect() {
  useEffect(() => {
    // Seleccionar TODAS las cards que tengan la clase global "tilt-card"
    const cards = document.querySelectorAll(".tilt-card");

    cards.forEach((card) => {
      let rotateX = 0;
      let rotateY = 0;

      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const midX = rect.width / 2;
        const midY = rect.height / 2;

        rotateY = ((x - midX) / midX) * 10;   // inclinación horizontal
        rotateX = ((midY - y) / midY) * 10;   // inclinación vertical

        gsap.to(card, {
          rotateX,
          rotateY,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 800,
        });
      };

      const resetTilt = () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseleave", resetTilt);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseleave", resetTilt);
      });
    };
  }, []);
}
