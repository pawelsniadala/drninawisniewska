import { useEffect, useCallback } from 'react';
import { useLocation  } from 'react-router-dom';

const PageTitle = ({ children }) => {
    const { pathname } = useLocation();
    const companyName = 'Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska';

    const setTitle = useCallback(() => {
        switch(pathname) {
            case '/':
                return companyName;
            case '/clinic':
                return `Klinika - ${companyName}`;
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
            case '/special-offer':
                return `Promocje - ${companyName}`;
            case '/team':
                return `Specjaliści - ${companyName}`;
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
            case '/team/cosmetology':
                return `Specjaliści - ${companyName}`;
            case '/team/cosmetology/paulina-budna':
                return `Paulina Budna - ${companyName}`;
            case '/team/cosmetology/aleksandra-gorczynska':
                return `Aleksandra Górczyńska - ${companyName}`;
            case '/team/physioterapy':
                return `Specjaliści - ${companyName}`;
            case '/team/physioterapy/milena-juzwiak':
                return `Milena Juźwiak - ${companyName}`;
            case '/team/cosmetic-surgery':
                return `Specjaliści - ${companyName}`;
            case '/team/cosmetic-surgery/konrad-kochan':
                return `Konrad Kochan - ${companyName}`;
            case '/team/allergology':
                return `Specjaliści - ${companyName}`;
            case '/team/allergology/tomasz-matuszewski':
                return `Tomasz Matuszewski - ${companyName}`;
            case '/team/usg':
                return `Specjaliści - ${companyName}`;
            case '/team/usg/justyna-filipek':
                return `Justyna Filipek - ${companyName}`;
            case '/team/usg/patryk-krokwinski':
                return `Patryk Krokwiński - ${companyName}`;
            case '/team/endocrinology':
                return `Specjaliści - ${companyName}`;
            case '/team/endocrinology/justyna-filipek':
                return `Justyna Filipek - ${companyName}`;
            case '/team/gynecology':
                return `Specjaliści - ${companyName}`;
            case '/team/gynecology/justyna-filipek':
                return `Justyna Filipek - ${companyName}`;
            case '/team/orthopedics':
                return `Specjaliści - ${companyName}`;
            case '/team/orthopedics/wojciech-kaszewski':
                return `Wojciech Kaszewski - ${companyName}`;
            case '/team/vascular-surgery':
                return `Specjaliści - ${companyName}`;
            case '/team/vascular-surgery/kamil-stepkowski':
                return `Kamil Stępkowski - ${companyName}`;
            case '/team/clinical-dietitian':
                return `Specjaliści - ${companyName}`;
            case '/team/clinical-dietitian/joanna-ojrzenska':
                return `Joanna Ojrzeńska - ${companyName}`;
            case '/technology':
                return `Technologia - ${companyName}`;
            case '/team/technology/vectus':
                return `Vectus - ${companyName}`;
            case '/team/technology/alma-harmony-xl-pro':
                return `Alma Harmony XL Pro - ${companyName}`;
            case '/team/technology/icoone-laser-med2':
                return `Icoone Laser Med 2 - ${companyName}`;
            case '/team/technology/fons-svr-fraction-laser-co2':
                return `Fons SVR Laser Frakcyjny CO2 - ${companyName}`;
            case '/team/technology/alma-accent-ultra-v-shape':
                return `Alma Accent Ultra V Shape - ${companyName}`;
            case '/team/technology/biolitec-leonardo-mini':
                return `Biolitec Leonardo Mini - ${companyName}`;
            case '/team/technology/hettich-arthrex-acp':
                return `Hettich Arthrex ACP - ${companyName}`;
            case '/team/technology/foto-finder-dermoscope-vexia':
                return `FotoFinder Dermoscope Vexia - ${companyName}`;
            case '/team/technology/philips-ultrasonograf-affiniti-50':
                return `Philips Ultrasonograf Affiniti 50 - ${companyName}`;
            case '/team/technology/sono-queen':
                return `SonoQueen - ${companyName}`;
            case '/team/technology/dermalight-500':
                return `Dermalight 500 - ${companyName}`;
            case '/team/technology/dermalight-1000-uva-uvb-311nm':
                return `Dermalight 1000 UVA UVB 311nm - ${companyName}`;
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
