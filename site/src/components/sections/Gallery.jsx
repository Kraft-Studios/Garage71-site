import { useMemo, useState } from "react";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import Lightbox from "../ui/Lightbox";
import { galleryItems, galleryCategories } from "../../data/gallery";
import { ExpandIcon } from "../ui/Icons";

const SIZE_CLASSES = {
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  large: "sm:col-span-2 sm:row-span-2",
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory.toLowerCase());
  }, [activeCategory]);

  return (
    <section id="gallery" className="bg-carbon py-24 md:py-32 px-5 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <SectionHeading
            eyebrow="Portfolio"
            index="04"
            title="Gallery"
            description="A look inside the workshop, the vehicles that pass through it, and the performance work we're proudest of."
          />

          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 font-display uppercase text-sm tracking-[0.12em] border transition-colors ${
                  activeCategory === category
                    ? "bg-red border-red text-offwhite"
                    : "border-line text-ash hover:text-offwhite hover:border-offwhite/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[160px] sm:auto-rows-[180px] lg:auto-rows-[200px] gap-2 sm:gap-3">
          {filtered.map((item, i) => (
            <Reveal
              as="button"
              key={item.id}
              delay={(i % 8) * 60}
              onClick={() => setLightboxIndex(i)}
              className={`group relative overflow-hidden bg-graphite text-left ${SIZE_CLASSES[item.size] || ""}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-carbon/0 group-hover:bg-carbon/40 transition-colors duration-300" />
              <span className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center bg-carbon/60 text-offwhite opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExpandIcon className="w-4 h-4" />
              </span>
              <span className="absolute bottom-0 left-0 right-0 p-3 text-xs text-offwhite/90 bg-gradient-to-t from-carbon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                {item.alt}
              </span>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          items={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  );
}
