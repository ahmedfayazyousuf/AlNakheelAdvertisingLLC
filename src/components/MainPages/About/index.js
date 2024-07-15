import React from "react";
import "./About.css";
import Background from "../../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg";
import Cover2 from "../../1_MediaAssets/BrandAssets/TextureTriangle.png";
import Footer from "../../Constants/Footer";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        backgroundColor: "black",
        flexDirection: "column",
        backgroundImage: `url(${Background})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div
        className="hero-section"
        style={{
          background: "rgba(19,0,36,0.6)",
          backgroundImage: `url('${Cover2}')`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1
              className="hero-title outlined-text"
              style={{ color: "transparent" }}
            >
              About Us
            </h1>
          </div>
        </div>
      </div>
      <section className="intro-section">
        <div className="intro-text">
          <h1>Why choose Al Nakheel Advertising LLC?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue accumsan commodo. Fusce maximus tortor metus, a varius purus vulputate.</p>
        </div>
      </section>
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="#" alt="member1" className="team-image" />
            <h3>employee 1</h3>
            <p>Marketing Manager</p>
          </div>
          <div className="team-member">
            <img src="#" alt="member2" className="team-image" />
            <h3>employee 2</h3>
            <p>Event Coordinator</p>
          </div>
          <div className="team-member">
            <img src="#" alt="member3" className="team-image" />
            <h3>employee 3</h3>
            <p>Software Developer</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
