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
import Standards from "./pages/Standards"
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
        <Route path="/courses/pgas" element={<PGAS />} />
        <Route path="/courses/cloud-computing" element={<Navigate to="/courses/pgas" replace />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/standards" element={<Navigate to="/standards/1" replace />} />
        {Array.from({ length: 6 }, function (_, index) {
          const standardNumber = index + 1;
          return (
            <Route
              key={standardNumber}
              path={"/standards/" + standardNumber}
              element={<Standards standardNumber={standardNumber} />}
            />
          );
        })}
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
