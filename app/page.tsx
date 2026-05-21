export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* Background Glow */}
      <div className="absolute top-[-200px] left-[-100px] h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[500px] rounded-full bg-blue-700/20 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Hero Content */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-300 backdrop-blur-md">
          FUTURISTIC AUTOMOTIVE + FABRICATION
        </div>

        <h1 className="max-w-5xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
          ENGINEERING
          <span className="text-cyan-400"> THE FUTURE</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          Advanced fabrication systems, automotive innovation,
          neon engineering concepts, immersive interfaces and
          next-generation workshop technologies.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <button className="rounded-2xl bg-cyan-400 px-8 py-4 text-lg font-bold text-black transition hover:scale-105 hover:bg-cyan-300">
            Explore Projects
          </button>

          <button className="rounded-2xl border border-cyan-400/40 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur-md transition hover:border-cyan-300 hover:bg-cyan-400/10">
            Start Build
          </button>

        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-cyan-400">20+</h3>
            <p className="mt-2 text-gray-300">
              Engineering Concepts
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-cyan-400">Custom</h3>
            <p className="mt-2 text-gray-300">
              Fabrication Systems
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-3xl font-bold text-cyan-400">Mobile</h3>
            <p className="mt-2 text-gray-300">
              Workshop Innovation
            </p>
          </div>

        </div>

      </section>
    </main>
  );
}
