import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "hero", label: "Index" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => {
      obs.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <button onClick={() => go("hero")} className="font-display text-xl tracking-tight">
          Pujitha<span className="text-ember">.</span>
        </button>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l, i) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className="group relative px-3 py-2 font-mono text-xs uppercase tracking-widest"
              >
                <span className="mr-2 text-ember/70">0{i + 1}</span>
                <span className={active === l.id ? "text-cream" : "text-cream-dim"}>{l.label}</span>
                {active === l.id && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute -bottom-0.5 left-3 right-3 h-px bg-ember"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-cream"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col px-6 py-6">
              {links.map((l, i) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="flex w-full items-baseline gap-3 py-3 font-display text-2xl"
                  >
                    <span className="font-mono text-xs text-ember">0{i + 1}</span>
                    <span className={active === l.id ? "text-cream" : "text-cream-dim"}>
                      {l.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
