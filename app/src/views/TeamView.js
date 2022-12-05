import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../components/Page';
import Container from '../components/Container';
import CardTeam2 from '../components/CardTeam2';
import CardTeamProposed2 from '../components/CardTeamProposed2';

import { team } from '../data/team';

const TeamView = () => {
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
                <Box className='view-header'>
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
                                    Zespół
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Zespół
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper'>
                        <Box className='card-wrapper team view'>
                            {width >= 991.98 ? (
                                team.map((item, index) => (
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
                                team.map((item, index) => (
                                    <CardTeamProposed2
                                        key={index}
                                        cardTitle={item.name}
                                        cardSpeciality={item.speciality}
                                        cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></>}
                                        cardImage={item.image}
                                        cardPath={item.path}
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

export default Page(TeamView);
