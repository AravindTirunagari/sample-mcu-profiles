export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#0a0a0f]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="mb-4 animate-pulse text-xs font-bold uppercase tracking-[0.5em] text-red-400">
          17 Years · 6 Phases · One Universe
        </p>
        <h1 className="text-5xl font-black uppercase leading-none tracking-tight text-white sm:text-7xl md:text-8xl">
          The Marvel
          <span className="block bg-gradient-to-r from-[#e62429] via-orange-500 to-amber-400 bg-clip-text text-transparent">
            Cinematic
          </span>
          Universe
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-300">
          From a billionaire in a cave with a box of scraps to the battle for
          all of reality — explore every phase, every hero, and every stone of
          the greatest saga ever told on screen.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#phases"
            className="rounded bg-[#e62429] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40"
          >
            Explore the Saga
          </a>
          <a
            href="#stones"
            className="rounded border border-zinc-500 px-8 py-3 text-sm font-bold uppercase tracking-wider text-zinc-200 backdrop-blur transition-all hover:scale-105 hover:border-amber-400 hover:text-amber-400"
          >
            The Infinity Stones
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 border-t border-white/10 pt-8 text-center sm:gap-12">
          {[
            { value: "37+", label: "Films" },
            { value: "$31B+", label: "Box Office" },
            { value: "∞", label: "Possibilities" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-black text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-zinc-400">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
