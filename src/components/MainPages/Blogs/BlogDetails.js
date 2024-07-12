import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from './BlogsData';
import Texture from '../../1_MediaAssets/BrandAssets/Texture.png';

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find(blog => blog.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-details-container">
      <section className="hero-sectionw" style={{ backgroundImage: `url(${blog.mainImage})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <h1 className="hero-titlew">{blog.title}</h1>
      </section>

      <div style={{ display: 'flex', width: '100vw', justifyContent: 'center', alignItems: 'center', backgroundImage: `url(${Texture})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', background: 'rgba(0,0,0,0.9)', backgroundAttachment: 'fixed', padding: '40px 0px' }}>
        <div className="content-container">
          {blog.description.map((desc, index) => ( 
            <div key={index} className={`content-section ${desc.image ? (index % 2 === 0 ? 'left' : 'right') : 'full-width'}`}>
              {desc.image && <img src={desc.image} alt={blog.title} className="section-image" />}
              <div className={`text-container ${desc.image ? (index % 2 === 0 ? 'text-left' : 'text-right') : 'text-full-width'}`}>
                {desc.title && <h1 className="section-title">{desc.title}</h1>}
                <p className="section-paragraph">{desc.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default BlogDetails;
