'use client'

import { useState } from 'react'

interface Category {
  name: string
  count: number
}

interface NewsSidebarProps {
  categories: Category[]
}

export default function NewsSidebar({ categories }: NewsSidebarProps) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <aside className="space-y-8">
      {/* Newsletter Signup */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Stay Updated</h3>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest logistics news delivered to your inbox weekly.
        </p>
        <form onSubmit={handleSubscribe} className="space-y-3">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm"
          >
            {subscribed ? '✓ Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category.name}>
              <a
                href="#"
                className="flex items-center justify-between text-gray-700 hover:text-blue-600 transition"
              >
                <span className="font-medium">{category.name}</span>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                  {category.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-gray-700 hover:text-blue-600 transition">About Us</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600 transition">Terms of Service</a></li>
          <li><a href="#" className="text-gray-700 hover:text-blue-600 transition">Privacy Policy</a></li>
        </ul>
      </div>

      {/* Featured Stats */}
      <div className="bg-gray-900 text-white rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">By The Numbers</h3>
        <div className="space-y-3">
          <div>
            <div className="text-3xl font-bold text-blue-400">1.2M</div>
            <div className="text-sm text-gray-400">Monthly Readers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">500+</div>
            <div className="text-sm text-gray-400">Articles Published</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400">75</div>
            <div className="text-sm text-gray-400">Industry Partners</div>
          </div>
        </div>
      </div>
    </aside>
  )
}
