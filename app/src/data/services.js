// DERMATOLOGIA
import servicesDermatology0 from '../assets/services/dermatology/servicesDermatology0.jpg';

// MEDYCYNA ESTETYCZNA
import servicesAestheticMedicine0 from '../assets/services/aestheticMedicine/servicesAestheticMedicine0.jpg';

// KOSMETOLOGIA
import servicesCosmetology0 from '../assets/services/cosmetology/servicesCosmetology0.jpg';

// FIZJOTERAPIA
import servicesPhysioterapy0 from '../assets/services/physioteraphy/servicesPhysioterapy0.jpg';

// CHIRURGIA PLASTYCZNA
import servicesCosmeticSurgery0 from '../assets/services/cosmeticSurgery/servicesCosmeticSurgery0.jpg';

// ALERGOLOGIA
import servicesAllergology0 from '../assets/services/allergology/servicesAllergology0.jpg';

// USG
import servicesUsg0 from '../assets/services/usg/servicesUsg0.jpg';

// ENDOKRYNOLOGIA
import servicesEndocrinology0 from '../assets/services/endocrinology/servicesEndocrinology0.jpg';

// GINEKOLOGIA
import servicesGynecology0 from '../assets/services/gynecology/servicesGynecology0.jpg';

// ORTOPEDIA
import servicesOrthopedics from '../assets/services/servicesOrthopedics.jpg'; // TODO

// CHIRURGIA NACZYNIOWA
import servicesVascularSurgery0 from '../assets/services/vascularSurgery/servicesVascularSurgery0.jpg';

// DIETETYKA KLINICZNA
import servicesClinicalDietitian0 from '../assets/services/clinicalDietitian/servicesClinicalDietitian0.jpg';

// KARDIOLOGIA
import servicesCardiology0 from '../assets/services/cardiology/servicesCardiology0.jpg';

// REUMATOLOGIA
import servicesRheumatology from '../assets/services/servicesRheumatology.jpg' // TODO

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
import michalRadzioImageSmall from  '../assets/team/michalRadzio/michalRadzioImageSmall.jpg';

export const dermatology = {
    id: '554e27d9-1d9e-4041-9549-29057bb9792f',
    specialization: 'dermatology',
    title: 'Dermatologia',
    description: 'Dermatologia to dziedzina medycyny zajmująca się chorobami skóry, włosów i paznokci oraz chorobami wenerycznymi. Najczęstsze problemy z jakimi możesz zgłosić się do naszej Kliniki: kontrola znamion barwnikowych, trądzik pospolity, trądzik różowaty, atopowe zapalenie skóry, łojotokowe zapalenie skóry, łuszczyca, pokrzywka, kontaktowe zapalenie skóry, liszaj płaski, łysienie, łupież, grzybice skóry i paznokci, choroby weneryczne.',
    path: '/services/dermatology',
    pathSpecialist: '/team',
    pathPrices: '/prices',
    image: servicesDermatology0,
    images: [
        {
            src: servicesDermatology0,
            alt: 'Dermatolog bada skórę pacjenta za pomocą dermatoskopu',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/dermatolog-bada-skore-pacjenta-za-pomoca-dermatoskopu_8404896.htm#query=dermatology&position=0&from_view=search&track=sph'
        }
    ],
    specialists: [
        ninaWisniewskaImageSmall,
        katarzynaMysliwiecCzajkaImageSmall,
        justynaKlonieckaImageSmall,
        aldonaMaciagImageSmall,
        paulinaTataraImageSmall,
        katarzynaZbronskaImageSmall,
        katarzynaRychlikImageSmall
    ],
    relatedSpecializations: [
        'aesthetic-medicine',
        'cosmetology',
        'allergology'
    ]
};

