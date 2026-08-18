import heroImage from "../../assets/garage71/hero/garage71-workshop-twilight.jpg";
import { business, whatsappLink } from "../../data/business";
import { WhatsAppIcon, ChevronDownIcon } from "../ui/Icons";

export default function Hero() {
  return (
    <section id="home" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-carbon">
      <img
        src={heroImage}
        alt="Garage71 workshop forecourt at dusk with a line-up of performance and club cars outside the Kimberley premises"
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] scale-105 motion-safe:animate-[fade-in_1.4s_ease]"
        fetchPriority="high"
      />
      {/* Cinematic overlay: readability without flattening the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/55 to-carbon/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/85 via-carbon/20 to-transparent" />
      <div className="absolute inset-0 bg-noise" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-24 md:pb-28 pt-28">
        <div className="flex items-center gap-3 text-red font-display uppercase text-sm md:text-base tracking-[0.35em] mb-5 motion-safe:animate-fade-up" style={{ animationDelay: "150ms" }}>
          <span className="h-px w-10 bg-red" aria-hidden="true" />
          Kimberley · Northern Cape
        </div>

        <h1
          className="font-display font-extrabold uppercase text-offwhite leading-[0.88] text-[15vw] sm:text-8xl lg:text-[8.5rem] motion-safe:animate-fade-up"
          style={{ animationDelay: "260ms" }}
        >
          Garage<span className="text-red">71</span>
        </h1>

        <p
          className="mt-5 font-display uppercase text-xl sm:text-2xl md:text-3xl tracking-[0.08em] text-silver motion-safe:animate-fade-up"
          style={{ animationDelay: "380ms" }}
        >
          {business.tagline}
        </p>

        <p
          className="mt-4 max-w-xl text-ash text-base md:text-lg leading-relaxed motion-safe:animate-fade-up"
          style={{ animationDelay: "480ms" }}
        >
          An AA approved automotive workshop built around your vehicle — servicing, diagnostics, ECU
          remapping and custom exhaust fabrication, done properly.
        </p>

        <div
          className="mt-9 flex flex-wrap items-center gap-4 motion-safe:animate-fade-up"
          style={{ animationDelay: "600ms" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red text-offwhite hover:bg-red-glow transition-colors font-display uppercase text-sm tracking-[0.15em]"
          >
            Book a Service
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

        <div
          className="mt-10 flex items-center gap-6 text-ash text-xs uppercase tracking-[0.2em] font-display motion-safe:animate-fade-up"
          style={{ animationDelay: "700ms" }}
        >
          <span>AA Approved Garage</span>
          <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
          <span>RMI Member</span>
          <span className="h-1 w-1 rounded-full bg-line" aria-hidden="true" />
          <span>MIWA</span>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-offwhite/70 hover:text-offwhite motion-safe:animate-bounce"
      >
        <ChevronDownIcon className="w-7 h-7" />
      </a>
    </section>
  );
}
