import Link from 'next/link'
import Navbar from '@/components/navbar'
import NewsCard from '@/components/news-card'
import NewsHero from '@/components/news-hero'
import NewsSidebar from '@/components/news-sidebar'

const featuredNews = [
  {
    id: 1,
    title: "AI-Powered Supply Chain Optimization Cuts Costs by 30%",
    excerpt: "Leading logistics companies report significant savings through implementation of artificial intelligence in route planning and inventory management.",
    category: "Technology",
    date: "March 25, 2026",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    readTime: 5
  },
  {
    id: 2,
    title: "Global Shipping Rates Hit 5-Year High Amid Port Congestion",
    excerpt: "Rising demand and supply chain disruptions continue to impact international freight costs. Industry analysts warn of sustained pressure through Q2.",
    category: "Market",
    date: "March 23, 2026",
    image: "https://images.unsplash.com/photo-1519391846015-e7e9a38f1b5f?w=800&h=400&fit=crop",
    readTime: 4
  }
]

const recentNews = [
  {
    id: 3,
    title: "Electric Vehicles Transform Last-Mile Delivery",
    excerpt: "Major courier services accelerate EV adoption, reducing emissions by 40% in urban delivery operations.",
    category: "Sustainability",
    date: "March 22, 2026",
    image: "https://images.unsplash.com/photo-1559163615-cd4628902d4a?w=600&h=300&fit=crop",
    readTime: 3
  },
  {
    id: 4,
    title: "Blockchain Technology Enhances Supply Chain Transparency",
    excerpt: "Real-time tracking and authentication capabilities revolutionize product verification across borders.",
    category: "Technology",
    date: "March 20, 2026",
    image: "https://images.unsplash.com/photo-1563986768609-322510fc6fe3?w=600&h=300&fit=crop",
    readTime: 6
  },
  {
    id: 5,
    title: "Labor Shortage Drives Automation Investment",
    excerpt: "Warehouses invest heavily in robotics to address workforce challenges and improve operational efficiency.",
    category: "Industry",
    date: "March 18, 2026",
    image: "https://images.unsplash.com/photo-1488908996199-48070e4ee0da?w=600&h=300&fit=crop",
    readTime: 4
  },
  {
    id: 6,
    title: "3PL Companies Expand Into Southeast Asia",
    excerpt: "Strategic partnerships position logistics providers for rapid growth in emerging markets.",
    category: "Business",
    date: "March 15, 2026",
    image: "https://images.unsplash.com/photo-1586528116029-5e0b3b7b7b7f?w=600&h=300&fit=crop",
    readTime: 5
  },
  {
    id: 7,
    title: "Supply Chain Resilience: Lessons from Recent Disruptions",
    excerpt: "Industry experts share insights on building more resilient and flexible logistics networks.",
    category: "Analysis",
    date: "March 12, 2026",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=300&fit=crop",
    readTime: 7
  },
  {
    id: 8,
    title: "Drone Delivery: From Pilot to Commercial Reality",
    excerpt: "Regulatory breakthroughs enable widespread adoption of autonomous aerial delivery systems.",
    category: "Innovation",
    date: "March 10, 2026",
    image: "https://images.unsplash.com/photo-1579323228947-ba0e8f45250f?w=600&h=300&fit=crop",
    readTime: 5
  }
]

const categories = [
  { name: "Technology", count: 12 },
  { name: "Market", count: 8 },
  { name: "Sustainability", count: 6 },
  { name: "Industry", count: 15 },
  { name: "Business", count: 9 },
  { name: "Analysis", count: 5 },
  { name: "Innovation", count: 7 }
]

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <NewsHero />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.map((article) => (
              <NewsCard key={article.id} article={article} featured />
            ))}
          </div>
        </section>

        {/* Recent News + Sidebar */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Recent News */}
          <section className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
            <div className="space-y-6">
              {recentNews.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <NewsSidebar categories={categories} />
          </aside>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-semibold mb-4">About</h3>
              <p className="text-sm">Stay informed with the latest logistics industry news and insights from around the world.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Categories</h3>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Technology</a></li>
                <li><a href="#" className="hover:text-white">Market Analysis</a></li>
                <li><a href="#" className="hover:text-white">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <p className="text-sm">Email: news@logisticspro.com</p>
              <p className="text-sm">Phone: +1 (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2026 LogisticsPro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
