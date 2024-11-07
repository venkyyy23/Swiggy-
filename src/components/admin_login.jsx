import React, { useState } from 'react';
import './styleforadminlogin.css';

function AdminLogin() {
    const [captchaQuestion, setCaptchaQuestion] = useState("5 + 3"); // Example initial question, replace with dynamic content if needed
    const [captchaAnswer, setCaptchaAnswer] = useState("");

    const handleCaptchaRefresh = () => {
        // Logic to refresh captcha question, replace with actual API if needed
        const newQuestion = Math.floor(Math.random() * 10) + " + " + Math.floor(Math.random() * 10);
        setCaptchaQuestion(newQuestion);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic, such as API call or redirect
        console.log("Admin login submitted");
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
                            <li><a href="/admin_login">Admin Login</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* Login Section */}
            <section className="login-section">
                <div className="company-photo">
                    <img src="/images/admin_login_image.webp" alt="Admin Image" />
                </div>

                <div className="login-form-container">
                    <h2>Admin Login</h2>
                    <form id="admin-login-form" onSubmit={handleSubmit} method="POST" action="/admin_login">
                        <div className="form-group">
                            <input type="text" id="admin-username" name="username" placeholder="Username" required />
                        </div>
                        <div className="form-group">
                            <input type="password" id="admin-password" name="password" placeholder="Password" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="captcha">
                                Captcha: <span id="captcha-question">{captchaQuestion}</span>
                            </label>
                            <input
                                type="text"
                                id="captcha-answer"
                                name="captcha"
                                placeholder="Enter answer"
                                value={captchaAnswer}
                                onChange={(e) => setCaptchaAnswer(e.target.value)}
                                required
                            />
                            <button type="button" id="refresh-captcha" className="refresh-btn" onClick={handleCaptchaRefresh}>
                                Refresh Captcha
                            </button>
                        </div>
                        <button type="submit" className="btn">Login</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default AdminLogin;
