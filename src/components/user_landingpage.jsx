import React from "react";
import "./styles.css"; // Make sure the styles are present or adjust accordingly.

const App = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="left-section">
          <a href="index.html">
            <img src="images/food_logo.png" alt="Foodhunter Logo" />
          </a>
        </div>
        <div className="right-section">
          <nav className="navbar">
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Explore Foods</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="index.html">Logout</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <section className="main-section">
        <div className="container">
          <div className="intro">
            <h2>Food Cravings?</h2>
            <h2>We've Got You Covered!</h2>
            <p>Food Hunter: Where You Hunt, We Deliver!</p>
            <div className="buttons">
              <a href="#" className="btn">Order Now</a>
            </div>
          </div>
          <div className="intro-img">
            <img src="images/first_background.avif" alt="Healthy Food" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container stats">
          <div>
            <h3>4568+</h3>
            <p>Savings</p>
          </div>
          <div>
            <h3>675+</h3>
            <p>Photos</p>
          </div>
          <div>
            <h3>567+</h3>
            <p>Foods</p>
          </div>
          <div>
            <h3>5673+</h3>
            <p>Customers</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="feature">
            <img src="images/packing.jpg" alt="Bowl of Salad" />
            <div className="text-content">
              <h2>Good food deserves great packaging—savor every bite, worry-free.</h2>
              <p>Experience freshness, sealed with quality packaging.</p>
              <a href="#" className="btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="ingredients-section">
        <div className="container">
          <div className="ingredients">
            <h3>❝ Taste the world with a delightful variety of cuisines from renowned restaurants, celebrating flavors from every corner of the globe ❞</h3>
            <div className="food-gallery">
              <div className="food-item">
                <img src="images/south_cuisine.jpg" alt="South Cuisine" />
                <p>South Cuisine</p>
              </div>
              <div className="food-item">
                <img src="images/north_cuisine.jpg" alt="North Cuisine" />
                <p>North Cuisine</p>
              </div>
              <div className="food-item">
                <img src="images/chinese_cuisine.jpg" alt="Chinese Cuisine" />
                <p>Chinese Cuisine</p>
              </div>
              <div className="food-item">
                <img src="images/japanese_cuisine.jpg" alt="Japanese Cuisine" />
                <p>Japanese Cuisine</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
