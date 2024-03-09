import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import ScrollArrow from '../components/ScrollArrow';
import HeaderSection from '../sections/HeaderSection';
import FooterSection from '../sections/FooterSection';


// HOME
import HomeView from './HomeView';


// KLINIKA
import ClinicView from './ClinicView';
import ClinicRegulationPartial from './partials/clinic/ClinicRegulationPartial';


// SPECJALIZACJE
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
import ServicesPsychiatryPartial from './partials/services/ServicesPsychiatryPartial';


// ZABIEGI
import TreatmentView from './TreatmentView';
import TreatmentListPartial from './partials/treatment/TreatmentListPartial';

// dermatologia
import TreatmentBadanieZnamionBarwnikowychPartial from './partials/treatment/dermatology/TreatmentBadanieZnamionBarwnikowychPartial';
import TreatmentFototerapiaChorobSkoryPartial from './partials/treatment/dermatology/TreatmentFototerapiaChorobSkoryPartial';
import TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial from './partials/treatment/dermatology/TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial';

// medycyna estetyczna
import TreatmentModelowanieUstPartial from './partials/treatment/aestheticMedicine/TreatmentModelowanieUstPartial';
import TreatmentToksynaBotulinowaPartial from './partials/treatment/aestheticMedicine/TreatmentToksynaBotulinowaPartial';
import TreatmentStymulatoryTkankowePartial from './partials/treatment/aestheticMedicine/TreatmentStymulatoryTkankowePartial';
import TreatmentOsoczeBogatoplytkowePartial from './partials/treatment/aestheticMedicine/TreatmentOsoczeBogatoplytkowePartial';
import TreatmentLaserFrakcyjnyPartial from './partials/treatment/aestheticMedicine/TreatmentLaserFrakcyjnyPartial';
import TreatmentNiciRewitalizujaceILiftingujacePartial from './partials/treatment/aestheticMedicine/TreatmentNiciRewitalizujaceILiftingujacePartial';
import TreatmentMezoterapiaIglowaPartial from './partials/treatment/aestheticMedicine/TreatmentMezoterapiaIglowaPartial';
import TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial from './partials/treatment/aestheticMedicine/TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial';
import TreatmentSonoQueenTechnologiaHifuPartial from './partials/treatment/aestheticMedicine/TreatmentSonoQueenTechnologiaHifuPartial';

// kosmetologia
import TreatmentPeelingMedycznyPartial from './partials/treatment/cosmetology/TreatmentPeelingMedycznyPartial';
import TreatmentEpilacjaLaserowaPartial from './partials/treatment/cosmetology/TreatmentEpilacjaLaserowaPartial';
import TreatmentMasazProzniowyPartial from './partials/treatment/cosmetology/TreatmentMasazProzniowyPartial';
import TreatmentUltradzwiekiIFalaRadiowaPartial from './partials/treatment/cosmetology/TreatmentUltradzwiekiIFalaRadiowaPartial';

// fizjoterapia
import TreatmentRehabilitacjaPartial from './partials/treatment/physioterapy/TreatmentRehabilitacjaPartial';
import TreatmentMasazPartial from './partials/treatment/physioterapy/TreatmentMasazPartial';
import TreatmentKinesiotapingPartial from './partials/treatment/physioterapy/TreatmentKinesiotapingPartial';

// chirurgia plastyczna
import TreatmentPlastykaPowiekPartial from './partials/treatment/cosmeticSurgery/TreatmentPlastykaPowiekPartial';

// alergologia
import TreatmentTestySkornePartial from './partials/treatment/allergology/TreatmentTestySkornePartial';
import TreatmentPlatkoweTestyKontaktowePartial from './partials/treatment/allergology/TreatmentPlatkoweTestyKontaktowePartial';
import TreatmentOdczulaniePartial from './partials/treatment/allergology/TreatmentOdczulaniePartial';

// chirurgia naczyniowa
import TreatmentSkleroterapiaPartial from './partials/treatment/vascularSurgery/TreatmentSkleroterapiaPartial';
import TreatmentLaseroweUsuwanieZylakowPartial from './partials/treatment/vascularSurgery/TreatmentLaseroweUsuwanieZylakowPartial';

// kardiologia
import TreatmentEchoSercaPartial from './partials/treatment/cardiology/TreatmentEchoSercaPartial';

// psychiatria
import TreatmentBadanieAdos2Partial from './partials/treatment/psychiatry/TreatmentBadanieAdos2Partial';

