import CardBase from "./CardBase";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";

export default function LearningCard() {
  const { isSpanish } = useLanguageSelector();

  return (
    <CardBase
      cols={4}
      rows={1}
      className="relative p-5 bg-[url('/images/Estudio.jpg')] bg-cover bg-left rounded-2xl shadow-[0_0_20px_rgba(78,201,240,0.15)] flex flex-col "
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f17]/30 to-[#c13414]/20 rounded-2xl backdrop-blur-[1px]"></div>

      <h2 className="text-xl text-[#FF7A5C] font-semibold mb-1 z-10">
        {isSpanish ? "En Constante Aprendizaje" : "Constantly Learning"}
      </h2>
      <p className="text-[#E7EAF0] z-10">
        {isSpanish
          ? "Estudiante de Ingeniería de Sistemas (9° semestre)"
          : "Systems Engineering Student (9th semester)"}
      </p>
      <p className="text-[#E7EAF0] z-10">
        {isSpanish ? "Estudiante de Lexpin" : "Lexpin Student"}
      </p>
      <p className="text-[#E7EAF0] z-10">
        {isSpanish ? "Autodidacta" : "Self-taught"}
      </p>
    </CardBase>
  );
}