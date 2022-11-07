import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';

import { services, cosmeticSurgery } from '../../../data/services';

const ServicesCosmeticSurgeryPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-dermatology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/services' aria-current='page'>
                                    {/* <NavigateBeforeIcon sx={{ mr: '3px' }} fontSize='smform' /> */}
                                    <Box>Usługi</Box>
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
                                <Link to='/services' aria-current='page'>
                                    Usługi
                                </Link>
                                <Typography color='text.primary'>
                                    Chirurgia plastyczna
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Chirurgia plastyczna
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Plastyka powiek
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Plastyka powiek</strong>, inaczej blefaroplastyka, to zabieg mający na celu usunięcie nadmiaru skóry wokół oczu. W zakres blefaroplastyki wchodzi zarówno <strong>korekta powieki górnej jak i dolnej</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    Plastyka powiek jest najskuteczniejszą metodą walki z twz. opadającą powieką. Wskazaniami do zabiegu prócz defektu estetycznego są również asymetria oczu, problemy z widocznością, przepukliny tłuszczowe a także wiotkość tkanki wokół oczu.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={cosmeticSurgery.servicesCosmeticSurgeryPlasticSurgeryOfTheEyelids}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '758px',
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Zabieg przeprowadzany jest w znieczuleniu miejscowym. Bezpośrednio po zabiegu skóra jest zaczerwieniona i widoczne są delikatne punkty sublimacji. Drugiego dnia po zabiegu może pojawić się lekki obrzęk, który utrzymuje się maksymalnie cztery dni. Drobne strupki  odpadają  po sześciu dniach.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='proposed-services'>
                            <Box className='card-wrapper services-proposed'>
                                {services.length ? services.filter(item => item.title !== 'Chirurgia plastyczna').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.image}
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

export default ServicesCosmeticSurgeryPartial;
