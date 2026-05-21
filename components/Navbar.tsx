export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-white/10 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <div className="text-2xl font-bold tracking-widest">
          NEONQUE
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#">Projects</a>
          <a href="#">Fabrication</a>
          <a href="#">Automotive</a>
          <a href="#">Contact</a>
        </nav>

        <button className="px-5 py-2 rounded-xl border border-cyan-400/40 bg-cyan-400/10 hover:bg-cyan-400/20 transition">
          Start Project
        </button>

      </div>
    </header>
  );
}
