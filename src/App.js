import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Poetry from './components/Poetry';


function App() {
  const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'poetry', 'contact'];
    let currentSection = 'home';
    const scrollPosition = window.scrollY + 150; 

    for (const section of sections) {
      const element = document.getElementById(section);
      if (!element) continue;

      const { offsetTop, offsetHeight } = element;
      const sectionBottom = offsetTop + offsetHeight;

      if (scrollPosition >= offsetTop && scrollPosition < sectionBottom) {
        currentSection = section;
        break;
      }
    }

    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  };

  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  
  return () => window.removeEventListener('scroll', handleScroll);
}, [activeSection]);
  return (
    <ThemeProvider>
      <Header activeSection={activeSection} />
      <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Hero id="home" />
        <About id="about" />
        <Skills id="skills" />
        <Projects id="projects" />
        <Poetry id="poetry" /> 
        <Contact id="contact" />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;