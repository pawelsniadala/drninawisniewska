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
import SectionHeader from '../components/SectionHeader';
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
        // arrows: isXl ? true : isLg ? false : isMd ? false : isSm ? false : false,
        arrows: false,
        // infinite: true,
        slidesToShow: isXl ? 3 : isLg ? 3 : isMd ? 2 : isSm ? 2 : 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplay: false,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Box
            component='section'
            className='service-section'
            sx={{ backgroundColor: '#f5f5f5', borderTop: 'rgba(224, 224, 224, 0.5)'}}
        >
            <Container>
                <SectionHeader
                    sectionTitle='Usługi'
                    sectionHeader='Usługi dostępne w naszej klinice'
                    sectionSubheader='Zapoznaj się z treścią naszych usług'
                    sectionLinkText='Zobacz wszystkie usługi'
                    sectionLinkPath='/services'
                />
                <Box margin={'0 auto'}>
                    <Slider {...sliderOpts}>
                        {services.slice(0, 4).map((item, index) => (
                            <Box
                                key={index}
                                padding={{ xs: 1, md: 1, lg: '10px' }}
                                sx={{ paddingTop: '0 !important' }}
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
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardPath={item.path}
                                        cardPrice={item.prices}
                                        cardSpecialist={item.specialists}
                                        cardImage={item.image}
                                        cardImageVisible={true}
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
