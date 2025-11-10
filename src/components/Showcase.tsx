import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  "/img1.jpeg",
  "/img2.jpeg",
  "/img3.jpeg",
]

export function Showcase() {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length)
  const next = () => setIndex((prev) => (prev + 1) % images.length)

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-8 px-6 bg-[linear-gradient(to_top,_#0f0f1a,_#1a1a1f,_#111318)] bg-repeat-y">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
      <div className="text-center mb-12">
        <div className="text-sm font-medium text-sky-400 uppercase tracking-wide">
          See it in action
        </div>
        <h2 className="text-4xl font-bold mt-2">
          From raw inputs to deployable outputs
        </h2>
      </div>

      <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden border border-white/10">
        <img
          src={images[index]}
          alt={`Showcase ${index + 1}`}
          className="w-full h-auto object-cover transition-all duration-700"
        />

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Image indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
