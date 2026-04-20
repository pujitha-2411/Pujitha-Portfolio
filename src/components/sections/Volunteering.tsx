import { motion } from "framer-motion";
import { HeartHandshake, Code2 } from "lucide-react";
import { SectionLabel } from "../SectionLabel";

const ITEMS = [
  {
    icon: HeartHandshake,
    org: "National Service Scheme (NSS)",
    role: "Volunteer & Event Lead",
    desc: "Directed 15+ campus events and coordinated 20+ volunteers across community outreach, awareness drives and on-ground social initiatives.",
    tag: "Volunteering",
  },
  {
    icon: Code2,
    org: "AnimateItNow — GSSoC '25",
    role: "Open Source Contributor",
    desc: "Diagnosed and resolved a front-end rendering bug (Issue #1577); merged PR shipped to 200+ active users during GirlScript Summer of Code 2025.",
    tag: "Open Source",
  },
];

export function Volunteering() {
  return (
    <section id="volunteering" className="relative px-6 py-32 md:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionLabel index="06" label="Community & Open Source" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 max-w-3xl font-display text-4xl md:text-5xl"
        >
          Beyond the <em className="text-ember not-italic">code.</em>
        </motion.h2>

        <div className="grid gap-5 md:grid-cols-2">
          {ITEMS.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.org}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-glow-hover rounded-sm border border-border bg-card p-6 md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-ember/40 text-ember">
                    <Icon size={18} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-ember">
                    {it.tag}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl md:text-3xl">{it.org}</h3>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-cream-dim">
                  {it.role}
                </p>
                <p className="mt-5 text-sm leading-relaxed text-cream-dim">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
