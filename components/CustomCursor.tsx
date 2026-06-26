"use client"

import React, { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [hovering, setHovering] = useState(false)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse / trackpad).
    const mq = window.matchMedia("(pointer: fine)")
    if (!mq.matches) return

    setEnabled(true)
    document.documentElement.classList.add("has-custom-cursor")

    // Smoothed positions
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
    const ring = { x: mouse.x, y: mouse.y }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      setHidden(false)

      // Dot tracks the pointer 1:1 for precision.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.x}px, ${mouse.y}px, 0) translate(-50%, -50%)`
      }

      const target = e.target as HTMLElement | null
      const interactive = target?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-cursor="hover"]'
      )
      setHovering(Boolean(interactive))
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    const render = () => {
      // Ring eases toward the pointer for a soft trailing feel.
      ring.x += (mouse.x - ring.x) * 0.32
      ring.y += (mouse.y - ring.y) * 0.32
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`
      }
      raf = requestAnimationFrame(render)
    }
    raf = requestAnimationFrame(render)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mousedown", onDown)
      window.removeEventListener("mouseup", onUp)
      document.removeEventListener("mouseleave", onLeave)
      document.removeEventListener("mouseenter", onEnter)
      document.documentElement.classList.remove("has-custom-cursor")
    }
  }, [])

  if (!enabled) return null

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100]"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.25s ease" }}
    >
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 rounded-full border will-change-transform"
        style={{
          width: 34,
          height: 34,
          borderColor: hovering
            ? "hsl(var(--accent))"
            : "hsl(var(--foreground) / 0.35)",
          backgroundColor: hovering ? "hsl(var(--accent) / 0.08)" : "transparent",
          transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)",
          transition:
            "width 0.25s ease, height 0.25s ease, background-color 0.25s ease, border-color 0.25s ease, scale 0.12s ease",
          scale: String(pressed ? 0.8 : hovering ? 1.55 : 1),
        }}
      />
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 rounded-full will-change-transform"
        style={{
          width: 5,
          height: 5,
          backgroundColor: hovering
            ? "hsl(var(--accent))"
            : "hsl(var(--foreground))",
          transform: "translate3d(-100px,-100px,0) translate(-50%,-50%)",
          transition: "background-color 0.25s ease, scale 0.12s ease",
          scale: String(pressed ? 1.6 : 1),
        }}
      />
    </div>
  )
}
