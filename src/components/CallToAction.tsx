import { ArrowRight, Github } from "lucide-react"

export function CallToAction() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-28 px-6 bg-[linear-gradient(to_bottom,_#0f0f1a,_#1a1a1f,_#0f0c09)] bg-repeat-y">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      <h2 className="text-4xl sm:text-5xl font-bold leading-tight max-w-4xl mx-auto">
        Ready to Transform Your{" "}
        <span className="bg-gradient-to-r from-sky-400 to-amber-400 bg-clip-text text-transparent">
          Data Workflow?
        </span>
      </h2>

      <p className="mt-6 text-gray-400 max-w-xl mx-auto text-lg">
        Join researchers, analysts, and data scientists building better workflows with Flotix
      </p>

      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://app.flotix.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-md text-base transition"
        >
          Try Flotix Now <ArrowRight className="ml-2 w-4 h-4" />
        </a>
        <a
          href="https://github.com/dhayes/flotus"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 border border-white/20 hover:border-white/40 text-white font-medium rounded-md text-base transition"
        >
          <Github className="w-4 h-4 mr-2" />
          View on GitHub
        </a>
      </div>

      <div className="mt-10 text-gray-500 text-sm">
        Open source and free forever • MIT License
      </div>
    </section>
  )
}
