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

import {
    technology,
    fonsSvrFractionLaserCo2
} from '../../../data/technology';

const TechnologyFonsSvrFractionLaserCo2Partial = () => {
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
                                    Fons SVR Laser Frakcyjny CO<sub>2</sub>
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Fons SVR™ Laser Frakcyjny CO<sub>2</sub>
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box className='box-technology'>
                                <Typography className='paragraph'>
                                    <strong>Laser frakcyjny FONS SVR™</strong> jest idealnym i sprawdzonym rozwiązaniem znajdującym zastosowanie w wielu dziedzinach medycyny. Laser pozwala na osiągnięcie bardzo dobrych efektów zabiegowych w postaci <strong>likwidacji blizn potrądzikowych</strong>, <strong>poprawy jakości skóry</strong> i <strong>wytworzenia nowych struktur kolagenu</strong>.
                                </Typography>
                                <Box className='box-image'>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={fonsSvrFractionLaserCo2.imageLarge}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px',
                                            objectPosition: '50% 85%',
                                            backgroundColor: '#e6e6e6'
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    W porównaniu z tradycyjnymi laserami CO<sub>2</sub>, frakcjonowanie ablacyjne laserami Fons pozwala osiągnąć <strong>dużą głębokość penetracji w skórze</strong>, dając efektywne procedury zabiegowe. Dzięki wysokiej mocy i wszechstronności może być wykorzystywany w wielu wskazaniach. Wygodę i precyzję działania zapewnia siedmioprzegubowe ramię.
                                </Typography>
                                <Typography className='paragraph'>
                                    Ogromną zaletą jest <strong>bezkontaktowa praca</strong> lasera gwarantująca całkowitą czystość pola operacyjnego. Bardzo ważna jest także istotna redukcja krwawienia oraz natychmiastowa koagulacja. W trakcie wykonywania zabiegu uzyskujemy tysiące mikroskopijnych uszkodzeń tkanki, natomiast pozostałe obszary pozostają nienaruszone i to właśnie one przyspieszają odnowę zniszczonych stref skóry. Dzięki temu okres rekonwalescencji jest zredukowany do minimum przy jedoczesnym zachowaniu wysokiej efektywności terapii.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Zalety lasera FONS SVR™</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'szybki czas rekonwalescencji (od 3 do 6 dni),',
                                        'wszechstronność - podwójny moduł w jednym aparacie (zabiegi frakcyjne oraz standardowe procedury chirurgiczne),',
                                        'łatwość obsługi aparatu przez użytkownika,',
                                        'bardzo prosty panel sterowania,',
                                        'czytelny i intuicyjny interfejs,',
                                        'nowoczesny wygląd urządzenia,',
                                        'możliwość doboru pola zabiegowego podczas skanowania powierzchni zabiegowej,',
                                        'precyzja wykonanego zabiegu.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Możliwości zabiegowe</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'resurfacing skóry,',
                                        'lifting i ujędrnianie skóry,',
                                        'usuwanie blizn (potrądzikowych, pourazowych, oparzeniowych),',
                                        'likwidacja rozstępów,',
                                        'redukcja trądziku,',
                                        'usuwanie przebarwień,',
                                        'usuwanie zmarszczek,',
                                        'poprawa jakości skóry',
                                        'skuteczne efekty w niwelowaniu fotostarzenia się skóry,',
                                        'zabiegi chirurgiczne z wykorzystaniem punktowej głowicy lasera CO\u2082,',
                                        'ginekologia estetyczna.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Efekty po zabiegu laserem frakcyjnym CO2 są widoczne stopniowo po około 4 tygodniach od zabiegu. Zmiany można zaobserwować już po jednym naświetlaniu, jednak, aby osiągnąć lepsze rezultaty należy wykonać 2-4 zabiegi.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Jak przygotować się do zabiegu nieablacyjnego odmładzania skóry?</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Po terapii doustnymi retinoidami lub izotretynoiną należy odczekać okres 6 miesięcy od momentu odstawienia.',
                                        'Należy odstawić leki zioła fototoksyczne i fotouczulające (dziurawiec, pokrzywa, nagietek, herbaty odchudzające typu "figura", zioła chińskie) na 3 tygodnie przed zabiegiem.',
                                        'Po kuracji antybiotykami należy odczekać ok. 2 tygodnie od momentu odstawienia leków.',
                                        'Tydzień przed zabiegiem nie wykonywać depilacji w okolicy zabiegowej.',
                                        'Obszar zabiegowy nie może być podrażniony ani przesuszony.',
                                        'Na 4 tygodnie przed zabiegiem nie należy opalać skóry.',
                                        'Na 2 tygodnie przed zabiegiem nie należy stosować kremów z retinoidami, innych preparatów złuszczających (peelingi, kwasy owocowe, witamina A) oraz kosmetyków brązujących, samoopalaczy.'
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
                            <Box className='box-proposed technology'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostały sprzęt
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {technology.filter(item => item.designation !== 'fonsSvrLaserFrakcyjnyCo2').map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.imageSmall}
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

export default Page(TechnologyFonsSvrFractionLaserCo2Partial);
