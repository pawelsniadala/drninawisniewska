import React, { useState, useEffect } from 'react';
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
import CardTechnology from '../../../components/CardTechnology';

import { services, usg } from '../../../data/services';
import { technology } from '../../../data/technology';

const ServicesUsgPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

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
                                    USG
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                USG
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    Strona w budowie.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={usg.image}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px',
                                        }}
                                    />
                                </Box>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header alternative'>
                                    Technologia
                                </Typography>
                                <Box className='card-wrapper technology page'>
                                    {width >= 991.98 ? (
                                        technology.filter(item => item.services.includes('usg')).map((item, index) => (
                                            <CardTechnology
                                                key={index}
                                                cardImage={item.imageMedium}
                                                cardTitle={item.title}
                                                cardPath={item.path}
                                                cardBadge={item.badge}
                                            />
                                        ))
                                    ) : (
                                        technology.filter(item => item.services.includes('usg')).map((item, index) => (
                                            <CardProposed
                                                key={index}
                                                cardTitle={item.title}
                                                cardDescription={item.description}
                                                cardImage={item.imageSmall}
                                                cardPath={item.path}
                                            />
                                        ))
                                    )}
                                </Box>
                            </Box>
                        </Box>
                        <Box className='proposed-services'>
                            <Box className='card-wrapper services-proposed'>
                                {services.length ? services.filter(item => item.title !== 'USG').map((item, index) => (
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

export default ServicesUsgPartial;
