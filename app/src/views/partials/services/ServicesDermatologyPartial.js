import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { services, dermatology } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';

const ServicesDermatologyPartial = () => {
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
                                <Link to='/services' aria-current='page'>
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
                                    Dermatologia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Dermatologia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Dermatologia</strong> to dziedzina medycyny zajmująca się chorobami skóry, włosów i paznokci oraz chorobami wenerycznymi (choroby przenoszone drogą płciową). 
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={dermatology.images[0].src}
                                        imageAlt={dermatology.images[0].alt}
                                        imageAuthor={dermatology.images[0].author}
                                        imageHref={dermatology.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Najczęstsze problemy z jakimi możesz zgłosić się do naszej Kliniki</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'kontrola znamion barwnikowych,',
                                        'trądzik pospolity,',
                                        'trądzik różowaty,',
                                        'atopowe zapalenie skóry,',
                                        'łojotokowe zapalenie skóry,',
                                        'łuszczyca,',
                                        'pokrzywka,',
                                        'kontaktowe zapalenie skóry,',
                                        'liszaj płaski,',
                                        'łysienie,',
                                        'łupież,',
                                        'grzybice skóry i paznokci,',
                                        'choroby weneryczne.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    Przyjmujemy dzieci w każdym wieku.
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
                                    {team.filter(item => item.specialization.includes('dermatology')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/dermatology/${item.specialist}`}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment.filter(item => item.specialization.includes('dermatology')).map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.images[0].src}
                                            cardPath={item.path}
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
                                    {services.filter(item => item.relatedSpecializations.includes('dermatology')).map((item) => (
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
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(ServicesDermatologyPartial);
