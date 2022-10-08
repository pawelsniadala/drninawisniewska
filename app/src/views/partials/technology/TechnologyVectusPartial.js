import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import ListBulleted from '../../../components/ListBulleted';

import { technology, vectus } from '../../../data/technology';

const TechnologyVectusPartial = () => {
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
                                    {/* <NavigateBeforeIcon sx={{ mr: '3px' }} fontSize='smform' /> */}
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
                                    Vectus
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Vectus™
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper technology'>
                        <Box className='technology-description'>

                            <Box marginBottom={3}>
                                <Typography className='paragraph'>
                                    <strong>Vectus™</strong> to produkt amerykańskiej firmy <strong>Polmar</strong>, która stworzyła pierwszą na świecie technologię laserowego usuwania owłosienia, do dziś chronioną patentem. Vectus™ jest owocem trwających kilkanaście lat doświadczeń i badań nad udoskonaleniem systemu lasera diodowego. Wykorzystano w nim wiele nowatorskich rozwiązań decydujących o wyjątkowej skuteczności, bezpieczeństwie i komforcie pacjenta.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={vectus.imageLarge}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px',
                                            objectPosition: '50% 67%',
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Vectus™ jest najnowszym, najszybszym i zarazem najmocniejszym systemem do depilacji laserowej na świecie. Laser diodowy Palomar Vectus™ posiada certyfikat bezpieczeństwa i skuteczności wydany przez <strong>Amerykański Urząd ds. Żywności i Leków FDA</strong>, honorowany na całym  świecie, dopuszczający je na rynek jako urządzenia do trwałego <strong>usuwania włosów</strong> oraz przebarwień.
                                </Typography>
                                <Typography className='paragraph'>
                                    Urządzenie Vectus™, jako jedyne na świecie, wyposażone jest w <strong>inteligentny czytnik poziomu melaniny w skórze</strong> - <strong>Skintel™</strong>. W praktyce oznacza to, że przed zabiegiem czytnik przykładany jest do skóry pacjenta w tym miejscu, z którego usuwane będzie owłosienie. Skintel™ określa poziom melaniny i na podstawie tego odczytu ustawia w urządzeniu indywidualnie dobrane parametry zabiegu. Korzyści wynikających z tego jest kilka.
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Zabieg jest bardziej efektywny.',
                                        'Możemy zastosować wyższe parametry, jednak ciągle bezpieczne dla pacjenta. Zabieg jest bardziej efektywny.',
                                        'Wyklucza ryzyko poparzenia.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Na skuteczność zabiegu wpływa również <strong>opatentowana technologia Photon Recycling</strong> , która polega na ponownym wykorzystaniu światła, w naturalny sposób odbijającego się od skóry. Światło, dzięki wbudowanym w głowicy lustrom, powraca , co powoduje, że impuls światła wykorzystywany jest w stu procentach radykalnie zwiększając efektywność procedury.
                                </Typography>
                                <Typography className='paragraph'>
                                    Komfort pacjenta zapewnia nie tylko bardzo szybkie tempo pracy lasera (dla przykładu redukcję owłosienia na plecach można wykonać w zaledwie 3 minuty), ale również zastosowana w głowicy technologia <strong>Advanced Contact Cooling</strong>. Oznacza to, że skóra jest chłodzona przed, w trakcie i po emisji światła.
                                </Typography>
                                <Typography className='paragraph'>
                                    Kontaktowe chłodzenie powoduje, że wyczuwalność ciepła w trakcie zabiegu jest minimalna. Pozwala to zastosować wyższą energię w trakcie zabiegu, a tym samym w znaczący sposób zwiększyć jego skuteczność.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Jak się przygotować do zabiegu depilacji laserowej?</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Przed zabiegiem należy dokładnie ogolić maszynką obszar, na którym będzie przeprowadzany zabieg. Do 4 tygodni przed zabiegiem zabronione jest usuwanie włosków pęsetą, woskiem, depilatorem.',
                                        'Obszar skóry, który ma być poddany depilacji laserowej, nie może być podrażniony ani przesuszony.',
                                        '3 tygodnie przed zabiegiem epilacji Vectus należy pamiętać o odstawieniu wszelkich leków i ziół.',
                                        'Po kuracji antybiotykami należy odczekać ok. 2 tyg. od momentu odstawienia leków.',
                                        '4 tygodnie przed zabiegiem nie należy opalać skóry.',
                                        'Przed i w trakcie serii zabiegów epilacji laserowej nie wolno korzystać z solarium lub samoopalaczy.',
                                        'Tydzień przed wykonywanym zabiegiem nie należy wykonywać zabiegów uszczających.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Zalecenia pozabiegowe</strong>
                                </Typography>
                                <Typography className='paragraph'>
                                    Bezpośrednio po zabiegu skóra może być delikatnie zaczerwieniona. <strong>Do ustąpienia zaczerwienienia zaleca się unikanie poniższych czynności</strong>.
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Nakładania kosmetyków na obszar zabiegu.',
                                        'Pływania, zwłaszcza w basenach sztucznych zawierających substancje chemiczne.',
                                        'Gorących kąpieli w wannie, wizyty w jacuzzi czy saunie.',
                                        'Czynności, które nasilają pocenie się lub podnoszą temperaturę ciała.',
                                        'Wystawiania na słońce lub opalanie skóry po zabiegu. Należy nałożyć na skórę kosmetyk z filtrem SPF 45 lub wyższym, aby zapobiec zmianie kolorytu skóry.',
                                        'Intensywnego szorowania oraz używania kosmetyków uszczających na obszarze zabiegu.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Vectus™ gwarantuje</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Skuteczne zabiegi',
                                        'Krótki czas zabiegów',
                                        'Bezpieczeństwo i komfort',
                                        '100% satysfakcji pacjenta'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: świeża opalenizna, ciąża, laktacja, przerwana ciągłość naskórka, epilepsja, przyjmowanie leków, w tym ziół fotouczulających, terapia retinoidami (witamina A), przyjmowanie leków obniżających krzepliwość krwi, bielactwo, cukrzyca, bliznowce, aktywne infekcje skórne, rozrusznik serca, niedawno przebyte zabiegi chirurgiczne.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='proposed-technology'>
                            <Box className='card-wrapper technology-proposed'>
                                {technology.filter(item => item.designation !== 'vectus').map((item, index) => (
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

export default TechnologyVectusPartial;
