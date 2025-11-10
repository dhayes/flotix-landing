import { Github, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#13161b] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 text-sm">
        {/* Logo + Description */}
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <div className="w-6 h-6 rounded-md bg-[#13161b] flex items-center justify-center text-black font-bold text-sm">
              F
            </div>
            Flotix
          </div>
          <p className="text-gray-400 mt-4 leading-relaxed">
            Node-based data analytics platform for modern workflows
          </p>
        </div>

        {/* Product */}
        <div className="md:col-span-2">
          <h4 className="text-white font-medium mb-3">Product</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Features</a></li>
            <li><a href="#">Showcase</a></li>
            <li><a href="#">Use Cases</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:col-span-3">
          <h4 className="text-white font-medium mb-3">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div className="md:col-span-3">
          <h4 className="text-white font-medium mb-3">Connect</h4>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
            >
              <Github className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
            >
              <Twitter className="w-4 h-4 text-white" />
            </a>
            <a
              href="#"
              className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
            >
              <Mail className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2025 Flotix. Open source under MIT License.
      </div>
    </footer>
  )
}
