import { FiAward } from 'react-icons/fi'
import { education } from '../data'

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">Education</h2>
      <h3 className="mb-8 text-3xl font-bold text-fg-heading">Academic background</h3>

      <div className="rounded-xl border border-border bg-bg-card p-6">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h4 className="text-lg font-semibold text-fg-heading">{education.degree}</h4>
            <p className="text-fg-muted">{education.university}</p>
          </div>
          <span className="font-mono text-sm text-accent">{education.period}</span>
        </div>

        <div className="mt-4 rounded-lg border border-border bg-bg p-4">
          <div className="mb-1 flex items-center gap-2 text-sm font-medium text-fg-heading">
            <FiAward size={16} className="text-accent" />
            Graduation Project: {education.gradProject.name}
          </div>
          <p className="text-sm text-fg-muted leading-relaxed">
            {education.gradProject.description}
          </p>
          <p className="mt-2 text-sm font-medium text-accent">{education.gradProject.grade}</p>
        </div>
      </div>
    </section>
  )
}
