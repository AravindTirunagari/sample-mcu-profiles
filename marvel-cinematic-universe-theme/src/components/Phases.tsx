import { useState } from "react";
import { phases } from "../data/mcu";

export default function Phases() {
  const [active, setActive] = useState(3);
  const phase = phases.find((p) => p.id === active)!;

  return (
    <section id="phases" className="relative bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#e62429]">
            The Sagas
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Six Phases of Storytelling
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            The Infinity Saga built a universe. The Multiverse Saga shattered
            it. Pick a phase to browse its films.
          </p>
        </div>

        {/* Phase tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {phases.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`rounded px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all ${
                active === p.id
                  ? "bg-[#e62429] text-white shadow-lg shadow-red-600/40"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              Phase {p.id}
            </button>
          ))}
        </div>

        {/* Phase detail */}
        <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-black p-8 sm:p-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span
                className={`mb-2 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${
                  phase.saga === "Infinity Saga"
                    ? "bg-amber-500/15 text-amber-400"
                    : "bg-purple-500/15 text-purple-400"
                }`}
              >
                {phase.saga}
              </span>
              <h3 className="text-3xl font-black uppercase text-white">
                {phase.name}
                <span className="ml-3 text-lg font-semibold normal-case text-zinc-500">
                  {phase.years}
                </span>
              </h3>
              <p className="mt-1 italic text-zinc-400">"{phase.tagline}"</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-black text-[#e62429]">
                {phase.movies.length}
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Films
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {phase.movies.map((m, i) => (
              <div
                key={m.title}
                className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/60 p-4 transition-all hover:-translate-y-1 hover:border-red-800 hover:shadow-lg hover:shadow-red-900/30"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#e62429] to-red-900 text-lg font-black text-white">
                  {i + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-bold text-white group-hover:text-red-400">
                    {m.title}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-500">
                    <span>{m.year}</span>
                    {m.rating > 0 ? (
                      <span className="flex items-center gap-1 text-amber-400">
                        ★ {m.rating.toFixed(1)}
                      </span>
                    ) : (
                      <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-[10px] font-bold uppercase text-zinc-400">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
