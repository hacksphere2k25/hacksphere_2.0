import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import ProblemStatements from './components/ProblemStatements.jsx';
import Timeline from './components/Timeline.jsx';
import Rewards from './components/Rewards.jsx';
import Gallery from './components/Gallery.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-deep text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ProblemStatements />
        <Timeline />
        <Rewards />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
