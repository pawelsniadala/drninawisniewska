import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { technology } from '../../../data/technology';
import { fonsSvrFractionLaserCo2 } from '../../../data/technology';

const TechnologyFonsSvrFractionLaserCo2Partial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header technology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/technology' aria-current='page'>
                                    <KeyboardDoubleArrowLeftIcon sx={{ mr: 0.5 }} fontSize='smform' />
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
                                    Fons SVR Laser Frakcyjny CO<sub>2</sub>
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Fons SVR™ Laser Frakcyjny CO<sub>2</sub>
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>

                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    Laser Frakcyjny Fons SVR™ jest idealnym i sprawdzonym rozwiązaniem znajdującym zastosowanie w wielu dziedzinach medycyny. Laser pozwala na osiągnięcie bardzo dobrych efektów zabiegowych w postaci likwidacji blizn potrądzikowych, poprawy jakości skóry i wytworzenia nowych struktur kolagenu. W porównaniu z tradycyjnymi laserami CO<sub>2</sub>, frakcjonowanie ablacyjne laserami Fons pozwala osiągnąć dużą głębokość penetracji w skórze, dając efektywne procedury zabiegowe. Dzięki wysokiej mocy i wszechstronności może być wykorzystywany w wielu wskazaniach. Wygodę i precyzję działania zapewnia siedmioprzegubowe ramię.
                                </Typography>
                                <Typography className='paragraph'>
                                    Ogromną zaletą jest bezkontaktowa praca lasera gwarantująca całkowitą czystość pola operacyjnego. Bardzo ważna jest także istotna redukcja krwawienia oraz natychmiastowa koagulacja. W trakcie wykonywania zabiegu uzyskujemy tysiące mikroskopijnych uszkodzeń tkanki, natomiast pozostałe obszary pozostają nienaruszone i to właśnie one przyspieszają odnowę zniszczonych stref skóry. Dzięki temu okres rekonwalescencji jest zredukowany do minimum przy jedoczesnym zachowaniu wysokiej efektywności terapii.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <LazyLoadImage
                                    height={'100%'}
                                    width={'100%'}
                                    src={fonsSvrFractionLaserCo2.imageLarge}
                                    alt='Remote working'
                                    effect='blur'
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 8,
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: '400px',
                                        objectPosition: '50% 85%',
                                        backgroundColor: '#e6e6e6'
                                    }}
                                />
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Możliwości zabiegowe
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                    {[
                                        'Resurfacing skóry',
                                        'Lifting i ujędrnianie skóry',
                                        'Usuwanie blizn (potrądzikowych, pourazowych, oparzeniowych)',
                                        'Likwidacja rozstępów',
                                        'Redukcja trądziku',
                                        'Usuwanie przebarwień',
                                        'Usuwanie zmarszczek',
                                        'Poprawa jakości skóry',
                                        'Skuteczne efekty w niwelowaniu fotostarzenia się skóry',
                                        'Zabiegi chirurgiczne z wykorzystaniem punktowej głowicy lasera CO\u2082',
                                        'Ginekologia estetyczna',
                                    ].map((item, index) => (
                                        <ListBulleted
                                            ListBulletedItem={item}
                                            ListBulletedKey={index}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Zalety Lasera Fons SVR™
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                    {[
                                        'Szybki czas rekonwalescencji (od 3 do 6 dni)',
                                        'Wszechstronność - podwójny moduł w jednym aparacie (zabiegi frakcyjne oraz standardowe procedury chirurgiczne)',
                                        'Łatwość obsługi aparatu przez użytkownika',

                                        'Bardzo prosty panel sterowania',
                                        'Czytelny i intuicyjny interfejs',
                                        'Nowoczesny wygląd urządzenia',
                                        'Możliwość doboru pola zabiegowego podczas skanowania powierzchni zabiegowej',
                                        'Precyzja wykonanego zabiegu'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            ListBulletedItem={item}
                                            ListBulletedKey={index}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>


                        </Box>
                        <Box className='proposed-technology'>
                            <Box className='card-wrapper technology-proposed'>
                                {technology.length ? technology.filter(item => item.designation !== 'fonsSvrLaserFrakcyjnyCo2').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.imageSmall}
                                        cardPath={item.path}
                                    />
                                )) : (
                                    <Box>Brak danych</Box>
                                )}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default TechnologyFonsSvrFractionLaserCo2Partial;
