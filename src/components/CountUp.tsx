import { useEffect, useRef, useState } from "react";

interface CountUpProps {
  /** Display value, e.g. "50+", "99%+", "302", "1.2s", "24x7". The leading
   * number animates from 0; any prefix/suffix is kept as-is. Values with no
   * leading number (e.g. "Real-time") render unchanged. */
  value: string;
  duration?: number;
  className?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

function CountUp({ value, duration = 1500, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  const target = match ? parseFloat(match[1]) : null;
  const suffix = match ? match[2] : "";
  const decimals = match && match[1].includes(".")
    ? match[1].split(".")[1].length
    : 0;

  const [display, setDisplay] = useState(target === null ? value : "0");

  useEffect(() => {
    const node = ref.current;
    if (!node || target === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!started || target === null) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(target.toFixed(decimals));
      return;
    }

    let raf: number;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = target * easeOutCubic(progress);
      setDisplay(current.toFixed(decimals));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, decimals]);

  if (target === null) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}

export default CountUp;
