import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from "./components/Navbar";
import Home2 from './components/Home';
import Home3 from './components/Home two'
import Technologies from './components/Technologies';
import Contact from './components/Contact';

import DigitalEngagingActivations from './components/TechTypes/DigitalEngagingActivations';
import DisplayTechnologies from './components/TechTypes/DisplayTechnologies';
import DisplayTechnologiesXavier from './components/TechTypes/DisplayTechnologiesXavier';
import Games from './components/TechTypes/Games';
import Mechatronics from './components/TechTypes/Mechatronics';
import Photobooths from './components/TechTypes/Photobooths';
import XReality from './components/TechTypes/XReality';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home2 />} />
            <Route exact path="/Technologies" element={<Technologies />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/DigitalEngagingActivations" element={<DigitalEngagingActivations />} />
            <Route exact path="/DisplayTechnologies" element={<DisplayTechnologies />} />
            <Route exact path="/DisplayTechnologiesXavier" element={<DisplayTechnologiesXavier />} />
            <Route exact path="/Games" element={<Games />} />
            <Route exact path="/Mechatronics" element={<Mechatronics />} />
            <Route exact path="/Photobooths" element={<Photobooths />} />
            <Route exact path="/XReality" element={<XReality />} />
            <Route exact path="/Home" element={<Home3/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
