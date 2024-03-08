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
import CardCareerProposed from '../../../components/CardCareerProposed';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { services, dermatology } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';
import { career } from '../../../data/career';

const ServicesDermatologyPartial = () => {
    // show specialists
    const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);
    const toggleShowMoreSpecialists = () => {
        setShowMoreSpecialists(prevState => !prevState);
    };
    const filteredSpecialists = team.filter(item => item.specialization.includes('dermatology'));
    const displayedSpecialists = showMoreSpecialists ? filteredSpecialists : filteredSpecialists.slice(0, 3);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-dermatology'>
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
                                    <strong>Dermatologia</strong> to dziedzina medycyny, która poświęca uwagę zdrowiu i problemom skóry, włosów, paznokci oraz błon śluzowych. Oferuje diagnozę, leczenie i profilaktykę różnorodnych schorzeń dermatologicznych, od powszechnych trądzików i atopowych zapaleń skóry po bardziej złożone choroby przenoszone drogą płciową i zmiany skórne. Jest to istotna gałąź medycyny, która nie tylko pomaga utrzymać zdrowie skóry, ale także poprawia jakość życia pacjentów.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={dermatology.images[0].src}
                                        imageAlt={dermatology.images[0].alt}
                                        imageAuthor={dermatology.images[0].author}
                                        imageHref={dermatology.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Badając wpływ czynników zewnętrznych, takich jak promieniowanie UV, dermatologia oferuje również porady dotyczące pielęgnacji skóry i profilaktyki przeciwstarzeniowej. Specjaliści w tej dziedzinie wykorzystują różnorodne metody diagnostyczne i terapeutyczne, w tym badania dermatoskopowe, biopsje skóry, terapię światłem, laseroterapię oraz procedury chirurgiczne, aby zapewnić kompleksową opiekę nad pacjentami.
                                </Typography>
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
                        </Box>

                        <Box className='proposed-wrapper'>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Specjaliści
                                    </Typography>
                                    {/* <Link
                                        className='show-all-cards'
                                        to="/team"
                                    >
                                        Zobacz wszystkich
                                        <ArrowForwardIcon />
                                    </Link> */}
                                </Box>
                                <Box className='card-wrapper'>
                                    {displayedSpecialists.map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/dermatology/${item.specialist}`}
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
                                    {/* <Link
                                        className='show-all-cards'
                                        to="/treatment"
                                    >
                                        Zobacz wszystkie
                                        <ArrowForwardIcon />
                                    </Link> */}
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment.filter(item => item.specialization.includes('dermatology')).map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.images[0].src}
                                            cardPath={item.path}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Powiązane specjalizacje
                                    </Typography>
                                    {/* <Link
                                        className='show-all-cards'
                                        to="/services"
                                    >
                                        Zobacz wszystkie
                                        <ArrowForwardIcon />
                                    </Link> */}
                                </Box>
                                <Box className='card-wrapper'>
                                    {services.filter(item => item.relatedSpecializations.includes('dermatology')).map((item) => (
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
                            {career.filter(item => item.specialization?.includes('dermatology')).length > 0 && (
                                <Box className='box-proposed'>
                                    <Box className='header-wrapper'>
                                        <Typography className='header'>
                                            Oferty pracy
                                        </Typography>
                                    </Box>
                                    <Box className='card-wrapper'>
                                        {career.filter(item => item.specialization?.includes('dermatology')).map((item) => (
                                            <CardCareerProposed
                                                key={item.id}
                                                cardTitle={item.title}
                                                cardLocation={item.location}
                                                cardDate={item.date}
                                                cardAgreement={item.agreement}
                                                cardPosition={item.position}
                                                cardType={item.type}
                                                cardPlace={item.place}
                                                cardPath={item.path}
                                                cardImage={item.image}
                                                cardStatus={item.status}
                                            />
                                        ))}
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(ServicesDermatologyPartial);
