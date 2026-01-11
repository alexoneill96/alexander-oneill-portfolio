import { useState, useEffect, useCallback } from 'react'
import { projects } from '../data/projects'

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

// Get featured projects for the slider
const featuredSlugs = ['moov', 'menarys', 'oneill-medico-legal', 'ballerr', 'footle']
const featuredProjects = featuredSlugs.map(slug => projects.find(p => p.slug === slug)).filter(Boolean)

// Create 5 slides from the 5 featured projects
const slides = [
  {
    id: 1,
    title: featuredProjects[0]?.name || 'Moov',
    category: featuredProjects[0]?.category || 'Full Stack, Product Design',
    image: featuredProjects[0]?.images?.[0]?.src || featuredProjects[0]?.image,
    bgColor: featuredProjects[0]?.images?.[0]?.bgColor || featuredProjects[0]?.bgColor,
  },
  {
    id: 2,
    title: featuredProjects[1]?.name || 'fpltrackr',
    category: featuredProjects[1]?.category || 'Full Stack, Product Design',
    image: featuredProjects[1]?.images?.[0]?.src || featuredProjects[1]?.image,
    bgColor: featuredProjects[1]?.images?.[0]?.bgColor || featuredProjects[1]?.bgColor,
  },
  {
    id: 3,
    title: featuredProjects[2]?.name || "O'Neill Medico-Legal",
    category: featuredProjects[2]?.category || 'Web Design, AI Workflow Consulting',
    image: featuredProjects[2]?.images?.[0]?.src || featuredProjects[2]?.image,
    bgColor: featuredProjects[2]?.images?.[0]?.bgColor || featuredProjects[2]?.bgColor,
  },
  {
    id: 4,
    title: featuredProjects[3]?.name || 'Ballerr',
    category: featuredProjects[3]?.category || 'Full Stack, Product Design, Marketing',
    image: featuredProjects[3]?.images?.[0]?.src || featuredProjects[3]?.image,
    bgColor: featuredProjects[3]?.images?.[0]?.bgColor || featuredProjects[3]?.bgColor,
  },
  {
    id: 5,
    title: featuredProjects[4]?.name || 'Footle',
    category: featuredProjects[4]?.category || 'Full Stack, Product Design, Marketing',
    image: featuredProjects[4]?.images?.[0]?.src || featuredProjects[4]?.image,
    bgColor: featuredProjects[4]?.images?.[0]?.bgColor || featuredProjects[4]?.bgColor,
  },
]

export default function LeftPanel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [direction, setDirection] = useState('next')

  const goToSlide = useCallback((index) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setDirection(index > currentSlide ? 'next' : 'prev')

    setTimeout(() => {
      setCurrentSlide(index)
      setTimeout(() => {
        setIsAnimating(false)
      }, 600)
    }, 50)
  }, [currentSlide, isAnimating])

  const nextSlide = useCallback(() => {
    const next = (currentSlide + 1) % slides.length
    goToSlide(next)
  }, [currentSlide, goToSlide])

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [nextSlide])

  const slide = slides[currentSlide]

  return (
    <div
      className="relative h-full rounded-2xl overflow-hidden transition-all duration-700 animate-scale-fade-in"
      style={{ background: createGradient(slide.bgColor) }}
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

      {/* Main Image */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <div
          className={`w-full h-full flex items-center justify-center transition-all duration-600
            ${isAnimating ? (direction === 'next' ? 'slide-up' : 'slide-up') : 'slide-in'}
          `}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-3/4 h-3/4 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>

      {/* Bottom Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6 flex items-end justify-between">
        {/* Project Info */}
        <div className="text-white">
          <h3 className="text-lg lg:text-xl font-semibold">{slide.title}</h3>
          <p className="text-white/70 text-xs lg:text-sm hidden sm:block">{slide.category}</p>
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={isAnimating}
          className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center
            hover:bg-white/30 transition-colors disabled:opacity-50"
        >
          <svg
            className="w-4 h-4 lg:w-5 lg:h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
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
    </div>
  )
}
