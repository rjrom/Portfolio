import './App.css'
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Certificates from './components/Certificates';
import 'tailwindcss/tailwind.css';

export default function App() {

  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Certificates />
      <Contact />
    </main>
  );
}
