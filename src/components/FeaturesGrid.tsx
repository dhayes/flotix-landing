import {
  FlaskConical,
  LineChart,
  Brain,
  Settings2,
} from "lucide-react"

const features = [
  {
    icon: <FlaskConical className="w-6 h-6 text-sky-400" />,
    title: "Scientific Research",
    description:
      "Analyze experimental data, create publication-ready visualizations, and share reproducible workflows.",
  },
  {
    icon: <LineChart className="w-6 h-6 text-sky-400" />,
    title: "Business Analytics",
    description:
      "Transform raw business data into actionable insights with intuitive visual pipelines.",
  },
  {
    icon: <Brain className="w-6 h-6 text-sky-400" />,
    title: "Machine Learning",
    description:
      "Preprocess datasets, visualize feature distributions, and evaluate model performance.",
  },
  {
    icon: <Settings2 className="w-6 h-6 text-sky-400" />,
    title: "Data Engineering",
    description:
      "Build and test data transformation pipelines before deploying to production.",
  },
]

export function FeaturesGrid() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-8 px-6 bg-[linear-gradient(to_top,_#0f0f1a,_#1a1a1f,_#111318)] bg-repeat-y">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-2">Built For Everyone</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          From research labs to boardrooms, Flotix adapts to your workflow
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 max-w-6xl mx-auto">
        {features.map((feature, idx) => (
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
