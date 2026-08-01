import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
// import Certifications from './components/Certifications'; // hidden for now
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background text-text">
      <Navbar />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
        {/* <Certifications /> hidden for now */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;