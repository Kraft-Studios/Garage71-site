import { useEffect, useState } from "react";
import { business, navLinks, whatsappLink } from "../../data/business";
import { WhatsAppIcon, MenuIcon, CloseIcon } from "../ui/Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-carbon/90 backdrop-blur-md border-b border-line" : "bg-gradient-to-b from-black/70 to-transparent border-b border-transparent"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl flex items-center justify-between px-5 md:px-8 transition-all duration-300 ${
          scrolled ? "h-16" : "h-20 md:h-24"
        }`}
      >
        <a href="#home" className="font-display font-extrabold uppercase tracking-wide text-2xl md:text-3xl text-offwhite">
          Garage<span className="text-red">71</span>
        </a>

        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm uppercase tracking-[0.2em] text-silver hover:text-offwhite transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-line text-offwhite hover:border-red hover:text-red transition-colors font-display uppercase text-sm tracking-[0.12em]"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-red text-offwhite hover:bg-red-glow transition-colors font-display uppercase text-sm tracking-[0.12em]"
          >
            Book a Service
          </a>
        </div>

        <button
          type="button"
          className="md:hidden text-offwhite p-2 -mr-2"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-carbon/98 backdrop-blur-sm transition-[opacity,transform] duration-300 origin-top ${
          open ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-1" aria-label="Mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-display uppercase text-2xl tracking-wide text-offwhite py-4 border-b border-line"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-8">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-4 border border-line text-offwhite font-display uppercase text-sm tracking-[0.12em]"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Us
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-4 bg-red text-offwhite font-display uppercase text-sm tracking-[0.12em]"
            >
              Book a Service
            </a>
            <a href={business.phoneHref} className="text-center text-ash font-display tracking-[0.15em] mt-2">
              {business.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
