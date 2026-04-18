import { motion } from "framer-motion";

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mb-10 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-cream-dim"
    >
      <span className="text-ember">{index}</span>
      <span className="h-px w-12 bg-ember/60" />
      <span>{label}</span>
    </motion.div>
  );
}
