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
// import Container from '../components/Container';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="5000" style={{ height: '670px' }}>
                    {/* <img src={require('../assets/hero/hero1.jpg')} className="d-block carousel-img" alt="..."  /> */}
                    <LazyLoadImage
                        height={'100%'}
                        width={'100%'}
                        src={require('../assets/hero/hero1.jpg')}
                        alt="..."
                        effect="blur"
                        style={{
                            objectFit: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                        }}
                    />
                    {/* <div class="carousel-caption d-none d-md-block"> */}
                    <div className="carousel-caption">
                    <Container>
                        <Box>
                            <Typography
                                variant="h4"
                                align={'left'}
                                data-aos={'fade-in'}
                                data-aos-delay={'100'}
                                gutterBottom
                                sx={{
                                    // fontFamily: 'Lato,sans-serif',
                                    // fontFamily: 'Raleway, sans-serif',
                                    fontFamily: 'Lato,sans-serif',
                                    fontSize: '40px',
                                    lineHeight: '1.208em',
                                    letterSpacing: '.045em',
                                    textTransform: 'uppercase',
                                    fontWeight: '500',
                                    color: '#fff'
                                }}
                            >
                                Zadbaj o zdrową skórę
                            </Typography>
                            <Typography
                                variant="h6"
                                align={'left'}
                                // color={'text.secondary'}
                                // data-aos={'fade-right'}
                                data-aos={'fade-in'}
                                data-aos-delay={'100'}
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    color: '#fff',
                                    fontFamily: 'Raleway, sans-serif',
                                }}
                            >
                                Zapoznaj się z treścią naszych usług
                            </Typography>
                            <Box
                                display="flex"
                                flexDirection={{ xs: 'column', sm: 'row' }}
                                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                                justifyContent={'left'}
                                marginTop={2}
                                data-aos={'fade-in'}
                                data-aos-delay={'100'}
                            >
                                <Box
                                    className="link-contained-more"
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
                                            <ArrowForwardIcon />
                                        }
                                    >
                                        Zobacz nasze usługi
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        </Container>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="5000" style={{ height: '670px' }}>
                    {/* <img src={require('../assets/hero/hero2.jpg')} className="d-block carousel-img" alt="..."  /> */}
                    <LazyLoadImage
                        height={'100%'}
                        width={'100%'}
                        src={require('../assets/hero/hero1.jpg')}
                        alt="..."
                        effect="blur"
                        style={{
                            objectFit: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center',
                        }}
                    />
                    <div className="carousel-caption d-none d-md-block">
                    <Container>
                        <Box>
                            <Typography
                                variant="h4"
                                align={'left'}
                                // data-aos={'fade-right'}
                                // data-aos={'zoom-in'}

                                // data-aos={'zoom-in'}
                                // data-aos-delay={100}
                                // data-aos-offset={100}
                                // data-aos-duration={1200}

                                gutterBottom
                                sx={{
                                    // fontFamily: 'Lato,sans-serif',
                                    // fontFamily: 'Raleway, sans-serif',
                                    fontFamily: 'Lato,sans-serif',
                                    fontSize: '40px',
                                    lineHeight: '1.208em',
                                    letterSpacing: '.045em',
                                    textTransform: 'uppercase',
                                    fontWeight: '500',
                                    color: '#fff'
                                }}
                            >
                                Zadbaj o zdrową skórę
                            </Typography>
                            <Typography
                                variant="h6"
                                align={'left'}
                                // color={'text.secondary'}
                                // data-aos={'fade-right'}
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: '400',
                                    color: '#fff',
                                    fontFamily: 'Raleway, sans-serif',
                                }}
                            >
                                Zapoznaj się z treścią naszych usług
                            </Typography>
                            <Box
                                display="flex"
                                flexDirection={{ xs: 'column', sm: 'row' }}
                                alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                                justifyContent={'left'}
                                marginTop={2}
                            >
                                <Box
                                    className="link-contained-more"
                                    marginTop={{ xs: 2, sm: 0 }}
                                    width={{ xs: '100%', md: 'auto' }}
                                >
                                    <Button
                                        component={Link}
                                        // to={`/services`}
                                        to={`/drninawisniewska/`}
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                        fullWidth={isMd ? false : true}
                                        endIcon={
                                            <ArrowForwardIcon />
                                        }
                                    >
                                        Zobacz nasze usługi
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                        </Container>
                    </div>
                </div>
                {/* <div className="carousel-item">
                <img src={require('../assets/hero/hero1.jpg')} className="d-block w-100" alt="..."  />
                </div> */}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}

export default HeroSection;
// style={{ height: 'calc(100vh - 122px)' }}