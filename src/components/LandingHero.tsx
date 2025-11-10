import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center pt-28 pb-8 px-6 bg-[linear-gradient(to_bottom,_#0f0f1a,_#1a1a1f,_#111318)] bg-repeat-y">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      {/* Tag */}
      <div className="relative z-10 mb-6">
        <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-medium text-blue-400 bg-blue-950/30 ring-1 ring-blue-800/40">
          Open Source Data Analytics
        </span>
      </div>

      {/* Heading */}
      <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
        Data Analysis Through{" "}
        <span className="bg-gradient-to-r from-sky-400 to-amber-300 bg-clip-text text-transparent">
          Visual Workflows
        </span>
      </h1>

      {/* Subtitle */}
      <p className="relative z-10 mt-6 max-w-2xl text-gray-400 text-lg">
        Build powerful data pipelines with an intuitive node-based interface. No code required, infinite possibilities.
      </p>

      {/* Buttons */}
      <div className="relative z-10 mt-10 flex flex-col sm:flex-row gap-4">
        <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-semibold">
        <a
          href="https://app.flotix.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch Flotix Cloud
        </a>
        </Button>
        <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white font-semibold">
        <a href="#pricing">View Features & Pricing</a>
        </Button>
        <Button size="lg" variant="outline" className="text-white border-gray-700 hover:bg-gray-800">
          <Play className="w-4 h-4 mr-2" /> Watch Demo
        </Button>
      </div>

      {/* Features row */}
      <div className="relative z-10 mt-20 flex flex-col sm:flex-row gap-10 text-gray-300">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-white">100+</div>
          <div className="text-sm text-gray-400">Built-in Nodes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-white">Open</div>
          <div className="text-sm text-gray-400">Source</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-white">Fast</div>
          <div className="text-sm text-gray-400">Real-time Analysis</div>
        </div>
      </div>
    </section>
  )
}