export const aestheticMedicine = {
    id: 'b32e9f04-f41d-4c0e-9945-33f962567a94',
    specialization: 'aesthetic-medicine',
    title: 'Medycyna estetyczna',
    description: 'Toksyna botulinowa to jedna z najbardziej popularnych metod redukcji zmarszczek mimicznych, które pojawiają się w związku z powtarzającymi się skurczami mięśni twarzy. Zabieg pozwala szybko spłycić zmarszczki mimiczne i wygładzić skórę. Wstrzyknięcie małej dawki leku w wybrane mięśnie twarzy likwiduje problemy wywoływane przez kurczenie się mięśni takie jak zmarszczki mimiczne czy nadmierna kurczliwość.',
    path: '/services/aesthetic-medicine',
    pathSpecialist: '/team/aesthetic-medicine',
    pathPrices: '/prices/aesthetic-medicine',
    image: servicesAestheticMedicine0,
    images: [
        {
            src: servicesAestheticMedicine0,
            alt: 'Zabieg w okolicy ust',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/piekna-mloda-kobieta-dostaje-botox-kosmetyczny-zastrzyk-w-jej-twarzy_1624934.htm#query=Medycyna%20estetyczna&position=30&from_view=search&track=ais'
        }
    ],
    specialists: [
        ninaWisniewskaImageSmall,
        konradKochanImageSmall,
        klaudiaMalottkiImageSmall,
        paulinaTataraImageSmall,
        olgaLenartowiczWarakomskaImageSmall
    ],
    relatedSpecializations: [
        'dermatology',
        'cosmetology',
        'cosmetic-surgery'
    ]
};

export const cosmetology = {
    id: '6c9e3a3d-9257-44d4-81af-87523bdccf71',
    specialization: 'cosmetology',
    title: 'Kosmetologia',
    description: 'Kosmetologia to dziedzina naukowa i praktyczna, która zajmuje się pielęgnacją skóry, włosów, paznokci oraz ogólnym poprawianiem wyglądu i zdrowia skóry. Kosmetolodzy, specjaliści w dziedzinie kosmetologii, stosują różne techniki, metody i produkty w celu zapewnienia zdrowia, piękna i dobrej kondycji skóry.',
    path: '/services/cosmetology',
    pathSpecialist: '/team/cosmetology',
    pathPrices: '/prices/cosmetology',
    image: servicesCosmetology0,
    images: [
        {
            src: servicesCosmetology0,
            alt: 'Kosmetolog nakładający maskę na twarz',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/kosmetolog-wykonujacy-zabiegi-na-twarz-i-nakladajacy-maske-na-twarz_16934230.htm#query=kosmetologia&position=3&from_view=search&track=sph'
        }
    ],
    specialists: [
        paulinaBudnaImageSmall,
        aleksandraGorczynskaImageSmall
    ],
    relatedSpecializations: [
        'dermatology',
        'cosmetology',
        'aesthetic-medicine'
    ]
};

export const physioterapy = {
    id: '13076f6e-c4f6-474f-80af-73abe224d7a2',
    specialization: 'physioterapy',
    title: 'Fizjoterapia',
    description: 'Fizjoterapia to dziedzina medycyny zajmująca się leczeniem i rehabilitacją osób z różnymi schorzeniami, urazami lub dysfunkcjami układu mięśniowo-szkieletowego. Jej celem jest przywrócenie pacjentowi pełnej sprawności fizycznej, zmniejszenie bólu, poprawa zakresu ruchu oraz wzmacnianie mięśni.',
    path: '/services/physioterapy',
    pathSpecialist: '/team/physioterapy',
    pathPrices: '/prices/physioterapy',
    image: servicesPhysioterapy0,
    images: [
        {
            src: servicesPhysioterapy0,
            alt: 'Fizjoterapeuta nakładający elastyczny bandaż medyczny',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/fizjoterapeutka-nakladajaca-elastyczny-bandaz-medyczny-na-pacjenta-plci-meskiej_21076897.htm#query=fizjoterapia&position=28&from_view=search&track=sph'
        }
    ],
    specialists: [
        milenaJuzwiakImageSmall
    ],
    relatedSpecializations: [
        'orthopedics',
        'rheumatology'
    ]
};

