const skills = [
  'JavaScript', 'TypeScript', 'React', 'JSX', 'HTML', 'CSS',
  'Bootstrap', 'Tailwind', 'Material UI', 'jQuery',
  'MySQL', 'Git / GitHub', 'Postman',
  'Cypress', 'React Testing Library', 'Unit Testing',
  'OOP', 'Data Structures', 'UML Diagrams',
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">Skills</h2>
      <h3 className="mb-8 text-3xl font-bold text-fg-heading">Technologies I work with</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map(s => (
          <span
            key={s}
            className="rounded-full border border-border bg-accent-light px-4 py-2 text-sm font-medium text-fg-heading transition-colors hover:border-accent"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}
