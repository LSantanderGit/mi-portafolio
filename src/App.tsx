import { Suspense, lazy } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/layout"
import ScrollToTop from "./components/router/scroll-to-top"
import LoadingScreen from "./components/ui/loading-screen";
const Home = lazy(() => import("./pages/home/home"));
const Projects = lazy(() => import("./pages/projects/projects"));
const About = lazy(() => import("./pages/about/about"));
const Links = lazy(() => import("./pages/more/links/links"));
const Tools = lazy(() => import("./pages/more/tools/tools"));

function App() {
  return (
	  <Router>
			<ScrollToTop />
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={(
						<Suspense fallback={<LoadingScreen />}>
							<Home />
						</Suspense>
					)} />
					<Route path="/projects" element={(
						<Suspense fallback={<LoadingScreen />}>
							<Projects />
						</Suspense>
					)} />
					<Route path="/about" element={(
						<Suspense fallback={<LoadingScreen />}>
							<About />
						</Suspense>
					)} />
					<Route path="/links" element={(
						<Suspense fallback={<LoadingScreen />}>
							<Links />
						</Suspense>
					)} />
					<Route path="/tools" element={(
						<Suspense fallback={<LoadingScreen />}>
							<Tools />
						</Suspense>
					)} />
				</Route>
			</Routes>
		</Router>
  );
}
export default App;