import { Grain } from './components/Grain';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Programs } from './components/Programs';
import { Coaches } from './components/Coaches';
import { Gallery } from './components/Gallery';
import { Schedule } from './components/Schedule';
import { Membership } from './components/Membership';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-ink text-bone">
      <Grain />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Programs />
        <Coaches />
        <Gallery />
        <Schedule />
        <Membership />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
