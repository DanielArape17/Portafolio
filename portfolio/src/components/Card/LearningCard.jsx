import CardBase from "./CardBase";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";
import { LuBookOpenCheck, LuGraduationCap, LuSparkles } from "react-icons/lu";

export default function LearningCard() {
  const { isSpanish } = useLanguageSelector();

  return (
    <CardBase
      cols={2}
      lgCols={4}
      rows={1}
      className="relative p-5 bg-[url('/images/Estudio.webp')] bg-cover bg-left rounded-2xl 
                shadow-[0_0_20px_rgba(78,201,240,0.15)] flex flex-col"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t 
                      from-[#0f0f17]/40 to-[#c13414]/20 
                      rounded-2xl backdrop-blur-[2px]"></div>

      <h2 className="text-lg sm:text-xl text-[#FF7A5C] font-semibold mb-2 z-10">
        {isSpanish ? "En Constante Aprendizaje" : "Constantly Learning"}
      </h2>

      <ul className="space-y-2 text-[#E7EAF0] z-10">
        
        {/* Sistemas */}
        <li className="flex items-center gap-3">
          <LuGraduationCap
            className="
              text-[#FF7A5C]
              w-6 h-6
              sm:w-5 sm:h-5 
              md:w-4 md:h-4
            "
          />
          <span className="text-sm sm:text-base">
            {isSpanish 
              ? "Ing. Sistemas · 9°"
              : "Eng. Systems · 9°"}
          </span>
        </li>

        

        {/* Lexpin */}
        <li className="flex items-center gap-3">
          <LuBookOpenCheck 
            className="text-[#FF7A5C] 
              w-6 h-6
              sm:w-5 sm:h-5 
              md:w-4 md:h-4" 
          />
          <span className="text-sm sm:text-base">
            {isSpanish ? "Estudiante de Lexpin" : "Lexpin Student"}
          </span>
        </li>

        {/* Autodidacta */}
        <li className="flex items-center gap-3">
          <LuSparkles 
            className="text-[#FF7A5C] 
              w-6 h-6
              sm:w-5 sm:h-5 
              md:w-4 md:h-4" 
          />
          <span className="text-sm sm:text-base">
            {isSpanish ? "Autodidacta" : "Self-taught"}
          </span>
        </li>

      </ul>
    </CardBase>
  );
}
