import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { technology, almaAccentUltraVShape } from '../../../data/technology';

const TechnologyAlmaAccentUltraVShapePartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

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
                                {almaAccentUltraVShape.title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>
                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    <strong>Accent Ultra V</strong> to zabieg, który w bezpieczny, bezbolesny sposób redukuje cellulit i tkankę tłuszczową, niweluje wiotkość skóry oraz modeluje twarz. Accent Ultra V łączy ze sobą dwie technologie, <strong>fale ultradźwiękową</strong> oraz <strong>radiofrekwencję</strong>, intensyfikując w ten sposób efekty terapeuryczne.
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
                                        'likwidacja drugiego podbródka.',
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Urządzenie Accent Ultra V posiada wymienne głowice zapewniające dodatkowe opcje zabiegowe. Głowica <strong>iPixel RF</strong> to rewolucyjna technologia łącząca <strong>mikroplazmę frakcyjną</strong> z <strong>radiofrekwencją</strong>, służąca do niwelowania rozstępów, blizn, zmarszczek, blizn potrądzikowych oraz wiotkiej skóry.
                                </Typography>
                                <Typography className='paragraph'>
                                    Działanie iPixel RF opiera się na <strong>jednoczesnej ablacji</strong> i <strong>koagulacja tkanki</strong>, dzieki czemu dogłębnie przebudowuje skórę. Wiązka lasera tworzy siateczkę mikrouszkodzeń na poziomie skóry właściwej i naskórka, stymulując silną odbudowę włókien kolagenu i elastyny, które są odpowiedzialne za zdrowy i jędrny wygląd skóry. Proces naprawy i regeneracji skóry następuje w ciągu 48-96 godzin od zabiegu.
                                </Typography>
                                <Typography className='paragraph'>
                                    Głowica frakcyjna wyposażona w setki mikroelektrod umożliwia przeprowadzenie terapii zarówno na małych obszarach, jaką jest twarz, jak i na dużych, tj. brzuch, pośladki, uda.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='proposed-technology'>
                            <Box className='card-wrapper technology-proposed'>
                                {technology.filter(item => item.designation !== 'almaAccentUltraVShape').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.imageSmall}
                                        cardPath={item.path}
                                    />
                                ))}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default TechnologyAlmaAccentUltraVShapePartial;
