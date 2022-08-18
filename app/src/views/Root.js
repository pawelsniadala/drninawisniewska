import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import MainTemplate from "../templates/MainTemplate";
// import FooterSection from "../sections/FooterSection";

// import ScrollArrow from "../components/ScrollArrow";
// import Modal from "../components/Modal";
// import Toast from "../components/Toast";

import NavSection from "../sections/NavSection";
import HomeView from "./HomeView";
import AboutView from "./AboutView";
import ServicesView from "./ServicesView";
import TeamView from "./TeamView";
import PricesView from "./PricesView";
import ContactView from "./ContactView";

// import PricesDermatologyPartials from "./partials/prices/PricesDermatologyPartials";
// import PricesHematologyPartials from "./partials/prices/PricesHematologyPartials"

const Root = () => (
    <MainTemplate>
        <Router>
            <NavSection />
            <main>
                <Routes>
                    <Route exact path="/" element={<HomeView />} />
                    <Route exact path="/drninawisniewska/" element={<HomeView />} />
                    {/* <Route path="/cast" element={<CastView />}>
                        <Route path="/cast/all" element={<CastAllPartial />} />
                        <Route path="/cast/main" element={<CastMainPartial />} />
                        <Route path="/cast/other" element={<CastOtherPartial />} />
                    </Route> */}
                    <Route path="/about" element={<AboutView />} />
                    <Route path="/services" element={<ServicesView />} />
                    <Route path="/prices" element={<PricesView />} />
                    <Route path="/team" element={<TeamView />} />
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
