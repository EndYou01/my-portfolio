import { ReactNode } from 'react'

type Props = {
  items: ReactNode[]
  speed?: number
  className?: string
  separator?: ReactNode
}

export const Marquee = ({
  items,
  speed = 35,
  className = '',
  separator,
}: Props) => {
  const renderTrack = (key: string) => (
    <ul key={key} className="marquee_track" aria-hidden={key === 'b'}>
      {items.map((item, idx) => (
        <li key={`${key}_${idx}`} className="marquee_item">
          {item}
          {separator && idx < items.length - 1 && (
            <span className="marquee_sep" aria-hidden>
              {separator}
            </span>
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <div
      className={`marquee ${className}`}
      style={{ ['--marquee-speed' as string]: `${speed}s` }}
    >
      <div className="marquee_inner">
        {renderTrack('a')}
        {renderTrack('b')}
      </div>
    </div>
  )
}
