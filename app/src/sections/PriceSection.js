import React, { useEffect } from 'react';

import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import pricesJpg1 from '../assets/prices/prices1.jpg';

const PriceSection = () => {
    useEffect(() => {
        const jarallaxInit = async () => {
        const jarallaxElems = document.querySelectorAll('.jarallax');
        if (!jarallaxElems || (jarallaxElems && jarallaxElems.length === 0)) {
            return;
        }

        const { jarallax } = await import('jarallax');
            jarallax(jarallaxElems, { speed: 0.2 });
        };

        jarallaxInit();
    });

    return (
        <Box
            component='section'
            className='price-section'
        >
            <Box
                className='jarallax'
                data-jarallax
                data-speed="0.2"
                position={'relative'}
                minHeight={{ xs: 'calc(90vh - 75px)', sm: 650, md: 790 }}
                sx={{ paddingBottom: '1.25rem', paddingTop: '1.25rem' }}
                display={'flex'}
                alignItems={'center'}
            >
                <Box
                    className={'jarallax-img'}
                    sx={{
                        position: 'absolute',
                        objectFit: 'cover',
                        fontFamily: 'object-fit: cover;',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        backgroundImage: `url(${pricesJpg1})`
                    }}
                />
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        width: 1,
                        height: 1,
                        background: alpha('#161c2d', 0.25),
                        zIndex: 1,
                    }}
                />
                <Container
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        padding: 0,
                    }}
                >
                    <SectionHeader
                        sectionTitle='Cennik'
                        sectionHeader='Aktualne ceny naszych usług'
                        sectionSubheader='Zapoznaj się z cennikiem naszych usług'
                        sectionLinkText='Zobacz cennik usług'
                        sectionLinkPath='/prices'
                        sectionWrapperClass='prices'
                    />
                </Container>
            </Box>
            <Box className='jumbotron'>
                <Box className='photo-wrapper'>
                    <Box
                        className='content-wrapper'
                        minHeight={{ xs: 'calc(90vh - 75px)', sm: 650, md: 790 }}
                    >
                        <Box className='description-wrapper'>
                            <Container>
                                <SectionHeader
                                    sectionTitle='Cennik'
                                    sectionHeader='Aktualne ceny naszych usług'
                                    sectionSubheader='Zapoznaj się z cennikiem naszych usług'
                                    sectionLinkText='Zobacz cennik usług'
                                    sectionLinkPath='/prices'
                                    sectionWrapperClass='prices'
                                />
                            </Container>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default PriceSection;
