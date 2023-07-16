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

import { treatment, testySkorne } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentTestySkornePartial = () => {
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
                                    Testy skórne
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Testy skórne
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    <strong>Testy skórne</strong> są jedną z popularniejszej oraz prostszej metody diagnostycznej alergii. Największą zaletą testów skórnych jest ich <strong>krótki czas oczekiwania na wyniki</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    Badanie przeprowadza się na wewnętrznej części przedramienia lub skórze pleców. Przebieg testów polega na naniesieniu kropli różnych zawiesin z alergenami z zestawu przesiewowego zawierającego takie substancje uczulające jak <strong>rośliny wiatropylne</strong>, <strong>trawy</strong>, <strong>pleśnie</strong>, <strong>sierść zwierząt</strong>, <strong>jad owadów</strong> czy <strong>roztocza kurzu domowego</strong>.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={testySkorne.images[0].src}
                                        imageAlt={testySkorne.images[0].alt}
                                        imageAuthor={testySkorne.images[0].author}
                                        imageHref={testySkorne.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Jednorazowo wykonuje się do 20 alergenów oraz 2 próby kontrolne. Następnie każdą kroplę alergenu należy delikatnie nakłuć (bez wywołania krwawienia) by zawarte antygeny przedostały się do powierzchniowych warstw skóry.
                                </Typography>
                                <Typography className='paragraph'>
                                    Alergenowe testy skórne powinny być wykonywane w momencie kiedy nie występują objawy alergii, ponieważ na tydzień przed planowanymi testami należy odstawić leki przeciwalergiczne, które mogą zaburzyć wyniki testów. W miejscu aplikacji alergenów nie należy stosować maści zewnętrznych zawierających glikokortykosteroidy lub inhibitory kalcyneuryny.
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
                                        .filter(item => item.treatment.includes('testy-skorne'))
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
                                        .filter(item => item.treatment !== 'testy-skorne')
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
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TreatmentTestySkornePartial);
