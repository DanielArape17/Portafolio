import CardBase from "./CardBase";
import PulseButton from "@/components/ui/PulseButton";
import { gsap } from "gsap";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";


export default function AllProjectsCard() {
  const { isSpanish } = useLanguageSelector();

  return(
    <CardBase
      cols={4} lgCols={8} rows={2}
      className="relative bg-[url('/images/All_my_projects_two.webp')] bg-cover bg-center text-white flex flex-col rounded-2xl shadow-[0_0_20px_rgba(255,122,92,0.15)]"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1728]/90 via-[#1F1728]/60 to-transparent "></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h3 className="text-3xl md:text-4xl font-semibold text-[#E7EAF0] mb-3 drop-shadow-[0_3px_8px_rgba(0,0,0,0.5)]">
          {isSpanish ? "Ver todos los proyectos" : "See all projects"}
        </h3>
        <p className="text-[#B9B4C9] text-sm md:text-base mb-6">
          {isSpanish
            ? "Explora mis trabajos, procesos creativos y experimentos de código."
            : "Explore my work, creative process, and coding experiments."}
        </p>

        <PulseButton
          href="#proyectos"
          size="md"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#proyectos');
            if (el) {
              const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
        >
          {isSpanish ? "Ver todos los proyectos" : "View all projects"}
        </PulseButton>
        <p className="text-xs text-[#8E8AAE] mt-2">{isSpanish ? "+3 proyectos publicados" : "+6 published projects"}</p>
      </div>
    </CardBase>
  );
}