const roles = [
  { title: 'Entrepreneurship Member', org: 'VEP program for IEEE YP', period: '2021 – 2022' },
  { title: 'High Board Member (Secretary)', org: 'IEEE Fayoum Student Branch', period: '2020 – 2021' },
  { title: 'Head of Project Management', org: 'IEEE Fayoum Student Branch', period: '2019 – 2020' },
  { title: 'Project Management Member', org: 'IEEE Fayoum Student Branch', period: '2018 – 2019' },
]

export default function Volunteering() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">Volunteering</h2>
      <h3 className="mb-8 text-3xl font-bold text-fg-heading">Community involvement</h3>

      <div className="relative space-y-8 border-l-2 border-border pl-8">
        {roles.map((r, i) => (
          <div key={i} className="relative">
            <div className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-accent bg-bg" />
            <span className="text-sm font-mono text-accent">{r.period}</span>
            <h4 className="font-semibold text-fg-heading">{r.title}</h4>
            <p className="text-sm text-fg-muted">{r.org}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
