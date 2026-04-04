import { FiMail, FiPhone, FiGithub, FiLinkedin, FiMapPin } from 'react-icons/fi'
import { personal } from '../data'

const links = [
  { icon: <FiMail size={18} />, label: personal.email, href: `mailto:${personal.email}` },
  { icon: <FiPhone size={18} />, label: personal.phone, href: `tel:+20${personal.phone}` },
  { icon: <FiLinkedin size={18} />, label: 'LinkedIn', href: personal.linkedin },
  { icon: <FiGithub size={18} />, label: 'GitHub', href: personal.github },
  { icon: <FiMapPin size={18} />, label: personal.location, href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">Contact</h2>
      <h3 className="mb-4 text-3xl font-bold text-fg-heading">Get in touch</h3>
      <p className="mb-10 text-fg-muted">Feel free to reach out — I'm always open to new opportunities and collaborations.</p>

      <div className="flex flex-wrap justify-center gap-4">
        {links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm text-fg-muted transition-colors hover:border-accent hover:text-accent no-underline"
          >
            {l.icon} {l.label}
          </a>
        ))}
      </div>

      <footer className="mt-20 border-t border-border pt-8 text-center text-sm text-fg-muted">
        <p>&copy; {new Date().getFullYear()} {personal.name}. All rights reserved.</p>
      </footer>
    </section>
  )
}
