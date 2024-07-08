import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import CursorTracker from './components/1_MediaAssets/Styles/CursorTracker';
import Navbar from "./components/Constants/Navbar/Navbar.js";
import Home from './components/Home';
import Works from './components/Works';
import Contact from './components/Contact';
import Services from './components/Services';

import ProjectsPage from './components/Projects/index.js';
import Project from './components/Projects/ProjectDetails';
import ProjectsData from './components/Projects/data/Projects.js';

import BlogsPage from './components/Blogs/index.js';
import Blog from './components/Blogs/BlogDetails.js';
import BlogsData from './components/Blogs/BlogsData';

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
          <Route path="/Projects" element={<ProjectsPage projects={ProjectsData} />} />
          <Route path="/projects/:id" element={<Project />} />
          <Route path="/Blogs" element={<BlogsPage blogs={BlogsData} />} />
          <Route path="/blog/:id" element={<Blog />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
