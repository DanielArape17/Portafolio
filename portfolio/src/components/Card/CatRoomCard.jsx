"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import CardBase from "./CardBase";
import CatSVG from "../CatSVG";

// 👇 importa animaciones del gato
import { blink, tailWag, sitPose, walking, sleep } from "../Animations/CatAnimations";

export default function CatRoomCard() {
  const catRef = useRef(null);
  const roomRef = useRef(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (!catRef.current || !roomRef.current) return;

    const ctx = gsap.context(() => {
      /* ----------------------------
      Animación de entrada del cuarto
      -----------------------------*/
      gsap.from(roomRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out",
      });

      /* ----------------------------
      Animación de entrada del gato
      -----------------------------*/
      gsap.from(catRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out",
        delay: 0.2,
      });

      /* ----------------------------
      👇 AQUÍ ACTIVAMOS ESTADOS DEL GATO
      -----------------------------*/

      // Parpadeo automático
      blink(catRef.current);

      // Cola moviéndose suavemente
      tailWag(catRef.current);

      // Estado inicial del gato: sentado
      sitPose(catRef.current);

      // Si quisieras caminar:
      // walking(catRef.current);

      // Si quisieras dormir:
      // sleep(catRef.current);

    });

    return () => ctx.revert();
  }, []);

  return (
    <CardBase cols={6} rows={2}>
      <div ref={roomRef} className="relative w-full h-full">
        {/* Fondo de la habitación */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1f1a33] to-[#0d0b18] rounded-xl"></div>

        {/* Gatito */}
        <div ref={catRef} className="absolute bottom-2 left-2">
          <CatSVG size={100} />
        </div>
      </div>
    </CardBase>
  );
}
