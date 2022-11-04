import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { technology, biolitecLeonardoMini } from '../../../data/technology';

const TechnologyBiolitecLeonardoMiniPartial = () => {
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
                                            objectPosition: '50% 30%',
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
                                        'możliwość zasilania bateryjnego,'
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
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'użytkowaniu poza okresem ważności produktu,',
                                        'zagrożeniom spowodowanym niewłaściwym połączeniem światłowodu z laserem.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Dzięki temu zostało zapewnione wysokie bezpieczeństwo pacjenta.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='proposed-technology'>
                            <Box className='card-wrapper technology-proposed'>
                                {technology.filter(item => item.designation !== 'biolitecLeonardoMini').map((item, index) => (
                                    <CardProposed
                                        key={index}
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

export default TechnologyBiolitecLeonardoMiniPartial;
