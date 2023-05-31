import './App.scss';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
