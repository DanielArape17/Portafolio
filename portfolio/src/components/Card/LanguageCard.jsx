"use client";

import { useLanguageSelector } from "@/hooks/useLanguageSelector";
import CardBase from "./CardBase";

export default function CardLanguage() {
  const { language, toggleLanguage, isSpanish } = useLanguageSelector();

  return (
    <CardBase
      cols={2} lgCols={4} rows={1}
      className="bg-gradient-to-br from-[#2B2235] via-[#3B2A4D] to-[#1F1728]
                text-white flex flex-col gap-3 items-center justify-center
                text-center rounded-2xl shadow-[0_0_15px_rgba(255,122,92,0.2)] p-5"
    >
      <h2 className="text-lg font-semibold text-[#E7EAF0]">
        {isSpanish ? "Idioma" : "Language"}
      </h2>

      <div className="relative flex bg-[#1F1728] border border-[#FF7A5C]/40 justify-around p-1.5 rounded-full w-32 overflow-hidden">
        {/* Indicador animado */}
        <div
          className={`absolute top-1 left-1 w-[47%] h-[calc(100%-8px)]
                      rounded-full bg-[#FF7A5C] transition-all duration-300 ease-in-out
                      ${isSpanish ? "translate-x-0" : "translate-x-full"}`}
        ></div>

        {/* Botón Español */}
        <button
          onClick={() => toggleLanguage("es")}
          className={`flex-1 py-1 px-1 rounded-full font-medium z-10 transition-all cursor-pointer ${
            isSpanish ? "text-white" : "text-[#B9B4C9] hover:text-[#FF7A5C]"
          }`}
        >
          Es
        </button>

        {/* Botón Inglés */}
        <button
          onClick={() => toggleLanguage("en")}
          className={`flex-1 py-1 px-1 rounded-full font-medium z-10 transition-all cursor-pointer ${
            !isSpanish ? "text-white" : "text-[#B9B4C9] hover:text-[#FF7A5C]"
          }`}
        >
          En
        </button>
      </div>

      <p className="text-sm text-[#B9B4C9] mt-2">
        {isSpanish ? "Selecciona tu idioma preferido 🌍" : "Select your language 🌍"}
      </p>
    </CardBase>
  );
}
