import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from "./components/Navbar";
import Home from './components/Home';
import Contact from './components/Contact';
import Services from './components/Services';
import Portfolio from './components/Portfolio';


import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />

            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Portfolio" element={<Portfolio />} />
            
        </Routes>
      </Router>
    </>
  );
}

export default App;
