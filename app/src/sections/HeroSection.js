import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Container from '../components/Container';

const HeroSection = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    useEffect(() => {
        const jarallaxInit = async () => {
            const jarallaxElems = document.querySelectorAll('.jarallax');
            if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
                return;
            }

            const { jarallax } = await import('jarallax');

            jarallax(jarallaxElems, { speed: 0.2 });
        };

        jarallaxInit();
    });

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    }

    function useWindowDimensions() {
        const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

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
        <Box
            component='section'
            className='hero-section'
        >
            {width >= 991.98 ? (
                <Box
                    id='carouselExampleIndicators'
                    className='carousel slide'
                    data-bs-ride='carousel'
                >
                    <ol className='carousel-indicators'>
                        <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active'></li>
                        <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1'></li>
                        <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2'></li>
                        <li data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3'></li>
                    </ol>
                    <Box className='carousel-inner'>
                        <Box className='carousel-item active' data-bs-interval='5000'>
                            <LazyLoadImage
                                className='carousel-image'
                                width={'100%'}
                                src={require('../assets/hero/hero1.jpg')}
                                alt='Zadbaj o zdrową skórę'
                                effect='blur'
                            />
                            <Box className='carousel-caption d-none d-md-block' sx={{ bottom: '1.25rem' }}>
                                <Container>
                                    <Typography
                                        className='carousel-header'
                                        variant='h4'
                                        align={'left'}
                                        data-aos={'fade-in'}
                                        data-aos-delay={'100'}
                                    >
                                        Zadbaj o zdrową skórę
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        className='carousel-subheader'
                                        align={'left'}
                                        data-aos={'fade-in'}
                                        data-aos-delay={'100'}
                                    >
                                        Zapoznaj się z treścią naszych specjalizacji
                                    </Typography>
                                    <Box
                                        display='flex'
                                        justifyContent={'left'}
                                        marginTop={2}
                                        data-aos={'fade-in'}
                                        data-aos-delay={'100'}
                                    >
                                        <Box
                                            className='link-contained-more'
                                            width='auto'
                                        >
                                            <Button
                                                component={Link}
                                                to={`/services`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                endIcon={<ArrowForwardIcon />}
                                            >
                                                Zobacz nasze Specjalizacje
                                            </Button>
                                        </Box>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                        <Box className='carousel-item' data-bs-interval='5000'>
                            <img
                                className='carousel-image'
                                src={require('../assets/hero/hero2.jpg')}
                                alt='Dermatologia'
                            />
                            <Box className='carousel-caption d-none d-md-block' sx={{ bottom: '1.25rem' }}>
                                <Container>
                                    <Typography
                                        className='carousel-header'
                                        variant='h4'
                                        align={'right'}
                                    >
                                        Dermatologia
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        className='carousel-subheader'
                                        align={'right'}
                                    >
                                        Zapoznaj się z cennikiem naszych usług
                                    </Typography>
                                    <Box
                                        display='flex'
                                        justifyContent={'right'}
                                        marginTop={2}
                                    >
                                        <Box
                                            className='link-contained-more'
                                            width='auto'
                                        >
                                            <Button
                                                component={Link}
                                                to={`/prices`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                fullWidth={isMd ? false : true}
                                                endIcon={<ArrowForwardIcon />}
                                            >
                                                Zobacz cennik usług
                                            </Button>
                                        </Box>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                        <Box className='carousel-item' data-bs-interval='5000'>
                            <img
                                className='carousel-image'
                                src={require('../assets/hero/hero3.jpg')}
                                alt='Medycyna estetyczna'
                            />
                            <Box className='carousel-caption d-none d-md-block' sx={{ top: '1.25rem' }}>
                                <Container>
                                    <Typography
                                        className='carousel-header'
                                        variant='h4'
                                        align={'right'}
                                    >
                                        Medycyna estetyczna
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        className='carousel-subheader'
                                        align={'right'}
                                    >
                                        Korzystamy z najnowszych technologii medycznych
                                    </Typography>
                                    <Box
                                        display='flex'
                                        justifyContent={'right'}
                                        marginTop={2}
                                    >
                                        <Box
                                            className='link-contained-more'
                                            width='auto'
                                        >
                                            <Button
                                                component={Link}
                                                to={`/technology`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                fullWidth={isMd ? false : true}
                                                endIcon={<ArrowForwardIcon />}
                                            >
                                                Zobacz nasz sprzęt
                                            </Button>
                                        </Box>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                        <Box className='carousel-item' data-bs-interval='5000'>
                            <img
                                className='carousel-image'
                                src={require('../assets/hero/hero4.jpg')}
                                alt='Kosmetologia'
                            />
                            <Box className='carousel-caption d-none d-md-block' sx={{ top: '1.25rem' }}>
                                <Container>
                                    <Typography
                                        className='carousel-header'
                                        variant='h4'
                                        align={'left'}
                                    >
                                        Kosmetologia
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        className='carousel-subheader'
                                        align={'left'}
                                    >
                                        Nasz zespół składa się z wysokiej klasy specjalistów
                                    </Typography>
                                    <Box
                                        display='flex'
                                        justifyContent={'left'}
                                        marginTop={2}
                                    >
                                        <Box
                                            className='link-contained-more'
                                            width='auto'
                                        >
                                            <Button
                                                component={Link}
                                                to={`/team`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                fullWidth={isMd ? false : true}
                                                endIcon={<ArrowForwardIcon />}
                                            >
                                                Zobacz nasz zespół
                                            </Button>
                                        </Box>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                    </Box>
                    <a className='carousel-control-prev'
                        href='#carouselExampleIndicators'
                        role='button'
                        data-bs-slide='prev'
                    >
                        <span className='carousel-control-prev-icon' aria-hidden='true' />
                        <span className='sr-only' />
                    </a>
                    <a className='carousel-control-next'
                        href='#carouselExampleIndicators'
                        role='button'
                        data-bs-slide='next'
                    >
                        <span className='carousel-control-next-icon' aria-hidden='true' />
                        <span className='sr-only' />
                    </a>
                </Box>
            ) : (
                <Box className='jumbotron'>
                    <Box className='photo-wrapper'>
                        <Box className='content-wrapper' minHeight={{ xs: 590, sm: 650, md: 790 }}>
                            <Box className='description-wrapper'>
                                <Container>
                                    <Typography
                                        variant='h4'
                                        className='jumbotron-header'
                                        align={'center'}
                                        data-aos={'fade-in'}
                                        data-aos-delay={'100'}
                                    >
                                        Zadbaj o zdrową skórę
                                    </Typography>
                                    <Typography
                                        variant='h6'
                                        className='jumbotron-subheader'
                                        align={'center'}
                                        data-aos={'fade-in'}
                                        data-aos-delay={'100'}
                                    >
                                        Zapoznaj się z treścią naszych usług
                                    </Typography>
                                    <Box
                                        display='flex'
                                        justifyContent={'center'}
                                        marginTop={2}
                                    >
                                        <Box
                                            className='link-contained-more'
                                            width='auto'
                                        >
                                            <Button
                                                component={Link}
                                                to={`/services`}
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                endIcon={<ArrowForwardIcon />}
                                            >
                                                Zobacz nasze Specjalizacje
                                            </Button>
                                        </Box>
                                    </Box>
                                </Container>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    );
}

export default HeroSection;
