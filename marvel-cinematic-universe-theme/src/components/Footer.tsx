export default function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 text-center">
        <span className="bg-[#e62429] px-3 py-1 text-lg font-black italic tracking-tighter text-white">
          MARVEL
        </span>
        <p className="max-w-xl text-sm text-zinc-500">
          An unofficial fan tribute to the Marvel Cinematic Universe. All
          characters, films, and trademarks belong to Marvel Studios and The
          Walt Disney Company.
        </p>
        <p className="text-xs uppercase tracking-widest text-zinc-700">
          Made with ❤️ by a true believer · Excelsior!
        </p>
      </div>
    </footer>
  );
}
