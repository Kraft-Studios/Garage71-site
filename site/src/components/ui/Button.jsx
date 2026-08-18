const VARIANTS = {
  primary: "bg-red text-offwhite hover:bg-red-glow border border-red",
  outline: "bg-transparent text-offwhite border border-offwhite/30 hover:border-offwhite hover:bg-offwhite/5",
  ghost: "bg-transparent text-offwhite border border-transparent hover:border-offwhite/30",
};

/**
 * Shared CTA button. Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  icon,
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 px-7 py-3.5 font-display font-semibold uppercase tracking-[0.12em] text-sm transition-colors duration-200 ${VARIANTS[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel") || href.startsWith("mailto");
    return (
      <a
        href={href}
        className={classes}
        {...(isExternal ? { target: href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
      {icon}
    </button>
  );
}
