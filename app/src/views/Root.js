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
import PricesEndocrinologyPartials from './partials/prices/PricesEndocrinologyPartials';
import PricesGynecologyPartials from './partials/prices/PricesGynecologyPartials';
import PricesOrthopedicsPartials from './partials/prices/PricesOrthopedicsPartials';
import PricesVascularSurgeryPartials from './partials/prices/PricesVascularSurgeryPartials';
import PricesClinicalDietitianPartials from './partials/prices/PricesClinicalDietitianPartials';
import SpecialOfferView from './SpecialOfferView';
import TeamView from './TeamView';
import TeamNinaWisniewskaPartial from './partials/team/TeamNinaWisniewskaPartial';
import TeamJustynaFilipekPartial from './partials/team/TeamJustynaFilipekPartial';
import TeamPaulinaBudnaPartial from './partials/team/TeamPaulinaBudnaPartial';
import TeamKonradKochanPartial from './partials/team/TeamKonradKochanPartial';
import TeamWojciechKaszewskiPartial from './partials/team/TeamWojciechKaszewskiPartial';
import TeamKlaudiaMalottkiPartial from './partials/team/TeamKlaudiaMalottkiPartial';
import TeamKatarzynaMysliwiecCzajkaPartial from './partials/team/TeamKatarzynaMysliwiecCzajkaPartial';
import TeamJustynaKlonieckaPartial from './partials/team/TeamJustynaKlonieckaPartial';
import TeamAldonaMaciagPartial from './partials/team/TeamAldonaMaciagPartial';
import TeamMilenaJuzwiakPartial from './partials/team/TeamMilenaJuzwiakPartial';
import TeamPaulinaTataraPartial from './partials/team/TeamPaulinaTataraPartial';
import TeamTomaszMatuszewskiPartial from './partials/team/TeamTomaszMatuszewskiPartial';
import TeamOlgaLenartowiczWarakomskaPartial from './partials/team/TeamOlgaLenartowiczWarakomskaPartial';
import TeamKatarzynaZbronskaPartial from './partials/team/TeamKatarzynaZbronskaPartial';
import TeamJoannaOjrzenskaPartial from './partials/team/TeamJoannaOjrzenskaPartial';
import TeamAleksandraGorczynskaPartial from './partials/team/TeamAleksandraGorczynskaPartial';
import TeamKamilStepkowskiPartial from './partials/team/TeamKamilStepkowskiPartial';
import TeamKatarzynaRychlikPartial from './partials/team/TeamKatarzynaRychlikPartial';
import TeamPatrykKrokwinskiPartial from './partials/team/TeamPatrykKrokwinskiPartial';
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
                    <Route exact path='/' element={<HomeView main />} />
                    <Route exact path='/drninawisniewska/' element={<HomeView main />} />
                    <Route path='/clinic' element={<ClinicView title='Klinika' />} />
                    <Route exact path='/services' element={<ServicesView title='Specjalizacje' />} />
                    <Route path='/services/dermatology' element={<ServicesDermatologyPartial title='Dermatologia' />} />
                    <Route path='/services/aesthetic-medicine' element={<ServicesAestheticMedicinePartial title='Medycyna estetyczna' />} />
                    <Route path='/services/hematology' element={<ServicesHematologyPartial title='Hematologia' />} />
                    <Route path='/services/cosmetology' element={<ServicesCosmetologyPartial title='Kosmetologia' />} />
                    <Route path='/services/physioterapy' element={<ServicesPhysioterapyPartial title='Fizjoterapia' />} />
                    <Route path='/services/cosmetic-surgery' element={<ServicesCosmeticSurgeryPartial title='Chirurgia plastyczna' />} />
                    <Route path='/services/allergology' element={<ServicesAllergologyPartial title='Alergologia' />} />
                    <Route path='/services/usg' element={<ServicesUsgPartial title='USG' />} />
                    <Route path='/services/endocrinology' element={<ServicesEndocrinologyPartial title='Endokrynologia' />} />
                    <Route path='/services/gynecology' element={<ServicesGynecologyPartial title='Ginekologia' />} />
                    <Route path='/services/orthopedics' element={<ServicesOrthopedicsPartial title='Ortopedia' />} />
                    <Route path='/services/vascular-surgery' element={<ServicesVascularSurgeryPartial title='Chirurgia naczyniowa' />} />
                    <Route path='/services/clinical-dietitian' element={<ServicesClinicalDietitianPartial title='Dietetyka Kliniczna' />} />
                    <Route path='/prices' element={<PricesView title='Cennik' />}>
                        <Route path='/prices' element={<PricesDermatologyPartials />} />
                        <Route path='/prices/aesthetic-medicine' element={<PricesAestheticMedicinePartials />} />
                        <Route path='/prices/hematology' element={<PricesHematologyPartials />} />
                        <Route path='/prices/cosmetology' element={<PricesCosmetologyPartials />} />
                        <Route path='/prices/physioterapy' element={<PricesPhysioterapyPartials />} />
                        <Route path='/prices/cosmetic-surgery' element={<PricesCosmeticSurgeryPartials />} />
                        <Route path='/prices/allergology' element={<PricesAllergologyPartials />} />
                        <Route path='/prices/usg' element={<PricesUsgPartials />} />
                        <Route path='/prices/endocrinology' element={<PricesEndocrinologyPartials />} />
                        <Route path='/prices/gynecology' element={<PricesGynecologyPartials />} />
                        <Route path='/prices/orthopedics' element={<PricesOrthopedicsPartials />} />
                        <Route path='/prices/vascular-surgery' element={<PricesVascularSurgeryPartials />} />
                        <Route path='/prices/clinical-dietitian' element={<PricesClinicalDietitianPartials />} />
                    </Route>
                    <Route path='/special-offer' element={<SpecialOfferView title='Promocje' />} />
                    <Route path='/team' element={<TeamView title='Zespół' />} />
                    <Route path='/team/nina-wisniewska' element={<TeamNinaWisniewskaPartial title='Nina Wiśniewska' />} />
                    <Route path='/team/justyna-filipek' element={<TeamJustynaFilipekPartial title='Justyna Filipek' />} />
                    <Route path='/team/paulina-budna' element={<TeamPaulinaBudnaPartial title='Paulina Budna' />} />
                    <Route path='/team/konrad-kochan' element={<TeamKonradKochanPartial title='Konrad Kochan' />} />
                    <Route path='/team/wojciech-kaszewski' element={<TeamWojciechKaszewskiPartial title='Wojciech Kaszewski' />} />
                    <Route path='/team/klaudia-malottki' element={<TeamKlaudiaMalottkiPartial title='Klaudia Malottki' />} />
                    <Route path='/team/katarzyna-mysliwiec-czajka' element={<TeamKatarzynaMysliwiecCzajkaPartial title='Katarzyna Myśliwiec-Czajka' />} />
                    <Route path='/team/justyna-kloniecka' element={<TeamJustynaKlonieckaPartial title='Justyna Kłoniecka' />} />
                    <Route path='/team/aldona-maciag' element={<TeamAldonaMaciagPartial title='Aldona Maciąg' />} />
                    <Route path='/team/milena-juzwiak' element={<TeamMilenaJuzwiakPartial title='Milena Juźwiak' />} />
                    <Route path='/team/paulina-tatara' element={<TeamPaulinaTataraPartial title='Paulina Tatara' />} />
                    <Route path='/team/tomasz-matuszewski' element={<TeamTomaszMatuszewskiPartial title='Tomasz Matuszewski' />} />
                    <Route path='/team/olga-lenartowicz-warakomska' element={<TeamOlgaLenartowiczWarakomskaPartial title='Olga Lenartowicz-Warakomska' />} />
                    <Route path='/team/katarzyna-zbronska' element={<TeamKatarzynaZbronskaPartial title='Katarzyna Zbrońska' />} />
                    <Route path='/team/joanna-ojrzenska' element={<TeamJoannaOjrzenskaPartial title='Joanna Ojrzeńska' />} />
                    <Route path='/team/aleksandra-gorczynska' element={<TeamAleksandraGorczynskaPartial title='Aleksandra Górczyńska' />} />
                    <Route path='/team/kamil-stepkowski' element={<TeamKamilStepkowskiPartial title='Kamil Stępkowski' />} />
                    <Route path='/team/katarzyna-rychlik' element={<TeamKatarzynaRychlikPartial title='Katarzyna Rychlik' />} />
                    <Route path='/team/patryk-krokwinski' element={<TeamPatrykKrokwinskiPartial title='Patryk Krokwiński' />} />
                    <Route path='/technology' element={<TechnologyView title='Technologia' />} />
                    <Route path='/technology/vectus' element={<TechnologyVectusPartial title='Vectus' />} />
                    <Route path='/technology/alma-harmony-xl-pro' element={<TechnologyAlmaHarmonyXlProPartial title='Alma Harmony XL Pro' />} />
                    <Route path='/technology/icoone-laser-med2' element={<TechnologyIcooneLaserMed2Partial title='Icoone Laser Med 2' />} />
                    <Route path='/technology/fons-svr-fraction-laser-co2' element={<TechnologyFonsSvrFractionLaserCo2Partial title='Fons SVR Laser Frakcyjny CO2' />} />
                    <Route path='/technology/alma-accent-ultra-v-shape' element={<TechnologyAlmaAccentUltraVShapePartial title='Alma Accent Ultra V Shape' />} />
                    <Route path='/technology/biolitec-leonardo-mini' element={<TechnologyBiolitecLeonardoMiniPartial title='Biolitec Leonardo Mini' />} />
                    <Route path='/technology/hettich-arthrex-acp' element={<TechnologyHettichArthrexAcpPartial title='Hettich Arthrex ACP' />} />
                    <Route path='/technology/foto-finder-dermoscope-vexia' element={<TechnologyFotoFinderDermoscopeVexiaPartial title='FotoFinder Dermoscope Vexia' />} />
                    <Route path='/technology/philips-ultrasonograf-affiniti-50' element={<TechnologyPhilipsUltrasonografAffiniti50Partial title='Philips Ultrasonograf Affiniti 50' />} />
                    <Route path='/technology/sono-queen' element={<TechnologySonoQueenPartial title='SonoQueen' />} />
                    <Route path='/technology/dermalight-500' element={<TechnologyDermalight500Partial title='Dermalight 500' />} />
                    <Route path='/technology/dermalight-1000-uva-uvb-311nm' element={<TechnologyDermalight1000UvaUvb311nmPartial title='Dermalight 1000 UVA UVB 311nm' />} />
                    <Route path='/contact' element={<ContactView title='Kontakt' />} />
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
