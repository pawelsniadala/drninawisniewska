import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Typography from '@mui/material/Typography';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Container from '../components/Container';
import ServicesGridPartial from './partials/services/ServicesGridPartial';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { services } from '../data/services';

import CardServices from '../components/CardServices';

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
                        <Box sx={{ paddingBottom: '10rem' }}>
                            <Typography
                                variant="h4"
                                align={'center'}
                                // data-aos={'fade-in'}
                                gutterBottom
                                sx={{
                                    fontFamily: 'Lato, sans-serif',
                                    fontSize: '40px',
                                    lineHeight: '1.208em',
                                    letterSpacing: '.045em',
                                    textTransform: 'uppercase',
                                    fontWeight: '400',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                }}
                            >
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
                                    key={item.index}
                                    cardTitle={item.title}
                                    cardDescription={item.description}
                                    cardImage={item.image}
                                    cardPath={item.path}
                                />
                            )) : (
                                {/* <Skeleton variant="rectangular" width={210} height={118} /> */}
                            )}
                        </Box>

                        {/* <div>WIDOK</div> */}
                        {/* <ServicesGridPartial /> */}
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default ServicesView;
