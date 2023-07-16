import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { services, cosmetology } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';

const ServicesCosmetologyPartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-cosmetology'>
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
                                    <strong>Kosmetologia</strong> to dziedzina naukowa i praktyczna, która zajmuje się pielęgnacją skóry, włosów, paznokci oraz ogólnym poprawianiem wyglądu i zdrowia skóry. Kosmetolodzy, specjaliści w dziedzinie kosmetologii, stosują różne techniki, metody i produkty w celu zapewnienia zdrowia, piękna i dobrej kondycji skóry.
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
                                    <strong>Nasza Klinika oferuje</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Terapie dla cery trądzikowej i tłustej - preparaty o właściwościach antybakteryjnych, przeciwzapalnych, regulujących wydzielanie sebum, keratolitycznych i komedolitycznych normalizujące fizjologię skóry zwalczając zmiany wypryskowe oraz wyciszając nadreaktywność gruczołów łojowych.',
                                        'Terapie dla cery rumieniowej i naczyniowej - wykazują lekkie właściwości  złuszczające oraz nawilżające, a także obkurczają struktury płytko osadzonych naczyń krwionośnych, dzięki czemu niwelują widoczny rumień oraz teleangiekatazje.',
                                        'Terapie dla cer z przebarwieniami - peelingi o działaniu depigmentującym, którego formuły przyspieszają odnowę naskórka w celu eliminacji powierzchniowo nagromadzonej melaniny, zapewniając widoczną poprawę kolorytu, rozjaśnienie istniejących przebarwień oraz zapobiegając powstawaniu kolejnych.',
                                        'Terapie dla cer dojrzałych - procedury rewitalizujące skórę z pierwszymi oznakami starzenia i fotostarzenia, są to  peelingi poprawiające jędrność, napięcie oraz zapewniające rozjaśnienie skóry twarzy, szyi i dekoltu.',
                                        'Terapie na lato - całoroczne procedury bezpieczne także przy wysokim nasłonecznieniu, nie wykazujące właściwości fotouwrażliwiających, co pozwala na korzystanie z  profesjonalnych zabiegów kosmetologicznych również w lato.',
                                        'Terapie blizn i rozstępów - zabiegi silnie złuszczające mające na celu ujednolicić strukturę oraz koloryt skóry zarówno blizn wypukłych jak i wklęsłych.',
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

                        <Box className='proposed-wrapper'>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Specjaliści
                                    </Typography>
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
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment.filter(item => item.specialization.includes('cosmetology')).map((item) => (
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
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Powiązane specjalizacje
                                    </Typography>
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
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(ServicesCosmetologyPartial);
