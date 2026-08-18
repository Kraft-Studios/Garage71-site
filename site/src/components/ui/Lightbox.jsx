import { useEffect, useCallback } from "react";
import { CloseIcon, ArrowRightIcon } from "./Icons";

/**
 * Minimal fullscreen lightbox. No external dependency — just a fixed
 * overlay with keyboard (Esc / arrow keys) and click navigation.
 */
export default function Lightbox({ items, index, onClose, onNavigate }) {
  const item = items[index];

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    },
    [index, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="fixed inset-0 z-[100] bg-carbon/97 backdrop-blur-sm flex flex-col motion-safe:animate-fade-in"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 md:px-8 py-5 text-offwhite">
        <span className="font-display uppercase tracking-[0.2em] text-sm text-ash">
          {index + 1} / {items.length}
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image viewer"
          className="p-2 hover:text-red transition-colors"
        >
          <CloseIcon className="w-7 h-7" />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 md:px-16 pb-6 min-h-0">
        <img
          src={item.src}
          alt={item.alt}
          className="max-h-full max-w-full object-contain"
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      <button
        type="button"
        aria-label="Previous image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index - 1 + items.length) % items.length);
        }}
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 text-offwhite hover:text-red transition-colors"
      >
        <ArrowRightIcon className="w-7 h-7 rotate-180" />
      </button>
      <button
        type="button"
        aria-label="Next image"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate((index + 1) % items.length);
        }}
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2 items-center justify-center w-12 h-12 text-offwhite hover:text-red transition-colors"
      >
        <ArrowRightIcon className="w-7 h-7" />
      </button>

      <p className="px-5 md:px-8 pb-5 text-center text-ash text-sm max-w-2xl mx-auto">{item.alt}</p>
    </div>
  );
}
