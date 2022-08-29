import { useEffect } from "react";
// import PosterSection from "../sections/PosterSections";
// import CastSection from "../sections/CastSection";
// import CreatorSection from "../sections/CreatorSection";
// import SummarySection from "../sections/SummarySection";
// import PhotoSection from "../sections/PhotoSection";
import AboutSection from "../sections/AboutSection";
// import HeroSection from "../sections/HeroSection";
import HeroSection2 from "../sections/HeroSection2";
import ServicesSection from "../sections/ServicesSection";
import PriceSection from '../sections/PriceSection';
// import ReviewsSection from "../sections/ReviewsSection";
// import ReviewsSection2 from "../sections/ReviewsSection2";
import TeamSection from "../sections/TeamSection";
// import ContactSection from "../sections/ContactSection";

const HomeView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="home-view">
            {/* <p>home-view</p> */}
            {/* <HeroSection /> */}
            <HeroSection2 />
            <AboutSection />
            <ServicesSection />
            <PriceSection />

            {/* <ReviewsSection /> */}
            {/* <ReviewsSection2 /> */}
            <TeamSection />
            {/* <ContactSection /> */}
            {/* <PosterSection />
            <CastSection />
            <CreatorSection />
            <SummarySection />
            <PhotoSection /> */}
        </div>
    );
};

export default HomeView;
