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

import { treatment, fototerapiaChorobSkory } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentFototerapiaChorobSkoryPartial = () => {
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
                                    Fototerapia chorób skóry
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Fototerapia chorób skóry
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    Fototerapia UV jest skuteczną i wygodną metodą leczenia chorób skórnych <strong>promieniowaniem ultrafioletowym</strong> o określonej terapeutycznej długości fali.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={fototerapiaChorobSkory.images[0].src}
                                        imageAlt={fototerapiaChorobSkory.images[0].alt}
                                        imageAuthor={fototerapiaChorobSkory.images[0].author}
                                        imageHref={fototerapiaChorobSkory.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    W naszej klinice przeprowadzamy światłoterapię <strong>UVB 311nm</strong> oraz <strong>PUVA-bath</strong>, po uprzedniej konsultacji dermatologicznej w naszej Klinice. Lekarz ustala plan fototerapii i dawki naświetlań według aktualnych wytycznych Polskiego Towarzystwa Dermatologicznego.
                                </Typography>
                            </Box>

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Lampa PUVA do naświetlań
                                </Typography>
                                <Typography className='paragraph'>
                                    Urządzenie do fototerapii <strong>PUVA-bath</strong> to medota najczęściej wykorzystywana w terapii dłoni oraz stóp. PUVA stosuje się przy podobnych dermatozach jak przy UVB, np. przy <strong>łuszczycy krostkowej dłoni i stóp</strong>, <strong>atopowym zapaleniu skóry</strong> czy <strong>wyprysku dłoni</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    PUVA polega na naświetlaniu skóry promieniami UVA po wcześniejszym przyjęciu światłouczulających leków. PUVA-bath to odmiana naświetleń PUVA, polegająca na podaniu psoralenów miejscowo na skórę w postaci kąpieli. Najpierw dłonie/stopy chorego poddawane są 10-15 minutowej kąpieli w roztworze z psoralenów, a następnie naświetla się je promieniami UVA.
                                </Typography>
                                <Typography className='paragraph'>
                                    Metoda PUVA choć działa silniej jest obarczona większym ryzykiem powstawania rumienia czy oparzeń. Ponadto w trakcie jak i po fototerapii PUVA-bath <strong>należy chronić skórę przed promieniowaniem słonecznym</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: ciężkie uszkodzenie wątroby lub nerek, ciąża, współistniejące schorzenia neurologiczne (np. padaczka), młody wiek, nietypowe znamiona, występowanie raka skóry w przeszłości, zaćma, stosowanie leków światłoczułych, nadwrażliwość na psoraleny.
                                </Typography>
                            </Box>

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Lampa UVB 311 nm
                                </Typography>
                                <Typography className='paragraph'>
                                    Na pierwszej wizycie dermatologicznej, lekarz kwalifikuje pacjenta do naświetlań, ustala cały plan fototerapii i dawki według aktualnych wytycznych Polskiego Towarzystwa Dermatologicznego.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'łuszczyca,',
                                        'atopowe zapalenie skóry,',
                                        'bielactwo,',
                                        'przyłuszczyca,',
                                        'świąd skóry,',
                                        'liszaj płaski,',
                                        'łojotokowe zapalenie skóry,',
                                        'egzema i inne dermatozy.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: choroby przebiegające z nadwrażliwością na UVB, wcześniejsza terapia promieniowaniem jonizującym, stosowanie leków fotouczulających, których nie można odstawić, przewlekłe choroby wątroby- wówczas faza uczulenia staje się nieregularna, wysokie dawki UVA w wywiadzie (&gt;150-200 naświetlań), nowotwory skóry, zaćma, choroba wieńcowa, niedawno przebyty zawał mięśnia sercowego, stan po operacji &gt;6 miesiecy, przyjmowanie ketoprofenu, antybiotyków, ziół w tym dziurawiec, pokrzywa.
                                </Typography>
                                <Typography className='paragraph'>
                                    Terapia UVB 311 nm w leczeniu łuszczycy wykazuje przewagę nad naświetlaniami szerokim spektrum UVB, natomiast w porównaniu z metodą PUVA jest bardziej bezpieczna. Atopowe zapalenie skóry i bielactwo również można leczyć metodą naświetlań UVB 311 nm. Poandto dowiedziono, że fototerapia UVB 311 nm jest mniej rumieniotwórcza i karcynogenna niż PUVA. Zalety naświetlań UVB 311 nm są to: niskie ryzyko oparzeń, porównywalna skuteczność z PUVA, prostota wykonania zabiegów, wysokie korzyści terapeutyczna oraz możliwość kojarzenia z terapią miejscową i układową.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>UVB-NB może być zastosowane u młodszych dzieci (od ok. 3-4 r. życia), kobiet w ciąży i karmiących piersią</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    Czas terapii może być dokładnie zmierzony przy pomocy oddzielnego zegara elektronicznego, który przyczynia się do zoptymalizowania wyników kuracji.  Po upływie określonego czasu urządzenie wyłącza się automatycznie. W przypadku przerwania trwania kuracji urządzenie zapamiętuje pozostały czas. Ponadto wykorzystuje UV o wysokiej intensywności, co pozwala na skrócenie czasu kuracji i zmniejszenie formowania się rumienia i kumulacji dawek.
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
                                        .filter(item => item.treatment.includes('fototerapia-chorob-skory'))
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
                                        .filter(item => item.treatment !== 'fototerapia-chorob-skory')
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

export default Page(TreatmentFototerapiaChorobSkoryPartial);
