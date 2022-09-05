import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
// import FooterSection from '../sections/FooterSection';

import ScrollArrow from '../components/ScrollArrow';
// import Modal from '../components/Modal';
// import Toast from '../components/Toast';

import NavSection from '../sections/NavSection';
// import NavSection2 from '../sections/NavSection2';
import HomeView from './HomeView';
import AboutView from './AboutView';

import ServicesView from './ServicesView';
import ServicesDermatologyPartial from './partials/services/ServicesDermatologyPartial';
import ServicesAestheticMedicinePartial from './partials/services/ServicesAestheticMedicinePartial';
import ServicesHematologyPartial from './partials/services/ServicesHematologyPartial';
import ServicesCosmetologyPartial from './partials/services/ServicesCosmetologyPartial';
import ServicesPhysioterapyPartial from './partials/services/ServicesPhysioterapyPartial';
import ServicesCosmeticSurgeryPartial from './partials/services/ServicesCosmeticSurgeryPartial';
import ServicesAllergologyPartial from './partials/services/ServicesAllergologyPartial';
import ServicesUsgPartial from './partials/services/ServicesUsgPartial';
import ServicesEndocrinologyPartial from './partials/services/ServicesEndocrinologyPartial';
import ServicesGynecologyPartial from './partials/services/ServicesGynecologyPartial';
import ServicesOrthopedicsPartial from './partials/services/ServicesOrthopedicsPartial';
import ServicesVascularSurgeryPartial from './partials/services/ServicesVascularSurgeryPartial';
import ServicesClinicalDietitianPartial from './partials/services/ServicesClinicalDietitianPartial';


import PricesView from './PricesView';
import PricesDermatologyPartials from './partials/prices/PricesDermatologyPartials';
import PricesAestheticMedicinePartials from './partials/prices/PricesAestheticMedicinePartials';
import PricesHematologyPartials from './partials/prices/PricesHematologyPartials';
import PricesCosmetologyPartials from './partials/prices/PricesCosmetologyPartials';
import PricesPhysioterapyPartials from './partials/prices/PricesPhysioterapyPartials';
import PricesCosmeticSurgeryPartials from './partials/prices/PricesCosmeticSurgeryPartials';
import PricesAllergologyPartials from './partials/prices/PricesAllergologyPartials';
import PricesUsgPartials from './partials/prices/PricesUsgPartials';

import TeamView from './TeamView';
import ContactView from './ContactView';

// import PricesDermatologyPartials from './partials/prices/PricesDermatologyPartials';
// import PricesHematologyPartials from './partials/prices/PricesHematologyPartials'

const Root = () => (
    <MainTemplate>
        <Router>
            <NavSection />
            <main>
                <Routes>
                    <Route exact path='/' element={<HomeView />} />
                    <Route exact path='/drninawisniewska/' element={<HomeView />} />
                    {/* <Route path='/cast' element={<CastView />}>
                        <Route path='/cast/all' element={<CastAllPartial />} />
                        <Route path='/cast/main' element={<CastMainPartial />} />
                        <Route path='/cast/other' element={<CastOtherPartial />} />
                    </Route> */}
                    <Route path='/about' element={<AboutView />} />

                    <Route exact path='/services' element={<ServicesView />} />
                    <Route path='/services/dermatology' element={<ServicesDermatologyPartial />} />
                    <Route path='/services/aesthetic-medicine' element={<ServicesAestheticMedicinePartial />} />
                    <Route path='/services/hematology' element={<ServicesHematologyPartial />} />
                    <Route path='/services/cosmetology' element={<ServicesCosmetologyPartial />} />
                    <Route path='/services/physioterapy' element={<ServicesPhysioterapyPartial />} />
                    <Route path='/services/cosmetic-surgery' element={<ServicesCosmeticSurgeryPartial />} />
                    <Route path='/services/allergology' element={<ServicesAllergologyPartial />} />
                    <Route path='/services/usg' element={<ServicesUsgPartial />} />
                    <Route path='/services/endocrinology' element={<ServicesEndocrinologyPartial />} />
                    <Route path='/services/gynecology' element={<ServicesGynecologyPartial />} />
                    <Route path='/services/orthopedics' element={<ServicesOrthopedicsPartial />} />
                    <Route path='/services/vascular-surgery' element={<ServicesVascularSurgeryPartial />} />
                    <Route path='/services/clinical-dietitian' element={<ServicesClinicalDietitianPartial />} />

                    <Route path='/prices' element={<PricesView />}>
                        <Route path='/prices/dermatology' element={<PricesDermatologyPartials />} />
                        <Route path='/prices/aesthetic-medicine' element={<PricesAestheticMedicinePartials />} />
                        <Route path='/prices/hematology' element={<PricesHematologyPartials />} />
                        <Route path='/prices/cosmetology' element={<PricesCosmetologyPartials />} />
                        <Route path='/prices/physioterapy' element={<PricesPhysioterapyPartials />} />
                        <Route path='/prices/cosmetic-surgery' element={<PricesCosmeticSurgeryPartials />} />
                        <Route path='/prices/allergology' element={<PricesAllergologyPartials />} />
                        <Route path='/prices/usg' element={<PricesUsgPartials />} />


                    </Route>
                    <Route path='/team' element={<TeamView />} />
                    <Route path='/contact' element={<ContactView />} />
                </Routes>
            </main>
            {/* <Modal /> */}
            {/* <Toast /> */}
            {/* <FooterSection /> */}
            <ScrollArrow />
        </Router>
    </MainTemplate>
);

export default Root;
