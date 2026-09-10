import { useState } from "react";
import { stones } from "../data/mcu";

export default function InfinityStones() {
  const [selected, setSelected] = useState(0);
  const stone = stones[selected];

  return (
    <section id="stones" className="relative overflow-hidden py-24">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/stones-bg.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-amber-400">
            Perfectly Balanced
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            The Infinity Stones
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Six singularities forged into stones at the dawn of the universe.
            Tap a stone to learn its power.
          </p>
        </div>

        {/* Stones row */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-5 sm:gap-8">
          {stones.map((s, i) => (
            <button
              key={s.name}
              onClick={() => setSelected(i)}
              aria-label={`${s.name} Stone`}
              className={`group relative flex flex-col items-center gap-2 transition-transform hover:scale-110 ${
                selected === i ? "scale-110" : ""
              }`}
            >
              <span
                className={`h-12 w-12 rounded-full sm:h-14 sm:w-14 ${s.color} ${
                  selected === i
                    ? `ring-4 ring-offset-2 ring-offset-black ${s.ring}`
                    : ""
                }`}
                style={{
                  boxShadow: `0 0 ${selected === i ? "40px" : "18px"} ${s.hex}`,
                }}
              />
              <span
                className={`text-[11px] font-bold uppercase tracking-wider ${
                  selected === i ? "text-white" : "text-zinc-500"
                }`}
              >
                {s.name}
              </span>
            </button>
          ))}
        </div>

        {/* Stone detail */}
        <div
          className="mx-auto max-w-2xl rounded-2xl border bg-black/60 p-8 text-center backdrop-blur-md transition-all"
          style={{ borderColor: `${stone.hex}55`, boxShadow: `0 0 60px ${stone.hex}25` }}
        >
          <h3
            className="text-2xl font-black uppercase tracking-wide"
            style={{ color: stone.hex }}
          >
            The {stone.name} Stone
          </h3>
          <p className="mt-3 text-lg text-zinc-200">{stone.power}</p>
          <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-zinc-500">
            Last known location · {stone.location}
          </p>
        </div>
      </div>
    </section>
  );
}
