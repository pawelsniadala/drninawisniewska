import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeam2 from '../../../components/CardTeam2';
import CardTeamProposed2 from '../../../components/CardTeamProposed2';
import CardProposed from '../../../components/CardProposed';

import { services, gynecology } from '../../../data/services';
import { team } from '../../../data/team';

const ServicesGynecologyPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

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
                <Box className='view-header services-dermatology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/services' aria-current='page'>
                                    <Box>Usługi</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/' aria-current='page'>
                                    Home
                                </Link>
                                <Link to='/services' aria-current='page'>
                                    Usługi
                                </Link>
                                <Typography color='text.primary'>
                                    Ginekologia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Ginekologia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    Strona w budowie.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={gynecology.image}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px',
                                        }}
                                    />
                                </Box>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header alternative'>
                                    Specjaliści
                                </Typography>
                                <Box className='card-wrapper team page'>
                                    {width >= 991.98 ? (
                                        team.filter(item => item.services.includes('gynecology')).map((item, index) => (
                                            <CardTeam2
                                                key={index}
                                                cardImage={item.image}
                                                cardBackground={item.background}
                                                cardTitle={item.title}
                                                cardName={item.name}
                                                cardSpeciality={item.speciality}
                                                cardDescription={item.experience ? item.experience : item.education}
                                                cardPath={item.path}
                                                cardServices={item.services}
                                            />
                                        ))
                                    ) : (
                                        team.filter(item => item.services.includes('gynecology')).map((item, index) => (
                                            <CardTeamProposed2
                                                key={index}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={item.path}
                                            />
                                        ))
                                    )}
                                </Box>
                            </Box>

                        </Box>
                        <Box className='proposed-services'>
                            <Box className='card-wrapper services-proposed'>
                                {services.length ? services.filter(item => item.title !== 'Ginekologia').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.image}
                                        cardPath={item.path}
                                    />
                                )) : (
                                    <Box>Brak danych</Box>
                                )}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(ServicesGynecologyPartial);
