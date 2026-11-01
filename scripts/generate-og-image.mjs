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
  <rect width="${W}" height="${H}" fill="#0f0f0f"/>
  <g font-family="Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif" fill="#ffffff">
    <text x="48" y="76" font-size="30" font-weight="500" letter-spacing="-1">JORGE L. SENJUDO</text>
    <text x="1152" y="76" font-size="30" text-anchor="end" fill="#a6a6a6" letter-spacing="-1">JORGESENJUDO.DEV</text>
    <text x="48" y="290" font-size="46" font-weight="500" letter-spacing="-2">Páginas web, tiendas online y sistemas a medida.</text>
    <text x="600" y="570" font-size="272" font-weight="500" text-anchor="middle" letter-spacing="-20">SENJUDO</text>
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
