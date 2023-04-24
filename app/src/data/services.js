import servicesDermatology from '../assets/services/servicesDermatology.jpg';
import servicesAestheticMedicine from '../assets/services/servicesAestheticMedicine.jpg';

import servicesCosmetology from '../assets/services/servicesCosmetology.jpg';
import servicesCosmetologyPeeling from '../assets/services/cosmetology/servicesCosmetologyPeeling.jpg';

import servicesPhysioterapy from '../assets/services/servicesPhysioterapy.jpg';
import servicesPhysioterapyElasticTherapeuticTape from  '../assets/services/physioteraphy/servicesPhysioterapyElasticTherapeuticTape.jpg';
import servicesPhysioterapyMassage from  '../assets/services/physioteraphy/servicesPhysioterapyMassage.jpg';

import servicesCosmeticSurgery from '../assets/services/servicesCosmeticSurgery.jpg';
import servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsBefore from '../assets/services/vasularSurgery/servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsBefore.png';
import servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsAfter from '../assets/services/vasularSurgery/servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsAfter.png';

import servicesAllergology from '../assets/services/servicesAllergology.jpg';
import servicesUsg from '../assets/services/servicesUsg.jpg';
import servicesEndocrinology from '../assets/services/servicesEndocrinology.jpg';
import servicesGynecology from '../assets/services/servicesGynecology.jpg';
import servicesOrthopedics from '../assets/services/servicesOrthopedics.jpg';
import servicesVasularSurgery from '../assets/services/servicesVasularSurgery.jpg';
import servicesClinicalDietitian from '../assets/services/servicesClinicalDietitian.jpg';
import servicesRheumatology from '../assets/services/servicesRheumatology.jpg'

import ninaWisniewskaImageSmall from '../assets/team/ninaWisniewska/ninaWisniewskaImageSmall.jpg';
import justynaFilipekImageSmall from '../assets/team/justynaFilipek/justynaFilipekImageSmall.jpg';
import paulinaBudnaImageSmall from '../assets/team/paulinaBudna/paulinaBudnaImageSmall.jpg';
import konradKochanImageSmall from '../assets/team/konradKochan/konradKochanImageSmall.jpg';
import wojciechKaszewskiImageSmall from '../assets/team/wojciechKaszewski/wojciechKaszewskiImageSmall.jpg';
import justynaKlonieckaImageSmall from '../assets/team/justynaKloniecka/justynaKlonieckaImageSmall.jpg';
import katarzynaMysliwiecCzajkaImageSmall from '../assets/team/katarzynaMysliwiecCzajka/katarzynaMysliwiecCzajkaImageSmall.jpg';
import klaudiaMalottkiImageSmall from '../assets/team/klaudiaMalottki/klaudiaMalottkiImageSmall.jpg';
import aldonaMaciagImageSmall from '../assets/team/aldonaMaciag/aldonaMaciagImageSmall.jpg';
import milenaJuzwiakImageSmall from '../assets/team/milenaJuzwiak/milenaJuzwiakImageSmall.jpg';
import katarzynaZbronskaImageSmall from '../assets/team/katarzynaZbronska/katarzynaZbronskaImageSmall.jpg';
import tomaszMatuszewskiImageSmall from '../assets/team/tomaszMatuszewski/tomaszMatuszewskiImageSmall.jpg';
import kamilStepkowskiImageSmall from '../assets/team/kamilStepkowski/kamilStepkowskiImageSmall.jpg';
import olgaLenartowiczWarakomskaImageSmall from '../assets/team/olgaLenartowiczWarakomska/olgaLenartowiczWarakomskaImageSmall.jpg';
import paulinaTataraImageSmall from '../assets/team/paulinaTatara/paulinaTataraImageSmall.jpg';
import joannaOjrzenskaImageSmall from '../assets/team/joannaOjrzenska/joannaOjrzenskaImageSmall.jpg';
import aleksandraGorczynskaImageSmall from '../assets/team/aleksandraGorczynska/aleksandraGorczynskaImageSmall.jpg';
import agataSkwerekSzewczykImageSmall from '../assets/team/agataSkwerekSzewczyk/agataSkwerekSzewczykImageSmall.jpg';
import katarzynaRychlikImageSmall from  '../assets/team/katarzynaRychlik/katarzynaRychlikImageSmall.jpg';
import patrykKrokwinskiImageSmall from  '../assets/team/patrykKrokwinski/patrykKrokwinskiImageSmall.jpg';

