import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';

import { useTheme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../components/Page';
import Container from '../components/Container';
import ListBulleted from '../components/ListBulleted';

import { clinic } from '../data/clinic';

const TechnologyView = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

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

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                                <Typography color='text.primary'>
                                    Klinika
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Klinika
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper clinic'>
                        <Box className='clinic-description-wrapper'>
                            <Box>
                                <Typography className='paragraph'>
                                    W Klinice dr Niny Wiśniewskiej znajdziecie Państwo pomoc w zakresie leczenia trądzika, trądzika różowatego, łuszczycy, atopowego zapalenie skóry, łojotokowego zapalenia skóry, egzemy i innych chorób.
                                </Typography>
                            </Box>
                            <Box>
                                <Typography className='paragraph'>
                                    Dodatkowym atutem jest lampa do fototerapii UVB 311 nm i PUVA - bath przeznaczona dla pacjentów z łuszczycą, AZS, wypryskiem, a także możliwość wykonania płatkowych testów kontaktowych.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='clinic-gallery-wrapper'>
                            <ImageList
                                className='image-list'
                                variant='quilted'
                                cols={3}
                                rowHeight={isMd ? 300 : 160}
                                gap={4}
                                sx={{ overflowY: 'hidden' }}
                            >
                                {clinic.pictures.map((item, index) => (
                                    <ImageListItem
                                        key={index}
                                        cols={item.cols}
                                        rows={item.rows}
                                        className='image-list-item'
                                    >
                                        <LazyLoadImage
                                            className={`lazy-load-image ${item.designation}`}
                                            height={'100%'}
                                            width={'100%'}
                                            src={item.src}
                                            alt={item.designation}
                                            effect='blur'
                                            onClick={() => openLightbox(index)}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                            {viewerIsOpen && (
                                <Lightbox
                                    mainSrc={clinic.pictures[currentImage].src}
                                    nextSrc={clinic.pictures[(currentImage + 1) % clinic.pictures.length].src}
                                    prevSrc={clinic.pictures[(currentImage + clinic.pictures.length - 1) % clinic.pictures.length].src}
                                    onCloseRequest={() => closeLightbox()}
                                    onMovePrevRequest={() => setCurrentImage((currentImage + clinic.pictures.length - 1) % clinic.pictures.length)}
                                    onMoveNextRequest={() => setCurrentImage((currentImage + 1) % clinic.pictures.length)}
                                    reactModalStyle={{ overlay: { zIndex: 1500 } }}
                                />
                            )}
                        </Box>
                        <Box className='clinic-services-wrapper' marginBottom={3}>
                            <Typography className='paragraph'>
                                Możecie Państwo liczyć na profesjonalne usługi z zakresu medycyny estetycznej pod nadzorem lekarza. Dodatkowo oferujemy usługi takich specjalistów jak: ortopeda, hematolog, chirurg naczyniowy, fizjoterapeuta, dietetyk kliczniczny oraz ginekolog-endokrynolog.
                            </Typography>
                            <Box className='services-item-wrapper'>
                                <Grid container spacing={1} sx={{ marginTop: 0 }}>
                                    {[
                                        'Dermatologia',
                                        'Medycyna estetyczna',
                                        'Kosmetologia',
                                        'Fizjoterapia',
                                        'Chirurgia plastyczna',
                                        'Alergologia',
                                        'USG'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Grid container spacing={1} sx={{ marginTop: 0 }}>
                                    {[
                                        'Endokrynologia',
                                        'Ginekologia',
                                        'Ortopedia',
                                        'Chirurgia naczyniowa',
                                        'Dietetyka Kliniczna',
                                        'Hematologia'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TechnologyView);
