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

import { services, psychiatry } from '../../../data/services';
import { team } from '../../../data/team';
import { career } from '../../../data/career';

const ServicesPsychiatryPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-psychiatry'>
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
                                    Psychiatria
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                            Psychiatria
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Psychiatria</strong> to gałąź medycyny zajmująca się badaniem, diagnozowaniem, leczeniem i prewencją zaburzeń psychicznych oraz emocjonalnych. Specjalizacja ta skupia się na zrozumieniu, ocenie i pomocy pacjentom z różnymi schorzeniami psychicznymi, takimi jak depresja, schizofrenia, zaburzenia lękowe, zaburzenia afektywne, zaburzenia jedzenia, zaburzenia osobowości i wiele innych.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={psychiatry.images[0].src}
                                        imageAlt={psychiatry.images[0].alt}
                                        imageAuthor={psychiatry.images[0].author}
                                        imageHref={psychiatry.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Psychiatria odgrywa kluczową rolę w zdrowiu psychicznym społeczeństwa, pomagając jednostkom w radzeniu sobie z trudnościami psychicznymi i poprawie jakości życia. Specjaliści tej dziedziny często pracują w szpitalach psychiatrycznych, klinikach, prywatnych praktykach, a także uczestniczą w działaniach edukacyjnych i społecznych mających na celu zwiększenie świadomości zdrowia psychicznego.
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
                                    {team.filter(item => item.specialization.includes('psychiatry')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/psychiatry/${item.specialist}`}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Powiązane specjalizacje
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {services.filter(item => item.relatedSpecializations.includes('psychiatry')).map((item) => (
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
                            {career.filter(item => item.specialization?.includes('psychiatry')).length > 0 && (
                                <Box className='box-proposed'>
                                    <Box className='header-wrapper'>
                                        <Typography className='header'>
                                            Oferty pracy
                                        </Typography>
                                    </Box>
                                    <Box className='card-wrapper'>
                                        {career.filter(item => item.specialization?.includes('psychiatry')).map((item) => (
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

export default Page(ServicesPsychiatryPartial);
