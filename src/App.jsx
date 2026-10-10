import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import IST from "./pages/IST"
import APCSP from "./pages/APCSP"
import APCSA from "./pages/APCSA"
import PGAS from "./pages/PGAS"
import Projects from "./pages/Projects"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Standard1 from "./pages/Standard1"
import Standard2 from "./pages/Standard2"
import Standard3 from "./pages/Standard3"
import Standard4 from "./pages/Standard4"
import Standard5 from "./pages/Standard5"
import Standard6 from "./pages/Standard6"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/ist" element={<IST />} />
        <Route path="/courses/apcsp" element={<APCSP />} />
        <Route path="/courses/apcsa" element={<APCSA />} />
        <Route path="/courses/pgas" element={<PGAS />} />
        <Route path="/courses/cloud-computing" element={<Navigate to="/courses/pgas" replace />} />
        <Route path="/standards/1" element={<Standard1 />} />
        <Route path="/standards/2" element={<Standard2 />} />
        <Route path="/standards/3" element={<Standard3 />} />
        <Route path="/standards/4" element={<Standard4 />} />
        <Route path="/standards/5" element={<Standard5 />} />
        <Route path="/standards/6" element={<Standard6 />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
