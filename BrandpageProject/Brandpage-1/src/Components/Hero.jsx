import React from "react";

function Hero() {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>

          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="hero-button">
            <button>Shop Now</button>
            <button className="btn-2">Category</button>
          </div>

          <div className="shopping">
            <p>Also Availabel on</p>

            <div className="brand-icons">
              <img src="../images/amazon.png" alt="amazonlogo" />
              <img src="../images/flipkart.png" alt="" />
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src="../images/shoe_image.png" alt="" />
        </div>
      </main>
    </>
  );
}

export default Hero;
