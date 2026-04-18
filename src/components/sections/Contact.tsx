import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Send, MapPin } from "lucide-react";
import { SectionLabel } from "../SectionLabel";

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-32 md:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/60 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-ember/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <SectionLabel index="06" label="Contact" />

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-5xl leading-[0.95] md:text-7xl"
            >
              Let's build <br />
              <em className="text-ember not-italic">something that ships.</em>
            </motion.h2>

            <a
              href="mailto:kolakondapujitha@gmail.com"
              className="group mt-12 inline-block break-all font-display text-2xl text-cream underline decoration-ember/40 underline-offset-8 transition-colors hover:text-ember md:text-4xl"
            >
              kolakondapujitha@gmail.com
            </a>

            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-cream-dim">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em]">
                <MapPin size={12} className="text-ember" /> Hyderabad, IN
              </span>
              <a
                href="https://github.com/pujitha-2411"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] hover:text-ember"
              >
                <Github size={12} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/kolakonda-pusala-pujitha"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] hover:text-ember"
              >
                <Linkedin size={12} /> LinkedIn
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6 rounded-sm border border-border bg-card p-8"
          >
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
            <Field label="Message" name="message" textarea />

            <button
              type="submit"
              className="group relative w-full overflow-hidden rounded-full border border-ember bg-ember px-6 py-4 font-mono text-xs uppercase tracking-[0.25em] text-primary-foreground ember-glow transition-transform hover:scale-[1.02]"
            >
              <span className="inline-flex items-center gap-3">
                {sent ? "Message Sent ✓" : "Send Message"}
                <Send size={14} />
              </span>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.3em] text-cream-dim">
        {label}
      </span>
      {textarea ? (
        <textarea
          required
          name={name}
          rows={4}
          className="w-full resize-none border-b border-border bg-transparent py-2 text-cream outline-none transition-colors focus:border-ember"
        />
      ) : (
        <input
          required
          type={type}
          name={name}
          className="w-full border-b border-border bg-transparent py-2 text-cream outline-none transition-colors focus:border-ember"
        />
      )}
    </label>
  );
}
