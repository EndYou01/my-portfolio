import { useState } from 'react'

import { PlusIcon } from './PlusIcon'

type Props = {
  items: { q: string; a: string }[]
}

export const FaqList = ({ items }: Props) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <ul className="border-t border-carbon">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx
        return (
          <li key={item.q} className="border-b border-carbon">
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="flex w-full items-start justify-between gap-6 py-5 text-left"
            >
              <span className="font-medium">{item.q}</span>
              <PlusIcon open={isOpen} />
            </button>
            {/* Answers stay in the HTML when closed so crawlers can read them. */}
            <div
              className={`grid transition-[grid-template-rows,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="prosa pb-6 text-niebla">{item.a}</p>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
