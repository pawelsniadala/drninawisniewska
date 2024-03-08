import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '../components/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Tooltip from '@mui/material/Tooltip';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../components/Page';
import CardCareer from '../components/CardCareer';
import CardCareerProposed from '../components/CardCareerProposed';

import SearchSvg from '../assets/svg/SearchSvg';
import CloseSvg from '../assets/svg/CloseSvg';

import { career } from '../data/career';

const CareerView = () => {
    // search engine
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredCareer = career.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const clearSearchTerm = () => {
        setSearchTerm('');
    };

    // window dimensions
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
                    <Box className='input-group search-wrapper'>
                            <span className='input-group-text search'>
                                <SearchSvg width={16} height={16} color="#a2a2a2" />
                            </span>
                            <input
                                type='search'
                                className='form-control'
                                placeholder='Wyszukaj'
                                value={searchTerm}
                                onChange={handleSearchChange}
                            />
                            {searchTerm.length > 0 && (
                                <Tooltip title='Wyczyść'>
                                    <span className='input-group-text close' onClick={clearSearchTerm}>
                                        <CloseSvg width={11} height={11} />
                                    </span>
                                </Tooltip>
                            )}
                        </Box>
                        <Box className='card-wrapper career'>
                            {width >= 991.98 ? (
                                filteredCareer.map((item) => (
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
                                filteredCareer.map((item) => (
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
                            {filteredCareer.length === 0 && (
                                <div class="alert alert-empty" role="alert">
                                    Brak wyników wyszukiwania
                                </div>
                            )}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(CareerView);
