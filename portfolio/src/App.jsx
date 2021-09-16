import {useState} from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./App.scss";


function App() {

  const [menuOpen, setMenuOpen] =  useState(false); /* ovo nam sluzi za hamburger meni da kad kliknemo da menja boju
  inicijalno je na false tj bice nam bele boje pa kad kliknemo onda ce biti plave*/ 

  return (
    
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>
      </div>
    </div>
    
  );
}

export default App;
