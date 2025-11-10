import {
  Workflow,
  BarChart3,
  Clock,
  Database,
  Code2,
  Layers3,
} from "lucide-react"

const coreFeatures = [
  {
    icon: <Workflow className="w-6 h-6 text-sky-400" />,
    title: "Node-Based Workflows",
    description:
      "Build complex data pipelines by connecting nodes visually. Intuitive drag-and-drop interface makes analysis effortless.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-sky-400" />,
    title: "Rich Visualizations",
    description:
      "Create stunning 2D and 3D plots, scatter charts, histograms, and more. See your data come to life instantly.",
  },
  {
    icon: <Clock className="w-6 h-6 text-sky-400" />,
    title: "Real-Time Processing",
    description:
      "Watch your data flow through the pipeline in real-time. Immediate feedback as you build and modify workflows.",
  },
  {
    icon: <Database className="w-6 h-6 text-sky-400" />,
    title: "Multiple Data Sources",
    description:
      "Import from CSV, databases, APIs, and more. Work with sample datasets or your own data seamlessly.",
  },
  {
    icon: <Code2 className="w-6 h-6 text-sky-400" />,
    title: "Extensible Platform",
    description:
      "Open source and hackable. Create custom nodes, add new visualizations, or integrate your own tools.",
  },
  {
    icon: <Layers3 className="w-6 h-6 text-sky-400" />,
    title: "Modular Design",
    description:
      "Reuse workflows, share nodes, and build on top of existing analysis. Collaborative and efficient.",
  },
]

export function CoreFeatures() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-8 px-6 bg-[linear-gradient(to_bottom,_#0f0f1a,_#1a1a1f,_#111318)] bg-repeat-y">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">Everything You Need</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Powerful features designed for data scientists, analysts, and researchers
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 max-w-6xl mx-auto">
        {coreFeatures.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition"
          >
            <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-md bg-white/10">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
