import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '../components/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import HeroJpg from '../assets/hero.jpg'
import princesJpg from '../assets/princes/prices6.jpg'
// import Container from '../components/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
{/* <a href='https://pl.freepik.com/zdjecia/kobieta-twarz'>Kobieta twarz zdjęcie utworzone przez cookie_studio - pl.freepik.com</a> */}

const PriceSection = () => {
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
            minHeight={{ xs: 400, sm: 500, md: 650 }}
            // sx={{ height: 'calc(100vh)' }}
            display={'flex'}
            alignItems={'center'}
            // marginTop={-13}
            // paddingTop={13}
            // paddingBottom={5}
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
                    backgroundPosition: 'top center',
                    // backgroundImage: 'url(https://assets.maccarianagency.com/backgrounds/img52.jpg)'
                    backgroundImage: `url(${princesJpg})`,

                    // display: 'flex',
                    // alignItems: 'center',
                    // justifyContent: 'center',
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
                    // background: alpha('#161c2d', 0.3),
                    background: alpha('#161c2d', 0.25),
                    zIndex: 1,
                    // backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.15))'
                }}
            />
            <Container
                sx={{
                    position: "relative",
                    zIndex: 2,
                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                    padding: 0,
                }}
            >
                <Box
                // marginBottom={4}
                sx={{
                    // display: 'flex',
                    // justifyContent: 'center',
                    // alignItems: 'center',
                }}
                
                >
                    {/* <Typography
                        sx={{
                            textTransform: 'uppercase',
                            color: '#DBAF62',
                            lineHeight: 1.5,
                            letterSpacing: '0.045em;',
                            fontFamily: '"Roboto", sans-serif',
                            fontSize: '18px',
                            fontWeight: '400',
                        }}
                        gutterBottom
                        align={'center'}
                    >
                        Usługi
                    </Typography> */}
                    <Typography
                        variant="h4"
                        align={'center'}
                        data-aos={'fade-right'}
                        gutterBottom
                        sx={{
                            // fontFamily: 'Raleway, sans-serif',
                            fontFamily: 'Lato,sans-serif',
                            fontSize: '30px',
                            lineHeight: '1.208em',
                            letterSpacing: '.045em',
                            textTransform: 'uppercase',
                            fontWeight: '400',
                            color: '#fff'
                        }}
                    >
                        Aktualne ceny naszych usług
                    </Typography>
                    <Typography
                        variant="h6"
                        align={'center'}
                        data-aos={'fade-right'}
                        sx={{
                            fontSize: '18px',
                            fontWeight: '400',
                            color: '#fff',
                            fontFamily: 'Raleway, sans-serif',
                        }}
                    >
                        Zapoznaj się z cennikiem naszych usług
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                        justifyContent={'center'}
                        marginTop={2}
                    >
                        <Box
                            className="link-contained-more"
                            marginTop={{ xs: 2, sm: 0 }}
                            width={{ xs: '100%', md: 'auto' }}
                        >
                            <Button
                                component={Link}
                                // to={`/services`} ::TODO
                                to={`/drninawisniewska/`}
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth={isMd ? false : true}
                                endIcon={
                                    <ArrowForwardIcon />
                                }
                            >
                                Zobacz cennik usług
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default PriceSection;
