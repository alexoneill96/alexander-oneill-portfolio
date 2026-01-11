const skills = [
  { name: 'Java', logo: '/images/logos/java.png' },
  { name: 'Kotlin', logo: '/images/logos/kotlin.png' },
  { name: 'Spring Boot', logo: '/images/logos/spring-boot.webp' },
  { name: 'Vert.x', logo: '/images/logos/vert.x.png' },
  { name: 'Kafka', logo: '/images/logos/kafka.png' },
  { name: 'PostgreSQL', logo: '/images/logos/postgres.png' },
  { name: 'MongoDB', logo: '/images/logos/mongo.png' },
  { name: 'React', logo: '/images/logos/react.webp' },
  { name: 'Next.js', logo: '/images/logos/nextjs.webp' },
  { name: 'AWS', logo: '/images/logos/aws.png' },
  { name: 'GCP', logo: '/images/logos/gcp.png' },
  { name: 'Docker', logo: '/images/logos/docker.png' },
  { name: 'Figma', logo: '/images/logos/figma.png' },
  { name: 'OpenAI', logo: '/images/logos/openai.png' },
]

export default function Skills() {
  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills]

  return (
    <section className="relative py-6 lg:py-8 overflow-hidden animate-fade-in-blur animate-delay-500">
      {/* Section Label */}
      <p className="text-center text-xs lg:text-sm text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3 lg:mb-4">
        Tech I work with
      </p>

      {/* Left fade gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-r from-white dark:from-[#1C1E24] to-transparent z-10 pointer-events-none" />

      {/* Right fade gradient */}
      <div className="absolute right-0 top-0 bottom-0 w-16 lg:w-24 bg-gradient-to-l from-white dark:from-[#1C1E24] to-transparent z-10 pointer-events-none" />

      {/* Scrolling content */}
      <div className="flex animate-marquee whitespace-nowrap">
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="inline-flex items-center justify-center flex-shrink-0 px-4 lg:px-6 py-3 lg:py-4"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="h-8 lg:h-10 w-auto object-contain grayscale opacity-60 dark:invert hover:grayscale-0 hover:opacity-100 dark:hover:invert-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
