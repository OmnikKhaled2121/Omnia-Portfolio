import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data'

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
            <h4 className="mb-1 text-lg font-semibold text-fg-heading">{p.title}</h4>
            <p className="mb-4 text-sm font-medium text-accent">{p.subtitle}</p>

            <ul className="mb-4 space-y-2 text-sm text-fg leading-relaxed">
              {p.points.map((pt, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                  {pt}
                </li>
              ))}
            </ul>

            <div className="mb-4 flex flex-wrap gap-2">
              {p.tech.map(t => (
                <span key={t} className="rounded-full bg-accent-light px-3 py-1 text-xs font-medium text-accent">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="text-fg-muted transition-colors hover:text-accent">
                  <FiGithub size={18} />
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="text-fg-muted transition-colors hover:text-accent">
                  <FiExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
