import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionLabel } from "../SectionLabel";

const PROJECTS = [
  {
    name: "Cat Emotion Detection",
    sub: "Multi-modal Classifier",
    year: "2026",
    desc: "Fuses ResNet-18 facial features with Librosa audio spectrograms — 85%+ accuracy across 5 emotion classes on 2,000+ samples.",
    tech: ["ResNet-18", "Librosa", "PyTorch"],
    span: "md:col-span-2 md:row-span-2",
    accent: true,
  },
  {
    name: "LEXI",
    sub: "RAG Conversational Agent",
    year: "2025",
    desc: "RAG-based chatbot with 92% response accuracy and webhook architecture sustaining 90% uptime under load.",
    tech: ["Gemini API", "RAG", "n8n", "Webhooks"],
    span: "md:col-span-1 md:row-span-2",
  },
  {
    name: "Disease Prediction System",
    sub: "Clinical ML Suite",
    year: "2024",
    desc: "Four classifiers (diabetes, thyroid, Parkinson's, heart) at 80–90% accuracy with 25% lower inference latency.",
    tech: ["Scikit-learn", "Streamlit", "Python"],
    span: "md:col-span-3 md:row-span-1",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="04" label="Selected Work" />

        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl font-display text-4xl md:text-6xl"
          >
            Projects that <em className="text-ember not-italic">earn their keep.</em>
          </motion.h2>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-cream-dim">
            04 — Featured
          </p>
        </div>

        <div className="grid auto-rows-[minmax(220px,auto)] grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`card-glow-hover group relative flex flex-col justify-between overflow-hidden rounded-sm border border-border bg-card p-6 md:p-8 ${p.span}`}
            >
              {p.accent && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-ember/10 blur-3xl" />
              )}

              <div className="relative flex items-start justify-between">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-ember">
                    {p.year} · {p.sub}
                  </div>
                  <h3 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
                    {p.name}
                  </h3>
                </div>
                <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <a
                    href="https://github.com/pujitha-2411"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border p-2 text-cream-dim hover:border-ember hover:text-ember"
                    aria-label="GitHub"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href="https://github.com/pujitha-2411"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border p-2 text-cream-dim hover:border-ember hover:text-ember"
                    aria-label="Live"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <div className="relative mt-6">
                <p className="text-sm leading-relaxed text-cream-dim">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cream-dim"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
