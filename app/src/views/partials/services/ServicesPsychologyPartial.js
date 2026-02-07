import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardCareerProposed from '../../../components/CardCareerProposed';
import CardProposed from '../../../components/CardProposed';
// import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { services, psychology } from '../../../data/services';
import { team } from '../../../data/team';
// import { treatment } from '../../../data/treatment';
import { career } from '../../../data/career';

const ServicesPsychologyPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-psychology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs className='breadcrumb back' aria-label='breadcrumb'>
                                <Link to='/services' aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>Specjalizacje</Box>
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
                                <Link to='/services' aria-current='page'>
                                    Specjalizacje
                                </Link>
                                <Typography color='text.primary'>
                                    Psychologia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                            Psychologia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Psychologia</strong> to dziedzina nauki zajmująca się badaniem ludzkiego zachowania, emocji, procesów poznawczych oraz relacji międzyludzkich. Skupia się na zrozumieniu mechanizmów funkcjonowania psychiki, wspieraniu zdrowia psychicznego oraz pomocy osobom doświadczającym trudności emocjonalnych, stresu, kryzysów życiowych czy problemów w relacjach. Psychologia obejmuje pracę z takimi obszarami jak lęk, obniżony nastrój, problemy adaptacyjne, trudności wychowawcze, zaburzenia emocjonalne oraz rozwój osobisty, oferując wsparcie dopasowane do indywidualnych potrzeb pacjenta.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={psychology.images[0].src}
                                        imageAlt={psychology.images[0].alt}
                                        imageAuthor={psychology.images[0].author}
                                        imageHref={psychology.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Psycholog pracuje z pacjentami w oparciu o rozmowę, diagnozę psychologiczną oraz sprawdzone metody terapeutyczne, pomagając w lepszym zrozumieniu własnych emocji, myśli i zachowań. Celem pracy psychologicznej jest wzmacnianie zasobów wewnętrznych, poprawa jakości życia, rozwijanie umiejętności radzenia sobie z trudnościami oraz wspieranie pacjenta w procesie zmiany i budowania trwałej równowagi psychicznej.
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
                                    {team.filter(item => item.specialization.includes('psychology')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/psychology/${item.specialist}`}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            {/* <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment.filter(item => item.specialization.includes('psychology')).map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.images[0].src}
                                            cardPath={item.path}
                                        />
                                    ))}
                                </Box>
                            </Box> */}
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Powiązane specjalizacje
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {services.filter(item => item.relatedSpecializations.includes('psychology')).map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.image}
                                            cardPath={item.path}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            {career.filter(item => item.specialization?.includes('psychology')).length > 0 && (
                                <Box className='box-proposed'>
                                    <Box className='header-wrapper'>
                                        <Typography className='header'>
                                            Oferty pracy
                                        </Typography>
                                    </Box>
                                    <Box className='card-wrapper'>
                                        {career.filter(item => item.specialization?.includes('psychology')).map((item) => (
                                            <CardCareerProposed
                                                key={item.id}
                                                cardTitle={item.title}
                                                cardLocation={item.location}
                                                cardDate={item.date}
                                                cardAgreement={item.agreement}
                                                cardPosition={item.position}
                                                cardType={item.type}
                                                cardPlace={item.place}
                                                cardPath={item.path}
                                                cardImage={item.image}
                                                cardStatus={item.status}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(ServicesPsychologyPartial);
