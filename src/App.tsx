import Navbar from './components/Navbar';
import Home from './components/Home';
import WhyChooseUs from './components/WhyChooseUs';
import Designs from './components/Designs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Home />
      <WhyChooseUs />
      <Designs />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;