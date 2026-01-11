export const posts = [
  {
    slug: 'lessons-learned-from-joining-a-startup',
    title: 'Lessons Learned From Joining a Startup: Moving Fast, Owning Everything, and Building Real Impact',
    excerpt: 'What I discovered about ownership, speed, and systems thinking after becoming the sole backend engineer at a fintech startup.',
    category: 'Career',
    date: '2026-01-02',
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    bgColor: '#6366F1',
    content: `
      <p>Joining a startup is like jumping onto a speeding train and trying to figure out the controls while it's moving. When I joined Ekorn, a fintech startup transforming the financial adviser and client experience through a holistic technology platform, the pace and scope of responsibility were unlike anything I'd experienced before. Within a month of joining, the lead backend engineer left, leaving me as the sole backend engineer. It was intense, challenging, and incredibly rewarding -and it taught me lessons that go far beyond code.</p>

      <p>Here's what I've learned since joining a startup environment:</p>

      <h2>1. Ownership Isn't Optional</h2>
      <p>In a startup, no one tells you exactly what to do -you own the problem, end to end. From system architecture and feature implementation to deployment and testing, the responsibility sits squarely on your shoulders.</p>
      <p>At Ekorn, that meant: migrating a complex, over-engineered Kotlin/Vert.x/gRPC monolith to a clean, maintainable Spring Boot architecture; introducing event-driven microservices with Kafka; writing 700+ unit tests where there were none; and reducing cloud costs by 18%.</p>
      <p>Ownership also extends beyond technical work. I helped hire my own manager, reviewing assignments and conducting interviews -an experience I never imagined would be part of my role when I joined.</p>

      <h2>2. Speed and Iteration Matter</h2>
      <p>Startups move fast, and waiting for perfect plans can be costly. Shipping quickly, iterating, and learning from real-world feedback is far more valuable than waiting for perfection.</p>
      <p>This is where my prior side projects -like Moov or Ballerr -prepared me. The principle is the same: ship, learn, iterate. The difference in a startup is that the stakes are real, the systems are live, and users are counting on you.</p>

      <h2>3. Systems Thinking is Crucial</h2>
      <p>It's not just about writing code -it's about designing systems that scale, survive failure, and enable growth.</p>
      <p>At Ekorn, I had to think about: event-driven workflows for reliable, real-time updates; building microservices that could evolve independently; ensuring data consistency, correctness, and observability; and balancing maintainability with speed of delivery.</p>
      <p>Every decision impacts the business, so thinking about the system as a whole is just as important as the individual lines of code.</p>

      <h2>4. Technical Debt is a Tool, Not a Trap</h2>
      <p>Startups force you to make trade-offs. Sometimes, you have to cut corners to deliver value quickly. But the key is to be deliberate -know which compromises are temporary and have a plan to pay down debt later.</p>
      <p>For example, cleaning up the legacy monolith while introducing new microservices required careful prioritisation: I focused first on the changes that would unblock features and improve reliability, leaving less critical optimisations for later.</p>

      <h2>5. Impact Feels Real</h2>
      <p>The most rewarding part of a startup isn't the tech -it's seeing the difference your work makes. When your code ships, it touches users immediately. When a process you improve saves hours of work for advisers, the impact is tangible. That sense of real-world change is energising in a way that few other roles offer.</p>

      <h2>Final Thoughts</h2>
      <p>Working in a startup isn't easy -it's intense, high-pressure, and sometimes messy. But it's where I've learned the most, grown the fastest, and delivered work that truly matters.</p>
      <p>If I were to summarise the lessons so far: own the problem end to end, ship fast and iterate constantly, think about systems not just code, use technical debt wisely, and focus on impact over perfection.</p>
      <p>For anyone considering joining a startup, be ready to move fast, think broadly, and take ownership. The learning curve is steep, but the experience is unparalleled.</p>
    `,
  },
  {
    slug: 'building-scalable-backend-systems',
    title: 'Building Scalable Backend Systems: Lessons from Side Projects',
    excerpt: 'What I learned about system design, reliability, and trade-offs while building real-world applications from scratch.',
    category: 'Engineering',
    date: '2025-12-10',
    isFeatured: false,
    image: '/images/blog/scalable-systems.png',
    bgColor: '#608994',
    content: `
      <p>Over the years, building side projects has taught me more about backend engineering than any tutorial or course ever could. When you're responsible for the entire system -from architecture and data pipelines to deployment -you quickly learn which decisions matter, which trade-offs are real, and what it takes to ship production-ready features.</p>

      <p>I've built several projects with this philosophy in mind:</p>

      <p><strong>Moov</strong> – a social activity platform connecting people through sports and shared movement, with an event-driven architecture for real-time session matching.</p>

      <p><strong>fpltrackr</strong> – a Fantasy Premier League analytics platform designed to handle unreliable third-party APIs while delivering real-time insights.</p>

      <p><strong>Ballerr</strong> – a Premier League prediction game built end-to-end with real-time fixtures, scoring, and live leaderboards.</p>

      <p>Across all of them, a few patterns and lessons stood out.</p>

      <h2>1. Start Simple, Scale When Needed</h2>
      <p>It's tempting to over-engineer a project from day one: microservices, message queues, fancy caching layers, and endless abstractions. But premature optimisation is real, and it costs the time you could spend building real features and learning from real users.</p>
      <p>For most side projects, a simple monolith backed by a relational database like PostgreSQL will take you surprisingly far. Start with clean architecture and well-defined boundaries. When the system grows, or when real bottlenecks appear, you can refactor and extract services -but only when there's data to justify it.</p>

      <h2>2. Reliability Beats Performance</h2>
      <p>Users will forgive a slightly slower response. They won't forgive lost data, corrupted analytics, or constant errors.</p>
      <p>In fpltrackr, dealing with a rate-limited and sometimes unstable FPL API taught me this lesson: retries, exponential backoff, error handling, and graceful degradation aren't optional -they're the difference between a usable product and one that frustrates users.</p>
      <p>Even in Moov and Ballerr, I prioritised data correctness and consistent real-time updates over shaving milliseconds off response times. It's always easier to optimise for speed later than to recover from a broken system.</p>

      <h2>3. Observability Is Not Optional</h2>
      <p>If you can't see what's happening in production, you're flying blind. Even for a side project, basic logging, error tracking, and monitoring will save hours of debugging.</p>
      <p>For example, in Ballerr, tracking data ingestion failures from live football APIs helped me quickly identify and fix missing or delayed fixtures before users noticed. Observability isn't just for large teams -it's a survival tool for solo engineers too.</p>

      <h2>4. The Database Is Usually the Bottleneck</h2>
      <p>Across every project, performance issues often trace back to the database: missing indexes, N+1 query patterns, poorly normalised schemas, and inefficient joins.</p>
      <p>Learning to read query plans, understanding ORM behaviour, and optimising schemas early can prevent headaches later. A well-structured database lets your backend scale gracefully without unnecessary complexity.</p>

      <h2>Final Thoughts</h2>
      <p>Side projects are more than experiments -they're accelerated engineering bootcamps. You make decisions, live with the consequences, and learn what actually works in practice.</p>
      <p>Whether you're building a social activity app, an analytics platform, or a real-time game, the same lessons hold: keep it simple and build incrementally, prioritise reliability over raw speed, make your systems observable, and respect your database.</p>
      <p>By approaching side projects with production-level thinking, you gain the kind of intuition and problem-solving skills that no tutorial can teach. And, most importantly, you end up with something real that people can use -and that you can learn from.</p>
    `,
  },
  {
    slug: 'from-idea-to-mvp-in-three-days',
    title: 'From Idea to MVP in Three Days: The Footle Story',
    excerpt: 'How shipping fast with a clear vision taught me more than months of careful planning ever could.',
    category: 'Product',
    date: '2025-02-12',
    isFeatured: false,
    image: '/images/projects/footle/footle-square-1.png',
    bgColor: '#065f46',
    content: `
      <p>During the 2024 Euros, I had an idea for a football-themed guessing game inspired by Wordle: players would try to identify a daily footballer using clues like club, league, nationality, position, and preferred foot. Three days later, Footle was live. It wasn't perfect -but it taught me more than any long, slow project ever could. Here's what I learned from that sprint.</p>

      <h2>1. Constraints Force Creativity</h2>
      <p>With only a weekend to build, there was no room for feature creep. Every decision had to answer a single question: <em>"Is this essential for launch?"</em></p>
      <ul>
        <li>Could the game function without animations? ✅ Yes.</li>
        <li>Could it launch without a full leaderboard system? ✅ Yes.</li>
        <li>Could it work without fancy design flourishes? ✅ Absolutely.</li>
      </ul>
      <p>By ruthlessly trimming down to the core experience, I focused on what really mattered: players having fun guessing the footballer and coming back tomorrow for a new challenge. Constraints forced me to be creative with simplicity.</p>

      <h2>2. Perfect Is the Enemy of Shipped</h2>
      <p>The first version of Footle was rough around the edges. The UI wasn't polished, the backend was simple, and some minor features were missing. But it worked, and real people were playing it.</p>
      <p>That feedback was invaluable -far more than weeks of polishing in isolation could have achieved. Launching early meant I could iterate based on real user behavior, not assumptions.</p>

      <h2>3. Technical Debt Is Fine (Sometimes)</h2>
      <p>I cut corners I wouldn't normally touch in a production system at work: a lightweight data model, minimal error handling, and a quick-and-dirty scraping pipeline.</p>
      <p>And that was okay. The goal wasn't to build a monument -it was to validate the idea. Sometimes, deliberately accumulating technical debt is a faster path to learning, as long as you know it's temporary.</p>

      <h2>4. Momentum Matters</h2>
      <p>There's something energizing about shipping fast. Problems that feel huge in planning suddenly become solvable when you're in motion. Each small win -deploying a feature, seeing a player correctly guessed, watching users return -kept the momentum going.</p>
      <p>Momentum breeds confidence. Confidence breeds decisions. Decisions breed progress.</p>

      <h2>The Takeaway</h2>
      <p>Not every project needs to be built in three days. But every project benefits from asking: "What's the fastest path to learning something real?"</p>
      <p>Footle reinforced that speed, clarity, and a bias toward action often teach you more than perfect planning ever could. By focusing on the core experience, launching fast, and embracing the rough edges, you can turn ideas into real products -and real learning -before the weekend is over.</p>
    `,
  },
]

export const getPostBySlug = (slug) => {
  return posts.find((p) => p.slug === slug)
}

export const getFeaturedPost = () => {
  return posts.find((p) => p.isFeatured) || posts[0]
}
