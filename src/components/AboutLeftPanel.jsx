const skillTags = [
  { name: 'Backend', position: 'top-1/3 left-4 lg:left-8' },
  { name: 'Cloud', position: 'top-1/2 right-4 lg:right-12' },
  { name: 'Startups', position: 'bottom-1/3 left-4 lg:left-12' },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adoneill96/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Email',
    href: 'mailto:adoneill96@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

export default function AboutLeftPanel() {
  return (
    <div className="relative h-full rounded-2xl overflow-hidden animate-scale-fade-in" style={{ background: 'linear-gradient(to right, #5A7589, #425869)' }}>
      {/* Logo */}
      <div className="absolute top-4 lg:top-6 left-4 lg:left-6 z-20">
        <span
          className="font-script text-3xl lg:text-4xl text-white inline-block"
          style={{ transform: 'rotate(-24deg)' }}
        >
          Alex
        </span>
      </div>

      {/* Profile Image */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-40 h-52 lg:w-72 lg:h-96">
        <img
          src="/images/about/alex-1.PNG"
          alt="Alex O'Neill"
          className="w-full h-full object-cover object-top rounded-2xl shadow-2xl"
        />
      </div>

      {/* Floating Skill Tags - Hidden on mobile */}
      {skillTags.map((tag) => (
        <div
          key={tag.name}
          className={`absolute ${tag.position} px-4 lg:px-6 py-2 lg:py-3 bg-white/20 backdrop-blur-md text-white text-xs lg:text-sm font-medium rounded-full border border-white/20 shadow-lg`}
        >
          {tag.name}
        </div>
      ))}

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-6">
        {/* Tagline - Hidden on mobile */}
        <p className="text-white/90 text-sm lg:text-lg italic mb-4 lg:mb-6 max-w-[60%] hidden sm:block">
          Product-minded software engineer focused on designing and delivering scalable, end-to-end cloud-native systems.
        </p>

        {/* Social Links */}
        <div className="flex gap-2 lg:gap-3">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-gray-900/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-gray-900/80 transition-colors"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
