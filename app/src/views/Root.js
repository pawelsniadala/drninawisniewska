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
import ServicesCosmeticSurgeryPartial from './partials/services/ServicesCosmeticSurgeryPartial';
import ServicesAllergologyPartial from './partials/services/ServicesAllergologyPartial';
import ServicesUsgPartial from './partials/services/ServicesUsgPartial';
// import ServicesEndocrinologyPartial from './partials/services/ServicesEndocrinologyPartial';
import ServicesGynecologyPartial from './partials/services/ServicesGynecologyPartial';
import ServicesVascularSurgeryPartial from './partials/services/ServicesVascularSurgeryPartial';
import ServicesClinicalDietitianPartial from './partials/services/ServicesClinicalDietitianPartial';
import ServicesCardiologyPartial from './partials/services/ServicesCardiologyPartial';
import ServicesPsychiatryPartial from './partials/services/ServicesPsychiatryPartial';
import ServicesPsychologyPartial from './partials/services/ServicesPsychologyPartial';

// ZABIEGI
import TreatmentView from './TreatmentView';
// import TreatmentListPartial from './partials/treatment/TreatmentListPartial';

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
import TreatmentMezoterapiaMikroiglowaPartial from './partials/treatment/cosmetology/TreatmentMezoterapiaMikroiglowaPartial';

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
// import PricesDermatologyPartial from './partials/prices/PricesDermatologyPartial';
// import PricesAestheticMedicinePartial from './partials/prices/PricesAestheticMedicinePartial';
// import PricesCosmetologyPartial from './partials/prices/PricesCosmetologyPartial';
// import PricesCosmeticSurgeryPartial from './partials/prices/PricesCosmeticSurgeryPartial';
// import PricesAllergologyPartial from './partials/prices/PricesAllergologyPartial';
// import PricesUsgPartial from './partials/prices/PricesUsgPartial';
// import PricesEndocrinologyPartial from './partials/prices/PricesEndocrinologyPartial';
// import PricesGynecologyPartial from './partials/prices/PricesGynecologyPartial';
// import PricesVascularSurgeryPartial from './partials/prices/PricesVascularSurgeryPartial';
// import PricesClinicalDietitianPartial from './partials/prices/PricesClinicalDietitianPartial';
// import PricesCardiologyPartial from './partials/prices/PricesCardiologyPartial';
// import PricesPsychiatryPartial from './partials/prices/PricesPsychiatryPartial';
// import PricesPsychologyPartial from './partials/prices/PricesPsychologyPartial';


// PROMOCJE
import SpecialOfferView from './SpecialOfferView';


// SPECJALIŚCI
import TeamView from './TeamView';
// import SpecialistsListPartial from './partials/team/SpecialistsListPartial';
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
                    <Route path='/klinika' element={<ClinicView />} />
                    <Route path='/klinika/regulamin-organizacyjny' element={<ClinicRegulationPartial />} />


                    {/* SPECJALIZACJE */}
                    <Route exact path='/specjalizacje' element={<ServicesView />} />
                    <Route path="/specjalizacje/dermatologia" element={<ServicesDermatologyPartial />} />
                    <Route path="/specjalizacje/medycyna-estetyczna" element={<ServicesAestheticMedicinePartial />} />
                    <Route path='/specjalizacje/kosmetologia' element={<ServicesCosmetologyPartial />} />
                    <Route path='/specjalizacje/chirurgia-plastyczna' element={<ServicesCosmeticSurgeryPartial />} />
                    <Route path='/specjalizacje/alergologia' element={<ServicesAllergologyPartial />} />
                    <Route path='/specjalizacje/usg' element={<ServicesUsgPartial />} />
                    {/* <Route path='/specjalizacje/endokrynologia' element={<ServicesEndocrinologyPartial />} /> */}
                    <Route path='/specjalizacje/ginekologia' element={<ServicesGynecologyPartial />} />
                    <Route path='/specjalizacje/chirurgia-naczyniowa' element={<ServicesVascularSurgeryPartial />} />
                    <Route path='/specjalizacje/dietetyka-kliniczna' element={<ServicesClinicalDietitianPartial />} />
                    <Route path='/specjalizacje/kardiologia' element={<ServicesCardiologyPartial />} />
                    <Route path='/specjalizacje/psychiatria' element={<ServicesPsychiatryPartial />} />
                    <Route path='/specjalizacje/psychologia' element={<ServicesPsychologyPartial />} />


{/* ZABIEGI */}
<Route path="/zabiegi" element={<TreatmentView />} />
<Route
  path="/zabiegi/medycyna-estetyczna"
  element={<TreatmentView />}
/>
<Route
  path="/zabiegi/kosmetologia"
  element={<TreatmentView />}
/>
<Route
  path="/zabiegi/chirurgia-plastyczna"
  element={<TreatmentView />}
/>
<Route
  path="/zabiegi/alergologia"
  element={<TreatmentView />}
/>
<Route
  path="/zabiegi/chirurgia-naczyniowa"
  element={<TreatmentView />}
/>
<Route
  path="/zabiegi/kardiologia"
  element={<TreatmentView />}
/>
<Route
  path="/zabiegi/psychiatria"
  element={<TreatmentView />}
/>

{/* dermatologia */}
<Route
  path="/zabiegi/dermatologia/badanie-znamion-barwnikowych"
  element={<TreatmentBadanieZnamionBarwnikowychPartial />}
/>
<Route
  path="/zabiegi/dermatologia/fototerapia-chorob-skory"
  element={<TreatmentFototerapiaChorobSkoryPartial />}
/>
<Route
  path="/zabiegi/dermatologia/usuniecie-zmian-skornych-elektrochirurgiczne"
  element={<TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial />}
