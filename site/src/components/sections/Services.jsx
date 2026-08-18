import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { services } from "../../data/services";
import { ArrowRightIcon } from "../ui/Icons";

export default function Services() {
  return (
    <section id="services" className="bg-charcoal py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <SectionHeading
            eyebrow="What we do"
            index="02"
            title="Our Services"
            description="From day-to-day maintenance to performance work — everything is carried out in-house at our Kimberley workshop."
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {services.map((service, i) => (
            <Reveal
              as="article"
              key={service.id}
              delay={(i % 3) * 90}
              className="group relative bg-charcoal overflow-hidden"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.name} at Garage71`}
                  className="w-full h-full object-cover grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-500 ease-out"
                  loading="lazy"
                  width="600"
                  height="450"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-transparent" />
                <span className="absolute top-4 left-4 font-display text-xs uppercase tracking-[0.2em] text-offwhite/80 bg-carbon/70 px-3 py-1">
                  {`0${i + 1}`}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display uppercase text-xl tracking-wide text-offwhite flex items-center justify-between gap-3">
                  {service.name}
                  <ArrowRightIcon className="w-4 h-4 text-red shrink-0 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </h3>
                <p className="mt-2.5 text-ash text-sm leading-relaxed">{service.description}</p>
              </div>
              <div className="absolute left-0 top-0 h-full w-0 bg-red transition-all duration-300 group-hover:w-1" aria-hidden="true" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