// CENNIK
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
import PricesPsychiatryPartial from './partials/prices/PricesPsychiatryPartial';


// PROMOCJE
import SpecialOfferView from './SpecialOfferView';


// SPECJALIŚCI
// import TeamView from './TeamView';
// import TeamSpecializationPartial from './partials/team/TeamSpecializationPartial';
// import TeamSpecialistPartial from './partials/team/TeamSpecialistPartial';
import TeamView2 from './TeamView2';
import SpecialistsListPartial from './partials/team/SpecialistsListPartial';
import SpecialistsDetailsPartial from './partials/team/SpecialistsDetailsPartial';


// TECHNOLOGIA
// import TechnologyView from './TechnologyView';
// import TechnologyVectusPartial from './partials/technology/TechnologyVectusPartial';
// import TechnologyAlmaHarmonyXlProPartial from './partials/technology/TechnologyAlmaHarmonyXlProPartial';
// import TechnologyIcooneLaserMed2Partial from './partials/technology/TechnologyIcooneLaserMed2Partial';
// import TechnologyFonsSvrFractionLaserCo2Partial from './partials/technology/TechnologyFonsSvrFractionLaserCo2Partial';
// import TechnologyAlmaAccentUltraVShapePartial from './partials/technology/TechnologyAlmaAccentUltraVShapePartial';
// import TechnologyFotoFinderDermoscopeVexiaPartial from './partials/technology/TechnologyFotoFinderDermoscopeVexiaPartial';
// import TechnologyBiolitecLeonardoMiniPartial from './partials/technology/TechnologyBiolitecLeonardoMiniPartial';
// import TechnologyHettichArthrexAcpPartial from './partials/technology/TechnologyHettichArthrexAcpPartial';
// import TechnologyPhilipsUltrasonografAffiniti50Partial from './partials/technology/TechnologyPhilipsUltrasonografAffiniti50Partial';
// import TechnologySonoQueenPartial from './partials/technology/TechnologySonoQueenPartial';
// import TechnologyDermalight500Partial from './partials/technology/TechnologyDermalight500Partial';
// import TechnologyDermalight1000UvaUvb311nmPartial from './partials/technology/TechnologyDermalight1000UvaUvb311nmPartial';

// KARIERA
import CareerView from './CareerView';
import CareerDetailsPartial from './partials/career/CareerDetailsPartial';
import CareerApplicationPartial from './partials/career/CareerApplicationPartial';

// KONTAKT
import ContactView from './ContactView';


import Modal from '../components/Modal';
import Toast from '../components/Toast';