/>

{/* medycyna estetyczna */}
<Route
  path="/zabiegi/medycyna-estetyczna/modelowanie-ust"
  element={<TreatmentModelowanieUstPartial />}
/>
<Route
  path="/zabiegi/medycyna-estetyczna/toksyna-botulinowa"
  element={<TreatmentToksynaBotulinowaPartial />}
/>
<Route
  path="/zabiegi/medycyna-estetyczna/stymulatory-tkankowe"
  element={<TreatmentStymulatoryTkankowePartial />}
/>
<Route
  path="/zabiegi/medycyna-estetyczna/osocze-bogatoplytkowe"
  element={<TreatmentOsoczeBogatoplytkowePartial />}
/>
<Route
  path="/zabiegi/medycyna-estetyczna/laser-frakcyjny"
  element={<TreatmentLaserFrakcyjnyPartial />}
/>
<Route
  path="/zabiegi/medycyna-estetyczna/nici-rewitalizujace-i-liftingujace"
  element={<TreatmentNiciRewitalizujaceILiftingujacePartial />}
/>
<Route
  path="/zabiegi/medycyna-estetyczna/mezoterapia-iglowa"
  element={<TreatmentMezoterapiaIglowaPartial />}
/>
<Route
  path="/zabiegi/medycyna-estetyczna/zamykanie-naczynek-i-likwidacja-przebarwien"
  element={<TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial />}
/>
<Route
  path="/zabiegi/medycyna-estetyczna/sonoqueen-technologia-hifu"
  element={<TreatmentSonoQueenTechnologiaHifuPartial />}
/>

{/* kosmetologia */}
<Route
  path="/zabiegi/kosmetologia/peeling-medyczny"
  element={<TreatmentPeelingMedycznyPartial />}
/>
<Route
  path="/zabiegi/kosmetologia/epilacja-laserowa"
  element={<TreatmentEpilacjaLaserowaPartial />}
/>
<Route
  path="/zabiegi/kosmetologia/masaz-prozniowy"
  element={<TreatmentMasazProzniowyPartial />}
/>
<Route
  path="/zabiegi/kosmetologia/ultradzwieki-i-fala-radiowa"
  element={<TreatmentUltradzwiekiIFalaRadiowaPartial />}
/>
<Route
  path="/zabiegi/kosmetologia/mezoterapia-mikroiglowa"
  element={<TreatmentMezoterapiaMikroiglowaPartial />}
/>

{/* chirurgia plastyczna */}
<Route
  path="/zabiegi/chirurgia-plastyczna/plastyka-powiek"
  element={<TreatmentPlastykaPowiekPartial />}
/>

{/* alergologia */}
<Route
  path="/zabiegi/alergologia/testy-skorne"
  element={<TreatmentTestySkornePartial />}
/>
<Route
  path="/zabiegi/alergologia/platkowe-testy-kontaktowe"
  element={<TreatmentPlatkoweTestyKontaktowePartial />}
/>
<Route
  path="/zabiegi/alergologia/odczulanie"
  element={<TreatmentOdczulaniePartial />}
/>

{/* chirurgia naczyniowa */}
<Route
  path="/zabiegi/chirurgia-naczyniowa/skleroterapia"
  element={<TreatmentSkleroterapiaPartial />}
/>
<Route
  path="/zabiegi/chirurgia-naczyniowa/laserowe-usuwanie-zylakow"
  element={<TreatmentLaseroweUsuwanieZylakowPartial />}
/>

{/* kardiologia */}
<Route
  path="/zabiegi/kardiologia/echo-serca"
  element={<TreatmentEchoSercaPartial />}
/>

{/* psychiatria */}
<Route
  path="/zabiegi/psychiatria/badanie-ados-2"
  element={<TreatmentBadanieAdos2Partial />}
/>


{/* CENNIK */}
<Route
  path="/cennik"
  element={<PricesView />}
/>

<Route
  path="/cennik/medycyna-estetyczna"
  element={<PricesView />}
/>

<Route
  path="/cennik/kosmetologia"
  element={<PricesView />}
/>

<Route
  path="/cennik/chirurgia-plastyczna"
  element={<PricesView />}
/>

<Route
  path="/cennik/alergologia"
  element={<PricesView />}
/>

<Route
  path="/cennik/usg"
  element={<PricesView />}
/>

<Route
  path="/cennik/endokrynologia"
  element={<PricesView />}
/>

<Route
  path="/cennik/ginekologia"
  element={<PricesView />}
/>

<Route
  path="/cennik/chirurgia-naczyniowa"
  element={<PricesView />}
/>

<Route
  path="/cennik/dietetyka-kliniczna"
  element={<PricesView />}
/>

<Route
  path="/cennik/kardiologia"
  element={<PricesView />}
/>

<Route
  path="/cennik/psychiatria"
  element={<PricesView />}
/>

<Route
  path="/cennik/psychologia"
  element={<PricesView />}
/>


                    {/* PROMOCJE */}
                    <Route path='/special-offer' element={<SpecialOfferView />} />


{/* SPECJALIŚCI */}
<Route
  path="/specjalisci"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/medycyna-estetyczna"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/kosmetologia"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/chirurgia-plastyczna"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/alergologia"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/usg"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/endokrynologia"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/ginekologia"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/chirurgia-naczyniowa"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/dietetyka-kliniczna"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/kardiologia"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/psychiatria"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/psychologia"
  element={<TeamView />}
/>

<Route
  path="/specjalisci/rejestracja-medyczna"
  element={<TeamView />}
/>

{/* SZCZEGÓŁY SPECJALISTY */}
<Route
  path="/specjalisci/:specialization/:specialist"
  element={<SpecialistsDetailsPartial />}
/>


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
