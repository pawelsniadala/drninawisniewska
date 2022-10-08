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
import TeamWojciechTrojanowskiPartial from './partials/team/TeamWojciechTrojanowskiPartial';
import TeamOlgaLenartowiczWarakomskaPartial from './partials/team/TeamOlgaLenartowiczWarakomskaPartial';
import TeamKatarzynaZbronskaPartial from './partials/team/TeamKatarzynaZbronskaPartial';
import TeamJoannaOjrzenskaPartial from './partials/team/TeamJoannaOjrzenskaPartial';
import TeamAleksandraGorczynskaPartial from './partials/team/TeamAleksandraGorczynskaPartial';
import TeamAnnaKulakowskaPartial from './partials/team/TeamAnnaKulakowskaPartial';
import TeamMiroslawMajewskiPartial from './partials/team/TeamMiroslawMajewskiPartial';
import TeamKamilStepkowskiPartial from './partials/team/TeamKamilStepkowskiPartial';
import TechnologyView from './TechnologyView';
import TechnologyVectusPartial from './partials/technology/TechnologyVectusPartial';
import TechnologyAlmaHarmonyXlProPartial from './partials/technology/TechnologyAlmaHarmonyXlProPartial';
import TechnologyIcooneLaserMed2Partial from './partials/technology/TechnologyIcooneLaserMed2Partial';
import TechnologyFonsSvrFractionLaserCo2Partial from './partials/technology/TechnologyFonsSvrFractionLaserCo2Partial';
import TechnologyAlmaAccentUltraVShapePartial from './partials/technology/TechnologyAlmaAccentUltraVShapePartial';
import TechnologyAlmaAccentPrimePartial from './partials/technology/TechnologyAlmaAccentPrimePartial';
import TechnologySonoQueenPartial from './partials/technology/TechnologySonoQueenPartial';
import ContactView from './ContactView';

const Root = () => (
    <MainTemplate>
        <Router>
            <HeaderSection />
            <main>
                <Routes>
                    <Route exact path='/' element={<HomeView />} />
                    <Route exact path='/drninawisniewska/' element={<HomeView />} />
                    <Route path='/clinic' element={<ClinicView />} />
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
                    <Route path='/team' element={<TeamView />} />
                    <Route path='/team/nina-wisniewska' element={<TeamNinaWisniewskaPartial />} />
                    <Route path='/team/justyna-filipek' element={<TeamJustynaFilipekPartial />} />
                    <Route path='/team/paulina-budna' element={<TeamPaulinaBudnaPartial />} />
                    <Route path='/team/konrad-kochan' element={<TeamKonradKochanPartial />} />
                    <Route path='/team/wojciech-kaszewski' element={<TeamWojciechKaszewskiPartial />} />
                    <Route path='/team/klaudia-malottki' element={<TeamKlaudiaMalottkiPartial />} />
                    <Route path='/team/katarzyna-mysliwiec-czajka' element={<TeamKatarzynaMysliwiecCzajkaPartial />} />
                    <Route path='/team/justyna-kloniecka' element={<TeamJustynaKlonieckaPartial />} />
                    <Route path='/team/aldona-maciag' element={<TeamAldonaMaciagPartial />} />
                    <Route path='/team/milena-juzwiak' element={<TeamMilenaJuzwiakPartial />} />
                    <Route path='/team/paulina-tatara' element={<TeamPaulinaTataraPartial />} />
                    <Route path='/team/tomasz-matuszewski' element={<TeamTomaszMatuszewskiPartial />} />
                    <Route path='/team/wojciech-trojanowski' element={<TeamWojciechTrojanowskiPartial />} />
                    <Route path='/team/olga-lenartowicz-warakomska' element={<TeamOlgaLenartowiczWarakomskaPartial />} />
                    <Route path='/team/katarzyna-zbronska' element={<TeamKatarzynaZbronskaPartial />} />
                    <Route path='/team/joanna-ojrzenska' element={<TeamJoannaOjrzenskaPartial />} />
                    <Route path='/team/aleksandra-gorczynska' element={<TeamAleksandraGorczynskaPartial />} />
                    <Route path='/team/anna-kulakowska' element={<TeamAnnaKulakowskaPartial />} />
                    <Route path='/team/miroslaw-majewski' element={<TeamMiroslawMajewskiPartial />} />
                    <Route path='/team/kamil-stepkowski' element={<TeamKamilStepkowskiPartial />} />
                    <Route path='/technology' element={<TechnologyView />} />
                    <Route path='/technology/vectus' element={<TechnologyVectusPartial />} />
                    <Route path='/technology/alma-harmony-xl-pro' element={<TechnologyAlmaHarmonyXlProPartial />} />
                    <Route path='/technology/icoone-laser-med2' element={<TechnologyIcooneLaserMed2Partial />} />
                    <Route path='/technology/fons-svr-fraction-laser-co2' element={<TechnologyFonsSvrFractionLaserCo2Partial />} />
                    <Route path='/technology/alma-accent-ultra-v-shape' element={<TechnologyAlmaAccentUltraVShapePartial />} />
                    <Route path='/technology/alma-accent-prime' element={<TechnologyAlmaAccentPrimePartial />} />
                    <Route path='/technology/sono-queen' element={<TechnologySonoQueenPartial />} />
                    <Route path='/contact' element={<ContactView />} />
                </Routes>
            </main>
            <FooterSection />
            <ScrollArrow />
        </Router>
    </MainTemplate>
);

export default Root;
