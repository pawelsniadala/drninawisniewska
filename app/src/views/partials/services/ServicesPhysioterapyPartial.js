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

import { services, physioterapy } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';

const ServicesPhysioterapyPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-physioterapy'>
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
                                    Fizjoterapia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Fizjoterapia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Fizjoterapia</strong> to dziedzina medycyny zajmująca się leczeniem i rehabilitacją osób z różnymi schorzeniami, urazami lub dysfunkcjami układu mięśniowo-szkieletowego. Jej celem jest przywrócenie pacjentowi pełnej sprawności fizycznej, zmniejszenie bólu, poprawa zakresu ruchu oraz wzmacnianie mięśni.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={physioterapy.images[0].src}
                                        imageAlt={physioterapy.images[0].alt}
                                        imageAuthor={physioterapy.images[0].author}
                                        imageHref={physioterapy.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Fizjoterapia obejmuje różnorodne metody i techniki, które są dostosowane do konkretnego przypadku i potrzeb pacjenta:
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Przykładowe formy terapii fizycznej to:</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'ćwiczenia terapeutyczne',
                                        'masaż,',
                                        'elektroterapia,',
                                        'terapia manualna,',
                                        'techniki relaksacyjne.',
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Fizjoterapia może być stosowana w różnych dziedzinach medycyny, takich jak ortopedia, neurologia, geriatria, pediatria czy medycyna sportowa. Fizjoterapeuci współpracują z lekarzami i innymi specjalistami, aby zapewnić kompleksową opiekę pacjentom i pomóc im w powrocie do pełnej funkcjonalności i jakości życia.
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
                                    {team.filter(item => item.specialization.includes('physioterapy')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/physioterapy/${item.specialist}`}
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
                                    {treatment.filter(item => item.specialization.includes('physioterapy')).map((item) => (
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
                                    {services.filter(item => item.relatedSpecializations.includes('physioterapy')).map((item) => (
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

export default Page(ServicesPhysioterapyPartial);
