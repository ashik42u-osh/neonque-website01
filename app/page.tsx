export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 text-cyan-400">
          NEONQUE
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl">
          Futuristic automotive innovation, fabrication systems,
          immersive engineering concepts and neon technologies.
        </p>

        <button className="mt-8 px-8 py-4 bg-cyan-500 rounded-xl text-black font-bold hover:scale-105 transition">
          Enter Future
        </button>
      </div>
    </main>
  );
}
