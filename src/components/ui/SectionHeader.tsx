import { Link } from 'react-router-dom'

type Props = {
  title: string
  id?: string
  link?: { to: string; label: string }
  intro?: string | null
}

export const SectionHeader = ({ title, id, link, intro }: Props) => (
  <header className="mb-8 md:mb-10">
    <div className="flex flex-wrap items-end justify-between gap-4">
      <h2 id={id} className="titulo-seccion">
        {title}
      </h2>
      {link && (
        <Link to={link.to} className="enlace-marcado">
          {link.label}
        </Link>
      )}
    </div>
    {intro && <p className="prosa mt-4 text-niebla">{intro}</p>}
  </header>
)
