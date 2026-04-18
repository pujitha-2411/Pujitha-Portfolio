import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";

const STATS = [
  { n: "03", l: "Internships" },
  { n: "92%", l: "Peak Accuracy" },
  { n: "40%", l: "Workload Cut" },
  { n: "500+", l: "Test Queries" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="01" label="About" />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left — portrait + stats */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-ember/30 via-background to-background" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-[14rem] leading-none text-cream/10">P</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-cream-dim">
                <span>Hyderabad / IN</span>
                <span>Est. 2026</span>
              </div>
            </motion.div>

            <div className="mt-8 grid grid-cols-2 gap-px bg-border">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-background p-5"
                >
                  <div className="font-display text-3xl text-ember">{s.n}</div>
                  <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cream-dim">
                    {s.l}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — bio */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="font-display text-4xl leading-[1.05] md:text-6xl"
            >
              I build <em className="text-ember not-italic">intelligent</em> systems that ship —{" "}
              <span className="text-cream-dim">not demos that linger.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-10 space-y-6 text-lg leading-relaxed text-cream-dim"
            >
              <p>
                I'm a final-year AI/ML engineer based in Hyderabad with three internships behind me —
                shipping production-grade LLM, NLP and computer vision pipelines for VISWAM.AI,
                Infosys Springboard and Edunet Foundation.
              </p>
              <p>
                I cut pipeline build time by 25%, slashed manual workload by 40%, and kept models
                landing in the 80–92% accuracy band. Right now I'm focused on retrieval-augmented
                generation, multi-modal classifiers and GenAI tooling that earns its keep.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-[0.25em] text-cream-dim"
            >
              <span><span className="text-ember">→</span> B.Tech AI/ML — CMR</span>
              <span><span className="text-ember">→</span> CGPA 7.79 / 10</span>
              <span><span className="text-ember">→</span> GSSoC '25</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
