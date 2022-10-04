import React, { useEffect } from 'react';

import { useTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';

import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';
import princesJpg1 from '../assets/princes/prices1.jpg';
import princesJpg2 from '../assets/princes/prices2.jpg';

const PriceSection = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });

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
                className={'jarallax'}
                data-jarallax
                data-speed="0.2"
                position={'relative'}
                minHeight={{ xs: 400, sm: 500, md: 650 }}
                // sx={{ height: 'calc(100vh)' }}
                display={'flex'}
                alignItems={'center'}
                // marginTop={-13}
                // paddingTop={13}
                // paddingBottom={5}
                id="agency__portfolio-item--js-scroll"
            >
                <Box
                    className={'jarallax-img'}
                    sx={{
                        position: 'absolute',
                        objectFit: 'cover',
                        /* support for plugin https://github.com/bfred-it/object-fit-images */
                        fontFamily: 'object-fit: cover;',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        // backgroundImage: 'url(https://assets.maccarianagency.com/backgrounds/img52.jpg)'
                        backgroundImage: `url(${isMd ? princesJpg1 : princesJpg2})`,

                        // display: 'flex',
                        // alignItems: 'center',
                        // justifyContent: 'center',
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
                        // background: alpha('#161c2d', 0.3),
                        background: alpha('#161c2d', 0.25),
                        zIndex: 1,
                        // backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0.15))'
                    }}
                />
                <Container
                    sx={{
                        position: "relative",
                        zIndex: 2,
                        // display: 'flex',
                        // justifyContent: 'center',
                        // alignItems: 'center',
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
        </Box>
    );
}

export default PriceSection;
