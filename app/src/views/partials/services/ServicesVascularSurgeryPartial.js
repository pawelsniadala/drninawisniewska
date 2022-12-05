import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
import CardTechnology from '../../../components/CardTechnology';
import ListBulleted from '../../../components/ListBulleted';

import { services } from '../../../data/services';
import { team } from '../../../data/team';
import { technology } from '../../../data/technology';

const ServicesVascularSurgeryPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

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

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Laser ELVeS® Radial®
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg ELVeS® Radial® to unikalne rozwiązanie w leczeniu niewydolności żylnej. Jako jeden z wiodących światowych pionierów w dziedzinie laseroterapii medycznej biolitec® wprowadził na rynek pierwszy medyczny laser diodowy 1470 nm w 2006 roku oraz opatentowany światłowód Radial® w 2008 roku i od tego czasu wciąż udoskonala endoluminalną terapię laserową.
                                </Typography>
                                <Typography className='paragraph'>
                                    Dążenie do opracowania wyjątkowego systemu pod względem bezpieczeństwa i elastyczności do endoluminalnego leczenia żylaków doprowadziło do stworzenia technologii 2ring. Promieniowanie dwufazowe z włóknem ELVeS® Radial® 2ring to bezpieczna i łatwa w użyciu technologia.
                                </Typography>
                                <Typography className='paragraph'>
                                    W przypadku tego włókna laserowego energia jest dzielona na dwa pierścienie. Pozwala to na bezpieczne zamknięcie żyły przy niskiej gęstości energii. Mechanizm ten w połączeniu z najbezpieczniejszymi światłowodami Fusion®, najnowszą generacją lasera diodowego oferuje wysoki stopień standaryzacji leczenia oraz skuteczną terapię również w przypadku skomplikowanego przebiegu naczyniowego.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg ELVeS® Radial® 2ring jest zazwyczaj wykonywany w znieczuleniu miejscowym. Po badaniu USG lekarz wprowadza światłowód do naczynia. Po włączeniu lasera naczynie jest naświetlane, a światłowód stopniowo wycofywany. Efektem jest zamknięcie żyły. Cały zabieg trwa około 30-45 minut w zależności od wyników, po którym pacjent od razu wraca do normalnej aktywności. Na zabieg należy zaopatrzyć się w pończochę lub rajstopy uciskowe, które zakłada się bezpośrednio po zabiegu.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Zalety</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'szybki,',
                                        'bezpieczny,',
                                        'skuteczny,',
                                        'oparty na dowodach naukowych.'
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
                                <Typography variant={'h5'} className='header alternative'>
                                    Specjaliści
                                </Typography>
                                <Box className='card-wrapper team page'>
                                    {width >= 991.98 ? (
                                        team.filter(item => item.services.includes('vascularSurgery')).map((item, index) => (
                                            <CardTeam2
                                                key={index}
                                                cardImage={item.image}
                                                cardBackground={item.background}
                                                cardTitle={item.title}
                                                cardName={item.name}
                                                cardSpeciality={item.speciality}
                                                cardDescription={item.experience ? item.experience : item.education}
                                                cardPath={item.path}
                                                cardServices={item.services}
                                            />
                                        ))
                                    ) : (
                                        team.filter(item => item.services.includes('vascularSurgery')).map((item, index) => (
                                            <CardTeamProposed2
                                                key={index}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={item.path}
                                            />
                                        ))
                                    )}
                                </Box>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header alternative'>
                                    Sprzęt
                                </Typography>
                                <Box className='card-wrapper technology page'>
                                    {width >= 991.98 ? (
                                        technology.filter(item => item.services.includes('vascularSurgery')).map((item, index) => (
                                            <CardTechnology
                                                key={index}
                                                cardImage={item.imageMedium}
                                                cardTitle={item.title}
                                                cardPath={item.path}
                                                cardBadge={item.badge}
                                            />
                                        ))
                                    ) : (
                                        technology.filter(item => item.services.includes('vascularSurgery')).map((item, index) => (
                                            <CardProposed
                                                key={index}
                                                cardTitle={item.title}
                                                cardDescription={item.description}
                                                cardImage={item.imageSmall}
                                                cardPath={item.path}
                                            />
                                        ))
                                    )}
                                </Box>
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

export default Page(ServicesVascularSurgeryPartial);
