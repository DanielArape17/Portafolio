"use client";
import Link from "next/link";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

export default function PulseButton({
  href = "#",
  children = "Ver más →",
  color = "#FF7A5C",
  textColor = "#1F1728",
  size = "md",
  className = "",
}) {
  const btnRef = useRef(null);

  useEffect(() => {
    const pulse = gsap.to(btnRef.current, {
      scale: 1.03,
      repeat: -1,
      yoyo: true,
      duration: 2.8,
      ease: "sine.inOut",
    });

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) pulse.pause();

    return () => pulse.kill();
  }, []);

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={href}
      ref={btnRef}
      aria-label={children}
      className={`
        ${sizeStyles[size]} 
        rounded-lg font-semibold shadow-[0_8px_30px_rgba(255,122,92,0.25)] 
        hover:shadow-[0_0_30px_rgba(255,122,92,0.4)] 
        hover:scale-[1.05] transition-transform 
        focus:outline-none focus:ring-4 focus:ring-[${color}]/30 
        ${className}
      `}
      style={{
        backgroundColor: color,
        color: textColor,
      }}
    >
      {children} 
    </Link>
  );
}