const Root = () => (
    <MainTemplate>
        <Router>
            <HeaderSection />
            <main>
                <Routes>
                    {/* HOME */}
                    <Route exact path='/' element={<HomeView />} />
                    <Route exact path='/drninawisniewska/' element={<HomeView main />} />
                    <Route exact path='https://drninawisniewska.pl' element={<HomeView />} />


                    {/* KLINIKA */}
                    <Route path='/clinic' element={<ClinicView />} />
                    <Route path='/clinic/regulation' element={<ClinicRegulationPartial />} />


                    {/* SPECJALIZACJE */}
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
                    <Route path='/services/psychiatry' element={<ServicesPsychiatryPartial />} />


                    {/* ZABIEGI */}
                    <Route path='/treatment' element={<TreatmentView />}>
                        <Route path=':specialization' element={<TreatmentListPartial />} />
                    </Route>

                    {/* dermatologia */}
                    <Route path='/treatment/dermatology/badanie-znamion-barwnikowych' element={<TreatmentBadanieZnamionBarwnikowychPartial />} />
                    <Route path='/treatment/dermatology/fototerapia-chorob-skory' element={<TreatmentFototerapiaChorobSkoryPartial />} />
                    <Route path='/treatment/dermatology/usuniecie-zmian-skornych-elektrochirurgiczne' element={<TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial />} />

                    {/* medycyna estetyczna */}
                    <Route path='/treatment/aesthetic-medicine/modelowanie-ust' element={<TreatmentModelowanieUstPartial />} />
                    <Route path='/treatment/aesthetic-medicine/toksyna-botulinowa' element={<TreatmentToksynaBotulinowaPartial />} />
                    <Route path='/treatment/aesthetic-medicine/stymulatory-tkankowe' element={<TreatmentStymulatoryTkankowePartial />} />
                    <Route path='/treatment/aesthetic-medicine/osocze-bogatoplytkowe' element={<TreatmentOsoczeBogatoplytkowePartial />} />
                    <Route path='/treatment/aesthetic-medicine/laser-frakcyjny' element={<TreatmentLaserFrakcyjnyPartial />} />
                    <Route path='/treatment/aesthetic-medicine/nici-rewitalizujace-i-liftingujace' element={<TreatmentNiciRewitalizujaceILiftingujacePartial />} />
                    <Route path='/treatment/aesthetic-medicine/mezoterapia-iglowa' element={<TreatmentMezoterapiaIglowaPartial />} />
                    <Route path='/treatment/aesthetic-medicine/zamykanie-naczynek-i-likwidacja-przebarwien' element={<TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial />} />
                    <Route path='/treatment/aesthetic-medicine/sonoqueen-technologia-hifu' element={<TreatmentSonoQueenTechnologiaHifuPartial />} />

                    {/* kosmetologia */}
                    <Route path='/treatment/cosmetology/peeling-medyczny' element={<TreatmentPeelingMedycznyPartial />} />
                    <Route path='/treatment/cosmetology/epilacja-laserowa' element={<TreatmentEpilacjaLaserowaPartial />} />
                    <Route path='/treatment/cosmetology/masaz-prozniowy' element={<TreatmentMasazProzniowyPartial />} />
                    <Route path='/treatment/cosmetology/ultradzwieki-i-fala-radiowa' element={<TreatmentUltradzwiekiIFalaRadiowaPartial />} />

                    {/* fizjoterapia */}
                    <Route path='/treatment/physioterapy/rehabilitacja' element={<TreatmentRehabilitacjaPartial />} />
                    <Route path='/treatment/physioterapy/masaz' element={<TreatmentMasazPartial />} />
                    <Route path='/treatment/physioterapy/kinesiotaping' element={<TreatmentKinesiotapingPartial />} />

                    {/* chirurgia plastyczna */}
                    <Route path='/treatment/cosmetic-surgery/plastyka-powiek' element={<TreatmentPlastykaPowiekPartial />} />

                    {/* alergologia */}
                    <Route path='/treatment/allergology/testy-skorne' element={<TreatmentTestySkornePartial />} />
                    <Route path='/treatment/allergology/platkowe-testy-kontaktowe' element={<TreatmentPlatkoweTestyKontaktowePartial />} />
                    <Route path='/treatment/allergology/odczulanie' element={<TreatmentOdczulaniePartial />} />

                    {/* chirurgia naczyniowa */}
                    <Route path='/treatment/vascular-surgery/skleroterapia' element={<TreatmentSkleroterapiaPartial />} />
                    <Route path='/treatment/vascular-surgery/laserowe-usuwanie-zylakow' element={<TreatmentLaseroweUsuwanieZylakowPartial />} />

                    {/* kardiologia */}
                    <Route path='/treatment/cardiology/echo-serca' element={<TreatmentEchoSercaPartial />} />

                    {/* psychiatria */}
                    <Route path='/treatment/psychiatry/badanie-ados-2' element={<TreatmentBadanieAdos2Partial />} />


                    {/* CENNIK */}
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
                        <Route path='/prices/psychiatry' element={<PricesPsychiatryPartial />} />
                    </Route>


                    {/* PROMOCJE */}
                    <Route path='/special-offer' element={<SpecialOfferView />} />
                    {/* <Route path='/team' element={<TeamView />}>
                        <Route path=':specialization' element={<TeamSpecializationPartial />} />
                    </Route>
                    <Route path='team/:specialization/:specialist' element={<TeamSpecialistPartial />} /> */}


                    {/* SPECJALIŚCI */}
                    <Route path='/team' element={<TeamView2 />}>
                        <Route path=':specialization' element={<SpecialistsListPartial />} />
                    </Route>
                    <Route path='team/:specialization/:specialist' element={<SpecialistsDetailsPartial />} />


                    {/* TECHNOLOGIA */}
                    {/* <Route path='/technology' element={<TechnologyView />} />
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
                    <Route path='/technology/dermalight-1000-uva-uvb-311nm' element={<TechnologyDermalight1000UvaUvb311nmPartial />} /> */}

                    {/* KARIERA */}
                    <Route path='/career' element={<CareerView />} />
                    <Route path='career/:profession' element={<CareerDetailsPartial />} />
                    <Route path='career/:profession/application' element={<CareerApplicationPartial />} />

                    {/* KONTAKT */}
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
