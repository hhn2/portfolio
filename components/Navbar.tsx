"use client"

import React, { useEffect, useState } from "react"
import { Link } from "react-scroll/modules"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Projects", page: "projects" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-6">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer font-mono text-sm font-medium tracking-tight"
        >
          hannah hwang
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {NAV_ITEMS.map((item, idx) => (
            <Link
              key={idx}
              to={item.page}
              spy
              smooth
              offset={-100}
              duration={500}
              activeClass="text-foreground"
              className="link-underline cursor-pointer font-mono text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label.toLowerCase()}
            </Link>
          ))}
          <a
            href="mailto:h24hwang@uwaterloo.ca"
            className="rounded-md border border-foreground px-3 py-1.5 font-mono text-sm text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            get in touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.page}
                spy
                smooth
                offset={-100}
                duration={500}
                onClick={() => setOpen(false)}
                className="cursor-pointer font-mono text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label.toLowerCase()}
              </Link>
            ))}
            <a
              href="mailto:h24hwang@uwaterloo.ca"
              onClick={() => setOpen(false)}
              className="font-mono text-base text-accent"
            >
              get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
