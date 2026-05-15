import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')

const SOURCE_FILES = [
  'src/data/projects.ts',
  'src/data/workCards.ts',
  'src/components/home/landing/LogosMarquee.tsx',
  'src/components/home/landing/HomeFinalCTA.tsx',
]

const escapeRegex = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const main = async () => {
  const manifestPath = path.join(__dirname, 'webp-winners.json')
  const winners = JSON.parse(await fs.readFile(manifestPath, 'utf-8'))

  let totalReplaced = 0
  for (const rel of SOURCE_FILES) {
    const full = path.join(root, rel)
    let text
    try {
      text = await fs.readFile(full, 'utf-8')
    } catch {
      console.log(`  skip ${rel} (not found)`)
      continue
    }

    let count = 0
    for (const { original, webp } of winners) {
      const pattern = new RegExp(`(?<![A-Za-z0-9_/.-])${escapeRegex(original)}`, 'g')
      const before = text
      text = text.replace(pattern, webp)
      const diff = (before.match(pattern) ?? []).length
      count += diff
    }

    if (count > 0) {
      await fs.writeFile(full, text, 'utf-8')
      totalReplaced += count
      console.log(`  ✔ ${rel}: ${count} paths updated`)
    } else {
      console.log(`  ↷ ${rel}: no matches`)
    }
  }

  console.log('')
  console.log(`Total path replacements: ${totalReplaced}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
