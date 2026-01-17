import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/layout";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import Links from "./pages/more/links/links";
import Tools from "./pages/more/tools/tools";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
		  <Route path="/about" element={<About />} />
		  <Route path="/links" element={<Links />} />
		  <Route path="/tools" element={<Tools />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;