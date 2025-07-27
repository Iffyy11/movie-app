import React from 'react';
import { Link } from 'react-router-dom';
// import logo and background if needed
// import bg from '../assets/footer-bg.jpg';
// import logo from '../assets/tmovie.png';

const Footer = () => {
    return (
        <div
            className="footer"
            // Uncomment the line below if you have a bg image
            // style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="footer__content container">
                <div className="footer_content_logo">
                    <div className="logo">
                        {/* Uncomment and import logo if you want to use it */}
                        {/* <img src={logo} alt="Logo" /> */}
                        <Link to="/">tMovies</Link>
                    </div>
                </div>
                <div className="footer_content_menus">
                    <div className="footer_content_menu">
                        <Link to="/">Home</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">Terms of Service</Link>
                        <Link to="/">About us</Link>
                    </div>
                    <div className="footer_content_menu">
                        <Link to="/">Live</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Privacy Policy</Link>
                    </div>
                    <div className="footer_content_menu">
                        <Link to="/">You must watch</Link>
                        <Link to="/">Recent release</Link>
                        <Link to="/">Top IMDB</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
