import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Courses from "./pages/Courses"
import IST from "./pages/IST"
import APCSP from "./pages/APCSP"
import APCSA from "./pages/APCSA"
import CloudComputing from "./pages/CloudComputing"
import Projects from "./pages/Projects"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

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
        <Route path="/courses/cloud-computing" element={<CloudComputing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
