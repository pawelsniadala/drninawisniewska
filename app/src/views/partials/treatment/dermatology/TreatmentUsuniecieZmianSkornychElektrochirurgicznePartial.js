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

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { treatment, usuniecieZmianSkornychElektrochirurgiczne } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial = () => {
    // show specialists
    const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);
    const toggleShowMoreSpecialists = () => {
        setShowMoreSpecialists(prevState => !prevState);
    };
    const filteredSpecialists = team.filter(item => item.treatment.includes('usuniecie-zmian-skornych-elektrochirurgiczne'))
    const displayedSpecialists = showMoreSpecialists ? filteredSpecialists : filteredSpecialists.slice(0, 3);

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
                                    Usunięcie zmian skórnych elektrochirurgiczne
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Usunięcie zmian skórnych elektrochirurgiczne
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    <strong>Elektrochirurgia</strong>, inaczej <strong>elektrokoagulacja</strong>, to metoda chirurgiczna polegająca na wykorzystaniu przepływu <strong>prądu elektrycznego o różnej częstotliwości</strong> do usuwania, wycinania lub  wypalania, wszelkich niepożądanych zmian skórnych.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={usuniecieZmianSkornychElektrochirurgiczne.images[0].src}
                                        imageAlt={usuniecieZmianSkornychElektrochirurgiczne.images[0].alt}
                                        imageAuthor={usuniecieZmianSkornychElektrochirurgiczne.images[0].author}
                                        imageHref={usuniecieZmianSkornychElektrochirurgiczne.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Zabiegi można podzielić na elektrokoagulację i cięcie, które wykonuje się w znieczuleniu miejscowym. Zabieg elektrokoagulacji wykonuje się za pomocą elektrod o różnym kształcie, odpowiednio dobranych w zależności od rodzaju zmiany.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Głównymi zaletami innowacyjności elektrochirurgii w usuwaniu niezłośliwych zmian skórnych są</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'precyzyjność działania,',
                                        'ładny efekt wizualny po zabiegu,',
                                        'mała inwazyjność,',
                                        'szybkość gojenia się ran.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Zabiegi elektrochirurgiczne wykonuje się przy usuwaniu zmian skórnych o charakterze</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'brodawek wirusowych (tzw. kurzajek),',
                                        'brodawek łojotokowych,',
                                        'brodawek płaskich,',
                                        'włókniaków miękkich,',
                                        'naczyniaków gwiaździstych,',
                                        'prosaków,',
                                        'mięczaka zakaźnego,',
                                        'gruczolaków łojowych.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Każdy rodzaj zmiany musi być uprzednio zakwalifikowany do zabiegu przez lekarza w naszej Klinice</strong>.
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
                                        .filter(item => item.treatment !== 'usuniecie-zmian-skornych-elektrochirurgiczne')
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

export default Page(TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial);
