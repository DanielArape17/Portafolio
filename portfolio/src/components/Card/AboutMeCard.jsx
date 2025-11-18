import CardBase from "./CardBase";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";

export default function AboutMeCard() {
  const { isSpanish } = useLanguageSelector();

  return (
    <CardBase
      cols={4}
      rows={2}
      className="relative overflow-hidden rounded-2xl p-8
                bg-[url('/images/AboutMe.jpg')] bg-cover bg-center
                border border-white/10 backdrop-blur-md shadow-[0_0_35px_rgba(255,255,255,0.05)]
                flex flex-col justify-between
                before:absolute before:inset-0 before:rounded-2xl
                before:p-[2px] before:bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(78,201,240,0.4),rgba(165,141,249,0.3),transparent_60%)]"
    >
      <div className="absolute inset-0 bg-[#0f0f17]/70 backdrop-blur-[1px] z-0"></div>

      <div className="relative z-10">
        <h2 className="text-[#FF7A5C] text-2xl font-semibold mb-2">
          {isSpanish ? "Sobre mí" : "About me"}
        </h2>
        <p className="text-[#B8C2D1] text-sm mb-4">
          {isSpanish
            ? "Soy una persona apasionada por el aprendizaje continuo y la creación de experiencias digitales que inspiren."
            : "I'm passionate about continuous learning and creating digital experiences that inspire."}
        </p>

        <p className="text-[#9FA9BC] text-xs italic">
          {isSpanish
            ? "“Siempre aprendiendo, siempre creando.”"
            : "“Always learning, always creating.”"}
        </p>
      </div>

      {/* Botón sutil */}
      <div className="relative mt-6 z-10">
        <a href="https://wa.me/584121494288"
          target="_blank"
          rel="noopener noreferrer"
          className="relative px-5 py-2.5 rounded-xl text-sm font-medium text-[#0f0f17]
                bg-gradient-to-r from-[#FFB86C] via-[#ff7a5c] to-[#ff8f70]
                shadow-[0_0_15px_rgba(255,143,112,0.25)]
                transition-all duration-500 ease-out
                hover:shadow-[0_0_25px_rgb(255,143,112,0.5)]
                hover:scale-[1.05] active:scale-[0.98]
                overflow-hidden cursor-pointer mb-2"
        >
          <span className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x,50%)_var(--y,50%),rgba(255,184,108,0.4),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          {isSpanish ? "Hablemos →" : "Let's talk →"}
        </a>
      </div>
    </CardBase>
  );
}