export const cosmeticSurgery = {
    id: '6666dd88-e379-4067-ad87-7667a7664a5b',
    specialization: 'cosmetic-surgery',
    image: servicesCosmeticSurgery0,
    title: 'Chirurgia plastyczna',
    description: 'Plastyka powiek, inaczej blefaroplastyka, to zabieg mający na celu usunięcie nadmiaru skóry wokół oczu. W zakres blefaroplastyki wchodzi zarówno korekta powieki górnej jak i dolnej. Plastyka powiek jest najskuteczniejszą metodą walki z twz. opadającą powieką. Wskazaniami do zabiegu prócz defektu estetycznego są również asymetria oczu, problemy z widocznością, przepukliny tłuszczowe a także wiotkość tkanki wokół oczu.',
    path: '/services/cosmetic-surgery',
    pathSpecialist: '/team/cosmetic-surgery',
    pathPrices: '/prices/cosmetic-surgery',
    images: [
        {
            src: servicesCosmeticSurgery0,
            alt: 'Przygotowanie pacjenta do zabiegu chirurgii plastycznej',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/kobieta-przeznaczona-do-operacji-plastycznej_10322612.htm#page=19&query=operacja%20plastyczna%20powiek&position=39&from_view=search&track=ais'
        }
    ],
    specialists: [
        konradKochanImageSmall
    ],
    relatedSpecializations: [
        'aesthetic-medicine'
    ],
};

export const allergology = {
    id: '7b31d50f-e239-4003-91cc-39e9799c8aa1',
    specialization: 'allergology',
    image: servicesAllergology0,
    title: 'Alergologia',
    description: 'Alergologia to dziedzina medycyny zajmująca się diagnozowaniem, leczeniem i profilaktyką alergii. Alergia to nadwrażliwość immunologiczna organizmu na substancje zwane alergenami, które normalnie nie wywołują reakcji u większości osób. Alergeny mogą być pochodzenia pokarmowego, środowiskowego (pyłki roślin, roztocza, grzyby), kontaktowego (metale, lateks, kosmetyki), leków, a także mogą występować w powietrzu (aerozole, pyły, dymy).',
    path: '/services/allergology',
    pathSpecialist: '/team/allergology',
    pathPrices: '/prices/allergology',
    images: [
        {
            src: servicesAllergology0,
            alt: 'Test reakcji alergicznej skóry na przedramieniu',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/test-reakcji-alergicznej-skory-na-ramieniu-osoby_19672579.htm#query=test%20reakcji%20alergicznej%20sk%C3%B3ry&position=3&from_view=search&track=ais'
        }
    ],
    specialists: [
        tomaszMatuszewskiImageSmall
    ],
    relatedSpecializations: [
        'dermatology'
    ],
};

export const usg = {
    id: '008b2d0b-fa95-404e-a4f0-0fb9975b851d',
    specialization: 'usg',
    title: 'USG',
    description: 'USG to specjalistyczne nieinwazyjne badanie obrazowe tkanek miękkich w czasie rzeczywistym wykorzystujące fale ultradźwiękowe. Przyjmujemy dzieci w każdym wieku. Nie wykonujemy badania USG układu kostno-stawowego.',
    path: '/services/usg',
    pathSpecialist: '/team/usg',
    pathPrices: '/prices/usg',
    image: servicesUsg0,
    images: [
        {
            src: servicesUsg0,
            alt: 'Badanie USG tarczycy',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/usmiechnieta-pielegniarka-pracujaca-z-pacjentem-podczas-zabiegu_26674414.htm#query=usg%20jamy&position=23&from_view=search&track=ais'
        }
    ],
    specialists: [
        justynaFilipekImageSmall,
        wojciechKaszewskiImageSmall,
        patrykKrokwinskiImageSmall,
        kamilStepkowskiImageSmall,
    ],
    relatedSpecializations: [
        'endocrinology',
        'gynecology'
    ],
};

