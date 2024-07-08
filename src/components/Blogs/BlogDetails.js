import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from './BlogsData';
import Background from '../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg';

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find(blog => blog.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      
      <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px', width: '100vw', textAlign: 'center', backgroundImage: `url(${Background})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        <h1 style={{ width: '97vw', maxWidth: '1200px' }}>{blog.title}</h1>
      </section>

      <div>
        <img src={blog.mainImage} alt={blog.title} className="img-fluid mb-4" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100vw', textAlign: 'center', gap: '20px' }}>
        {blog.description.map((desc, index) => (
          <div key={index}>
            {desc.title && <h2>{desc.title}</h2>}
            <p>{desc.paragraph}</p>
            {desc.image && <img src={desc.image} alt={blog.title} className="img-fluid" />}
          </div>
        ))}
      </div>

    </div>
  );
};

export default BlogDetails;
