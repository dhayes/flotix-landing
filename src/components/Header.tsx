import { Github } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#111318]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto mt-[-64px] flex items-center justify-between px-6 md:px-12 lg:px-20 h-16">
        {/* Logo */}
        <div className="flex items-center gap-2 font-semibold text-white text-lg">
          <div className="w-6 h-6 rounded-md bg-gradient-to-r from-sky-500 to-amber-400 flex items-center justify-center text-black font-bold text-sm">
            F
          </div>
          Flotix
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#" className="hover:text-white transition">Features</a>
          <a href="#" className="hover:text-white transition">Showcase</a>
          <a href="#" className="hover:text-white transition">Use Cases</a>
          <a href="#" className="hover:text-white transition">Docs</a>
        </nav>

        {/* Right side: GitHub + CTA */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/dhayes/flotus"
            className="text-white/80 hover:text-white transition"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-1.5 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-md transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}
