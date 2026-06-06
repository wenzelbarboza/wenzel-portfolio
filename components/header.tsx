import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
  return (
    <header className="mb-16">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Wenzel Barboza
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Full-Stack Developer
          </p>
        </div>
        <ThemeToggle />
      </div>
      <nav className="mt-6 flex gap-6 text-sm">
        <Link 
          href="#about" 
          className="text-muted-foreground hover:text-foreground"
        >
          About
        </Link>
        <Link 
          href="#skills" 
          className="text-muted-foreground hover:text-foreground"
        >
          Skills
        </Link>
        <Link 
          href="#projects" 
          className="text-muted-foreground hover:text-foreground"
        >
          Projects
        </Link>
        <Link 
          href="#contact" 
          className="text-muted-foreground hover:text-foreground"
        >
          Contact
        </Link>
      </nav>
    </header>
  )
}
