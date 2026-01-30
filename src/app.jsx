import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30">
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      {!loading && (
        <main className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Project />
          <Contact />
          {/* Outras seções futuras aqui */}
        </main>
      )}
    </div>
  );
}

export default App;
