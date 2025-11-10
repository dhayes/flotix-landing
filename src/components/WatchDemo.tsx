export function WatchDemo() {
  return (
    <section id="watch-demo" className="bg-[#111318] text-white py-8 px-6 md:px-12 lg:px-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Watch Flotix in Action</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          See how easy it is to build data workflows with our intuitive interface
        </p>
      </div>

      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-lg aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/rVE2ZN3xa0I?rel=0&modestbranding=1"
          title="Watch Flotix in Action"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  )
}
