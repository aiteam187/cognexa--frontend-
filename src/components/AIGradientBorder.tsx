import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";
import type { MotionValue } from "motion/react";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { FiChevronDown, FiLoader } from "react-icons/fi";
import { twMerge } from "tailwind-merge";

/**
    IMPORTANT!!

    This component requires the following CSS class to be present for the inner glow:

    .ai-glow-spill-mask {
      mask-image: radial-gradient(
        ellipse 100% 100% at 50% 50%,
        transparent 50%,
        black 100%
      );
    }
   */

const Example = () => {
  return (
    <div className="bg-neutral-950 px-4 py-24">
      <AIGradientAnimationCard />
    </div>
  );
};

const TONE_STOPS: Record<string, string> = {
  neon: "transparent 0%, #f472b600 5%, #f472b6 10%, #c084fc 18%, #818cf8 26%, #38bdf8 34%, #2dd4bf 42%, #fbbf24 46%, #fbbf2400 52%, transparent 56%",
  brand:
    "transparent 0%, #0e8ffb00 5%, #0e8ffb 12%, #38bdf8 22%, #7dd3fc 32%, #0e8ffb 44%, #0e8ffb00 52%, transparent 56%",
  // Evenly lit ring with no bright arc / dark gap, so nothing ever looks "stronger" at any one edge
  "brand-soft":
    "#0e8ffb4d 0%, #7dd3fc99 25%, #0e8ffb4d 50%, #38bdf899 75%, #0e8ffb4d 100%",
};

export const AIGradientBorder = ({
  children,
  className,
  duration = 3,
  tone = "neon",
  glow = true,
  turn: sharedTurn,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
  tone?: "neon" | "brand" | "brand-soft";
  glow?: boolean;
  /** Pass a shared MotionValue (from useSharedGradientTurn) to keep multiple borders perfectly in sync */
  turn?: MotionValue<number>;
}) => {
  const ownTurn = useMotionValue(0);
  const turn = sharedTurn ?? ownTurn;
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "100px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (sharedTurn || !inView) return;
    const controls = animate(ownTurn, 1, {
      ease: "linear",
      duration,
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [duration, ownTurn, sharedTurn, inView]);

  const gradient = useMotionTemplate`conic-gradient(from ${turn}turn, ${TONE_STOPS[tone]})`;

  return (
    <div
      ref={containerRef}
      className={twMerge("relative rounded-[inherit] p-px", className)}
    >
      <motion.div
        style={{ backgroundImage: gradient }}
        className="absolute inset-0 rounded-[inherit]"
      />

      <div className="relative overflow-hidden rounded-[inherit]">
        <div className="relative">{children}</div>

        {glow && (
          <motion.div
            style={{ backgroundImage: gradient }}
            className="ai-glow-spill-mask pointer-events-none absolute inset-[-40%] z-10 overflow-hidden opacity-70 blur-2xl"
          ></motion.div>
        )}
      </div>
    </div>
  );
};

const AIGradientAnimationCard = () => {
  return (
    <AIGradientBorder className="mx-auto w-full max-w-sm rounded-3xl border border-neutral-700">
      <div className="grid gap-6 bg-neutral-900 p-4 pb-6">
        <Logo />
        <UserQuestion />
        <AITextOutput />
        <LoadingSpinner />
      </div>
    </AIGradientBorder>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <svg
      width="40"
      height="auto"
      viewBox="0 0 50 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fill-neutral-50"
    >
      <path d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"></path>
      <path d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"></path>
    </svg>
  );
};

const UserQuestion = () => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-2xl border border-neutral-700 bg-neutral-950 p-4 transition-colors hover:bg-neutral-900">
      <img
        src="https://api.dicebear.com/8.x/lorelei/svg?seed=Tom&backgroundColor=10b981"
        alt="avatar"
        className="size-5 rounded-full"
      />

      <p className="line-clamp-1 flex-1 text-xs text-neutral-500">
        What is the meaning of life?
      </p>

      <FiChevronDown className="text-neutral-500" />
    </div>
  );
};

const AITextOutput = () => {
  return (
    <p className="text-sm leading-relaxed text-neutral-300">
      Hmm, that's a tough one... The traditional answer is 42, but I don't
      think that's clever enough for this demo application. Let me search the
      internet for some answers.
    </p>
  );
};

const LoadingSpinner = () => {
  return (
    <div className="flex items-center gap-2">
      <FiLoader className="animate-spin text-neutral-500" />
      <p className="text-xs text-neutral-500">Committing tomfoolery...</p>
    </div>
  );
};

export default Example;
