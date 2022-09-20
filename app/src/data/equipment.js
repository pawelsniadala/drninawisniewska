import vectusImageLarge from '../assets/equipment/vectus/vectusImageLarge.jpg';
import vectusImageSmall from '../assets/equipment/vectus/vectusImageSmall.jpg';

import icooneImageLarge from '../assets/equipment/icooneLaserMed2/icooneImageLarge.jpg';
import icooneLaserMed2ImageSmall from '../assets/equipment/icooneLaserMed2/icooneLaserMed2ImageSmall.jpg';

// import icooneImageLarge from '../assets/equipment/icoone/icooneImageLarge.jpg';
import laserAlmaHarmonySmall from '../assets/equipment/laserAlmaHarmony/laserAlmaHarmonySmall2.jpg';

import accentUltraSmall from '../assets/equipment/accentUltra/accentUltraSmall3.jpg';


import fonsSvrLaserFrakcyjnyCo2ImageSmall from '../assets/equipment/fonsSvrLaserFrakcyjnyCo2/fonsSvrLaserFrakcyjnyCo2ImageSmall.png';


export const vectus = {
    designation: 'vectus',
    name: 'Vectus™',
    description: 'Vectus™ to produkt amerykańskiej firmy Palomar, która stworzyła pierwszą na świecie technologię laserowego usuwania owłosienia, do dziś chronioną patentem. Vectus™ jest owocem trwających kilkanaście lat doświadczeń i badań nad udoskonaleniem systemu lasera diodowego. Wykorzystano w nim wiele nowatorskich rozwiązań decydujących o wyjątkowej skuteczności, bezpieczeństwie i komforcie pacjenta.',
    image: vectusImageSmall,
    path: '/equipment/vectus'
};

export const icooneLaserMed2 = {
    designation: 'icooneLaserMed2',
    name: 'Icoone® Laser Med 2',
    description: 'Projekt Icoone® jest inspirowany intuicją profesora Jean-Claude\'a Guimberteau, specjalisty w dziedzinie chirurgii rekonstrukcyjnej, który poświęcił wiele lat na obserwację skóry w zakresie struktury tkanki łącznej: Guimberteau wykazał, że skóra musi być pojmowana jako żywa, ciągła materia, a tkanka podskórna składa się z sieci mikrowakuoli, które tworzą funkcjonalną jednostkę struktury tkanki. Ta nowa wizja całkowicie zastępuje tradycyjną koncepcję tkanki warstwowej, a tym samym narzuca potrzebę nowego sposobu leczenia skóry.',
    image: icooneLaserMed2ImageSmall,
    path: '/equipment/icoone'
};

export const laserAlmaHarmony = {
    designation: 'laserAlmaHarmony',
    name: 'Laser Alma Harmony',
    description: 'Projekt Icoone® jest inspirowany intuicją profesora Jean-Claude\'a Guimberteau, specjalisty w dziedzinie chirurgii rekonstrukcyjnej, który poświęcił wiele lat na obserwację skóry w zakresie struktury tkanki łącznej: Guimberteau wykazał, że skóra musi być pojmowana jako żywa, ciągła materia, a tkanka podskórna składa się z sieci mikrowakuoli, które tworzą funkcjonalną jednostkę struktury tkanki. Ta nowa wizja całkowicie zastępuje tradycyjną koncepcję tkanki warstwowej, a tym samym narzuca potrzebę nowego sposobu leczenia skóry.',
    image: laserAlmaHarmonySmall,
    path: '/equipment/icoone'
};

export const accentUltra = {
    designation: 'accentUltra',
    name: 'Accent Ultra V',
    description: 'Projekt Icoone® jest inspirowany intuicją profesora Jean-Claude\'a Guimberteau, specjalisty w dziedzinie chirurgii rekonstrukcyjnej, który poświęcił wiele lat na obserwację skóry w zakresie struktury tkanki łącznej: Guimberteau wykazał, że skóra musi być pojmowana jako żywa, ciągła materia, a tkanka podskórna składa się z sieci mikrowakuoli, które tworzą funkcjonalną jednostkę struktury tkanki. Ta nowa wizja całkowicie zastępuje tradycyjną koncepcję tkanki warstwowej, a tym samym narzuca potrzebę nowego sposobu leczenia skóry.',
    image: accentUltraSmall,
    path: '/equipment/icoone'
};

export const fonsSvrLaserFrakcyjnyCo2 = {
    designation: 'fonsSvrLaserFrakcyjnyCO2',
    name: 'Accent Ultra V',
    description: 'Projekt Icoone® jest inspirowany intuicją profesora Jean-Claude\'a Guimberteau, specjalisty w dziedzinie chirurgii rekonstrukcyjnej, który poświęcił wiele lat na obserwację skóry w zakresie struktury tkanki łącznej: Guimberteau wykazał, że skóra musi być pojmowana jako żywa, ciągła materia, a tkanka podskórna składa się z sieci mikrowakuoli, które tworzą funkcjonalną jednostkę struktury tkanki. Ta nowa wizja całkowicie zastępuje tradycyjną koncepcję tkanki warstwowej, a tym samym narzuca potrzebę nowego sposobu leczenia skóry.',
    image: fonsSvrLaserFrakcyjnyCo2ImageSmall,
    path: '/equipment/icoone'
};

export const equipment = [
    { ...vectus },
    { ...laserAlmaHarmony },
    { ...accentUltra },
    { ...icooneLaserMed2 },
    { ...fonsSvrLaserFrakcyjnyCo2 }
];
