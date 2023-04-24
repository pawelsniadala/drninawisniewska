import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { technology, icooneLaserMed2 } from '../../../data/technology';

const TechnologyIcooneLaserMed2Partial = () => {
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
                                Icoone<sup>®</sup> Laser Med 2
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    <strong>Projekt Icoone<sup>®</sup> </strong> jest inspirowany intuicją <strong>profesora Jean-Claude'a Guimberteau</strong>, specjalisty w dziedzinie chirurgii rekonstrukcyjnej, który poświęcił wiele lat na obserwację skóry w zakresie struktury tkanki łącznej. Guimberteau wykazał, że <strong>skóra musi być pojmowana jako żywa</strong>, <strong>ciągła materia</strong>, a tkanka podskórna składa się z sieci <strong>mikrowakuoli</strong>, które tworzą funkcjonalną jednostkę struktury tkanki. Ta nowa wizja całkowicie zastępuje tradycyjną koncepcję tkanki warstwowej, a tym samym narzuca potrzebę nowego sposobu leczenia skóry.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
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
                                <Typography className='paragraph'>
                                    <strong>Najnowsza, opatentowana technologia Roboderm<sup>®</sup> zapewnia zaskakujące rezultaty</strong>. Dzięki ekskluzywnemu, rozszerzonemu na skalę międzynarodową patentowi Roboderm<sup>®</sup>, ICOONE<sup>®</sup>oferuje w pełni konfigurowalny zabieg odmładzania skóry i modelowania sylwetki. Roboderm<sup>®</sup>jest unikalną technologią na świecie zdolną do generowania Multi <strong>Mikropęcherzykowej Stymulacji (M.M.S.A.)</strong> za pomocą zestawu mikrootworów obecnych na powierzchni mikrostymulatorów znajdujących się w głowicach zabiegowych ICOONE®. Mikrostymulatory obracają się tam i z powrotem, precyzyjnie i skutecznie stymulując skórę na całej powierzchni, docierając do najmniejszych jej części i generując <strong>do 21 600 mikrostymulacji na minutę</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    Działanie stymulujące odbywa się na <strong>3 powierzchniach jednocześnie</strong>: 2 niezależne, zmotoryzowane mikrostymulatory, które poruszają się jednocześnie na tym samym obszarze, uzupełniając swoje działanie i generując gimnastykę tkankową z efektem ujędrniającym oraz 1 centralna komora umieszczona pomiędzy mikrostymulatorami, która oddziałuje dogłębniej na tkankę tłuszczową.
                                </Typography>
                                <Typography className='paragraph'>
                                    Technologia Roboderm<sup>®</sup>umożliwia <strong>potrojenie powierzchni stymulacji</strong>, uzyskując głębszą i bardziej efektywną stymulację skóry. Dzięki takiemu mechanizmowi działania ciało jest pobudzane na poziomie naskórka, skóry właściwej, tkanki podskórnej oraz tkanki mięśniowej.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wpływ na tkanki</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'w naturalny sposób rozkłada komórki tłuszczowe do glicerolu i wolnych kwasów tłuszczowych,',
                                        'redukuje cellulit poprzez zmniejszenie objętości adipocytów,',
                                        'przyśpiesza metabolizm komórkowy oraz metabolizm całego ustroju.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Zalety</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'nie niszczy błony komórek tłuszczowych, a jedynie redukuje w sposób znaczny i kontrolowany ich zawartość i objętość,',
                                        'mocne działanie na głęboko zlokalizowany tłuszcz,',
                                        'nie uszkadza sąsiednich tkanek i naczyń krwionośnych,',
                                        'zabieg jest bezbolesny.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'problemy naczyniowe i obrzęki,',
                                        'nadanie promiennego, zdrowego wyglądu skóry twarzy,',
                                        'walka z głęboko zlokalizowanym tłuszczem,',
                                        'kobiety po porodach,',
                                        'problemy z zaparciami,',
                                        'nadmiernie wiotka skóra,',
                                        'walka z cellulitem lub nadwagą,',
                                        'blizny pooperacyjne i pooparzeniowe,',
                                        'po liposukcji oraz zabiegach chirurgicznych,',
                                        'bóle mięśni, pleców i karku.'
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
                            <Box className='header-wrapper'>
                                <Typography className='header'>
                                    Pozostały sprzęt
                                </Typography>
                            </Box>
                            <Box className='card-wrapper technology-proposed'>
                                {technology.filter(item => item.designation !== 'icooneLaserMed2').map((item) => (
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
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TechnologyIcooneLaserMed2Partial);
