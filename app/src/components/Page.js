import { useEffect, useCallback } from 'react';
import { useLocation  } from 'react-router-dom';

const PageTitle = ({ children }) => {
    const { pathname } = useLocation();
    const companyName = 'Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska';

    const setTitle = useCallback(() => {
        switch(pathname) {
            // HOME
            case '/':
                return companyName;
            // gh-pages
            case '/drninawisniewska/':
                return companyName;


            // KLINIKA
            case '/clinic':
                return `Klinika - ${companyName}`;
            case '/clinic/regulation':
                return `Regulamin organizacyjny - ${companyName}`;


            // SPECJALIZACJE
            case '/services':
                return `Specjalizacje - ${companyName}`;
            case '/services/dermatology':
                return `Dermatologia - ${companyName}`;
            case '/services/aesthetic-medicine':
                return `Medycyna estetyczna - ${companyName}`;
            case '/services/cosmetology':
                return `Kosmetologia - ${companyName}`;
            case '/services/physioterapy':
                return `Fizjoterapia - ${companyName}`;
            case '/services/cosmetic-surgery':
                return `Chirurgia plastyczna - ${companyName}`;
            case '/services/allergology':
                return `Alergologia - ${companyName}`;
            case '/services/usg':
                return `USG - ${companyName}`;
            case '/services/endocrinology':
                return `Endokrynologia - ${companyName}`;
            case '/services/gynecology':
                return `Ginekologia - ${companyName}`;
            case '/services/orthopedics':
                return `Ortopedia - ${companyName}`;
            case '/services/vascular-surgery':
                return `Chirurgia naczyniowa - ${companyName}`;
            case '/services/clinical-dietitian':
                return `Dietetyka Kliniczna - ${companyName}`;
            case '/services/rheumatology':
                return `Reumatologia - ${companyName}`;
            case '/services/cardiology':
                return `Kardiologia - ${companyName}`;
            case '/services/psychiatry':
                return `Psychiatria - ${companyName}`;


            // ZABIEGI
            // dermatologia
            case '/treatment':
                return `Zabiegi - ${companyName}`;
            case '/treatment/dermatology/badanie-znamion-barwnikowych':
                return `Badanie znamion barwnikowych - ${companyName}`;
            case '/treatment/dermatology/fototerapia-chorob-skory':
                return `Fototerapia chorób skóry - ${companyName}`;
            case '/treatment/dermatology/usuniecie-zmian-skornych-elektrochirurgiczne':
                return `Usunięcie zmian skórnych elektrochirurgiczne - ${companyName}`;

            // medycyna estetyczna
            case '/treatment/aesthetic-medicine':
                return `Zabiegi - ${companyName}`;
            case '/treatment/aesthetic-medicine/modelowanie-ust':
                return `Modelowanie ust - ${companyName}`;
            case '/treatment/aesthetic-medicine/toksyna-botulinowa':
                return `Toksyna botulinowa - ${companyName}`;
            case '/treatment/aesthetic-medicine/stymulatory-tkankowe':
                return `Stymulatory tkankowe - ${companyName}`;
            case '/treatment/aesthetic-medicine/osocze-bogatoplytkowe':
                return `Osocze bogatopłytkowe - ${companyName}`;
            case '/treatment/aesthetic-medicine/laser-frakcyjny':
                return `Laser frakcyjny - ${companyName}`;
            case '/treatment/aesthetic-medicine/nici-rewitalizujace-i-liftingujace':
                return `Nici rewitalizujące i liftingujące - ${companyName}`;
            case '/treatment/aesthetic-medicine/mezoterapia-iglowa':
                return `Mezoterapia igłowa - ${companyName}`;
            case '/treatment/aesthetic-medicine/zamykanie-naczynek-i-likwidacja-przebarwien':
                return `Zamykanie naczynek i likwidacja przebarwień - ${companyName}`;
            case '/treatment/aesthetic-medicine/sonoqueen-technologia-hifu':
                return `SonoQueen technologia HIFU - ${companyName}`;

            // kosmetologia
            case '/treatment/cosmetology':
                return `Zabiegi - ${companyName}`;
            case '/treatment/cosmetology/peeling-medyczny':
                return `Peeling medyczny - ${companyName}`;
            case '/treatment/cosmetology/epilacja-laserowa':
                return `Epilacja laserowa - ${companyName}`;
            case '/treatment/cosmetology/masaz-prozniowy':
                return `Masaż próżniowy - ${companyName}`;
            case '/treatment/cosmetology/ultradzwieki-i-fala-radiowa':
                return `Ultradzwieki i fala radiowa - ${companyName}`;

            // fizjoterapia
            case '/treatment/physioterapy':
                return `Zabiegi - ${companyName}`;
            case '/treatment/physioterapy/rehabilitacja':
                return `Rehabilitacja - ${companyName}`;
            case '/treatment/physioterapy/masaz':
                return `Masaż - ${companyName}`;
            case '/treatment/physioterapy/kinesiotaping':
                return `Kinesiotaping - ${companyName}`;

            // chirurgia plastyczna
            case '/treatment/cosmetic-surgery':
                return `Zabiegi - ${companyName}`;
            case '/treatment/cosmetic-surgery/plastyka-powiek':
                return `Plastyka powiek - ${companyName}`;

            // alergologia
            case '/treatment/allergology':
                return `Zabiegi - ${companyName}`;
            case '/treatment/allergology/testy-skorne':
                return `Testy skórne - ${companyName}`;
            case '/treatment/allergology/platkowe-testy-kontaktowe':
                return `Płatkowe testy kontaktowe - ${companyName}`;
            case '/treatment/allergology/odczulanie':
                return `Odczulanie - ${companyName}`;

            // chirurgia naczyniowa
            case '/treatment/vascular-surgery':
                return `Zabiegi - ${companyName}`;
            case '/treatment/vascular-surgery/skleroterapia':
                return `Skleroterapia - ${companyName}`;
            case '/treatment/vascular-surgery/laserowe-usuwanie-zylakow':
                return `Laserowe usuwanie żylaków - ${companyName}`;

            // kardiologia
            case '/treatment/cardiology':
                return `Zabiegi - ${companyName}`;
            case '/treatment/cardiology/echo-serca':
                return `Echo serca - ${companyName}`;


            // CENNIK
            case '/prices':
                return `Cennik - ${companyName}`;
            case '/prices/aesthetic-medicine':
                return `Cennik - ${companyName}`;
            case '/prices/cosmetology':
                return `Cennik - ${companyName}`;
            case '/prices/physioterapy':
                return `Cennik - ${companyName}`;
            case '/prices/cosmetic-surgery':
                return `Cennik - ${companyName}`;
            case '/prices/allergology':
                return `Cennik - ${companyName}`;
            case '/prices/usg':
                return `Cennik - ${companyName}`;
            case '/prices/endocrinology':
                return `Cennik - ${companyName}`;
            case '/prices/gynecology':
                return `Cennik - ${companyName}`;
            case '/prices/orthopedics':
                return `Cennik - ${companyName}`;
            case '/prices/vascular-surgery':
                return `Cennik - ${companyName}`;
            case '/prices/clinical-dietitian':
                return `Cennik - ${companyName}`;
            case '/prices/rheumatology':
                return `Cennik - ${companyName}`;
            case '/prices/cardiology':
                return `Cennik - ${companyName}`;
            case '/prices/psychiatry':
                return `Cennik - ${companyName}`;


            // PROMOCJE
            case '/special-offer':
                return `Promocje - ${companyName}`;


            // ZESPÓŁ
            case '/team':
                return `Specjaliści - ${companyName}`;

            // dermatologia
            case '/team/dermatology':
                return `Specjaliści - ${companyName}`;
            case '/team/dermatology/nina-wisniewska':
                return `Nina Wiśniewska - ${companyName}`;
            case '/team/dermatology/katarzyna-mysliwiec-czajka':
                return `Katarzyna Myśliwiec-Czajka - ${companyName}`;
            case '/team/dermatology/justyna-kloniecka':
                return `Justyna Kłoniecka - ${companyName}`;
            case '/team/dermatology/aldona-maciag':
                return `Aldona Maciąg - ${companyName}`;
            case '/team/dermatology/paulina-tatara':
                return `Paulina Tatara - ${companyName}`;
            case '/team/dermatology/katarzyna-zbronska':
                return `Katarzyna Zbrońska - ${companyName}`;
            case '/team/dermatology/katarzyna-rychlik':
                return `Katarzyna Rychlik - ${companyName}`;

            // medycyna estetyczna
            case '/team/aesthetic-medicine':
                return `Specjaliści - ${companyName}`;
            case '/team/aesthetic-medicine/nina-wisniewska':
                return `Nina Wiśniewska - ${companyName}`;
            case '/team/aesthetic-medicine/konrad-kochan':
                return `Konrad Kochan - ${companyName}`;
            case '/team/aesthetic-medicine/klaudia-malottki':
                return `Klaudia Malottki - ${companyName}`;
            case '/team/aesthetic-medicine/paulina-tatara':
                return `Paulina Tatara - ${companyName}`;
            case '/team/aesthetic-medicine/olga-lenartowicz-warakomska':
                return `Olga Lenartowicz-Warakomska - ${companyName}`;

            // kosmetologia
            case '/team/cosmetology':
                return `Specjaliści - ${companyName}`;
            case '/team/cosmetology/paulina-budna':
                return `Paulina Budna - ${companyName}`;
            case '/team/cosmetology/aleksandra-gorczynska':
                return `Aleksandra Górczyńska - ${companyName}`;

            // fizjoterapia
            case '/team/physioterapy':
                return `Specjaliści - ${companyName}`;
            case '/team/physioterapy/milena-juzwiak':
                return `Milena Juźwiak - ${companyName}`;

            // chirurgia plastyczna
            case '/team/cosmetic-surgery':
                return `Specjaliści - ${companyName}`;
            case '/team/cosmetic-surgery/konrad-kochan':
                return `Konrad Kochan - ${companyName}`;

            // alergologia
            case '/team/allergology':
                return `Specjaliści - ${companyName}`;
            case '/team/allergology/tomasz-matuszewski':
                return `Tomasz Matuszewski - ${companyName}`;

            // usg
            case '/team/usg':
                return `Specjaliści - ${companyName}`;
            case '/team/usg/justyna-filipek':
                return `Justyna Filipek - ${companyName}`;
            case '/team/usg/patryk-krokwinski':
                return `Patryk Krokwiński - ${companyName}`;

            // endokrynologia
            case '/team/endocrinology':
                return `Specjaliści - ${companyName}`;
            case '/team/endocrinology/justyna-filipek':
                return `Justyna Filipek - ${companyName}`;
            case '/team/endocrinology/jadwiga-dowgiallo-smolarczyk':
                return `Jadwiga Dowgiałło-Smolarczyk - ${companyName}`;

            // ginekologia
            case '/team/gynecology':
                return `Specjaliści - ${companyName}`;
            case '/team/gynecology/justyna-filipek':
                return `Justyna Filipek - ${companyName}`;
            case '/team/gynecology/jadwiga-dowgiallo-smolarczyk':
                return `Jadwiga Dowgiałło-Smolarczyk - ${companyName}`;

            // ortopedia
            case '/team/orthopedics':
                return `Specjaliści - ${companyName}`;
            case '/team/orthopedics/wojciech-kaszewski':
                return `Wojciech Kaszewski - ${companyName}`;

            // chirurgia naczyniowa
            case '/team/vascular-surgery':
                return `Specjaliści - ${companyName}`;
            case '/team/vascular-surgery/kamil-stepkowski':
                return `Kamil Stępkowski - ${companyName}`;

            // dietetyka kliniczna
            case '/team/clinical-dietitian':
                return `Specjaliści - ${companyName}`;
            case '/team/clinical-dietitian/joanna-ojrzenska':
                return `Joanna Ojrzeńska - ${companyName}`;

            // reumatologia
            case '/team/rheumatology':
                return `Specjaliści - ${companyName}`;
            case '/team/rheumatology/agata-skwerek-szewczyk':
                return `Agata Skwerek Szewczyk - ${companyName}`;

            // kardiologia
            case '/team/cardiology':
                return `Specjaliści - ${companyName}`;
            case '/team/cardiology/michal-radzio':
                return `Michał Radzio - ${companyName}`;

            // psychiatria
            case '/team/psychiatry':
                return `Specjaliści - ${companyName}`;
            case '/team/psychiatry/kaja-strojnowska-lapinska':
                return `Kaja Strojnowska-Łapińska - ${companyName}`;


            // TECHNOLOGIA
            case '/technology':
                return `Technologia - ${companyName}`;
            case '/technology/vectus':
                return `Vectus - ${companyName}`;
            case '/technology/alma-harmony-xl-pro':
                return `Alma Harmony XL Pro - ${companyName}`;
            case '/technology/icoone-laser-med2':
                return `Icoone Laser Med 2 - ${companyName}`;
            case '/technology/fons-svr-fraction-laser-co2':
                return `Fons SVR Laser Frakcyjny CO2 - ${companyName}`;
            case '/technology/alma-accent-ultra-v-shape':
                return `Alma Accent Ultra V Shape - ${companyName}`;
            case '/technology/biolitec-leonardo-mini':
                return `Biolitec Leonardo Mini - ${companyName}`;
            case '/technology/hettich-arthrex-acp':
                return `Hettich Arthrex ACP - ${companyName}`;
            case '/technology/foto-finder-dermoscope-vexia':
                return `FotoFinder Dermoscope Vexia - ${companyName}`;
            case '/technology/philips-ultrasonograf-affiniti-50':
                return `Philips Ultrasonograf Affiniti 50 - ${companyName}`;
            case '/technology/sono-queen':
                return `SonoQueen - ${companyName}`;
            case '/technology/dermalight-500':
                return `Dermalight 500 - ${companyName}`;
            case '/technology/dermalight-1000-uva-uvb-311nm':
                return `Dermalight 1000 UVA UVB 311nm - ${companyName}`;


            // KONTAKT
            case '/contact':
                return `Kontakt - ${companyName}`;
            default:
        }
    }, [pathname]);

    useEffect(() => {
        document.title = setTitle();
    }, [setTitle]);

    return children;
};

const Page = (Component) => {
    return (props) => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant'
        });

        return (
            <PageTitle {...props}>
                <Component />
            </PageTitle>
        );
    }
}

export default Page;
