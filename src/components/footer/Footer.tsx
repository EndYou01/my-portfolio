import { useTranslation } from 'react-i18next'

import { WhatsAppCTA } from '../whatsappCTA/WhatsAppCTA'

const LINKS = [
  { label: 'Email', href: 'mailto:jorgesenjudo@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/EndYou01' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jorge-senjudo-25122525b/' },
  { label: 'Telegram', href: 'https://t.me/EndYou2701' },
  { label: 'Instagram', href: 'https://www.instagram.com/senjudo_01/' },
]

export const Footer = () => {
  const [text] = useTranslation('global')

  return (
    <footer
      id="contact"
      className="margenes scroll-mt-[60px] border-t border-carbon pb-8 pt-12 md:pt-14"
    >
      <h2 className="titulo-seccion">{text('footer.contactMe')}</h2>
      <div className="mt-10 flex flex-col gap-6 text-etiqueta uppercase md:mt-12 md:flex-row md:items-end md:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          <li>
            <WhatsAppCTA variant="plain" label="WhatsApp" />
          </li>
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="enlace" target="_blank" rel="noreferrer">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-niebla">
          <a
            href="https://github.com/EndYou01/my-portfolio"
            className="enlace"
            target="_blank"
            rel="noreferrer"
          >
            {text('footer.source')}
          </a>
          <span>{text('version')}</span>
        </div>
      </div>
    </footer>
  )
}
