import ProjectCard from "./Card/ProjectCard";

export default function ProjectsSection() {
  
  return (
    <section className="w-full py-10">
      <h2 className="text-5xl text-center text-white font-bold drop-shadow-[0_0_15px_rgba(255,122,92,0.25)]">
        Mis Proyectos
      </h2>

      <p className="text-center text-[#B9B4C9] mt-4 mb-10 max-w-2xl mx-auto">
        Experimentos, proyectos reales y exploraciones de código que representan mi trabajo.
      </p>

      <div className="grid grid-cols-12 grid-rows-8 gap-4 cursor-default">
        <ProjectCard
          cols={4}
          rows={2}
          image="/images/Rick_and_Morty.png"
          title="Rick & Morty Explorer"
          description="Interfaz animada para explorar personajes usando la API oficial."
          tech={["React", "GSAP", "TailwindCSS"]}
          link="https://tu-demo.com"
        />
        <ProjectCard
          cols={4}
          rows={2}
          image="/images/Rick_and_Morty.png"
          title="Rick & Morty Explorer"
          description="Interfaz animada para explorar personajes usando la API oficial."
          tech={["React", "GSAP", "TailwindCSS"]}
          link="https://tu-demo.com"
        />
        <ProjectCard
          cols={4}
          rows={2}
          image="/images/Rick_and_Morty.png"
          title="Rick & Morty Explorer"
          description="Interfaz animada para explorar personajes usando la API oficial."
          tech={["React", "GSAP", "TailwindCSS"]}
          link="https://tu-demo.com"
        />
        <ProjectCard
          cols={4}
          rows={2}
          image="/images/Rick_and_Morty.png"
          title="Rick & Morty Explorer"
          description="Interfaz animada para explorar personajes usando la API oficial."
          tech={["React", "GSAP", "TailwindCSS"]}
          link="https://tu-demo.com"
        />
      </div>
    </section>
  );
}
