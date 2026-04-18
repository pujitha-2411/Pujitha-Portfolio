import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 40, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 500, damping: 40, mass: 0.3 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, input, textarea, [role='button'], .cursor-hover"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovering ? 3.2 : 1, opacity: hovering ? 0.4 : 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="h-2.5 w-2.5 rounded-full bg-ember"
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        className="pointer-events-none fixed left-0 top-0 z-[199] -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          animate={{ scale: hovering ? 1.5 : 1 }}
          className="h-10 w-10 rounded-full border border-cream/30"
        />
      </motion.div>
    </>
  );
}
