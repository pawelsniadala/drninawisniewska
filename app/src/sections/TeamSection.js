import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

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
        >
            <Container className='team-container'>
                <SectionHeader
                    sectionTitle='Specjaliści'
                    sectionHeader='Zaufaj profesjonalistom'
                    sectionSubheader='Nasz zespół składa się ze specjalistów o bardzo szerokim spektrum kompetencji'
                    sectionLinkText='Zobacz naszych specjalistów'
                    sectionLinkPath='/team'
                />
                <Box className='section-body'>
                    {width >= 991.98 ? (
                        <Swiper
                            className="mySwiper"
                            slidesPerView={4}
                            spaceBetween={20}
                            speed={500}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            modules={[
                                Autoplay,
                                Pagination
                            ]}
                        >
                            {team.slice(0, 7).map((item) => (
                                <SwiperSlide
                                    key={item.id}
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
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Box className='card-wrapper team section'>
                            {team.slice(0, width <= 539.98 ? 4 : 6).map((item) => (
                                <CardTeamProposed
                                    key={item.id}
                                    cardTitle={item.name}
                                    cardSpeciality={item.speciality}
                                    cardExperience={item.experience ? item.experience : item.education ? <><br/><br/></> : <><br/><br/></> }
                                    cardImage={item.image}
                                    cardPath={`/team/${item.specialization[0]}/${item.specialist}`}
                                />
                            ))}
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default TeamSection;
