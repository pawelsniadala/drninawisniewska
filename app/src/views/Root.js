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
import ServicesCardiologyPartial from './partials/services/ServicesCardiologyPartial';
import TreatmentView from './TreatmentView';

// DERMATOLOGIA
import TreatmentSpecializationPartial from './partials/treatment/TreatmentSpecializationPartial';
import TreatmentBadanieZnamionBarwnikowychPartial from './partials/treatment/dermatology/TreatmentBadanieZnamionBarwnikowychPartial';
import TreatmentFototerapiaChorobSkoryPartial from './partials/treatment/dermatology/TreatmentFototerapiaChorobSkoryPartial';
import TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial from './partials/treatment/dermatology/TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial';

// MEDYCYNA ESTETYCZNA
import TreatmentToksynaBotulinowaPartial from './partials/treatment/aestheticMedicine/TreatmentToksynaBotulinowaPartial';
import TreatmentStymulatoryTkankowePartial from './partials/treatment/aestheticMedicine/TreatmentStymulatoryTkankowePartial';
import TreatmentOsoczeBogatopłytkowePartial from './partials/treatment/aestheticMedicine/TreatmentOsoczeBogatopłytkowePartial';
import TreatmentMezoterapiaIglowaPartial from './partials/treatment/aestheticMedicine/TreatmentMezoterapiaIglowaPartial';
import TreatmentNiciRewitalizujaceILiftingujacePartial from './partials/treatment/aestheticMedicine/TreatmentNiciRewitalizujaceILiftingujacePartial';
import TreatmentLaserFrakcyjnyPartial from './partials/treatment/aestheticMedicine/TreatmentLaserFrakcyjnyPartial';
import TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial from './partials/treatment/aestheticMedicine/TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial';

// KOSMETOLOGIA
import TreatmentPeelingMedycznyPartial from './partials/treatment/cosmetology/TreatmentPeelingMedycznyPartial';
import TreatmentEpilacjaLaserowaPartial from './partials/treatment/cosmetology/TreatmentEpilacjaLaserowaPartial';
import TreatmentMasazProzniowyPartial from './partials/treatment/cosmetology/TreatmentMasazProzniowyPartial';
import TreatmentUltradzwiekiIFalaRadiowaPartial from './partials/treatment/cosmetology/TreatmentUltradzwiekiIFalaRadiowaPartial';

// FIZJOTERAPIA
import TreatmentRehabilitacjaPartial from './partials/treatment/physioterapy/TreatmentRehabilitacjaPartial';
import TreatmentMasazPartial from './partials/treatment/physioterapy/TreatmentMasazPartial';
import TreatmentKinesiotapingPartial from './partials/treatment/physioterapy/TreatmentKinesiotapingPartial';

// ALERGOLOGIA
import TreatmentTestySkornePartial from './partials/treatment/allergology/TreatmentTestySkornePartial';
import TreatmentPlatkoweTestyKontaktowePartial from './partials/treatment/allergology/TreatmentPlatkoweTestyKontaktowePartial';
import TreatmentOdczulaniePartial from './partials/treatment/allergology/TreatmentOdczulaniePartial';

// CHIRURGIA NACZYNIOWA
import TreatmentSkleroterapiaPartial from './partials/treatment/vascularSurgery/TreatmentSkleroterapiaPartial';
import TreatmentLaseroweUsuwanieZylakowPartial from './partials/treatment/vascularSurgery/TreatmentLaseroweUsuwanieZylakowPartial';


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
import PricesCardiologyPartial from './partials/prices/PricesCardiologyPartial';
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
                    <Route path='/services/cardiology' element={<ServicesCardiologyPartial />} />

                    <Route path='/treatment' element={<TreatmentView />}>
                        <Route path=':specialization' element={<TreatmentSpecializationPartial />} />
                    </Route>
                    {/* DERMATOLOGIA */}
                    <Route path='/treatment/dermatology/badanie-znamion-barwnikowych' element={<TreatmentBadanieZnamionBarwnikowychPartial />} />
                    <Route path='/treatment/dermatology/fototerapia-chorob-skory' element={<TreatmentFototerapiaChorobSkoryPartial />} />
                    <Route path='/treatment/dermatology/usuniecie-zmian-skornych-elektrochirurgiczne' element={<TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial />} />

                    {/* MEDYCYNA ESTETYCZNA */}
                    <Route path='/treatment/aesthetic-medicine/toksyna-botulinowa' element={<TreatmentToksynaBotulinowaPartial />} />
                    <Route path='/treatment/aesthetic-medicine/stymulatory-tkankowe' element={<TreatmentStymulatoryTkankowePartial />} />
                    <Route path='/treatment/aesthetic-medicine/osocze-bogatopłytkowe' element={<TreatmentOsoczeBogatopłytkowePartial />} />
                    <Route path='/treatment/aesthetic-medicine/mezoterapia-iglowa' element={<TreatmentMezoterapiaIglowaPartial />} />
                    <Route path='/treatment/aesthetic-medicine/nici-rewitalizujace-i-liftingujace' element={<TreatmentNiciRewitalizujaceILiftingujacePartial />} />
                    <Route path='/treatment/aesthetic-medicine/laser-frakcyjny' element={<TreatmentLaserFrakcyjnyPartial />} />
                    <Route path='/treatment/aesthetic-medicine/zamykanie-naczynek-i-likwidacja-przebarwien' element={<TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial />} />

                    {/* KOSMETOLOGIA */}
                    <Route path='/treatment/cosmetology/peeling-medyczny' element={<TreatmentPeelingMedycznyPartial />} />
                    <Route path='/treatment/cosmetology/epilacja-laserowa' element={<TreatmentEpilacjaLaserowaPartial />} />
                    <Route path='/treatment/cosmetology/masaz-prozniowy' element={<TreatmentMasazProzniowyPartial />} />
                    <Route path='/treatment/cosmetology/ultradzwieki-i-fala-radiowa' element={<TreatmentUltradzwiekiIFalaRadiowaPartial />} />

                    {/* FIZJOTERAPIA */}
                    <Route path='/treatment/physioterapy/rehabilitacja' element={<TreatmentRehabilitacjaPartial />} />
                    <Route path='/treatment/physioterapy/masaz' element={<TreatmentMasazPartial />} />
                    <Route path='/treatment/physioterapy/kinesiotaping' element={<TreatmentKinesiotapingPartial />} />

                    {/* ALERGOLOGIA */}
                    <Route path='/treatment/allergology/testy-skorne' element={<TreatmentTestySkornePartial />} />
                    <Route path='/treatment/allergology/platkowe-testy-kontaktowe' element={<TreatmentPlatkoweTestyKontaktowePartial />} />
                    <Route path='/treatment/allergology/odczulanie' element={<TreatmentOdczulaniePartial />} />

                    {/* CHIRURGIA NACZYNIOWA */}
                    <Route path='/treatment/vascular-surgery/skleroterapia' element={<TreatmentSkleroterapiaPartial />} />
                    <Route path='/treatment/vascular-surgery/laserowe-usuwanie-zylakow' element={<TreatmentLaseroweUsuwanieZylakowPartial />} />

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
                        <Route path='/prices/cardiology' element={<PricesCardiologyPartial />} />
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
