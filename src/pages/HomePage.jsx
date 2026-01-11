import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'

export default function HomePage({ darkMode, toggleDarkMode }) {
  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      {/* Left Panel - Top on mobile, Fixed 55% on desktop */}
      <div className="w-full lg:w-[55%] h-[90vw] sm:h-[70vw] lg:h-screen flex-shrink-0 p-3">
        <LeftPanel />
      </div>

      {/* Right Panel - Bottom on mobile, Scrollable 45% on desktop */}
      <div className="w-full lg:w-[45%] lg:h-screen overflow-y-auto custom-scrollbar">
        <RightPanel darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>
    </div>
  )
}
