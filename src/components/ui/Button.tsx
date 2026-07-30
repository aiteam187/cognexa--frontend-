import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Loader2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#0E8FFB] text-white shadow-md hover:opacity-90 hover:shadow-lg focus-visible:ring-[#0E8FFB]/50",
  secondary:
    "bg-gray-900 text-white shadow-md hover:opacity-90 hover:shadow-lg focus-visible:ring-gray-900/40",
  outline:
    "border border-[#0E8FFB]/30 text-[#0E8FFB] hover:bg-[#0E8FFB]/10 focus-visible:ring-[#0E8FFB]/40",
  ghost:
    "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-300",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

interface BaseProps {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  /** Renders as a react-router Link instead of an anchor/button */
  to?: string;
}

type ButtonProps = BaseProps &
  Omit<
    ComponentPropsWithoutRef<"button">,
    "children" | "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd"
  > & {
    href?: string;
    children: React.ReactNode;
  };

const MotionButton = motion.create("button");
const MotionAnchor = motion.create("a");
const MotionLink = motion.create(Link);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    variant = "primary",
    size = "md",
    loading = false,
    disabled,
    to,
    href,
    className,
    children,
    ...rest
  },
  ref,
) {
  const classes = twMerge(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  const motionProps = {
    whileHover: disabled || loading ? undefined : { y: -2 },
    whileTap: disabled || loading ? undefined : { scale: 0.97 },
    transition: { duration: 0.15 },
  };

  const content = (
    <>
      {loading && <Loader2 className="h-4 w-4 animate-spin" aria-hidden />}
      {children}
    </>
  );

  if (to) {
    return (
      <MotionLink to={to} className={classes} {...motionProps}>
        {content}
      </MotionLink>
    );
  }

  if (href) {
    return (
      <MotionAnchor href={href} className={classes} {...motionProps}>
        {content}
      </MotionAnchor>
    );
  }

  return (
    <MotionButton
      ref={ref}
      className={classes}
      disabled={disabled || loading}
      aria-busy={loading}
      {...motionProps}
      {...rest}
    >
      {content}
    </MotionButton>
  );
});

export default Button;
