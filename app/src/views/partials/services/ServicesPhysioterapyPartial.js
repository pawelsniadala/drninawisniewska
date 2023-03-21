import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeam2 from '../../../components/CardTeam2';
import CardTeamProposed2 from '../../../components/CardTeamProposed2';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { services, physioterapy } from '../../../data/services';
import { team } from '../../../data/team';

const ServicesPhysioterapyPartial = () => {
    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    }

    function useWindowDimensions() {
        const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

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

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Rehabilitacja
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Medycyna ortopedyczna</strong> według <strong>Cyriaxa</strong> jest kompleksowym systemem terapii oraz diagnostyki zaburzeń narządu ruchu. Opiera się na badaniu klinicznym, które za pomocą testów i wywiadu doprowadza fizjoterapeutę do postawienia odpowiedniej <strong>diagnozy</strong> uszkodzonej tkanki w układzie ruchu.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={physioterapy.image}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px'
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Terapia polega na <strong>głębokim masażu</strong> poprzecznym zastosowanym na uszkodzonej strukturze (mięsień, więzadło, ścięgno), mobilizacji, trakcji stosowanej dla patologii kręgosłupa oraz rozciąganiu torebki stawowej  w przypadku jej uszkodzenia.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Masaż
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Zespół technik i chwytów</strong> oddziaływujących na cały organizm, zdrowie i kondycję. Polega na wykorzystaniu dotyku w celu wywołania uczucia odprężenia i dobrego samopoczucia.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={physioterapy.servicesPhysioterapyMassage}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px'
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Masaż wykorzystywany jest w celu</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'rozluźnienia mięśni,',
                                        'złagodzenia sztywności, napięcia i bólu mięśni,',
                                        'zwiększenia elastyczności i wytrzymałości więzadeł,',
                                        'poprawy ruchomości stawów,',
                                        'wzmożenia zasilenia organów w tlen i substancje odżywcze odprężenia i przezwyciężenia stresu.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Kinesiotaping
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Kinesiotaping</strong> czyli <strong>plastrowanie dynamiczne</strong>. Technika fizjoterapeutyczna polegająca na naklejaniu na ciało zgodnie z określonymi zasadami specjalnych taśm. Powodują one regulację napięcia mięśniowego w miejscu aplikacji, zmniejszając ból, ograniczając nadwrażliwość na dotyk, zwiększając zakres ruchu i siłę mięśni oraz zmniejszyć obrzęki w miejscu aplikacji.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={physioterapy.servicesPhysioterapyElasticTherapeuticTape}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px'
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Naciągnięcie skóry powoduje zwiększenie przestrzeni pomiędzy skórą właściwą a powięzią, błoną otaczającą mięśnie, wywołując usprawnienie pracy układu limfatycznego. Dzięki większej ilości  przepływającej limfy zastoiny i stany zapalne ulegają zmniejszeniu a krwiaki  zostają zredukowane. Kinesiotaping wywołuje również działanie znieczulające oddziaływując na receptory bólu i czucia głębokiego znajdujące się w skórze.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header alternative'>
                                    Specjaliści
                                </Typography>
                                <Box className='card-wrapper team page'>
                                    {width >= 991.98 ? (
                                        team.filter(item => item.specialization.includes('physioterapy')).map((item, index) => (
                                            <CardTeam2
                                                key={index}
                                                cardImage={item.image}
                                                cardBackground={item.background}
                                                cardTitle={item.title}
                                                cardName={item.name}
                                                cardSpeciality={item.speciality}
                                                cardDescription={item.experience ? item.experience : item.education}
                                                cardPath={`/team/physioterapy/${item.specialist}`}
                                            />
                                        ))
                                    ) : (
                                        team.filter(item => item.specialization.includes('physioterapy')).map((item, index) => (
                                            <CardTeamProposed2
                                                key={index}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/physioterapy/${item.specialist}`}
                                            />
                                        ))
                                    )}
                                </Box>
                            </Box>

                        </Box>
                        <Box className='proposed-services'>
                            <Box className='card-wrapper services-proposed'>
                                {services.length ? services.filter(item => item.title !== 'Fizjoterapia').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.image}
                                        cardPath={item.path}
                                    />
                                )) : (
                                    <Box>Brak danych</Box>
                                )}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(ServicesPhysioterapyPartial);
