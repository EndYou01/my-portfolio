import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from '../components/header/Header'
import { Footer } from '../components/footer/Footer'

import { IndexPage } from '../pages/IndexPage'
import { ThemeProvider } from '../hooks/useDarkMode'

const AboutPage = lazy(() =>
  import('../pages/about/AboutPage').then((m) => ({ default: m.AboutPage })),
)
const WorkPage = lazy(() =>
  import('../pages/work/WorkPage').then((m) => ({ default: m.WorkPage })),
)
const ProjectPage = lazy(() =>
  import('../pages/projects/ProjectPage').then((m) => ({
    default: m.ProjectPage,
  })),
)

const RouteFallback = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '60vh',
    }}
  >
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading…</span>
    </div>
  </div>
)

export const AppRouter = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Header />

        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/:slug" element={<ProjectPage />} />
            <Route path="*" element={<IndexPage />} />
          </Routes>
        </Suspense>

        <div className="contain-footer">
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}
