import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Optional stagger delay in ms, useful inside a mapped grid */
  delay?: number;
  /** Element tag to render, defaults to div */
  as?: "div" | "section" | "li";
  id?: string;
  style?: CSSProperties;
}

/**
 * Wraps content and fades/slides it in the first time it scrolls into view.
 * Respects prefers-reduced-motion via CSS (see index.css .reveal rules).
 */
function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  id,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      id={id}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
      style={{
        ...style,
        ...(visible && delay ? { animationDelay: `${delay}ms` } : undefined),
      }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
