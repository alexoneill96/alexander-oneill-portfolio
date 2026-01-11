import LeftPanel from '../components/LeftPanel'
import Header from '../components/Header'
import ProjectsContent from '../components/ProjectsContent'

export default function ProjectsPage({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      {/* Left Panel - Top on mobile, Fixed 55% on desktop */}
      <div className="w-full lg:w-[55%] h-[90vw] sm:h-[70vw] lg:h-screen flex-shrink-0 p-3">
        <LeftPanel />
      </div>

      {/* Right Panel - Bottom on mobile, Scrollable 45% on desktop */}
      <div className="w-full lg:w-[45%] lg:h-screen overflow-y-auto custom-scrollbar">
        <div className="min-h-full lg:min-h-screen flex flex-col">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} activePage="projects" />
          <main className="flex-1 px-6 lg:px-16 py-8">
            <ProjectsContent />
          </main>
        </div>
      </div>
    </div>
  )
}
