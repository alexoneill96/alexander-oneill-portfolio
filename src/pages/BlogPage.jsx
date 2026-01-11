import BlogLeftPanel from '../components/BlogLeftPanel'
import Header from '../components/Header'
import BlogContent from '../components/BlogContent'

export default function BlogPage({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      {/* Left Panel - Top on mobile, Fixed 55% on desktop */}
      <div className="w-full lg:w-[55%] h-[90vw] sm:h-[70vw] lg:h-screen flex-shrink-0 p-3">
        <BlogLeftPanel />
      </div>

      {/* Right Panel - Bottom on mobile, Scrollable 45% on desktop */}
      <div className="w-full lg:w-[45%] lg:h-screen overflow-y-auto custom-scrollbar">
        <div className="min-h-full lg:min-h-screen flex flex-col">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} activePage="blog" />
          <main className="flex-1 px-6 lg:px-16 py-8">
            <BlogContent />
          </main>
        </div>
      </div>
    </div>
  )
}
