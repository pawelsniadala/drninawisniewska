import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardProposed from '../../../components/CardProposed';
// import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { services, aestheticMedicine } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';

const ServicesAestheticMedicinePartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-aesthetic-medicine'>
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
                                    Medycyna estetyczna to dziedzina medycyny, która łączy w sobie aspekty medycyny, dermatologii i kosmetologii w celu poprawy wyglądu zewnętrznego, utrzymania młodzieńczego wyglądu i wzmocnienia pewności siebie pacjentów. Jest to gałąź medycyny, która oferuje szeroki zakres procedur i zabiegów niechirurgicznych, które mają na celu odmłodzenie, rewitalizację i poprawę wyglądu skóry i ciała.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={aestheticMedicine.images[0].src}
                                        imageAlt={aestheticMedicine.images[0].alt}
                                        imageAuthor={aestheticMedicine.images[0].author}
                                        imageHref={aestheticMedicine.images[0].href}
                                    />
                                </Box>
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
                                    {team.filter(item => item.specialization.includes('aesthetic-medicine')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/aesthetic-medicine/${item.specialist}`}
                                        />
                                    ))}
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment.filter(item => item.specialization.includes('aesthetic-medicine')).map((item) => (
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
