// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-200 p-10 transition-all hover:shadow-2xl duration-300">
          {/* Title */}
          <div className="mb-6">
            <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight mb-2">
              About Byte Code
            </h1>
            <p className="text-gray-500 text-lg">
              A clean and creative blog for curious coders.
            </p>
          </div>

          {/* Section 1 */}
          <section className="mb-6">
            <p className="text-gray-800 text-lg leading-relaxed">
              <span className="font-semibold text-blue-500">Byte Code</span> is a blog where
              <span className="font-medium"> code meets clarity</span>. Whether you&apos;re just getting started in development
              or diving deep into backend magic, Byte Code is here to simplify and
              visualize complex tech concepts — one byte at a time.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-6">
            <p className="text-gray-800 text-lg leading-relaxed">
              Built by <span className="font-semibold text-indigo-600">Ankesh</span>, a
              computer science and engineering student with a love for clean code and crisp UI,
              this blog features tutorials, snippets, reflections, and tech discoveries
              from a developer’s perspective.
            </p>
          </section>

          {/* Highlight Box */}
          <section className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-400 mb-6">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🚀 Why Byte Code?</h3>
            <p className="text-gray-800 text-base">
              Because learning code shouldn&apos;t be boring or overwhelming.
              Byte Code delivers small, digestible pieces of powerful knowledge.
            </p>
          </section>

          {/* Footer Note */}
          <footer className="text-gray-600 text-base pt-4 border-t mt-6">
            Thanks for stopping by! Stay curious. Stay coding. 💻
          </footer>
        </div>
      </div>
    </main>
  );
}
