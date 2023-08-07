import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { treatment, niciRewitalizujaceILiftingujace } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentNiciRewitalizujaceILiftingujacePartial = () => {
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
                                    <ArrowBackIcon />
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
                                    Nici rewitalizujące i liftingujące
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Nici rewitalizujące i liftingujące
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    <strong>Nici liftingujące</strong> służą do <strong>usuwania skutków starzenia grawitacyjnego</strong>. Zmiany na skórze spowodowane są utratą sprężystości, zmniejszeniem napięcia mięśni i przemieszczaniem się podskórnej tkanki tłuszczowej. Nici liftingujące są mniej kłopotliwą i inwazyjną alternatywą dla chirurgicznego liftingu.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={niciRewitalizujaceILiftingujace.images[0].src}
                                        imageAlt={niciRewitalizujaceILiftingujace.images[0].alt}
                                        imageAuthor={niciRewitalizujaceILiftingujace.images[0].author}
                                        imageHref={niciRewitalizujaceILiftingujace.images[0].href}
                                    />
                                </Box>
                             <Typography className='paragraph heading'>
                                    <strong>Efekty pozabiegowe</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'poprawa owalu twarzy - likwidacja tzw. "chomików" podwójnego podbródka,',
                                        'usuwanie asymetrii łuków brwiowych, opadającej powieki,',
                                        'spłycenie zmarszczek,',
                                        'modelowanie ciała - opadające ramiona, pośladki, biust.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    Potocznie nićmi liftingującymi nazywany jest każdy rodzaj nitek służących do podwieszania skóry. W nomenklaturze medycznej nici liftingujące dzielą się na:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'nici rewitalizujące (rozpuszczalne),',
                                        'nici liftingujące właściwe (nierozpuszczalne).'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Nici rewitalizujące to nici polidioksanowe (PDO). Wykonane są z tego samego tworzywa co szwy chirurgiczne stosowane w operacjach. Nici nazywane przez lekarzy liftingującymi to inaczej nici haczykowate. Są dużo grubsze od nici PDO, a umieszczone na nich w różnych kierunkach haczyki mają za zadanie unosić obwisłą skórę. Stosowane są zwłaszcza u pacjentek w dojrzałym wieku i dają efekt porównywalny do liftingu chirurgicznego. W reakcji na obecność ciała obcego skóra zaczyna stymulować produkcję kolagenu.
                                </Typography>
                                <Typography className='paragraph'>
                                    Nasza Klinika oferuje oba typy nici.
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
                                        .filter(item => item.treatment.includes('nici-rewitalizujace-i-liftingujace'))
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
                                        .filter(item => item.treatment !== 'nici-rewitalizujace-i-liftingujace')
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

export default Page(TreatmentNiciRewitalizujaceILiftingujacePartial);
