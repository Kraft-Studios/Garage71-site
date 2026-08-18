import { business, navLinks, whatsappLink } from "../../data/business";
import { services } from "../../data/services";

// No verified Garage71 social media accounts were found in the supplied
// material — leave this empty rather than invent handles. Add entries here
// (label, href) if/when official accounts are confirmed.
const socialLinks = [];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-carbon border-t border-line pt-16 pb-8 px-5 md:px-8">
      <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <a href="#home" className="font-display font-extrabold uppercase tracking-wide text-2xl text-offwhite">
            Garage<span className="text-red">71</span>
          </a>
          <p className="mt-4 text-ash text-sm leading-relaxed max-w-xs">
            AA approved automotive workshop in Kimberley, Northern Cape — servicing, diagnostics, ECU
            remapping and custom fabrication.
          </p>
          {socialLinks.length > 0 && (
            <div className="mt-5 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ash hover:text-red transition-colors text-sm"
                >
                  {social.label}
                </a>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="font-display uppercase text-sm tracking-[0.2em] text-offwhite mb-5">Navigate</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ash hover:text-offwhite transition-colors text-sm">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display uppercase text-sm tracking-[0.2em] text-offwhite mb-5">Services</h3>
          <ul className="space-y-3">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <a href="#services" className="text-ash hover:text-offwhite transition-colors text-sm">
                  {service.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display uppercase text-sm tracking-[0.2em] text-offwhite mb-5">Contact</h3>
          <ul className="space-y-3 text-ash text-sm">
            <li>{business.address.line1}</li>
            <li>{business.address.line2}</li>
            <li>
              <a href={business.phoneHref} className="hover:text-offwhite transition-colors">
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-offwhite transition-colors">
                WhatsApp Garage71
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl mt-14 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-ash text-xs">
          © {year} Garage71. All rights reserved.
        </p>
        <p className="text-ash text-xs uppercase tracking-[0.15em]">AA Approved Garage · RMI Member · MIWA</p>
      </div>
    </footer>
  );
}
