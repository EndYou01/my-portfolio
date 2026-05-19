import sharp from 'sharp'
import { mkdir, copyFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PUBLIC_DIR = path.join(ROOT, 'public')
const DIST_DIR = path.join(ROOT, 'dist')
const OUT_PUBLIC = path.join(PUBLIC_DIR, 'og-image.png')
const OUT_DIST = path.join(DIST_DIR, 'og-image.png')

const W = 1200
const H = 630

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0A0A0A"/>
      <stop offset="55%" stop-color="#13305B"/>
      <stop offset="100%" stop-color="#0A0A0A"/>
    </linearGradient>
    <radialGradient id="glow" cx="78%" cy="22%" r="55%">
      <stop offset="0%" stop-color="#E24630" stop-opacity="0.55"/>
      <stop offset="60%" stop-color="#E24630" stop-opacity="0.08"/>
      <stop offset="100%" stop-color="#E24630" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <rect x="0" y="0" width="${W}" height="8" fill="#E24630"/>
  <rect x="0" y="${H - 8}" width="${W}" height="8" fill="#E24630"/>

  <g font-family="'Bricolage Grotesque', 'Manrope', system-ui, sans-serif">
    <text x="80" y="150" font-size="28" font-weight="500" fill="#E24630" letter-spacing="6">
      &gt; PORTAFOLIO  ·  DESARROLLO WEB CUBA
    </text>

    <text x="80" y="270" font-size="92" font-weight="800" fill="#FFFFFF" letter-spacing="-2">
      Jorge L. Senjudo
    </text>

    <text x="80" y="360" font-size="44" font-weight="600" fill="rgba(255,255,255,0.92)">
      Páginas web, tiendas online
    </text>
    <text x="80" y="412" font-size="44" font-weight="600" fill="rgba(255,255,255,0.92)">
      y sistemas a medida para MIPYMES.
    </text>

    <text x="80" y="510" font-size="26" font-weight="500" fill="rgba(255,255,255,0.7)">
      Diseño  ·  Programación  ·  SEO  ·  Cuba
    </text>

    <text x="80" y="570" font-size="24" font-weight="600" fill="#E24630" letter-spacing="2">
      jorge-senjudo-portfolio.vercel.app
    </text>
  </g>
</svg>`

async function main() {
  if (!existsSync(PUBLIC_DIR)) {
    await mkdir(PUBLIC_DIR, { recursive: true })
  }

  await sharp(Buffer.from(svg))
    .png({ compressionLevel: 9 })
    .toFile(OUT_PUBLIC)

  console.log(`Wrote ${path.relative(ROOT, OUT_PUBLIC)}`)

  if (existsSync(DIST_DIR)) {
    await copyFile(OUT_PUBLIC, OUT_DIST)
    console.log(`Copied to ${path.relative(ROOT, OUT_DIST)}`)
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
