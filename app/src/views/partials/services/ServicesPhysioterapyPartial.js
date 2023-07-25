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
                                    <strong>Fizjoterapia</strong> zajmuje się diagnostyką i leczeniem nieinwazyjnych schorzeń występujących w obrębie układu ruchu. Zabiegi fizjoterapeutyczne mają na celu usprawnić narząd ruchu pacjenta, przywrócić sprawność ruchową po urazach stawów czy mięśni, łagodzić dolegliwości bólowe i podnosić ogólną sprawność fizyczną organizmu.
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
                                    Fizjoterapia może obejmować wiele różnych metod leczenia, zarówno manualnych jak i aparaturowych.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Do technik stosowanych w fizjoterapii zaliczamy:</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'gimnastykę leczniczą,',
                                        'masaże terapeutyczne,',
                                        'elektroterapię,',
                                        'krioterapię i terapia cieplna,',
                                        'laseroterapię,',
                                        'ultrasonoterapię,',
                                        'kąpiele lecznicze,',
                                        'kinesiotaping.'
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
                                <Typography className='paragraph heading'>
                                    <strong>W naszej Klinice mogą państwo skorzystać z:</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'masażu leczniczego częściowego lub całych pleców,',
                                        'masażu limfatycznego,',
                                        'terapii metodą PNF,',
                                        'masażu relaksacyjnego,',
                                        'ćwiczeń indywidualnych,',
                                        'rehabilitacji ortopedycznej metodą Cyriax.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
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
