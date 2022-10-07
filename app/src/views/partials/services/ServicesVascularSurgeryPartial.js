import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';

import { services } from '../../../data/services';

const ServicesVascularSurgeryPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

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
                                    {/* <NavigateBeforeIcon sx={{ mr: '3px' }} fontSize='smform' /> */}
                                    <Box>Usługi</Box>
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
                                    Usługi
                                </Link>
                                <Typography color='text.primary'>
                                    Chirurgia naczyniowa
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Chirurgia naczyniowa
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Skleroterapia
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Skleroterapia</strong> to <strong>nieinwazyjny zabieg zamykania rozszerzonych naczyń krwionośnych</strong>. Procedura polega na podaniu do problematycznej żyły substancji obliterującej, która powoduje jej zamknięcie.  W  porównaniu z  leczeniem operacyjnym  jest to metoda  bezpieczną i zdecydowanie mniej bolesną.  Zabieg skleroterapii poprzedzony jest dokładną oceną układu żył głównych oraz powierzchniowych przy pomocy badania ultrasonograficznego z dopplerem, które jest wykonywane w naszej Klinice.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg składa się z kilku lub kilkunastu <strong>wstrzyknięć preparatu</strong> do zmienionych naczyń żylnych, a następnie założenia <strong>uciskowych pończoch</strong> lub <strong>rajstop</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    Podanie środka obliterującego rozpoczyna proces zamknięcia naczyń. Sam proces zamykania trwa od 3 do 4 tygodni, następnie rozpoczyna się proces wchłaniania naczynia. Wchłanianie trwa od kilku tygodni do kilku miesięcy zależnie od wielkości zamykanego naczynia.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='proposed-services'>
                            <Box className='card-wrapper services-proposed'>
                                {services.length ? services.filter(item => item.title !== 'Chirurgia naczyniowa').map((item, index) => (
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

export default ServicesVascularSurgeryPartial;