export const dermatology = {
    id: '554e27d9-1d9e-4041-9549-29057bb9792f',
    image: servicesDermatology,
    title: 'Dermatologia',
    description: 'Badanie znamion barwnikowych polega na poddaniu zmian skórnych analizie przez dermatologa. W naszej Klinice badanie można przeprowadzić za pomocą dermatoskopu lub wideodermatoskopu. Wideodermatoskopia to nowoczesna cyfrowa technologia służąca do analizy znamion barwnikowych skóry. Urządzenie służy także diagnozowaniu zmian chorobowych skóry, włosów i paznokci. Jest to zaawansowany system łączący optyczny układ wideokamery dermatoskopu z komputerową analizą obrazu za pomocą algebraicznych algorytmów.',
    path: '/services/dermatology',
    pathSpecialist: '/team',
    pathPrices: '/prices',
    specialists: [
        ninaWisniewskaImageSmall,
        katarzynaMysliwiecCzajkaImageSmall,
        justynaKlonieckaImageSmall,
        aldonaMaciagImageSmall,
        paulinaTataraImageSmall,
        katarzynaZbronskaImageSmall,
        katarzynaRychlikImageSmall
    ]
};

export const aestheticMedicine = {
    id: 'b32e9f04-f41d-4c0e-9945-33f962567a94',
    image: servicesAestheticMedicine,
    title: 'Medycyna estetyczna',
    description: 'Toksyna botulinowa to jedna z najbardziej popularnych metod redukcji zmarszczek mimicznych, które pojawiają się w związku z powtarzającymi się skurczami mięśni twarzy. Zabieg pozwala szybko spłycić zmarszczki mimiczne i wygładzić skórę. Wstrzyknięcie małej dawki leku w wybrane mięśnie twarzy likwiduje problemy wywoływane przez kurczenie się mięśni takie jak zmarszczki mimiczne czy nadmierna kurczliwość.',
    path: '/services/aesthetic-medicine',
    pathSpecialist: '/team/aesthetic-medicine',
    pathPrices: '/prices/aesthetic-medicine',
    specialists: [
        ninaWisniewskaImageSmall,
        konradKochanImageSmall,
        klaudiaMalottkiImageSmall,
        paulinaTataraImageSmall,
        olgaLenartowiczWarakomskaImageSmall
    ]
};

export const cosmetology = {
    id: '6c9e3a3d-9257-44d4-81af-87523bdccf71',
    image: servicesCosmetology,
    title: 'Kosmetologia',
    description: 'Peelingi chemiczne to kondycjonujące i rewitalizujące skórę zabiegi dermokosmetyczne. W zależności od zastosowanego preparatu zabiegi oferują różne efekty terapeutyczne; tj. oczyszczające i przeciwtrądzikowe, regenerujące i przeciwzmarszczkowe, rozjaśniające i redukujące przebarwienia.',
    path: '/services/cosmetology',
    pathSpecialist: '/team/cosmetology',
    pathPrices: '/prices/cosmetology',
    specialists: [
        paulinaBudnaImageSmall,
        aleksandraGorczynskaImageSmall
    ],
    servicesCosmetologyPeeling: servicesCosmetologyPeeling
};

export const physioterapy = {
    id: '13076f6e-c4f6-474f-80af-73abe224d7a2',
    image: servicesPhysioterapy,
    title: 'Fizjoterapia',
    description: 'Medycyna ortopedyczna według Cyriaxa jest kompleksowym systemem terapii oraz diagnostyki zaburzeń narządu ruchu. Opiera się na badaniu klinicznym, które za pomocą testów i wywiadu doprowadza fizjoterapeutę do postawienia odpowiedniej diagnozy uszkodzonej tkanki w układzie ruchu.',
    path: '/services/physioterapy',
    pathSpecialist: '/team/physioterapy',
    pathPrices: '/prices/physioterapy',
    specialists: [
        milenaJuzwiakImageSmall
    ],
    servicesPhysioterapyElasticTherapeuticTape: servicesPhysioterapyElasticTherapeuticTape,
    servicesPhysioterapyMassage: servicesPhysioterapyMassage
};

