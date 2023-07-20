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

import { treatment, laseroweUsuwanieZylakow } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentLaseroweUsuwanieZylakowPartial = () => {
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
                                    Laserowe usuwanie żylaków
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Laserowe usuwanie żylaków
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Żylaki kończyn dolnych są dziś jedną z najbardziej powszechnych chorób. Około 40% kobiet i 20% mężczyzn ma objawy w postaci: zmęczonych, ciężkich nóg oraz obrzęków nóg i żył widocznych przez skórę. Jej główne przyczyny to: wrodzona słabość tkanki łącznej, zmiany hormonalne, a także długotrwałe przebywanie w pozycji siedzącej lub stojącej.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={laseroweUsuwanieZylakow.images[0].src}
                                        imageAlt={laseroweUsuwanieZylakow.images[0].alt}
                                        imageAuthor={laseroweUsuwanieZylakow.images[0].author}
                                        imageHref={laseroweUsuwanieZylakow.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Najprostszą formą leczenia chorób żył jest kompresjoterapia (pończochy lub podkolanówki uciskowe). Jej działanie polega na zmniejszeniu szerokości żyły poprzez wywieranie na nią zewnętrznego ucisku. Przyspiesza to przepływ krwi w żyle. Jednakże gdy żyła się raz rozciągnie, nigdy już nie zmniejszy się do pierwotnego rozmiaru więc kompresjoterapię trzeba stosować przez resztę życia.
                                </Typography>
                                <Typography className='paragraph'>
                                    Metodami mniej inwazyjnymi są skleroterapia i zabiegi z wykorzystaniem prądu RF.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg z wykorzystaniem prądu RF polega na wprowadzeniu do żyły cewnika i podgrzaniu jej ścian od wewnątrz za pomocą fal RF. Ściany żyły wraz z przylegającymi tkankami ulegają denaturacji i obkurczeniu, a w ciągu kilku tygodni ściana włóknieje. Jednak sonda RF jest dość gruba i metoda nie nadaje się do wszystkich średnic żył.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg laserowego usuwania żylaków przeprowadzany jest w warunkach ambulatoryjnych, w znieczuleniu miejscowym. Pod kontrolą USG lekarz wprowadza do chorej żyły przez małe nakłucie cienki światłowód, a następnie naświetla żyłę od wewnątrz światłem lasera. Zabiegowi towarzyszy tylko minimalny ból w trakcie miejscowego podawania znieczulenia wokół żyły. Pacjent może wrócić do normalnej aktywności bezpośrednio po zabiegu. Jest to najbezpieczniejszymi i najskuteczniejszym zabiegiem, zapewniającym wysoki komfort pacjenta w tracie i po zabiegu.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Korzyści dla pacjenta wynikające z wyboru zabiegu</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Najwyższa skuteczność spośród dostępnych metod - ponad 97% po 3 latach od zabiegu.',
                                        'Natychmiastowe uruchomienie po zabiegu i szybki powrót do normalnej aktywności.',
                                        'Minimalny ból lub całkowity brak odczuć bólowych w czasie rekonwalescencji.',
                                        'Maksymalny komfort w czasie zabiegu.',
                                        'Krótki czas zabiegu.',
                                        'Brak blizn i małe ryzyko wystąpienia zasinień po zabiegu.',
                                        'Doskonały wynik medyczny i kosmetyczny.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
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
                                        .filter(item => item.treatment.includes('laserowe-usuwanie-zylakow'))
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
                                        .filter(item => item.treatment !== 'laserowe-usuwanie-zylakow')
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

export default Page(TreatmentLaseroweUsuwanieZylakowPartial);
