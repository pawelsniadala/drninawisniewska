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
        <Box
            component='section'
            className='hero-section'
        >
            {/* <Box id="carouselExampleFades" className="carousel slide carousel-fade" data-bs-ride="carousel"> */}
            <Box id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"></li>
            </ol>
                <Box className="carousel-inner">
                    <Box className="carousel-item active" data-bs-interval="5000" style={{ height: 'calc(100vh - 118px)' }}>
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
                                background: 'rgba(22, 28, 45, 0.25)',
                                filter: 'brightness(0.95)',
                            }}
                        />
                        {/* <Box class="carousel-caption d-none d-md-block"> */}
                        <Box className="carousel-caption d-none d-md-block" sx={{ bottom: '4rem' }}>
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
                                        // fontSize: '18px',
                                        fontSize: '22px',
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
                        </Box>
                    </Box>


                    <Box className="carousel-item" data-bs-interval="5000" style={{ height: 'calc(100vh - 118px)' }}>
                        {/* <img src={require('../assets/hero/hero2.jpg')} className="d-block carousel-img" alt="..."  /> */}
                        <LazyLoadImage
                            height={'100%'}
                            width={'100%'}
                            src={require('../assets/hero/hero11.jpg')}
                            // src={require('../assets/hero/hero13.jpg')}
                            alt="..."
                            effect="blur"
                            style={{
                                objectFit: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                // backgroundPosition: 'center center',
                                maxHeight: 'calc(100vh - 118px)',
                                objectPosition: '50% 77%',
                                filter: 'brightness(0.85)',
                            }}
                        />
                        <Box className="carousel-caption d-none d-md-block" sx={{ bottom: '4rem' }}>
                        <Container>
                            <Box>
                                <Typography
                                    variant="h4"
                                    align={'right'}
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
                                        // color: 'rgba(0, 0, 0, 0.6)',
                                        color: '#fff',
                                    }}
                                >
                                    Dermatologia
                                </Typography>
                                <Typography
                                    variant="h6"
                                    align={'right'}
                                    // color={'text.secondary'}
                                    // data-aos={'fade-right'}
                                    sx={{
                                        // fontSize: '18px',
                                        fontSize: '22px',
                                        fontWeight: '400',
                                        // color: 'rgba(0, 0, 0, 0.6)',
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
                                    justifyContent={'right'}
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
                                            to={`/prices`}
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
                    </Box>


                    <Box className="carousel-item" data-bs-interval="5000" style={{ height: 'calc(100vh - 118px)' }}>
                        {/* <img src={require('../assets/hero/hero2.jpg')} className="d-block carousel-img" alt="..."  /> */}
                        <LazyLoadImage
                            height={'100%'}
                            width={'100%'}
                            src={require('../assets/hero/hero10.jpg')}
                            alt="..."
                            effect="blur"
                            style={{
                                objectFit: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                // backgroundPosition: 'center center',
                                maxHeight: 'calc(100vh - 118px)',
                                objectPosition: '50% 60%',
                                filter: 'brightness(0.85)',
                            }}
                        />
                        <Box className="carousel-caption d-none d-md-block" sx={{ top: '4rem' }}>
                        <Container>
                            <Box>
                                <Typography
                                    variant="h4"
                                    align={'right'}
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
                                        // color: 'rgba(0, 0, 0, 0.6)',
                                        color: '#fff',
                                    }}
                                >
                                    Medycyna estetyczna
                                </Typography>
                                <Typography
                                    variant="h6"
                                    align={'right'}
                                    // color={'text.secondary'}
                                    // data-aos={'fade-right'}
                                    sx={{
                                        // fontSize: '18px',
                                        fontSize: '22px',
                                        fontWeight: '400',
                                        // color: 'rgba(0, 0, 0, 0.6)',
                                        color: '#fff',
                                        fontFamily: 'Raleway, sans-serif',
                                    }}
                                >
                                    Korzystamy z najnowszych technologii medycznych
                                </Typography>
                                <Box
                                    display="flex"
                                    flexDirection={{ xs: 'column', sm: 'row' }}
                                    alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                                    justifyContent={'right'}
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
                                            to={`/technology`}
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            fullWidth={isMd ? false : true}
                                            endIcon={
                                                <ArrowForwardIcon />
                                            }
                                        >
                                            Zobacz nasz sprzęt
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                            </Container>
                        </Box>
                    </Box>

                    <Box className="carousel-item" data-bs-interval="5000" style={{ height: 'calc(100vh - 118px)' }}>
                        {/* <img src={require('../assets/hero/hero2.jpg')} className="d-block carousel-img" alt="..."  /> */}
                        <LazyLoadImage
                            height={'100%'}
                            width={'100%'}
                            // src={require('../assets/hero/hero12.jpg')}
                            src={require('../assets/hero/hero15.jpg')}
                            // src={require('../assets/hero/hero14.jpg')}
                            // src={require('../assets/hero/hero7.jpg')}
                            // src={require('../assets/hero/hero8.jpg')}
                            alt="..."
                            effect="blur"
                            style={{
                                objectFit: 'cover',
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                // backgroundPosition: 'center center',
                                maxHeight: 'calc(100vh - 118px)',
                                objectPosition: '50% 90%',
                                filter: 'brightness(0.85)',
                            }}
                        />

                        <Box className="carousel-caption d-none d-md-block" sx={{ top: '4rem' }}>
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
                                        // color: 'rgba(0, 0, 0, 0.6)',
                                        color: '#fff',
                                    }}
                                >
                                    Kosmetologia
                                </Typography>
                                <Typography
                                    variant="h6"
                                    align={'left'}
                                    // color={'text.secondary'}
                                    // data-aos={'fade-right'}
                                    sx={{
                                        // fontSize: '18px',
                                        fontSize: '22px',
                                        fontWeight: '400',
                                        // color: 'rgba(0, 0, 0, 0.6)',
                                        color: '#fff',
                                        fontFamily: 'Raleway, sans-serif',
                                    }}
                                >
                                    Nasz zespół składa się z wysokiej klasy specjalistów
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
                                            to={`/team`}
                                            variant="contained"
                                            color="primary"
                                            size="large"
                                            fullWidth={isMd ? false : true}
                                            endIcon={
                                                <ArrowForwardIcon />
                                            }
                                        >
                                            Zobacz nasz zespół
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                            </Container>
                        </Box>
                    </Box>



                    {/* <Box className="carousel-item">
                    <img src={require('../assets/hero/hero1.jpg')} className="d-block w-100" alt="..."  />
                    </Box> */}
                </Box>
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button> */}

                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only"></span>
                </a>
            </Box>
        </Box>
    );
}

export default HeroSection;
// style={{ height: 'calc(100vh - 122px)' }}