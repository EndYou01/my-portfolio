import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const publicDir = path.join(root, 'public')

const walk = async (dir) => {
  const out = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...(await walk(full)))
    else out.push(full)
  }
  return out
}

const main = async () => {
  const all = await walk(publicDir)
  const webps = all.filter((p) => p.toLowerCase().endsWith('.webp'))

  let pruned = 0
  let kept = 0
  const winners = []

  for (const webp of webps) {
    const dir = path.dirname(webp)
    const base = path.basename(webp, '.webp')
    const candidates = [
      path.join(dir, `${base}.png`),
      path.join(dir, `${base}.PNG`),
      path.join(dir, `${base}.jpg`),
      path.join(dir, `${base}.JPG`),
      path.join(dir, `${base}.jpeg`),
      path.join(dir, `${base}.JPEG`),
    ]

    let original = null
    for (const c of candidates) {
      try {
        await fs.access(c)
        original = c
        break
      } catch {
        /* skip */
      }
    }

    if (!original) {
      continue
    }

    const [webpStat, origStat] = await Promise.all([
      fs.stat(webp),
      fs.stat(original),
    ])

    const rel = path.relative(root, webp)
    if (webpStat.size >= origStat.size) {
      await fs.unlink(webp)
      pruned++
      console.log(`  ✘ ${rel} (${webpStat.size} ≥ ${origStat.size}, removed)`)
    } else {
      kept++
      const relOrig = path.relative(publicDir, original).replace(/\\/g, '/')
      const relWebp = path.relative(publicDir, webp).replace(/\\/g, '/')
      winners.push({ original: relOrig, webp: relWebp })
    }
  }

  const manifestPath = path.join(__dirname, 'webp-winners.json')
  await fs.writeFile(manifestPath, JSON.stringify(winners, null, 2))
  console.log('')
  console.log(`Kept WebP (smaller than original): ${kept}`)
  console.log(`Pruned WebP (larger than original): ${pruned}`)
  console.log(`Manifest written: ${path.relative(root, manifestPath)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
