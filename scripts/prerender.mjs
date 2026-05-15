import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const distClient = path.join(root, 'dist')
const distServer = path.join(root, 'dist-server')

const SITE_ORIGIN = 'https://jorge-senjudo-portfolio.vercel.app'

const main = async () => {
  const templatePath = path.join(distClient, 'index.html')
  const template = await fs.readFile(templatePath, 'utf-8')

  const serverEntry = path.join(distServer, 'entry-server.js')
  const { render, buildRoutePlan } = await import(
    `file://${serverEntry.replace(/\\/g, '/')}`
  )

  const plan = buildRoutePlan()
  const generated = []

  for (const route of plan) {
    try {
      const result = await render(route.path)
      let html = template
      html = html.replace(/<html\s+lang="[^"]*"/, `<html lang="${result.htmlLang}"`)
      html = html.replace('<!--app-head-->', result.headHtml || '')
      html = html.replace('<!--app-html-->', result.html || '')

      const outDir =
        route.path === '/'
          ? distClient
          : path.join(distClient, route.path.replace(/^\//, ''))
      await fs.mkdir(outDir, { recursive: true })
      const outFile = path.join(outDir, 'index.html')
      await fs.writeFile(outFile, html, 'utf-8')
      generated.push({ ...route, outFile })
      console.log(`  ✔ ${route.path}`)
    } catch (err) {
      console.error(`  ✘ ${route.path}:`, err.message)
      throw err
    }
  }

  await writeSitemap(generated)
  console.log(`\nPrerendered ${generated.length} routes.`)
}

const writeSitemap = async (routes) => {
  const today = new Date().toISOString().slice(0, 10)
  const grouped = new Map()
  for (const r of routes) {
    const key = canonicalKey(r.path, r.lang)
    if (!grouped.has(key)) grouped.set(key, [])
    grouped.get(key).push(r)
  }

  const lines = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ]

  for (const [, variants] of grouped) {
    for (const variant of variants) {
      lines.push('  <url>')
      lines.push(`    <loc>${SITE_ORIGIN}${variant.path}</loc>`)
      lines.push(`    <lastmod>${today}</lastmod>`)
      if (variant.changefreq)
        lines.push(`    <changefreq>${variant.changefreq}</changefreq>`)
      if (typeof variant.priority === 'number')
        lines.push(`    <priority>${variant.priority.toFixed(1)}</priority>`)
      for (const alt of variants) {
        lines.push(
          `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${SITE_ORIGIN}${alt.path}" />`,
        )
      }
      const esVariant = variants.find((v) => v.lang === 'es')
      if (esVariant) {
        lines.push(
          `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}${esVariant.path}" />`,
        )
      }
      lines.push('  </url>')
    }
  }

  lines.push('</urlset>')
  const out = path.join(distClient, 'sitemap.xml')
  await fs.writeFile(out, lines.join('\n'), 'utf-8')
  console.log(`  ✔ sitemap.xml (${routes.length} entries)`)
}

const canonicalKey = (urlPath, lang) => {
  if (lang === 'en') {
    if (urlPath === '/en') return '/'
    if (urlPath.startsWith('/en/')) return urlPath.slice(3) || '/'
  }
  return urlPath
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
