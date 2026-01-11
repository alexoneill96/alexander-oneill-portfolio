import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import ProjectLeftPanel from '../components/ProjectLeftPanel'
import Header from '../components/Header'
import PitchDeckModal from '../components/PitchDeckModal'
import ImageGalleryModal from '../components/ImageGalleryModal'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetailPage({ darkMode, toggleDarkMode }) {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const [isPitchDeckOpen, setIsPitchDeckOpen] = useState(false)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="flex flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
      {/* Left Panel - Top on mobile, Fixed 55% on desktop */}
      <div className="w-full lg:w-[55%] h-[90vw] sm:h-[70vw] lg:h-screen flex-shrink-0 p-3">
        <ProjectLeftPanel project={project} />
      </div>

      {/* Right Panel - Bottom on mobile, Scrollable 45% on desktop */}
      <div className="w-full lg:w-[45%] lg:h-screen overflow-y-auto custom-scrollbar">
        <div className="min-h-full lg:min-h-screen flex flex-col">
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} activePage="projects" />
          <main className="flex-1 px-6 lg:px-16 py-8">
            {/* Project Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2 animate-fade-in-blur">
              {project.name}
            </h1>

            {/* Subtitle */}
            {project.subtitle && (
              <p className="text-gray-500 dark:text-gray-400 text-lg mb-6 animate-fade-in-blur animate-delay-100">
                {project.subtitle}
              </p>
            )}

            {/* Intro */}
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6 whitespace-pre-line animate-fade-in-blur animate-delay-200">
              {project.intro}
            </p>

            {/* Visit Website Button */}
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 mb-10 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors animate-fade-in-blur animate-delay-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Visit Website
              </a>
            )}

            {/* Sections */}
            <div className="space-y-10 animate-fade-in-blur animate-delay-300">
              {project.sections.map((section, index) => (
                <div key={index}>
                  {/* Section with title and content */}
                  {section.title && (
                    <>
                      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                      {section.content && (
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 whitespace-pre-line">
                          {section.content}
                        </p>
                      )}
                      {section.bullets && (
                        <ul className="space-y-3 mt-4">
                          {section.bullets.map((bullet, i) => (
                            <li key={i} className="flex text-gray-600 dark:text-gray-300">
                              <span className="mr-3 text-gray-400">•</span>
                              <span>
                                {bullet.label ? (
                                  <>
                                    <strong className="text-gray-900 dark:text-white">{bullet.label}</strong>
                                    {' – '}
                                    {bullet.text}
                                  </>
                                ) : (
                                  bullet.text
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {/* Pitch Deck Button */}
                      {section.pitchDeckButton && project.pitchDeck && (
                        <button
                          onClick={() => setIsPitchDeckOpen(true)}
                          className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          View Pitch Deck
                        </button>
                      )}
                      {/* Marketing Graphics Button */}
                      {section.marketingGraphicsButton && project.marketingGraphics && (
                        <button
                          onClick={() => setIsGalleryOpen(true)}
                          className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          View Marketing Graphics
                        </button>
                      )}
                    </>
                  )}

                  {/* Blockquote */}
                  {section.quote && (
                    <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-6 py-2 my-8">
                      <p className="text-xl italic text-gray-700 dark:text-gray-200 mb-2">
                        "{section.quote.text}"
                      </p>
                      {section.quote.author && (
                        <cite className="text-gray-500 dark:text-gray-400 not-italic">
                          - {section.quote.author}
                        </cite>
                      )}
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Pitch Deck Modal */}
      {project.pitchDeck && (
        <PitchDeckModal
          isOpen={isPitchDeckOpen}
          onClose={() => setIsPitchDeckOpen(false)}
          pdfUrl={project.pitchDeck}
          title={`${project.name} Pitch Deck`}
        />
      )}

      {/* Marketing Graphics Modal */}
      {project.marketingGraphics && (
        <ImageGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={project.marketingGraphics}
          title={`${project.name} Marketing Graphics`}
        />
      )}
    </div>
  )
}