export const endocrinology = {
    id: '6e4202c5-4058-4c82-8c63-51750083b6bf',
    specialization: 'endocrinology',
    title: 'Endokrynologia',
    description: 'Endokrynologia to dziedzina medycyny zajmująca się zaburzeniami funkcji gruczołów wydzielania wewnętrznego (ich budowy, produkcji oraz uwalniania hormonów). Najczęstsze problemy z jakimi możesz zgłosić się do naszej Kliniki: nadczynność/niedoczynność tarczycy, choroba Hashimoto, choroba Gravesa-Basedowa, choroby przysadki mózgowej, zaburzenia pracy nadnerczy, insulinooporność.',
    path: '/services/endocrinology',
    pathSpecialist: '/team/endocrinology',
    pathPrices: '/prices/endocrinology',
    image: servicesEndocrinology0,
    images: [
        {
            src: servicesEndocrinology0,
            alt: 'Endokrynologiczne badanie tarczycy',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/endokrynolog-badajacy-gardlo-mlodej-kobiety-w-klinice-kobiety-z-badaniem-tarczycy-hormony-endokrynologiczne-i-leczenie-zapalenie-gardla_27156417.htm#query=Endokrynologia%20tarczyca&position=37&from_view=search&track=ais'
        }
    ],
    specialists: [
        justynaFilipekImageSmall
    ],
    relatedSpecializations: [
        'usg',
        'gynecology'
    ],
};

export const gynecology = {
    id: '3238968b-8fbb-4b0a-a950-df8a42597e3f',
    specialization: 'gynecology',
    title: 'Ginekologia',
    description: 'Ginekologia to dziedzina medycyny zajmująca się profilaktyką i leczeniem chorób żeńskiego układu rozrodczego. Najczęstsze problemy z jakimi możesz zgłosić się do naszej Kliniki: zaburzenia miesiączkowania, infekcje dróg rodnych, dobranie antykoncepcji hormonalnej, niepłodność, nowotwory narządów rodnych.',
    path: '/services/gynecology',
    pathSpecialist: '/team/gynecology',
    pathPrices: '/prices/gynecology',
    image: servicesGynecology0,
    images: [
        {
            src: servicesGynecology0,
            alt: 'Konsultacja ginekologiczna',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/endokrynolog-badajacy-gardlo-mlodej-kobiety-w-klinice-kobiety-z-badaniem-tarczycy-hormony-endokrynologiczne-i-leczenie-zapalenie-gardla_27156417.htm#query=Endokrynologia%20tarczyca&position=37&from_view=search&track=ais'
        }
    ],
    specialists: [
        justynaFilipekImageSmall
    ],
    relatedSpecializations: [
        'usg',
        'endocrinology'
    ],
};

export const orthopedics = {
    id: '5f41b5eb-0997-4e75-82a4-6efc3aa9a05f',
    specialization: 'orthopedics',
    image: servicesOrthopedics,
    title: 'Ortopedia',
    description: 'Ortopedia to dziedzina medycyny zajmująca się diagnozowaniem, leczeniem i rehabilitacją schorzeń, urazów i zaburzeń układu mięśniowo-szkieletowego. Układ mięśniowo-szkieletowy obejmuje kości, stawy, mięśnie, więzadła i ścięgna, a ortopedia skupia się na ich funkcjonowaniu, ruchomości i zdrowiu.',
    path: '/services/orthopedics',
    pathSpecialist: '/team/orthopedics',
    pathPrices: '/prices/orthopedics',
    specialists: [
        wojciechKaszewskiImageSmall
    ],
    relatedSpecializations: [
        'physioterapy',
        'rheumatology'
    ],
};

