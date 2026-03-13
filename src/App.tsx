import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Layout from "./components/layout/layout"
import ScrollToTop from "./components/router/scroll-to-top"
import LoadingScreen from "./components/ui/loading-screen"
import ErrorBoundary from "@/components/error/error-boundary"
import Error from "./pages/error/error"

const Home = lazy(() => import("./pages/home/home"))
const Projects = lazy(() => import("./pages/projects/projects"))
const About = lazy(() => import("./pages/about/about"))
const Links = lazy(() => import("./pages/more/links/links"))
const Tools = lazy(() => import("./pages/more/tools/tools"))

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<LoadingScreen />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/links" element={<Links />} />
              <Route path="/tools" element={<Tools />} />
              <Route path="/error" element={<Error type="generic" />} />
              <Route path="*" element={<Error type="404" />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </ErrorBoundary>
  )
}

export default App