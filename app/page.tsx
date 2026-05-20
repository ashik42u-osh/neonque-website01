export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold uppercase tracking-widest">
          Engineering Motion.
        </h1>

        <h2 className="mt-4 text-4xl text-cyan-400">
          Fabricating The Future.
        </h2>

        <p className="mt-6 max-w-xl text-zinc-400">
          Futuristic automotive innovation, fabrication systems,
          neon technologies and immersive engineering concepts.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-xl border border-cyan-400 px-6 py-3">
            Explore Builds
          </button>

          <button className="rounded-xl bg-cyan-500 px-6 py-3 text-black">
            Start Project
          </button>
        </div>
      </section>
    </main>
  );
}