import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import Image from '../../../../components/Image';

import { treatment, masazNaturalFaceLifting } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentMasazNaturalFaceLiftingPartial = () => {
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
                                <Link to='/treatment/physioterapy' aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>Fizjoterapia</Box>
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
                                <Link to='/treatment/physioterapy' aria-current='page'>
                                    Fizjoterapia
                                </Link>
                                <Typography>
                                    Masaż Natural Face Lifting
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Masaż Natural Face Lifting
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Jest to masaż bazujący na technikach masażu Kobido, poszerzony o mocniejsze i głębsze techniki masażu twarzy oraz dodatkowo używa się w nim płytki GUA SHA, baniek próżniowych, a na koniec, w celu osiągnięcia jeszcze lepszego efektu, nakładana jest maseczka. Masaż ten został stworzony na potrzeby klientów, których twarz potrzebuje mocniejszego modelowania i liftingu.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={masazNaturalFaceLifting.images[0].src}
                                        imageAlt={masazNaturalFaceLifting.images[0].alt}
                                        imageAuthor={masazNaturalFaceLifting.images[0].author}
                                        imageHref={masazNaturalFaceLifting.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    To połączenie masażu Kobido z autorskimi ruchami jego twórczyni Aliny Korytkowskiej, bazującymi na ruchach mioplastycznych, masażu klasycznego twarzy i fizjoterapii. Masaż ten jest bardzo intensywny, nie powinien jednak sprawiać bólu. Efekt liftingu twarzy widać już po wykonaniu pierwszego zabiegu, aczkolwiek aby uzyskać oczekiwany efekt najlepiej wykonać minimum 5 zabiegów. Efekty są uzależnione od typu oraz stanu skóry twarzy, dlatego nie u każdego efekt jest taki sam po jednym zabiegu.
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
                                        .filter(item => item.treatment.includes('masaz-natural-face-lifting'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/physioterapy/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'physioterapy')
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
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostałe zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment
                                        .filter(item => item.specialization.includes('physioterapy'))
                                        .filter(item => item.treatment !== 'masaz-natural-face-lifting')
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
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TreatmentMasazNaturalFaceLiftingPartial);
