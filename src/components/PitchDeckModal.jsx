import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

// Set worker source
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function PitchDeckModal({ isOpen, onClose, pdfUrl, title }) {
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setCurrentPage(1)
    setIsLoading(false)
  }

  const onDocumentLoadError = (error) => {
    console.error('Error loading PDF:', error)
    setIsLoading(false)
  }

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setIsLoading(true)
      setCurrentPage(1)
    }
  }, [isOpen])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft' && currentPage > 1) setCurrentPage(p => p - 1)
      if (e.key === 'ArrowRight' && currentPage < numPages) setCurrentPage(p => p + 1)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, currentPage, numPages, onClose])

  const goToPrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const goToNext = () => {
    if (currentPage < numPages) setCurrentPage(currentPage + 1)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
        aria-label="Close modal"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Title & Page Counter */}
      <div className="absolute top-6 left-6 z-10">
        <h3 className="text-white font-medium mb-1">{title || 'Pitch Deck'}</h3>
        <p className="text-white/60 text-sm">
          {currentPage} / {numPages}
        </p>
      </div>

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        disabled={currentPage <= 1}
        className={`absolute left-6 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all
          ${currentPage <= 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 hover:scale-105'}`}
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        disabled={currentPage >= numPages}
        className={`absolute right-6 z-10 w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all
          ${currentPage >= numPages ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/20 hover:scale-105'}`}
        aria-label="Next slide"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* PDF Container */}
      <div className="relative flex items-center justify-center">
        {isLoading && (
          <div className="absolute flex flex-col items-center gap-4 z-20">
            <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin" />
            <p className="text-white/60">Loading presentation...</p>
          </div>
        )}

        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading=""
          className="flex items-center justify-center"
        >
          <Page
            pageNumber={currentPage}
            height={window.innerHeight * 0.8}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="shadow-2xl rounded-lg overflow-hidden"
          />
        </Document>
      </div>

      {/* Slide Indicators */}
      {numPages > 0 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: numPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i + 1 === currentPage
                  ? 'w-8 bg-white'
                  : 'w-3 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
