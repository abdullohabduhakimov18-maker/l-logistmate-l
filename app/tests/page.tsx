'use client'

import { useState } from 'react'
import Link from 'next/link'
import Navbar from '@/components/navbar'

const levels = [
  {
    id: 1,
    title: 'Logistics Fundamentals',
    description: 'Basic logistics knowledge',
    requiresPreviousLevel: false,
    previousLevelRequired: 0,
    questions: [
      {
        id: 1,
        question: 'What is logistics?',
        options: ['Movement of goods', 'Transportation only', 'Warehousing only', 'Customer service'],
        correct: 0,
      },
      {
        id: 2,
        question: 'Which is not part of supply chain management?',
        options: ['Procurement', 'Marketing strategy', 'Distribution', 'Inventory management'],
        correct: 1,
      },
      {
        id: 3,
        question: 'What does JIT stand for?',
        options: ['Just in Time', 'Joint International Trade', 'Journey in Tracking', 'Joint in Transit'],
        correct: 0,
      },
      {
        id: 4,
        question: 'Which document tracks the movement of goods?',
        options: ['Bill of lading', 'Invoice', 'Purchase order', 'Quotation'],
        correct: 0,
      },
      {
        id: 5,
        question: 'What is the primary goal of logistics?',
        options: ['Maximize efficiency', 'Reduce costs', 'Deliver right product at right time', 'All of above'],
        correct: 3,
      },
      {
        id: 6,
        question: 'Which mode of transport is most cost-effective for bulk goods?',
        options: ['Air', 'Sea', 'Road', 'Rail'],
        correct: 1,
      },
      {
        id: 7,
        question: 'What is a warehouse?',
        options: ['Storage facility', 'Transport vehicle', 'Distribution center', 'Retail store'],
        correct: 0,
      },
      {
        id: 8,
        question: 'Which is a key performance indicator in logistics?',
        options: ['On-time delivery', 'Employee satisfaction', 'Brand recognition', 'Social media followers'],
        correct: 0,
      },
      {
        id: 9,
        question: 'What does 3PL mean?',
        options: ['Third Party Logistics', 'Three Part Listing', 'Triple Payment Logic', 'Three Priority Levels'],
        correct: 0,
      },
      {
        id: 10,
        question: 'Which is the first step in the logistics process?',
        options: ['Procurement', 'Transportation', 'Delivery', 'Payment'],
        correct: 0,
      },
    ],
  },
  {
    id: 2,
    title: 'Supply Chain Operations',
    description: 'Advanced supply chain concepts',
    requiresPreviousLevel: true,
    previousLevelRequired: 1,
    questions: [
      {
        id: 1,
        question: 'What is demand forecasting?',
        options: ['Predicting customer demand', 'Calculating inventory', 'Measuring sales', 'Pricing strategy'],
        correct: 0,
      },
      {
        id: 2,
        question: 'Which inventory method values stock at cost?',
        options: ['FIFO', 'LIFO', 'Weighted average', 'Specific identification'],
        correct: 2,
      },
      {
        id: 3,
        question: 'What is safety stock?',
        options: ['Extra inventory buffer', 'Secured warehouse', 'Insurance coverage', 'Safe packaging'],
        correct: 0,
      },
      {
        id: 4,
        question: 'Which metric measures inventory turnover?',
        options: ['COGS/Average inventory', 'Revenue/Assets', 'Profit margin', 'ROI'],
        correct: 0,
      },
      {
        id: 5,
        question: 'What does ABC analysis classify?',
        options: ['Inventory items by value', 'Suppliers', 'Customers', 'Products'],
        correct: 0,
      },
      {
        id: 6,
        question: 'Which is not a warehousing function?',
        options: ['Receiving', 'Storage', 'Marketing', 'Picking and packing'],
        correct: 2,
      },
      {
        id: 7,
        question: 'What is cross-docking?',
        options: ['Direct transfer of goods', 'Long-term storage', 'Packaging method', 'Shipping route'],
        correct: 0,
      },
      {
        id: 8,
        question: 'Which system tracks real-time shipment location?',
        options: ['GPS tracking', 'Barcode scanning', 'RFID', 'All of above'],
        correct: 3,
      },
      {
        id: 9,
        question: 'What is vendor-managed inventory?',
        options: ['Supplier manages inventory levels', 'Customer controls stock', 'Retailer manages supply', 'Distributor decides quantity'],
        correct: 0,
      },
      {
        id: 10,
        question: 'Which reduces transportation costs significantly?',
        options: ['Route optimization', 'More vehicles', 'Frequent shipments', 'Premium packaging'],
        correct: 0,
      },
    ],
  },
  {
    id: 3,
    title: 'Distribution Management',
    description: 'Managing distribution networks',
    requiresPreviousLevel: true,
    previousLevelRequired: 2,
    questions: [
      {
        id: 1,
        question: 'What is a distribution center?',
        options: ['Facility for sorting and distributing goods', 'Manufacturing plant', 'Retail outlet', 'Warehouse only'],
        correct: 0,
      },
      {
        id: 2,
        question: 'Which channel has most direct customer contact?',
        options: ['Direct-to-consumer', 'Wholesale', 'Retail', 'B2B'],
        correct: 0,
      },
      {
        id: 3,
        question: 'What is last-mile delivery?',
        options: ['Final delivery to customer', 'Warehouse to store', 'Port to warehouse', 'Factory to port'],
        correct: 0,
      },
      {
        id: 4,
        question: 'Which reduces distribution costs?',
        options: ['Hub-and-spoke model', 'Direct shipping all routes', 'Multiple distribution centers', 'Premium packaging'],
        correct: 0,
      },
      {
        id: 5,
        question: 'What is drop-shipping?',
        options: ['Supplier ships directly to customer', 'Customer returns items', 'Dropping prices', 'Emergency delivery'],
        correct: 0,
      },
      {
        id: 6,
        question: 'Which technology improves last-mile efficiency?',
        options: ['Route optimization software', 'Manual planning', 'Fixed routes', 'Random delivery'],
        correct: 0,
      },
      {
        id: 7,
        question: 'What is reverse logistics?',
        options: ['Return and refund management', 'Forward shipping', 'Inventory increase', 'Demand forecasting'],
        correct: 0,
      },
      {
        id: 8,
        question: 'Which is a distribution network benefit?',
        options: ['Faster delivery times', 'Higher inventory', 'Reduced efficiency', 'Increased costs'],
        correct: 0,
      },
      {
        id: 9,
        question: 'What is omnichannel distribution?',
        options: ['Multiple sales channels integration', 'Single channel only', 'Online only', 'Offline only'],
        correct: 0,
      },
      {
        id: 10,
        question: 'Which metric tracks distribution success?',
        options: ['Order fulfillment rate', 'Warehouse size', 'Employee count', 'Vehicle age'],
        correct: 0,
      },
    ],
  },
  {
    id: 4,
    title: 'Advanced Logistics Concepts',
    description: 'Complex logistics strategies',
    requiresPreviousLevel: true,
    previousLevelRequired: 3,
    questions: [
      {
        id: 1,
        question: 'What is supply chain visibility?',
        options: ['Real-time tracking of goods', 'Warehouse size', 'Employee visibility', 'Office layout'],
        correct: 0,
      },
      {
        id: 2,
        question: 'Which reduces supply chain risk?',
        options: ['Supplier diversification', 'Single supplier', 'No backup plan', 'Reduced inventory'],
        correct: 0,
      },
      {
        id: 3,
        question: 'What is lean logistics?',
        options: ['Eliminating waste and inefficiency', 'Reducing employees', 'Cutting corners', 'Lower quality'],
        correct: 0,
      },
      {
        id: 4,
        question: 'Which technology enables IoT in logistics?',
        options: ['Sensors and connectivity', 'Paper records', 'Manual tracking', 'Email systems'],
        correct: 0,
      },
      {
        id: 5,
        question: 'What is supply chain resilience?',
        options: ['Ability to recover from disruptions', 'Cost reduction', 'Speed increase', 'Volume expansion'],
        correct: 0,
      },
      {
        id: 6,
        question: 'Which impacts sustainability in logistics?',
        options: ['Green transportation', 'Fuel consumption', 'Packaging waste', 'Carbon footprint'],
        correct: 0,
      },
      {
        id: 7,
        question: 'What is blockchain in supply chain?',
        options: ['Transparent transaction ledger', 'Inventory system', 'Shipping method', 'Pricing tool'],
        correct: 0,
      },
      {
        id: 8,
        question: 'Which improves supply chain transparency?',
        options: ['Real-time data sharing', 'Information silos', 'Manual reports', 'Email updates'],
        correct: 0,
      },
      {
        id: 9,
        question: 'What is predictive analytics in logistics?',
        options: ['Using data to forecast trends', 'Historical data only', 'Guessing', 'Gut feeling'],
        correct: 0,
      },
      {
        id: 10,
        question: 'Which is a key sustainability metric?',
        options: ['Carbon emissions per shipment', 'Profit margin', 'Market share', 'Brand value'],
        correct: 0,
      },
    ],
  },
  {
    id: 5,
    title: 'Strategic Logistics Planning',
    description: 'Expert-level logistics strategy',
    requiresPreviousLevel: true,
    previousLevelRequired: 4,
    questions: [
      {
        id: 1,
        question: 'What is a supply chain strategy?',
        options: ['Long-term plan for competitive advantage', 'Short-term cost cutting', 'Daily operations', 'Annual budgeting'],
        correct: 0,
      },
      {
        id: 2,
        question: 'Which strategy focuses on low-cost operations?',
        options: ['Efficiency strategy', 'Premium strategy', 'Luxury strategy', 'Niche strategy'],
        correct: 0,
      },
      {
        id: 3,
        question: 'What is supply chain integration?',
        options: ['Linking all supply chain functions', 'Separate departments', 'Internal only', 'Competitor focus'],
        correct: 0,
      },
      {
        id: 4,
        question: 'Which enables agile supply chains?',
        options: ['Flexible operations', 'Fixed processes', 'Rigid structure', 'No change management'],
        correct: 0,
      },
      {
        id: 5,
        question: 'What is supply chain benchmarking?',
        options: ['Comparing performance against industry standards', 'Internal comparison only', 'Competitor spying', 'Random metrics'],
        correct: 0,
      },
      {
        id: 6,
        question: 'Which impacts long-term logistics success?',
        options: ['Technology adoption', 'Manual processes', 'Avoiding innovation', 'Resistance to change'],
        correct: 0,
      },
      {
        id: 7,
        question: 'What is supply chain digitalization?',
        options: ['Integration of digital technologies', 'Using email only', 'Spreadsheets', 'Phone communication'],
        correct: 0,
      },
      {
        id: 8,
        question: 'Which supports strategic decision-making?',
        options: ['Big data analytics', 'Intuition only', 'Outdated reports', 'No data analysis'],
        correct: 0,
      },
      {
        id: 9,
        question: 'What is customer-centric logistics?',
        options: ['Designing supply chain around customer needs', 'Internal focus only', 'Cost-only focus', 'Profit maximization'],
        correct: 0,
      },
      {
        id: 10,
        question: 'Which creates competitive advantage?',
        options: ['Superior supply chain execution', 'Low prices only', 'Marketing spending', 'Brand recognition'],
        correct: 0,
      },
    ],
  },
  {
    id: 6,
    title: 'Supply Chain Leadership',
    description: 'Ultimate logistics mastery',
    requiresPreviousLevel: true,
    previousLevelRequired: 5,
    questions: [
      {
        id: 1,
        question: 'What drives supply chain transformation?',
        options: ['Leadership vision and change management', 'Cost cutting alone', 'Technology only', 'Employee resistance'],
        correct: 0,
      },
      {
        id: 2,
        question: 'Which builds supply chain resilience?',
        options: ['Risk management and contingency planning', 'Ignoring risks', 'Single sourcing', 'No planning'],
        correct: 0,
      },
      {
        id: 3,
        question: 'What is supply chain sustainability leadership?',
        options: ['Balancing profit with environmental responsibility', 'Profit only', 'Environmental only', 'No balance needed'],
        correct: 0,
      },
      {
        id: 4,
        question: 'Which develops supply chain talent?',
        options: ['Training and continuous learning', 'No investment', 'External hiring only', 'No development'],
        correct: 0,
      },
      {
        id: 5,
        question: 'What is supply chain governance?',
        options: ['Policies and oversight structures', 'No rules', 'Unclear processes', 'Individual decisions'],
        correct: 0,
      },
      {
        id: 6,
        question: 'Which enhances supply chain collaboration?',
        options: ['Cross-functional partnerships', 'Department silos', 'No communication', 'Competitive attitude'],
        correct: 0,
      },
      {
        id: 7,
        question: 'What is supply chain innovation?',
        options: ['Creating new processes and solutions', 'Maintaining status quo', 'Avoiding change', 'Following trends blindly'],
        correct: 0,
      },
      {
        id: 8,
        question: 'Which measures supply chain value?',
        options: ['Total cost of ownership', 'Purchase price only', 'One metric only', 'Gut feeling'],
        correct: 0,
      },
      {
        id: 9,
        question: 'What is supply chain ethics?',
        options: ['Responsible and fair practices', 'Cutting corners', 'Profit at any cost', 'Ignoring standards'],
        correct: 0,
      },
      {
        id: 10,
        question: 'Which creates lasting competitive advantage?',
        options: ['Integrated supply chain excellence', 'Temporary solutions', 'Short-term focus', 'No long-term vision'],
        correct: 0,
      },
    ],
  },
  {
    id: 7,
    title: 'Global Supply Networks',
    description: 'International logistics management',
    requiresPreviousLevel: true,
    previousLevelRequired: 6,
    questions: [
      {
        id: 1,
        question: 'What is international logistics?',
        options: ['Cross-border movement of goods', 'Domestic only', 'Warehouse management', 'Inventory control'],
        correct: 0,
      },
      {
        id: 2,
        question: 'Which document is essential for exports?',
        options: ['Certificate of origin', 'Invoice only', 'Packing list alone', 'Email confirmation'],
        correct: 0,
      },
      {
        id: 3,
        question: 'What is Incoterms?',
        options: ['International commercial terms for trade', 'Internal company terms', 'Informal agreements', 'Pricing rules'],
        correct: 0,
      },
      {
        id: 4,
        question: 'Which impacts global supply chain costs?',
        options: ['Customs duties and tariffs', 'Employee salaries', 'Office furniture', 'Marketing budget'],
        correct: 0,
      },
      {
        id: 5,
        question: 'What is supply chain localization?',
        options: ['Adapting to regional requirements', 'Centralizing everything', 'No customization', 'Ignoring local needs'],
        correct: 0,
      },
      {
        id: 6,
        question: 'Which reduces international shipping delays?',
        options: ['Pre-clearance documentation', 'Last-minute paperwork', 'No planning', 'Manual processes'],
        correct: 0,
      },
      {
        id: 7,
        question: 'What is geopolitical risk in supply chains?',
        options: ['Disruptions from political events', 'No external risks', 'Only economic factors', 'Weather only'],
        correct: 0,
      },
      {
        id: 8,
        question: 'Which supports global visibility?',
        options: ['Cloud-based tracking systems', 'Local systems only', 'Manual tracking', 'No visibility'],
        correct: 0,
      },
      {
        id: 9,
        question: 'What is supply chain localization strategy?',
        options: ['Balancing global and local operations', 'Global only', 'Local only', 'No strategy'],
        correct: 0,
      },
      {
        id: 10,
        question: 'Which handles international compliance?',
        options: ['Regulatory expertise and systems', 'Ignoring regulations', 'Hoping for best', 'No compliance plan'],
        correct: 0,
      },
    ],
  },
  {
    id: 8,
    title: 'Supply Chain Innovation & AI',
    description: 'Cutting-edge logistics technology',
    requiresPreviousLevel: true,
    previousLevelRequired: 7,
    questions: [
      {
        id: 1,
        question: 'How does AI improve supply chain?',
        options: ['Predictive analytics and optimization', 'No automation', 'Manual processes', 'Outdated systems'],
        correct: 0,
      },
      {
        id: 2,
        question: 'What is autonomous delivery?',
        options: ['Self-driving vehicles or drones', 'Manual delivery', 'No vehicles', 'Bicycles only'],
        correct: 0,
      },
      {
        id: 3,
        question: 'Which uses machine learning effectively?',
        options: ['Demand forecasting', 'Guessing', 'Historical data only', 'No prediction'],
        correct: 0,
      },
      {
        id: 4,
        question: 'What is supply chain digitization ROI?',
        options: ['Return on digital transformation investments', 'No measurable benefits', 'Only cost savings', 'Intangible only'],
        correct: 0,
      },
      {
        id: 5,
        question: 'Which technology tracks micro-movements?',
        options: ['RFID and GPS integration', 'Manual inspection', 'Paper records', 'No tracking'],
        correct: 0,
      },
      {
        id: 6,
        question: 'What is supply chain orchestration?',
        options: ['Coordinating all supply chain activities', 'Independent operations', 'No coordination', 'Manual only'],
        correct: 0,
      },
      {
        id: 7,
        question: 'Which uses AI for route optimization?',
        options: ['Machine learning algorithms', 'Fixed routes', 'Random selection', 'No optimization'],
        correct: 0,
      },
      {
        id: 8,
        question: 'What is supply chain cybersecurity?',
        options: ['Protecting digital supply chain systems', 'Ignoring security', 'No protection', 'Manual security'],
        correct: 0,
      },
      {
        id: 9,
        question: 'Which predicts supply chain disruptions?',
        options: ['AI-powered risk modeling', 'No prediction', 'Reactive only', 'Ignoring risks'],
        correct: 0,
      },
      {
        id: 10,
        question: 'What defines future logistics?',
        options: ['AI, automation, and sustainability integration', 'Manual processes', 'No innovation', 'Status quo'],
        correct: 0,
      },
    ],
  },
]

