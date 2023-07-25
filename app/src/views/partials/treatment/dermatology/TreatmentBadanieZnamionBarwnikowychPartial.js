import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import Image from '../../../../components/Image';

import { treatment, badanieZnamionBarwnikowych } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentBadanieZnamionBarwnikowychPartial = () => {
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
                                <Link to='/treatment' aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>Dermatologia</Box>
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
                                <Link to='/treatment' aria-current='page'>
                                    Zabiegi
                                </Link>
                                <Link to='/treatment' aria-current='page'>
                                    Dermatologia
                                </Link>
                                <Typography color='text.primary'>
                                    Badanie znamion barwnikowych
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Badanie znamion barwnikowych
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Badanie znamion barwnikowych polega na poddaniu zmian skórnych analizie przez dermatologa. W naszej Klinice badanie można przeprowadzić za pomocą <strong>dermatoskopu</strong> lub <strong>wideodermatoskopu</strong>.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={badanieZnamionBarwnikowych.images[0].src}
                                        imageAlt={badanieZnamionBarwnikowych.images[0].alt}
                                        imageAuthor={badanieZnamionBarwnikowych.images[0].author}
                                        imageHref={badanieZnamionBarwnikowych.images[0].href}
                                    />
                                </Box>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header'>
                                    Wideodermatoskopia
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
                                <Typography className='paragraph'>
                                    Komponent jakim jest kamera, dostarcza doskonałą jakość zdjęć zmian skórnych w rozdzielczości Full HD (1920x1080px), dostępnej zarówno w podglądzie na żywo, jak i na wykonanych zdjęciach. Opatentowany, precyzyjny obiektyw zapewnia krystalicznie czysty obraz niezależnie od powiększenia, w świetle spolaryzowanym lub z użyciem immersji. Oświetlenie diodami LED gwarantuje nieskazitelną widoczność.
                                </Typography>
                                <Typography className='paragraph'>
                                    System wideodermatoskopii łączy w sobie najwyższą jakość wykonania zdjęć, kompleksową platformę diagnozy skóry oraz wysoki poziom opieki nad pacjentem. Obrazy dermoskopowe są przypisane do pacjenta, a także do konkretnej lokalizacji, dzięki temu znacznie łatwiej śledzić zmiany i obserwować postępy leczenia. Zastosowanie funkcji Follow up w trybie Mikro i Overview, pozwala na identyczne ustawienie kamery i wykonanie zdjęć „przed i po” w celu ich rzetelnego porównania. Natomiast dostępny moduł Measure automatycznie kalibruje zdjęcia i pozwala na wykonanie ręcznych pomiarów np. grubości włosa. System umożliwia tworzenie i rozbudowę wirtualnej karty pacjenta zawierającej niezbędne dane z każdej wizyty, które można wydrukować w postaci raportu.
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
                                        .filter(item => item.treatment.includes('badanie-znamion-barwnikowych'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/dermatology/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'dermatology')
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
                                        .filter(item => item.specialization.includes('dermatology'))
                                        .filter(item => item.treatment !== 'badanie-znamion-barwnikowych')
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

export default Page(TreatmentBadanieZnamionBarwnikowychPartial);
