export interface Movie {
  title: string;
  year: number;
  rating: number;
}

export interface Phase {
  id: number;
  name: string;
  saga: "Infinity Saga" | "Multiverse Saga";
  years: string;
  tagline: string;
  movies: Movie[];
}

export const phases: Phase[] = [
  {
    id: 1,
    name: "Phase One",
    saga: "Infinity Saga",
    years: "2008 – 2012",
    tagline: "Avengers Assembled",
    movies: [
      { title: "Iron Man", year: 2008, rating: 7.9 },
      { title: "The Incredible Hulk", year: 2008, rating: 6.6 },
      { title: "Iron Man 2", year: 2010, rating: 6.9 },
      { title: "Thor", year: 2011, rating: 7.0 },
      { title: "Captain America: The First Avenger", year: 2011, rating: 6.9 },
      { title: "The Avengers", year: 2012, rating: 8.0 },
    ],
  },
  {
    id: 2,
    name: "Phase Two",
    saga: "Infinity Saga",
    years: "2013 – 2015",
    tagline: "Age of Ultron",
    movies: [
      { title: "Iron Man 3", year: 2013, rating: 7.1 },
      { title: "Thor: The Dark World", year: 2013, rating: 6.8 },
      { title: "Captain America: The Winter Soldier", year: 2014, rating: 7.8 },
      { title: "Guardians of the Galaxy", year: 2014, rating: 8.0 },
      { title: "Avengers: Age of Ultron", year: 2015, rating: 7.3 },
      { title: "Ant-Man", year: 2015, rating: 7.3 },
    ],
  },
  {
    id: 3,
    name: "Phase Three",
    saga: "Infinity Saga",
    years: "2016 – 2019",
    tagline: "The Endgame",
    movies: [
      { title: "Captain America: Civil War", year: 2016, rating: 7.8 },
      { title: "Doctor Strange", year: 2016, rating: 7.5 },
      { title: "Guardians of the Galaxy Vol. 2", year: 2017, rating: 7.6 },
      { title: "Spider-Man: Homecoming", year: 2017, rating: 7.4 },
      { title: "Thor: Ragnarok", year: 2017, rating: 7.9 },
      { title: "Black Panther", year: 2018, rating: 7.3 },
      { title: "Avengers: Infinity War", year: 2018, rating: 8.4 },
      { title: "Ant-Man and the Wasp", year: 2018, rating: 7.0 },
      { title: "Captain Marvel", year: 2019, rating: 6.8 },
      { title: "Avengers: Endgame", year: 2019, rating: 8.4 },
      { title: "Spider-Man: Far From Home", year: 2019, rating: 7.4 },
    ],
  },
  {
    id: 4,
    name: "Phase Four",
    saga: "Multiverse Saga",
    years: "2021 – 2022",
    tagline: "The Multiverse Unleashed",
    movies: [
      { title: "Black Widow", year: 2021, rating: 6.7 },
      { title: "Shang-Chi and the Legend of the Ten Rings", year: 2021, rating: 7.4 },
      { title: "Eternals", year: 2021, rating: 6.3 },
      { title: "Spider-Man: No Way Home", year: 2021, rating: 8.2 },
      { title: "Doctor Strange in the Multiverse of Madness", year: 2022, rating: 6.9 },
      { title: "Thor: Love and Thunder", year: 2022, rating: 6.2 },
      { title: "Black Panther: Wakanda Forever", year: 2022, rating: 6.7 },
    ],
  },
  {
    id: 5,
    name: "Phase Five",
    saga: "Multiverse Saga",
    years: "2023 – 2025",
    tagline: "Dynasty of Chaos",
    movies: [
      { title: "Ant-Man and the Wasp: Quantumania", year: 2023, rating: 6.0 },
      { title: "Guardians of the Galaxy Vol. 3", year: 2023, rating: 7.9 },
      { title: "The Marvels", year: 2023, rating: 5.5 },
      { title: "Deadpool & Wolverine", year: 2024, rating: 7.6 },
      { title: "Captain America: Brave New World", year: 2025, rating: 5.8 },
      { title: "Thunderbolts*", year: 2025, rating: 7.2 },
    ],
  },
  {
    id: 6,
    name: "Phase Six",
    saga: "Multiverse Saga",
    years: "2025 – 2027",
    tagline: "Secret Wars",
    movies: [
      { title: "The Fantastic Four: First Steps", year: 2025, rating: 7.2 },
      { title: "Spider-Man: Brand New Day", year: 2026, rating: 0 },
      { title: "Avengers: Doomsday", year: 2026, rating: 0 },
      { title: "Avengers: Secret Wars", year: 2027, rating: 0 },
    ],
  },
];

