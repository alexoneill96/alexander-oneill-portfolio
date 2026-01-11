import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

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

export default function ProjectLeftPanel({ project }) {
  const navigate = useNavigate()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Use project.images array if available, otherwise fallback to single image
  const images = project.images || [{ src: project.image, alt: project.name, bgColor: project.bgColor }]

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''
  const shareText = `Check out ${project.name} by Alex O'Neill`

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setTimeout(() => setIsAnimating(false), 600)
    }, 50)
  }, [currentSlide, isAnimating])

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % images.length
    goToSlide(next)
  }, [currentSlide, images.length, goToSlide])

  // Auto-advance slides every 5 seconds if multiple images
  useEffect(() => {
    if (images.length <= 1) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [nextSlide, images.length])

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
  ]

  const currentImage = images[currentSlide]

  return (
    <div
      className="relative h-full rounded-2xl overflow-hidden transition-all duration-700 animate-scale-fade-in"
      style={{ background: createGradient(currentImage.bgColor || project.bgColor) }}
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

      {/* Centered Image with padding and rounded borders */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div className={`w-full h-full flex items-center justify-center transition-all duration-600 ${isAnimating ? 'slide-up' : 'slide-in'}`}>
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="w-3/4 h-3/4 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex items-center justify-between">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center
            hover:bg-white/30 transition-colors"
          aria-label="Back to projects"
        >
          <svg
            className="w-4 h-4 lg:w-5 lg:h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Slide Indicators - only show if multiple images */}
        {images.length > 1 && (
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'w-6 lg:w-8 bg-white'
                    : 'w-3 lg:w-4 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        )}

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
  )
}
