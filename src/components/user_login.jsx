import React, { useState, useEffect } from 'react';
import './styleforuserlogin.css'; // Make sure the path is correct for the CSS

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaText, setCaptchaText] = useState('');
  
  useEffect(() => {
    // Generate the CAPTCHA on component mount
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const captcha = Math.random().toString(36).substring(2, 8);
    setCaptchaText(captcha);
    
    const captchaCanvas = document.getElementById('captchaCanvas');
    const ctx = captchaCanvas.getContext('2d');
    ctx.clearRect(0, 0, captchaCanvas.width, captchaCanvas.height);
    ctx.font = '20px Arial';
    ctx.fillStyle = '#8e1e38';
    ctx.fillText(captcha, 10, 25);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (captchaInput !== captchaText) {
      alert('Incorrect CAPTCHA, please try again.');
      return;
    }

    const loginData = {
      email,
      password,
    };

    try {
      const response = await fetch('/user_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
        window.location.href = '/';
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred during login.');
    }
  };

  return (
    <div>
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
              <li><a href="#">Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="login-container">
        <div className="login-image">
          <img src="/images/background_login.jpg" alt="Food Image" />
        </div>

        <div className="login-section">
          <h2>User Login</h2>
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* CAPTCHA */}
            <div className="form-group">
              <label htmlFor="captcha">Please enter the text:</label><br />
              <canvas id="captchaCanvas" width="120" height="40"></canvas>
              <br />
              <input
                type="text"
                id="captchaInput"
                name="captchaInput"
                placeholder="Enter CAPTCHA"
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                required
              />
              <br /><br />
              <button
                type="button"
                id="refreshCaptcha"
                className="btn"
                onClick={generateCaptcha}
              >
                Refresh CAPTCHA
              </button>
            </div>

            <button type="submit" className="btn">Login</button>
          </form>

          <p className="redirect-signup">Don't have an account? <a href="/signup">Sign up here</a>.</p>
        </div>
      </section>
    </div>
  );
};

export default UserLogin;
