import Navbar from '@/components/navbar'

const tools = [
  {
    name: 'Route Optimizer',
    description: 'Calculate the most efficient delivery routes to save time and fuel costs.',
    category: 'Planning',
    features: ['Multi-stop optimization', 'Real-time traffic', 'Cost analysis']
  },
  {
    name: 'Freight Calculator',
    description: 'Calculate shipping costs, weight limits, and freight classifications quickly.',
    category: 'Operations',
    features: ['Weight calculations', 'Density pricing', 'Quote generator']
  },
  {
    name: 'Load Planner',
    description: 'Visualize and optimize cargo loading for maximum space utilization.',
    category: 'Operations',
    features: ['3D visualization', 'Weight distribution', 'Pallet management']
  },
  {
    name: 'Fleet Management',
    description: 'Monitor vehicle locations, fuel consumption, and maintenance schedules.',
    category: 'Tracking',
    features: ['GPS tracking', 'Fuel monitoring', 'Maintenance alerts']
  },
  {
    name: 'Driver Hours Log',
    description: 'Track HOS (Hours of Service) compliance and generate reports.',
    category: 'Compliance',
    features: ['Electronic logs', 'Compliance alerts', 'Report generation']
  },
  {
    name: 'Inventory Manager',
    description: 'Manage stock levels, track shipments, and optimize warehouse operations.',
    category: 'Inventory',
    features: ['Stock tracking', 'Reorder alerts', 'Warehouse sync']
  },
  {
    name: 'Expense Tracker',
    description: 'Monitor fuel, tolls, maintenance, and other logistics expenses.',
    category: 'Finance',
    features: ['Expense categorization', 'Budget tracking', 'Financial reports']
  },
  {
    name: 'Compliance Checker',
    description: 'Stay up-to-date with DOT regulations and compliance requirements.',
    category: 'Compliance',
    features: ['Regulation updates', 'Certification tracking', 'Documentation']
  },
  {
    name: 'Carrier Comparison',
    description: 'Compare rates, services, and reviews from multiple carriers.',
    category: 'Sourcing',
    features: ['Rate comparison', 'Service reviews', 'Capacity search']
  },
  {
    name: 'Supply Chain Analytics',
    description: 'Analyze performance metrics and identify optimization opportunities.',
    category: 'Analytics',
    features: ['KPI dashboard', 'Trend analysis', 'Benchmarking']
  },
  {
    name: 'Weather Alert System',
    description: 'Get real-time weather alerts and road condition updates for your routes.',
    category: 'Safety',
    features: ['Severe weather alerts', 'Road closures', 'Route alternatives']
  },
  {
    name: 'Communication Hub',
    description: 'Centralized platform for driver, shipper, and dispatcher communication.',
    category: 'Communication',
    features: ['Real-time messaging', 'Document sharing', 'Status updates']
  }
]

const categories = ['All', ...new Set(tools.map(t => t.category))]

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Logistics Tools</h1>
          <p className="text-lg text-gray-600">Comprehensive tools and calculators to streamline your logistics operations.</p>
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition hover:border-blue-300">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900">{tool.name}</h3>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded font-medium">
                  {tool.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-gray-700">Key Features:</p>
                <ul className="flex flex-wrap gap-2">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded font-medium hover:bg-blue-700 transition">
                Launch Tool
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
