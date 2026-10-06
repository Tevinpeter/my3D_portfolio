 import { BrowserRouter } from "react-router-dom";
 import Starfield from "../components/Starfield";
 import HeroNetwork from "../components/HeroNetwork";
 import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from "../components";
 
 const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Starfield />
         
        <div className='hero-scene'>
          <HeroNetwork />
          <Navbar />
          
          <div className = "flex flex-col h-[850px] gap-20">
              
              <Hero />

          </div>
          
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
       
        <div className='relative z-0'>
          <Contact />
          
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
