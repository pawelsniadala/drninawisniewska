import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
// import ListBulleted from '../../../../components/ListBulleted';
// import Image from '../../../../components/Image';

import { /* treatment, */ /* echoSerca */ } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentEchoSercaPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-dermatology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/treatment/cardiology' aria-current='page'>
                                    <Box>Kardiologia</Box>
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
                                <Typography>
                                    Zabiegi
                                </Typography>
                                <Link to='/treatment/cardiology' aria-current='page'>
                                    Kardiologia
                                </Link>
                                <Typography>
                                    ECHO serca
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                ECHO serca
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    <strong>ECHO serca</strong>, czyli echokardiografia, to bezpieczne i nieinwazyjne badanie obrazowe serca, które wykorzystuje fale dźwiękowe o wysokiej częstotliwości do tworzenia obrazów struktur serca. Zabieg ten przeprowadza się za pomocą urządzenia zwanych echokardiografami, które emitują fale dźwiękowe przez specjalną sondę umieszczoną na klatce piersiowej pacjenta.
                                </Typography>
                                {/* <Box className='box-image'>
                                    <Image
                                        imageSrc={echoSerca.images[0].src}
                                        imageAlt={echoSerca.images[0].alt}
                                        imageAuthor={echoSerca.images[0].author}
                                        imageHref={echoSerca.images[0].href}
                                    />
                                </Box> */}
                                <Typography className='paragraph'>
                                    Podczas ECHO serca pacjent leży na stole badawczym, a technik medyczny lub lekarz przesuwa sondę po powierzchni klatki piersiowej w różnych pozycjach. Fale dźwiękowe odbijają się od struktur serca, a odbicia są przechwytywane przez sondę i przekształcane w obrazy na monitorze.
                                </Typography>
                            </Box>
                        </Box>

                        <Box className='proposed-wrapper'>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Specjaliści
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {team
                                        .filter(item => item.treatment.includes('echo-serca'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/vascular-surgery/${item.specialist}`}
                                            />
                                        ))
                                    }
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Specjalizacja
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {services
                                        .filter(item => item.specialization === 'cardiology')
                                        .map((item) => (
                                            <CardProposed
                                                key={item.id}
                                                cardTitle={item.title}
                                                cardDescription={item.description}
                                                cardImage={item.image}
                                                cardPath={item.path}
                                            />
                                        ))
                                    }
                                </Box>
                            </Box>
                            {/* <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostałe zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment
                                        .filter(item => item.specialization.includes('cardiology'))
                                        .filter(item => item.treatment !== 'echo-serca')
                                        .map((item) => (
                                            <CardProposed
                                                key={item.id}
                                                cardTitle={item.title}
                                                cardDescription={item.description}
                                                cardImage={item.images[0].src}
                                                cardPath={item.path}
                                            />
                                        ))
                                    }
                                </Box>
                            </Box> */}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TreatmentEchoSercaPartial);
