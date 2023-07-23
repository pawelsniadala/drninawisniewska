import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { treatment, mezoterapiaIglowa } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentMezoterapiaIglowaPartial = () => {
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
                                <Link to='/treatment/aesthetic-medicine' aria-current='page'>
                                    <Box>Medycyna estetyczna</Box>
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
                                <Link to='/treatment/aesthetic-medicine' aria-current='page'>
                                    Medycyna estetyczna
                                </Link>
                                <Typography>
                                    Mezoterapia igłowa
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Mezoterapia igłowa
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    <strong>Mezoterapia igłowa</strong> to przede wszystkim <strong>głębokie nawilżenie skóry</strong>. Zabieg polega na bezpośrednim podaniu małych dawek substancji biologicznie czynnej śródskórnie lub podskórnie w miejsca, które chcemy poddać zabiegowi. Mezoterapia igłowa <strong>pobudza</strong> również <strong>mikrokrążenie</strong>, co <strong>stymuluje komórki</strong> do <strong>produkcji nowych włókien kolagenowych</strong>. W efekcie uzyskujemy odświeżoną, napiętą skórę.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={mezoterapiaIglowa.images[0].src}
                                        imageAlt={mezoterapiaIglowa.images[0].alt}
                                        imageAuthor={mezoterapiaIglowa.images[0].author}
                                        imageHref={mezoterapiaIglowa.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Mezoterapia igłowa wykorzystuje dwa różne mechanizmy działania. Pierwszym z nich jest  <strong>ogniskowe gojenie się skóry i jej samoregeneracja po licznych nakłuciach, do których dochodzi w trakcie zabiegu</strong>. Drugim zaś jest efekt <strong>działania substancji wstrzykiwanych w skórę</strong>. Wprowadzany lek bądź inna substancja aktywna nadaje zabiegowi dodatkowych ukierunkowanych właściwości.
                                </Typography>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Wskazania
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'spadek nawilżenia skóry,',
                                        'profilaktyka przeciwstarzeniowa skóry,',
                                        'objawy starzenia się skóry,',
                                        'fotostarzenie,',
                                        'drobne linie oraz zmarszczki,',
                                        'utrata jędrności, elastyczności, blasku skóry,',
                                        'cienie i zmarszczki wokół oczu,',
                                        'przebarwienia,',
                                        'łojotok,',
                                        'rozszerzone pory,',
                                        'osłabione włosy,',
                                        'wypadanie włosów i łysienie,',
                                        'cellulit.'
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
                                    Ciąża i laktacja, aktywne infekcje wirusowe lub bakteryjne, nadciśnienie tętnicze, choroby autoimmunologiczne, stany zapalne, uczulenie na stosowane substancje, zażywanie antykoagulantów, zażywanie doustnych kortykosteroidów, poważna egzema, łuszczyca, niestabilna cukrzyca, czynna choroba nowotworowa oraz okres do 5 lat od wyleczenia.
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
                                        .filter(item => item.treatment.includes('mezoterapia-iglowa'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/aesthetic-medicine/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'aesthetic-medicine')
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
                                        .filter(item => item.specialization.includes('aesthetic-medicine'))
                                        .filter(item => item.treatment !== 'mezoterapia-iglowa')
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

export default Page(TreatmentMezoterapiaIglowaPartial);
