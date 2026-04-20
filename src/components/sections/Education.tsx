import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import { SectionLabel } from "../SectionLabel";

const EDU = [
  {
    school: "CMR Technical Campus (Autonomous)",
    deg: "B.Tech — Artificial Intelligence & Machine Learning",
    where: "Hyderabad, India",
    year: "Apr 2026",
    note: "CGPA 7.79 / 10",
  },
  {
    school: "Government Polytechnic for Women",
    deg: "Diploma — Civil Engineering",
    where: "Nizamabad, India",
    year: "Apr 2023",
    note: "—",
  },
];

const CERTS = [
  "Machine Learning Using Python — NIELIT",
  "Deep Learning in Ecological Studies — IIRS",
  "Oracle Cloud Infrastructure AI Foundation (2025)",
  "McKinsey Forward Program",
];

export function Education() {
  return (
    <section id="education" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="05" label="Education & Credentials" />

        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-10 font-display text-4xl md:text-5xl">
              Where it <em className="text-ember not-italic">started.</em>
            </h2>
            <div className="space-y-5">
              {EDU.map((e, i) => (
                <motion.div
                  key={e.school}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-glow-hover rounded-sm border border-border bg-card p-6 md:p-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <span className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-ember/40 text-ember">
                        <GraduationCap size={16} />
                      </span>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl">{e.school}</h3>
                        <p className="mt-1 text-sm text-cream-dim">{e.deg}</p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.25em] text-cream-dim">
                          {e.where}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-xs uppercase tracking-[0.25em] text-ember">
                        {e.year}
                      </div>
                      <div className="mt-2 font-display text-lg">{e.note}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <h3 className="mb-10 font-display text-2xl text-cream-dim">
              <span className="text-ember">/</span> Certifications
            </h3>
            <ul className="space-y-4">
              {CERTS.map((c, i) => (
                <motion.li
                  key={c}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-start gap-3 border-b border-border pb-4 text-sm text-cream-dim"
                >
                  <Award size={14} className="mt-1 flex-shrink-0 text-ember" />
                  <span>{c}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
