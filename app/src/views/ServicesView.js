import React, { useEffect } from 'react';
// import { useHistory } from "react-router-dom";

import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Container from '../components/Container';
// import ServicesGridPartial from './partials/services/ServicesGridPartial';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { services } from '../data/services';

import CardServices from '../components/CardServices';


import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';


const ServicesView = () => {
    // const theme = useTheme();
    // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    //     defaultMatches: true,
    // });

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box className="contact-view">
            <Box className="view-wrapper">
                <Box className="view-header services">
                    <Container className="header-wrapper">
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize="smform" />}
                                aria-label="breadcrumb"
                            >
                                <Link
                                    to="/"
                                    aria-current="page"
                                >
                                    <KeyboardDoubleArrowLeftIcon sx={{ mr: 0.5 }} fontSize="smform" />
                                    <Box>Cofnij</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize="smform" />}
                                aria-label="breadcrumb"
                            >
                                <Link
                                    to="/"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                                <Typography color="text.primary">
                                    Usługi
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Usługi
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className="view-body">
                    <Container className="body-wrapper">
                        <Box className="card-wrapper services">
                            {services.length ? services.map((item, index) => (
                                <CardServices
                                    key={index}
                                    cardName={'card-services-view'}
                                    cardTitle={item.title}
                                    cardDescription={item.description}
                                    cardImage={item.image}
                                    cardMorePath={item.path}
                                    cardPricePath={item.prices}
                                    cardSpecialist={item.specialists}
                                />
                            )) : (
                                {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
                            )}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default ServicesView;
