import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Phases from "./components/Phases";
import Heroes from "./components/Heroes";
import InfinityStones from "./components/InfinityStones";
import Legacy from "./components/Legacy";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <Phases />
        <Heroes />
        <InfinityStones />
        <Legacy />
      </main>
      <Footer />
    </div>
  );
}
