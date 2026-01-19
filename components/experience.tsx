const experiences = [
  {
    role: "Software Engineer (Remote)",
    company: "IMpulse (BD) Ltd.",
    period: "Aug 2022 - Present",
    description:
      "Working on Invenio Homes project. Building and maintaining software solutions using .NET technologies, ASP.NET Core, and Angular for the company's clients.",
    highlights: ["Remote", "Full-stack development", "ASP.NET Core & Angular"],
  },
  {
    role: "Software Engineer (Hybrid)",
    company: "Trillion Bits Ltd.",
    period: "Dec 2021 - Aug 2022",
    description:
      "Worked on Bd Hot Deals project. Developed and maintained web applications using modern frameworks and technologies.",
    highlights: ["Hybrid", "Web Development", "Software Engineering"],
  },
  {
    role: "Product Support Executive (Remote)",
    company: "Grameenphone Ltd.",
    period: "Dec 2020 - Nov 2021",
    description:
      "Worked in VAS & Roaming, Product Commercial Division. Provided technical support and managed product-related operations.",
    highlights: ["Remote", "VAS & Roaming", "Product Support"],
  },
  {
    role: "Asst. Software Engineer (Intern)",
    company: "Millennium Information Solution Ltd.",
    period: "Jan 2020 - Apr 2020",
    description:
      "Worked on Sylvia & Ababil projects in the Software Development Team. Gained hands-on experience in software development practices.",
    highlights: ["Onsite", "Software Development", "Internship"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
          Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <div
              key={exp.role}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0 ? "md:pr-[50%] md:text-right" : "md:pl-[50%] md:text-left"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-foreground border-4 border-background md:-translate-x-1/2`}
              />

              <div
                className={`${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground mb-3">
                  {exp.period}
                </span>
                <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                <p className="text-muted-foreground font-medium mb-2">{exp.company}</p>
                <p className="text-muted-foreground mb-3 leading-relaxed">{exp.description}</p>
                <ul className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-xs text-muted-foreground bg-card border border-border px-2 py-1 rounded"
                    >
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
