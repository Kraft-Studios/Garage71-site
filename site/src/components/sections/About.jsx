import aboutImage from "../../assets/garage71/hero/garage71-storefront-day.webp";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { business } from "../../data/business";

const points = [
  {
    title: "Quality workmanship",
    body: "Every vehicle that comes through our doors gets the same attention to detail, from a minor service to a full custom build.",
  },
  {
    title: "Broad automotive expertise",
    body: "Servicing, diagnostics, ECU remapping, custom exhaust fabrication and vehicle conversions, all handled in-house.",
  },
  {
    title: "Customer-focused service",
    body: "We explain what your vehicle needs and why, so you can make an informed decision before any work begins.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative bg-carbon py-24 md:py-32 px-5 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative">
            <img
              src={aboutImage}
              alt="The Garage71 workshop building on South Circular Road, Kimberley"
              className="w-full h-[420px] md:h-[520px] object-cover"
              loading="lazy"
              width="1200"
              height="900"
            />
            <div className="absolute -bottom-6 -right-6 hidden sm:flex flex-col bg-red text-offwhite px-7 py-5 font-display">
              <span className="text-4xl font-extrabold leading-none">71</span>
              <span className="text-xs uppercase tracking-[0.2em] mt-1">Kimberley</span>
            </div>
            <div className="absolute inset-0 border border-line pointer-events-none" aria-hidden="true" />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="About Garage71" index="01" title="Automotive work, done right" />

          <p className="mt-6 text-ash text-base md:text-lg leading-relaxed max-w-xl">
            Garage71 is an automotive workshop based at {business.address.line1}, {business.address.line2}. We
            work on everything from routine servicing and diagnostics to custom exhaust fabrication and
            performance builds — for daily drivers, bakkies and dedicated project cars alike. As an{" "}
            <span className="text-offwhite">AA approved service and repair centre</span>, our aim is straightforward:
            reliable repairs, honest advice, and modern automotive solutions tailored to your vehicle.
          </p>

          <ul className="mt-10 space-y-7">
            {points.map((point, i) => (
              <Reveal as="li" key={point.title} delay={i * 100} className="flex gap-5">
                <span className="font-display text-red text-2xl font-bold shrink-0 w-8">{`0${i + 1}`}</span>
                <div>
                  <h3 className="font-display uppercase tracking-wide text-lg text-offwhite">{point.title}</h3>
                  <p className="mt-1.5 text-ash leading-relaxed">{point.body}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
