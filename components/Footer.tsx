import React from "react"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

const socials = [
  { icon: FaGithub, href: "https://github.com/hhn2", label: "GitHub" },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/hhannahhwang",
    label: "LinkedIn",
  },
  { icon: FaEnvelope, href: "mailto:h24hwang@uwaterloo.ca", label: "Email" },
]

const Footer = () => {
  return (
    <footer className="border-t border-border py-16">
      <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Get in touch
          </p>
          <a
            href="mailto:h24hwang@uwaterloo.ca"
            className="link-underline mt-4 inline-block text-2xl font-semibold tracking-tight md:text-3xl"
          >
            h24hwang@uwaterloo.ca
          </a>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, href, label }, idx) => (
            <a
              key={idx}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-foreground hover:bg-foreground hover:text-background"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <p className="mt-12 font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hannah Hwang — Designed & built with care.
      </p>
    </footer>
  )
}

export default Footer
