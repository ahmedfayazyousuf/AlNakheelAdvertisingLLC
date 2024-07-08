import React from 'react';
import { Link } from 'react-router-dom';
import Background from '../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg';

const BlogsPage = ({ blogs }) => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', backgroundColor: 'black', flexDirection: 'column', backgroundImage: `url(${Background})`, backgroundAttachment: 'fixed' }}>
        <div className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1 className="hero-title outlined-text" style={{ color: 'transparent' }}>Blogs</h1>
            </div>
          </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', flexWrap: 'wrap', padding: '0px' }}>
          {blogs.map((blog) => (
            <Link to={`/blog/${blog.slug}`} style={{textDecoration: 'none'}}>
            <div key={blog.slug}>
              <div className="blogcard">
                <img src={blog.mainImage} className="blogcard-img-top" alt={blog.title} />
                <div>
                  <h1 className="blogcard-title">{blog.title}</h1>
                  <p className="blogcard-date">{blog.date}</p>
                  <p className="blogcard-by">{blog.by}</p>
                </div>
              </div>
            </div>
            </Link>
          ))}
        </div>
    </div>
  );
};

export default BlogsPage;
