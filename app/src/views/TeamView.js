import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Container from '../components/Container';
// import CardTeam from '../components/CardTeam';
import CardTeam2 from '../components/CardTeam2';
import CardTeamProposed from '../components/CardTeamProposed';

import { team } from '../data/team';

const TeamView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

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
        <Box className="contact-view">
            <Box className="view-wrapper">
                <Box className="view-header">
                    <Container className="header-wrapper">
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label="breadcrumb"
                            >
                                <Link
                                    to="/"
                                    aria-current="page"
                                >
                                    {/* <NavigateBeforeIcon sx={{ mr: '3px' }} fontSize="smform" /> */}
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
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
                <Box className="view-body">
                    <Container className="body-wrapper">
                        <Box className="card-wrapper team view">
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
                                    <CardTeamProposed
                                        key={index}
                                        cardImage={item.image}
                                        cardName={item.name}
                                        cardSpeciality={item.speciality}
                                        cardDescription={item.experience ? item.experience : item.education}
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

export default TeamView;
