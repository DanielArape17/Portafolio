import CardBase from "./CardBase";
import { FaLinkedinIn } from "react-icons/fa";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";


export default function LinkedinCard() {
  const { isSpanish } = useLanguageSelector();
  
  return(
    <CardBase
      cols={4}
      rows={1}
      className="relative col-span-4 row-span-1 flex flex-col items-center justify-center rounded-2xl p-1
      bg-gradient-to-br from-[#0A192F]/70 via-[#0A66C2]/20 to-[#1B2A4A]/60 
      backdrop-blur-lg border border-[#0A66C2]/30
      shadow-[0_0_25px_rgba(10,102,194,0.15)] 
      overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
    >
      <FaLinkedinIn className="linkedin-icon text-[#0A66C2] text-5xl mb-1 drop-shadow-[0_0_12px_rgba(10,102,194,0.5)]" />

      <h3 className="text-white text-xl font-semibold">{isSpanish ? "Conecta conmigo" : "Connect with me"}</h3>
      <p className="text-[#B0C7F7] text-sm mt-1"> 
        {isSpanish
          ? "Construyamos conexiones profesionales."
          : "Let's build professional connections."}
      </p>

      <a
        href="https://www.linkedin.com/in/daniel-arap%C3%A9-g%C3%B3mez-70805a315/" 
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-5 py-2 bg-[#0A66C2]/20 text-[#0A66C2] rounded-lg border border-[#0A66C2]/30 
        hover:bg-[#0A66C2]/30 transition-all duration-300 text-sm font-medium 
        shadow-[0_0_10px_rgba(10,102,194,0.2)]"
      >
        {isSpanish ? "Visitar perfil →" : "Visit profile →"}
      </a>
    </CardBase>
  );
}