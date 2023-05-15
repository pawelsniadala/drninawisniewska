import React from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';

const ClinicRegulationPartial = () => {
    return (
        <Box className='regulations-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/clinic'
                                    aria-current='page'
                                >
                                    <Box>Klinika</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                                <Link
                                    to='/clinic'
                                    aria-current='page'
                                >
                                    <Box>Klinika</Box>
                                </Link>
                                <Typography color='text.primary'>
                                    Regulamin organizacyjny
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Regulamin organizacyjny
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper clinic' style={{ fontFamily: '"Roboto", sans-serif', color: '#535353' }}>
                        <Box className='accordion' id='accordionExample'>
                            <Box className='accordion-item'>
                                <h2 className='accordion-header' id='headingOne'>
                                    <button className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseOne'
                                        aria-expanded='false'
                                        aria-controls='collapseOne'
                                    >
                                        <Box className='accordion-heading' sx={{ display: 'grid', gridTemplateColumns: '2rem 1fr', marginRight: '.5rem' }}>
                                            <Typography>§ 1.</Typography>
                                            <Typography>Podstawy prawne</Typography>
                                        </Box>
                                    </button>
                                </h2>
                                <Box
                                    id='collapseOne'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingOne'
                                >
                                    <Box className='accordion-body'>
                                        <ol style={{ fontWeight: 300 }}>
                                            <li>Niniejszy regulamin został przyjęty dla podmiotu wykonującego działalność leczniczą prowadzącego działalność gospodarczą pod firmą <strong>Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska</strong>, NIP: 7621897504, REGON: 145231566.</li>
                                            <li>Adres siedziby podmiotu leczniczego: ul. Bluszczańska 14/46 00-712 Warszawa.</li>
                                            <li>Podstawą prawną regulaminu jest art. 24 w zw. Z art. 23 ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej.</li>
                                            <li>Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska jest wpisana do Rejestru Podmiotów Wykonujących Działalność Leczniczą, prowadzonego przez Wojewodę Mazowieckiego pod numerem księgi rejestrowej 000000225938.</li>
                                            <li>Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska działa na podstawie obowiązujących aktów prawnych, w tym w szczególności:
                                                <ol type="1">
                                                    <li>Ustawy z dnia 15 kwietnia 2011 r. o działalności leczniczej (Dz. U. 2011 nr 112 poz. 654);</li>
                                                    <li>Ustawy z dnia 5 grudnia 1996 r. o zawodach lekarza i lekarza dentysty (Dz. U. 1997 nr 28 poz. 152);</li>
                                                    <li>Ustawy z dnia 6 listopada 2008 r. o prawach pacjenta i Rzeczniku Praw Pacjenta (Dz. U. 2009 nr 52 poz. 417).</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='accordion-item'>
                                <h2 className='accordion-header' id='headingTwo'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseTwo'
                                        aria-expanded='false'
                                        aria-controls='collapseTwo'
                                    >
                                       <Box className='accordion-heading' sx={{ display: 'grid', gridTemplateColumns: '2rem 1fr', marginRight: '.5rem' }}>
                                            <Typography>§ 2.</Typography>
                                            <Typography>Cele i zadania</Typography>
                                        </Box>
                                    </button>
                                </h2>
                                <Box
                                    id='collapseTwo'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingTwo'
                                >
                                    <Box className='accordion-body'>
                                        <ol style={{ fontWeight: 300 }}>
                                            <li>Celem podmiotu leczniczego jest udzielanie kompleksowych i specjalistycznych świadczeń zdrowotnych z zakresu dermatologii, medycyny estetycznej, ginekologii, endokrynologii, reumatologii, kardiologii, chirurgii naczyniowej, chirurgii plastycznej, alergologii, ortopedii, radiologii, fizjoterapii, kosmetologii estetycznej.</li>
                                            <li>W zakresie zadań jest w szczególności:
                                                <ol style={{ fontWeight: 300 }}>
                                                    <li>Udzielanie indywidualnych porad i konsultacji lekarskich;</li>
                                                    <li>Wykonywanie zabiegów iniekcyjnych i laserowych;</li>
                                                    <li>Wykonywanie specjalistycznych badań USG;</li>
                                                    <li>Prognozowanie i organizowanie działalności profilaktyczno-leczniczej;</li>
                                                    <li>Zapewnienie wysokiej jakości świadczeń zdrowotnych;</li>
                                                    <li>Zapewnienie nowoczesnych, efektywnych i uznanych metod leczniczych;</li>
                                                    <li>Stosowanie wysokiej jakości sprzętu, będącego pod stałym nadzorem technicznym i spełniającego wszelkie wymagane prawem normy jakościowe;</li>
                                                    <li>Realizowanie świadczeń zdrowotnych ze szczególnym uwzględnieniem bezpieczeństwa i potrzeb pacjentów.</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='accordion-item'>
                                <h2 className='accordion-header' id='headingThree'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseThree'
                                        aria-expanded='false'
                                        aria-controls='collapseThree'
                                    >
                                       <Box className='accordion-heading' sx={{ display: 'grid', gridTemplateColumns: '2rem 1fr', marginRight: '.5rem' }}>
                                            <Typography>§ 3.</Typography>
                                            <Typography>Struktura organizacyjna</Typography>
                                        </Box>
                                    </button>
                                </h2>
                                <Box
                                    id='collapseThree'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingThree'
                                >
                                    <Box className='accordion-body'>
                                        <p style={{ fontWeight: 300 }}>W ramach podmiotu leczniczego powołane są:</p>
                                        <ol style={{ fontWeight: 300 }}>
                                            <li>Zakład: Dermatologia i Medycyna Estetyczna</li>
                                            <li>Jednostka: Dermatologia i Medycyna Estetyczna</li>
                                            <li>Komórki:
                                                <ol>
                                                    <li>001 Poradnia dermatologiczna (1200))</li>
                                                    <li>002 Gabinet diagnostyczno-zabiegowy (9450)</li>
                                                    <li>003 Poradnia endokrynologiczna (1030)</li>
                                                    <li>004 Poradnia ginekologiczna (1452)</li>
                                                    <li>005 Poradnia kardiologiczna (1100)</li>
                                                    <li>006 Poradnia alergologiczna (1010)</li>
                                                    <li>007 Poradnia chirurgii naczyniowej (1530)</li>
                                                    <li>008 Poradnia chirurgii urazowo-ortopedycznej (1580)</li>
                                                    <li>009 Poradnia chirurgii plastycznej (1550)</li>
                                                    <li>010 Poradnia reumatologiczna (1280)</li>
                                                    <li>011 Pracownia USG (7210)</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='accordion-item'>
                                <h2 className='accordion-header' id='headingFour'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseFour'
                                        aria-expanded='false'
                                        aria-controls='collapseFour'
                                    >
                                       <Box className='accordion-heading' sx={{ display: 'grid', gridTemplateColumns: '2rem 1fr', marginRight: '.5rem' }}>
                                            <Typography>§ 4.</Typography>
                                            <Typography>Rodzaj działalności leczniczej oraz zakres udzielanych świadczeń zdrowotnych</Typography>
                                        </Box>
                                    </button>
                                </h2>
                                <Box
                                    id='collapseFour'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingFour'
                                >
                                    <Box className='accordion-body'>
                                        <ol style={{ fontWeight: 300 }}>
                                            <li>Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska prowadzi działalność leczniczą w zakresie ambulatoryjnych świadczeń zdrowotnych.</li>
                                            <li>Zakres udzielanych świadczeń obejmuje odpłatne świadczenia zdrowotne z zakresu dermatologii, reumatologii, ortopedii, ginekologii, endokrynologii, badań USG, chirurgii naczyniowej, chirurgii plastycznej, alergologii, medycyny estetycznej, fizjoterapii, kosmetologii i dietetyki klinicznej.</li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='accordion-item'>
                                <h2 className='accordion-header' id='headingFive'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseFive'
                                        aria-expanded='false'
                                        aria-controls='collapseFive'
                                    >
                                       <Box className='accordion-heading' sx={{ display: 'grid', gridTemplateColumns: '2rem 1fr', marginRight: '.5rem' }}>
                                            <Typography>§ 5.</Typography>
                                            <Typography>Miejsce udzielania świadczeń zdrowotnych</Typography>
                                        </Box>
                                    </button>
                                </h2>
                                <Box
                                    id='collapseFive'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingFive'
                                >
                                    <Box className='accordion-body'>
                                        <ol style={{ fontWeight: 300 }}>
                                            <li>Świadczenia zdrowotne są udzielane pod adresem: ul. Fryderyka Chopina 13 lok. U2, 07-200 Wyszków.</li>
                                            <li>Pomieszczenia oraz wyposażenie w sprzęt medyczny odpowiadają wymaganiom fachowym, sanitarnym i standardom określonym w obowiązujących przepisach.</li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='accordion-item'>
                                <h2 className='accordion-header' id='headingSix'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseSix'
                                        aria-expanded='false'
                                        aria-controls='collapseSix'
                                    >
                                       <Box className='accordion-heading' sx={{ display: 'grid', gridTemplateColumns: '2rem 1fr', marginRight: '.5rem' }}>
                                            <Typography>§ 6.</Typography>
                                            <Typography>Organizacja i przebieg procesu udzielania świadczeń zdrowotnych</Typography>
                                        </Box>
                                    </button>
                                </h2>
                                <Box
                                    id='collapseSix'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingSix'
                                >
                                    <Box className='accordion-body'>
                                        <ol style={{ fontWeight: 300 }}>
                                            <li>Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska udziela świadczeń zdrowotnych wyłącznie w godzinach pracy miejsca udzielania świadczeń zdrowotnych.</li>
                                            <li>Świadczenia zdrowotne udzielane są z zachowaniem należytej staranności, zgodnie ze wskazaniami aktualnej wiedzy medycznej, respektując prawa pacjenta oraz zgodnie z zasadami etyki zawodowej.</li>
                                            <li>Rejestracja pacjentów odbywa się:
                                                <ol type="1">
                                                    <li>Osobiście (bądź przez członków rodziny lub osoby trzecie);</li>
                                                    <li>Telefonicznie lub mailowo, z wyznaczeniem dnia i godziny realizacji świadczenia zdrowotnego.</li>
                                                </ol>
                                            </li>
                                            <li>Bezpośrednio przed planowaną wizytą pacjent jest zobowiązany potwierdzić swoją tożsamość, okazując dowód osobisty lub inny dokument ze zdjęciem w recepcji miejsca udzielania świadczeń zdrowotnych.</li>
                                            <li>W recepcji miejsca udzielania świadczeń zdrowotnych pacjent może uzyskać informacje na temat świadczeń dostępnych w podmiocie leczniczym, czasu oczekiwania, form i terminów zapisu, wymaganych dokumentów, wyników badań niezbędnych podczas wizyty, zasad udostępniania dokumentacji medycznej oraz organizacji pracy podmiotu leczniczego.</li>
                                            <li>Świadczenia zdrowotne udzielane są odpłatnie przez osoby posiadające odpowiednie umiejętności oraz uprawnienia.</li>
                                            <li>Ceny za udzielane świadczenia zdrowotne są określone na podstawie cennika znajdującego się w miejscu udzielania świadczeń zdrowotnych oraz na stronie www.drninawisniewska.pl w zakładce "Cennik".</li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='accordion-item'>
                                <h2 className='accordion-header' id='headingSeven'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseSeven'
                                        aria-expanded='false'
                                        aria-controls='collapseSeven'
                                    >
                                       <Box className='accordion-heading' sx={{ display: 'grid', gridTemplateColumns: '2rem 1fr', marginRight: '.5rem' }}>
                                            <Typography>§ 7.</Typography>
                                            <Typography>Sposób kierowania</Typography>
                                        </Box>
                                    </button>
                                </h2>
                                <Box
                                    id='collapseSeven'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingSeven'
                                >
                                    <Box className='accordion-body'>
                                        <ol style={{ fontWeight: 300 }}>
                                            <li>Podmiotem leczniczym kieruje dr n. med. Nina Wiśniewska prowadząca działalność gospodarczą pod firmą Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska NIP: 7621897504, REGON: 145231566.</li>
                                            <li>Do obowiązków i uprawnień osoby kierującej podmiotem leczniczym należy:
                                                <ol type="1">
                                                    <li>Zapewnienie prawidłowego funkcjonowania podmiotu leczniczego;</li>
                                                    <li>Reprezentowanie podmiotu leczniczego na zewnątrz;</li>
                                                    <li>Koordynowanie i nadzorowanie pracy poszczególnych komórek podmiotu leczniczego oraz lekarzy świadczących usługi w podmiocie leczniczym;</li>
                                                    <li>Organizowanie i kierowanie pracą podległego personelu;</li>
                                                    <li>Zapewnianie racjonalnego wykorzystania czasu pracy oraz sprawowanie nadzoru nad przestrzeganiem dyscypliny w podmiocie leczniczym;</li>
                                                    <li>Podejmowanie decyzji w sprawach związanych z nawiązaniem, zmianą i rozwiązywaniem stosunku pracy.</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='accordion-item'>
                                <h2 className='accordion-header' id='headingEight'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseEight'
                                        aria-expanded='false'
                                        aria-controls='collapseEight'
                                    >
                                       <Box className='accordion-heading' sx={{ display: 'grid', gridTemplateColumns: '2rem 1fr', marginRight: '.5rem' }}>
                                            <Typography>§ 8.</Typography>
                                            <Typography>Udostępnianie dokumentacji medycznej</Typography>
                                        </Box>
                                    </button>
                                </h2>
                                <Box
                                    id='collapseEight'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingEight'
                                >
                                    <Box className='accordion-body'>
                                        <ol style={{ fontWeight: 300 }}>
                                            <li>1Dermatologia i Medycyna Estetyczna prowadzi dokumentację medyczną osób korzystających ze świadczeń zdrowotnych, zapewnia ochronę i poufność danych zawartych w tej dokumentacji oraz udostępnia dokumentację medyczną zgodnie z powszechnie obowiązującymi przepisami prawa.</li>
                                            <li>
                                                Za udostępnienie dokumentacji medycznej w sposób określony w art. 27 sposoby udostępniania dokumentacji medycznej ust. 1 pkt 2 i 5 oraz ust. 3 w Ustawie o prawach pacjenta i Rzeczniku Praw Pacjenta (Dz. U. 2009 nr 52 poz. 417 z późn. zm.), Dermatologia i Medycyna Estetyczna pobiera opłatę (uwzględniającą podatek od towarów i sług, jeżeli na podstawie odrębnych przepisów usługa jest opodatkowana tym podatkiem) według stawek określonych poniżej:
                                                <ol style={{ fontWeight: 300 }}>
                                                    <li>Jedna strona wyciągu albo odpisu dokumentacji medycznej: 13,47 zł</li>
                                                    <li>Jedna strona kopii albo wydruku dokumentacji medycznej: 0,47 zł</li>
                                                    <li>Udostępnienie dokumentacji medycznej na informatycznym nośniku danych: 2,69 zł</li>
                                                </ol>
                                            </li>
                                            <li>
                                                Opłaty, o których mowa w punkcie powyżej, nie pobiera się w przypadki udostępniania dokumentacji medycznej:
                                                <ol style={{ fontWeight: 300 }}>
                                                    <li>Pacjentowi albo jego przedstawicielowi ustawowemu po raz pierwszy w żądanych zakresie i w sposób, o którym mowa w art.27 sposoby udostępniania dokumentacji medycznej ust.1 pkt 2 i 5 oraz ust. 3 w Ustawie o prawach pacjenta i Rzeczniku praw Pacjenta (Dz. U. 2009 nr 52 poz. 417 z późn. zm.)</li>
                                                    <li>W związku z postępowaniem przed wojewódzką komisją do spraw orzekania o zdarzeniach medycznych, o których mowa w art. 67e wojewódzkie komisje do spraw orzekania o zdarzeniach medycznych ust. 1 w Ustawie o prawach pacjenta i Rzeczniku Praw Pacjenta (Dz. U. 2009 nr 52 poz. 417 z późn. zm.);</li>
                                                    <li>Agencji Oceny Technologii Medycznych i Taryfikacji oraz Agencji Badań Medycznych.</li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='accordion-item'>
                                <h2 className='accordion-header' id='headingNine'>
                                    <button
                                        className='accordion-button collapsed'
                                        type='button'
                                        data-bs-toggle='collapse'
                                        data-bs-target='#collapseNine'
                                        aria-expanded='false'
                                        aria-controls='collapseNine'
                                    >
                                       <Box className='accordion-heading' sx={{ display: 'grid', gridTemplateColumns: '2rem 1fr', marginRight: '.5rem' }}>
                                            <Typography>§ 9.</Typography>
                                            <Typography>Przepisy końcowe</Typography>
                                        </Box>
                                    </button>
                                </h2>
                                <Box
                                    id='collapseNine'
                                    className='accordion-collapse collapse'
                                    aria-labelledby='headingNine'
                                >
                                    <Box className='accordion-body'>
                                        <ol style={{ fontWeight: 300 }}>
                                            <li>Regulamin organizacyjny wchodzi w życie z dniem podpisania przez osobę kierującą podmiotem leczniczym.</li>
                                            <li>Z treścią Regulaminu organizacyjnego zostają zapoznani wszyscy pracownicy podmiotu leczniczego.</li>
                                            <li>W sprawach nieuregulowanych w niniejszym Regulaminie organizacyjnych zastosowanie mają przepisy powszechnie obowiązującego prawa.</li>
                                        </ol>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(ClinicRegulationPartial);
