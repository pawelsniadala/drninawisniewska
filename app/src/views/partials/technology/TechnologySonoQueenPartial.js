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
import { sonoQueen } from '../../../data/technology';

const TechnologySonoQueenPartial = () => {
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
                                    {sonoQueen.title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {sonoQueen.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    SonoQueen to prawdziwie królewski dotyk odmładzający, zamknięty w formie szybkiego, komfortowego zabiegu na twarz i ciało. Proces przebudowy i liftingu odbywa się wewnątrz Twojej skóry, dzięki temu natychmiast powracasz do swoich codziennych zajęć, a resztę pracy nad młodym wyglądem pozostawiasz swojej skórze. SonoQueen to nowa era uzyskiwania efektu wielowymiarowego, trwałego napięcia i wygładzenia skóry, zarówno twarzy, jak i ciała.
                                </Typography>
                            </Box>
                            {/* <Box marginBottom={3}>
                                <LazyLoadImage
                                    height={'100%'}
                                    width={'100%'}
                                    src={sonoQueen.imageLarge}
                                    alt='Remote working'
                                    effect='blur'
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 8,
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: '400px',
                                        objectPosition: '50% 67%',
                                    }}
                                />
                            </Box> */}
                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Zastosowanie SonoQueen
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                    {[
                                        'Lifting twarzy i ujędrnianie ciała',
                                        'Napięcie delikatnej skóry w okolicach oczu',
                                        'Ujędrnienie skóry w okolicy ramion',
                                        'Lifting wiotkiej skóry na brzuchu',
                                        'Uniesienie i ujędrnienie pośladków',
                                        'Wygładzenie skóry w okolicach ud i kolan',
                                        'Redukcja tzw. "drugiego podbródka"',
                                        'Rozświetlenie skóry',
                                        'Wygładzenie zmarszczek',
                                        'Spowolnienie procesu starzenia skóry'
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
                                {technology.length ? technology.filter(item => item.designation !== 'sonoQueen').map((item, index) => (
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

export default TechnologySonoQueenPartial;
