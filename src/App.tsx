import { Routes, Route } from 'react-router-dom'

import { Header } from './components/header/Header'
import { Footer } from './components/footer/Footer'
import { SmoothScroll } from './components/ui/SmoothScroll'
import { LangProvider } from './components/lang/LangProvider'

import { IndexPage } from './pages/IndexPage'
import { AboutPage } from './pages/about/AboutPage'
import { WorkPage } from './pages/work/WorkPage'
import { FaqPage } from './pages/faq/FaqPage'
import { ProjectPage } from './pages/projects/ProjectPage'
import { MenuDigitalPage } from './pages/verticals/MenuDigitalPage'
import { RestaurantePage } from './pages/verticals/RestaurantePage'

const SpanishRoutes = () => (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="work" element={<WorkPage />} />
    <Route path="faq" element={<FaqPage />} />
    <Route path="menu-digital-cuba" element={<MenuDigitalPage />} />
    <Route
      path="pagina-web-restaurante-cuba"
      element={<RestaurantePage />}
    />
    <Route path=":slug" element={<ProjectPage />} />
    <Route path="*" element={<IndexPage />} />
  </Routes>
)

const EnglishRoutes = () => (
  <Routes>
    <Route path="/" element={<IndexPage />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="work" element={<WorkPage />} />
    <Route path="faq" element={<FaqPage />} />
    <Route path=":slug" element={<ProjectPage />} />
    <Route path="*" element={<IndexPage />} />
  </Routes>
)

export const App = () => (
  <>
    <a
      href="#contenido"
      className="fixed left-2 top-2 z-[60] -translate-y-20 bg-salvia px-3 py-2 text-etiqueta text-tinta focus:translate-y-0"
    >
      Saltar al contenido
    </a>
    <Header />
    <SmoothScroll />
    <div id="contenido">
    <Routes>
      <Route
        path="/en/*"
        element={
          <LangProvider lang="en">
            <EnglishRoutes />
          </LangProvider>
        }
      />
      <Route
        path="/*"
        element={
          <LangProvider lang="es">
            <SpanishRoutes />
          </LangProvider>
        }
      />
    </Routes>
    </div>
    <Footer />
  </>
)
