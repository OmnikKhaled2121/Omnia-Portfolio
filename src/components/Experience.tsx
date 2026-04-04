import { jobs } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">Experience</h2>
      <h3 className="mb-10 text-3xl font-bold text-fg-heading">Where I've worked</h3>

      <div className="relative space-y-12 border-l-2 border-border pl-8">
        {jobs.map((job, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-bg" />
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="text-sm font-mono text-accent">{job.period}</span>
              <span className="text-sm text-fg-muted">· {job.location}</span>
            </div>
            <h4 className="text-lg font-semibold text-fg-heading">{job.company}</h4>
            <p className="mb-1 text-sm text-fg-muted italic">{job.role}</p>
            <p className="mb-3 text-sm text-fg">{job.description}</p>

            {job.project.name && (
              <div className="mb-3 rounded-lg border border-border bg-bg-card p-3">
                <p className="text-sm font-semibold text-fg-heading">{job.project.name}</p>
                {job.project.summary && (
                  <p className="text-sm text-fg-muted">{job.project.summary}</p>
                )}
              </div>
            )}

            <ul className="space-y-2 text-sm text-fg leading-relaxed">
              {job.points.map((p, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/50" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
