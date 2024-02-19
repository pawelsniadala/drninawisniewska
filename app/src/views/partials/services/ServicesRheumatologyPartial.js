import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { services, rheumatology } from '../../../data/services';
import { team } from '../../../data/team';

const ServicesRheumatologyPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-rheumatology'>
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
                                    Reumatologia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                            Reumatologia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Reumatologia</strong> zajmuje się różnego typu schorzeniami związanymi ze stanami zwyrodnieniowymi i zapalnymi tkanki łącznej, kości i stawów.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={rheumatology.images[0].src}
                                        imageAlt={rheumatology.images[0].alt}
                                        imageAuthor={rheumatology.images[0].author}
                                        imageHref={rheumatology.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Najczęstsze problemy z jakimi możesz zgłosić się do naszej Kliniki</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'reumatoidalne zapalenie stawów,',
                                        'łuszczycowe zapalenie stawów,',
                                        'gorączka reumatyczna,',
                                        'zesztywniające zapalenie stawów kręgosłupa,',
                                        'tocznia rumieniowatego układowego',
                                        'twardzina układowa',
                                        'zapalenie skórno-mięśniowe,',
                                        'zapalenie wielomięśniowe,',
                                        'przewlekłe niezakrzepowe zapalenie naczyń,',
                                        'osteoporoza,',
                                        'sarkoidoza.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box className='box-service'>
                                <Typography className='paragraph heading'>
                                    <strong>Kiedy udać się do reumatologa?</strong>
                                </Typography>
                                <Typography className='paragraph'>
                                    Choroby reumatyczne dotykają ludzi w każdym wieku. Jasnym sygnałem, że powinniśmy zgłosić się właśnie do reumatologa jest poranna sztywność i zaczerwienienie stawów, problemy z utrzymaniem przedmiotów w palcach, ze schylaniem się i podnoszeniem przedmiotów, opuchlizna i zniekształcenie stawów. Dodatkowymi objawami mogącymi sugerować chorobę reumatologiczną są silne bóle w okolicy stawów, ścięgien, kości lub mięśni (szczególnie jeśli dolegliwości bólowe są intensywne, trwają przez dłuższy czas i nawracają pomimo leczenia lekami przeciwzapalnymi), stan podgorączkowy lub gorączka, obrzęk, wysypka, zaczerwienienie skóry.
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
                                    {team.filter(item => item.specialization.includes('rheumatology')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/rheumatology/${item.specialist}`}
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
                                    {services.filter(item => item.relatedSpecializations.includes('rheumatology')).map((item) => (
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

export default Page(ServicesRheumatologyPartial);
