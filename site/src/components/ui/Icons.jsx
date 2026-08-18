// Small hand-rolled icon set — avoids pulling in an icon library for a
// handful of glyphs. All accept standard SVG props (className, etc).

export const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.04 3C9.16 3 3.56 8.6 3.56 15.48c0 2.3.62 4.46 1.7 6.32L3 29l7.4-2.2a12.4 12.4 0 0 0 5.64 1.36h.01c6.88 0 12.48-5.6 12.48-12.48C28.53 8.6 22.93 3 16.04 3Zm0 22.7h-.01a10.3 10.3 0 0 1-5.26-1.44l-.38-.22-4.4 1.3 1.32-4.3-.24-.4a10.3 10.3 0 0 1-1.58-5.46c0-5.7 4.64-10.34 10.36-10.34 2.77 0 5.37 1.08 7.32 3.04a10.28 10.28 0 0 1 3.03 7.32c0 5.7-4.64 10.5-10.16 10.5Zm5.68-7.72c-.31-.16-1.84-.9-2.12-1-.29-.1-.5-.16-.7.16-.22.32-.83 1-1.02 1.2-.19.22-.37.24-.68.08-.31-.16-1.32-.48-2.51-1.53-.93-.82-1.55-1.84-1.74-2.15-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.22.05-.4-.03-.56-.08-.16-.7-1.67-.95-2.28-.25-.6-.51-.51-.7-.52h-.6c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.61 0 1.54 1.13 3.03 1.28 3.24.16.22 2.22 3.4 5.39 4.76.75.33 1.34.52 1.8.66.76.24 1.44.21 1.99.13.6-.09 1.84-.75 2.1-1.48.26-.72.26-1.34.18-1.47-.07-.13-.28-.21-.6-.37Z" />
  </svg>
);

export const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.5 5.5c0-1.1.9-2 2-2h2.2c.5 0 .93.34 1.04.83l.87 3.86a1.07 1.07 0 0 1-.3 1L7.6 10.9a13.5 13.5 0 0 0 5.5 5.5l1.7-1.7c.28-.28.68-.4 1.06-.3l3.85.87c.5.11.84.54.84 1.04V18.5c0 1.1-.9 2-2 2h-1C9.5 20.5 3.5 14.5 3.5 6.5v-1Z"
    />
  </svg>
);

export const MapPinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" strokeLinecap="round" strokeLinejoin="round" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m4 7 8 6 8-6" />
  </svg>
);

export const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 2" />
  </svg>
);

export const ChevronDownIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
  </svg>
);

export const ArrowRightIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0-6-6m6 6-6 6" />
  </svg>
);

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path strokeLinecap="round" d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />
  </svg>
);

export const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path strokeLinecap="round" d="m5 5 14 14M19 5 5 19" />
  </svg>
);

export const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m4 12.5 5 5L20 7" />
  </svg>
);

export const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3.5 5 6.3v5.4c0 4.7 3 8 7 9.3 4-1.3 7-4.6 7-9.3V6.3L12 3.5Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-4.2" />
  </svg>
);

export const GaugeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 14a8 8 0 1 1 16 0" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14 15.5 9" />
    <path strokeLinecap="round" d="M4 14h1M19 14h1M12 5v1M6.3 7.3l.7.7M17.7 7.3l-.7.7" />
  </svg>
);

export const WrenchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.7 6.3a4 4 0 0 0-5.4 4.6L4 16.2V20h3.8l5.3-5.3a4 4 0 0 0 4.6-5.4l-2.6 2.6-2.1-.6-.6-2.1 2.3-2.3Z"
    />
  </svg>
);

export const TargetIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.6" fill="currentColor" />
  </svg>
);

export const ExpandIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4H4v5M15 4h5v5M9 20H4v-5M15 20h5v-5" />
  </svg>
);
