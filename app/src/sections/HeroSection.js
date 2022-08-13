import React, { useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import HeroJpg from '../assets/hero.jpg'
// import Container from '../components/Container';

{/* <a href='https://pl.freepik.com/zdjecia/kobieta-twarz'>Kobieta twarz zdjęcie utworzone przez cookie_studio - pl.freepik.com</a> */}

const HeroSection = () => {
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

    return (
        <Box
            className={'jarallax'}
            data-jarallax
            data-speed="0.2"
            position={'relative'}
            minHeight={{ xs: 400, sm: 500, md: 800 }}
            display={'flex'}
            alignItems={'center'}
            marginTop={-13}
            paddingTop={13}
            id="agency__portfolio-item--js-scroll"
        >
            <Box
                className={'jarallax-img'}
                sx={{
                    position: 'absolute',
                    objectFit: 'cover',
                    /* support for plugin https://github.com/bfred-it/object-fit-images */
                    fontFamily: 'object-fit: cover;',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: -1,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundImage: 'url(https://assets.maccarianagency.com/backgrounds/img52.jpg)'
                    // backgroundImage: `url(${HeroJpg})`
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: 1,
                    height: 1,
                    background: alpha('#161c2d', 0.4),
                    zIndex: 1,
                }}
            />
            <Container maxWidth="xl"
                sx={{
                    position: "relative",
                    zIndex: 2
                }}
            >
                <Box>
                    <Typography
                        variant="h2"
                        gutterBottom
                        sx={{
                            fontWeight: 900,
                            color: 'common.white',
                            textTransform: 'uppercase',
                        }}
                    >
                        Dermatologia
                    </Typography>
                    <Typography
                        variant="h6"
                        component="p"
                        color="text.primary"
                        sx={{
                            color: 'common.white',
                        }}
                    >
                        We are founded by a leading academic and researcher in the field of
                        Industrial Systems Engineering.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
