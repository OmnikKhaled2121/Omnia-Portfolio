import { skillCategories } from '../data'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">Skills</h2>
      <h3 className="mb-10 text-3xl font-bold text-fg-heading">Technologies I work with</h3>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map(cat => (
          <div key={cat.label} className="rounded-xl border border-border p-5">
            <h4 className="mb-3 text-sm font-semibold text-accent uppercase tracking-wide">{cat.label}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(s => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-accent-light px-3 py-1.5 text-sm font-medium text-fg-heading transition-colors hover:border-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
