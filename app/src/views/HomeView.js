import { useEffect } from "react";
// import PosterSection from "../sections/PosterSections";
// import CastSection from "../sections/CastSection";
// import CreatorSection from "../sections/CreatorSection";
// import SummarySection from "../sections/SummarySection";
// import PhotoSection from "../sections/PhotoSection";
import ClinicSection from "../sections/ClinicSection";
// import HeroSection from "../sections/HeroSection";
import HeroSection from "../sections/HeroSection";
import ServicesSection from "../sections/ServicesSection";
import PriceSection from '../sections/PriceSection';
// import ReviewsSection from "../sections/ReviewsSection";
// import ReviewsSection2 from "../sections/ReviewsSection2";
import TeamSection from "../sections/TeamSection";
import TechnologySection from "../sections/TechnologySection";
// import ContactSection from "../sections/ContactSection";

const HomeView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="home-view">
            {/* <p>home-view</p> */}
            {/* <HeroSection /> */}
            <HeroSection />
            <ClinicSection />
            <ServicesSection />
          
           
            <PriceSection />
            <TeamSection />
            <TechnologySection />

        
          
            
              {/* <ReviewsSection2 /> */}
                  {/* <ReviewsSection /> */}
            
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