export default function TestsPage() {
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [completed, setCompleted] = useState(false)
  const [userScore, setUserScore] = useState('0%')

  const currentLevel = selectedLevel ? levels.find(l => l.id === selectedLevel) : null
  const currentQuestion = currentLevel ? currentLevel.questions[currentQuestionIndex] : null

  const handleAnswerClick = (optionIndex: number) => {
    if (currentQuestion && optionIndex === currentQuestion.correct) {
      setScore(score + 1)
    }

    if (currentQuestionIndex < (currentLevel?.questions.length ?? 0) - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      const finalScore = Math.round(((score + (optionIndex === currentQuestion?.correct ? 1 : 0)) / (currentLevel?.questions.length ?? 10)) * 100)
      setUserScore(`${finalScore}%`)
      setCompleted(true)
    }
  }

  const resetTest = () => {
    setSelectedLevel(null)
    setCurrentQuestionIndex(0)
    setScore(0)
    setCompleted(false)
    setUserScore('0%')
  }

  if (selectedLevel && !completed) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-8 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{currentLevel?.title}</h1>
            <p className="text-gray-600 mb-4">Question {currentQuestionIndex + 1} of {currentLevel?.questions.length}</p>
            <div className="w-full bg-gray-300 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / (currentLevel?.questions.length ?? 10)) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">{currentQuestion?.question}</h2>
            <div className="space-y-3">
              {currentQuestion?.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerClick(index)}
                  className="w-full p-4 text-left border border-gray-300 rounded-lg hover:border-blue-600 hover:bg-blue-50 transition font-medium text-gray-700"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (completed) {
    return (
      <main className="min-h-screen bg-white">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-12 mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Completed!</h1>
            <p className="text-gray-600 mb-6">Your Score</p>
            <p className="text-6xl font-bold text-blue-600 mb-8">{userScore}</p>
            <button
              onClick={resetTest}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Back to Levels
            </button>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Logistics Knowledge Tests</h1>
          <p className="text-gray-600 text-lg">Progress through 8 levels of logistics expertise</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {levels.map((level) => (
            <div key={level.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Level {level.id}</h3>
              <p className="text-gray-600 mb-4">{level.description}</p>
              
              {level.requiresPreviousLevel && (
                <p className="text-sm text-orange-600 mb-4">
                  Complete level {level.previousLevelRequired} with 90% to unlock
                </p>
              )}

              <button
                onClick={() => setSelectedLevel(level.id)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Start Level {level.id}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
