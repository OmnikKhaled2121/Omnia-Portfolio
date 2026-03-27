export default function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-20">
      <h2 className="mb-2 text-sm font-medium tracking-wider text-accent uppercase">About</h2>
      <h3 className="mb-8 text-3xl font-bold text-fg-heading">A bit about me</h3>
      <div className="space-y-4 text-fg leading-relaxed">
        <p>
          I'm a Software Engineer based in Egypt with a strong focus on frontend development.
          Currently at <span className="font-medium text-fg-heading">Ejada | Al Rajhi Capital</span>,
          I contribute to building digital financial services that enhance accessibility and automation
          for end users.
        </p>
        <p>
          Previously at <span className="font-medium text-fg-heading">Huawei</span>, I developed 20+
          NOC projects using React, JavaScript, and various backend technologies. I'm passionate about
          writing clean, efficient code and enjoy collaborating with cross-functional teams to deliver
          impactful solutions.
        </p>
        <p>
          I hold a Bachelor's degree in Computer Science from Fayoum University, where my graduation
          project — <span className="font-medium text-fg-heading">Shoppingo</span> (a Smart Shopping Cart system) —
          received an Excellent grade with 98%.
        </p>
      </div>
    </section>
  )
}
