import { useTranslation } from 'react-i18next'

export const About = () => {
  const [text] = useTranslation('global')

  return (
    <>
      <section className="seccion">
        <h2 className="titulo-seccion">{text('about.a&e')}</h2>
        <p className="prosa mt-8 md:ml-[calc(50%+0.625rem)]">{text('about.a&et')}</p>
      </section>

      <section className="seccion">
        <h2 className="titulo-seccion">{text('about.education')}</h2>
        <div className="mt-8 grid gap-2 border-t border-carbon pt-5 md:grid-cols-2 md:gap-5">
          <p className="rotulo">{text('about.2020')}</p>
          <div>
            <h3 className="titulo-item">{text('about.h4')}</h3>
            <p className="prosa mt-2 text-niebla">{text('about.uci')}</p>
            <p className="prosa mt-2 text-niebla">
              {text('about.graduation1')} {text('about.graduation2')}
            </p>
            <p className="prosa text-niebla">{text('about.average')} 4.5</p>
          </div>
        </div>
      </section>
    </>
  )
}
