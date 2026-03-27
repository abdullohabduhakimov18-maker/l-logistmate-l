import Image from 'next/image'

interface NewsCardProps {
  article: {
    id: number
    title: string
    excerpt: string
    category: string
    date: string
    image: string
    readTime: number
  }
  featured?: boolean
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  return (
    <article className={`group cursor-pointer transition ${featured ? 'h-full' : ''}`}>
      <div className={`overflow-hidden rounded-lg bg-gray-100 ${featured ? 'mb-6' : 'mb-4'}`}>
        <div className={`relative ${featured ? 'h-80' : 'h-48'} overflow-hidden`}>
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover group-hover:scale-105 transition duration-300"
          />
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
              {article.category}
            </span>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
          <time>{article.date}</time>
          <span>•</span>
          <span>{article.readTime} min read</span>
        </div>

        <h3 className={`${featured ? 'text-2xl' : 'text-lg'} font-bold text-gray-900 group-hover:text-blue-600 transition mb-3 line-clamp-3`}>
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4">
          {article.excerpt}
        </p>

        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition">
          Read More
          <span className="group-hover:translate-x-1 transition">→</span>
        </div>
      </div>
    </article>
  )
}
