import { FiMail, FiDownload } from 'react-icons/fi'

export default function Hero() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="mb-4 text-sm font-medium tracking-wider text-accent uppercase">Welcome to my portfolio</p>
      <h1 className="mb-4 text-5xl font-bold tracking-tight text-fg-heading sm:text-6xl">
        Omnia Khaled
      </h1>
      <p className="cursor-blink mb-8 text-xl text-fg-muted sm:text-2xl">
        Software Engineer
      </p>
      <p className="mx-auto mb-10 max-w-xl text-fg-muted leading-relaxed">
        Frontend developer with 3+ years of experience building performant web applications
        at companies like Huawei and Al Rajhi Capital. Passionate about clean code and great user experiences.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 no-underline"
        >
          <FiMail size={16} /> Contact Me
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-fg-heading transition-colors hover:border-accent hover:text-accent no-underline"
        >
          <FiDownload size={16} /> Download Resume
        </a>
      </div>
    </section>
  )
}
