import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { services, dermatology } from '../../../data/services';

const ServicesDermatologyPartial = () => {
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
                                    Dermatologia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Dermatologia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Badanie znamion barwnikowych
                                </Typography>
                                <Typography className='paragraph'>
                                    Badanie znamion barwnikowych polega na poddaniu zmian skórnych analizie przez dermatologa. W naszej Klinice badanie można przeprowadzić za pomocą <strong>dermatoskopu</strong> lub <strong>wideodermatoskopu</strong>.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={dermatology.image}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px',
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Wideodermatoskopia to <strong>nowoczesna cyfrowa technologia</strong> służąca do analizy znamion barwnikowych skóry. Urządzenie służy także diagnozowaniu zmian chorobowych skóry, włosów i paznokci. Jest to zaawansowany system łączący <strong>optyczny układ wideokamery</strong> dermatoskopu z <strong>komputerową analizą obrazu</strong> za pomocą algebraicznych algorytmów.
                                </Typography>
                                <Typography className='paragraph'>
                                    Badanie polega na oglądaniu znamion specjalistyczną kamerą w bardzo dużym powiększeniu pozwalając na dokładniejsze zbadanie zmian. W ciągu kilku minut mapuje całe ciało, a dane zostają zapisane w pamięci komputera.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Znamiona skórne</strong> często uznawane są za cechę charakterystyczną danej osoby. Należy jednak pamiętać, że niektóre znamiona <strong>mogą ewoluować w nowotwory skóry</strong>, w tym bardzo niebezpiecznego <strong>czerniaka</strong>. Z tego powodu niesamowicie istotna jest regularna profilaktyka zmian skórnych.
                                </Typography>
                                <Typography className='paragraph'>
                                    Wideodermatoskopia pozwala wykryć raka skóry na bardzo wczesnym etapie, co diametralnie zwiększa nasze rokowania na <strong>całkowite wyleczenie</strong>.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Fototerapia chorób skóry
                                </Typography>
                                <Typography className='paragraph'>
                                    Fototerapia UV jest skuteczną i wygodną metodą leczenia chorób skórnych <strong>promieniowaniem ultrafioletowym</strong> o określonej terapeutycznej długości fali.
                                </Typography>
                                <Typography className='paragraph'>
                                    W naszej klinice przeprowadzamy światłoterapię <strong>UVB 311nm</strong> oraz <strong>PUVA-bath</strong>, po uprzedniej konsultacji dermatologicznej w naszej Klinice. Lekarz ustala plan fototerapii i dawki naświetlań według aktualnych wytycznych Polskiego Towarzystwa Dermatologicznego.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Usunięcie zmian skórnych elektrochirurgiczne
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Elektrochirurgia</strong>, inaczej <strong>elektrokoagulacja</strong>, to metoda chirurgiczna polegająca na wykorzystaniu przepływu <strong>prądu elektrycznego o różnej częstotliwości</strong> do usuwania, wycinania lub  wypalania, wszelkich niepożądanych zmian skórnych.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabiegi można podzielić na elektrokoagulację i cięcie, które wykonuje się w znieczuleniu miejscowym. Zabieg elektrokoagulacji wykonuje się za pomocą elektrod o różnym kształcie, odpowiednio dobranych w zależności od rodzaju zmiany.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Głównymi zaletami innowacyjności elektrochirurgii w usuwaniu niezłośliwych zmian skórnych są</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'precyzyjność działania,',
                                        'ładny efekt wizualny po zabiegu,',
                                        'mała inwazyjność,',
                                        'szybkość gojenia się ran.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Zabiegi elektrochirurgiczne wykonuje się przy usuwaniu zmian skórnych o charakterze</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'brodawek wirusowych (tzw. kurzajek),',
                                        'brodawek łojotokowych,',
                                        'brodawek płaskich,',
                                        'włókniaków miękkich,',
                                        'naczyniaków gwiaździstych,',
                                        'prosaków,',
                                        'mięczaka zakaźnego,',
                                        'gruczolaków łojowych.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Każdy rodzaj zmiany musi być uprzednio zakwalifikowany do zabiegu przez lekarza w naszej Klinice</strong>.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='proposed-services'>
                            <Box className='card-wrapper services-proposed'>
                                {services.length ? services.filter(item => item.title !== 'Dermatologia').map((item, index) => (
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

export default ServicesDermatologyPartial;
