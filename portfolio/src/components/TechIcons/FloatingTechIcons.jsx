"use client";
import { useGsapFloatingIcons } from "@/hooks/useGsapFloatingIcons";
import { techIcons } from "@/data/techIcons";

export default function FloatingTechIcons() {
  useGsapFloatingIcons(".tech-icon");

  return (
    <div className="relative flex flex-wrap justify-center gap-6 p-6">
      {techIcons.map(({ id, Icon, color, name }) => (
        <div
          key={id}
          className="tech-icon cursor-grab active:cursor-grabbing transition-transform"
          title={name}
        >
          <Icon size={60} color={color} />
        </div>
      ))}
    </div>
  );
}
