import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { services, aestheticMedicine } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';


const ServicesAestheticMedicinePartial = () => {
    // show specialists
    const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);
    const toggleShowMoreSpecialists = () => {
        setShowMoreSpecialists(prevState => !prevState);
    };
    const filteredSpecialists = team.filter(item => item.specialization.includes('aesthetic-medicine'));
    const displayedSpecialists = showMoreSpecialists ? filteredSpecialists : filteredSpecialists.slice(0, 3);

    // show treatments
    const [showMoreTreatments, setShowMoreTreatments] = useState(false);
    const toggleShowMoreTreatments = () => {
        setShowMoreTreatments(prevState => !prevState);
    };
    const filteredTreatments = treatment.filter(item => item.specialization.includes('aesthetic-medicine'));
    const displayedTreatments = showMoreTreatments ? filteredTreatments : filteredTreatments.slice(0, 3);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-aesthetic-medicine'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs className='breadcrumb back' aria-label='breadcrumb'>
                                <Link to='/services' aria-current='page'>
                                    <ArrowBackIcon />
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
                                    Medycyna estetyczna
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Medycyna estetyczna
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Medycyna estetyczna</strong> to dziedzina medycyny znajdująca się pomiędzy kosmetologią a chirurgią plastyczną. Zaliczane do niej zabiegi charakteryzują się głębszym i bardziej agresywnym działaniem niż w przypadku kosmetologii przy jednoczesnej małej inwazyjności w zestawianiu z chirurgią plastyczną.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={aestheticMedicine.images[0].src}
                                        imageAlt={aestheticMedicine.images[0].alt}
                                        imageAuthor={aestheticMedicine.images[0].author}
                                        imageHref={aestheticMedicine.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Dbałość o wygląd zewnętrzny jest obecnie istotnym aspektem kreowania wizerunku i wspomagania poprawy samooceny. I nie ma w tym absolutnie nic złego! Wiele osób decyduje się na zabiegi z zakresu medycyny estetycznej właśnie w celu poprawy ogólnego samopoczucia, upiększenia swojego naturalnego piękna lub pozbycia się natrętnego problemu.
                                </Typography>
                                <Typography className='paragraph'>
                                    Medycyna estetyczna oferuje szeroki wachlarz możliwości pozwalający zredukować niedoskonałości o różnym podłożu. Główną odnogą medycyny estetycznej są zabiegi skupiające się wokół poprawy jakości skóry, rewitalizacji i odmłodzenie skóry. Obecny rynek przesycony jest nowoczesną technologią, zmodernizowanymi preparatami i metodami zwalczania naszych niedoskonałości. Daje nam to szerokie opcje redukcji niedoskonałości skóry, dzięki czemu obecna medycyna estetyczna jest nakierowana na szeroką grupę odbiorców w zróżnicowanym wieku.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>W zakresie medycyny estetycznej najczęściej wyróżniamy</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'niwelowanie zmarszczek mimicznych i spłycanie głębokich bruzd,',
                                        'powiększanie, modelowanie i nawilżanie ust,',
                                        'korektę owalu twarzy,',
                                        'wolumetrię twarzy,',
                                        'mezoterapię,',
                                        'laseroterapię,',
                                        'zamykanie rozszerzonych  naczynek,',
                                        'redukcję blizn i rozstępów,',
                                        'niwelowanie cieni okolicy oczu,',
                                        'rewitalizację skóry,',
                                        'leczenie nadpotliwości dołów pachowych, dłoni i stóp.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Wszystkie wyżej wymienione zabiegi z zakresu medycyny estetycznej są dostępne w naszej Klinice.
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
                                    {displayedSpecialists.map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/aesthetic-medicine/${item.specialist}`}
                                        />
                                    ))}
                                    <Fade in={filteredSpecialists.length > 3}>
                                        <Button
                                            className='show-more-cards'
                                            onClick={toggleShowMoreSpecialists}
                                            endIcon={showMoreSpecialists ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        >
                                            {showMoreSpecialists ? 'Pokaż mniej' : 'Pokaż więcej'}
                                        </Button>
                                    </Fade>
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {displayedTreatments.map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.images[0].src}
                                            cardPath={item.path}
                                        />
                                    ))}
                                    <Fade in={filteredTreatments.length > 3}>
                                        <Button
                                            className='show-more-cards'
                                            onClick={toggleShowMoreTreatments}
                                            endIcon={showMoreTreatments ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                        >
                                            {showMoreTreatments ? 'Pokaż mniej' : 'Pokaż więcej'}
                                        </Button>
                                    </Fade>
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Powiązane specjalizacje
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {services.filter(item => item.relatedSpecializations.includes('aesthetic-medicine')).map((item) => (
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

export default Page(ServicesAestheticMedicinePartial);
