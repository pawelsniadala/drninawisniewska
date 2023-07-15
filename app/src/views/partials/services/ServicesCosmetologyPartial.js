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
// import { technology } from '../../../data/technology';
import { team } from '../../../data/team';

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

                            <Box marginBottom={3}>
                            <Typography variant={'h5'} className='header'>
                                    Peeling medyczny
                                </Typography>
                                <Typography className='paragraph'>
                                    Peelingi chemiczne to <strong>kondycjonujące</strong> i <strong>rewitalizujące</strong> skórę zabiegi dermokosmetyczne. W zależności od zastosowanego preparatu zabiegi oferują <strong>różne efekty terapeutyczne</strong>; tj. oczyszczające i przeciwtrądzikowe, regenerujące i przeciwzmarszczkowe, rozjaśniające i redukujące przebarwienia.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <Image
                                        imageSrc={cosmetology.images[0].src}
                                        imageAlt={cosmetology.images[0].alt}
                                        imageAuthor={cosmetology.images[0].author}
                                        imageHref={cosmetology.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    <strong>Mechanizm działania</strong> peelingów chemicznych polega na <strong>kontrolowanym złuszczaniu</strong> powierzchownych warstw naskórka i/lub górnych warstw skóry właściwej. Peelingi rozluźniają połączenia międzykomórkowe keratynocytów, komórek skóry, dzięki czemu dochodzi do złuszczania jej zewnętrznych warstw. Pobudzone zostają naturalne procesy gojenia a także następuje przyspieszona przebudowa skóry dzięki <strong>stymulacji skóry do syntezy nowego kolagenu i elastyny</strong>. W konsekwencji powierzchniowe defekty estetyczne zostają usunięte, a problemy zlokalizowane w głębszych warstwach zostają zniwelowane.
                                </Typography>
                                <Typography className='paragraph'>
                                    Peelingi chemiczne to zabiegi <strong>pielęgnacyjne</strong> oraz <strong>lecznicze</strong>. Stanowią dobrą opcję dla osób, które nie chcą zdecydować się na bardziej inwazyjny zabieg z medycyny estetycznej lub szukają <strong>alternatywnego leczenia skór problemowych</strong>. Zastosowanie kwasów pomaga w usunięciu przebarwień, likwidowaniu blizn i leczeniu trądziku.
                                </Typography>
                                <Typography className='paragraph'>
                                    W zależności od rodzaju, stężenia, pH zastosowanego preparatu oraz szeregu innych czynników uzyskujemy różną siłę i efekt działania. Dzięki peelingom medycznym uzyskujemy:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'oczyszczenie i dotlenienie skóry,',
                                        'odmłodzenie skóry,',
                                        'redukcję zmarszczek,',
                                        'poprawę gęstości i elastyczności skóry,',
                                        'rozjaśnienie lub całkowitą redukcję plam i przebarwień różnego pochodzenia,',
                                        'wyrównanie kolorytu cery,',
                                        'zwężenie porów skóry,',
                                        'unormowanie pracy gruczołów łojowych,',
                                        'zmniejszenie ilości wykwitów trądzikowych.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Zabiegi są <strong>bezbolesne</strong>, odczuwalne może być jedynie delikatne pieczenie lub  uczucie ściągnięcia skóry. Najlepsze efekty terapeutyczne  przynosi pełna seria zabiegowa.
                                </Typography>
                                <Typography className='paragraph'>
                                    Szerokie grono peelingów chemicznych o odmiennych właściwościach oraz różnych głębokościach działania pozwala na stworzenie zabiegów dedykowanych dla każdego pacjenta. Dodatkowo tworzone są także mieszanki kilku różnych substancji złuszczających o specyficznych właściwościach, które można wykorzystać w pielęgnacji konkretnego rodzaju cery. Nasza Klinika oferuje szeroką gamę marek i peelingów pozwalające na stworzenie procedury zabiegowej dobranej indywidualnie pod potrzeby każdej cery.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Jak należy pielęgnować skórę po zabiegu eksfoliacji chemicznej?</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Należy zachować sterylność pozabiegową (świeży ręcznik, pościel).',
                                        'Miejsce zabiegowe należy smarować kremem regeneracyjnym (Solcoseryl, Zinalfate, Cicalfate) do całkowitego zagojenia.',
                                        'Nie należy zdrapywanić lub dodatkowo złuszczać odchodzącego naskórka.',
                                        'Nie należy opalać miejsca zabiegowego, należy chronić skórę przed promieniami słonecznymi (SPF50).',
                                        'Należy stosować delikatny preparat do mycia (Cetaphil, emulsja PhDoctor).',
                                        'Na tydzień przed zabiegiem nie stosować kremów, maści z retinolem (witamina A).',
                                        'Między zabiegami nie stosować innych środków ścierających, peelingów w okolicy zabiegowej.',
                                        'Nie należy korzystać z sauny, jacuzzi, basenów przez najbliższe 2-3 dni.',
                                        'Nie należy brać długich rozgrzewających kąpieli bezpośrednio po zabiegu, zalecany szybki letni prysznic.',
                                        'Należy ograniczyć zabawę ze zwierzętami domowymi by nie nadkazić skóry.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Przeciwwskazania: stany zapalne skóry, aktywne infekcje bakteryjne lub wirusowe, przerwana ciągłość naskórka, aktywna opryszczka, przyjmowanie retinoidów (a także 6 miesięcy od ostatniej dawki), fototerapia, ciąża lub karmienie piersią, bezpośrednio po depilacji,  choroby autoimmunologiczne, radioterapia, bliznowce lub blizny przerostowe, podrażniona skóra, świeża opalenizna.
                                </Typography>

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
                            {/* <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Technologia
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {technology.filter(item => item.specialization.includes('cosmetology')).map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.imageSmall}
                                            cardPath={item.path}
                                        />
                                    ))}
                                </Box>
                            </Box> */}
                            <Box className='box-proposed specialization'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostałe specjalizacje
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {services.filter(item => item.title !== 'Kosmetologia').map((item) => (
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
