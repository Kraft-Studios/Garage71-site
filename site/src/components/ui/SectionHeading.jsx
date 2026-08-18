import Reveal from "./Reveal";

/**
 * Consistent section header: small red uppercase eyebrow label,
 * large display heading, optional supporting copy. `light` flips
 * text color for use on light backgrounds.
 */
export default function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  light = false,
  className = "",
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${className}`}>
      <div className="flex items-center gap-3 text-red font-display text-sm md:text-base tracking-[0.35em] uppercase">
        {index && <span className="text-ash">{index}</span>}
        <span className="h-px w-8 bg-red" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2
        className={`font-display font-bold uppercase leading-[0.95] text-4xl sm:text-5xl lg:text-6xl ${
          light ? "text-carbon" : "text-offwhite"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${light ? "text-steel" : "text-ash"}`}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
