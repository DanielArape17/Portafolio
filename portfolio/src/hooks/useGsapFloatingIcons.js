import { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export function useGsapFloatingIcons(selector) {
  useEffect(() => {
    const icons = gsap.utils.toArray(selector);

    icons.forEach((iconNode) => {
      // Si la query devuelve un SVG en lugar del contenedor, usar el padre.
      const icon = (iconNode instanceof HTMLElement) ? iconNode : iconNode.parentElement;
      if (!icon) return;

      // Asegurar estilos iniciales para transformaciones
      icon.style.willChange = "transform";
      if (!icon.style.position) icon.style.position = "relative";
      gsap.set(icon, { x: 0, y: 0, rotation: 0 });

      // --- Flotación aleatoria ---
      gsap.to(icon, {
        y: gsap.utils.random(-10, 10),
        x: gsap.utils.random(-10, 10),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // --- Hover (escala) ---
      const handleEnter = () => gsap.to(icon, { scale: 1.14, duration: 0.3, ease: "back.out(2)" });
      const handleLeave = () => gsap.to(icon, { scale: 1, duration: 0.3, ease: "back.in(2)" });
      icon.addEventListener("mouseenter", handleEnter);
      icon.addEventListener("mouseleave", handleLeave);

      // --- Rotación interactiva ---
      try {
        Draggable.create(icon, {
          type: "rotation",
          inertia: true,
          onRelease() {
            gsap.to(icon, { rotation: "+=360", duration: 1.5, ease: "elastic.out(1, 0.3)" });
          },
        });
      } catch (e) {
        // no interrumpir si Draggable falla en algún entorno
      }

      // Limpieza de eventos individuales
      icon._cleanup = () => {
        icon.removeEventListener("mouseenter", handleEnter);
        icon.removeEventListener("mouseleave", handleLeave);
        const draggableInstance = Draggable.get(icon);
        if (draggableInstance) draggableInstance.kill();
        gsap.killTweensOf(icon);
      };
    });

    // Limpieza general cuando el componente se desmonta
    return () => {
      icons.forEach((icon) => {
        if (icon._cleanup) icon._cleanup();
      });
    };
  }, [selector]);
}