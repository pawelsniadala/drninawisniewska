import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { treatment, masazKobido } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentMasazKobidoPartial = () => {
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
                                    Masaż Kobido
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Masaż Kobido
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Jest to masaż pochodzący z Japonii, inaczej nazywany niechirurgicznym liftingiem twarzy. W masażu tym intensywnej pracy zostają poddane okolice twarzy, szyi i dekoltu. Jego cel to głębokie odżywienie skóry, rozluźnienie mięśni i powięzi, pobudzenie skóry do produkcji kolagenu i elastyny oraz relaks.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={masazKobido.images[0].src}
                                        imageAlt={masazKobido.images[0].alt}
                                        imageAuthor={masazKobido.images[0].author}
                                        imageHref={masazKobido.images[0].href}
                                    />
                                </Box>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Wskazania
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'poprawa owalu twarzy,',
                                        'odżywienie skóry,',
                                        'eliminacja napięciowych bóli głowy,',
                                        'poprawa jakości snu,',
                                        'spłycenie zmarszczek,',
                                        'zmniejszenie oznak starzenia się skóry,',
                                        'zniwelowanie obrzęków w okolicy twarzy,',
                                        'redukcja napięć mięśniowo-powięziowych w obrębie twarzy, szyi i karku,',
                                        'pobudzenie produkcji kolagenu i elastyny.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Przeciwwskazania
                                </Typography>
                                <Typography className='paragraph'>
                                    Stany zapalne organizmu i skóry, przerwana ciągłość naskórka, cera naczynkowa, stany ropne okołozębowe. Po ekstrakcji zęba należy odczekać 2 tygodnie, natomiast po wstawieniu implantu 2 miesiące. Trądzik różowaty w fazie zaostrzenia. Po zabiegach medycyny estetycznej z wykorzystaniem botoksu należy odczekać co najmniej 2 tygodnie, nici liftingujących 6 miesięcy, kwasu hialuronowego i innych wypełniaczy 2-3 miesiące. Alergie skóry, ciąża zagrożona.
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
                                        .filter(item => item.treatment.includes('masaz-kobido'))
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
                                        .filter(item => item.treatment !== 'masaz-kobido')
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

export default Page(TreatmentMasazKobidoPartial);
