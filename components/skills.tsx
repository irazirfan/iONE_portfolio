const skills = [
  { name: "C#", color: "#239120" },
  { name: "Visual C#", color: "#239120" },
  { name: "VB.NET", color: "#512BD4" },
  { name: "C++", color: "#00599C" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Java", color: "#007396" },
  { name: "Python", color: "#3776AB" },
  { name: "ASP.NET Core", color: "#512BD4" },
  { name: "ASP.NET MVC", color: "#512BD4" },
  { name: "Entity Framework", color: "#512BD4" },
  { name: ".NET Core", color: "#512BD4" },
  { name: "Angular", color: "#DD0031" },
  { name: "Node.js", color: "#339933" },
  { name: "Laravel", color: "#FF2D20" },
  { name: "jQuery", color: "#0769AD" },
  { name: "AJAX", color: "#0769AD" },
  { name: "Bootstrap", color: "#7952B3" },
  { name: "HTML", color: "#E34F26" },
  { name: "CSS", color: "#1572B6" },
  { name: "SQL", color: "#4479A1" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Syncfusion", color: "#1E88E5" },
  { name: "Patroni (PostgreSQL HA)", color: "#336791" },
  { name: "HAProxy", color: "#00A0E1" },
  { name: "HashiCorp Consul", color: "#F24C53" },
  { name: "High Availability Systems", color: "#10B981" },
  { name: "Distributed Systems", color: "#8B5CF6" },
  { name: "PowerBuilder", color: "#FF6600" },
  { name: "BBCode", color: "#5C5C5C" },
  { name: "Git", color: "#F05032" },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-foreground/20 transition-all duration-200 hover:shadow-md dark:hover:shadow-none"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-transform duration-200 group-hover:scale-110"
                style={{ 
                  backgroundColor: skill.color === "currentColor" ? undefined : `${skill.color}20`,
                  color: skill.color === "currentColor" ? undefined : skill.color 
                }}
              >
                {skill.name.slice(0, 2)}
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
