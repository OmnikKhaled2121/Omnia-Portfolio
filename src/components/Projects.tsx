import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A responsive admin dashboard for managing products, orders, and customer data with real-time analytics and charts.',
    tech: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Task Management App',
    description: 'A drag-and-drop task board with user authentication, real-time updates, and team collaboration features.',
    tech: ['React', 'Redux', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Weather Forecast App',
    description: 'A clean weather application that displays forecasts with location search, interactive maps, and hourly breakdowns.',
    tech: ['React', 'REST API', 'CSS Modules', 'Geolocation'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'Portfolio Builder',
    description: 'A tool that generates personal portfolio websites from JSON configuration with multiple theme support.',
    tech: ['React', 'Vite', 'Tailwind', 'JSON Schema'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">Projects</h2>
      <h3 className="mb-10 text-3xl font-bold text-fg-heading">Things I've built</h3>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group rounded-xl border border-border bg-bg-card p-6 transition-all hover:border-accent hover:shadow-lg"
          >
            <h4 className="mb-2 text-lg font-semibold text-fg-heading">{p.title}</h4>
            <p className="mb-4 text-sm text-fg-muted leading-relaxed">{p.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span key={t} className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={p.github} target="_blank" rel="noreferrer" className="text-fg-muted transition-colors hover:text-accent">
                <FiGithub size={18} />
              </a>
              <a href={p.live} target="_blank" rel="noreferrer" className="text-fg-muted transition-colors hover:text-accent">
                <FiExternalLink size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-6 text-center text-sm text-fg-muted italic">
        * These are placeholder projects. Real projects coming soon!
      </p>
    </section>
  )
}
