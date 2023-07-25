import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';

import {
    technology,
    fotoFinderDermoscopeVexia
} from '../../../data/technology';

const TechnologyFotoFinderDermoscopeVexiaPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header technology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/technology' aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>Technologia</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/' aria-current='page'>
                                    Home
                                </Link>
                                <Link to='/technology' aria-current='page'>
                                    Technologia
                                </Link>
                                <Typography color='text.primary'>
                                    {fotoFinderDermoscopeVexia.title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {fotoFinderDermoscopeVexia.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box className='box-technology'>
                                <Typography className='paragraph'>
                                    Wideodermatoskopia jest wszechstronnym systemem wyposażonym w kamerę. Jest mocnym wsparciem w postawieniu diagnozy, zachęca pacjentów do regularnych kontroli, a co najważniejsze chroni przed niepotrzebnym wycinaniem znamion.
                                </Typography>
                                <Box className='box-image'>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={fotoFinderDermoscopeVexia.imageLarge}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px',
                                            objectPosition: '50% 35%'
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Komponent jakim jest kamera, dostarcza doskonałą jakość zdjęć zmian skórnych w rozdzielczości Full HD (1920x1080px), dostępnej zarówno w podglądzie na żywo, jak i na wykonanych zdjęciach. Opatentowany, precyzyjny obiektyw zapewnia krystalicznie czysty obraz niezależnie od powiększenia, w świetle spolaryzowanym lub z użyciem immersji. Oświetlenie diodami LED gwarantuje nieskazitelną widoczność.
                                </Typography>
                                <Typography className='paragraph'>
                                    System wideodermatoskopii łączy w sobie najwyższą jakość wykonania zdjęć, kompleksową platformę diagnozy skóry oraz wysoki poziom opieki nad pacjentem. Obrazy dermoskopowe są przypisane do pacjenta, a także do konkretnej lokalizacji, dzięki temu znacznie łatwiej śledzić zmiany i obserwować postępy leczenia. Zastosowanie funkcji Follow up w trybie Mikro i Overview, pozwala na identyczne ustawienie kamery i wykonanie zdjęć „przed i po” w celu ich rzetelnego porównania. Natomiast dostępny moduł Measure automatycznie kalibruje zdjęcia i pozwala na wykonanie ręcznych pomiarów np. grubości włosa. System umożliwia tworzenie i rozbudowę wirtualnej karty pacjenta zawierającej niezbędne dane z każdej wizyty, które można wydrukować w postaci raportu.
                                </Typography>
                            </Box>
                        </Box>

                        <Box className='proposed-wrapper'>
                            <Box className='box-proposed technology'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostały sprzęt
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {technology.filter(item => item.designation !== 'fotoFinderDermoscopeVexia').map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.imageSmall}
                                            cardPath={item.path}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TechnologyFotoFinderDermoscopeVexiaPartial);
