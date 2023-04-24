import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { technology, almaHarmonyXlPro } from '../../../data/technology';

const TechnologyAlmaHarmonyXlProPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header technology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/technology' aria-current='page'>
                                    <Box>Technologia</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/' aria-current='page'>
                                    Home
                                </Link>
                                <Link to='/technology' aria-current='page'>
                                    Technologia
                                </Link>
                                <Typography color='text.primary'>
                                    Alma Harmony XL Pro
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {almaHarmonyXlPro.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    <strong>Harmony XL Pro</strong> to platforma laserowa najnowszej generacji, produkt izraelskiej firmy Alma Lasers. Obsługuje różne typy zaawansowanych technologii laserowych i innych źródeł światła. Harmony PRO oferuje <strong>rozwiązanie na większość problemów estetycznych</strong> i <strong>dermatologicznych</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    To wszechstronne narzędzie, które umożliwia łączenie różnych typów laserów i technologii podczas jednej procedury zabiegowej. To użytkownik komponuje zabieg <strong>dostosowany do potrzeb pacjenta</strong>, wybierając spośród <strong>ponad 30 głowic</strong>.  Techniki łączone zdecydowanie zwiększają skuteczność zabiegów. Platforma Harmony PRO to korzyść z doboru odpowiedniego lasera dostosowanego do problemu pacjenta.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Co go wyróżnia?</strong>
                                </Typography>
                                <Typography className='paragraph'>
                                    Alma Harmony XL PRO to <strong>multiaplikacyjna platforma laserowa</strong> najnowszej generacji. Obsługuje różne typy laserów i innych źródeł światła takich jak: laser Er: YAG 2940 nm, Er: Glass 1540 nm, Q-Switch 1064nm i 532 nm, Nd:YAG 1064 nm, światło podczerwone NIR, IPL, UV, LED, ultradźwięki Impact i Dye Vl.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>
                                </Typography>
                                <Typography className='paragraph'>
                                    Harmony XL PRO ma ponad 65 wskazań potwierdzonych certyfikatem FDA. <strong>Do najważniejszych należą</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'resurfacing skóry: redukcja zmarszczek, blizn, rozstępów - głowica iPixel,',
                                        'zmiany pigmentacyjne, przebarwienia - głowica DyeVl,',
                                        'melasma - głowica DyeV,',
                                        'zmiany naczyniowe, trądzik różowaty, naczyniaki, teleangiektazje - głowica DeyVL,',
                                        'lifting skóry - iPixel,',
                                        'zamykanie naczyń - głowica Nd : Yag.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: choroby nowotworowe, ciężkie i niewyrównane schorzenia ogólnoustrojowe (niewydolność nerek, cukrzyca, niestabilna choroba niedokrwienna serca), skłonność do powstawania blizn przerostowych, przyjmowanie w ostatnich 6 miesiącach retinoidów, antybiotyków, leków przeciwdepresyjnych lub immunosupresyjnych, świeża opalenizna, aktywne infekcje skóry poddawanej leczeniu, aktywna opryszczka, przyjmowanie leków światłouczulających, retinoidów, przyjmowanie ziół, stosowanie leków obniżającym krzepliwość krwi, bielactwo, łuszczyca, cukrzyca, padaczka, bliznowce, rozrusznik serca, fotodermatozy, choroby pęcherzowe skóry.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Opisy zabiegów</strong>
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>iPixel</strong>: Zabieg przeprowadza się po wcześniejszym miejscowym znieczuleniu skóry. Trwa około 25 minut. W trakcie odczuwalny jest niewielki dyskomfort. Skóra po wykonanym zabiegu jest bardzo zaczerwieniona, niekiedy obrzęknięta. Rumieniowi towarzyszy pieczenie, które ustępuje po około godzinie. Następnego dnia po zabiegu pojawia się suchość i uczucie ściągnięcia skóry, a następnie występuje złuszczanie naskórka. Należy zachować szczególne środki ostrożności aby nie doszło do zakażenia skóry (profilaktyczna zmiana pościeli, ręczników itp.). Po zabiegu należy zastosować fotoprotekcję.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>DyeVL</strong>: To nowoczesna technologia do zamykania naczyń, leczenia rumienia, trądziku różowatego, przebarwień posłonecznych i hormonalny. Laser Alma Harmony Dye-Vl posiada inteligentny system rozpoznawania pigmentów w skórze. Wyposażony jest system chłodzący skórę w trakcie trwania zabiegu, co zapewnia pacjentowi najwyższy poziom komfortu i niesamowitą skuteczność. Zabieg jest praktycznie bezbolesny. Po nałożeniu żelu na skórę i okularów ochronnych lekarz oddaje strzały lasera, a następnie chłodzi skórę. Tuż po zabiegu skóra jest czerwona i obrzęknięta. Do godziny odczuwalne jest ciepło. Sam zabieg trwa około 15 minut.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Jak wygląda skóra po zabiegu?</strong>
                                </Typography>
                                <Typography className='paragraph'>
                                    Głowica wyposażona jest w system chłodzenia, który zapewnia minimalny dyskomfort. Po zabiegu skóra jest zaczerwieniona i obrzęknięta, objawy znikają po 3- 4 dniach. W przypadku przebarwień, zmiany objęte leczeniem stają się ciemniejsze i do 4 tygodni rozjaśniają się.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Ile należy wykonać zabiegów?</strong>
                                </Typography>
                                <Typography className='paragraph'>
                                    W zależności od rozległości zmian oraz obszaru ciała, może być konieczne wykonanie serii zabiegów. Najczęściej jest to 1 do 3 zabiegów w odstępach 4 tygodni. W praktyce często wystarcza jeden zabieg.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Jak dbać o skórę po zabiegu?</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Do 4 tygodni po zabiegu nie wolno opalać się.',
                                        'Bezwzględnie należy stosować najwyższą fotoprotekcję.',
                                        'Należy unikać czynników powodujących rozszerzenie naczyń krwionośnych przez okres 7 dni (wysiłek fizyczny, sauna, basen, zmiany temperatur).',
                                        'Należy stosować kremy i maści wg zaleceń lekarza.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Jak przygotować się do zabiegu nieablacyjnego odmładzania skóry?</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Po terapii doustnymi retinoidami lub izotretynoiną należy odczekać okres 6 miesięcy od momentu odstawienia.',
                                        'Należy odstawić leki i zioła fototoksyczne i fotouczulające (dziurawiec, pokrzywa, nagietek, herbata typu figura, zioła chińskie) na 3 tygodnie przed zabiegiem.',
                                        'Po kuracji antybiotykami należy odczekać ok. 2 tygodnie od momentu odstawienia leków.',
                                        'Tydzień przed zabiegiem nie wykonywać depilacji o okolicy zabiegowej.',
                                        'Obszar zabiegowy nie może być podrażniony ani przesuszony.',
                                        'Na 4 tygodnie przed zabiegiem nie należy opalać skóry.',
                                        'Na 2 tygodnie przed zabiegiem nie należy stosować kremów z retinoidami, innych preparat złuszczających (peelingi, kwasy owocowe, witamina A) oraz kosmetyków brązujących, samoopalaczy.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                        <Box className='proposed-technology'>
                            <Box className='header-wrapper'>
                                <Typography className='header'>
                                    Pozostały sprzęt
                                </Typography>
                            </Box>
                            <Box className='card-wrapper technology-proposed'>
                                {technology.filter(item => item.designation !== 'almaHarmonyXlPro').map((item) => (
                                    <CardProposed
                                        key={item.id}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.imageSmall}
                                        cardPath={item.path}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TechnologyAlmaHarmonyXlProPartial);
