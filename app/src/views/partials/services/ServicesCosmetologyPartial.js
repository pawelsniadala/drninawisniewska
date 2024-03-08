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
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardCareerProposed from '../../../components/CardCareerProposed';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { services, cosmetology } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';
import { career } from '../../../data/career';

const ServicesCosmetologyPartial = () => {
    // show treatments
    const [showMoreTreatments, setShowMoreTreatments] = useState(false);
    const toggleShowMoreTreatments = () => {
        setShowMoreTreatments(prevState => !prevState);
    };
    const filteredTreatments = treatment.filter(item => item.specialization.includes('cosmetology'));
    const displayedTreatments = showMoreTreatments ? filteredTreatments : filteredTreatments.slice(0, 3);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-cosmetology'>
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
                                    Kosmetologia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Kosmetologia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Kosmetologia</strong> jest dziedziną, która zajmuje się działaniem pielęgnacyjnym, kondycjonującym oraz zwiększającym atrakcyjność ciała i twarzy przy pomocy różnego rodzaju preparatów kosmetycznych, sprzętów aparaturowych oraz manualnych technik terapeutycznych.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={cosmetology.images[0].src}
                                        imageAlt={cosmetology.images[0].alt}
                                        imageAuthor={cosmetology.images[0].author}
                                        imageHref={cosmetology.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Kosmetologia zajmuje się</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'analizowaniem kondycji skóry,',
                                        'personalizacją planów pielęgnacyjnych,',
                                        'wspomaganiem leczenia cer trądzikowych,',
                                        'niwelowaniem oznak starzenia,',
                                        'redukcją przebarwień skórnych,',
                                        'kondycjonowaniem skóry,',
                                        'zapobieganiem defektom skórnym,',
                                        'redukacją celulitu,',
                                        'modelowaniem sylwetki,',
                                        'ujędrnianiem twarzy i ciała,',
                                        'trwałym usuwaniem owłosienia.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Kosmetologia to dziedzina interdyscyplinarna, często zahaczająca o wiedzę dermatologiczną, alergologiczną, biologiczną i chemiczną. Kosmetologia jest również ściśle związana z medycyną estetyczną, dietetyką i chirurgią plastyczną.
                                </Typography>
                                <Typography className='paragraph'>
                                    Nasza Klinika świadczy usługi z zakresu indywidualnych terapii skór problematycznych, terapiach przeciwstarzeniowych, zabiegów na ciało a także depilacji laserowej.
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
                                        to="/team/cosmetology"
                                    >
                                        Zobacz wszystkich
                                        <ArrowForwardIcon />
                                    </Link> */}
                                </Box>
                                <Box className='card-wrapper'>
                                    {team.filter(item => item.specialization.includes('cosmetology')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/cosmetology/${item.specialist}`}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Zabiegi
                                    </Typography>
                                    {/* <Link
                                        className='show-all-cards'
                                        to="/treatment/cosmetology"
                                    >
                                        Zobacz wszystkie
                                        <ArrowForwardIcon />
                                    </Link> */}
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
                                    {/* <Link
                                        className='show-all-cards'
                                        to="/services"
                                    >
                                        Zobacz wszystkie
                                        <ArrowForwardIcon />
                                    </Link> */}
                                </Box>
                                <Box className='card-wrapper'>
                                    {services.filter(item => item.relatedSpecializations.includes('cosmetology')).map((item) => (
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
                            {career.filter(item => item.specialization?.includes('cosmetology')).length > 0 && (
                                <Box className='box-proposed'>
                                    <Box className='header-wrapper'>
                                        <Typography className='header'>
                                            Oferty pracy
                                        </Typography>
                                    </Box>
                                    <Box className='card-wrapper'>
                                        {career.filter(item => item.specialization?.includes('cosmetology')).map((item) => (
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

export default Page(ServicesCosmetologyPartial);
