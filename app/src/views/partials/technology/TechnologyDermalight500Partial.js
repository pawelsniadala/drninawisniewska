import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';

import { technology, dermalight500 } from '../../../data/technology';

const TechnologyDermalight500Partial = () => {
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
                                    {dermalight500.title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {dermalight500.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box className='box-technology'>
                                <Typography className='paragraph'>
                                    Urządzeniem Dermalight 500 służy do fototerapii <strong>PUVA-bath</strong>. Metoda ta najczęściej wykorzystywana jest w terapii dłoni oraz stóp. PUVA stosuje się przy podobnych dermatozach jak przy UVB, np. przy <strong>łuszczycy krostkowej dłoni i stóp</strong>, <strong>atopowym zapaleniu skóry</strong> czy <strong>wyprysku dłoni</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    PUVA polega na naświetlaniu skóry promieniami UVA po wcześniejszym przyjęciu  światłouczulających  leków (<strong>psoralenów</strong>). PUVA-bath to odmiana naświetleń PUVA, polegająca na podaniu psoralenów miejscowo na skórę w postaci kąpieli. Najpierw dłonie/stopy chorego poddawane są 10-15 minutowej kąpieli w roztworze z psoralenów, a następnie naświetla się je promieniami UVA.
                                </Typography>
                                <Typography className='paragraph'>
                                    Metoda PUVA  choć działa silniej jest obarczona większym ryzykiem powstawania rumienia czy oparzeń. Ponadto w trakcie jak i po fototerapii PUVA-bath <strong>należy chronić skórę przed promieniowaniem słonecznym</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: ciężkie uszkodzenie wątroby lub nerek, ciąża, współistniejące schorzenia neurologiczne (np. padaczka), młody wiek, nietypowe znamiona, występowanie raka skóry w przeszłości, zaćma, stosowanie leków światłoczułych, nadwrażliwość na psoraleny.
                                </Typography>
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
                                    {technology.filter(item => item.designation !== 'dermalight500').map((item) => (
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

export default Page(TechnologyDermalight500Partial);
