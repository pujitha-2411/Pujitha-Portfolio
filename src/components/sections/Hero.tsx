import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

const ROLES = [
  "AI / ML Engineer",
  "LLM & RAG Builder",
  "Computer Vision Dev",
  "GenAI Tinkerer",
];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      const next = del ? word.substring(0, text.length - 1) : word.substring(0, text.length + 1);
      setText(next);
      if (!del && next === word) setTimeout(() => setDel(true), 1600);
      else if (del && next === "") {
        setDel(false);
        setI((n) => n + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const role = useTypewriter(ROLES);

  const stagger = {
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
  };
  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.2, 0.8, 0.2, 1] as const } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-32 pb-20 md:px-10"
    >
      {/* Backdrop number */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.06 }}
        transition={{ duration: 2, delay: 0.4 }}
        className="pointer-events-none absolute -right-10 top-20 select-none font-display text-[28vw] leading-none text-cream md:-right-20"
      >
        2026
      </motion.div>

      <div className="mx-auto w-full max-w-7xl">
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="mb-8 flex items-center gap-4 font-mono text-xs uppercase tracking-[0.3em] text-cream-dim"
          >
            <span className="h-px w-10 bg-ember" />
            <span>Portfolio — 2026 Edition</span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[18vw] leading-[0.85] tracking-tighter md:text-[14vw]"
          >
            <span className="block">Pujitha</span>
            <span className="block text-outline-ember italic">Kolakonda</span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-2 md:flex-row md:items-baseline md:gap-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-ember">
              [ Currently ]
            </span>
            <span className="font-display text-2xl text-cream md:text-3xl">
              {role}
              <span className="caret ml-1 inline-block h-7 w-[3px] translate-y-1 bg-ember md:h-8" />
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream-dim"
          >
            Final-year engineer shipping production LLM, NLP & vision systems.
            Three internships, four models, one obsession — making intelligence feel inevitable.
          </motion.p>

          <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-4">
            <MagneticButton
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Work <ArrowDown size={14} className="-rotate-45" />
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              href="/Pujitha_CV.pdf"
              download
            >
              Download CV
            </MagneticButton>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-16 flex items-center gap-6 text-cream-dim"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Connect</span>
            <span className="h-px w-8 bg-cream-dim/40" />
            <a
              href="https://github.com/pujitha-2411"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ember"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/in/kolakonda-pusala-pujitha"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-ember"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:kolakondapujitha@gmail.com"
              className="transition-colors hover:text-ember"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-cream-dim"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span>Scroll</span>
          <span className="h-8 w-px bg-cream-dim/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
