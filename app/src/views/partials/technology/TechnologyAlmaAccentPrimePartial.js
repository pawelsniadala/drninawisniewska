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
import { almaAccentPrime } from '../../../data/technology';

const TechnologyAlmaAccentPrimePartial = () => {
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
                                    Alma Accent Prime
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {almaAccentPrime.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    Accent Prime to zaawansowana i wielozadaniowa platforma zabiegowa marki Alma Lasers przeznaczona do zabiegów ujędrniających skórę oraz modelujących ciało i twarz. Urządzenie łączy w sobie kilka innowacyjnych technologii: unipolarną falę radiową o wysokiej częstotliwości (40,68 MHz), bipolarną falę radiową oraz dwa typy ultradźwięków m.in. Lamba, ultradźwięki zimne działające selektywnie na komórki tłuszczowe oraz ultradźwięki ciepłe dające bardzo wysoki poziom kawitacji. Dla uzyskania najlepszych efektów zabiegowych warto łączyć w procedurach zabiegowych technologie ultradźwiękowe z falą radiową, która nie tylko zmniejsza objętość komórek tłuszczowych ale działa także ujędrniająco na skórę.
                                </Typography>
                            </Box>
                            <Box marginBottom={3}>
                                <LazyLoadImage
                                    height={'100%'}
                                    width={'100%'}
                                    src={almaAccentPrime.imageLarge}
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
                            </Box>
                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Zastosowanie Accent Prime
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                    {[
                                        'Accent Primetm to szeroka gama skutecznych zabiegów',
                                        'Połączenie innowacyjnych technologii podczas zabiegu to większe efekty terapeutyczne',
                                        'Wyposażony w najwyższą dostępną na rynku częstotliwość fali radiowej - 40,68 MHz, która pozwala na szybkie i równomierne rozgrzanie tkanek',
                                        'Duża moc urządzenia - aż 300W',
                                        'Urządzenie do zadań specjalnych oraz korekcji trudnych obszarów, takich jak: drugi podbródek, kolana, bryczesy, brzuchy pociążowe',
                                        'Szybki zabieg głowicą ultraspeedtm - 20 minut na dużym obszarze ciała'
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
                                {technology.length ? technology.filter(item => item.designation !== 'almaAccentPrime').map((item, index) => (
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

export default TechnologyAlmaAccentPrimePartial;
