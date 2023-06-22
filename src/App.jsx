import './sass/App.scss';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <main>
      <div className='navHeroContainer'>
        <Nav />
        <Hero />
      </div>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
