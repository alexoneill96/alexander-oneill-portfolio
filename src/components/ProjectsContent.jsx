import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectsContent() {
  const personalProjects = projects.filter(p => p.type === 'personal')
  const freelanceProjects = projects.filter(p => p.type === 'freelance')

  const renderProjectRow = (project) => {
    const className = "group flex sm:flex-row sm:items-center sm:justify-between py-4 lg:py-5 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900/50 -mx-4 px-4 transition-colors"

    const content = (
      <>
        {/* Left side - Name & Category stacked */}
        <div className="flex-1 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          {/* Project Name */}
          <div className="flex items-center gap-3">
            <span className="text-gray-900 dark:text-white font-medium group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
              {project.name}
            </span>
            {project.isNew && (
              <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30 px-2 py-0.5 rounded-full">
                New
              </span>
            )}
          </div>

          {/* Category & Year (desktop) */}
          <div className="flex items-center gap-4 lg:gap-8 text-sm">
            <span className="text-gray-500 dark:text-gray-400 sm:w-56">
              {project.category}
            </span>
            <span className="text-gray-400 dark:text-gray-500 w-12 text-right hidden sm:block">
              {project.year}
            </span>
          </div>
        </div>

        {/* Year - mobile only, vertically centered */}
        <span className="text-gray-400 dark:text-gray-500 text-sm sm:hidden ml-4 self-center">
          {project.year}
        </span>
      </>
    )

    if (project.externalUrl) {
      return (
        <a
          key={project.slug}
          href={project.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {content}
        </a>
      )
    }

    return (
      <Link
        key={project.slug}
        to={`/projects/${project.slug}`}
        className={className}
      >
        {content}
      </Link>
    )
  }

  return (
    <section className="py-8">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-blur">
        Projects
      </h1>

      {/* Intro */}
      <p className="text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed mb-12 max-w-xl animate-fade-in-blur animate-delay-200">
        A collection of personal projects and freelance work I've built over the years.
        Each one reflects my passion for solving problems and crafting great user experiences.
      </p>

      {/* Personal Projects */}
      <div className="animate-fade-in-blur animate-delay-300">
        <h2 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
          Personal Projects
        </h2>
        <div className="border-t border-gray-200 dark:border-gray-800">
          {personalProjects.map(renderProjectRow)}
        </div>
      </div>

      {/* Freelance Work */}
      <div className="mt-12 animate-fade-in-blur animate-delay-400">
        <h2 className="text-sm font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
          Client & Freelance Work
        </h2>
        <div className="border-t border-gray-200 dark:border-gray-800">
          {freelanceProjects.map(renderProjectRow)}
        </div>
      </div>
    </section>
  )
}
