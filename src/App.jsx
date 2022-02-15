import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dropdown from './Components/Dropdown';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages';
import About from './Pages/About';
import Menu from './Pages/Menu';

const App = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => {
      setIsOpen(!isOpen);
   };

   useEffect(() => {
      const hideMenu = () => {
         if (window.innerWidth > 768 && isOpen) {
            setIsOpen(false);
         }
      };
      window.addEventListener('resize', hideMenu);

      return () => {
         window.removeEventListener('resize', hideMenu);
      };
   }, [isOpen]);

   return (
      <>
         <Navbar toggle={toggle} />
         <Dropdown toggle={toggle} isOpen={isOpen} />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
         </Routes>
         <Footer />
      </>
   );
};

export default App;
