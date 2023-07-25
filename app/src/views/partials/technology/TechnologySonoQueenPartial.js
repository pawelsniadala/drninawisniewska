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
    sonoQueen
} from '../../../data/technology';

const TechnologySonoQueenPartial = () => {
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
                                    <ArrowBackIcon />
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
                                    {sonoQueen.title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {sonoQueen.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box className='box-technology'>
                                <Typography className='paragraph'>
                                    <strong>SonoQueen</strong> to nowoczesna technologia wykorzystująca moc HIFU. Najnowsza generacja <strong>technologii HIFU</strong> (High Intensity Focused Ultrasound) to <strong>sfokusowane ultradźwięki o wysokiej częstotliwości</strong> do <strong>bezinwazyjnego</strong>, <strong>niechirurgicznego liftingu</strong> twarzy i ciała.
                                </Typography>
                                <Typography className='paragraph'>
                                    Precyzyjna i skoncentrowana wiązka fali ultradźwiękowej pozwala dotrzeć do 3 warstw - skóry właściwej, tkanki tłuszczowej i powięzi mięśniowej (SMAS), osiągając temperaturę ok. 60°C-70°C wywołuje tym samym punkty termicznej koagulacji. Rozpoczyna to <strong>proces kolagenogenezy</strong>, <strong>regeneracji zwiotczałych włókien kolagenowych</strong> i <strong>obkurczenia tkanek</strong>, dając efekt wielowymiarowego ujędrnienia. Dzięki temu uzyskujemy spektakularny i trwały efekt napięcia aktywowany w głębokiej warstwie skóry.
                                </Typography>
                                <Typography className='paragraph'>
                                    SonoQueen wyposażone jest w komplet specjalnych kartridży umożliwiających <strong>precyzyjne działanie na różnych głębokościach tkanki</strong> - od 2,0 mm do 4,5 mm na twarzy i 6 mm na ciele.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania:</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'lifting twarzy, szyi oraz dekoltu,',
                                        'wygładzenie płytkich i głębokich zmarszczek,',
                                        'wyszczuplanie ciała,',
                                        'rozświetlenie skóry,',
                                        'opadające powieki,',
                                        'ujędrnienie wiotkiej skóry w różnych partiach ciała,',
                                        'lifting twarzy i ujędrnianie ciała,',
                                        'napięcie delikatnej skóry w okolicach oczu,',
                                        'ujędrnienie skóry w okolicy ramion,',
                                        'lifting wiotkiej skóry na brzuchu,',
                                        'uniesienie i ujędrnienie pośladków,',
                                        'wygładzenie skóry w okolicach ud i kolan,',
                                        'redukcja tzw. "drugiego podbródka",',
                                        'wygładzenie zmarszczek,',
                                        'spowolnienie procesu starzenia skóry.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Zabieg Sonoqueen jest <strong>bezbolesny</strong> dla pacjenta i <strong>nie wymaga okresu rekonwalescencji</strong>. Seria zabiegowa wynosi od 1 do 3 zabiegów w odstępach co 3-4 miesiące, ale w większości przypadków wystarcza jeden. Pierwsze efekty widoczne są bezpośrednio po zabiegu, a pełnym efektem niechirurgicznego liftingu pacjent może cieszyć się już po 3 miesiącach.
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
                                    {technology.filter(item => item.designation !== 'sonoQueen').map((item) => (
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

export default Page(TechnologySonoQueenPartial);
