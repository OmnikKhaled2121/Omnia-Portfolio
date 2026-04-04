import { profile } from '../data'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">About</h2>
      <h3 className="mb-8 text-3xl font-bold text-fg-heading">A bit about me</h3>
      <p className="text-fg leading-relaxed text-lg">{profile}</p>
    </section>
  )
}
