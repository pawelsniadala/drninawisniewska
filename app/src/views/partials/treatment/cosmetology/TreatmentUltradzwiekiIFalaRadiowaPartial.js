import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { treatment, ultradzwiekiIFalaRadiowa } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentUltradzwiekiIFalaRadiowaPartial = () => {
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
                                <Link to='/treatment/cosmetology' aria-current='page'>
                                    <Box>Kosmetologia</Box>
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
                                <Link to='/treatment/cosmetology' aria-current='page'>
                                    Kosmetologia
                                </Link>
                                <Typography>
                                    Ultradzwieki i fala radiowa
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Ultradzwieki i fala radiowa
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    Ultradźwięki połączone z falą radiową to zabieg, który w bezpieczny sposób redukuje cellulit i tkankę tłuszczową, niweluje wiotkość skóry oraz modeluje twarz. Dzięki połączeniu dwóch technologii intensyfikujemy efekty terapeutyczne.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={ultradzwiekiIFalaRadiowa.images[0].src}
                                        imageAlt={ultradzwiekiIFalaRadiowa.images[0].alt}
                                        imageAuthor={ultradzwiekiIFalaRadiowa.images[0].author}
                                        imageHref={ultradzwiekiIFalaRadiowa.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Ultradźwięki selektywnie niszczą błony komórkowe adipocytów, czyli komórek tłuszczowych. Następnie fala radiowa przyśpiesza metabolizm usprawniając działanie układu limfatycznego oraz usuwanie uwolnionego tłuszczu z organizmu. Radiofrekwencja pobudza również fibroblasty co skutkuje ujędrnieniem skóry w okolicy zabiegowej.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg ten jest <strong>alternatywą dla procedur chirurgicznych</strong>. Można przeprowadzać go w każdej okolicy ciała lub twarzy, bez pominięcia szyi, brzucha, pośladków czy ud. Już po jednorazowej procedurze kondycja skóra ulega widocznej poprawie. By osiągnąć trwałe rezultaty zalecana jest seria 5 zabiegów w odstępach dwutygodniowych.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'niszczenie komórek tłuszczowych,',
                                        'cellulit,',
                                        'redukcja blizn i rozstępów,',
                                        'nierówności po liposukcji,',
                                        'redukcja zmarszczek,',
                                        'termiczny lifting skóry,',
                                        'ujędrnienie i modelowanie ciała,',
                                        'poprawa owalu twarzy,',
                                        'likwidacja "chomików",',
                                        'likwidacja drugiego podbródka,',
                                        'redukcja blizn',
                                        'redukcja rozstępów.',
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
                                    {team
                                        .filter(item => item.treatment.includes('ultradzwieki-i-fala-radiowa'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/cosmetology/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'cosmetology')
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
                                        .filter(item => item.specialization.includes('cosmetology'))
                                        .filter(item => item.treatment !== 'ultradzwieki-i-fala-radiowa')
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

export default Page(TreatmentUltradzwiekiIFalaRadiowaPartial);
