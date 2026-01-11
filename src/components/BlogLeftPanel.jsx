import { Link } from 'react-router-dom'
import { getFeaturedPost } from '../data/posts'

// Helper to create gradient from base color
const createGradient = (hexColor) => {
  const hex = hexColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)

  // Lighter version (left)
  const lighterR = Math.min(255, r + 20)
  const lighterG = Math.min(255, g + 20)
  const lighterB = Math.min(255, b + 20)

  // Darker version (right)
  const darkerR = Math.max(0, r - 20)
  const darkerG = Math.max(0, g - 20)
  const darkerB = Math.max(0, b - 20)

  const lighter = `rgb(${lighterR}, ${lighterG}, ${lighterB})`
  const darker = `rgb(${darkerR}, ${darkerG}, ${darkerB})`

  return `linear-gradient(to right, ${lighter}, ${darker})`
}

export default function BlogLeftPanel() {
  const featured = getFeaturedPost()

  return (
    <div
      className="relative h-full rounded-2xl overflow-hidden animate-scale-fade-in"
      style={{ background: createGradient('#608994') }}
    >
      {/* Logo */}
      <div className="absolute top-4 lg:top-6 left-4 lg:left-6 z-20">
        <span
          className="font-script text-3xl lg:text-4xl text-white inline-block"
          style={{ transform: 'rotate(-24deg)' }}
        >
          Alex
        </span>
      </div>

      {/* Featured Image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={featured.image}
          alt={featured.title}
          className="w-3/4 h-3/4 object-cover rounded-2xl shadow-2xl"
        />
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
        {/* Featured Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs lg:text-sm mb-3 lg:mb-4">
          <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Featured
        </div>

        {/* Title */}
        <Link to={`/blog/${featured.slug}`}>
          <h2 className="text-lg lg:text-2xl font-semibold text-white leading-tight hover:text-white/80 transition-colors">
            {featured.title}
          </h2>
        </Link>
      </div>
    </div>
  )
}
