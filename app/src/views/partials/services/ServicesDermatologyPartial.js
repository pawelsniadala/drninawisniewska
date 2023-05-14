import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { services, dermatology } from '../../../data/services';
import { team } from '../../../data/team';
import { technology } from '../../../data/technology';

const ServicesDermatologyPartial = () => {
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
                                    <Box>Specjalizacje</Box>
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
                                    Specjalizacje
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

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Dermatologia</strong> to dziedzina medycyny zajmująca się chorobami skóry, włosów i paznokci oraz chorobami wenerycznymi (choroby przenoszone drogą płciową). 
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={dermatology.images[0].src}
                                        imageAlt={dermatology.images[0].alt}
                                        imageAuthor={dermatology.images[0].author}
                                        imageHref={dermatology.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Najczęstsze problemy z jakimi możesz zgłosić się do naszej Kliniki</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'kontrola znamion barwnikowych,',
                                        'trądzik pospolity,',
                                        'trądzik różowaty,',
                                        'atopowe zapalenie skóry,',
                                        'łojotokowe zapalenie skóry,',
                                        'łuszczyca,',
                                        'pokrzywka,',
                                        'kontaktowe zapalenie skóry,',
                                        'liszaj płaski,',
                                        'łysienie,',
                                        'łupież,',
                                        'grzybice skóry i paznokci,',
                                        'choroby weneryczne.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    Przyjmujemy dzieci w każdym wieku.
                                </Typography>
                            </Box>

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Badanie znamion barwnikowych
                                </Typography>
                                <Typography className='paragraph'>
                                    Badanie znamion barwnikowych polega na poddaniu zmian skórnych analizie przez dermatologa. W naszej Klinice badanie można przeprowadzić za pomocą <strong>dermatoskopu</strong> lub <strong>wideodermatoskopu</strong>.
                                </Typography>
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

                            <Box className='box-service'>
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

                            <Box className='box-service'>
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

                        <Box className='proposed-wrapper'>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Specjaliści
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {team.filter(item => item.specialization.includes('dermatology')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/dermatology/${item.specialist}`}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Technologia
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {technology.filter(item => item.specialization.includes('dermatology')).map((item) => (
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
                            <Box className='box-proposed specialization'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostałe specjalizacje
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {services.filter(item => item.title !== 'Dermatologia').map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.image}
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

export default Page(ServicesDermatologyPartial);
