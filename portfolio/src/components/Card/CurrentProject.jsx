import CardBase from "./CardBase";
import { FiFileText } from "react-icons/fi";
import { FaFigma, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoRocket } from "react-icons/io5";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";

export default function CurrentProject() {
  const { isSpanish } = useLanguageSelector();

  return (
    <CardBase 
      cols={4} lgCols={6} rows={2} 
      className="relative overflow-hidden flex flex-col h-full justify-around bg-[#1F1728] text-white shadow-2xl p-6 group border border-white/5"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#5EE8FF] opacity-5 blur-[60px] rounded-full group-hover:opacity-15 transition-opacity duration-500" />
        
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#FF7A5C] opacity-5 blur-[60px] rounded-full group-hover:opacity-15 transition-opacity duration-500" />
      </div>

      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      <div className="absolute inset-0 border border-transparent bg-gradient-to-br from-white/10 via-transparent to-[#FF7A5C]/20 rounded-[inherit] pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full justify-around">
        
        <div className="flex justify-between items-center">
          <p className="text-xs text-[#5EE8FF] font-semibold tracking-wider uppercase">
            {isSpanish ? "Proyecto Actual" : "Current Project"}
          </p>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] font-bold tracking-widest text-[#E7EAF0]">
            <span className="w-2 h-2 rounded-full bg-[#FF7A5C] animate-pulse shadow-[0_0_8px_#FF7A5C]" />
            {isSpanish ? "próximamente: febrero" : "coming soon: february"}
          </span>
        </div>

        <h2 className="text-2xl md:text-3xl font-bold leading-tight text-[#E7EAF0]">
          {isSpanish ? "Plataforma de Aprendizaje Adaptativo con IA" : "AI-Powered Adaptive Learning Platform"}
        </h2>

        <div className="relative flex items-center justify-between w-full my-4">
          <div className="flex flex-col items-center z-10">
            <div className="w-12 h-12 rounded-full bg-[#2f2733]/80 border border-[#5EE8FF]/50 flex items-center justify-center backdrop-blur-sm">
              <FiFileText className="text-[#5EE8FF] text-lg" />
            </div>
            <span className="text-[10px] text-white/50 mt-1">{isSpanish ? "Plan" : "Planning"}</span>
          </div>

          <div className="flex-1 h-[1px] bg-[#5EE8FF]/30 mx-1" />

          <div className="flex flex-col items-center z-10">
            <div className="w-12 h-12 rounded-full bg-[#2f2733]/80 border border-[#5EE8FF]/50 flex items-center justify-center backdrop-blur-sm">
              <FaFigma className="text-[#5EE8FF] text-lg" />
            </div>
            <span className="text-[10px] text-white/50 mt-1">UI/UX</span>
          </div>

          <div className="flex-1 h-[2px] bg-gradient-to-r from-[#5EE8FF]/30 to-[#FF7A5C] mx-1" />

          <div className="flex flex-col items-center z-10">
            <div className="w-14 h-14 rounded-full bg-[#FF7A5C] flex items-center justify-center shadow-[0_0_25px_rgba(255,122,92,0.4)] ring-4 ring-[#FF7A5C]/20 transition-transform group-hover:scale-110">
              <FaNodeJs className="text-white text-xl" />
            </div>
            <span className="text-[10px] text-[#FF7A5C] mt-2 font-bold uppercase tracking-tighter">Backend</span>
          </div>

          <div className="flex-1 h-[1px] bg-white/10 mx-1" />

          <div className="flex flex-col items-center z-10 opacity-40">
            <div className="w-12 h-12 rounded-full bg-[#3b3340] flex items-center justify-center">
              <SiNextdotjs className="text-lg" />
            </div>
            <span className="text-[10px] text-white/50 mt-1">Front</span>
          </div>

          <div className="flex-1 h-[1px] bg-white/5 mx-1" />

          <div className="flex flex-col items-center z-10 opacity-40">
            <div className="w-12 h-12 rounded-full bg-[#3b3340] flex items-center justify-center">
              <IoRocket className="text-lg" />
            </div>
            <span className="text-[10px] text-white/50 mt-1">Live</span>
          </div>
        </div>

        <p className="text-sm text-white/70 leading-relaxed max-w-[95%]">
          {isSpanish 
            ? "Plataforma SaaS de vanguardia que revoluciona el auto-aprendizaje mediante rutas didácticas ultra-personalizadas. Tu arquitectura de IA diseña mapas dinámicos que se adaptan a tu ritmo de comprensión real."
            : "Cutting-edge SaaS platform revolutionizing self-learning through ultra-personalized educational paths. Your AI architecture designs dynamic learning maps that adapt to your real-time comprehension pace."
          }
        </p>

        <div className="flex gap-3 mt-4">
          <a
            href="#"
            className="flex-1 bg-[#FF7A5C] hover:bg-[#ff8b71] text-white py-2.5 rounded-xl text-[10px] font-bold shadow-[0_4px_15px_rgba(255,122,92,0.3)] transition-all text-center uppercase tracking-widest"
          >
            {isSpanish ? "Ver Arquitectura" : "View Architecture"}
          </a>

          <a
            href="#"
            className="flex-1 border border-white/10 hover:bg-white/5 text-white/80 py-2.5 rounded-xl text-[10px] font-bold transition-all text-center uppercase tracking-widest"
          >
            {isSpanish ? "Repositorio" : "Repository"}
          </a>
        </div>
      </div>
    </CardBase>
  );
}