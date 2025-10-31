
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CaseStudy from './sections/CaseStudy';

import GraphicDesign from './sections/GraphicDesign';

const App = () => {
  return (
  <main className="max-w-7xl mx-auto">
    <NavBar/>
    <Hero/>
    <About/>
    <Projects/>
    <CaseStudy/>
    <GraphicDesign/>
{/* <Clients/> */}
    <Contact/>
    <Footer/>
    
  </main>

  );
};

export default App;