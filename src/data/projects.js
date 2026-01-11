export const projects = [
  {
    slug: 'moov',
    name: 'Moov',
    subtitle: 'Concept → MVP | Personal Full-Stack Side Project (In Progress)',
    type: 'personal',
    isNew: true,
    category: 'Full Stack, Product Design',
    year: '2026',
    bgColor: '#F0612F',
    images: [
      { src: '/images/projects/moov/moov-1.png', alt: 'Moov app interface', bgColor: '#F4805A' },
      { src: '/images/projects/moov/moov-2.png', alt: 'Moov activity discovery', bgColor: '#F7996F' },
      { src: '/images/projects/moov/moov-3.png', alt: 'Moov session matching', bgColor: '#FAB08A' },
    ],
    intro: `Moov is a social activity platform designed to help people connect through shared movement rather than messaging. Instead of feeds, swiping, or group chats, Moov focuses on real-world activity, connecting people nearby who want to play the same sports, join the same sessions, or get active at the same time.

The core idea is simple: people form stronger connections when they do things together. Moov reduces the friction of organising plans and finding activity partners, turning quick decisions into real sessions and real social interaction.`,
    sections: [
      {
        title: 'Product Vision',
        content: `Moov is built around the belief that social connection should feel effortless and immediate. Users open the app, select an activity they're in the mood for (tennis, football, running, padel) and instantly see relevant people and sessions happening nearby, now or later that day.

The focus is on low friction, high intent, and minimal social pressure:
simple choices → instant matches → real activity → genuine connection.`,
      },
      {
        title: 'Engineering Focus',
        content: `Moov is being developed as a scalable, event-driven platform with a strong backend foundation. While the product is still in its early stages, the architecture is designed to support real-time discovery, session matching, and future growth.

I'm leading the project end to end: product design, backend architecture, frontend development, and infrastructure, treating it as a real startup build rather than a throwaway prototype.`,
      },
      {
        title: 'Architecture & Tech Stack',
        bullets: [
          { label: 'Backend', text: 'Kotlin + Spring Boot REST APIs' },
          { label: 'Messaging', text: 'Kafka for event-driven workflows and real-time updates' },
          { label: 'Database', text: 'PostgreSQL for relational data modelling' },
          { label: 'Frontend', text: 'React for the web experience' },
          { label: 'Mobile', text: 'Native mobile apps (in progress)' },
          { label: 'Status', text: 'Early MVP built, actively iterating' },
        ],
      },
      {
        title: 'What I\'m Exploring with Moov',
        bullets: [
          { label: '', text: 'Designing low-latency, real-time discovery systems' },
          { label: '', text: 'Event-driven architectures for session matching and updates' },
          { label: '', text: 'Balancing product simplicity with backend scalability' },
          { label: '', text: 'Building an MVP that prioritises user intent over engagement hacks' },
        ],
      },
      {
        quote: {
          text: "Moov is less about shipping features quickly and more about getting the fundamentals right - product intent, system design, and real-world usability.",
        },
      },
      {
        title: 'Current Status',
        content: `Moov is an active work in progress. A basic MVP is in place, and development continues as I iterate on product assumptions, system architecture, and user experience.`,
      },
    ],
  },
  {
    slug: 'fpltrackr',
    name: 'fpltrackr',
    subtitle: 'Personal Full-Stack Side Project',
    type: 'personal',
    isNew: true,
    category: 'Full Stack, Product Design',
    year: '2025',
    bgColor: '#37003c',
    images: [
      { src: '/images/projects/fpltrackr/fpltrackr-1.png', alt: 'fpltrackr dashboard', bgColor: '#37003c' },
      { src: '/images/projects/fpltrackr/fpltrackr-2.png', alt: 'fpltrackr analytics', bgColor: '#2d0a33' },
    ],
    intro: `fpltrackr is a Fantasy Premier League analytics platform built as a side project to explore data ingestion, analytics, and system reliability at scale. The aim was to give FPL managers deeper insight into team performance, league dynamics, and transfer decisions using real-time and historical data.`,
    sections: [
      {
        title: 'End-to-End Development',
        content: `I designed and built fpltrackr independently, owning everything from system architecture and backend implementation to frontend development, deployment, and data modelling. The project was treated as a production-grade system, with an emphasis on clean architecture, testability, and operational robustness.`,
      },
      {
        title: 'Architecture & Tech Stack',
        content: `The platform uses a modern, cloud-native stack with a strong backend focus.`,
        bullets: [
          { label: 'Frontend', text: 'React with TypeScript, deployed on Firebase Hosting' },
          { label: 'Backend', text: 'Kotlin Spring Boot REST API running on Google Cloud Run' },
          { label: 'Data Pipeline', text: 'Custom ingestion layer consuming the official FPL API' },
          { label: 'Analytics', text: 'Real-time league insights and historical performance comparisons' },
        ],
      },
      {
        title: 'Data Ingestion & Reliability',
        content: `A key challenge was working with the official FPL API, which is rate-limited and occasionally unstable. I designed ingestion pipelines that prioritised resilience, handling retries, backoff, and partial failures, while keeping analytics data as fresh and consistent as possible.`,
      },
      {
        quote: {
          text: "fpltrackr started as a side project to solve my own problem, but it became a valuable way to deepen my understanding of data pipelines, reliability, and backend system design.",
        },
      },
      {
        title: 'Key Learnings',
        bullets: [
          { label: '', text: 'Designing resilient data pipelines against unreliable third-party APIs' },
          { label: '', text: 'Applying clean architecture principles in a Kotlin Spring Boot codebase' },
          { label: '', text: 'Deploying and operating services on Google Cloud Run' },
          { label: '', text: 'Building analytics features that balance accuracy, performance, and cost' },
        ],
      },
    ],
  },
  {
    slug: 'oneill-medico-legal',
    name: "O'Neill Medico-Legal",
    subtitle: 'Freelance Web & AI Workflow Project',
    type: 'freelance',
    isNew: false,
    category: 'Web Design, AI Workflow Consulting',
    year: '2025',
    bgColor: '#C9B8A8',
    websiteUrl: 'https://www.oneillmedicolegal.co.uk/',
    images: [
      { src: '/images/projects/oneill-medico-legal/oml-1.png', alt: 'O\'Neill Medico-Legal website', bgColor: '#C9B8A8' },
    ],
    intro: `O'Neill Medico-Legal is a private healthcare and medico-legal consultancy. I worked with Dr O'Neill on a freelance basis to modernise the company's digital presence and streamline internal workflows using AI-powered tooling.`,
    sections: [
      {
        title: 'Project Scope',
        content: `The engagement covered both product delivery and operational consulting. I was responsible for designing and building a brand-new website from scratch, as well as advising on and implementing AI integrations to reduce administrative overhead and reporting bottlenecks.`,
      },
      {
        title: 'Website Design & Delivery',
        content: `I led the full website rebuild, owning the process end to end, from design through to deployment. The focus was on creating a clean, professional, and trustworthy web presence suitable for a medico-legal audience, while ensuring performance, accessibility, and ease of future updates.`,
        bullets: [
          { label: '', text: 'End-to-end website design and development' },
          { label: '', text: 'Responsive, modern UI aligned with healthcare professionalism' },
          { label: '', text: 'Production deployment and handover' },
        ],
      },
      {
        title: 'AI Workflow Consulting & Integration',
        content: `Beyond the website, I worked closely with Dr O'Neill to identify friction points in existing workflows, particularly around report creation and documentation. I then helped design and integrate AI-powered solutions to significantly reduce manual effort.

This included:`,
        bullets: [
          { label: '', text: 'Speech-to-text dictation for faster medico-legal report creation' },
          { label: '', text: 'Integration with Heidi AI to support AI-assisted clinical documentation' },
          { label: '', text: 'Advising on how AI tools could be embedded safely and pragmatically into day-to-day operations' },
        ],
      },
      {
        title: 'Key Outcomes',
        bullets: [
          { label: '', text: 'Modernised digital presence for a private healthcare consultancy' },
          { label: '', text: 'Faster report turnaround through AI-assisted dictation and documentation' },
          { label: '', text: 'Reduced operational bottlenecks in admin-heavy workflows' },
          { label: '', text: 'Practical exposure to real-world AI adoption in healthcare' },
        ],
      },
      {
        title: 'Key Learnings',
        bullets: [
          { label: '', text: 'Translating AI capabilities into practical business value' },
          { label: '', text: 'Working directly with non-technical stakeholders in a regulated domain' },
          { label: '', text: 'Designing systems where trust, accuracy, and usability matter more than novelty' },
        ],
      },
    ],
  },
  {
    slug: 'menarys',
    name: 'Menarys',
    subtitle: 'Freelance Web & Graphic Design Project',
    type: 'freelance',
    isNew: false,
    category: 'Web Design, Graphic Design',
    year: '2025',
    bgColor: '#6B3057',
    websiteUrl: 'https://menarys.com/',
    images: [
      { src: '/images/projects/menarys/menarys-1.png', alt: 'Menarys website', bgColor: '#6B3057' },
    ],
    intro: `Menarys is an established retail brand with an outdated website that was costly and inefficient to maintain. I worked with the team on a freelance basis to redesign their website and give them full control of their digital presence, removing the need for ongoing reliance on a web agency.`,
    sections: [
      {
        title: 'Project Scope',
        content: `The core challenge was both visual and operational. Simple content updates required going back to an external agency, resulting in high costs and slow turnaround times. The goal was to modernise the site while enabling the internal team to manage and update content independently.`,
      },
      {
        title: 'Website Redesign and Platform Choice',
        content: `I led a full website redesign, focusing on a clean, modern aesthetic aligned with the Menarys brand. To solve the long-term maintenance problem, I rebuilt the site using WordPress, providing a flexible and user-friendly CMS that the team could confidently manage in-house.

Key elements included:`,
        bullets: [
          { label: '', text: 'Modern visual refresh aligned with the Menarys brand' },
          { label: '', text: 'Clear, maintainable layouts designed for non-technical users' },
          { label: '', text: 'WordPress CMS implementation for content and page management' },
          { label: '', text: 'Reduced reliance on external agencies for routine updates' },
        ],
      },
      {
        title: 'Graphic Design and Brand Consistency',
        content: `Alongside the web build, I supported the project with graphic design work to ensure visual consistency across the site. This reinforced the Menarys brand while keeping the design practical and adaptable for future content changes.`,
      },
      {
        title: 'Key Outcomes',
        bullets: [
          { label: '', text: 'Launched a refreshed website aligned with the brand' },
          { label: '', text: 'Enabled the internal team to manage content independently' },
          { label: '', text: 'Reduced ongoing maintenance and agency costs' },
          { label: '', text: 'Improved agility for marketing and content updates' },
        ],
      },
      {
        title: 'Key Learnings',
        bullets: [
          { label: '', text: 'Designing for usability beyond the end user, including internal teams' },
          { label: '', text: 'Balancing visual design with long-term maintainability' },
          { label: '', text: 'Choosing platforms based on business needs rather than technical preference' },
          { label: '', text: 'Delivering cost-effective solutions in a client-facing freelance context' },
        ],
      },
    ],
  },
  {
    slug: 'ballerr',
    name: 'Ballerr',
    subtitle: 'Personal Full-Stack Side Project',
    type: 'personal',
    isNew: false,
    category: 'Full Stack, Product Design, Marketing',
    year: '2024',
    bgColor: '#3D3859',
    images: [
      { src: '/images/projects/ballerr/ballerr-promo-2.png', alt: 'Ballerr app promotional image', bgColor: '#4A4568' },
      { src: '/images/projects/ballerr/ballerr-promo-square-1.png', alt: 'Ballerr promo', bgColor: '#3D3859' },
      { src: '/images/projects/ballerr/make-predictions.png', alt: 'Making predictions in Ballerr', bgColor: '#575278' },
    ],
    marketingGraphics: [
      { src: '/images/projects/ballerr/marketing/ballerr-promo-1.png', alt: 'Ballerr promotional graphic 1' },
      { src: '/images/projects/ballerr/marketing/ballerr-promo-2.png', alt: 'Ballerr promotional graphic 2' },
      { src: '/images/projects/ballerr/marketing/ballerr-promo-3.png', alt: 'Ballerr promotional graphic 3' },
      { src: '/images/projects/ballerr/marketing/ballerr-promo-square-1.png', alt: 'Ballerr square promo' },
      { src: '/images/projects/ballerr/marketing/ballerr-promo-insta-1.png', alt: 'Ballerr Instagram promo 1' },
      { src: '/images/projects/ballerr/marketing/ballerr-promo-insta-2.png', alt: 'Ballerr Instagram promo 2' },
      { src: '/images/projects/ballerr/marketing/ballerr-promo-insta-3.png', alt: 'Ballerr Instagram promo 3' },
    ],
    intro: `Ballerr is a full-stack Premier League prediction game built as a passion project to explore product thinking, system design, and end-to-end delivery. The goal was to create an engaging matchday experience for football fans while designing a scalable, real-time platform from the ground up.`,
    sections: [
      {
        title: 'End-to-End Ownership',
        content: `Although Ballerr was not a commercial startup, I treated it like one. I led the full lifecycle independently, from initial idea and UX design through backend architecture, implementation, deployment, and marketing asset creation. This project allowed me to work with startup-level autonomy and make real trade-offs around scope, performance, and usability.`,
      },
      {
        title: 'Tech Stack',
        content: `Ballerr was built using a modern, cloud-native stack with a strong backend focus.`,
        bullets: [
          { label: 'Frontend', text: 'Next.js with TypeScript, TailwindCSS, and Auth0 authentication' },
          { label: 'Backend', text: 'Two Java Spring Boot microservices handling game logic, scoring, and data ingestion' },
          { label: 'Database', text: 'PostgreSQL for reliable relational data persistence' },
          { label: 'Infrastructure', text: 'Deployed on Vercel (frontend) and Railway (backend)' },
        ],
      },
      {
        title: 'Real-Time Data & Game Logic',
        content: `The backend integrates with live football APIs to fetch fixtures, results, and league standings in real time. This data drives the prediction engine and live leaderboards, ensuring the system remained accurate and responsive throughout matchdays.`,
      },
      {
        title: 'Marketing & Graphic Design',
        content: `Beyond engineering, I created all marketing assets for Ballerr using Figma. This included promotional graphics for social media, app store visuals, and branded content across multiple aspect ratios and formats. Designing these assets reinforced the importance of visual consistency and helped me develop a stronger eye for marketing design.`,
        marketingGraphicsButton: true,
      },
      {
        quote: {
          text: "Building Ballerr taught me how to think beyond code - designing systems with product intent, scalability, and user engagement in mind.",
        },
      },
      {
        title: 'Key Learnings',
        bullets: [
          { label: '', text: 'Designing backend systems for real-time data ingestion and consistency' },
          { label: '', text: 'Making product and technical trade-offs under self-imposed constraints' },
          { label: '', text: 'Delivering and deploying a full-stack application end to end' },
          { label: '', text: 'Thinking like a product owner, not just an engineer' },
        ],
      },
    ],
  },
  {
    slug: 'footle',
    name: 'Footle',
    subtitle: 'Personal Full-Stack Side Project',
    type: 'personal',
    isNew: false,
    category: 'Full Stack, Product Design, Marketing',
    year: '2024',
    bgColor: '#3DBD75',
    images: [
      { src: '/images/projects/footle/footle-square-1.png', alt: 'Footle game interface', bgColor: '#3DBD75' },
      { src: '/images/projects/footle/footle-square-2.png', alt: 'Footle guessing game', bgColor: '#35A868' },
      { src: '/images/projects/footle/footle-1.png', alt: 'Footle gameplay', bgColor: '#2D935B' },
    ],
    intro: `Footle is a football-themed guessing game inspired by Wordle, where players attempt to identify a daily footballer using progressive clues such as club, league, nationality, position, and preferred foot. The project was conceived during the Euros and built and launched in a matter of days as an experiment in rapid product delivery.`,
    sections: [
      {
        title: 'Rapid Build & Launch',
        content: `Footle was designed, developed, and deployed within three days. The tight timeline required pragmatic technical decisions, a strong focus on core user experience, and ruthless scope control, mirroring the constraints of an early-stage startup environment.`,
      },
      {
        title: 'End-to-End Ownership',
        content: `I owned the entire project lifecycle, including idea validation, data sourcing, system design, frontend and backend development, deployment, analytics, and internationalisation. Since launch, Footle has attracted over 3,000 unique visitors organically and received positive user feedback on X (Twitter).`,
      },
      {
        title: 'Data Collection & Processing',
        content: `Player data was sourced by building a custom scraping pipeline using Python and Playwright. The data was cleaned, normalised, and mapped into a relational model before being stored in Supabase, enabling fast queries and simple backend integration.`,
      },
      {
        title: 'Architecture & Tech Stack',
        content: `Footle uses a lightweight, full-stack architecture optimised for speed and iteration.`,
        bullets: [
          { label: 'Frontend', text: 'Next.js with a mobile-first, responsive UI' },
          { label: 'Backend', text: 'Supabase for relational data storage and API routes' },
          { label: 'Data Pipeline', text: 'Python and Playwright for scraping and data processing' },
          { label: 'Internationalisation', text: 'i18n support for 7 European languages (EN, DE, ES, FR, IT, NL, PT)' },
          { label: 'Deployment', text: 'Vercel' },
          { label: 'Analytics', text: 'Umami for privacy-friendly usage tracking' },
        ],
      },
      {
        title: 'User Engagement',
        content: `The daily puzzle format encourages natural retention, with users returning each day to maintain streaks and share results socially, validating the core gameplay loop and UX decisions.`,
      },
      {
        quote: {
          text: "Footle reinforced how much you can learn by shipping quickly with a clear product vision. The goal wasn't perfection - it was learning through real users.",
        },
      },
      {
        title: 'Key Learnings',
        bullets: [
          { label: '', text: 'Shipping production-ready features under extreme time constraints' },
          { label: '', text: 'Designing simple systems that support daily content rotation' },
          { label: '', text: 'Building and maintaining custom data pipelines' },
          { label: '', text: 'Using analytics and feedback to validate product decisions' },
        ],
      },
    ],
  },
  {
    slug: 'suite-mentale',
    name: 'Suite Mentale',
    subtitle: 'Freelance Web Design & Development Project',
    type: 'freelance',
    isNew: false,
    category: 'Web Design',
    year: '2024',
    bgColor: '#A85A4A',
    websiteUrl: 'https://suitementale.com/',
    images: [
      { src: '/images/projects/suite-mentale/suite-mentale-1.png', alt: 'Suite Mentale website', bgColor: '#A85A4A' },
    ],
    intro: `Suite Mentale is a Cambridge-based band with a distinctive sound and visual identity. I worked with the band on a freelance basis to create a website that captured their artistic essence while providing an intuitive hub for fans to engage with their music and content.`,
    sections: [
      {
        title: 'Project Scope',
        content: `The project focused on translating the band's moody, unconventional aesthetic into a functional and visually striking website. I collaborated closely with the band to understand their style, musical focus, and fan engagement goals, turning these insights into a cohesive digital experience.`,
      },
      {
        title: 'Website Design & Delivery',
        content: `I led the full website creation end to end, from creative direction and design through to deployment. Key considerations included prioritising their music and visuals, creating a dark and atmospheric vibe, and integrating streaming and social platforms.`,
        bullets: [
          { label: '', text: 'Artistic, moody design reflecting the band\'s unique identity' },
          { label: '', text: 'Integration of music embeds (Spotify, SoundCloud), tour dates, and photography' },
          { label: '', text: 'Responsive, static website for performance and maintainability' },
          { label: '', text: 'Production deployment and handover' },
        ],
      },
      {
        title: 'Key Outcomes',
        bullets: [
          { label: '', text: 'Delivered a website that authentically reflects the band\'s creative identity' },
          { label: '', text: 'Central hub for fans to explore music, upcoming shows, and social content' },
          { label: '', text: 'Improved digital presence and fan engagement' },
        ],
      },
      {
        title: 'Key Learnings',
        bullets: [
          { label: '', text: 'Translating creative, non-traditional aesthetics into functional web experiences' },
          { label: '', text: 'Collaborating directly with artists to align design with their vision' },
          { label: '', text: 'Delivering polished outputs independently in a freelance, client-facing context' },
        ],
      },
      {
        quote: {
          text: "Working with Alexander was a fantastic experience. Suite Mentale needed a website that could serve as a hub for promoters and A&R representatives, effectively showcasing our band's brand and music. Alexander stepped up to the challenge and delivered a site that not only met but exceeded our expectations. He quickly grasped our vision and translated it into a website that perfectly captures our band's identity. His expertise and dedication made the entire process smooth and efficient. We couldn't be happier with the result and highly recommend Alexander for any web development needs.",
          author: 'Ed Potts, Suite Mentale',
        },
      },
    ],
  },
  {
    slug: 'victus-energy',
    name: 'Victus Energy',
    subtitle: 'Freelance Web Design & Development Project',
    type: 'freelance',
    isNew: false,
    category: 'Web Design, Graphic Design, Pitch Deck',
    year: '2024',
    bgColor: '#166534',
    websiteUrl: 'https://victusenergy.co.uk/',
    images: [
      { src: '/images/projects/victus-energy/victus-1.png', alt: 'Victus Energy website', bgColor: '#166534' },
    ],
    pitchDeck: '/files/victus-pitch-deck.pdf',
    intro: `Victus Energy is an energy sector company. I worked with the team on a freelance basis to design and deliver a new company website, aligning the digital presence with their brand, positioning, and commercial goals.`,
    sections: [
      {
        title: 'Project Scope',
        content: `The engagement focused on creating a modern, credible public-facing presence for the business. I collaborated closely with stakeholders across the company to understand their brand, audience, and messaging, translating this into a cohesive visual identity and website experience.`,
      },
      {
        title: 'Website Design & Delivery',
        content: `I led the website build end to end, from early design direction through to production deployment. This included defining the look and feel, building responsive layouts, and ensuring the site was clear, professional, and easy to maintain.`,
        bullets: [
          { label: '', text: 'Brand and style alignment through stakeholder collaboration' },
          { label: '', text: 'Full website design and front-end development' },
          { label: '', text: 'Responsive, performance-focused implementation' },
          { label: '', text: 'Production deployment and handover' },
        ],
      },
      {
        title: 'Pitch Deck Creation',
        content: `In addition to the website, I created a pitch deck to support business development and investor conversations. This involved structuring the narrative, designing slides that aligned with the new brand, and clearly communicating Victus Energy's value proposition.`,
        pitchDeckButton: true,
      },
      {
        title: 'Key Outcomes',
        bullets: [
          { label: '', text: 'Launched a new website aligned with company branding and messaging' },
          { label: '', text: 'Delivered a pitch deck suitable for commercial and investor use' },
          { label: '', text: 'Improved clarity and professionalism of the company\'s outward-facing materials' },
        ],
      },
      {
        title: 'Key Learnings',
        bullets: [
          { label: '', text: 'Translating brand and business goals into clear visual communication' },
          { label: '', text: 'Working with multiple stakeholders to align on style and messaging' },
          { label: '', text: 'Delivering polished outputs in a client-facing freelance context' },
        ],
      },
      {
        quote: {
          text: "Working with Alex on our website overhaul was an absolute pleasure. His web design skills and meticulous planning brought our vision to life. Alex's natural ability to explain complex topics to our team ensured a smooth development, and his creative abilities really helped to elevate our online presence. We're thrilled with the results.",
          author: 'Neil O\'Brien, Director of Victus Energy',
        },
      },
    ],
  },
]

export const getProjectBySlug = (slug) => {
  return projects.find((p) => p.slug === slug)
}
