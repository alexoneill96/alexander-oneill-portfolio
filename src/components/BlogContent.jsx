import { Link } from 'react-router-dom'
import { posts } from '../data/posts'

export default function BlogContent() {
  return (
    <section className="py-8">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-blur">
        Blog
      </h1>

      {/* Intro */}
      <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed mb-12 max-w-xl animate-fade-in-blur animate-delay-200">
        Thoughts on engineering, product development, and lessons learned from building things.
      </p>

      {/* Blog Posts */}
      <div className="divide-y divide-gray-200 dark:divide-gray-800 animate-fade-in-blur animate-delay-300">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="group block py-8 first:pt-0"
          >
            {/* Post Image */}
            <div className="relative overflow-hidden rounded-xl lg:rounded-2xl mb-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Category Tag */}
            <span className="inline-block text-xs lg:text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded-full mb-3">
              {post.category}
            </span>

            {/* Title */}
            <h2 className="text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {post.excerpt}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
