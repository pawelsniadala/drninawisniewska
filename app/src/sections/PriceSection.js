import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
// import HeroJpg from '../assets/hero.jpg'
import princesJpg from '../assets/princes/princes.jpg'
// import Container from '../components/Container';

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
            minHeight={{ xs: 400, sm: 500, md: 600 }}
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
                    backgroundPosition: 'top center',
                    // backgroundImage: 'url(https://assets.maccarianagency.com/backgrounds/img52.jpg)'
                    backgroundImage: `url(${princesJpg})`
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
                    // background: alpha('#161c2d', 0.25),
                    zIndex: 1,
                    // backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.15))'
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
                            // color: 'common.white',
                            lineHeight: 1,
                            color: 'rgba(255, 255, 255, 0.95)',
                        }}
                    >
                        {/* <Typography
                            sx={{
                                textTransform: 'uppercase',
                                color: '#d99507',
                                fontWeight: 600,
                                lineHeight: 2
                            }}
                            gutterBottom
                        >
                            Dr nauk medycznych
                        </Typography> */}
                        Specjalista w zakresie<br/>
                        Dermatologii i Wenerologii<br/>
                        Lekarz medycyny estetycznej
                    </Typography>

                    <Typography
                        variant="h6"
                        component="p"
                        sx={{
                            fontWeight: 400,
                            // color: 'common.white',
                            color: 'rgba(255, 255, 255, 0.85)',
                        }}
                    >
                        W Klinice dr Niny Wiśniewskiej znajdziecie Państwo pomoc w zakresie leczenia chorób skóry.<br/>
                        Dodatkowo oferujemy usługi takich specjalistów jak: kardiolog, ortopeda, hematolog, fizjoterapeuta<br/>
                        chirurg naczyniowy, dietetyk kliczniczny oraz ginekolog-endokrynolog.
                    </Typography>

                    <Box
                        // className="link-contained"
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
                                endIcon={
              <Box
                component={'svg'}
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                stroke="currentColor"
                width={24}
                height={24}
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </Box>
            }
                            >
                                Zapoznaj się z ofertą
                            </Button>
                        </Box>
                        {/* <Box
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
                        </Box> */}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default PriceSection;
