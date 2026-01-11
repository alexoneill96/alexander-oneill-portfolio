import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="py-8">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 animate-fade-in-blur">
        Product-minded
        <br />
        engineer who{' '}
        <span className="text-[#797D85]">ships</span>
      </h1>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 lg:gap-4 animate-fade-in-blur animate-delay-300">
        <Link
          to="/about"
          className="px-5 lg:px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium
            hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors text-sm lg:text-base"
        >
          Contact
        </Link>
        <Link
          to="/projects"
          className="px-5 lg:px-6 py-3 border border-gray-300 dark:border-transparent dark:bg-gray-800 text-gray-900 dark:text-white rounded-full font-medium
            hover:border-gray-400 dark:hover:bg-gray-700 transition-colors text-sm lg:text-base"
        >
          View projects
        </Link>
      </div>
    </section>
  )
}