export const cosmeticSurgery = {
    id: '6666dd88-e379-4067-ad87-7667a7664a5b',
    image: servicesCosmeticSurgery,
    title: 'Chirurgia plastyczna',
    description: 'Plastyka powiek, inaczej blefaroplastyka, to zabieg mający na celu usunięcie nadmiaru skóry wokół oczu. W zakres blefaroplastyki wchodzi zarówno korekta powieki górnej jak i dolnej. Plastyka powiek jest najskuteczniejszą metodą walki z twz. opadającą powieką. Wskazaniami do zabiegu prócz defektu estetycznego są również asymetria oczu, problemy z widocznością, przepukliny tłuszczowe a także wiotkość tkanki wokół oczu.',
    path: '/services/cosmetic-surgery',
    pathSpecialist: '/team/cosmetic-surgery',
    pathPrices: '/prices/cosmetic-surgery',
    specialists: [
        konradKochanImageSmall
    ],
    servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsBefore: servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsBefore,
    servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsAfter: servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsAfter
};

export const allergology = {
    id: '7b31d50f-e239-4003-91cc-39e9799c8aa1',
    image: servicesAllergology,
    title: 'Alergologia',
    description: 'Testy skórne są jedną z popularniejszej oraz prostszej metody diagnostycznej alergii. Największą zaletą testów skórnych jest ich krótki czas oczekiwania na wyniki. Badanie przeprowadza się na wewnętrznej części przedramienia lub skórze pleców. Przebieg testów polega na naniesieniu kropli różnych zawiesin z alergenami z zestawu przesiewowego zawierającego takie substancje uczulające jak rośliny wiatropylne, trawy, pleśnie, sierść zwierząt, jad owadów czy roztocza kurzu domowego.',
    path: '/services/allergology',
    pathSpecialist: '/team/allergology',
    pathPrices: '/prices/allergology',
    specialists: [
        tomaszMatuszewskiImageSmall
    ]
};

export const usg = {
    id: '008b2d0b-fa95-404e-a4f0-0fb9975b851d',
    image: servicesUsg,
    title: 'USG',
    description: 'Zastosowanie ultradźwięków do badania i obrazowania tkanek w medycynie i weterynarii. Ultrasonografia jest nieinwazyjną, atraumatyczną metodą diagnostyki obrazowej, pozwalającą na uzyskanie obrazu przekroju badanego obiektu. Charakteryzuje się dużą dokładnością: umożliwia wykrywanie w narządach nawet bardzo małych zmian (od 0,1 mm).',
    path: '/services/usg',
    pathSpecialist: '/team/usg',
    pathPrices: '/prices/usg',
    specialists: [
        justynaFilipekImageSmall,
        patrykKrokwinskiImageSmall
    ]
};

export const endocrinology = {
    id: '6e4202c5-4058-4c82-8c63-51750083b6bf',
    image: servicesEndocrinology,
    title: 'Endokrynologia',
    description: 'Nauka o wydzielaniu wewnętrznym, gruczołach, hormonach i ich działaniu. Jako dziedzina medycyny, zajmuje się zaburzeniami funkcji gruczołów wydzielania wewnętrznego, np. przysadki mózgowej, tarczycy, nadnerczy, jajników',
    path: '/services/endocrinology',
    pathSpecialist: '/team/endocrinology',
    pathPrices: '/prices/endocrinology',
    specialists: [
        justynaFilipekImageSmall
    ]
};

