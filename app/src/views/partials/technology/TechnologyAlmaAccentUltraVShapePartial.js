import React from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import {
    technology,
    // almaAccentUltraVShape
} from '../../../data/technology';

const TechnologyAlmaAccentUltraVShapePartial = () => {
    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header technology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/technology' aria-current='page'>
                                    <Box>Technologia</Box>
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
                                <Link to='/technology' aria-current='page'>
                                    Technologia
                                </Link>
                                <Typography color='text.primary'>
                                    Alma Accent Ultra V Shape
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Alma Accent Ultra V Shape
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box className='box-technology'>
                                <Typography className='paragraph'>
                                    Ultradźwięki połączone z falą radiową to zabieg, który w bezpieczny sposób redukuje cellulit i tkankę tłuszczową, niweluje wiotkość skóry oraz modeluje twarz. Dzięki połączeniu dwóch technologii intensyfikujemy efekty terapeutyczne.
                                </Typography>
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
                                <Typography className='paragraph'>
                                    Urządzenie posiada wymienne głowice zapewniające dodatkowe opcje zabiegowe. Jedna z nich łączy w sobie mikroplazmę frakcyjną z radiofrekwencją, służącą do niwelowania rozstępów, blizn, zmarszczek, blizn potrądzikowych oraz wiotkiej skóry.  Jej działanie opiera się na jednoczesnej ablacji i koagulacji tkanek, dzięki czemu dogłębnie przebudowuje skórę. Na poziomie naskórka i skóry właściwej tworzy się siateczka mikrouszkodzeń, która stymuluje silną odbudowę włókien kolagenowych i elastynowych, odpowiedzialnych za zdrowy i jędrny wygląd skóry.
                                </Typography>
                            </Box>
                        </Box>

                        <Box className='proposed-wrapper'>
                            <Box className='box-proposed technology'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostały sprzęt
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {technology.filter(item => item.designation !== 'almaAccentUltraVShape').map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.imageSmall}
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

export default Page(TechnologyAlmaAccentUltraVShapePartial);
