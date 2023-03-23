import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import Box from '@mui/material/Box';

import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import CardServices from '../components/CardServices';
import CardProposed from '../components/CardProposed';

import { services } from '../data/services';

const ServicesSection = () => {
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
            className='services-section'
        >
            <Container className='services-container'>
                <SectionHeader
                    sectionTitle='Specjalizacje'
                    sectionHeader='Specjalizacje dostępne w naszej klinice'
                    sectionSubheader='Zapoznaj się z treścią naszych specjalizacji'
                    sectionLinkText='Zobacz wszystkie Specjalizacje'
                    sectionLinkPath='/services'
                />
                <Box className='section-body'>
                    {width >= 991.98 ? (
                        <Swiper
                            className="mySwiper"
                            slidesPerView={3}
                            spaceBetween={20}
                            pagination={{
                                clickable: true
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
                            {services.slice(0, 6).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <CardServices
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardPath={item.path}
                                        cardPathSpecialist={item.pathSpecialist}
                                        cardPathPrices={item.pathPrices}
                                        cardSpecialist={item.specialists}
                                        cardImage={item.image}
                                        cardImageVisible={true}
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <Box className='card-wrapper services'>
                            {services.slice(0, width <= 539.98 ? 4 : 6).map((item, index) => (
                                <CardProposed
                                    key={index}
                                    cardTitle={item.title}
                                    cardDescription={item.description}
                                    cardImage={item.image}
                                    cardPath={item.path}
                                />
                            ))}
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
}

export default ServicesSection;
