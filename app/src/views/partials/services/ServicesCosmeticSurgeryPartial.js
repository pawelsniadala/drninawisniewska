import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardProposed from '../../../components/CardProposed';

import { services, cosmeticSurgery } from '../../../data/services';
import { team } from '../../../data/team';

const ServicesCosmeticSurgeryPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-cosmetic-surgery'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/services' aria-current='page'>
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
                                    Chirurgia plastyczna
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Chirurgia plastyczna
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Plastyka powiek
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Plastyka powiek</strong>, inaczej blefaroplastyka, to zabieg mający na celu usunięcie nadmiaru skóry wokół oczu. W zakres blefaroplastyki wchodzi zarówno <strong>korekta powieki górnej jak i dolnej</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    Plastyka powiek jest najskuteczniejszą metodą walki z twz. opadającą powieką. Wskazaniami do zabiegu prócz defektu estetycznego są również asymetria oczu, problemy z widocznością, przepukliny tłuszczowe a także wiotkość tkanki wokół oczu.
                                </Typography>
                                <Box className='box-image'>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={cosmeticSurgery.servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsBefore}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderTopLeftRadius: 8,
                                            borderTopRightRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '360px',
                                            marginBottom: '4px'
                                        }}
                                    />
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={cosmeticSurgery.servicesCosmeticSurgeryPlasticSurgeryOfTheEyelidsAfter}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderBottomLeftRadius: 8,
                                            borderBottomRightRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '360px'
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Zabieg przeprowadzany jest w znieczuleniu miejscowym. Bezpośrednio po zabiegu skóra jest zaczerwieniona i widoczne są delikatne punkty sublimacji. Drugiego dnia po zabiegu może pojawić się lekki obrzęk, który utrzymuje się maksymalnie cztery dni. Drobne strupki  odpadają  po sześciu dniach.
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
                                    {team.filter(item => item.specialization.includes('cosmetic-surgery')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/cosmetic-surgery/${item.specialist}`}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <Box className='box-proposed specialization'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostałe specjalizacje
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {services.filter(item => item.title !== 'Chirurgia plastyczna').map((item) => (
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

export default Page(ServicesCosmeticSurgeryPartial);
