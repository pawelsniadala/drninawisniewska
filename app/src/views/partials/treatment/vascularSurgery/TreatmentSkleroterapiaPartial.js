import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
// import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { treatment, skleroterapia } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentSkleroterapiaPartial = () => {
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
                                <Link to='/treatment/vascular-surgery' aria-current='page'>
                                    <Box>Chirurgia naczyniowa</Box>
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
                                <Link to='/treatment/vascular-surgery' aria-current='page'>
                                    Chirurgia naczyniowa
                                </Link>
                                <Typography>
                                    Skleroterapia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Skleroterapia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Skleroterapia</strong> to <strong>nieinwazyjny zabieg zamykania rozszerzonych naczyń krwionośnych</strong>. Procedura polega na podaniu do problematycznej żyły substancji obliterującej, która powoduje jej zamknięcie.  W  porównaniu z  leczeniem operacyjnym  jest to metoda  bezpieczną i zdecydowanie mniej bolesną.  Zabieg skleroterapii poprzedzony jest dokładną oceną układu żył głównych oraz powierzchniowych przy pomocy badania ultrasonograficznego z dopplerem, które jest wykonywane w naszej Klinice.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={skleroterapia.images[0].src}
                                        imageAlt={skleroterapia.images[0].alt}
                                        imageAuthor={skleroterapia.images[0].author}
                                        imageHref={skleroterapia.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Zabieg składa się z kilku lub kilkunastu <strong>wstrzyknięć preparatu</strong> do zmienionych naczyń żylnych, a następnie założenia <strong>uciskowych pończoch</strong> lub <strong>rajstop</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    Podanie środka obliterującego rozpoczyna proces zamknięcia naczyń. Sam proces zamykania trwa od 3 do 4 tygodni, następnie rozpoczyna się proces wchłaniania naczynia. Wchłanianie trwa od kilku tygodni do kilku miesięcy zależnie od wielkości zamykanego naczynia.
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
                                        .filter(item => item.treatment.includes('skleroterapia'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/vascular-surgery/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'vascular-surgery')
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
                                        .filter(item => item.specialization.includes('vascular-surgery'))
                                        .filter(item => item.treatment !== 'skleroterapia')
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

export default Page(TreatmentSkleroterapiaPartial);
