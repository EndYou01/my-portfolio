export type HeadTag =
  | { type: 'meta'; name?: string; property?: string; content: string }
  | { type: 'link'; rel: string; href: string; hreflang?: string }
  | { type: 'jsonld'; data: unknown }

type HeadSnapshot = {
  title: string
  description: string
  lang: 'es' | 'en'
  tags: HeadTag[]
}

let snapshot: HeadSnapshot = {
  title: '',
  description: '',
  lang: 'es',
  tags: [],
}

export const resetHead = (lang: 'es' | 'en' = 'es') => {
  snapshot = { title: '', description: '', lang, tags: [] }
}

export const setTitle = (title: string) => {
  snapshot.title = title
}

export const setDescription = (description: string) => {
  snapshot.description = description
}

export const setLang = (lang: 'es' | 'en') => {
  snapshot.lang = lang
}

export const pushTag = (tag: HeadTag) => {
  snapshot.tags.push(tag)
}

export const getHead = (): HeadSnapshot => snapshot

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')

export const renderHeadString = (snap: HeadSnapshot): string => {
  const parts: string[] = []
  if (snap.title) parts.push(`<title>${escapeHtml(snap.title)}</title>`)
  if (snap.description)
    parts.push(
      `<meta name="description" content="${escapeHtml(snap.description)}" />`,
    )
  for (const tag of snap.tags) {
    if (tag.type === 'meta') {
      const key = tag.name
        ? `name="${escapeHtml(tag.name)}"`
        : `property="${escapeHtml(tag.property!)}"`
      parts.push(`<meta ${key} content="${escapeHtml(tag.content)}" />`)
    } else if (tag.type === 'link') {
      const hreflang = tag.hreflang
        ? ` hreflang="${escapeHtml(tag.hreflang)}"`
        : ''
      parts.push(
        `<link rel="${escapeHtml(tag.rel)}" href="${escapeHtml(tag.href)}"${hreflang} />`,
      )
    } else if (tag.type === 'jsonld') {
      parts.push(
        `<script type="application/ld+json">${JSON.stringify(tag.data).replace(/</g, '\\u003c')}</script>`,
      )
    }
  }
  return parts.join('\n    ')
}
