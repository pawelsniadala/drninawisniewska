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

import { vascularSurgery } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';

const ServicesVascularSurgeryPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-vascular-surgery'>
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

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Chirurgia naczyniowa</strong> to dziedzina medycyny zajmująca się diagnozowaniem i nieinwazyjnym lub inwazyjnym operacyjnym leczeniem chorób związanych z nieprawidłowym funkcjonowaniem naczyń krwionośnych i limfatycznych.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={vascularSurgery.images[0].src}
                                        imageAlt={vascularSurgery.images[0].alt}
                                        imageAuthor={vascularSurgery.images[0].author}
                                        imageHref={vascularSurgery.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Najczęstsze problemy z jakimi możesz zgłosić się do naszej Kliniki</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'miażdżyca,',
                                        'tętniaki,',
                                        'żylaki kończyn dolnych,',
                                        'kamica żółciowa.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    U nas wykonasz również zabieg skleroterapii oraz laserowe usuwanie żylaków.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    W zakres chirurgii naczyniowej nie wchodzi leczenie żylaków odbytu (hemoroidy).
                                </Typography>
                            </Box>
                            {/* <Box className='box-service'>
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
                            </Box> */}
                        </Box>

                        <Box className='proposed-wrapper'>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Specjaliści
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {team.filter(item => item.specialization.includes('vascular-surgery')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/vascular-surgery/${item.specialist}`}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            {/* <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment.filter(item => item.specialization.includes('vascular-surgery')).map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.image}
                                            cardPath={item.path}
                                        />
                                    ))}
                                </Box>
                            </Box> */}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(ServicesVascularSurgeryPartial);