export const vascularSurgery = {
    id: 'eb9d40ce-5393-430c-9536-c2ba825852db',
    specialization: 'vascular-surgery',
    title: 'Chirurgia naczyniowa',
    description: 'Chirurgia naczyniowa to dziedzina medycyny zajmująca się diagnozowaniem i nieinwazyjnym lub inwazyjnym operacyjnym leczeniem chorób związanych z nieprawidłowym funkcjonowaniem naczyń krwionośnych i limfatycznych.',
    path: '/services/vascular-surgery',
    pathSpecialist: '/team/vascular-surgery',
    pathPrices: '/prices/vascular-surgery',
    image: servicesVascularSurgery0,
    images: [
        {
            src: servicesVascularSurgery0,
            alt: 'Chirurdzy podczas wykonywania zabiegu',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/chirurdzy-noszacy-chirurgiczne-lupy-podczas-wykonywania-operacji_8402445.htm#query=zabieg%20chirurg&position=42&from_view=search&track=ais'
        }
    ],
    specialists: [
        kamilStepkowskiImageSmall
    ],
    relatedSpecializations: [
        'cardiology'
    ],
};

export const clinicalDietitian = {
    id: 'a24eafcd-33f0-4f90-97fe-f342bd00f3b7',
    specialization: 'clinical-dietitian',
    title: 'Dietetyka Kliniczna',
    description: 'Dietetyka to nauka medyczna zajmująca się prawidłowym odżywianiem, zarówno osób zdrowych, jak i chorych. Najczęstsze problemy z jakimi możesz zgłosić się do naszej Kliniki: uzupełnienie niedoborów organizmu, chęć odchudzania się w racjonalny sposób, potrzeba wdrożenia specjalistycznej diety ze względu na choroby współistniejące.',
    path: '/services/clinical-dietitian',
    pathSpecialist: '/team/clinical-dietitian',
    pathPrices: '/prices/clinical-dietitian',
    image: servicesClinicalDietitian0,
    images: [
        {
            src: servicesClinicalDietitian0,
            alt: 'Konsultacja dietetyczna w gabinecie',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/lekarz-w-swoim-gabinecie-mowi-dziewczynie-jak-jesc-i-trzymac-sie-diety_18133353.htm#query=dietetyka&position=23&from_view=search&track=sph'
        }
    ],
    specialists: [
        joannaOjrzenskaImageSmall
    ],
    relatedSpecializations: [
        'rheumatology'
    ],
};

export const rheumatology = {
    id: '5e727446-cd71-4238-b7dd-fc6abd853f73',
    specialization: 'rheumatology',
    image: servicesRheumatology,
    title: 'Reumatologia',
    description: 'Dziedzina medycyny zajmująca się różnego typu schorzeniami związanymi ze stanami zwyrodnieniowymi i zapalnymi tkanki łącznej, kości i stawów.',
    path: '/services/rheumatology',
    pathSpecialist: '/team/rheumatology',
    pathPrices: '/prices/rheumatology',
    specialists: [
        agataSkwerekSzewczykImageSmall
    ],
    relatedSpecializations: [
        'physioterapy',
        'orthopedics'
    ],
};

export const cardiology = {
    id: '0eb413c4-fe60-426b-8df4-32c706b24f37',
    specialization: 'cardiology',
    title: 'Kardiologia',
    description: 'Kardiologia to dziedzina medycyny zajmująca się schorzeniami i wadami układu sercowo-naczyniowego, ich rozpoznawaniem i leczeniem',
    path: '/services/cardiology',
    pathSpecialist: '/team/cardiology',
    pathPrices: '/prices/cardiology',
    image: servicesCardiology0,
    images: [
        {
            src: servicesCardiology0,
            alt: 'Kardiolog mierzy ciśnienie krwi',
            author: 'Freepik',
            href: 'https://pl.freepik.com/darmowe-zdjecie/mlody-meski-psycholog-z-pacjentem-mierzy-cisnienie-krwi_6190120.htm#page=5&query=badanie%20serca&position=24&from_view=search&track=ais'
        }
    ],
    specialists: [
        michalRadzioImageSmall
    ],
    relatedSpecializations: [
        'vascular-surgery',
        'clinical-dietitian'
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
    { ...vascularSurgery },
    { ...clinicalDietitian },
    { ...rheumatology },
    { ...cardiology }
];
