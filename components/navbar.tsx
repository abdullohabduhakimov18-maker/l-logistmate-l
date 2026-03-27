'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <header className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <h1 className="text-2xl font-bold text-blue-600">LogisticsPro</h1>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            href="/"
            className={`font-medium transition ${
              isActive('/')
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link
            href="/news"
            className={`font-medium transition ${
              isActive('/news')
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            News
          </Link>
        </div>

        <button className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition font-semibold">
          Sign In
        </button>
      </nav>
    </header>
  )
}
