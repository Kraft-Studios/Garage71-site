import { useReveal } from "../../hooks/useReveal";

/**
 * Wraps children in a fade-up scroll reveal. `as` lets the wrapper render
 * as a semantically appropriate element (div, li, article, ...).
 */
export default function Reveal({ children, as: Tag = "div", delay = 0, className = "", ...rest }) {
  const { ref, isVisible } = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={isVisible ? { animationDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
