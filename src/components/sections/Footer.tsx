export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-border px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-cream-dim md:flex-row">
        <span>Pujitha Kolakonda · Built with passion</span>
        <span>© {year} — All systems operational</span>
      </div>
    </footer>
  );
}
