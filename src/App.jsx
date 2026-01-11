import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import BlogPage from './pages/BlogPage'
import BlogDetailPage from './pages/BlogDetailPage'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/about" element={<AboutPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/projects" element={<ProjectsPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/blog" element={<BlogPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
        <Route path="/blog/:slug" element={<BlogDetailPage darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