export const gynecology = {
    id: '3238968b-8fbb-4b0a-a950-df8a42597e3f',
    image: servicesGynecology,
    title: 'Ginekologia',
    description: 'Dziedzina medycyny zajmująca się profilaktyką i leczeniem chorób żeńskiego układu płciowego. Najczęstsze problemy, jakimi zajmują się ginekolodzy, to: zaburzenia miesiączkowania, stany zapalne pochwy, antykoncepcja, niepłodność, nowotwory narządów rodnych. Ściśle związana z położnictwem.',
    path: '/services/gynecology',
    pathSpecialist: '/team/gynecology',
    pathPrices: '/prices/gynecology',
    specialists: [
        justynaFilipekImageSmall
    ]
};

export const orthopedics = {
    id: '5f41b5eb-0997-4e75-82a4-6efc3aa9a05f',
    image: servicesOrthopedics,
    title: 'Ortopedia',
    description: 'Jedna z podstawowych specjalności lekarskich. Skupia się na diagnostyce i leczeniu operacyjnym i zachowawczym schorzeń, wad wrodzonych i nabytych, zapaleń, zakażeń, nowotworów oraz uszkodzeń i zmian pourazowych narządu ruchu: szkieletu (z wyjątkiem kości czaszki), układu więzadłowo-stawowego oraz mięśni, nerwów i naczyń.',
    path: '/services/orthopedics',
    pathSpecialist: '/team/orthopedics',
    pathPrices: '/prices/orthopedics',
    specialists: [
        wojciechKaszewskiImageSmall
    ]
};

export const vasularSurgery = {
    id: 'eb9d40ce-5393-430c-9536-c2ba825852db',
    image: servicesVasularSurgery,
    title: 'Chirurgia naczyniowa',
    description: 'Dział chirurgii zajmujący się zabiegami operacyjnymi naczyń krwionośnych oraz limfatycznych. Zakres tej specjalizacji obejmuje leczenie operacyjne, wewnątrznaczyniowe i zachowawcze układu naczyniowego, w tym: trombektomię, skleroterapię żył, pomostowanie tętnic, udrożnianie tętnic, sympatektomię, angioplastykę, implantację stentów, embolizację naczyń, leczenie trombolityczne, leczenie stopy cukrzycowej, leczenie obrzęku chłonnego, amputacje u chorych z niedokrwieniem kończyn dolnych czy wytwarzanie dostępu naczyniowego dla celów hemodializy.',
    path: '/services/vascular-surgery',
    pathSpecialist: '/team/vascular-surgery',
    pathPrices: '/prices/vascular-surgery',
    specialists: [
        kamilStepkowskiImageSmall
    ]
};

export const clinicalDietitian = {
    id: 'a24eafcd-33f0-4f90-97fe-f342bd00f3b7',
    image: servicesClinicalDietitian,
    title: 'Dietetyka Kliniczna',
    description: 'Dostarcza informacje niezbędne do opracowania zasad zdrowego odżywiania, które w połączeniu z właściwym stylem życia są najskuteczniejszą metodą zapobiegania chorobom cywilizacyjnym.',
    path: '/services/clinical-dietitian',
    pathSpecialist: '/team/clinical-dietitian',
    pathPrices: '/prices/clinical-dietitian',
    specialists: [
        joannaOjrzenskaImageSmall
    ]
};

export const rheumatology = {
    id: '5e727446-cd71-4238-b7dd-fc6abd853f73',
    image: servicesRheumatology,
    title: 'Reumatologia',
    description: 'Dziedzina medycyny zajmująca się różnego typu schorzeniami związanymi ze stanami zwyrodnieniowymi i zapalnymi tkanki łącznej, kości i stawów.',
    path: '/services/rheumatology',
    pathSpecialist: '/team/rheumatology',
    pathPrices: '/prices/rheumatology',
    specialists: [
        agataSkwerekSzewczykImageSmall
    ]
};

export const services = [
    { ...dermatology },
    { ...aestheticMedicine },
    { ...cosmetology },
    { ...physioterapy },
    { ...cosmeticSurgery },
    { ...allergology },
    { ...usg },
    { ...endocrinology },
    { ...gynecology },
    { ...orthopedics },
    { ...vasularSurgery },
    { ...clinicalDietitian },
    { ...rheumatology }
];
