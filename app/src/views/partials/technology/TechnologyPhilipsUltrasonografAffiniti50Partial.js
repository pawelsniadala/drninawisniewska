import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';

import { technology, philipsUltrasonografAffiniti50 } from '../../../data/technology';

const TechnologyPhilipsUltrasonografAffiniti50Partial = () => {
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
                                    {philipsUltrasonografAffiniti50.title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {philipsUltrasonografAffiniti50.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    Ultrasonograf Affiniti 50 firmy Philips zapewnia znakomity przebieg pracy. To odpowiedź na codzienne potrzeby szybkiego skanowania i efektywnego uzyskiwania wyników, a także znakomite rozwiązanie dla placówek wymagających obrazowania wysokiej jakości oraz sprawdzonych rozwiązań klinicznych.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={philipsUltrasonografAffiniti50.imageLarge}
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
                                    Technika precyzyjnego formowania wiązki, ustawienia obrazowania odpowiadające specyfice określonej tkanki (TSP) oraz narzędzia zwiększające wydajność i zapewniające automatyzację zadań w ultrasonografie Affiniti 50 gwarantują sprawny przebieg badań, umożliwiający przebadanie dużej liczby pacjentów. Wyjątkowa jakość obrazów idzie w parze z zaawansowanymi funkcjami klinicznymi obejmującymi elastografię oraz technologię inteligentnego rozpoznawania struktur anatomicznych (AIUS).
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='proposed-technology'>
                            <Box className='card-wrapper technology-proposed'>
                                {technology.filter(item => item.designation !== 'philipsUltrasonografAffiniti50').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.imageSmall}
                                        cardPath={item.path}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TechnologyPhilipsUltrasonografAffiniti50Partial);
