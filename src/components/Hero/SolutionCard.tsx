import { useRef } from "react";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowRight } from "lucide-react";
import type { HeroSolution } from "../../data/heroSolutions";

const MotionLink = motion.create(Link);
const MotionAnchor = motion.create("a");

interface SolutionCardProps {
  solution: HeroSolution;
  delay?: number;
  index: number;
}

const accents = [
  {
    tone: "text-[#0E8FFB]",
    iconBg: "from-[#0E8FFB] to-[#0c6fd0]",
    iconShadow: "shadow-[0_8px_20px_-6px_rgb(14_143_251_/_0.5)]",
    ring: "hover:border-[#0E8FFB]/25",
    glow: "hover:shadow-[0_24px_48px_-12px_rgb(14_143_251_/_0.3)]",
    number: "group-hover:text-[#0E8FFB]/40",
  },
  {
    tone: "text-[#ea580c]",
    iconBg: "from-[#f97316] to-[#c2410c]",
    iconShadow: "shadow-[0_8px_20px_-6px_rgb(249_115_22_/_0.5)]",
    ring: "hover:border-[#f97316]/25",
    glow: "hover:shadow-[0_24px_48px_-12px_rgb(249_115_22_/_0.3)]",
    number: "group-hover:text-[#f97316]/40",
  },
];

function SolutionCard({ solution, delay = 0, index }: SolutionCardProps) {
  const { title, description, icon: Icon, href } = solution;
  const cardRef = useRef<HTMLAnchorElement>(null);
  const accent = accents[index % accents.length];

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [9, -9]), {
    stiffness: 300,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-9, 9]), {
    stiffness: 300,
    damping: 22,
  });

  const glareX = useTransform(mouseX, (v) => `${v * 100}%`);
  const glareY = useTransform(mouseY, (v) => `${v * 100}%`);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgb(255 255 255 / 0.6), transparent 55%)`;

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const cardClassName = `group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_1px_2px_rgb(0_0_0_/_0.04)] transition-[border-color,box-shadow] duration-300 ${accent.ring} ${accent.glow}`;

  const content = (
    <>
      {/* Spotlight glare that follows the cursor */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glareBackground }}
      />

      {/* Top accent line that draws in on hover */}
      <span className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#0E8FFB] to-[#fb923c] transition-transform duration-300 group-hover:scale-x-100" />

      <div className="mb-4 flex items-start justify-between">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${accent.iconBg} ${accent.iconShadow} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
          style={{ transform: "translateZ(30px)" }}
        >
          <Icon className="h-6 w-6 text-white" strokeWidth={1.5} />
        </span>

        <span
          className={`font-mono text-xs font-semibold text-gray-200 transition-colors duration-300 ${accent.number}`}
        >
          0{index + 1}
        </span>
      </div>

      <h4
        className="mb-1.5 text-base leading-snug font-semibold text-gray-900"
        style={{ transform: "translateZ(20px)" }}
      >
        {title}
      </h4>
      <p className="text-sm leading-relaxed text-gray-500">
        {description}
      </p>

      <span
        className={`mt-4 flex items-center gap-1.5 text-sm font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100 ${accent.tone}`}
      >
        Explore
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </>
  );

  const motionProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: { rotateX, rotateY, transformStyle: "preserve-3d" as const },
    className: cardClassName,
  };

  return (
    <li className="hero-card" style={{ animationDelay: `${delay}ms`, perspective: 1200 }}>
      {href.startsWith("#") ? (
        <MotionAnchor ref={cardRef} href={href} {...motionProps}>
          {content}
        </MotionAnchor>
      ) : (
        <MotionLink ref={cardRef} to={href} {...motionProps}>
          {content}
        </MotionLink>
      )}
    </li>
  );
}

export default SolutionCard;
