import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Lightbox from 'react-image-lightbox';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Container from '../components/Container';
import SectionHeader from '../components/SectionHeader';

import { clinic } from '../data/clinic';

const ClinicSection = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const [ viewPortEntered, setViewPortEntered ] = useState(false);

    const setViewPortVisibility = (isVisible) => {
        if (viewPortEntered) {
            return;
        }

        setViewPortEntered(isVisible);
    };

    const [ currentImage, setCurrentImage ] = useState(0);
    const [ viewerIsOpen, setViewerIsOpen ] = useState(false);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
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
            sx={{
                backgroundColor: '#fff',
            }}
        >
            <Container>
                <Box>
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
                    <Box>
                        <ImageList
                            className='image-list'
                            variant='quilted'
                            cols={3}
                            rowHeight={isMd ? 350 : 160}
                            gap={4}
                            sx={{ overflowY: 'hidden', marginBottom: 0 }}
                        >
                            {clinic.pictures.map((item, i) => (
                                <ImageListItem
                                    key={i}
                                    cols={item.cols}
                                    rows={item.rows}
                                >
                                    <LazyLoadImage
                                        className={`lazy-load-image ${item.designation}`}
                                        height={'100%'}
                                        width={'100%'}
                                        src={item.srcThumbnail}
                                        alt={item.designation}
                                        effect='blur'
                                        visibleByDefault={true}
                                        onClick={() => openLightbox(i)}
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                        {viewerIsOpen && (
                            <Lightbox
                                mainSrc={clinic.pictures[currentImage].srcOriginal}
                                nextSrc={clinic.pictures[(currentImage + 1) % clinic.pictures.length].srcOriginal}
                                prevSrc={clinic.pictures[(currentImage + clinic.pictures.length - 1) % clinic.pictures.length].srcOriginal}
                                onCloseRequest={() => closeLightbox()}
                                onMovePrevRequest={() => setCurrentImage((currentImage + clinic.pictures.length - 1) % clinic.pictures.length)}
                                onMoveNextRequest={() => setCurrentImage((currentImage + 1) % clinic.pictures.length)}
                                reactModalStyle={{ overlay: { zIndex: 1500 } }}
                                imageCaption={`Autor: ${clinic.pictures[currentImage].author}`}
                            />
                        )}
                    </Box>
                </Box>
                <Box sx={{ paddingTop: '32px' }} className='statistics-wrapper'>
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
                                    <Box>
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
                                    </Box>
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
