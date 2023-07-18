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

import { treatment, sonoQueenTechnologiaHifu } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentSonoQueenTechnologiaHifuPartial = () => {
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
                                    SonoQueen technologia HIFU
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                SonoQueen technologia HIFU
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>SonoQueen</strong> to nowoczesna technologia wykorzystująca moc HIFU. Najnowsza generacja <strong>technologii HIFU</strong> (High Intensity Focused Ultrasound) to <strong>sfokusowane ultradźwięki o wysokiej częstotliwości</strong> do <strong>bezinwazyjnego</strong>, <strong>niechirurgicznego liftingu</strong> twarzy i ciała.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={sonoQueenTechnologiaHifu.images[0].src}
                                        imageAlt={sonoQueenTechnologiaHifu.images[0].alt}
                                        imageAuthor={sonoQueenTechnologiaHifu.images[0].author}
                                        imageHref={sonoQueenTechnologiaHifu.images[0].href}
                                    />
                                </Box>
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
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Specjaliści
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {team
                                        .filter(item => item.treatment.includes('sonoqueen-technologia-hifu'))
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
                                        .filter(item => item.treatment !== 'sonoqueen-technologia-hifu')
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

export default Page(TreatmentSonoQueenTechnologiaHifuPartial);
