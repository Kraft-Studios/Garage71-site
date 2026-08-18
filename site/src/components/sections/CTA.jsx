import ctaImage from "../../assets/garage71/hero/garage71-workshop-twilight-alt.jpg";
import Reveal from "../ui/Reveal";
import { whatsappLink } from "../../data/business";
import { WhatsAppIcon } from "../ui/Icons";

export default function CTA() {
  return (
    <section className="relative py-28 md:py-36 px-5 md:px-8 overflow-hidden">
      <img
        src={ctaImage}
        alt="Garage71 workshop and forecourt at dusk"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-carbon/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-carbon/70" />

      <Reveal className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="font-display uppercase text-sm tracking-[0.35em] text-red">Ready when you are</span>
        <h2 className="mt-5 font-display font-extrabold uppercase text-4xl sm:text-5xl lg:text-6xl text-offwhite leading-[0.95]">
          Ready to get your vehicle sorted?
        </h2>
        <p className="mt-6 text-ash text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Book your next service with Garage71, or send us a message on WhatsApp and we'll get back to you.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red text-offwhite hover:bg-red-glow transition-colors font-display uppercase text-sm tracking-[0.15em]"
          >
            Contact Garage71
          </a>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-offwhite/30 text-offwhite hover:border-offwhite hover:bg-offwhite/5 transition-colors font-display uppercase text-sm tracking-[0.15em]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      </Reveal>
    </section>
  );
}
