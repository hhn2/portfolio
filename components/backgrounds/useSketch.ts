"use client"

import { useEffect, useRef } from "react"

export interface Pointer {
  x: number
  y: number
  /** Smoothed position, eases toward x/y each frame. */
  sx: number
  sy: number
  vx: number
  vy: number
  active: boolean
  down: boolean
}

export interface Env {
  ctx: CanvasRenderingContext2D
  w: number
  h: number
  pointer: Pointer
  reduced: boolean
  /** Theme color from a CSS var like "--accent", as an hsla() string. */
  color: (name: string, alpha?: number) => string
  monoFont: string
}

export interface Sketch {
  resize?(env: Env): void
  frame(env: Env, dt: number, t: number): void
  /** Return true to claim the pointer (prevents text selection). */
  down?(env: Env, e: PointerEvent): boolean | void
  up?(env: Env): void
}

const INTERACTIVE = "a, button, input, textarea, select, label, [role=button]"

export function useSketch(create: (env: Env) => Sketch) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rootStyle = getComputedStyle(document.documentElement)
    const cache = new Map<string, string[]>()
    const color = (name: string, alpha = 1) => {
      let parts = cache.get(name)
      if (!parts) {
        parts = rootStyle.getPropertyValue(name).trim().split(/\s+/)
        cache.set(name, parts)
      }
      const [h, s, l] = parts
      return `hsla(${h}, ${s}, ${l}, ${alpha})`
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const pointer: Pointer = { x: -9999, y: -9999, sx: -9999, sy: -9999, vx: 0, vy: 0, active: false, down: false }
    const env: Env = {
      ctx,
      w: 0,
      h: 0,
      pointer,
      reduced,
      color,
      monoFont: rootStyle.getPropertyValue("--font-mono").trim() || "monospace",
    }

    const sketch = create(env)

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      env.w = window.innerWidth
      env.h = window.innerHeight
      canvas.width = Math.round(env.w * dpr)
      canvas.height = Math.round(env.h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      sketch.resize?.(env)
      if (reduced) sketch.frame(env, 0, 0)
    }

    const onMove = (e: PointerEvent) => {
      if (!pointer.active) {
        pointer.sx = e.clientX
        pointer.sy = e.clientY
      }
      pointer.vx = e.clientX - pointer.x
      pointer.vy = e.clientY - pointer.y
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointer.active = true
    }
    const onDown = (e: PointerEvent) => {
      onMove(e)
      pointer.down = true
      const target = e.target as Element | null
      if (target?.closest?.(INTERACTIVE)) return
      if (sketch.down?.(env, e)) e.preventDefault()
    }
    const onUp = () => {
      pointer.down = false
      sketch.up?.(env)
    }
    const onLeave = () => {
      pointer.active = false
    }

    resize()
    window.addEventListener("resize", resize)
    if (!reduced) {
      window.addEventListener("pointermove", onMove, { passive: true })
      window.addEventListener("pointerdown", onDown)
      window.addEventListener("pointerup", onUp)
      document.documentElement.addEventListener("pointerleave", onLeave)
    }

    let raf = 0
    let last = performance.now()
    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 1 / 20)
      last = now
      pointer.sx += (pointer.x - pointer.sx) * 0.18
      pointer.sy += (pointer.y - pointer.sy) * 0.18
      pointer.vx *= 0.85
      pointer.vy *= 0.85
      sketch.frame(env, dt, now / 1000)
      raf = requestAnimationFrame(loop)
    }
    const start = () => {
      if (reduced || raf) return
      last = performance.now()
      raf = requestAnimationFrame(loop)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }
    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener("visibilitychange", onVisibility)
    start()

    return () => {
      stop()
      window.removeEventListener("resize", resize)
      window.removeEventListener("pointermove", onMove)
      window.removeEventListener("pointerdown", onDown)
      window.removeEventListener("pointerup", onUp)
      document.documentElement.removeEventListener("pointerleave", onLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return ref
}

export const canvasClass = "pointer-events-none fixed inset-0 z-0 h-full w-full"
