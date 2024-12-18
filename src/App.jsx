import React from 'react';
import NavBar from './sections/NavBar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';


const App = () => {
  return (
  <main className="max-w-7xl mx-auto">
    <NavBar/>
    <Hero/>
    <About/>
    <Projects/>
    
{/* <Clients/> */}
    <Contact/>
    
  </main>

  );
};

export default App;