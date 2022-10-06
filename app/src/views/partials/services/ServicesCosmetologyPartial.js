import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Container from '../../../components/Container';
import ListBulleted from '../../../components/ListBulleted';
import CardProposed from '../../../components/CardProposed';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardTechnology from '../../../components/CardTechnology';

import { services, cosmetology } from '../../../data/services';
import { technology } from '../../../data/technology';
// import { team } from '../../../data/team';

const ServicesCosmetologyPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    }

    function useWindowDimensions() {
        const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

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
                                <Link to='/services' aria-current='page'>
                                    <NavigateBeforeIcon sx={{ mr: '3px' }} fontSize='smform' />
                                    <Box>Usługi</Box>
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
                                    Usługi
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
                                    Peelingi chemiczne to kondycjonujące i rewitalizujące skórę zabiegi dermokosmetyczne. W zależności od zastosowanego preparatu zabiegi oferują różne efekty terapeutyczne; tj. oczyszczające i przeciwtrądzikowe, regenerujące i przeciwzmarszczkowe, rozjaśniające i redukujące przebarwienia.
                                </Typography>
                                <Typography className='paragraph'>
                                    Mechanizm działania peelingów chemicznych polega na kontrolowanym złuszczania powierzchownych warstw naskórka i/lub górnych warstw skóry właściwej. Peelingi rozluźniają połączenia międzykomórkowe keratynocytów, komórek skóry, dzięki czemu dochodzi do złuszczania jej zewnętrznych warstw. Pobudzone zostają naturalne procesy gojenia a także następuje przyspieszona przebudowa skóry dzięki stymulacji skóry do syntezy nowego kolagenu i elastyny. W konsekwencji powierzchniowe defekty estetyczne zostają usunięte, a problemy zlokalizowane w głębszych warstwach zostają zniwelowane.
                                </Typography>
                                <Typography className='paragraph'>
                                    Peelingi chemiczne to zabiegi pielęgnacyjne oraz lecznicze. Stanowią dobrą opcję dla osób, które nie chcą zdecydować się na bardziej inwazyjny zabieg z medycyny estetycznej lub szukają alternatywnego leczenia skór problemowych. Zastosowanie kwasów pomaga w usunięciu przebarwień, likwidowaniu blizn i leczeniu trądziku.
                                </Typography>
                                <Typography className='paragraph'>
                                    W zależności od rodzaju, stężenia, pH zastosowanego preparatu oraz szeregu innych czynników uzyskujemy różną siłę i efekt działania. Dzięki peelingom medycznym uzyskujemy:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'oczyszczenie i dotlenienie skóry',
                                        'odmłodzenie skóry',
                                        'redukcję zmarszczek',
                                        'poprawę gęstości i elastyczności skóry',
                                        'rozjaśnienie lub całkowitą redukcję plam i przebarwień różnego pochodzenia',
                                        'wyrównanie kolorytu cery',
                                        'zwężenie porów skóry',
                                        'unormowanie pracy gruczołów łojowych',
                                        'zmniejszenie ilości wykwitów trądzikowych'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Zabiegi są bezbolesne, odczuwalne może być jedynie delikatne pieczenie lub  uczucie ściągnięcia skóry. Najlepsze efekty terapeutyczne  przynosi pełna seria zabiegowa.
                                </Typography>
                                <Typography className='paragraph'>
                                    Szerokie grono peelingów chemicznych o odmiennych właściwościach oraz różnych głębokościach działania pozwala na stworzenie zabiegów dedykowanych dla każdego pacjenta. Dodatkowo tworzone są także mieszanki kilku różnych substancji złuszczających o specyficznych właściwościach, które można wykorzystać w pielęgnacji konkretnego rodzaju cery. Nasza Klinika oferuje szeroką gamę marek i peelingów pozwalające na stworzenie procedury zabiegowej dobranej indywidualnie pod potrzeby każdej cery.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Jak należy pielęgnować skórę po zabiegu eksfoliacji chemicznej?
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'należy zachować sterylność pozabiegową (świeży ręcznik, pościel)',
                                        'miejsce zabiegowe należy smarować kremem regeneracyjnym (Solcoseryl, Zinalfate, Cicalfate) do całkowitego zagojenia',
                                        'nie należy  zdrapywania lub dodatkowego złuszczania odchodzącego naskórka',
                                        'nie należy opalać miejsca zabiegowego, należy chronić skórę przed promieniami słonecznymi (SPF50)',
                                        'należy stosować delikatny preparat do mycia (Cetaphil, emulsja PhDoctor)',
                                        'na tydzień przed zabiegiem nie stosować kremów, maści z retinolem (witamina A)',
                                        'między zabiegami nie stosować innych środków ścierających, peelingów w okolicy zabiegowej',
                                        'nie należy korzystać z sauny, jacuzzi, basenów przez najbliższe 2-3 dni',
                                        'nie należy brać długich rozgrzewających kąpieli bezpośrednio po zabiegu, zalecany szybki letni prysznic',
                                        'należy ograniczyć zabawę ze zwierzętami domowymi by nie nadkazić skóry'
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
                                    Nasza Klinika oferuje:
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Kwas salicylowy</strong> - dedykowany cerze trądzikowej, tłustej i mieszanej, wykazuje działanie antybakteryjne, intensywne działanie keratolityczne i regulujące wydzielanie sebum; wskazania: łojotok, trądzik zapalny, tendencja do wyprysków, zaskórniki, przetłuszczanie się skóry, nadmierna rogowacenie, rozszerzone pory.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Kwas migdałowy</strong> - peeling całoroczny, dedykowany skórom wrażliwym z problemami trądzikowymi oraz mieszanym, stymuluje syntezę kolagenu i proteoglikanów, wspiera proces odmładzania skóry; wskazania: rozświetlenie skóry, fotostarzenie, wygładzenie powierzchni skóry, redukcja drobnych zmarszczek, ujędrnienie i uelastycznienie skóry, przebarwienia, cera łojotokowa, zaskórniki.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Kwas mlekowy</strong> - dedykowany cerom suchym i wrażliwym, działa odmładzająco, stymuluje produkcję nowego kolagenu i glikozaminoglikanów wchodzących w skład macierzy skóry, zapewnia naturalne działanie nawilżające i stymuluje syntezę ceramidów w naskórku, poprawiając funkcje barierowe skóry; wskazanie: przesuszenie, zaburzona bariera lipidowa skóry, starzenie, utrata jędrności, trądzik różowaty, rozstępy.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>TCA</strong> - samoneutralizujący się peeling na bazie kwasu trójchlorooctowego do terapii zmian związanych z procesem starzenia się skóry, zmian pigmentacyjnych, trądzikowych i powierzchownych blizn potrądzikowych; wskazania: blizny, rozstępy, objawy starzenia.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Azelan</strong> - peeling o właściwościach antybakteryjnych, przeciwzapalnych, regulujących wydzielanie sebum, keratolitycznych i komedolitycznych, zalecany szczególnie do terapii trądziku w różnych fazach skóra naczyniowa trądzik różowaty trądzik pospolity skóra wrażliwa, przebarwienia pozapalne przeciwgrzybiczy przeciwzapalny łojotok rogowacenie każdy trądzik.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Melanostop</strong> - peeling o działaniu depigmentującym, którego złożona formuła przyspiesza odnowę naskórka w celu eliminacji powierzchniowo nagromadzonej melaniny, zapewnia widoczną poprawę kolorytu i kondycji skóry, rozjaśnia istniejące przebarwienia oraz zapobiega powstawaniu kolejnych; wskazania: przebarwienia pozapalne, plamy starcze, melasma, przebarwienia posłoneczne i fotostarzenie.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Retix C Eye</strong> - całoroczny, rewitalizujący zabieg na skórę okolicy oczu, dzięki specjalnej molekule retinolu, nie powoduje podrażnień, ani złuszczania, a dzięki obecności kwasu ferulowego i floretyny, które wykazują właściwości fotoprotekcji; wskazania: zmarszczki okolicy oczu, tzw. kurze łapki, cienie i przebarwienia okolicy oczu.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Architect Peel</strong> - zabieg bazujący na właściwościach kwasów huminowych, dedykowany dla skóry z problemem rozszerzających się porów, wygładzają cerę i pobudzają produkcję kolagenu, nawilża i oczyszcza, wykazuje działanie przeciwzapalne, przeciwbakteryjne, przeciwwirusowe, wzmacniając płaszcz hydrolipidowy naskórka.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>PRX-T33</strong> - peeling biorewitalizujący skórę bez użycia igieł,  stanowi połączenie kwasu TCA, kojowego oraz nadtlenku wodoru, stosowany w celu poprawy jędrności, napięcia i rozjaśnienia skóry twarzy i ciała; wskazania: zmarszczki, utrata jędrności skóry, profilaktyka przeciwstarzeniowa, rozstępy, blizny a także w profilaktyce przeciwstarzeniowej, wyrównanie kolorytu skóry, przebarwienia, melasma, zmiany trądzikowe.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Ferulic Peel</strong> - zabieg przeznaczony do silnej stymulacji przeciwstarzeniowej i ochrony antyoksydacyjnej skóry, formuła produktu bazuje na kwasie ferulowym, floretynie i proretinolu, z dodatkiem kwasu mlekowego, cytrynowego i jabłkowego, chroni i regeneruje DNA komórek, zapobiega powstawaniu hiperpigmentacji posłonecznych, pobudza remodeling kolagenu; wskazania: przebarwienia, oznaki starzenia i profilaktyka przeciwstarzeniowa, skóra pozbawiona blasku, fotostarzenie.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Nomelan Cafeico</strong> - wieloskładnikowy, innowacyjny peeling medyczny, dedykowany niwelowaniu przebarwień różnego pochodzenia oraz odmładzaniu skóry; wskazania: przebarwienia pozapalne, piegi, melasma, plamy soczewicowate, cera trądzikowa, blizny, rozstępy, utrata jędrności, zmarszczki,  przebarwienia.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>A.C. Solution</strong> - unikalne połączenie substancji czynnych zostało opracowane specjalnie w celu skorygowania głównych objawów trądziku, takich jak zaskórniki, grudki i krostki; wskazania: stany zapalne skóry, łojotok, hiperkeratoza, trądzik.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>C.R. Complex</strong> - aktywny kompleks niwelujący chroniczne zaczerwienienie i wykazujący działanie antybakteryjne; wskazania: trądzik różowaty, skóra naczyniowa, skłonność do chronicznego rumienia.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>A.G.E. Solution</strong> - skuteczne rozwiązania w leczeniu typowych oznak starzenia, zostały specjalnie opracowane jako zaawansowane zabiegi resurfacingu skóry; wskazania: fotostarzenie, przebarwienia posłoneczne, fotostarzenie, zmarszczki, utrata jędrności skóry, matowa poszarzała cera.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header alternative'>
                                    Technologia
                                </Typography>
                                <Box className='card-wrapper technology page'>
                                    {width >= 991.98 ? (
                                        technology.filter(item => item.services.includes('cosmetology')).map((item, index) => (
                                            <CardTechnology
                                                key={index}
                                                cardImage={item.imageMedium}
                                                cardTitle={item.title}
                                                cardPath={item.path}
                                                cardBadge={item.badge}
                                            />
                                        ))
                                    ) : (
                                        technology.filter(item => item.services.includes('cosmetology')).map((item, index) => (
                                            <CardProposed
                                                key={index}
                                                cardTitle={item.title}
                                                cardDescription={item.description}
                                                cardImage={item.imageSmall}
                                                cardPath={item.path}
                                            />
                                        ))
                                    )}
                                </Box>
                            </Box>
                        </Box>
                        <Box className='proposed-services'>
                            <Box className='card-wrapper services-proposed'>
                                {services.length ? services.filter(item => item.title !== 'Kosmetologia').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.image}
                                        cardPath={item.path}
                                    />
                                )) : (
                                    <Box>Brak danych</Box>
                                )}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default ServicesCosmetologyPartial;
