import { useEffect, useState } from "react";

const links = [
  { label: "Phases", href: "#phases" },
  { label: "Heroes", href: "#heroes" },
  { label: "Infinity Stones", href: "#stones" },
  { label: "Legacy", href: "#legacy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-black/85 shadow-lg shadow-red-900/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <span className="bg-[#e62429] px-3 py-1 text-xl font-black italic tracking-tighter text-white">
            MARVEL
          </span>
          <span className="hidden text-xs font-semibold uppercase tracking-[0.3em] text-zinc-400 sm:block">
            Cinematic Universe
          </span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold uppercase tracking-wider text-zinc-300 transition-colors hover:text-[#e62429]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#phases"
          className="rounded bg-[#e62429] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-600/40"
        >
          Watch Order
        </a>
      </nav>
    </header>
  );
}
