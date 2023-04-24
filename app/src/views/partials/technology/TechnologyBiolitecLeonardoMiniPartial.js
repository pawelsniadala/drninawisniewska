import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { technology, biolitecLeonardoMini } from '../../../data/technology';

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
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    Laser Biolitec<sup>®</sup> Leonardo<sup>®</sup> Mini współpracuje z szerokim spektrum specjalnych światłowódów i zestawów aplikacyjnych opracowanych przez Biolitec<sup>®</sup>.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={biolitecLeonardoMini.imageLarge}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px',
                                            objectPosition: '50% 30%'
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Zalety</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'prosty, ale wszechstronny,',
                                        'szerokie spektrum małoinwazyjnych metod terapeutycznych,',
                                        'zastosowania laserowe,',
                                        'ekonomiczny,',
                                        'niskie koszty utrzymania i niezawodne diody laserowe,',
                                        'zastosowanie multidyscyplinarne,',
                                        'mały rozmiar,',
                                        'przyjazny dla użytkownika,',
                                        'poręczny i mobilny,',
                                        'szybka konfiguracja,',
                                        'przejrzysty i intuicyjny interfejs użytkownika,',
                                        'opcjonalne zastosowania,',
                                        'możliwość zasilania bateryjnego.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Leonardo<sup>®</sup> Mini współpracuje z szerokim spektrum światłowodów opracowanych przez Biolitec. Zastosowane złącze światłowodu jest przyjazne dla użytkownika oraz posiada zabezpieczenie elektroniczne.
                                </Typography>
                                <Typography className='paragraph'>
                                    Mobilna wersja lasera Leonardo Mini jest idealnym rozwiązaniem do endożylnego usuwania żył i obecnie jest uważany za złoty standard w tego typu zabiegach. Długość fali 1470nm zapewnia odpowiednio płytką penetrację światła w ścianie żyły by nie uszkadzać niepotrzebnie otaczających tkanek, a dwupierścieniowa konstrukcja światłowodu zwiększa skuteczność zamykania małych i dużych żył.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Zalety leczenia ELVeS</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'maksymalny komfort pacjenta,',
                                        'mniejszy ból po zabiegu,',
                                        'mniejszy stan zapalny,',
                                        'mniejsze ryzyko siniaków,',
                                        'lepszy efekt kosmetyczny,',
                                        'szybki powrót do normalnej aktywności,',
                                        'krótki czas zabiegu.'
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
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TechnologyBiolitecLeonardoMiniPartial);
