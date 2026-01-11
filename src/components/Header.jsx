import { Link } from 'react-router-dom'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
]

export default function Header({ darkMode, toggleDarkMode, activePage = 'home' }) {
  return (
    <header className="sticky top-0 z-50 px-4 lg:px-8 py-4 flex items-center justify-between bg-white/80 dark:bg-[#1C1E24]/80 backdrop-blur-md">
      {/* Navigation - Scrollable on mobile */}
      <nav className="flex items-center gap-1 overflow-x-auto scrollbar-hide -mx-1 px-1">
        {navLinks.map((link) => {
          const isActive = link.name.toLowerCase() === activePage.toLowerCase()
          return (
            <Link
              key={link.name}
              to={link.href}
              className={`px-3 lg:px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap
                ${isActive
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }
              `}
            >
              {link.name}
            </Link>
          )
        })}
      </nav>

      {/* Theme Toggle */}
      <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700 flex-shrink-0 ml-2">
        <button
          onClick={() => darkMode && toggleDarkMode()}
          className={`p-2 rounded-full transition-colors ${
            !darkMode ? 'bg-white shadow-sm' : 'hover:bg-gray-700'
          }`}
          aria-label="Light mode"
        >
          <svg
            className={`w-4 h-4 ${!darkMode ? 'text-gray-900' : 'text-gray-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        </button>
        <button
          onClick={() => !darkMode && toggleDarkMode()}
          className={`p-2 rounded-full transition-colors ${
            darkMode ? 'bg-gray-700 shadow-sm' : 'hover:bg-gray-200'
          }`}
          aria-label="Dark mode"
        >
          <svg
            className={`w-4 h-4 ${darkMode ? 'text-white' : 'text-gray-400'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}
