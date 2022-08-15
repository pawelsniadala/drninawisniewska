import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";
import "../styles/app.scss";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

const MainTemplate = ({ children }) => {
    useEffect(() => {
        AOS.init({
            once: true,
            delay: 0,
            duration: 800,
            offset: 0,
            easing: 'ease-in-out',
        });
    }, []);

    return (
        <div className="app">
            {children}
        </div>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
}

export default MainTemplate;
