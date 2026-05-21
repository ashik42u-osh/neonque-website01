import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      
      <Navbar />

      <section className="relative flex flex-col items-center justify-center text-center px-6 min-h-screen">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0f172a_0%,#050816_70%)] opacity-80" />

        <div className="relative z-10 max-w-4xl">
          
          <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs tracking-widest mb-6">
            FUTURISTIC AUTOMOTIVE + FABRICATION
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-none">
            ENGINEERING THE FUTURE
          </h1>

          <p className="mt-8 text-lg text-white/70 max-w-2xl mx-auto">
            Advanced fabrication systems, automotive innovation, neon engineering concepts, immersive interfaces and next-generation workshop technologies.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition">
              Explore Projects
            </button>

            <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition">
              Start Build
            </button>
          </div>

        </div>

      </section>

    </main>
  );
}
