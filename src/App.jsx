import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/section/header/header.jsx";
import About from "./components/section/about/about.jsx";
import Navbar from "./components/UI/navbar.jsx";
import Skills from "./components/section/skills/skills.jsx";
import Project from "./components/section/projects/project.jsx";
import Contact from "./components/section/contact/contact.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="bg-gray-200">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="profile">
                    <Header />
                  </section>
                  <section id="about">
                    <About />
                  </section>
                  <section id="skills">
                    <Skills />
                  </section>
                  <section id="projects">
                    <Project />
                  </section>
                  <section id="contact">
                    <Contact />
                  </section>
                </>
              }
            />
          </Routes>

          <Navbar />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
