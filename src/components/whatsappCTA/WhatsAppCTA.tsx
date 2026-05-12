import { useTranslation } from 'react-i18next'

type Variant = 'primary' | 'secondary'
type Size = 'lg' | 'md' | 'sm'

type Props = {
  variant?: Variant
  size?: Size
  message?: string
  label?: string
  className?: string
  children?: React.ReactNode
  'aria-label'?: string
}

const buildWhatsAppLink = (message: string): string => {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER ?? ''
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const WhatsAppCTA = ({
  variant = 'primary',
  size = 'md',
  message,
  label,
  className = '',
  children,
  'aria-label': ariaLabel,
}: Props) => {
  const { t } = useTranslation('global')

  const finalMessage =
    message ?? (t('home.whatsapp.defaultMessage') as string)
  const finalLabel = label ?? (t('home.whatsapp.defaultLabel') as string)

  const classes = [
    'wa_cta',
    `wa_cta_${variant}`,
    `wa_cta_${size}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      href={buildWhatsAppLink(finalMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      aria-label={ariaLabel}
    >
      {children ?? finalLabel}
    </a>
  )
}
