import CardBase from "./CardBase";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";


export default function HeroCard() {
  const { isSpanish } = useLanguageSelector();

  return (
    <CardBase
      cols={4} lgCols={8} rows={2}
      className="h-96 bg-[url('/images/Main.webp')] bg-cover text-white flex flex-col rounded-2xl shadow-[0_0_20px_rgba(255,122,92,0.15)]"
    >
      <h1 className="text-5xl font-bold text-[#E7EAF0] drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
        Daniel Arapé
      </h1>
      <h2 className="text-3xl font-semibold text-[#FF7A5C] mt-1">
        {isSpanish ? "Desarrollador Full-Stack" : "Full-Stack Developer"}
      </h2>
      <p className="text-[#C9C6D0] max-w-2xs mt-2 leading-relaxed">
        {isSpanish
              ? "Curioso por naturaleza, disfruto unir la lógica del código con el arte del diseño."
              : "Curious by nature, I enjoy blending the logic of code with the art of design."}
          </p>
      <div className="flex gap-3 mt-4 font-semibold">
        <a
          href="#proyectos"
          onClick={(e) => {
            e.preventDefault();
            const el = document.querySelector('#proyectos');
            if (el) {
              const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }}
          className="bg-[#FF7A5C] hover:bg-[#FF9E6E] text-[#FFF9F3] py-2 px-5 rounded-lg shadow-[0_0_12px_rgba(255,122,92,0.4)] transition-all duration-300"
        >
          {isSpanish ? "Proyectos" : "Projects"}
        </a>
        <a
          href="https://wa.me/584121494288"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#4EC9F0] hover:bg-[#9AEFFF] text-[#1F1728] py-2 px-5 rounded-lg shadow-[0_0_12px_rgba(78,201,240,0.4)] transition-all duration-300"
        >
          {isSpanish ? "Contáctame" : "Contact Me"}
        </a>
      </div>
    </CardBase>
  );
}