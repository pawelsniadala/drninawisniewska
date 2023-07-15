import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Pagination from '@mui/material/Pagination';

import Container from '../components/Container';
import Page from '../components/Page';
import CardSpecialOffer from '../components/CardSpecialOffer';
import CardSpecialOfferProposed from '../components/CardSpecialOfferProposed';

import { specialOffer } from '../data/specialOffer';

const SpecialOfferView = () => {
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

    const itemsPerPage = 40;

    const [ page, setPage ] = useState(1);

    const pageCount = Math.ceil(specialOffer.length / itemsPerPage);
    const currentData = specialOffer.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );

    const handleChange = (_, value) => {
        setPage(value);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
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
                                    Promocje
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Promocje
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper'>
                        <Box className='card-wrapper special-offer'>
                            {width >= 991.98 ? (
                                currentData.map((item, index) => (
                                    <CardSpecialOffer
                                        key={index}
                                        cardTitle={item.title}
                                        cardDate={item.date}
                                        cardDescription1={item.description1}
                                        cardDescription2={item.description2}
                                        cardDescription3={item.description3}
                                        cardDescription4={item.description4}
                                        cardDescription5={item.description5}
                                        cardImage={item.image}
                                        cardImageVisible={false}
                                    />
                                ))
                            ) : (
                                currentData.map((item, index) => (
                                    <CardSpecialOfferProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDate={item.date}
                                        cardDescription1={item.description1}
                                        cardDescription2={item.description2}
                                        cardDescription3={item.description3}
                                        cardDescription4={item.description4}
                                        cardDescription5={item.description5}
                                        cardImage={item.image}
                                    />
                                ))
                            )}
                        </Box>
                        {pageCount > 1 && (
                            <Box className='pagination-wrapper'>
                                <Pagination
                                    className='pagination'
                                    count={pageCount}
                                    page={page}
                                    onChange={handleChange}
                                />
                            </Box>
                        )}
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(SpecialOfferView);
