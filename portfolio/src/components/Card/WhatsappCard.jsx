import CardBase from "./CardBase";
import { FaWhatsapp } from "react-icons/fa";
import { useLanguageSelector } from "@/hooks/useLanguageSelector";


export default function WhatsappCard() {
  const { isSpanish } = useLanguageSelector();

  return(
    <CardBase
      cols={4}
      rows={1}
      className="relative col-span-4 row-span-1 flex flex-col items-center justify-center rounded-2xl p-1
      bg-gradient-to-br from-[#0A5C38]/60 via-[#0ABF5B]/30 to-[#063B28]/60 
      backdrop-blur-lg border border-[#0ABF5B]/30 
      shadow-[0_0_30px_rgba(10,191,91,0.15)] 
      transition-transform duration-300 hover:scale-[1.02] overflow-hidden"
    >
      <FaWhatsapp className="whatsapp-icon text-[#25D366] text-5xl drop-shadow-[0_0_12px_rgba(37,211,102,0.5)] mb-1" />

      <h3 className="text-white text-xl font-semibold">
        {isSpanish ? "¿Hablamos por WhatsApp?" : "Shall we chat on WhatsApp?"}
      </h3>
      <p className="text-[#b2f5ea] text-sm mt-1">
        {isSpanish
          ? "Estoy disponible para conversar o colaborar."
          : "I’m available to chat or collaborate."}
      </p>

      <a
        href="https://wa.me/584121494288"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 px-5 py-2 bg-[#25D366]/20 text-[#25D366] rounded-lg border border-[#25D366]/30 
        hover:bg-[#25D366]/30 transition-all duration-300 text-sm font-medium 
        shadow-[0_0_10px_rgba(37,211,102,0.2)]"
      >
        {isSpanish ? "Enviar mensaje →" : "Send Message →"}
      </a>
    </CardBase>
  );
}