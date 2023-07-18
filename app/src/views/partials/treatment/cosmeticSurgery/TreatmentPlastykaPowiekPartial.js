import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
// import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { /* treatment, */ plastykaPowiek } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentPlastykaPowiekPartial = () => {
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
                                <Link to='/treatment/cosmetic-surgery' aria-current='page'>
                                    <Box>Chirurgia plastyczna</Box>
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
                                <Link to='/treatment/cosmetic-surgery' aria-current='page'>
                                    Chirurgia plastyczna
                                </Link>
                                <Typography>
                                    Plastyka powiek
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Plastyka powiek
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Plastyka powiek</strong>, inaczej blefaroplastyka, to zabieg mający na celu usunięcie nadmiaru skóry wokół oczu. W zakres blefaroplastyki wchodzi zarówno <strong>korekta powieki górnej jak i dolnej</strong>.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={plastykaPowiek.images[0].src}
                                        imageAlt={plastykaPowiek.images[0].alt}
                                        imageAuthor={plastykaPowiek.images[0].author}
                                        imageHref={plastykaPowiek.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Zabieg przeprowadzany jest w znieczuleniu miejscowym. Bezpośrednio po zabiegu skóra jest zaczerwieniona i widoczne są delikatne punkty sublimacji. Drugiego dnia po zabiegu może pojawić się lekki obrzęk, który utrzymuje się maksymalnie cztery dni. Drobne strupki odpadają po sześciu dniach.
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
                                        .filter(item => item.treatment.includes('plastyka-powiek'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/cosmetic-surgery/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'cosmetic-surgery')
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
                            {/* <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostałe zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment
                                        .filter(item => item.specialization.includes('cosmetic-surgery'))
                                        .filter(item => item.treatment !== 'plastyka-powiek')
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
                            </Box> */}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TreatmentPlastykaPowiekPartial);
