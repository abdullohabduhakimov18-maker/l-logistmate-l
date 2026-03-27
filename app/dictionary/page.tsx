import Navbar from '@/components/navbar'
import Link from 'next/link'

const glossaryTerms = [
  {
    term: 'BOL (Bill of Lading)',
    definition: 'A legal document issued by the carrier to the shipper detailing the type, quantity, and destination of goods being transported.',
    category: 'Documentation'
  },
  {
    term: 'Dock Door',
    definition: 'The loading and unloading point at a warehouse or distribution center where shipments are transferred between vehicles.',
    category: 'Warehouse'
  },
  {
    term: 'EDI (Electronic Data Interchange)',
    definition: 'The exchange of business documents in a standardized electronic format between trading partners.',
    category: 'Technology'
  },
  {
    term: 'FOB (Free on Board)',
    definition: 'A shipping term indicating where ownership and liability of goods transfer from seller to buyer.',
    category: 'Terms'
  },
  {
    term: 'Full Truckload (FTL)',
    definition: 'A shipment that fills an entire truck trailer, typically more economical than partial truckload.',
    category: 'Shipping'
  },
  {
    term: 'Pallet',
    definition: 'A flat wooden or plastic platform used to stack and transport goods, typically 48x40 inches.',
    category: 'Equipment'
  },
  {
    term: 'Partial Truckload (LTL)',
    definition: 'Less than truckload, a shipment that does not fill an entire trailer and is consolidated with other shipments.',
    category: 'Shipping'
  },
  {
    term: 'Reefer',
    definition: 'A refrigerated trailer equipped with a cooling system for transporting temperature-sensitive goods.',
    category: 'Equipment'
  },
  {
    term: 'Supply Chain',
    definition: 'The network of organizations involved in producing and delivering products from raw materials to end consumer.',
    category: 'General'
  },
  {
    term: 'TMS (Transportation Management System)',
    definition: 'Software that manages freight movement, tracking, and optimization across the supply chain.',
    category: 'Technology'
  },
  {
    term: 'Tractor',
    definition: 'The powered vehicle that pulls a trailer, also known as a semi-truck or big rig.',
    category: 'Equipment'
  },
  {
    term: 'WMS (Warehouse Management System)',
    definition: 'Software that controls the movement and storage of materials within a warehouse.',
    category: 'Technology'
  }
]

const categories = ['All', 'Documentation', 'Warehouse', 'Technology', 'Terms', 'Shipping', 'Equipment', 'General']

export default function DictionaryPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Logistics Dictionary</h1>
          <p className="text-lg text-gray-600">Essential terms and definitions used in the logistics and supply chain industry.</p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium transition ${
                category === 'All'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {glossaryTerms.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900">{item.term}</h3>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  {item.category}
                </span>
              </div>
              <p className="text-gray-600">{item.definition}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
