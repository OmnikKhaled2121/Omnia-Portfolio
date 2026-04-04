import { FiCheckCircle } from 'react-icons/fi'
import { certificates } from '../data'

export default function Certificates() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">Certificates</h2>
      <h3 className="mb-8 text-3xl font-bold text-fg-heading">Achievements</h3>
      <div className="space-y-4">
        {certificates.map((c, i) => (
          <div key={i} className="flex items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:border-accent">
            <FiCheckCircle size={18} className="mt-0.5 shrink-0 text-accent" />
            <div>
              <p className="font-medium text-fg-heading">{c.name}</p>
              <p className="text-sm text-fg-muted">{c.org} · {c.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
