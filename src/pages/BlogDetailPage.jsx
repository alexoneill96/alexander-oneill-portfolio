import { useParams, Navigate, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import { getPostBySlug } from '../data/posts'

export default function BlogDetailPage({ darkMode, toggleDarkMode }) {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `${post.title} by Alex O'Neill`

  const socialLinks = [
    {
      name: 'X',
      href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'Pinterest',
      href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(shareUrl)}&description=${encodeURIComponent(shareText)}`,
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      {/* Left Panel - Top on mobile, Fixed 55% on desktop */}
      <div className="w-full lg:w-[55%] h-[90vw] sm:h-[70vw] lg:h-screen flex-shrink-0 p-3">
        <div
          className="relative h-full rounded-2xl overflow-hidden animate-scale-fade-in"
          style={{ backgroundColor: post.bgColor }}
        >
          {/* Logo */}
          <div className="absolute top-6 left-6 z-20">
            <span className="font-script text-4xl text-white -rotate-6">Alex</span>
          </div>

          {/* Post Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={post.image}
              alt={post.title}
              className="w-3/4 h-3/4 object-cover rounded-2xl shadow-2xl"
            />
          </div>

          {/* Bottom Section */}
          <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex items-center justify-between">
            {/* Back Button */}
            <button
              onClick={() => navigate('/blog')}
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
              aria-label="Back to blog"
            >
              <svg className="w-4 h-4 lg:w-5 lg:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Share Links */}
            <div className="flex items-center gap-2 lg:gap-3">
              <span className="text-white/70 text-xs lg:text-sm hidden sm:inline">Share</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  aria-label={`Share on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Bottom on mobile, Scrollable 45% on desktop */}
      <div className="w-full lg:w-[45%] lg:h-screen overflow-y-auto custom-scrollbar">
        <div className="min-h-full lg:min-h-screen flex flex-col">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} activePage="blog" />
          <main className="flex-1 px-6 lg:px-16 py-8">
            {/* Category & Date */}
            <div className="flex items-center gap-4 mb-6 animate-fade-in-blur">
              <span className="inline-block text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>

            {/* Post Title */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-10 animate-fade-in-blur animate-delay-100">
              {post.title}
            </h1>

            {/* Post Content */}
            <article
              className="prose prose-lg dark:prose-invert max-w-none animate-fade-in-blur animate-delay-200
                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200 dark:prose-h2:border-gray-700
                prose-p:text-gray-600 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-semibold
                prose-em:italic
                first:prose-p:text-lg first:prose-p:text-gray-700 dark:first:prose-p:text-gray-200"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </main>
        </div>
      </div>
    </div>
  )
}
