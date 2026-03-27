export default function NewsHero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-5xl font-bold text-pretty">
            Logistics Industry News & Insights
          </h1>
          <p className="text-xl text-blue-100">
            Stay ahead of industry trends with comprehensive coverage of supply chain innovations, market analysis, and global logistics developments.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-12">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search news articles..."
              className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
