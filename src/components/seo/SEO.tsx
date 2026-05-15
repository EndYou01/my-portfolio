import { useEffect, useLayoutEffect } from 'react'

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

import {
  pushTag,
  setDescription,
  setLang,
  setTitle,
  type HeadTag,
} from '../../utils/headStore'

export const SITE_ORIGIN = 'https://jorge-senjudo-portfolio.vercel.app'

type SchemaObject = Record<string, unknown>

export type SEOProps = {
  title: string
  description: string
  path: string
  lang: 'es' | 'en'
  image?: string
  noindex?: boolean
  hasEnglish?: boolean
  schema?: SchemaObject | SchemaObject[]
}

const upsertMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
  if (typeof document === 'undefined') return
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const upsertLink = (rel: string, href: string, hreflang?: string) => {
  if (typeof document === 'undefined') return
  const sel = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`
  let el = document.head.querySelector<HTMLLinkElement>(sel)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

const removeManagedJsonLd = () => {
  if (typeof document === 'undefined') return
  document.head
    .querySelectorAll('script[type="application/ld+json"][data-seo="route"]')
    .forEach((el) => el.parentNode?.removeChild(el))
}

const buildEsPath = (path: string, lang: 'es' | 'en') => {
  if (lang === 'es') return path
  if (path.startsWith('/en/')) return path.slice(3) || '/'
  if (path === '/en') return '/'
  return path
}

const buildEnPath = (path: string, lang: 'es' | 'en') => {
  if (lang === 'en') return path
  return path === '/' ? '/en' : `/en${path}`
}

const computeTags = (props: SEOProps): { tags: HeadTag[]; canonical: string } => {
  const tags: HeadTag[] = []
  const fullUrl = `${SITE_ORIGIN}${props.path}`
  const image = props.image ?? `${SITE_ORIGIN}/og-image.png`
  const ogLocale = props.lang === 'es' ? 'es_ES' : 'en_US'

  tags.push({ type: 'meta', property: 'og:title', content: props.title })
  tags.push({ type: 'meta', property: 'og:description', content: props.description })
  tags.push({ type: 'meta', property: 'og:type', content: 'website' })
  tags.push({ type: 'meta', property: 'og:url', content: fullUrl })
  tags.push({ type: 'meta', property: 'og:image', content: image })
  tags.push({ type: 'meta', property: 'og:locale', content: ogLocale })
  tags.push({ type: 'meta', property: 'og:site_name', content: 'Jorge Senjudo' })

  tags.push({ type: 'meta', name: 'twitter:card', content: 'summary_large_image' })
  tags.push({ type: 'meta', name: 'twitter:title', content: props.title })
  tags.push({ type: 'meta', name: 'twitter:description', content: props.description })
  tags.push({ type: 'meta', name: 'twitter:image', content: image })

  if (props.noindex) {
    tags.push({ type: 'meta', name: 'robots', content: 'noindex,nofollow' })
  }

  tags.push({ type: 'link', rel: 'canonical', href: fullUrl })

  const esPath = buildEsPath(props.path, props.lang)
  tags.push({
    type: 'link',
    rel: 'alternate',
    hreflang: 'es',
    href: `${SITE_ORIGIN}${esPath}`,
  })
  tags.push({
    type: 'link',
    rel: 'alternate',
    hreflang: 'x-default',
    href: `${SITE_ORIGIN}${esPath}`,
  })
  if (props.hasEnglish) {
    const enPath = buildEnPath(props.path, props.lang)
    tags.push({
      type: 'link',
      rel: 'alternate',
      hreflang: 'en',
      href: `${SITE_ORIGIN}${enPath}`,
    })
  }

  if (props.schema) {
    const all = Array.isArray(props.schema) ? props.schema : [props.schema]
    for (const data of all) {
      tags.push({ type: 'jsonld', data })
    }
  }

  return { tags, canonical: fullUrl }
}

const applyToDocument = (props: SEOProps, tags: HeadTag[]) => {
  if (typeof document === 'undefined') return
  document.title = props.title
  document.documentElement.lang = props.lang
  upsertMeta('meta[name="description"]', 'name', 'description', props.description)

  removeManagedJsonLd()
  for (const tag of tags) {
    if (tag.type === 'meta') {
      if (tag.name) {
        upsertMeta(`meta[name="${tag.name}"]`, 'name', tag.name, tag.content)
      } else if (tag.property) {
        upsertMeta(
          `meta[property="${tag.property}"]`,
          'property',
          tag.property,
          tag.content,
        )
      }
    } else if (tag.type === 'link') {
      upsertLink(tag.rel, tag.href, tag.hreflang)
    } else if (tag.type === 'jsonld') {
      const el = document.createElement('script')
      el.setAttribute('type', 'application/ld+json')
      el.setAttribute('data-seo', 'route')
      el.textContent = JSON.stringify(tag.data)
      document.head.appendChild(el)
    }
  }
}

const isServer = typeof window === 'undefined'

export const SEO = (props: SEOProps) => {
  const { tags } = computeTags(props)

  if (isServer) {
    setTitle(props.title)
    setDescription(props.description)
    setLang(props.lang)
    for (const tag of tags) pushTag(tag)
  }

  useIsoLayoutEffect(() => {
    applyToDocument(props, tags)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.title, props.description, props.path, props.lang, props.image, props.noindex, props.hasEnglish, JSON.stringify(props.schema ?? null)])

  return null
}
