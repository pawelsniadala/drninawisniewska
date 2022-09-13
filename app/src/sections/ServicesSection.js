import React from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

import Container from '../components/Container';
import CardServices from "../components/CardServices";

import { services } from '../data/services';

const SampleNextArrow = ({ onClick }) => {
    return (
        <Box
            className="sample-next-arrow"
            onClick={onClick}
        >
            <KeyboardArrowRightIcon />
        </Box>
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <Box
            className="sample-prev-arrow"
            onClick={onClick}
        >
            <KeyboardArrowLeftIcon />
        </Box>
    );
}

const ServicesSection = () => {
    const theme = useTheme();

    const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
        defaultMatches: true,
    });

    const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true,
    });

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
        defaultMatches: true,
    });

    const sliderOpts = {
        dots: true,
        arrows: isXl ? true : isLg ? false : isMd ? false : isSm ? false : false,
        // arrows: false,
        infinite: true,
        slidesToShow: isXl ? 3 : isLg ? 3 : isMd ? 2 : isSm ? 2 : 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplay: false,
        autoplaySpeed: 4000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Box
            sx={{
                // backgroundColor: '#fbfbfd',
                backgroundColor: '#f5f5f5'
                // backgroundColor: '#f5f5f7',
                // backgroundImage: `linear-gradient(#fff, #f7faff)`,
            }}
        >
            <Container>
                <Box marginBottom={4}>
                    <Typography
                        sx={{
                            textTransform: 'uppercase',
                            color: '#DBAF62',
                            lineHeight: 1.5,
                            letterSpacing: '0.045em;',
                            // fontFamily: '"Roboto", sans-serif',
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: '17px',
                            fontWeight: '400',
                        }}
                        gutterBottom
                        align={'center'}
                    >
                        Usługi
                    </Typography>
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
                            color: 'rgba(0, 0, 0, 0.6)'
                        }}
                    >
                        Usługi dostępne w naszej klinice
                    </Typography>
                    <Typography
                        variant="h6"
                        align={'center'}
                        color={'text.secondary'}
                        data-aos={'fade-right'}
                        sx={{
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: '18px',
                            fontWeight: '400',
                        }}
                    >
                        Zapoznaj się z treścią naszych usług
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
                                // to={'/services'}
                                to={'/drninawisniewska/'}
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth={isMd ? false : true}
                                endIcon={
                                    <ArrowForwardIcon />
                                }
                            >
                                Zobacz wszystkie usługi
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box margin={'0 auto'}>
                    <Slider {...sliderOpts}>
                        {services.slice(0, 4).map((item, i) => (
                            <Box
                                key={i}
                                padding={{ xs: 1, md: 1, lg: '0.5rem' }}
                                sx={{paddingTop: '0 !important'}}
                            >
                                <Box
                                    width={1}
                                    height={1}
                                    sx={{
                                        textDecoration: 'none',
                                        transition: 'all .2s ease-in-out',
                                    }}
                                >
                                    <CardServices
                                        key={item.index}
                                        cardName={'card-services-section'}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.image}
                                        // cardMorePath={item.path}
                                        cardMorePath={"/drninawisniewska/"}
                                        cardPricePath={item.prices}
                                        cardSpecialist={item.specialists}
                                    />
                                </Box>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
}

export default ServicesSection;
