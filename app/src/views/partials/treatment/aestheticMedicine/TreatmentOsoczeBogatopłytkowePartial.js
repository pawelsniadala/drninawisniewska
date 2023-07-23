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

import { treatment, osoczeBogatopłytkowe } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentOsoczeBogatopłytkowePartial = () => {
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
                                <Link to='/treatment/aesthetic-medicine' aria-current='page'>
                                    <Box>Medycyna estetyczna</Box>
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
                                <Link to='/treatment/aesthetic-medicine' aria-current='page'>
                                    Medycyna estetyczna
                                </Link>
                                <Typography>
                                    Osocze bogatopłytkowe
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Osocze bogatopłytkowe
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    <strong>Osocze bogatopłytkowe</strong> uzyskuje się z <strong>krwi własnej pacjenta</strong> poprzez podwójne odwirowanie substancji, które stanowią elementy morfotyczne krwi. Podczas odwirowywania krwi pobranej <strong>bezpośrednio przed zabiegiem</strong> zostają oddzielone krwinki czerwone oraz białe od płytek krwi. Osocze bogatopłytkowe uzyskuje się z standardowego poboru krwi. Po odwirowaniu zyskuje się <strong>płynny składnik</strong> krwi o niezwykłych i <strong>pożądanych</strong> przez nas <strong>właściwościach</strong>. Aby wprowadzić go pod skórę pacjenta wykorzystuje się <strong>mezoterapię</strong>, czyli ostrzykiwanie za pomocą bardzo cienkich igieł. Najczęściej ostrzykiwaniu osoczem poddawane są policzki, linia żuchwy, czoło, powieki oraz okolice oczu. Jednak osocze bogatopłytkowe przynosi również świetne rezultaty w poprawie wyglądu skóry szyi i dekoltu, ramion i dłoni oraz owłosionej skóry głowy.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={osoczeBogatopłytkowe.images[0].src}
                                        imageAlt={osoczeBogatopłytkowe.images[0].alt}
                                        imageAuthor={osoczeBogatopłytkowe.images[0].author}
                                        imageHref={osoczeBogatopłytkowe.images[0].href}
                                    />
                                </Box>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Wskazania
                                </Typography>
                                <Grid container spacing={0.5}>
                                    {[
                                        'rewitalizacja skóry twarzy,',
                                        'skóra zmęczona, bez napięcia,',
                                        'niejednolity kolor,',
                                        'skóra wysuszona, wiotka, pozbawiona blask,',
                                        'oznaki starzenia się skóry,',
                                        'fałdy,',
                                        'zmarszczki,',
                                        'zapadnięta skóra,',
                                        'zmniejszona gęstość skóry,',
                                        'przebyte zabiegi medycyny estetycznej,',
                                        'regeneracja skóry,',
                                        'przyspieszenie gojenia,',
                                        'łysienie androgenowe i inne,',
                                        'rozstępy,',
                                        'blizny zanikowe,',
                                        'blizny po cięciu cesarskim,',
                                        'blizny potrądzikowe.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Przeciwwskazania
                                </Typography>
                                <Typography className='paragraph'>
                                    Nadwrażliwość na substancje preparatu, infekcje w polu zabiegowym, miastenia rzekomoporaźna, zespół Lamberta-Eatona, stwardnienie boczne zanikowe, wszelkie zaburzenia przewodnictwa nerwowo-mięśniowego.
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
                                        .filter(item => item.treatment.includes('osocze-bogatopłytkowe'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/aesthetic-medicine/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'aesthetic-medicine')
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
                                        .filter(item => item.specialization.includes('aesthetic-medicine'))
                                        .filter(item => item.treatment !== 'osocze-bogatopłytkowe')
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

export default Page(TreatmentOsoczeBogatopłytkowePartial);
