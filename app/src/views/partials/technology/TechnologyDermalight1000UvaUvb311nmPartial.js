import React from 'react';
import { Link } from 'react-router-dom';

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
    dermalight1000UvaUvb311nm
} from '../../../data/technology';

const TechnologyDermalight1000UvaUvb311nmPartial = () => {
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
                                    {dermalight1000UvaUvb311nm.title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {dermalight1000UvaUvb311nm.title} / <strong>Fototerapia Chorób Skóry - Lampa UVB 311 nm (Dermatologia)</strong>
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box className='box-technology'>
                                <Typography variant={'h5'} className='header'>
                                    Lampa UVB 311 nm
                                </Typography>
                                <Typography className='paragraph'>
                                    Na pierwszej wizycie dermatologicznej, lekarz kwalifikuje pacjenta do naświetlań, ustala cały plan fototerapii i dawki według aktualnych wytycznych Polskiego Towarzystwa Dermatologicznego.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'łuszczyca,',
                                        'atopowe zapalenie skóry,',
                                        'bielactwo,',
                                        'przyłuszczyca,',
                                        'świąd skóry,',
                                        'liszaj płaski,',
                                        'łojotokowe zapalenie skóry,',
                                        'egzema i inne dermatozy.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Przeciwwskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'choroby przebiegające z nadwrażliwością na UVB,',
                                        'wcześniejsza terapia promieniowaniem jonizującym,',
                                        'stosowanie leków fotouczulających, których nie można odstawić,',
                                        'przewlekłe choroby wątroby- wówczas faza uczulenia staje się nieregularna,',
                                        'wysokie dawki UVA w wywiadzie (>150-200 naświetlań),',
                                        'nowotwory skóry,',
                                        'zaćma,',
                                        'choroba wieńcowa,',
                                        'niedawno przebyty zawał mięśnia sercowego,',
                                        'stan po operacji <6 miesiecy',
                                        'przyjmowanie ketoprofenu, antybiotyków, ziół w tym dziurawiec, pokrzywa.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Terapia UVB 311 nm w leczeniu łuszczycy wykazuje przewagę nad naświetlaniami szerokim spektrum UVB, natomiast w porównaniu z metodą PUVA jest bardziej bezpieczna. Atopowe zapalenie skóry i bielactwo również można leczyć metodą naświetlań UVB 311 nm. Poandto dowiedziono, że fototerapia UVB 311 nm jest mniej rumieniotwórcza i karcynogenna niż PUVA. Zalety naświetlań UVB 311 nm są to: niskie ryzyko oparzeń, porównywalna skuteczność z PUVA, prostota wykonania zabiegów, wysokie korzyści terapeutyczna oraz możliwość kojarzenia z terapią miejscową i układową.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>UVB-NB może być zastosowane u młodszych dzieci (od ok. 3-4 r. życia), kobiet w ciąży i karmiących piersią</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    Czas terapii może być dokładnie zmierzony przy pomocy oddzielnego zegara elektronicznego, który przyczynia się do zoptymalizowania wyników kuracji.  Po upływie określonego czasu urządzenie wyłącza się automatycznie. W przypadku przerwania trwania kuracji urządzenie zapamiętuje pozostały czas. Ponadto wykorzystuje UV o wysokiej intensywności, co pozwala na skrócenie czasu kuracji i zmniejszenie formowania się rumienia i kumulacji dawek.
                                </Typography>
                            </Box>

                            {/* <Box className='box-technology'>
                                <Typography variant={'h5'} className='header'>
                                    Lampa UVA - metoda PUVA Bath
                                </Typography>
                                <Typography className='paragraph'>
                                    Puva-bath jest to inna metoda naświetleń PUVA. Różni się ona tym, że psoraleny podawane są miejscowo na skórę. Najpierw chory poddawany jest kąpieli w roztworze z psoralenów. Po 10-15 minutach kąpieli (dłonie i stopy) chorego naświetla się promieniami UVA.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'łuszczyca krostkowa dłoń i stóp,',
                                        'wyprysk dłoni,',
                                        'inne dermatozy.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Przeciwwskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'ciężkie uszkodzenie wątroby lub nerek,',
                                        'ciąża,',
                                        'współistniejące schorzenia neurologiczne (np. padaczka),',
                                        'młody wiek',
                                        'nietypowe znamiona',
                                        'występowanie raka skóry w przesości',
                                        'zaćma',
                                        'stosowanie leków światłoczułych',
                                        'nadwrażliwość na psoraleny.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box> */}
                        </Box>

                        <Box className='proposed-wrapper'>
                            <Box className='box-proposed technology'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostały sprzęt
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {technology.filter(item => item.designation !== 'dermalight1000UvaUvb311nm').map((item) => (
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

export default Page(TechnologyDermalight1000UvaUvb311nmPartial);
