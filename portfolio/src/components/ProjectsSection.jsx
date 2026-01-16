import ProjectCard from "./Card/ProjectCard";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";

export default function ProjectsSection() {
  const { isSpanish } = useLanguageSelector();

  const heading = isSpanish ? "Mis Proyectos" : "My Projects";
  const subtitle = isSpanish
    ? "Experimentos, proyectos reales y exploraciones de código que representan mi trabajo."
    : "Experiments, real projects and code explorations that represent my work.";

  return (
    <section id="proyectos" className="w-full py-10">
      <h2 className="text-5xl text-center text-white font-bold drop-shadow-[0_0_15px_rgba(255,122,92,0.25)]">
        {heading}
      </h2>

      <p className="text-center text-[#B9B4C9] mt-4 mb-10 max-w-2xl mx-auto">
        {subtitle}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 cursor-default">
        <ProjectCard
          cols={4}
          rows={2}
          image="/images/Rick_and_Morty.webp"
          title={isSpanish ? "Rick & Morty Explorer" : "Rick & Morty Explorer"}
          description={isSpanish ? "Interfaz animada para explorar personajes usando la API oficial." : "Animated interface to explore characters using the official API."}
          tech={["React", "GSAP", "TailwindCSS"]}
          link="https://danielarape17.github.io/Rick_and_Morty_Characters_Website/"
        />
        <ProjectCard
          cols={4}
          rows={2}
          image="/images/Spotify_Clon.webp"
          title={isSpanish ? "Clon de Spotify" : "Spotify Clone"}
          description={isSpanish ? "Maquetación profesional de la interfaz de Spotify desarrollada con utilidades de Tailwind CSS." : "Professional layout of the Spotify interface built with Tailwind CSS utilities."}
          tech={["HTML", "TailwindCSS", isSpanish ? "Diseño Responsive" : "Responsive Design"]}
          link="https://danielarape17.github.io/Clon_de_Spotify/"
        />
        <ProjectCard
          cols={4}
          rows={2}
          image="/images/Youtube_Clon.webp"
          title={isSpanish ? "Clon de Youtube" : "Youtube Clone"}
          description={isSpanish ? "Clon del frontend de YouTube optimizado para múltiples dispositivos usando Tailwind CSS." : "Frontend clone of YouTube optimized for multiple devices using Tailwind CSS."}
          tech={["HTML", "CSS", isSpanish ? "Diseño Responsive" : "Responsive Design"]}
          link="https://danielarape17.github.io/Clon_de_Youtube/"
        />
        <ProjectCard
          cols={4}
          rows={2}
          image="/images/Piedra_Papel_Tijera.webp"
          title={isSpanish ? "Piedra Papel o Tijera" : "Rock Paper Scissors"}
          description={isSpanish ? "Interfaz dinámica para el clásico juego de Piedra, Papel o Tijera contra la computadora." : "Dynamic interface for the classic Rock, Paper, Scissors game against the computer."}
          tech={["JavaScript", "HTML", "TailwindCSS"]}
          link="https://danielarape17.github.io/Piedra_Papel_Tijera/"
        />
        <ProjectCard
          cols={4}
          rows={2}
          image="/images/Meteorological_Dashboard.webp"
          title={isSpanish ? "Tablero Meteorológico" : "Weather Dashboard"}
          description={isSpanish ? "Dashboard climático que visualiza pronósticos en tiempo real utilizando la API de OpenWeather." : "Weather dashboard that visualizes forecasts in real-time using the OpenWeather API."}
          tech={["OpenWeather API", "React", "TailwindCSS"]}
          link="https://meteorological-dashboard.vercel.app/"
        />
      </div>
    </section>
  );
}
