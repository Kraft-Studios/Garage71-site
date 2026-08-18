import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { GaugeIcon, ShieldIcon, WrenchIcon, TargetIcon } from "../ui/Icons";

const reasons = [
  {
    icon: TargetIcon,
    title: "Precision",
    body: "Professional attention to detail on every job, from a routine service to a full custom fabrication.",
  },
  {
    icon: ShieldIcon,
    title: "Reliability",
    body: "Quality-focused automotive service you can depend on, backed by AA approval and RMI membership.",
  },
  {
    icon: WrenchIcon,
    title: "Expertise",
    body: "A broad range of automotive solutions under one roof — servicing, diagnostics, remapping and fabrication.",
  },
  {
    icon: GaugeIcon,
    title: "Custom Service",
    body: "Solutions tailored to your vehicle and what you actually need it to do, not a one-size-fits-all approach.",
  },
];

export default function WhyGarage71() {
  return (
    <section className="bg-charcoal py-24 md:py-32 px-5 md:px-8 border-t border-line">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Why Garage71" index="03" title="Built on the details that matter" align="center" className="mx-auto" />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <Reveal
                as="div"
                key={reason.title}
                delay={i * 100}
                className="bg-charcoal p-8 flex flex-col items-center text-center gap-4"
              >
                <div className="w-14 h-14 rounded-full border border-red/40 flex items-center justify-center text-red">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display uppercase text-xl tracking-wide text-offwhite">{reason.title}</h3>
                <p className="text-ash text-sm leading-relaxed">{reason.body}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
