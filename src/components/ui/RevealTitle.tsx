import type { ElementType } from 'react'

type Props = {
  text: string
  as?: ElementType
  className?: string
}

/**
 * Words rise from below their line. It runs on CSS and animates whole words,
 * so the prerendered HTML stays readable for crawlers and without JavaScript.
 */
export const RevealTitle = ({
  text,
  as: Tag = 'h1',
  className = 'titulo-pagina',
}: Props) => (
  <Tag className={className}>
    {text.split(' ').map((word, i, words) => (
      <span key={`${word}-${i}`}>
        <span className="palabra">
          <span style={{ animationDelay: `${i * 0.07}s` }}>{word}</span>
        </span>
        {i < words.length - 1 && ' '}
      </span>
    ))}
  </Tag>
)
