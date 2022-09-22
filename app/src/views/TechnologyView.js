import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '../components/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

// import CardTechnology from '../components/CardTechnology';
import CardTechnology2 from '../components/CardTechnology2';

import { technology } from '../data/technology';

const TechnologyView = () => {
    const evenNumbers = (item) => {
        return (item + 1) % 2 === 0 ? false : true;
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    <KeyboardDoubleArrowLeftIcon sx={{ mr: 0.5 }} fontSize='smform' />
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
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
                                    Technologia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                            Technologia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper'>
                        <Box className='card-wrapper technology section'>
                            {technology.map((item, index) => (
                          
                                   <CardTechnology2
                                    key={index}
                                    cardMode="view"
                                    cardImage={item.imageMedium}
                                    cardTitle={item.title}
                                    cardPath={item.path}
                                />
                            ))}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default TechnologyView;
{/* <CardTechnology
cardEvenNumbers={evenNumbers(index)}
cardImage={item.imageSmall}
cardName={item.name}
cardDescription={item.description}
cardPath={item.path}
/> */}