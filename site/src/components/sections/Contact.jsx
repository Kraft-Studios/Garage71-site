import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import ContactForm from "../ui/ContactForm";
import { business, whatsappLink } from "../../data/business";
import { MapPinIcon, PhoneIcon, WhatsAppIcon, ClockIcon } from "../ui/Icons";

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(business.mapsQuery)}&z=16&output=embed`;
const mapDirectionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(business.mapsQuery)}`;

const cards = [
  {
    icon: MapPinIcon,
    label: "Address",
    lines: [business.address.line1, business.address.line2, business.address.region],
    href: mapDirectionsHref,
    linkLabel: "Get directions",
  },
  {
    icon: PhoneIcon,
    label: "Phone",
    lines: [business.phoneDisplay, `Office: ${business.officePhoneDisplay}`],
    href: business.phoneHref,
    linkLabel: "Call now",
  },
  {
    icon: WhatsAppIcon,
    label: "WhatsApp",
    lines: [business.phoneDisplay, "Fastest way to reach us"],
    href: whatsappLink,
    linkLabel: "Send a message",
    external: true,
  },
  {
    icon: ClockIcon,
    label: "Hours",
    lines: ["Contact us directly", "for current hours"],
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-charcoal py-24 md:py-32 px-5 md:px-8 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Get in touch"
          index="05"
          title="Visit or Contact Garage71"
          description="Based in Kimberley, Northern Cape. Reach out by phone, WhatsApp, or stop by the workshop."
        />

        <div className="mt-14 grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-1 gap-px bg-line">
            {cards.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <>
                  <div className="w-11 h-11 rounded-full border border-red/40 flex items-center justify-center text-red shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-display uppercase text-xs tracking-[0.2em] text-red">{card.label}</span>
                    {card.lines.map((line) => (
                      <p key={line} className="text-offwhite text-sm leading-snug mt-0.5">
                        {line}
                      </p>
                    ))}
                    {card.href && (
                      <span className="inline-block mt-2 text-xs uppercase tracking-[0.15em] text-ash group-hover:text-red transition-colors">
                        {card.linkLabel} →
                      </span>
                    )}
                  </div>
                </>
              );

              const className = "group bg-charcoal p-6 flex gap-4 items-start";

              return card.href ? (
                <Reveal
                  as="a"
                  key={card.label}
                  href={card.href}
                  delay={i * 80}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  {content}
                </Reveal>
              ) : (
                <Reveal as="div" key={card.label} delay={i * 80} className={className}>
                  {content}
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={200} className="lg:col-span-3 h-[380px] lg:h-auto min-h-[380px] border border-line">
            <iframe
              title="Garage71 location on Google Maps"
              src={mapSrc}
              className="w-full h-full grayscale-[0.4] contrast-[1.1]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>

        <div className="mt-20 pt-16 border-t border-line">
          <Reveal>
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide text-offwhite mb-8">
              Send us a message
            </h3>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
