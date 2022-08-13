import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
// import "photoswipe/dist/photoswipe.css";
// import "photoswipe/dist/default-skin/default-skin.css";
import "../styles/app.scss";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'react-image-lightbox/style.css';
// import 'aos/dist/aos.css';


const MainTemplate = ({ children }) => (
    <div className="app">
        {children}
    </div>
);

MainTemplate.propTypes = {
    children: PropTypes.element.isRequired
}

export default MainTemplate;
