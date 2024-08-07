import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/MainPages/Home';
import Services from './components/MainPages/Services';
import ProjectsPage from './components/MainPages/Projects/index.js';
import BlogsPage from './components/MainPages/Blogs/index.js';
import Contact from './components/MainPages/Contact';

import CursorTracker from './components/1_MediaAssets/Styles/CursorTracker';
import Navbar from "./components/Constants/Navbar/Navbar.js";

import Project from './components/MainPages/Projects/ProjectDetails.js';
import ProjectsData from './components/MainPages/Projects/ProjectsData.js';

import Blog from './components/MainPages/Blogs/BlogDetails.js';
import BlogsData from './components/MainPages/Blogs/BlogsData.js';

import PrivacyPolicy from './components/PolicyPages/PrivacyPolicy';

import TermsC from './components/PolicyPages/TermsandConditions';

import About from './components/MainPages/About/index.js';
import Products from './components/MainPages/Products/index.js';
import ProductsData from './components/MainPages/Products/ProductsData.js';

function App() {
  return (
    <>
      <Router>
        <CursorTracker />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/Contact" element={<Contact />} />
          
          <Route path="/Projects" element={<ProjectsPage projects={ProjectsData} />} />
          <Route path="/project/:slug" element={<Project />} />

          <Route path="/Blogs" element={<BlogsPage blogs={BlogsData} />} />
          <Route path="/blog/:slug" element={<Blog />} />

          <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route exact path="/TermsandConditions" element={<TermsC />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Products" element={<Products products={ProductsData}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
