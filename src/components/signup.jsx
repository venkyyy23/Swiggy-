import React, { useState } from 'react';
import './styleforsignup.css'; // Ensure the path is correct

function SignUp() {
  // State hooks for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    dob: '',
    gender: '',
    password: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted', formData);
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="left-section">
          <a href="/">
            <img src="/images/food_logo.png" alt="Foodhunter Logo" />
          </a>
        </div>
        <div className="right-section">
          <nav className="navbar">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/aboutus">About Us</a></li>
              <li><a href="#">Explore Foods</a></li>
              <li><a href="/signup">Register</a></li>
              <li><a href="/user_login">User Login</a></li>
              {/* <li><a href="/admin_login">Admin Login</a></li> */}
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sign-Up Section */}
      <section className="signup-section container">
        <div className="form-container">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="mobileNumber"
                placeholder="Mobile Number"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default SignUp;
