import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "ghost";
  download?: boolean;
}

export function MagneticButton({ children, onClick, href, variant = "primary", download }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const onMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.35);
    y.set((e.clientY - r.top - r.height / 2) * 0.35);
  };
  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cls =
    variant === "primary"
      ? "bg-ember text-primary-foreground border border-ember"
      : "bg-transparent text-cream border border-cream/30 hover:border-cream";

  const inner = (
    <motion.span style={{ x: sx, y: sy }} className="inline-flex items-center gap-3">
      {children}
    </motion.span>
  );

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="inline-block"
    >
      {href ? (
        <a
          href={href}
          download={download}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noreferrer" : undefined}
          className={`group inline-flex items-center justify-center rounded-full px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${cls}`}
        >
          {inner}
        </a>
      ) : (
        <button
          onClick={onClick}
          className={`group inline-flex items-center justify-center rounded-full px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-colors ${cls}`}
        >
          {inner}
        </button>
      )}
    </div>
  );
}
