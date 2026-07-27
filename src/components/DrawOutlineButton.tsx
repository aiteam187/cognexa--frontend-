import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

interface DrawOutlineButtonProps extends ComponentPropsWithoutRef<"a"> {
  /** Tailwind background color class used for the drawn outline lines */
  lineClassName?: string;
}

function DrawOutlineButton({
  children,
  className,
  lineClassName = "bg-white",
  ...rest
}: DrawOutlineButtonProps) {
  return (
    <a {...rest} className={twMerge("group relative", className)}>
      <span className="relative z-10">{children}</span>

      {/* TOP */}
      <span
        className={twMerge(
          "absolute top-0 left-0 h-[2px] w-0 transition-all duration-100 group-hover:w-full",
          lineClassName,
        )}
      />
      {/* RIGHT */}
      <span
        className={twMerge(
          "absolute top-0 right-0 h-0 w-[2px] transition-all delay-100 duration-100 group-hover:h-full",
          lineClassName,
        )}
      />
      {/* BOTTOM */}
      <span
        className={twMerge(
          "absolute right-0 bottom-0 h-[2px] w-0 transition-all delay-200 duration-100 group-hover:w-full",
          lineClassName,
        )}
      />
      {/* LEFT */}
      <span
        className={twMerge(
          "absolute bottom-0 left-0 h-0 w-[2px] transition-all delay-300 duration-100 group-hover:h-full",
          lineClassName,
        )}
      />
    </a>
  );
}

export default DrawOutlineButton;
