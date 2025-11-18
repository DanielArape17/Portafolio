"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsapGlobalScrollAnimations() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-animate]");

    elements.forEach((el) => {
      const type = el.dataset.animate;

      let vars = {
        opacity: 0,
        y: 40,
        scale: 0.95,
        filter: "blur(8px)",
        duration: 1,
        ease: "power3.out",
      };

      if (type === "fade-up") vars = { ...vars, y: 40 };
      if (type === "fade-left") vars = { ...vars, x: -40 };
      if (type === "fade-right") vars = { ...vars, x: 40 };
      if (type === "zoom-in") vars = { ...vars, scale: 0.8 };

      gsap.fromTo(
        el,
        vars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  }, []);
}
