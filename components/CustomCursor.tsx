"use client"

import React, { useEffect, useRef, useState } from "react"

export default function CustomCursor() {
  const arrowRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hidden, setHidden] = useState(true)
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    // Only enable on devices with a fine pointer (mouse / trackpad).
    const mq = window.matchMedia("(pointer: fine)")
    if (!mq.matches) return

    setEnabled(true)
    document.documentElement.classList.add("has-custom-cursor")

    const onMove = (e: MouseEvent) => {
      setHidden(false)
      // Arrow tip tracks the pointer 1:1 for precision.
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
      }
    }

    const onDown = () => setPressed(true)
    const onUp = () => setPressed(false)
    const onLeave = () => setHidden(true)
    const onEnter = () => setHidden(false)

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mousedown", onDown)
    window.addEventListener("mouseup", onUp)
    document.addEventListener("mouseleave", onLeave)
    document.addEventListener("mouseenter", onEnter)

    return () => {
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
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.2s ease" }}
    >
      <div
        ref={arrowRef}
        className="fixed left-0 top-0 will-change-transform"
        style={{
          transform: "translate3d(-100px,-100px,0)",
          // Subtle press feedback; tip stays anchored at the top-left origin.
          scale: String(pressed ? 0.85 : 1),
          transformOrigin: "0 0",
          transition: "scale 0.12s ease",
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 3 L5 19 L9.2 14.8 L12 21 L15 19.7 L12.2 13.6 L18 13.6 Z"
            fill="hsl(var(--accent))"
            stroke="hsl(var(--background))"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
