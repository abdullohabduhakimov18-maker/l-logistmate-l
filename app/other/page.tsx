import Navbar from '@/components/navbar'

export default function OtherPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Additional Resources</h1>
          <p className="text-lg text-gray-600">Explore more features and resources to enhance your logistics knowledge.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Blog & Articles Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog & Articles</h2>
            <p className="text-gray-600 mb-6">Read the latest insights, trends, and best practices in the logistics industry.</p>
            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-900">The Future of AI in Supply Chains</h3>
                <p className="text-sm text-gray-600">Explore how artificial intelligence is transforming logistics...</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-900">Sustainable Logistics Solutions</h3>
                <p className="text-sm text-gray-600">Learn about eco-friendly practices in modern transportation...</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="font-semibold text-gray-900">Last-Mile Delivery Innovations</h3>
                <p className="text-sm text-gray-600">Discover new approaches to optimize final delivery stages...</p>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition">
              View All Articles
            </button>
          </div>

          {/* Webinars & Training Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Webinars & Training</h2>
            <p className="text-gray-600 mb-6">Join our live webinars and access on-demand training courses.</p>
            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 rounded p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Advanced Route Planning</h3>
                    <p className="text-sm text-gray-600">Upcoming - March 30, 2:00 PM EST</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded">Live</span>
                </div>
              </div>
              <div className="bg-gray-100 rounded p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Supply Chain Security</h3>
                    <p className="text-sm text-gray-600">On-Demand Available</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 rounded p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900">Compliance & Regulations</h3>
                    <p className="text-sm text-gray-600">On-Demand Available</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition">
              Explore Training
            </button>
          </div>

          {/* Industry News Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Industry News</h2>
            <p className="text-gray-600 mb-6">Stay updated with the latest logistics and supply chain news.</p>
            <div className="space-y-4 mb-6">
              <div className="pb-4 border-b border-gray-200">
                <p className="text-xs text-blue-600 font-semibold">Today</p>
                <h3 className="font-semibold text-gray-900">New EV Trucks Reduce Emissions</h3>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <p className="text-xs text-blue-600 font-semibold">Yesterday</p>
                <h3 className="font-semibold text-gray-900">Port Automation Expands</h3>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <p className="text-xs text-blue-600 font-semibold">Mar 26</p>
                <h3 className="font-semibold text-gray-900">Global Trade Trends Report</h3>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition">
              Read All News
            </button>
          </div>

          {/* Community & Support Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Community & Support</h2>
            <p className="text-gray-600 mb-6">Connect with other logistics professionals and get support.</p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">👥</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Discussion Forums</p>
                  <p className="text-sm text-gray-600">5,234 active members</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">💬</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Expert Q&A</p>
                  <p className="text-sm text-gray-600">Get answers from professionals</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">📞</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Support Team</p>
                  <p className="text-sm text-gray-600">Available 24/7</p>
                </div>
              </div>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition">
              Join Community
            </button>
          </div>
        </div>

        {/* Partnerships Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Partners</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Major Carriers</p>
              <p className="text-sm text-gray-600 mt-2">Integrated with leading trucking companies</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Tech Partners</p>
              <p className="text-sm text-gray-600 mt-2">Connected with GPS and tracking providers</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Logistics Experts</p>
              <p className="text-sm text-gray-600 mt-2">Consulting with industry specialists</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center hover:shadow-md transition">
              <p className="font-semibold text-gray-900">Regulatory Bodies</p>
              <p className="text-sm text-gray-600 mt-2">Aligned with DOT and industry standards</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
