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

import { services, cardiology } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';

const ServicesCardiologyPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-cardiology'>
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
                                    Kardiologia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Kardiologia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Kardiologia</strong> to dziedzina medycyny, która zajmuje się rozpoznawaniem i leczeniem chorób serca i układu krążenia. Obejmuje wady nabyte bądź wrodzone serca, aorty oraz mniejszych naczyń krwionośnych, schorzenia funkcjonowania mięśnia sercowego i zastawek serca a także patologie naczyń krwionośnych, w tym naczyń wieńcowych.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={cardiology.images[0].src}
                                        imageAlt={cardiology.images[0].alt}
                                        imageAuthor={cardiology.images[0].author}
                                        imageHref={cardiology.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Do najczęstszych chorób kardiologicznych i układu krążenia zalicza się</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'nadciśnienie tętnicze,',
                                        'arytmia,',
                                        'zaburzenia rytmu serca,',
                                        'choroba wieńcowa,',
                                        'miażdżyca,',
                                        'zawał serca,',
                                        'udar mózgu,',
                                        'choroby osierdzia,',
                                        'zapalenia mięśnia sercowego,',
                                        'kardiomiopatie,',
                                        'szmery serca,',
                                        'zatorowość płucna,',
                                        'dusznica bolesna,',
                                        'wady serca wrodzone/nabyte.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Nasza Klinika oferuje usługi z zakresu kardiologii obejmujące konsultację lekarską kardiologiczną, badanie echokardiografii oraz badanie EKG z opisem. 
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
                                    {team.filter(item => item.specialization.includes('cardiology')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/cardiology/${item.specialist}`}
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
                                    {treatment.filter(item => item.specialization.includes('cardiology')).map((item) => (
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
                                    {services.filter(item => item.relatedSpecializations.includes('cardiology')).map((item) => (
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

export default Page(ServicesCardiologyPartial);
