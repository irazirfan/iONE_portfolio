import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Download } from "lucide-react"

const projects = [
  {
    title: "iONE Speed Monitor",
    description:
      "A lightweight Windows utility that displays real-time network download and upload speeds in a floating, always-on-top window. Features minimal CPU usage and optional startup launch.",
    tech: ["Visual Basic .NET", "Windows", "Inno Setup"],
    liveUrl: "https://github.com/irazirfan/Speed_Monitor",
    githubUrl: "https://github.com/irazirfan/Speed_Monitor",
    downloadUrl: "https://github.com/irazirfan/Speed_Monitor/releases/download/v1.2/iONE_SM_Setup.exe",
  },
  {
    title: "E-Housing",
    description:
      "A full-stack real estate web application built with Angular frontend and ASP.NET Core Web API backend. Features reactive forms, ng-bootstrap, and CSS animations.",
    tech: ["Angular", "TypeScript", "ASP.NET Core", "C#"],
    liveUrl: "https://e-housing-225d5.web.app",
    githubUrl: "https://github.com/irazirfan/e-housing",
  },
  {
    title: "Computer Shop Inventory",
    description:
      "An inventory management system built in Visual C# with a layered architecture including Data, Service, and Presentation layers.",
    tech: ["C#", "Visual Studio", "SQL Server"],
    liveUrl: "#",
    githubUrl: "https://github.com/irazirfan/Computer-Shop-Inventory",
  },
  {
    title: "URL Shortener Microservice",
    description:
      "A URL shortener microservice built with Node.js, Express, and MongoDB as part of freeCodeCamp APIs and Microservices certification.",
    tech: ["Node.js", "Express", "MongoDB"],
    liveUrl: "https://hip-cobalt-chalk.glitch.me",
    githubUrl: "https://github.com/irazirfan/url-shortner",
  },
  {
    title: "Smart Mess",
    description:
      "A meal management system built with Node.js for managing mess/hostel meal tracking, member management, and expense calculation.",
    tech: ["Node.js", "JavaScript", "MySQL"],
    liveUrl: "#",
    githubUrl: "https://github.com/irazirfan/smart_mess",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all duration-200 hover:border-foreground/20 hover:shadow-lg dark:hover:shadow-none"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <Button asChild size="sm" variant="outline">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </a>
                </Button>
                <Button asChild size="sm" variant="ghost">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
