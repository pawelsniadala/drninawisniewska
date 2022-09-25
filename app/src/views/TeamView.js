import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import Container from '../components/Container';
import CardTeam from '../components/CardTeam';

import { team } from '../data/team';

const TeamView = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box className="contact-view">
            <Box className="view-wrapper">
                <Box className="view-header">
                    <Container className="header-wrapper">
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                separator={<NavigateNextIcon fontSize="smform" />}
                                aria-label="breadcrumb"
                            >
                                <Link
                                    to="/"
                                    aria-current="page"
                                >
                                    <KeyboardDoubleArrowLeftIcon sx={{ mr: 0.5 }} fontSize="smform" />
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
                        <Box className="card-wrapper team">
                            {team.map((item, index) => (
                                <CardTeam
                                    key={index}
                                    cardImage={item.image}
                                    cardBackground={item.background}
                                    cardTitle={item.title}
                                    cardName={item.name}
                                    cardSpeciality={item.speciality}
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

export default TeamView;
