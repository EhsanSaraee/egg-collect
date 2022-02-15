import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages';
import About from './Pages/About';
import Menu from './Pages/Menu';

const App = () => {
   return (
      <>
         <Navbar />
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
