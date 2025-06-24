import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResumeBuilder from "./pages/ResumeBuilder";
import Home from "./pages/Home";
import ViewResume from "./pages/ViewResume";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
        <Route path="/resume/:id" element={<ViewResume />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
