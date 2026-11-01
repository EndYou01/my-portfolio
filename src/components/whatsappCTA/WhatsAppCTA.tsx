import { useTranslation } from 'react-i18next'

type Variant = 'primary' | 'secondary' | 'plain'

type Props = {
  variant?: Variant
  message?: string
  label?: string
  className?: string
}

const VARIANT_CLASS: Record<Variant, string> = {
  primary: 'boton',
  secondary: 'enlace-marcado inline-block',
  plain: 'enlace',
}

const buildWhatsAppLink = (message: string): string => {
  const number = import.meta.env.VITE_WHATSAPP_NUMBER ?? ''
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`
}

export const WhatsAppCTA = ({
  variant = 'primary',
  message,
  label,
  className = '',
}: Props) => {
  const { t } = useTranslation('global')

  return (
    <a
      href={buildWhatsAppLink(
        message ?? (t('home.whatsapp.defaultMessage') as string),
      )}
      target="_blank"
      rel="noopener noreferrer"
      className={`${VARIANT_CLASS[variant]} ${className}`.trim()}
    >
      {label ?? t('home.whatsapp.defaultLabel')}
    </a>
  )
}
