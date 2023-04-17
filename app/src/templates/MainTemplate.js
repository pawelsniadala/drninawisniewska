import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'photoswipe/style.css';
import 'photoswipe-dynamic-caption-plugin/photoswipe-dynamic-caption-plugin.css';
import 'swiper/css';
import "swiper/css/pagination";
import 'aos/dist/aos.css';
import '../styles/app.scss';
import AOS from 'aos';

const MainTemplate = ({ children }) => {
    useEffect(() => {
        AOS.init({
            once: true,
            delay: 0,
            duration: 800,
            offset: 0,
            easing: 'ease-in-out'
        });
    }, []);

    return (
        <div className='app'>
            {children}
        </div>
    );
}

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
}

export default MainTemplate;
