import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import HeroJpg from '../assets/hero.jpg'
// import Container from '../components/Container';

{/* <a href='https://pl.freepik.com/zdjecia/kobieta-twarz'>Kobieta twarz zdjęcie utworzone przez cookie_studio - pl.freepik.com</a> */}

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

    return (
        <Box
            className={'jarallax'}
            data-jarallax
            data-speed="0.2"
            position={'relative'}
            minHeight={{ xs: 400, sm: 500, md: 800 }}
            // sx={{ height: 'calc(100vh)' }}
            display={'flex'}
            alignItems={'end'}
            // marginTop={-13}
            paddingTop={13}
            paddingBottom={5}
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
                    backgroundPosition: 'bottom center',
                    // backgroundImage: 'url(https://assets.maccarianagency.com/backgrounds/img52.jpg)'
                    backgroundImage: `url(${HeroJpg})`
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
                    // background: alpha('#161c2d', 0.25),
                    zIndex: 1,
                }}
            />
            <Container maxWidth="xl"
                sx={{
                    position: "relative",
                    zIndex: 2
                }}
            >
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'}>
                    <Typography
                        variant="h3"
                        gutterBottom
                        sx={{
                            fontWeight: 900,
                            color: 'common.white',
                            lineHeight: 1
                        }}
                    >
                        <Typography
                            sx={{
                                textTransform: 'uppercase',
                                fontWeight: 'medium',
                                lineHeight: 1.5
                            }}
                            gutterBottom
                        >
                            {/* Dr Nina Wiśniewska */}
                            </Typography>
                                Zainwestuj w swoją skórę.<br/>
                                Będzie reprezentować cię<br/>
                                przez bardzo długi czas.
                            </Typography>
                    {/* <Typography
                        variant="h6"
                        component="p"
                        sx={{
                            fontWeight: 400,
                            color: 'common.white'
                        }}
                    >
                        theFront will make your product look modern and professional while
                        saving you precious time.
                    </Typography> */}
                    <Box
                        className="link-contained"
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                        marginTop={4}
                    >
                        <Box
                            className="link-contained"
                            marginTop={{ xs: 2, sm: 0 }}
                            width={{ xs: '100%', md: 'auto' }}
                        >
                            <Button
                                component={Link}
                                to={`/services`}
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth={isMd ? false : true}
                            >
                                Zobacz usługi
                            </Button>
                        </Box>
                        <Box
                            className="link-outlined"
                            marginTop={{ xs: 2, sm: 0 }}
                            marginLeft={{ sm: 2 }}
                            width={{ xs: '100%', md: 'auto' }}
                        >
                            <Button
                                component={Link}
                                to={`/contact`}
                                variant="outlined"
                                color="primary"
                                size="large"
                                fullWidth={isMd ? false : true}
                            >
                                Napisz wiadomość
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default HeroSection;
