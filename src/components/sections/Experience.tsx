import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";

const JOBS = [
  {
    role: "AI Intern",
    company: "Infosys Springboard",
    location: "Remote",
    date: "Dec 2025 — Mar 2026",
    bullets: [
      "Engineered ML models for enterprise automation across 3 business workflows, cutting manual processing effort by 40%.",
      "Fine-tuned model outputs via structured post-processing, lifting response quality scores by 30%.",
    ],
  },
  {
    role: "AI Developer Intern",
    company: "VISWAM.AI",
    location: "Hyderabad, India",
    date: "May 2025 — Jun 2025",
    bullets: [
      "Architected an LLM-powered chatbot using Google Gemini API; achieved 92% intent accuracy across 500+ test queries.",
      "Accelerated pipeline delivery by 25% by abstracting reusable prompt components; boosted output precision by 30% through chain-of-thought prompt design.",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Edunet Foundation",
    location: "Remote",
    date: "Feb 2025 — Mar 2025",
    bullets: [
      "Deployed Scikit-learn models inside a Streamlit app; benchmarked by 100+ users with 20% faster inference vs. baseline.",
      "Streamlined data validation logic, cutting error-handling overhead by 35% and lifting prediction clarity scores.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="03" label="Experience" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl font-display text-4xl md:text-5xl"
        >
          A short, dense <em className="text-ember not-italic">timeline.</em>
        </motion.h2>

        <div className="relative">
          {/* spine */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-border md:left-1/2" />

          <div className="space-y-20">
            {JOBS.map((j, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.article
                  key={j.role + j.date}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="relative grid gap-6 md:grid-cols-2 md:gap-12"
                >
                  {/* dot */}
                  <span className="absolute left-3 top-2 -translate-x-1/2 md:left-1/2">
                    <span className="block h-3 w-3 rounded-full bg-ember ember-glow" />
                  </span>

                  {/* date column */}
                  <div
                    className={`pl-10 md:pl-0 ${
                      isLeft
                        ? "md:order-1 md:text-right md:pr-12"
                        : "md:order-2 md:pl-12"
                    }`}
                  >
                    <div className="font-mono text-xs uppercase tracking-[0.25em] text-ember">
                      {j.date}
                    </div>
                    <div className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-cream-dim">
                      {j.location}
                    </div>
                  </div>

                  {/* card */}
                  <div
                    className={`pl-10 md:pl-0 ${
                      isLeft ? "md:order-2 md:pl-12" : "md:order-1 md:pr-12 md:text-right"
                    }`}
                  >
                    <div className="card-glow-hover rounded-sm border border-border bg-card p-6 md:p-8">
                      <h3 className="font-display text-2xl md:text-3xl">{j.role}</h3>
                      <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-ember">
                        {j.company}
                      </p>
                      <ul
                        className={`mt-5 space-y-3 text-sm leading-relaxed text-cream-dim ${
                          isLeft ? "" : "md:text-right"
                        }`}
                      >
                        {j.bullets.map((b) => (
                          <li
                            key={b}
                            className={`flex gap-3 ${isLeft ? "" : "md:flex-row-reverse"}`}
                          >
                            <span className="mt-2 h-px w-3 flex-shrink-0 bg-ember" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
