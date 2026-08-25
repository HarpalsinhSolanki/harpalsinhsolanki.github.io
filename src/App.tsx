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
    <div className="relative bg-background text-text overflow-x-hidden">
      <div className="fixed inset-0 -z-10 grid-bg" />
      <div className="fixed -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-float -z-10" />
      <div className="fixed top-1/3 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float-slow -z-10" />
      <div className="fixed bottom-0 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-float-slow -z-10" />

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
