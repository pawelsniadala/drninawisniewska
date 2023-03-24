import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../components/Page';
import Container from '../components/Container';
import ListBulleted from '../components/ListBulleted';

import { clinic } from '../data/clinic';

const TechnologyView = () => {
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
                        <Box className='clinic-services-wrapper' marginBottom={3}>
                            <Typography className='paragraph'>
                                Możecie Państwo liczyć na profesjonalne usługi z zakresu medycyny estetycznej pod nadzorem lekarza. Dodatkowo oferujemy usługi takich specjalistów jak: ortopeda, reumatolog, chirurg naczyniowy, fizjoterapeuta, dietetyk kliczniczny oraz ginekolog-endokrynolog.
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
                                        'Reumatologia'
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
