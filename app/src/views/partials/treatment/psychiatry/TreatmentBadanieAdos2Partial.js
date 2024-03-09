import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
// import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { /* treatment, */ badanieAdos2 } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentBadanieAdos2Partial = () => {
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
                                <Link to='/treatment/psychiatry' aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>Psychiatria</Box>
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
                                <Link to='/treatment/psychiatry' aria-current='page'>
                                    Psychiatria
                                </Link>
                                <Typography>
                                    Badanie Ados-2
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Badanie Ados-2
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    <strong>Badanie Ados-2</strong> dla dzieci, młodzieży i osób dorosłych. Pomaga wykryć spektrum autyzmu (Zespół Aspergera, spektrum autyzmu) u dzieci od 12 miesiąca życia, ale także u młodzieży i u dorosłych.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={badanieAdos2.images[0].src}
                                        imageAlt={badanieAdos2.images[0].alt}
                                        imageAuthor={badanieAdos2.images[0].author}
                                        imageHref={badanieAdos2.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    <strong>Czym jest Ados-2?</strong> Jest to profesjonalny, wielowymiarowy test umożliwiający zweryfikowanie, czy u danej osoby występują cechy spektrum autyzmu. Obecnie określany jest jako "złoty standard" diagnozy autyzmu na świecie. Może dostarczać informacji pomocnych w planowaniu oddziaływań terapeutycznych.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Z czego składa się Ados-2?</strong> Badanie Ados-2 składa się z pięciu modułów przeznaczonych dla badanych różniących się wiekiem i poziomem rozwoju językowego.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Jak wygląda proces diagnozy?</strong> Na podstawie obserwacji diagnosta ocenia różne aspekty zachowania, reprezentujące pięć kategorii: język i komunikacja, wzajemność w interakcjach społecznych, zabawa/wyobraźnia, zachowania stereotypowe i sztywne zainteresowania, inne zachowania odbiegające od normy. Za trafnością polskiej wersji ADOS-2 przemawiają wysokie korelacje wyników z wynikami innych narzędzi do diagnozy autyzmu.
                                </Typography>
                                <Typography className='paragraph'>
                                    Proces diagnozy zakończony jest wydaniem pisemnej opinii po badaniu.
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
                                        .filter(item => item.treatment.includes('badanieAdos2'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/psychiatry/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'psychiatry')
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
                                        .filter(item => item.specialization.includes('psychiatry'))
                                        .filter(item => item.treatment !== 'badanie-ados-2')
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

export default Page(TreatmentBadanieAdos2Partial);
