import Header from './Header'
import Hero from './Hero'
import Skills from './Skills'

export default function RightPanel({ darkMode, toggleDarkMode }) {
  return (
    <div className="min-h-full lg:min-h-screen flex flex-col">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} activePage="home" />

      <main className="flex-1 flex flex-col justify-center px-6 lg:px-16 py-8 lg:py-0">
        <Hero />
      </main>

      <div className="pb-8">
        <Skills />
      </div>
    </div>
  )
}
