import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import CardTeam from '../components/CardTeam';
import CardTeamProposed from '../components/CardTeamProposed';

import { team } from '../data/team';

const TeamSection = () => {
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
        <Box
            component='section'
            className='team-section'
            sx={{ backgroundColor: '#f5f5f5'}}
        >
            <Container>
                <SectionHeader
                    sectionTitle='Zespół'
                    sectionHeader='Zaufaj profesjonalistom'
                    sectionSubheader='Nasz zespół składa się ze specjalistów o bardzo szerokim spektrum kompetencji'
                    sectionLinkText='Zobacz naszych specjalistów'
                    sectionLinkPath='/team'
                />
                <Box className='section-body'>
                    <Box className='card-wrapper team section'>
                        {width >= 991.98 ? (
                            team.slice(0, 4).map((item, index) => (
                                <Box
                                    key={index}
                                    data-aos={'fade-up'}
                                    data-aos-delay={index * 100}
                                    data-aos-offset={100}
                                    data-aos-duration={600}
                                >
                                    <CardTeam
                                        cardImage={item.image}
                                        cardBackground={item.background}
                                        cardTitle={item.title}
                                        cardName={item.name}
                                        cardSpeciality={item.speciality}
                                        cardDescription={item.experience ? item.experience : item.education}
                                        cardPath={`/team/${item.specialization[0]}/${item.specialist}`}
                                        cardServices={item.services}
                                    />
                                </Box>
                            ))
                        ) : (
                            team.slice(0, 4).map((item, index) => (
                                <CardTeamProposed
                                    key={index}
                                    cardTitle={item.name}
                                    cardSpeciality={item.speciality}
                                    cardExperience={item.experience ? item.experience : item.education ? <><br/><br/></> : <><br/><br/></> }
                                    cardImage={item.image}
                                    cardPath={`/team/${item.specialization[0]}/${item.specialist}`}
                                />
                            ))
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default TeamSection;
