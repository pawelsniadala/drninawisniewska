import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';

import { clinic } from '../data/clinic';

const ClinicSection = () => {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#my-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            padding: {
                top: 50,
                bottom: 50
            }
        });

        const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
            type: 'below'
        });

        lightbox.init(captionPlugin);
    }, []);

    const [ viewPortEntered, setViewPortEntered ] = useState(false);

    const setViewPortVisibility = (isVisible) => {
        if (viewPortEntered) {
            return;
        }

        setViewPortEntered(isVisible);
    };

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
            className='clinic-section'
        >
            <Container>
                <SectionHeader
                    sectionTitle='Klinka'
                    sectionHeader='Kilka słów o naszej klinice'
                    sectionSubheader='Dowiedz się więcej o naszej klinice'
                    sectionLinkText='Zobacz pełny opis'
                    sectionLinkPath='/clinic'
                    sectionWrapperClass='clinic'
                    sectionDescription={
                        width >= 991.98 ? (
                            <Box
                                className='description'
                                data-aos={'fade-in'}
                            >
                                <Box>
                                    <Typography className='paragraph'>
                                        W Klinice dr Niny Wiśniewskiej znajdziecie Państwo pomoc w zakresie leczenia trądzika, trądzika różowatego, łuszczycy, atopowego zapalenie skóry, łojotokowego zapalenia skóry, egzemy i innych chorób.
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className='paragraph'>
                                        Dodatkowym atutem jest lampa do fototerapii UVB 311 nm i PUVA - bath przeznaczona dla pacjentów z łuszczycą, AZS, wypryskiem, a także możliwość wykonania płatkowych testów kontaktowych. <Link className='link' to={'/clinic'}>Zobacz więcej <ArrowForwardIcon fontSize='14px'/></Link>
                                    </Typography>
                                </Box>
                            </Box>
                        ) : (
                            <Box>
                                <Typography className='paragraph' data-aos={'fade-right'} sx={{ textAlign: 'center' }}>
                                    W Klinice dr Niny Wiśniewskiej znajdziecie Państwo pomoc w zakresie leczenia trądzika, trądzika różowatego, łuszczycy, atopowego zapalenie skóry, egzemy i innych chorób.
                                </Typography>
                            </Box>
                        )
                    }
                />
                <Box className='photos-wrapper'>
                    <Box className="pswp-gallery" id='my-gallery'>
                        {clinic.pictures.map((item, index) => (
                            <a key={`my-gallery-${index}`}
                                href={item.original.src}
                                data-pswp-width={item.original.width}
                                data-pswp-height={item.original.height}
                                data-cropped='true'
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Box className='box'>
                                    <LazyLoadImage
                                        src={item.thumbnail.src}
                                        alt={item.designation}
                                        height='100%'
                                        width='100%'
                                        effect='blur'
                                    />
                                    <span className="pswp-caption-content">
                                        Autor: {item.author}
                                    </span>
                                </Box>
                            </a>
                        ))}
                    </Box>
                </Box>
                <Box className='statistics-wrapper'>
                    <Grid container spacing={2}>
                        {clinic.statistics.map((item, i) => (
                            <Grid key={i} item xs={12} md={4} >
                                <Typography
                                    variant='h4'
                                    sx={{
                                        display: 'flex',
                                        justifyContent:'center',
                                        fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                        fontSize: '35px',
                                        letterSpacing: '.045em',
                                        color: 'rgba(0, 0, 0, 0.65)',
                                        lineHeight: '1.208em',
                                        marginBottom: '0.25em'
                                    }}
                                >
                                    <span>
                                        <VisibilitySensor
                                            onChange={(isVisible) => setViewPortVisibility(isVisible)}
                                            delayedCall
                                        >
                                            <CountUp
                                                duration={2}
                                                end={viewPortEntered ? item.title : 0}
                                                start={0}
                                                suffix={item.suffix}
                                            />
                                        </VisibilitySensor>
                                    </span>
                                </Typography>
                                <Typography
                                    variant='h6'
                                    align={'center'}
                                    sx={{
                                        fontFamily: 'Roboto, sans-serif',
                                        fontSize: '18px',
                                        fontWeight: '300',
                                        color: '#535353'
                                    }}
                                >
                                    {item.subtitle}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default ClinicSection;
