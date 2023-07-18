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

import { treatment, odczulanie } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentOdczulaniePartial = () => {
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
                                <Link to='/treatment/allergology' aria-current='page'>
                                    <Box>Alergologia</Box>
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
                                <Link to='/treatment/allergology' aria-current='page'>
                                    Alergologia
                                </Link>
                                <Typography>
                                    Odczulanie
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Odczulanie
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Immunoterapia swoista</strong>, czyli odczulanie, to jedyna <strong>przyczynowa</strong> metoda leczenia alergii.
                                </Typography>
                                <Typography className='paragraph'>
                                    Odczulanie ma na celu zmniejszyć wrażliwość organizmu na dany czynnik alergizujący, co w następstwie redukuje uciążliwe objawy alergii. Polega ono na podawaniu coraz to większych stężeń alergenu w szczepionce co stopniowo zmniejsza wrażliwość organizmu na hapteny uczulające. Dawka wyciągu alergennego wynosi od 5 do 20 μg podanego w iniekcji podskórnej.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={odczulanie.images[0].src}
                                        imageAlt={odczulanie.images[0].alt}
                                        imageAuthor={odczulanie.images[0].author}
                                        imageHref={odczulanie.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Odczulanie jest procesem czasochłonnym. Zajmuje od 3 do 5 lat. Immunoterapia swoista jest szczególnie skuteczna w przypadku alergii na jad owadów bąkoskrzydłych, pyłki roślinne oraz roztocza kurzu domowego. Odczulania nie stosuje się w przypadku alergii pokarmowych.
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
                                        .filter(item => item.treatment.includes('odczulanie'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/allergology/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'allergology')
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
                                        .filter(item => item.specialization.includes('allergology'))
                                        .filter(item => item.treatment !== 'odczulanie')
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

export default Page(TreatmentOdczulaniePartial);
