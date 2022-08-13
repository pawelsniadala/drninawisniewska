import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
// import NavSection from "../sections/NavSections";
// import FooterSection from "../sections/FooterSection";
import HomeView from "./HomeView";
// import VideoView from "./VideoView";
// import PhotoView from "./PhotoView";
// import MusicView from "./MusicView";
// import CastView from "./CastView";
// import BackstageView from "./BackstageView";
// import CreatorView from "./CreatorView";
// import ContactView from "./ContactView";

// import CastAllPartial from "./partials/cast/CastAllPartial";
// import CastMainPartial from "./partials/cast/CastMainPartial";
// import CastOtherPartial from "./partials/cast/CastOtherPartial";

// import CreatorAllPartial from "./partials/creator/CreatorAllPartial";
// import CreatorDirectionPartial from "./partials/creator/CreatorDirectionPartial";
// import CreatorPhotoPartial from "./partials/creator/CreatorPhotoPartial";
// import CreatorMontagePartial from "./partials/creator/CreatorMontagePartial";
// import CreatorMakeupPartial from "./partials/creator/CreatorMakeupPartial";
// import CreatorManagementPartial from "./partials/creator/CreatorManagementPartial";
// import CreatorCameraPartial from "./partials/creator/CreatorCameraPartial";
// import CreatorSteadicamPartial from "./partials/creator/CreatorSteadicamPartial";
// import CreatorScriptSlatePartial from "./partials/creator/CreatorScriptSlatePartial";
// import CreatorColorGradingPartial from "./partials/creator/CreatorColorGradingPartial";

// import PhotoAllPartial from "./partials/photo/PhotoAllPartial"
// import PhotoFilmPartial from "./partials/photo/PhotoFilmPartial"
// import PhotoPlanPartial from "./partials/photo/PhotoPlanPartial"


// import ScrollArrow from "../components/ScrollArrow";
// import Modal from "../components/Modal";
// import Toast from "../components/Toast";

import NavSection from "../sections/NavSection";
import ContactView from "./ContactView";

const Root = () => (
    <MainTemplate>
        <Router>
            <NavSection />
            <main>
                <Routes>
                    <Route exact path="/" element={<HomeView />} />
                    <Route exact path="/drninawisniewska/" element={<HomeView />} />
                    {/* <Route path="/creator" element={<CreatorView />}>
                        <Route path="/creator/all" element={<CreatorAllPartial />} />
                        <Route path="/creator/direction" element={<CreatorDirectionPartial />} />
                        <Route path="/creator/photo" element={<CreatorPhotoPartial />} />
                        <Route path="/creator/montage" element={<CreatorMontagePartial />} />
                        <Route path="/creator/makeup" element={<CreatorMakeupPartial />} />
                        <Route path="/creator/management" element={<CreatorManagementPartial />} />
                        <Route path="/creator/camera" element={<CreatorCameraPartial />} />
                        <Route path="/creator/steadicam" element={<CreatorSteadicamPartial />} />
                        <Route path="/creator/script-slate" element={<CreatorScriptSlatePartial />} />
                        <Route path="/creator/color-grading" element={<CreatorColorGradingPartial />} />
                    </Route>

                    <Route path="/photo" element={<PhotoView />}>
                        <Route path="/photo/all" element={<PhotoAllPartial />} />
                        <Route path="/photo/film" element={<PhotoFilmPartial />} />
                        <Route path="/photo/plan" element={<PhotoPlanPartial />} />
                    </Route>
                    <Route path="/music" element={<MusicView />} />
                    <Route path="/cast" element={<CastView />}>
                        <Route path="/cast/all" element={<CastAllPartial />} />
                        <Route path="/cast/main" element={<CastMainPartial />} />
                        <Route path="/cast/other" element={<CastOtherPartial />} />
                    </Route>
                    <Route path="/contact" element={<ContactView />} /> */}
                    <Route path="/contact" element={<ContactView />} />
                </Routes>
            </main>
            {/* <Modal /> */}
            {/* <Toast />
            <FooterSection />
            <ScrollArrow /> */}
        </Router>
    </MainTemplate>
);

export default Root;
