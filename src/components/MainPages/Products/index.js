import React, { useState } from "react";
import Background from "../../1_MediaAssets/BrandAssets/Backgrounds/PurpleBanner.jpg";
import ProductsData from "./ProductsData";
import Footer from "../../Constants/Footer";
import "./Products.css";
import Cover2 from "../../1_MediaAssets/BrandAssets/TextureTriangle.png";

const ProductsPage = ({ products = ProductsData }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);

  const handleCardClick = (product) => {
    console.log("Product clicked:", product);
    setSelectedProduct(product);
    setMainImage(product.mainImage);
  };

  const closeModal = () => {
    console.log("Closing modal");
    setSelectedProduct(null);
    setMainImage(null);
  };

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  console.log("Selected product:", selectedProduct);

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
              Products
            </h1>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          flexWrap: "wrap",
          padding: "20px 0px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="productcard"
            onClick={() => handleCardClick(product)}
          >
            <img
              src={product.mainImage}
              className="productcard-img-top"
              alt={product.name}
            />
            <div>
              <p className="productcard-date">{product.availability}</p>
              <h1 className="productcard-title">{product.name}</h1>
            </div>
            <div className="productcard-buttons">
              <button className="productcard-button">+</button>
              <button className="productcard-button">-</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <h1>{selectedProduct.name}</h1>
              <p>Price: {selectedProduct.price}</p>
              <p>Dimensions: {selectedProduct.dimension}</p>
              <p>Weight: {selectedProduct.weight}</p>
              <p>Availability: {selectedProduct.availability}</p>
              <div className="modal-main-image">
                <img src={mainImage} alt={selectedProduct.name} />
              </div>
              <div className="modal-thumbnails">
                {mainImage !== selectedProduct.mainImage && (
                  <img
                    src={selectedProduct.mainImage}
                    alt="Main Image"
                    onClick={() => handleImageClick(selectedProduct.mainImage)}
                  />
                )}
                {selectedProduct.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Additional image ${index + 1}`}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
              {selectedProduct.description.map((desc, index) => (
                <div className="modal-desc" key={index}>
                  <h3>{desc.title}</h3>
                  <p>{desc.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductsPage;
