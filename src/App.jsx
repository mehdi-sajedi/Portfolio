import './sass/App.scss';
import { useEffect } from 'react';
import { Events } from 'react-scroll';
import { MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    Events.scrollEvent.register('end', (_to, element) => {
      element?.focus();
    });
  }, []);

  return (
    <MotionConfig reducedMotion='user'>
      <main>
        <div className='headerHeroContainer'>
          <Header />
          <Hero />
        </div>
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </MotionConfig>
  );
}

export default App;
