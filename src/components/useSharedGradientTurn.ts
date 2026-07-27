import { animate, useMotionValue } from "motion/react";
import { useEffect } from "react";

/** Creates one looping 0->1 MotionValue to drive several AIGradientBorder rings in perfect sync. */
export function useSharedGradientTurn(duration = 5) {
  const turn = useMotionValue(0);

  useEffect(() => {
    const controls = animate(turn, 1, {
      ease: "linear",
      duration,
      repeat: Infinity,
    });
    return () => controls.stop();
  }, [duration, turn]);

  return turn;
}