export interface Hero {
  name: string;
  alias: string;
  actor: string;
  emoji: string;
  color: string;
  glow: string;
  quote: string;
  debut: string;
}

export const heroes: Hero[] = [
  {
    name: "Iron Man",
    alias: "Tony Stark",
    actor: "Robert Downey Jr.",
    emoji: "🦾",
    color: "from-red-600 to-amber-500",
    glow: "shadow-red-500/40",
    quote: "I am Iron Man.",
    debut: "Iron Man (2008)",
  },
  {
    name: "Captain America",
    alias: "Steve Rogers",
    actor: "Chris Evans",
    emoji: "🛡️",
    color: "from-blue-600 to-sky-400",
    glow: "shadow-blue-500/40",
    quote: "I can do this all day.",
    debut: "The First Avenger (2011)",
  },
  {
    name: "Thor",
    alias: "God of Thunder",
    actor: "Chris Hemsworth",
    emoji: "⚡",
    color: "from-slate-500 to-yellow-400",
    glow: "shadow-yellow-400/40",
    quote: "Bring me Thanos!",
    debut: "Thor (2011)",
  },
  {
    name: "Hulk",
    alias: "Bruce Banner",
    actor: "Mark Ruffalo",
    emoji: "💪",
    color: "from-green-700 to-lime-500",
    glow: "shadow-green-500/40",
    quote: "That's my secret... I'm always angry.",
    debut: "The Incredible Hulk (2008)",
  },
  {
    name: "Black Widow",
    alias: "Natasha Romanoff",
    actor: "Scarlett Johansson",
    emoji: "🕷️",
    color: "from-zinc-800 to-red-600",
    glow: "shadow-red-600/40",
    quote: "I've got red in my ledger.",
    debut: "Iron Man 2 (2010)",
  },
  {
    name: "Spider-Man",
    alias: "Peter Parker",
    actor: "Tom Holland",
    emoji: "🕸️",
    color: "from-red-600 to-blue-600",
    glow: "shadow-blue-500/40",
    quote: "With great power comes great responsibility.",
    debut: "Civil War (2016)",
  },
  {
    name: "Doctor Strange",
    alias: "Stephen Strange",
    actor: "Benedict Cumberbatch",
    emoji: "🔮",
    color: "from-orange-500 to-purple-600",
    glow: "shadow-orange-500/40",
    quote: "We're in the endgame now.",
    debut: "Doctor Strange (2016)",
  },
  {
    name: "Black Panther",
    alias: "T'Challa",
    actor: "Chadwick Boseman",
    emoji: "🐆",
    color: "from-purple-800 to-violet-500",
    glow: "shadow-purple-500/40",
    quote: "Wakanda Forever!",
    debut: "Civil War (2016)",
  },
];

export interface Stone {
  name: string;
  color: string;
  hex: string;
  ring: string;
  power: string;
  location: string;
}

export const stones: Stone[] = [
  {
    name: "Space",
    color: "bg-blue-500",
    hex: "#3b82f6",
    ring: "ring-blue-400",
    power: "Teleportation and control over space itself. Housed in the Tesseract.",
    location: "The Tesseract — S.H.I.E.L.D. / Asgard",
  },
  {
    name: "Mind",
    color: "bg-yellow-400",
    hex: "#facc15",
    ring: "ring-yellow-300",
    power: "Mind control and the source of Vision's consciousness.",
    location: "Loki's Scepter — Vision's forehead",
  },
  {
    name: "Reality",
    color: "bg-red-500",
    hex: "#ef4444",
    ring: "ring-red-400",
    power: "Warps reality at will. Once existed as the liquid Aether.",
    location: "The Aether — The Collector",
  },
  {
    name: "Power",
    color: "bg-purple-500",
    hex: "#a855f7",
    ring: "ring-purple-400",
    power: "Destructive energy capable of annihilating entire planets.",
    location: "The Orb — Nova Corps, Xandar",
  },
  {
    name: "Time",
    color: "bg-green-500",
    hex: "#22c55e",
    ring: "ring-green-400",
    power: "Controls the flow of time — loops, rewinds, and visions of futures.",
    location: "Eye of Agamotto — Kamar-Taj",
  },
  {
    name: "Soul",
    color: "bg-orange-500",
    hex: "#f97316",
    ring: "ring-orange-400",
    power: "Dominion over souls. Demands a sacrifice: a soul for a soul.",
    location: "Vormir — guarded by the Red Skull",
  },
];
