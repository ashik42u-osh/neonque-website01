export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-black/40 px-6 py-4 backdrop-blur-xl">
      <div className="text-xl font-bold tracking-[0.3em] text-cyan-400">
        NEONQUE
      </div>

      <div className="hidden gap-6 md:flex">
        <a href="#">Projects</a>
        <a href="#">Lab</a>
        <a href="#">Automotive</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}