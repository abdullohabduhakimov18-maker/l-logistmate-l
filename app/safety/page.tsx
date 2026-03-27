import Navbar from '@/components/navbar'

const safetyCategories = [
  {
    title: 'Vehicle Safety',
    description: 'Best practices for maintaining and operating logistics vehicles safely.',
    tips: [
      'Perform daily pre-trip inspections before any journey',
      'Maintain proper tire pressure and tread depth',
      'Check brakes, lights, and mirrors regularly',
      'Keep emergency equipment in the vehicle',
      'Follow speed limits and road regulations'
    ],
    icon: '🚛'
  },
  {
    title: 'Driver Safety',
    description: 'Guidelines for protecting drivers and ensuring safe operations.',
    tips: [
      'Get adequate rest before long drives',
      'Take regular breaks to avoid fatigue',
      'Avoid distractions while driving',
      'Wear seat belts at all times',
      'Practice defensive driving techniques'
    ],
    icon: '👷'
  },
  {
    title: 'Loading & Unloading',
    description: 'Safe practices when handling cargo and warehouse operations.',
    tips: [
      'Use proper lifting techniques to prevent injury',
      'Secure loads properly using straps and tie-downs',
      'Wear appropriate personal protective equipment',
      'Follow weight distribution guidelines',
      'Use mechanical aids when available'
    ],
    icon: '📦'
  },
  {
    title: 'Hazardous Materials',
    description: 'Handling and transporting hazardous materials safely.',
    tips: [
      'Obtain proper DOT certifications for hazmat transport',
      'Use appropriate placards and labels',
      'Keep safety data sheets (SDS) readily available',
      'Know emergency procedures for spills',
      'Use required personal protective equipment'
    ],
    icon: '⚠️'
  },
  {
    title: 'Warehouse Safety',
    description: 'Creating and maintaining safe warehouse environments.',
    tips: [
      'Keep aisles and exits clear and marked',
      'Use proper forklift operation procedures',
      'Maintain good housekeeping standards',
      'Install proper lighting and signage',
      'Conduct regular safety training and drills'
    ],
    icon: '🏭'
  },
  {
    title: 'Weather & Road Conditions',
    description: 'Adapting logistics operations to challenging conditions.',
    tips: [
      'Reduce speed in adverse weather',
      'Check forecasts before longer trips',
      'Maintain extra following distances',
      'Know when to delay trips or pull over',
      'Keep emergency supplies on board'
    ],
    icon: '🌧️'
  }
]

export default function SafetyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Safety Guidelines</h1>
          <p className="text-lg text-gray-600">Comprehensive safety protocols and best practices for logistics professionals.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {safetyCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <ul className="space-y-2">
                {category.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-blue-600 font-bold mt-0.5">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 border-l-4 border-blue-600">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Resources</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold mb-2">National Numbers:</p>
              <p>Emergency: 911</p>
              <p>DOT Hotline: 1-888-889-3677</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Important Contacts:</p>
              <p>OSHA: www.osha.gov</p>
              <p>FMCSA: www.fmcsa.dot.gov</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
