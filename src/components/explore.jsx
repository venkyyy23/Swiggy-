import React, { useState } from 'react';
import './FoodMenu.css'; // Create a separate CSS file for styling

const FoodMenu = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  
  // Function to handle adding items to the cart
  const addToCart = (itemName) => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, itemName]);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="left-section">
          <a href="index">
            <img src="images/food_logo.png" alt="Foodhunter Logo" />
          </a>
        </div>
        <div className="right-section">
          <nav className="navbar">
            <ul>
              <li><a href="index">Home</a></li>
              <li><a href="aboutus">About Us</a></li>
              <li><a href="explore">Explore Foods</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="index">Logout</a></li>
            </ul>
          </nav>
          <div className="cart" id="cart-icon">
            🛒 <span className="cart-count" id="cart-count">{cartCount}</span>
            <div className="cart-dropdown" id="cart-dropdown">
              <ul id="cart-items">
                {cartItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <button>Order Now</button>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="search-bar">
          <input type="text" placeholder="Search food here..." />
          <br />
          <button>Search</button>
        </div>

        <div className="product-grid">
          {/* Example food item */}
          <div className="product-card">
            <img src="images/rainbow_pizza.jpg" alt="Rainbow Sandwich" />
            <h3>Rainbow Sandwich</h3>
            <p>Time: 15 - 20 Minutes | Serve 1</p>
            <div className="price">
              <span className="discounted">$5.89</span>
              <span className="original">$6.55</span>
            </div>
            <button onClick={() => addToCart('Rainbow Sandwich')}>Add To Basket</button>
          </div>

          <div className="product-card">
            <img src="images/pepperoni_pizza.jpg" alt="Peperoni Pizza" />
            <h3>Peperoni Pizza</h3>
            <p>Time: 20 - 25 Minutes | Serve 1</p>
            <div className="price">
              <span className="discounted">$8.93</span>
              <span className="original">$10.5</span>
            </div>
            <button onClick={() => addToCart('Peperoni Pizza')}>Add To Basket</button>
          </div>

          <div className="product-card">
            <img src="images/fried_chicken_salad.jpg" alt="Fried Salad Chicken" />
            <h3>Fried Salad Chicken</h3>
            <p>Time: 30 - 40 Minutes | Serve 1</p>
            <div className="price">
              <span className="discounted">$14.00</span>
              <span className="original">$15.55</span>
            </div>
            <button onClick={() => addToCart('Fried Salad Chicken')}>Add To Basket</button>
          </div>

          <div className="product-card">
            <img src="images/vegetable_salad.jpg" alt="Green Fried Vegetables Salad" />
            <h3>Green Fried Vegetables Salad</h3>
            <p>Time: 20 - 25 Minutes | Serve 1</p>
            <div className="price">
              <span className="discounted">$8.28</span>
              <span className="original">$9.2</span>
            </div>
            <button onClick={() => addToCart('Green Fried Vegetables Salad')}>Add To Basket</button>
          </div>

          <div className="product-card">
            <img src="images/yogurt_rice_bowl.jpg" alt="Yogurt Rice Bowl" />
            <h3>Yogurt Rice Bowl</h3>
            <p>Time: 10 - 15 Minutes | Serve 1</p>
            <div className="price">
              <span className="discounted">$5.27</span>
              <span className="original">$5.55</span>
            </div>
            <button onClick={() => addToCart('Yogurt Rice Bowl')}>Add To Basket</button>
          </div>

          <div className="product-card">
            <img src="images/raspberry.jpg" alt="Rasberry Cheese Sandwich" />
            <h3>Rasberry Cheese Sandwich</h3>
            <p>Time: 20 - 25 Minutes | Serve 1</p>
            <div className="price">
              <span className="discounted">$7.82</span>
              <span className="original">$9.2</span>
            </div>
            <button onClick={() => addToCart('Rasberry Cheese Sandwich')}>Add To Basket</button>
          </div>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button>&lt;</button>
          <button>1</button>
          <button onClick={() => window.location.href = 'explorefoods2.html'}>2</button>
          <button>&gt;</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; 2024 Food Hunter. All rights reserved.</p>
          <ul className="list-inline footer-icons">
            <li className="list-inline-item"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fab fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default FoodMenu;
