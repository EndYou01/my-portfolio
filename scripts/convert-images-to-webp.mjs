import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public')

const QUALITY = 82
const EXTENSIONS = new Set(['.png', '.jpg', '.jpeg'])

const SKIP_BASENAMES = new Set([
  'favicon-16x16.png',
  'favicon-32x32.png',
  'apple-touch-icon.png',
  'android-chrome-192x192.png',
  'android-chrome-512x512.png',
])

const walk = async (dir) => {
  const out = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...(await walk(full)))
    } else {
      out.push(full)
    }
  }
  return out
}

const fmtKb = (b) => `${(b / 1024).toFixed(1)}KB`

const main = async () => {
  const all = await walk(publicDir)
  const targets = all.filter((p) => {
    const ext = path.extname(p).toLowerCase()
    const base = path.basename(p)
    if (SKIP_BASENAMES.has(base)) return false
    return EXTENSIONS.has(ext)
  })

  let processed = 0
  let skipped = 0
  let originalTotal = 0
  let webpTotal = 0

  for (const src of targets) {
    const out = src.replace(/\.(png|jpg|jpeg)$/i, '.webp')
    const rel = path.relative(root, src)
    try {
      await fs.access(out)
      skipped++
      console.log(`  ↷ ${rel} (webp exists)`)
      continue
    } catch {
      /* not exists, proceed */
    }

    try {
      const srcStat = await fs.stat(src)
      await sharp(src).webp({ quality: QUALITY }).toFile(out)
      const webpStat = await fs.stat(out)
      originalTotal += srcStat.size
      webpTotal += webpStat.size
      processed++
      const save = ((1 - webpStat.size / srcStat.size) * 100).toFixed(0)
      console.log(
        `  ✔ ${rel}  ${fmtKb(srcStat.size)} → ${fmtKb(webpStat.size)}  (-${save}%)`,
      )
    } catch (err) {
      console.error(`  ✘ ${rel}: ${err.message}`)
    }
  }

  console.log('')
  console.log(`Processed: ${processed}  Skipped: ${skipped}  Targets: ${targets.length}`)
  if (originalTotal > 0) {
    const save = ((1 - webpTotal / originalTotal) * 100).toFixed(1)
    console.log(
      `Total: ${fmtKb(originalTotal)} → ${fmtKb(webpTotal)}  (-${save}%)`,
    )
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
