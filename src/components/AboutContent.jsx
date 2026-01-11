export default function AboutContent() {
  return (
    <section className="py-8">
      {/* Headline */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 animate-fade-in-blur">
        A little about me
      </h1>

      {/* Bio */}
      <div className="space-y-6 text-gray-600 dark:text-gray-300 text-base lg:text-lg leading-relaxed max-w-xl animate-fade-in-blur animate-delay-200">
        <p>
          Hi, I'm <strong className="text-gray-900 dark:text-white">Alex</strong>, a Software Engineer based in London with over 5 years of experience
          building scalable, cloud-native systems. My core focus is backend engineering,
          specialising in Java, Kotlin, Spring Boot, and event-driven architectures, but I'm
          equally comfortable working across the stack, from frontend development to product
          design and full-stack delivery.
        </p>

        <p>
          Currently, I'm at <a href="https://ekorn.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-white font-semibold hover:underline">Ekorn</a>,
          a fintech startup modernising the platform for financial advisers. When I joined,
          the lead engineer left within a month—leaving me as the sole backend engineer.
          What followed was one of the most intense and rewarding periods of my career.
        </p>

        <p>
          I led a complete backend transformation: migrating from an over-engineered, poorly performing
          Kotlin/Vert.x/gRPC monolith to a clean, maintainable Spring Boot architecture.
          I introduced event-driven microservices with Kafka, wrote 700+ unit tests where
          there were none, and reduced cloud costs by 18%. I also helped hire my own manager,
          conducting interviews and reviewing technical assignments.
        </p>

        <p>
          Before Ekorn, I was a Platform Engineer at <strong className="text-gray-900 dark:text-white">Push Gaming</strong>,
          delivering high-traffic, low-latency backend systems with Java, Spring Boot, AWS, and Kubernetes.
          I started my career at <strong className="text-gray-900 dark:text-white">Allstate Belfast</strong> as
          a full-stack developer, building strong foundations in Java/Spring and React.
        </p>

        <p>
          Working in a startup environment has taught me to move fast, think like a product owner,
          and take ownership end-to-end. It's where I feel most at home, making meaningful
          impact and driving real change.
        </p>

        <p className="text-gray-900 dark:text-white font-medium">
          Let's build something great together.
        </p>
      </div>

      {/* Signature */}
      <div className="mt-12 flex justify-end animate-fade-in-blur animate-delay-400">
        <span className="font-script text-4xl text-gray-900 dark:text-white">Alex</span>
      </div>
    </section>
  )
}
