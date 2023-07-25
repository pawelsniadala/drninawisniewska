import React from 'react';
import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import {
    technology,
    biolitecLeonardoMini
} from '../../../data/technology';

const TechnologyBiolitecLeonardoMiniPartial = () => {
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
                                    <ArrowBackIcon />
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
                                    {biolitecLeonardoMini.title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Biolitec<sup>®</sup> Leonardo<sup>®</sup> Mini
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box className='box-technology'>
                                <Typography className='paragraph'>
                                    Żylaki kończyn dolnych są dziś jedną z najbardziej powszechnych chorób. Około 40% kobiet i 20% mężczyzn ma objawy w postaci: zmęczonych, ciężkich nóg oraz obrzęków nóg i żył widocznych przez skórę.
                                </Typography>
                                <Typography className='paragraph'>
                                    Jej główne przyczyny to: wrodzona słabość tkanki łącznej, zmiany hormonalne, a także długotrwałe przebywanie w pozycji siedzącej lub stojącej.
                                </Typography>
                                <Typography className='paragraph'>
                                    Najprostszą formą leczenia chorób żył jest kompresjoterapia (pończochy lub podkolanówki uciskowe). Jej działanie polega na zmniejszeniu szerokości żyły poprzez wywieranie na nią zewnętrznego ucisku. Przyspiesza to przepływ krwi w żyle. Jednakże gdy żyła się raz rozciągnie, nigdy już nie zmniejszy się do pierwotnego rozmiaru więc kompresjoterapię trzeba stosować przez resztę życia.
                                </Typography>
                                <Typography className='paragraph'>
                                    Metodami mniej inwazyjnymi są skleroterapia i zabiegi z wykorzystaniem prądu RF.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg z wykorzystaniem prądu RF polega na wprowadzeniu do żyły cewnika i podgrzaniu jej ścian od wewnątrz za pomocą fal RF. Ściany żyły wraz z przylegającymi tkankami ulegają denaturacji i obkurczeniu, a w ciągu kilku tygodni ściana włóknieje. Jednak sonda RF jest dość gruba i metoda nie nadaje się do wszystkich średnic żył.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg laserowego usuwania żylaków przeprowadzany jest w warunkach ambulatoryjnych, w znieczuleniu miejscowym. Pod kontrolą USG lekarz wprowadza do chorej żyły przez małe nakłucie cienki światłowód, a następnie naświetla żyłę od wewnątrz światłem lasera. Zabiegowi towarzyszy tylko minimalny ból w trakcie miejscowego podawania znieczulenia wokół żyły. Pacjent może wrócić do normalnej aktywności bezpośrednio po zabiegu. Jest to najbezpieczniejszymi i najskuteczniejszym zabiegiem, zapewniającym wysoki komfort pacjenta w tracie i po zabiegu.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Korzyści dla pacjenta wynikające z wyboru zabiegu</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Najwyższa skuteczność spośród dostępnych metod – ponad 97% po 3 latach od zabiegu.',
                                        'Natychmiastowe uruchomienie po zabiegu i szybki powrót do normalnej aktywności.',
                                        'Minimalny ból lub całkowity brak odczuć bólowych w czasie rekonwalescencji.',
                                        'Maksymalny komfort w czasie zabiegu.',
                                        'Krótki czas zabiegu.',
                                        'Brak blizn i małe ryzyko wystąpienia zasinień po zabiegu.',
                                        'Doskonały wynik medyczny i kosmetyczny.'
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

                        <Box className='proposed-wrapper'>
                            <Box className='box-proposed technology'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostały sprzęt
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {technology.filter(item => item.designation !== 'biolitecLeonardoMini').map((item) => (
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
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TechnologyBiolitecLeonardoMiniPartial);
