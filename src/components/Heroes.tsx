import { heroes } from "../data/mcu";

export default function Heroes() {
  return (
    <section id="heroes" className="relative bg-[#0d0d13] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#e62429]">
            Earth's Mightiest
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            The Heroes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            Ordinary people who became legends. Flip through the icons that
            defined a generation of cinema.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {heroes.map((h) => (
            <div
              key={h.name}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-zinc-600 hover:shadow-2xl ${h.glow}`}
            >
              <div
                className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${h.color} opacity-20 blur-2xl transition-opacity group-hover:opacity-50`}
              />
              <div
                className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${h.color} text-3xl shadow-lg`}
              >
                {h.emoji}
              </div>
              <h3 className="text-xl font-black uppercase text-white">
                {h.name}
              </h3>
              <p className="text-sm font-semibold text-zinc-400">{h.alias}</p>
              <p className="mt-1 text-xs text-zinc-500">
                Played by {h.actor}
              </p>
              <blockquote className="mt-4 border-l-2 border-[#e62429] pl-3 text-sm italic text-zinc-300">
                "{h.quote}"
              </blockquote>
              <div className="mt-4 text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                Debut · {h.debut}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
