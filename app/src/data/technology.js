import vectusImageSmall from '../assets/technology/vectus/vectusImageSmall.jpg';
import vectusImageMedium from '../assets/technology/vectus/vectusImageMedium.png';
import vectusImageLarge from '../assets/technology/vectus/vectusImageLarge.jpg';

import laserAlmaHarmonyImageSmall from '../assets/technology/laserAlmaHarmony/laserAlmaHarmonyImageSmall.jpg';
import laserAlmaHarmonyImageMedium from '../assets/technology/laserAlmaHarmony/laserAlmaHarmonyImageMedium.png';

import icooneLaserMed2ImageSmall from '../assets/technology/icooneLaserMed2/icooneLaserMed2ImageSmall.jpg';
import icooneLaserMed2ImageMedium from '../assets/technology/icooneLaserMed2/icooneLaserMed2ImageMedium.png';
import icooneLaserMed2ImageLarge from '../assets/technology/icooneLaserMed2/icooneLaserMed2ImageLarge.jpg';

import fonsSvrFractionLaserCo2ImageSmall from '../assets/technology/fonsSvrFractionLaserCo2/fonsSvrFractionLaserCo2ImageSmall.png';
import fonsSvrFractionLaserCo2ImageMedium from '../assets/technology/fonsSvrFractionLaserCo2/fonsSvrFractionLaserCo2ImageMedium.png';
import fonsSvrFractionLaserCo2ImageLarge from '../assets/technology/fonsSvrFractionLaserCo2/fonsSvrFractionLaserCo2ImageLarge.png';

import accentUltraImageSmall from '../assets/technology/accentUltra/accentUltraImageSmall.jpg';
import accentUltraImageMedium from '../assets/technology/accentUltra/accentUltraImageMedium.png';

import sonoQueenImageSmall from '../assets/technology/sonoQueen/sonoQueenImageSmall.png';
import sonoQueenImageMedium from '../assets/technology/sonoQueen/sonoQueenImageMedium.png';

export const vectus = {
    designation: 'vectus',
    title: 'Vectus™',
    description: 'Vectus™ to produkt amerykańskiej firmy Palomar, która stworzyła pierwszą na świecie technologię laserowego usuwania owłosienia, do dziś chronioną patentem. Vectus™ jest owocem trwających kilkanaście lat doświadczeń i badań nad udoskonaleniem systemu lasera diodowego. Wykorzystano w nim wiele nowatorskich rozwiązań decydujących o wyjątkowej skuteczności, bezpieczeństwie i komforcie pacjenta.',
    imageSmall: vectusImageSmall,
    imageMedium: vectusImageMedium,
    imageLarge: vectusImageLarge,
    path: '/technology/vectus'
};

export const icooneLaserMed2 = {
    designation: 'icooneLaserMed2',
    title: 'Icoone® Laser Med 2',
    description: 'Projekt Icoone® jest inspirowany intuicją profesora Jean-Claude\'a Guimberteau, specjalisty w dziedzinie chirurgii rekonstrukcyjnej, który poświęcił wiele lat na obserwację skóry w zakresie struktury tkanki łącznej: Guimberteau wykazał, że skóra musi być pojmowana jako żywa, ciągła materia, a tkanka podskórna składa się z sieci mikrowakuoli, które tworzą funkcjonalną jednostkę struktury tkanki. Ta nowa wizja całkowicie zastępuje tradycyjną koncepcję tkanki warstwowej, a tym samym narzuca potrzebę nowego sposobu leczenia skóry.',
    imageSmall: icooneLaserMed2ImageSmall,
    imageMedium: icooneLaserMed2ImageMedium,
    imageLarge: icooneLaserMed2ImageLarge,
    path: '/technology/icoone-laser-med2'
};

export const laserAlmaHarmony = {
    designation: 'laserAlmaHarmony',
    title: 'Laser Alma Harmony',
    imageMedium: laserAlmaHarmonyImageMedium,
    imageSmall: laserAlmaHarmonyImageSmall,
    path: '/technology/icoone'
};

export const accentUltraV = {
    designation: 'accentUltra',
    title: 'Accent Ultra V',
    imageSmall: accentUltraImageSmall,
    imageMedium: accentUltraImageMedium,
    path: '/technology/icoone'
};

export const fonsSvrFractionLaserCo2 = {
    designation: 'fonsSvrLaserFrakcyjnyCo2',
    title: 'Fons SVR™ Laser Frakcyjny CO\u2082',
    description: 'Laser Frakcyjny Fons SVR™ jest idealnym i sprawdzonym rozwiązaniem znajdującym zastosowanie w wielu dziedzinach medycyny. Laser pozwala na osiągnięcie bardzo dobrych efektów zabiegowych w postaci likwidacji blizn potrądzikowych, poprawy jakości skóry i wytworzenia nowych struktur kolagenu.',
    imageSmall: fonsSvrFractionLaserCo2ImageSmall,
    imageMedium: fonsSvrFractionLaserCo2ImageMedium,
    imageLarge: fonsSvrFractionLaserCo2ImageLarge,
    path: '/technology/fons-svr-fraction-laser-co2'
};

export const sonoQueen = {
    designation: 'fonsSvrLaserFrakcyjnyCo2',
    title: 'Fons SVR™ Laser Frakcyjny CO\u2082',
    description: 'Laser Frakcyjny Fons SVR™ jest idealnym i sprawdzonym rozwiązaniem znajdującym zastosowanie w wielu dziedzinach medycyny. Laser pozwala na osiągnięcie bardzo dobrych efektów zabiegowych w postaci likwidacji blizn potrądzikowych, poprawy jakości skóry i wytworzenia nowych struktur kolagenu.',
    imageSmall: sonoQueenImageSmall,
    imageMedium: sonoQueenImageMedium,
    imageLarge: sonoQueenImageMedium,
    path: '/technology/fons-svr-fraction-laser-co2'
};

export const technology = [
    { ...vectus },
    { ...laserAlmaHarmony },
    { ...icooneLaserMed2 },
    
    { ...fonsSvrFractionLaserCo2 },
   
    { ...accentUltraV },
    { ...sonoQueen },
   
];
