import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import CursorTracker from './components/1_MediaAssets/Styles/CursorTracker';
import Navbar from "./components/Constants/Navbar/Navbar.js";
import Home from './components/Home';
import Works from './components/Works';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return (
    <>
      <Router>
        <CursorTracker />
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Services" element={<Services />} />
            <Route exact path="/Works" element={<Works />} />
            <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
// 0566539151
