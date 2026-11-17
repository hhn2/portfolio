"use client"

// Pale royal-blue glows drifting on slow orbits, with a fine pixel-dot
// texture on top so it doesn't read as a flat gradient. Every colour is the
// site's accent hue (217): no sky blues, no purples. Page text colours in
// styles/globals.css are tuned for contrast against the darkest point here.

import { canvasClass, useSketch } from "./useSketch"

const FPS = 30
const BASE = "217, 55%, 97.5%" // keep in sync with --background
const BLOB_ALPHA = 0.7
const TEXTURE_ALPHA = 0.5

const BLOBS = [
  { hsl: "217, 85%, 86%", r: 0.55, sx: 0.07, sy: 0.05, px: 0.0, py: 1.3 },
  { hsl: "218, 75%, 90%", r: 0.5, sx: 0.05, sy: 0.08, px: 2.1, py: 0.4 },
  { hsl: "216, 80%, 88%", r: 0.45, sx: 0.09, sy: 0.06, px: 4.0, py: 2.6 },
  { hsl: "217, 88%, 82%", r: 0.35, sx: 0.06, sy: 0.04, px: 1.2, py: 3.8 },
  { hsl: "218, 65%, 92%", r: 0.5, sx: 0.04, sy: 0.07, px: 5.3, py: 5.0 },
]

export default function Aurora() {
  const ref = useSketch(({ ctx }) => {
    let acc = 1

    // 4x4 tile with one 2x2 dot -> fine dot texture
    const tile = document.createElement("canvas")
    tile.width = tile.height = 4
    const tctx = tile.getContext("2d")!
    tctx.fillStyle = `rgba(255,255,255,${TEXTURE_ALPHA})`
    tctx.fillRect(0, 0, 2, 2)
    const texture = ctx.createPattern(tile, "repeat")!

    return {
      resize() {
        acc = 1
      },
      frame({ ctx, w, h }, dt, t) {
        // the drift is slow, so 30fps is plenty and saves battery
        acc += dt
        if (acc < 1 / FPS) return
        acc = 0

        ctx.fillStyle = `hsl(${BASE})`
        ctx.fillRect(0, 0, w, h)

        const size = Math.max(w, h)
        for (const b of BLOBS) {
          const x = w * (0.5 + 0.55 * Math.sin(t * b.sx + b.px))
          const y = h * (0.5 + 0.55 * Math.cos(t * b.sy + b.py))
          const r = size * b.r
          const g = ctx.createRadialGradient(x, y, 0, x, y, r)
          g.addColorStop(0, `hsla(${b.hsl}, ${BLOB_ALPHA})`)
          g.addColorStop(1, `hsla(${b.hsl}, 0)`)
          ctx.fillStyle = g
          ctx.fillRect(0, 0, w, h)
        }

        ctx.fillStyle = texture
        ctx.fillRect(0, 0, w, h)
      },
    }
  })
  return <canvas ref={ref} aria-hidden="true" className={canvasClass} />
}
