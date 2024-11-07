 import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function AboutUs() {
    return (
        <div>
            {/* Header */}
            <header className="header">
                <div className="left-section">
                    <a href="/index">
                        <img src="./images/food_logo.png" alt="Foodhunter Logo" />
                    </a>
                </div>
                <div className="right-section">
                    <nav className="navbar">
                        <ul>
                            <li><a href="/index">Home</a></li>
                            <li><a href="/aboutus">About Us</a></li>
                            <li><a href="/explore">Explore Foods</a></li>
                            <li><a href="/signup">Register</a></li>
                            <li><a href="/user_login">User Login</a></li>
                            {/* <li><a href="/admin_login">Admin Login</a></li> */}
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/* About Us Section */}
            <section className="company-photo">
                <img src="images/company.png" alt="Company Building" />
                <div className="text-container">
                    <h2 className="about-text">About Food Hunter</h2>
                    <p>
                        Welcome to Food Hunter, your go-to platform for the most delicious and fresh meals delivered right to your doorstep! Our goal is to connect food lovers with their favorite restaurants and food outlets in the most efficient way possible.
                    </p>
                    <p>
                        Founded with a passion for great food and convenience, Food Hunter is dedicated to offering an effortless food delivery experience. Whether you're in the mood for local cuisine, global delicacies, or just a simple snack, we have you covered.
                    </p>
                    <p>
                        We partner with top restaurants and food outlets to ensure that you get a variety of options to choose from. Our seamless app experience ensures that you can explore, order, and enjoy your meals in a hassle-free manner.
                    </p>
                    <div className="address">Bangalore, MNC Street</div>
                </div>
            </section>

            {/* Team Section */}
            <section className="team-section py-5">
                <div className="container">
                    <h2 className="text-center mb-5">Meet Our Team</h2>
                    <Carousel id="authorCarousel">
                        {/* First Author */}
                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src="images/author1.jpeg" className="rounded-circle" alt="John K Leone" width="300" height="300" />
                                </div>
                                <div className="col-md-8">
                                    <blockquote className="blockquote">
                                        <p className="mb-4">"Let food be thy medicine and medicine be thy food."</p>
                                        <footer className="blockquote-footer">John K Leone</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </Carousel.Item>

                        {/* Second Author */}
                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src="images/author2.jpeg" className="rounded-circle" alt="Sarah Smith" width="300" height="300" />
                                </div>
                                <div className="col-md-8">
                                    <blockquote className="blockquote">
                                        <p className="mb-4">"First we eat, then we do everything else."</p>
                                        <footer className="blockquote-footer">Sarah Smith</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </Carousel.Item>

                        {/* Third Author */}
                        <Carousel.Item>
                            <div className="row align-items-center">
                                <div className="col-md-4 text-center">
                                    <img src="images/author3.jpeg" className="rounded-circle" alt="David Johnson" width="300" height="300" />
                                </div>
                                <div className="col-md-8">
                                    <blockquote className="blockquote">
                                        <p className="mb-4">"Food is art, and food is love. And we should show love and appreciation for those who cook it by eating it with relish."</p>
                                        <footer className="blockquote-footer">David Johnson</footer>
                                    </blockquote>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </section>

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

export default AboutUs;
