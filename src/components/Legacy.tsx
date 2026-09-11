const quotes = [
  {
    text: "Part of the journey is the end.",
    who: "Tony Stark",
    film: "Avengers: Endgame",
  },
  {
    text: "Whatever it takes.",
    who: "The Avengers",
    film: "Avengers: Endgame",
  },
  {
    text: "A thing isn't beautiful because it lasts.",
    who: "Vision",
    film: "Age of Ultron",
  },
  {
    text: "Higher, further, faster, baby.",
    who: "Carol Danvers",
    film: "Captain Marvel",
  },
  {
    text: "We are Groot.",
    who: "Groot",
    film: "Guardians of the Galaxy",
  },
  {
    text: "Avengers... assemble.",
    who: "Steve Rogers",
    film: "Avengers: Endgame",
  },
];

export default function Legacy() {
  return (
    <section id="legacy" className="bg-[#0a0a0f] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-[#e62429]">
            The Legacy
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white sm:text-5xl">
            Words That Echo Across the Multiverse
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure
              key={q.text}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all hover:-translate-y-1 hover:border-red-800"
            >
              <div className="mb-4 text-4xl font-black text-[#e62429]">"</div>
              <blockquote className="text-xl font-bold leading-snug text-white">
                {q.text}
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-bold text-red-400">{q.who}</span>
                <span className="text-zinc-500"> — {q.film}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-20 rounded-2xl bg-gradient-to-r from-red-900/40 via-[#e62429]/20 to-red-900/40 p-[1px]">
          <div className="rounded-2xl bg-[#0d0d13] px-8 py-14 text-center">
            <h3 className="text-3xl font-black uppercase text-white sm:text-4xl">
              The Story Isn't Over
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-zinc-400">
              Doomsday approaches. Secret Wars loom. The next chapter of the
              Multiverse Saga arrives soon — and everything changes.
            </p>
            <a
              href="#phases"
              className="mt-8 inline-block rounded bg-[#e62429] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white transition-all hover:scale-105 hover:bg-red-700 hover:shadow-xl hover:shadow-red-600/40"
            >
              Revisit the Saga
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
