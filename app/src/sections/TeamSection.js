import React from 'react';

import Box from '@mui/material/Box';

import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
// import CardTeam from '../components/CardTeam';
import CardTeam2 from '../components/CardTeam2';

import { team } from '../data/team';

const TeamSection = () => {
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
                    sectionLinkText='Zobacz cały zespół'
                    sectionLinkPath='/team'
                />
                <Box className='section-body'>
                    <Box className='card-wrapper team section'>
                        {team.slice(0, 4).map((item, index) => (
                            <Box
                                key={index}
                                data-aos={'fade-up'}
                                data-aos-delay={index * 100}
                                data-aos-offset={100}
                                data-aos-duration={600}
                            >
                                <CardTeam2
                                    cardImage={item.image}
                                    cardBackground={item.background}
                                    cardTitle={item.title}
                                    cardName={item.name}
                                    cardSpeciality={item.speciality}
                                    cardDescription={item.experience ? item.experience : item.education}
                                    cardPath={item.path}
                                    cardServices={item.services}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default TeamSection;
