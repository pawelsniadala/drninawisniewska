import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import ScrollArrow from '../components/ScrollArrow';
import HeaderSection from '../sections/HeaderSection';
import FooterSection from '../sections/FooterSection';
import HomeView from './HomeView';
import ClinicView from './ClinicView';
import ClinicRegulationPartial from './partials/clinic/ClinicRegulationPartial';
import ServicesView from './ServicesView';
import ServicesDermatologyPartial from './partials/services/ServicesDermatologyPartial';
import ServicesAestheticMedicinePartial from './partials/services/ServicesAestheticMedicinePartial';
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
import ServicesRheumatologyPartial from './partials/services/ServicesRheumatologyPartial';
import PricesView from './PricesView';
import PricesDermatologyPartial from './partials/prices/PricesDermatologyPartial';
import PricesAestheticMedicinePartial from './partials/prices/PricesAestheticMedicinePartial';
import PricesCosmetologyPartial from './partials/prices/PricesCosmetologyPartial';
import PricesPhysioterapyPartial from './partials/prices/PricesPhysioterapyPartial';
import PricesCosmeticSurgeryPartial from './partials/prices/PricesCosmeticSurgeryPartial';
import PricesAllergologyPartial from './partials/prices/PricesAllergologyPartial';
import PricesUsgPartial from './partials/prices/PricesUsgPartial';
import PricesEndocrinologyPartial from './partials/prices/PricesEndocrinologyPartial';
import PricesGynecologyPartial from './partials/prices/PricesGynecologyPartial';
import PricesOrthopedicsPartial from './partials/prices/PricesOrthopedicsPartial';
import PricesVascularSurgeryPartial from './partials/prices/PricesVascularSurgeryPartial';
import PricesClinicalDietitianPartial from './partials/prices/PricesClinicalDietitianPartial';
import PricesRheumatologyPartial from './partials/prices/PricesRheumatologyPartial';
import SpecialOfferView from './SpecialOfferView';
import TeamView from './TeamView';
import TeamSpecializationPartial from './partials/team/TeamSpecializationPartial';
import TeamSpecialistPartial from './partials/team/TeamSpecialistPartial';
import TechnologyView from './TechnologyView';
import TechnologyVectusPartial from './partials/technology/TechnologyVectusPartial';
import TechnologyAlmaHarmonyXlProPartial from './partials/technology/TechnologyAlmaHarmonyXlProPartial';
import TechnologyIcooneLaserMed2Partial from './partials/technology/TechnologyIcooneLaserMed2Partial';
import TechnologyFonsSvrFractionLaserCo2Partial from './partials/technology/TechnologyFonsSvrFractionLaserCo2Partial';
import TechnologyAlmaAccentUltraVShapePartial from './partials/technology/TechnologyAlmaAccentUltraVShapePartial';
import TechnologyFotoFinderDermoscopeVexiaPartial from './partials/technology/TechnologyFotoFinderDermoscopeVexiaPartial';
import TechnologyBiolitecLeonardoMiniPartial from './partials/technology/TechnologyBiolitecLeonardoMiniPartial';
import TechnologyHettichArthrexAcpPartial from './partials/technology/TechnologyHettichArthrexAcpPartial';
import TechnologyPhilipsUltrasonografAffiniti50Partial from './partials/technology/TechnologyPhilipsUltrasonografAffiniti50Partial';
import TechnologySonoQueenPartial from './partials/technology/TechnologySonoQueenPartial';
import TechnologyDermalight500Partial from './partials/technology/TechnologyDermalight500Partial';
import TechnologyDermalight1000UvaUvb311nmPartial from './partials/technology/TechnologyDermalight1000UvaUvb311nmPartial';
import ContactView from './ContactView';
import Modal from '../components/Modal';
import Toast from '../components/Toast';

