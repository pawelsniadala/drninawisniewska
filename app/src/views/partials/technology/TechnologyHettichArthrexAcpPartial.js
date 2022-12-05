import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { technology, hettichArthrexAcp } from '../../../data/technology';

const TechnologyHettichArthrexAcpPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header technology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/technology' aria-current='page'>
                                    <Box>Technologia</Box>
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
                                <Link to='/technology' aria-current='page'>
                                    Technologia
                                </Link>
                                <Typography color='text.primary'>
                                    {hettichArthrexAcp.title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {hettichArthrexAcp.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    Osocze bogatopłytkowe to zabieg modny i tani. Ale czy działa? to pytanie słyszę prawie codziennie. No właśnie działa czy nie? Odpowiedź jest prosta. Nie każde osocze działa! Wynika to z faktu, że niektórzy pracują na zwykłych, niesterylnych probówkach, bez certyfikatów a ilość odwirowanych płytek krwi jest znikoma. Wybrałam system Arthrex, gdyż nie wymaga żadnych koagulantów, jest to system bezpieczny i o bardzo dużej koncentracji płytek krwi. Z jednego pobrania krwi otrzymuję 6-7 ml osocza co oznacza 3 strzykawki samych płytek krwi z licznymi czynnikami wzrostu. W trakcie jednego zabiegu w cenie 700 możemy ostrzyknąć aż 3-4 okolice (twarz, szyja, dekolt, skóra głowy, rozstępy, blizny).
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={hettichArthrexAcp.imageLarge}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px',
                                            objectPosition: '50% 60%',
                                            backgroundColor: '#ebebeb'
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'łysienie androgenowe i inne,',
                                        'rozstępy, blizny zanikowe, blizny po cięciu cesarskim,',
                                        'blizny potrądzikowe,',
                                        'lifting skóry twarzy, szyi, dekoltu, biustu.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Spersonalizowana Terapia Komórkowa Arthrex to zabieg z użyciem PRP (osocza bogatopłytkowego) wykorzystujący naturalne procesy gojenia i regeneracji tkanek organizmu. Medyczne działanie PRP opiera się na licznych czynnikach wzrostu i cząsteczkach sygnałowych zawartych w płytkach krwi i osoczu krwi.
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Udowodniona, znacząca proliferacja, stymulacja i synteza kwasu hialuronowego z udziałem płytek o koncentracji 2,5 razy większej niż w pełnej krwi 1,2.',
                                        '100% Autologiczny (brak kontaktu krwi z antykoagulantami, syntetycznymi żelami czy aktywatorami) à mniejszy ból podczas iniekcji.',
                                        'Potwierdzone klinicznie (FDA-sanctioned Level 1 Study)'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Innowacyjny system PRP firmy Arthrex pozwala na łatwe przygotowanie PRP o sprawdzonym i udowodnionym klinicznie działaniu bez kompromisów w zakresie bezpieczeństwa i jakości.
                                </Typography>
                                <Typography className='paragraph'>
                                    Ponieważ PRP uzyskane za pomocą systemu podwójnej strzykawki Arthrex<sup>®</sup> ACP<sup>®</sup>nie zawiera antykoagulantów, które ze względu na swój poziom pH mogą wywoływać podczas iniekcji nieprzyjemne uczucie pieczenia, jego podanie pacjentowi jest wyjątkowo mało bolesne.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='proposed-technology'>
                            <Box className='card-wrapper technology-proposed'>
                                {technology.filter(item => item.designation !== 'hettichArthrexAcp').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.imageSmall}
                                        cardPath={item.path}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TechnologyHettichArthrexAcpPartial);
