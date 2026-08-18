import Reveal from "../ui/Reveal";
import z350 from "../../assets/garage71/performance/garage71-350z-build.jpg";
import exhaustFab from "../../assets/garage71/exhaust/garage71-exhaust-elbow-fab.jpg";
import intakeFab from "../../assets/garage71/performance/garage71-audi-s3-intake.jpg";

const panels = [
  {
    image: z350,
    label: "ECU Remapping",
    title: "More power. Better efficiency.",
    body: "Precision ECU remapping unlocks your engine's real potential — more torque, smoother delivery and improved fuel efficiency, tuned specifically for your vehicle.",
  },
  {
    image: exhaustFab,
    label: "Exhaust Fabrication",
    title: "Built in-house, tip to tip.",
    body: "Every Garage71 exhaust is hand-fabricated on-site — from downpipes to full custom systems — for better flow and a sound to match.",
  },
  {
    image: intakeFab,
    label: "Performance Builds",
    title: "Serious work on serious cars.",
    body: "Intakes, conversions and full performance builds for the cars that get driven properly, not just serviced.",
  },
];

export default function FeaturedPerformance() {
  return (
    <section className="bg-carbon" aria-label="Performance work">
      <div className="grid md:grid-cols-3">
        {panels.map((panel, i) => (
          <Reveal
            as="article"
            key={panel.label}
            delay={i * 120}
            className="group relative h-[70vh] min-h-[420px] md:h-[85vh] overflow-hidden"
          >
            <img
              src={panel.image}
              alt={panel.title}
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.35] group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/60 to-carbon/10" />
            <div className="absolute inset-0 border-t border-line md:border-t-0 md:border-l first:border-l-0" aria-hidden="true" />

            <div className="relative z-10 h-full flex flex-col justify-end p-7 md:p-9">
              <span className="font-display uppercase text-xs tracking-[0.3em] text-red mb-3">{panel.label}</span>
              <h3 className="font-display uppercase text-2xl md:text-3xl leading-[1.05] text-offwhite max-w-xs">
                {panel.title}
              </h3>
              <p className="mt-4 text-ash text-sm leading-relaxed max-w-xs md:opacity-0 md:max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                {panel.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
