import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import CardTechnology from '../components/CardTechnology';

import { technology } from '../data/technology';

const TechnologySection = () => {
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
            className='technology-section'
            sx={{ backgroundColor: '#fff'}}
        >
            <Container>
                <SectionHeader
                    sectionTitle='Technologia'
                    sectionHeader='Nowoczesne rozwiązania'
                    sectionSubheader='Dla Twojego komfortu korzystamy z najnowszych technologii medycznych'
                    sectionLinkText='Zobacz nasz sprzęt'
                    sectionLinkPath='/technology'
                />
                <Box className='section-body'>
                    <Box className='card-wrapper technology section'>
                        {technology.slice(0, width <= 539.98 ? 2 : 4).map((item, index) => (
                            <Box
                                key={index}
                                data-aos={'fade-up'}
                                data-aos-delay={index * 100}
                                data-aos-offset={100}
                                data-aos-duration={600}
                            >
                                <CardTechnology
                                    key={index}
                                    cardMode='section'
                                    cardImage={item.imageMedium}
                                    cardTitle={item.title}
                                    cardPath={item.path}
                                    cardBadge={item.badge}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default TechnologySection;
