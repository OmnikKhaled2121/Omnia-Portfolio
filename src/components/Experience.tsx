const jobs = [
  {
    company: 'Ejada | Al Rajhi Capital',
    role: 'Software Engineer',
    period: 'Aug 2024 – Present',
    location: 'Egypt',
    points: [
      'Part of the frontend development and successful release of a new digital feature aimed at computerizing Al Rajhi Capital financial services.',
      'Improved React application performance by optimizing rendering patterns (memoization, lazy loading, bundle splitting), reducing load time.',
      'Collaborated with backend/API teams to integrate and test new service endpoints, ensuring data accuracy and UI consistency.',
      'Extended Cypress and React Testing Library coverage for trading and investment flows.',
      'Provided peer code reviews and technical mentorship on React best practices.',
    ],
  },
  {
    company: 'Huawei',
    role: 'Software Engineer',
    period: 'Sep 2022 – Jul 2024',
    location: 'Egypt',
    points: [
      'Developed 20+ various NOC projects using ReactJs, JavaScript, HTML, and CSS.',
      'Integrated with GIS Maps Open Layer (JavaScript third-party module).',
      'Implemented Backend services and improved performance with OOP and Data Structures.',
      'Solved live production issues and security issues.',
      'Customized cloud web service components and advocated Low Code OutSystems development.',
      'Unit and integration testing with stakeholder collaboration.',
    ],
  },
]

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
            <p className="mb-3 text-sm text-fg-muted italic">{job.role}</p>
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
