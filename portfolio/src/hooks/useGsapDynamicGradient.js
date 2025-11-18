"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export function useGsapDynamicGradient(ref, options = {}) {
  const {
    duration = 6,
    colors = [
      "rgba(255,122,92,0.15)",
      "rgba(255,122,92,0.05)",
      "rgba(255,190,92,0.15)",
    ],
  } = options;

  useEffect(() => {
    const el = ref?.current;
    if (!el) return;

    gsap.set(el, {
      background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
    });

    const tl = gsap.timeline({ repeat: -1, yoyo: true, defaults: { duration } });

    tl.to(el, {
      background: `linear-gradient(135deg, ${colors[1]}, ${colors[2]})`,
    })
      .to(el, {
        background: `linear-gradient(135deg, ${colors[2]}, ${colors[0]})`,
      })
      .to(el, {
        background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
      });

    return () => tl.kill();
  }, [ref, duration, colors]);
}
