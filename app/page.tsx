import Link from 'next/link'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold text-gray-900">
            Welcome to LogisticsPro
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your trusted source for logistics industry news, insights, and trends
          </p>
          <Link 
            href="/news"
            className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-lg font-semibold"
          >
            Explore News
          </Link>
        </div>
      </div>
    </main>
  )
}
