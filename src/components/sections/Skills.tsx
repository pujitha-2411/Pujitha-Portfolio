import { motion } from "framer-motion";
import { SectionLabel } from "../SectionLabel";

const GROUPS = [
  {
    title: "Languages",
    items: ["Python", "HTML", "CSS"],
  },
  {
    title: "AI & ML",
    items: [
      "LLMs",
      "NLP",
      "RAG",
      "Computer Vision",
      "Deep Learning",
      "Scikit-learn",
      "TensorFlow",
      "Hugging Face",
    ],
  },
  {
    title: "Tools & Platforms",
    items: ["Streamlit", "Git", "GitHub", "n8n", "Gemini API", "GCP / OCI", "VSCode"],
  },
  {
    title: "Concepts",
    items: [
      "Prompt Engineering",
      "Model Deployment",
      "Webhook Architecture",
      "Pipeline Optimization",
      "Multi-modal AI",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="02" label="Stack" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl font-display text-4xl md:text-5xl"
        >
          The <em className="text-ember not-italic">tools</em> behind the work.
        </motion.h2>

        <div className="space-y-12">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 border-t border-border pt-8 md:grid-cols-12"
            >
              <div className="md:col-span-3">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-ember">0{gi + 1}</span>
                  <h3 className="font-display text-2xl">{g.title}</h3>
                </div>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={{ y: -3, borderColor: "var(--ember)", color: "var(--ember)" }}
                      className="rounded-full border border-border bg-card px-4 py-2 font-mono text-xs uppercase tracking-wider text-cream-dim transition-colors"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
