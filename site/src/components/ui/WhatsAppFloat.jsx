import { whatsappLink } from "../../data/business";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat to Garage71 on WhatsApp"
      className="md:hidden fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-carbon shadow-[0_6px_20px_rgba(0,0,0,0.4)] active:scale-95 transition-transform"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
