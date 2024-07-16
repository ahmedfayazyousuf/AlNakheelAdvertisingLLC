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

      <section className="about-section">
        <div className="about-content">
          <div className="about-images">
            {/*<img src={Cover2} alt=" " className="about-image" />
          <img src={Cover2} alt=" " className="about-image" />*/}
          </div>
          <div className="about-text">
            <h1>About Al Nakheel Advertising LLC</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              fermentum imperdiet urna, sed molestie leo blandit vitae.
              Vestibulum viverra lectus justo, sed commodo magna mattis sed. Nam
              vel justo vel elit aliquet iaculis. Nunc rhoncus lectus eros, ut
              scelerisque arcu finibus id. Curabitur non luctus metus. Nulla et
              nibh lobortis, placerat leo id, accumsan nibh. Aliquam erat
              volutpat. Donec tincidunt, felis in molestie dapibus, mi ex
              ullamcorper felis, at lobortis purus ipsum et nisl. Proin ac
              malesuada erat. In hac habitasse platea dictumst. Morbi vitae
              facilisis sapien. Maecenas non justo tincidunt, aliquet tortor
              vel, scelerisque libero. <br />
              <br />
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
              Pellentesque nec nulla sit amet ex facilisis vehicula. Maecenas
              lobortis ipsum eu risus rutrum aliquam. Sed ornare tortor sed
              mauris feugiat, nec facilisis metus luctus. Fusce pellentesque
              elementum lacus in blandit. Suspendisse potenti. <br /> <br />
              Morbi vestibulum, augue in finibus consequat, nunc purus gravida
              magna, et dapibus turpis turpis ac elit. Integer sollicitudin,
              ipsum in dapibus pretium, sem ipsum facilisis nisl, quis fermentum
              magna diam a lacus. Praesent malesuada ipsum sed nulla dapibus, a
              mattis arcu mattis. Curabitur feugiat eget ante nec laoreet. In
              vulputate vulputate ex sed aliquet.
            </p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-text">
          <h1>Why choose Al Nakheel Advertising LLC?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            fermentum imperdiet urna, sed molestie leo blandit vitae. Vestibulum
            viverra lectus justo, sed commodo magna mattis sed. Nam vel justo
            vel elit aliquet iaculis. Nunc rhoncus lectus eros, ut scelerisque
            arcu finibus id. Curabitur non luctus metus. Nulla et nibh lobortis,
            placerat leo id, accumsan nibh. Aliquam erat volutpat. Donec
            tincidunt, felis in molestie dapibus, mi ex ullamcorper felis, at
            lobortis purus ipsum et nisl. Proin ac malesuada erat. In hac
            habitasse platea dictumst. Morbi vitae facilisis sapien. Maecenas
            non justo tincidunt, aliquet tortor vel, scelerisque libero.
          </p>
        </div>
      </section>

      <section className="leadership-section">
        <h1>Exploring Our Leadership</h1>
        <div className="leadership-members">
          <div className="leadership-member">
            <img src={Cover2} alt=" " />
            <div className="leadership-content">
              <h3>Tiffany Delacruz</h3>
              <h4>Chief Executive Officer</h4>
              <p>
                Tiffany Delacruz, CEO of Rex Medical Events, transitions from
                her veterinary roots to lead a global force in medical
                education. With a background in preventive medicine, she
                leverages her expertise to empower healthcare professionals
                worldwide. Under her guidance, Rex Medical Events offers
                cutting-edge programs, shaping the future of healthcare through
                innovation and excellence. Tiffany's commitment to advancing
                medical knowledge and patient care resonates in every
                initiative, driving transformative change in the industry.
              </p>
            </div>
          </div>
          <div className="leadership-member">
            <img src={Cover2} alt=" " />
            <div className="leadership-content">
              <h3>Johnny Dominguez</h3>
              <h4>Founder</h4>
              <p>
                Johnny Dominguez, the visionary force behind Rex Medical Events,
                brings his expertise in computer science to pioneer a modernized
                approach to medical education. His innovative blend of
                technology and medical knowledge reshapes traditional notions of
                medical education, crafting a stress-free experience for
                healthcare professionals. Johnny's commitment to revolutionizing
                the industry is evident in every aspect of Rex Medical Events,
                from its groundbreaking programs to its forward-thinking
                initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section">
        <h1>Meet the Team</h1>
        <div className="team-members">
          <div className="team-member">
            <img src={Cover2} alt="member1" className="team-image" />
            <h3>employee 1</h3>
            <p>Marketing Manager</p>
          </div>
          <div className="team-member">
            <img src={Cover2} alt="member2" className="team-image" />
            <h3>employee 2</h3>
            <p>Event Coordinator</p>
          </div>
          <div className="team-member">
            <img src={Cover2} alt="member3" className="team-image" />
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
