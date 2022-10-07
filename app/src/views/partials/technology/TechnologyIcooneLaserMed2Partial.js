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

import { technology } from '../../../data/technology';
import { icooneLaserMed2 } from '../../../data/technology';

const TechnologyIcooneLaserMed2Partial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header technology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/technology' aria-current='page'>
                                    {/* <NavigateBeforeIcon sx={{ mr: '3px' }} fontSize='smform' /> */}
                                    <Box>Technologia</Box>
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
                                <Link to='/technology' aria-current='page'>
                                    Technologia
                                </Link>
                                <Typography color='text.primary'>
                                    Icoone Laser Med 2
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {icooneLaserMed2.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    Projekt Icoone® jest inspirowany intuicją profesora Jean-Claude'a Guimberteau, specjalisty w dziedzinie chirurgii rekonstrukcyjnej, który poświęcił wiele lat na obserwację skóry w zakresie struktury tkanki łącznej: Guimberteau wykazał, że skóra musi być pojmowana jako żywa, ciągła materia, a tkanka podskórna składa się z sieci mikrowakuoli, które tworzą funkcjonalną jednostkę struktury tkanki. Ta nowa wizja całkowicie zastępuje tradycyjną koncepcję tkanki warstwowej, a tym samym narzuca potrzebę nowego sposobu leczenia skóry.
                                </Typography>
                            </Box>
                            <Box marginBottom={3}>
                                <LazyLoadImage
                                    height={'100%'}
                                    width={'100%'}
                                    src={icooneLaserMed2.imageLarge}
                                    alt='Remote working'
                                    effect='blur'
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 8,
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: '400px',
                                        objectPosition: '50% 80%',
                                        backgroundColor: '#e6e6e6'
                                    }}
                                />
                            </Box>
                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Zaskakujące rezultaty
                                </Typography>
                                <Typography className='paragraph'>
                                    Dzięki ekskluzywnemu, rozszerzonemu na skalę międzynarodową patentowi Roboderm®, Icoone® oferuje w pełni konfigurowalny zabieg odmładzania skóry i modelowania sylwetki. Roboderm® jest unikalną technologią na świecie zdolną do generowania Multi Mikropęcherzykowej Stymulacji (M.M.S.A.) za pomocą zestawu mikrootworów obecnych na powierzchni mikrostymulatorów znajdujących się w głowicach zabiegowych Icoone®. Mikrostymulatory obracają się tam i z powrotem, precyzyjnie i skutecznie stymulując skórę na całej powierzchni, docierając do najmniejszych jej części i generując do 21 600 mikrostymulacji na minutę.
                                </Typography>
                                <Typography className='paragraph'>
                                    Działanie stymulujące odbywa się na 3 powierzchniach jednocześnie: 2 niezależne, zmotoryzowane mikrostymulatory, które poruszają się jednocześnie na tym samym obszarze, uzupełniając swoje działanie i generując gimnastykę tkankową z efektem ujędrniającym oraz 1 centralna komora umieszczona pomiędzy mikrostymulatorami, która oddziałuje dogłębniej na tkankę tłuszczową. Dlatego też technologia Roboderm® umożliwia potrojenie powierzchni stymulacji, uzyskując głębszą i bardziej efektywną stymulację skóry.
                                </Typography>
                                <Typography className='paragraph'>
                                    Potrójna powierzchnia ssąca pozwala również na lepsze przemieszczanie głowic, dzięki czemu operator nie musi wywierać nacisku. W ten sposób obie ręce mogą być używane jednocześnie, co zapewnia klientowi bardziej naturalną i delikatną stymulację, bez zmęczenia operatora.
                                </Typography>
                                <Typography className='paragraph'>
                                    Icoone® jest w rzeczywistości technologią, która umożliwia dwuręczny symetryczny zabieg, pracując jednocześnie po obu stronach ciała. Rezultatem jest niezwykle dokładny, wielowymiarowy masaż leczonej powierzchni przy zachowaniu ogromnego szacunku dla skóry. Icoone® to nowa metoda leczenia skóry i przylegających do niej tkanek, która pozwala na precyzyjną pracę na tkance łącznej, likwiduje cellulit, zlokalizowany tłuszcz, luźną skórę, obrzęki limfatyczne, blizny, zaparcia, sztywność mięśni, zapalenia ścięgien oraz wszelkie objawy starzenia się skóry.
                                </Typography>
                            </Box>
                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Wpływ na tkanki
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                    {[
                                        'W naturalny sposób rozkłada komórki tłuszczowe do glicerolu i wolnych kwasów tłuszczowych.',
                                        'Redukuje cellulit poprzez zmniejszenie objętości adipocytów.',
                                        'Przyśpiesza metabolizm komórkowy.',
                                        'Przyśpiesza metabolizm.'
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
                                <Typography variant={'h5'} className='header'>
                                    Zalety Icoone® Laser Med 2
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                    {[
                                        'Nie niszczy błony komórek tłuszczowych, a jedynie redukuje w sposób znaczny i kontrolowany ich zawartość i objętość.',
                                        'Mocne działanie na głęboko zlokalizowany tłuszcz.',
                                        'Nie uszkadza sąsiednich tkanek i naczyń krwionośnych.',
                                        'Zabieg jest bezbolesny.'
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
                                <Typography variant={'h5'} className='header'>
                                    Icoone® zapewnia 3-stopniową stymulację
                                </Typography>
                                <Typography className='paragraph'>
                                    Dzięki takiemu mechanizmowi działania pobudzamy skórę na poziomie naskórka, skóry właściwej i tkanki podskórnej oraz dużo efektywniej oddziałujemy na komórki tłuszczowe i tkankę mięśniową. Zapewnia to znakomite efekty zarówno w działaniu modelującym sylwetkę i ujędrniającym skórę, jak i w leczeniu problemów mięśniowych lub zastojów limfatycznych.
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                    {[
                                        'Podciśnienie na rolkach wywołuje efekt drenażowy.',
                                        'Zassanie do komory głowicy stymuluję skórę i system włókien MCDS.',
                                        'Działanie pulsacyjne ICOONE® pobudza układ neurowegetatywny.'
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
                                <Typography variant={'h5'} className='header'>
                                    Idealne rozwiązanie dla osób:
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                    {[
                                        'Z problemami naczyniowymi i obrzękami',
                                        'Pragnących nadać swojej twarzy młody i zdrowy wygląd bez ingerencji chirurga',
                                        'Bezskutecznie walczących z głęboko zlokalizowanym tłuszczem, trudnym do likwidacji za pomocą diety i ćwiczeń fizycznych',
                                        'Przed i po zabiegach chirurgicznych',
                                        'Mających bóle mięśni, bóle pleców i karku spowodowane nieprawidłową postawą ciała',
                                        'Cierpiących na zaparcia',
                                        'Kobiet po porodach',
                                        'Uprawiających wyczynowo lub amatorsko sport',
                                        'Które żyją intensywnie i oczekują masażu, który zregeneruje ich ciało i umysł',
                                        'Mających problem z luźną skórą',
                                        'Walczących z nadwagą i cellulitem',
                                        'Po liposukcji',
                                        'Mających blizny pooperacyjne i pooparzeniowe'
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
                        <Box className='proposed-technology'>
                            <Box className='card-wrapper technology-proposed'>
                                {technology.filter(item => item.designation !== 'icooneLaserMed2').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.imageSmall}
                                        cardPath={item.path}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default TechnologyIcooneLaserMed2Partial;
