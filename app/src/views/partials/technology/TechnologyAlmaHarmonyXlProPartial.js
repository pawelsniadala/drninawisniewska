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
import { almaHarmonyXlPro } from '../../../data/technology';

const TechnologyAlmaHarmonyXlProPartial = () => {
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
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/technology' aria-current='page'>
                                    <KeyboardDoubleArrowLeftIcon sx={{ mr: 0.5 }} fontSize='smform' />
                                    <Box>Technologia</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
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
                                    Harmony XL Pro to platforma laserowa najnowszej generacji, produkt izraelskiej firmy Alma. Jest to rozwiązanie oferowane osobom poszukującym urządzenia, które będzie wykorzystywało technologię przeznaczoną na większość problemów estetycznych i dermatologicznych. Obsługuje różne typy zaawansowanych technologii laserowych i innych źródeł światła takich jak: laser Er: YAG 2940 nm, Er: Glass 1540 nm, Q-Switch 1064nm i 532 nm, Nd:YAG 1064 nm, światło podczerwone NIR, IPL, UV, LED, ultradźwięki Impact i Dye-Vl.
                                </Typography>
                                <Typography className='paragraph'>
                                    To wszechstronne narzędzie, które umożliwia łączenie różnych typów laserów i technologii podczas jednej procedury zabiegowej. Techniki łączone zdecydowanie zwiększają skuteczność zabiegów. To użytkownik komponuje urządzenie dostosowane do potrzeb swoich pacjentów i charakteru swojej działalności, wybierając spośród ponad 30 głowic. Harmony XL PRO poprzez możliwość rozbudowy rozwija się wraz z naszą działalnością. Dzięki temu urządzenie się nie starzeje, a nasza oferta jest zawsze aktualna. To szczególnie ważne na szybko rozwijającym się rynku medycyny estetycznej.
                                </Typography>
                            </Box>
                            {/* <Box marginBottom={3}>
                                <LazyLoadImage
                                    height={'100%'}
                                    width={'100%'}
                                    src={almaHarmonyXlPro.imageMedium}
                                    alt='Remote working'
                                    effect='blur'
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 8,
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: '400px',
                                        objectPosition: '50% 11%',
                                        backgroundColor: '#e6e6e6'
                                    }}
                                />
                            </Box> */}
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    Wprowadzenie kolejnej technologii na Harmony XL PRO jest korzystniejsze finansowo, aniżeli zakup wolnostojącego odpowiednika. W naszej ofercie znajdziesz wiele propozycji głowic na większość problemów estetycznych.
                                </Typography>
                            </Box>
                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Zalety Harmony XL Pro
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                    {[
                                        'System multiaplikacyjny',
                                        'Ponad 65 wskazań potwierdzonych certyfikatem FDA',
                                        'Możliwość rozbudowy urządzenia w czasie',
                                        'Kompleksowe podejście do pacjenta',
                                        'Możliwość łączenia technologii dla maksymalizacji efektów',
                                        'Skuteczność potwierdzona licznymi badaniami klinicznymi',
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
                                {technology.length ? technology.filter(item => item.designation !== 'almaHarmonyXlPro').map((item, index) => (
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

export default TechnologyAlmaHarmonyXlProPartial;
