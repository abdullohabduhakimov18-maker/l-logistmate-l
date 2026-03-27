import Link from 'next/link'
import Navbar from '@/components/navbar'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6 mb-16">
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

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Popular Truck Types in Logistics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Box Truck */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src="/images/box-truck.jpg" 
                  alt="Box Truck" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Box Truck</h4>
                <p className="text-gray-600 mb-4">A smaller, integrated truck and cargo area. Used for local deliveries and last-mile logistics.</p>
                <p className="text-sm text-gray-500 font-semibold">12FT-26FT LENGTH, NON-CDL OPTIONS.</p>
              </div>
            </div>

            {/* Dry Van */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src="/images/dry-van.jpg" 
                  alt="Dry Van" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Dry Van</h4>
                <p className="text-gray-600 mb-4">The most common type of trailer. A simple, enclosed box used to transport non-perishable goods.</p>
                <p className="text-sm text-gray-500 font-semibold">53FT LENGTH, UP TO 45,000 LBS CAPACITY.</p>
              </div>
            </div>

            {/* Reefer */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src="/images/reefer-truck.jpg" 
                  alt="Reefer Truck" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Reefer (Refrigerated)</h4>
                <p className="text-gray-600 mb-4">Equipped with a cooling system to transport temperature-sensitive goods like food or pharmaceuticals.</p>
                <p className="text-sm text-gray-500 font-semibold">53FT LENGTH, TEMPERATURE CONTROLLED.</p>
              </div>
            </div>

            {/* Flatbed */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src="/images/flatbed-truck.jpg" 
                  alt="Flatbed Truck" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Flatbed</h4>
                <p className="text-gray-600 mb-4">An open trailer with no sides or roof. Used for oversized loads, construction materials, and machinery.</p>
                <p className="text-sm text-gray-500 font-semibold">VERSATILE LOADING, REQUIRES STRAPPING/TARPING.</p>
              </div>
            </div>

            {/* Step Deck */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-64 overflow-hidden bg-gray-200">
                <img 
                  src="/images/step-deck.jpg" 
                  alt="Step Deck Trailer" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Step Deck</h4>
                <p className="text-gray-600 mb-4">Similar to a flatbed but with a lower deck to accommodate taller loads that would exceed height limits.</p>
                <p className="text-sm text-gray-500 font-semibold">TWO-LEVEL DECK, IDEAL FOR TALL MACHINERY.</p>
              </div>
            </div>

            {/* General Logistics Info */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 text-white flex flex-col justify-center">
              <h4 className="text-2xl font-bold mb-4">Start Learning Today</h4>
              <p className="mb-6">Explore our comprehensive resources including industry news, glossary, safety guidelines, and logistics tools.</p>
              <Link 
                href="/tests"
                className="inline-block px-6 py-2 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition font-semibold text-center"
              >
                Take the Quiz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
