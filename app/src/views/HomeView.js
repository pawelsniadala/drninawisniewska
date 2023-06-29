import React from 'react';

import Box from '@mui/material/Box';

import Page from '../components/Page';
import HeroSection from '../sections/HeroSection';
import ClinicSection from '../sections/ClinicSection';
import ServicesSection from '../sections/ServicesSection';
import PriceSection from '../sections/PriceSection';
import TeamSection from '../sections/TeamSection';
import TechnologySection from '../sections/TechnologySection';

const HomeView = () => {
    return (
        <Box className='home-view'>
            <HeroSection />
            <ClinicSection />
            <ServicesSection />
            <PriceSection />
            <TeamSection />
            {/* <TechnologySection /> */}
        </Box>
    );
}

export default Page(HomeView);
