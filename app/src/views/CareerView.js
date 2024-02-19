import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '../components/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../components/Page';
// import CardServices from '../components/CardServices';
import CardCareer from '../components/CardCareer';
// import CardProposed from '../components/CardProposed';
import CardCareerProposed from '../components/CardCareerProposed';

import { career } from '../data/career';

const CareerView = () => {
    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    }

    function useWindowDimensions() {
        const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs className='breadcrumb back' aria-label='breadcrumb'>
                                <Link to='/' aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                                <Typography color='text.primary'>
                                    Kariera
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Kariera
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper'>
                        <Box className='card-wrapper career'>
                            {width >= 991.98 ? (
                                career.map((item) => (
                                    <CardCareer
                                        key={item.id}
                                        cardTitle={item.title}
                                        cardLocation={item.location}
                                        cardDate={item.date}
                                        cardAgreement={item.agreement}
                                        cardPosition={item.position}
                                        cardType={item.type}
                                        cardPlace={item.place}
                                        cardPath={item.path}
                                        cardImage={item.image}
                                        cardStatus={item.status}
                                    />
                                ))
                            ) : (
                                career.map((item) => (
                                    <CardCareerProposed
                                        key={item.id}
                                        cardTitle={item.title}
                                        cardLocation={item.location}
                                        cardDate={item.date}
                                        cardAgreement={item.agreement}
                                        cardPosition={item.position}
                                        cardType={item.type}
                                        cardPlace={item.place}
                                        cardPath={item.path}
                                        cardImage={item.image}
                                        cardStatus={item.status}
                                    />
                                ))
                            )}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(CareerView);