const Root = () => (
    <MainTemplate>
        <Router>
            <HeaderSection />
            <main>
                <Routes>
                    <Route exact path='/' element={<HomeView />} />
                    <Route exact path='/drninawisniewska/' element={<HomeView main />} />
                    <Route exact path='https://drninawisniewska.pl' element={<HomeView />} />
                    <Route path='/clinic' element={<ClinicView />} />
                    <Route path='/clinic/regulation' element={<ClinicRegulationPartial />} />
                    <Route exact path='/services' element={<ServicesView />} />
                    <Route path='/services/dermatology' element={<ServicesDermatologyPartial />} />
                    <Route path='/services/aesthetic-medicine' element={<ServicesAestheticMedicinePartial />} />
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
                    <Route path='/services/rheumatology' element={<ServicesRheumatologyPartial />} />
                    <Route path='/prices' element={<PricesView />}>
                        <Route path='/prices' element={<PricesDermatologyPartial />} />
                        <Route path='/prices/aesthetic-medicine' element={<PricesAestheticMedicinePartial />} />
                        <Route path='/prices/cosmetology' element={<PricesCosmetologyPartial />} />
                        <Route path='/prices/physioterapy' element={<PricesPhysioterapyPartial />} />
                        <Route path='/prices/cosmetic-surgery' element={<PricesCosmeticSurgeryPartial />} />
                        <Route path='/prices/allergology' element={<PricesAllergologyPartial />} />
                        <Route path='/prices/usg' element={<PricesUsgPartial />} />
                        <Route path='/prices/endocrinology' element={<PricesEndocrinologyPartial />} />
                        <Route path='/prices/gynecology' element={<PricesGynecologyPartial />} />
                        <Route path='/prices/orthopedics' element={<PricesOrthopedicsPartial />} />
                        <Route path='/prices/vascular-surgery' element={<PricesVascularSurgeryPartial />} />
                        <Route path='/prices/clinical-dietitian' element={<PricesClinicalDietitianPartial />} />
                        <Route path='/prices/rheumatology' element={<PricesRheumatologyPartial />} />
                    </Route>
                    <Route path='/special-offer' element={<SpecialOfferView />} />
                    <Route path='/team' element={<TeamView />}>
                        <Route path=':specialization' element={<TeamSpecializationPartial />} />
                    </Route>
                    <Route path='team/:specialization/:specialist' element={<TeamSpecialistPartial />} />
                    <Route path='/technology' element={<TechnologyView />} />
                    <Route path='/technology/vectus' element={<TechnologyVectusPartial />} />
                    <Route path='/technology/alma-harmony-xl-pro' element={<TechnologyAlmaHarmonyXlProPartial />} />
                    <Route path='/technology/icoone-laser-med2' element={<TechnologyIcooneLaserMed2Partial />} />
                    <Route path='/technology/fons-svr-fraction-laser-co2' element={<TechnologyFonsSvrFractionLaserCo2Partial />} />
                    <Route path='/technology/alma-accent-ultra-v-shape' element={<TechnologyAlmaAccentUltraVShapePartial />} />
                    <Route path='/technology/biolitec-leonardo-mini' element={<TechnologyBiolitecLeonardoMiniPartial />} />
                    <Route path='/technology/hettich-arthrex-acp' element={<TechnologyHettichArthrexAcpPartial />} />
                    <Route path='/technology/foto-finder-dermoscope-vexia' element={<TechnologyFotoFinderDermoscopeVexiaPartial />} />
                    <Route path='/technology/philips-ultrasonograf-affiniti-50' element={<TechnologyPhilipsUltrasonografAffiniti50Partial />} />
                    <Route path='/technology/sono-queen' element={<TechnologySonoQueenPartial />} />
                    <Route path='/technology/dermalight-500' element={<TechnologyDermalight500Partial />} />
                    <Route path='/technology/dermalight-1000-uva-uvb-311nm' element={<TechnologyDermalight1000UvaUvb311nmPartial />} />
                    <Route path='/contact' element={<ContactView />} />
                </Routes>
            </main>
            <Modal />
            <Toast />
            <FooterSection />
            <ScrollArrow />
        </Router>
    </MainTemplate>
);

export default Root;
