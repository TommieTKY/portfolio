import Header from './components/Header';
import Footer from './components/Footer';
import Aboutme from './components/Aboutme';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Intro from './components/Intro';
// import { useState, useRef } from 'react';
// import Section from './components/Section';
// import { PROJECTS } from './Project';
// import EnterAnimation from './components/EnterAnimation';

function App() {
  return (
    <>
      <Header />
      <main className="container-fluid p-5 mt-5 text-center">
        <Intro />
        <Aboutme/>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App;
