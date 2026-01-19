import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/irazirfan" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/irazirfan" },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
          Get In Touch
        </h2>
        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          I&apos;m always open to discussing new opportunities, interesting projects, 
          or just having a chat about technology. Feel free to reach out!
        </p>

        {/* Email CTA */}
        <Button asChild size="lg" className="mb-10">
          <a href="https://linkedin.com/in/irazirfan" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 mr-2" />
            Connect on LinkedIn
          </a>
        </Button>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <Button
              key={link.name}
              asChild
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 bg-transparent"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
