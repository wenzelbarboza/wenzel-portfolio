import Link from "next/link"

const links = [
  { label: "Email", href: "mailto:wenzel.audrin@gmail.com", value: "wenzel.audrin@gmail.com" },
  { label: "GitHub", href: "https://github.com/wenzelbarboza", value: "github.com/wenzelbarboza" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wenzel-barboza-89288a219/", value: "linkedin.com/in/wenzel-barboza" },
]

export function Contact() {
  return (
    <section id="contact">
      <h2 className="mb-6 text-sm font-medium uppercase tracking-wider text-muted-foreground">
        Contact
      </h2>
      <p className="mb-6 text-sm text-muted-foreground">
        I&apos;m always open to discussing new opportunities and interesting projects. Feel free to reach out.
      </p>
      <div className="space-y-3">
        {links.map((link) => (
          <div key={link.label} className="flex items-center gap-4 text-sm">
            <span className="w-20 text-muted-foreground">{link.label}</span>
            <Link
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground truncate max-w-[200px] sm:max-w-none"
            >
              {link.value}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 Wenzel Barboza
      </div>
    </section>
  )
}
