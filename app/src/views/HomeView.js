import { useEffect } from "react";
// import PosterSection from "../sections/PosterSections";
// import CastSection from "../sections/CastSection";
// import CreatorSection from "../sections/CreatorSection";
// import SummarySection from "../sections/SummarySection";
// import PhotoSection from "../sections/PhotoSection";

const HomeView = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className="home-view">
            <p>home-view</p>
            {/* <PosterSection />
            <CastSection />
            <CreatorSection />
            <SummarySection />
            <PhotoSection /> */}
        </div>
    );
};

export default HomeView;
