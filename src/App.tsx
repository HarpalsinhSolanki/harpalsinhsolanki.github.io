import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-200 text-black">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;