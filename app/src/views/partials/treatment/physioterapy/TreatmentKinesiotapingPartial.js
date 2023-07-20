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
import Image from '../../../../components/Image';

import { treatment, kinesiotaping } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentKinesiotapingPartial = () => {
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
                                    Kinesiotaping
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Kinesiotaping
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                            <Typography className='paragraph'>
                                    <strong>Kinesiotaping</strong> czyli <strong>plastrowanie dynamiczne</strong>. Technika fizjoterapeutyczna polegająca na naklejaniu na ciało zgodnie z określonymi zasadami specjalnych taśm. Powodują one regulację napięcia mięśniowego w miejscu aplikacji, zmniejszając ból, ograniczając nadwrażliwość na dotyk, zwiększając zakres ruchu i siłę mięśni oraz zmniejszyć obrzęki w miejscu aplikacji.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={kinesiotaping.images[0].src}
                                        imageAlt={kinesiotaping.images[0].alt}
                                        imageAuthor={kinesiotaping.images[0].author}
                                        imageHref={kinesiotaping.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Naciągnięcie skóry powoduje zwiększenie przestrzeni pomiędzy skórą właściwą a powięzią, błoną otaczającą mięśnie, wywołując usprawnienie pracy układu limfatycznego. Dzięki większej ilości  przepływającej limfy zastoiny i stany zapalne ulegają zmniejszeniu a krwiaki  zostają zredukowane. Kinesiotaping wywołuje również działanie znieczulające oddziaływując na receptory bólu i czucia głębokiego znajdujące się w skórze.
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
                                        .filter(item => item.treatment.includes('kinesiotaping'))
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
                                        .filter(item => item.treatment !== 'kinesiotaping')
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

export default Page(TreatmentKinesiotapingPartial);
