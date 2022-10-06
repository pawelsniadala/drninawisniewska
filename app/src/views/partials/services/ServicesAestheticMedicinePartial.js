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
// import CardTeamProposed from '../../../components/CardTeamProposed';
import CardTechnology from '../../../components/CardTechnology';

import { services, aestheticMedicine } from '../../../data/services';
import { technology } from '../../../data/technology';
// import { team } from '../../../data/team';

// import CardProposed from '../components/CardProposed';

const ServicesAestheticMedicinePartial = () => {
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
                <Box className='view-header services-aesthetic-medicine'>
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
                                    Medycyna estetyczna
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Medycyna estetyczna
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Toksyna botulinowa
                                </Typography>
                                <Typography className='paragraph'>
                                    Toksyna botulinowa, produkowana przez bakterie Clostridium Botulinum, znana jest powszechnie  pod  nazwami handlowymi jak Botox® czy Azzalure®. To jedna z najbardziej popularnych metod redukcji zmarszczek mimicznych, które pojawiają się w związku z  powtarzającymi się skurczami mięśni twarzy. Zabieg  pozwala  szybko spłycić  zmarszczki  mimiczne i wygładzić skórę. Wstrzyknięcie małej dawki leku w wybrane mięśnie twarzy likwiduje problemy wywoływane przez kurczenie się mięśni takie jak zmarszczki mimiczne czy  nadmierna kurczliwość.
                                </Typography>
                                <Box marginBottom={3} marginTop={3}>
                                    <LazyLoadImage
                                        height={'100%'}
                                        width={'100%'}
                                        src={aestheticMedicine.image}
                                        alt='Remote working'
                                        effect='blur'
                                        style={{
                                            objectFit: 'cover',
                                            borderRadius: 8,
                                            width: '100%',
                                            height: '100%',
                                            maxHeight: '400px',
                                        }}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    Toksynę botulinową warto wykorzystać w celu:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'redukcji zmarszczek - zmarszczki poprzeczne czoła, zmarszczka między brwiami, zmarszczki wokół oczu',
                                        'redukcji zmarszczek dolnej części twarzy - "bruzdy marionetki", na szyi czy brodzie',
                                        'korekcji opadającego nosa',
                                        'leczenia nadpotliwości pach i dłoni',
                                        'leczenie bruksizmu - patologiczne tarcie zębów żuchwy o zęby szczęki, nasilające się nocą',
                                        'korekty opadającego kącika ust oraz opadającej powieki',
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Toksyna botulinowa powoduje zahamowanie uwalniania acetylocholiny - neuroprzekaźnika odpowiedzialnego za przekaźnictwo impulsów między nerwami a mięśniami. Blokuje więc tzw. synapsy nerwowo-mięśniowe, uniemożliwiając skurcz porażonego mięśnia.
                                </Typography>
                                <Typography className='paragraph'>
                                    Pierwsze efekty jej działania pojawiają się już  po kilku dniach od podania, a pełen efekt jest  widoczny do 2 tygodni. Należy pamiętać że efekt działania może pojawiać się niesymetrycznie - dlatego ważne jest aby poczekać na efekt końcowy. Efekt przeciwzmarszczkowy utrzymuje się średnio przez 3 do 7 miesięcy i jest uzależniony od indywidualnych cech organizmu.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Zalecenia pozabiegowe:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'w ciągu pierwszych 4 godzin po zabiegu nie kłaść się ani nie pochylać głowy',
                                        'nie masować miejsc wkłucia',
                                        'nie spożywać alkoholu w pierwszej dobie po zabiegu',
                                        'nie odbywać podróży samolotem w pierwszej dobie po zabiegu',
                                        'nie wykonywać intensywnej aktywności fizycznej w pierwszej dobie po zabiegu',
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Alluzience®
                                </Typography>
                                <Typography className='paragraph'>
                                    Nasz Klinika dysponuje również pierwszym na polskim rynku płynnym neuromodulatorem Alluzience®. Preparat nazywany "botoksem PREMIUM" to płynny neuromodulator BoNT-A.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Alluzience® ABO Liquid od innych preparatów toksyny botulinowej odróżnia między innymi:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'szybkość działania - preparat zaczyna działać od razu, od momentu wstrzyknięcia, a efekty jej działania pojawiają się z czasem',
                                        'ługość działania',
                                        'brak środków konserwujących, laktozy, białka ludzkiego czy zwierzęcego co znacząco obniża potencjał alergizujący preparatu'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: nadwrażliwość na substancje preparatu, infekcje w polu zabiegowym, miastenia rzekomoporaźna, zespół Lamberta-Eatona, stwardnienie boczne zanikowe, wszelkie zaburzenia przewodnictwa nerwowo-mięśniowego.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Osocze bogatopłytkowe
                                </Typography>
                                <Typography className='paragraph'>
                                    Osocze bogatopłytkowe uzyskuje się z krwi własnej pacjenta poprzez podwójne odwirowanie substancji, które stanowią elementy morfotyczne krwi. Podczas odwirowywania krwi pobranej bezpośrednio przed zabiegiem zostają oddzielone krwinki czerwone oraz białe od płytek krwi. Osocze bogatopłytkowe uzyskuje się z standardowego poboru krwi. Po odwirowaniu zyskuje się płynny składnik krwi o niezwykłych i pożądanych przez nas właściwościach. Aby wprowadzić go pod skórę pacjenta wykorzystuje się mezoterapię, czyli ostrzykiwanie za pomocą bardzo cienkich igieł. Najczęściej ostrzykiwaniu osoczem poddawane są policzki, linia żuchwy, czoło, powieki oraz okolice oczu. Jednak osocze bogatopłytkowe przynosi również świetne rezultaty w poprawie wyglądu skóry szyi i dekoltu, ramion i dłoni oraz owłosionej skóry głowy.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Wskazania:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'rewitalizacja skóry twarzy',
                                        'skóra zmęczona, bez napięcia',
                                        'niejednolity kolor',
                                        'skóra wysuszona, wiotka, pozbawiona blask',
                                        'oznaki starzenia się skóry',
                                        'fałdy',
                                        'zmarszczki',
                                        'zapadnięta skóra',
                                        'zmniejszona gęstość skóry',
                                        'przebyte zabiegi medycyny estetycznej',
                                        'regeneracja skóry',
                                        'przyspieszenie gojenia',
                                        'łysienie androgenowe i inne',
                                        'rozstępy',
                                        'blizny zanikowe',
                                        'blizny po cięciu cesarskim',
                                        'blizny potrądzikowe'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: nadwrażliwość na substancje preparatu, infekcje w polu zabiegowym, miastenia rzekomoporaźna, zespół Lamberta-Eatona, stwardnienie boczne zanikowe, wszelkie zaburzenia przewodnictwa nerwowo-mięśniowego.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Mezoterapia igłowa
                                </Typography>
                                <Typography className='paragraph'>
                                    Mezoterapia igłowa to przede wszystkim głębokie nawilżenie skóry. Zabieg polega na bezpośrednim podaniu małych dawek substancji biologicznie czynnej śródskórnie lub podskórnie w miejsca, które chcemy poddać zabiegowi. Mezoterapia igłowa pobudza również mikrokrążenie, co stymuluje komórki do produkcji nowych włókien kolagenowych. W efekcie uzyskujemy odświeżoną, napiętą skórę.
                                </Typography>
                                <Typography className='paragraph'>
                                    Mezoterapia igłowa wykorzystuje dwa różne mechanizmy działania. Pierwszym z nich jest  ogniskowe gojenie się skóry i jej samoregeneracja po licznych nakłuciach, do których dochodzi w trakcie zabiegu. Drugim zaś jest efekt działania substancji wstrzykiwanych w skórę. Wprowadzany lek bądź inna substancja aktywna nadaje zabiegowi dodatkowych ukierunkowanych właściwości.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Wskazania:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'spadek nawilżenia skóry',
                                        'profilaktyka przeciwstarzeniowa skóry',
                                        'objawy starzenia się skóry',
                                        'fotostarzenie',
                                        'drobne linie oraz zmarszczki',
                                        'utrata jędrności, elastyczności, blasku skóry',
                                        'cienie i zmarszczki wokół oczu',
                                        'przebarwienia',
                                        'łojotok ',
                                        'rozszerzone pory',
                                        'osłabione włosy',
                                        'wypadanie włosów i łysienie',
                                        'cellulit'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: ciąża i laktacja, aktywne infekcje wirusowe lub bakteryjne, nadciśnienie tętnicze, choroby autoimmunologiczne, stany zapalne, uczulenie na stosowanesubstancje, zażywanie antykoagulantów, zażywanie doustnych kortykosteroidów, poważna egzema, łuszczyca, niestabilna cukrzyca, czynna choroba nowotworowa oraz okres do 5 lat od wyleczenia.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Biostymulator tkankowy Juvenus
                                </Typography>
                                <Typography className='paragraph'>
                                    Juvenus to preparat na bazie polimeryzowanych polinukleotydów. Żel ten składa się z polideoksyrybonukleotydów (PDRN), mieszaniny deoksyrybonukleotydów o masie cząsteczkowej do 1500 kDa, tworzących długi łańcuch polinukelotydowy. Łańcuch polinukleotydowy wiąże cząsteczki wody i służy jako wymiatacz wolnych rodników. W ten sposób powstaje idealne środowisko dla wzrostu fibroblastów, przy jednoczesnym wspieraniu ich biochemicznego działania - produkcji kolagenu i elastyny. Dzięki temu skóra staje się jędrniejsza i bardziej nawilżona.
                                </Typography>
                                <Typography className='paragraph'>
                                    Juvenus to doskonała linia produktów do iniekcji o działaniu przeciwstarzeniowym. Został specjalnie stworzony do zabiegów na różne problemy skóry twarzy i ciała, dając natychmiastowe efekty. Ma działanie nawilżające i antyoksydacyjne w wyniku czego buduje optymalne środowisko dla wzrostu fibroblastów, co prowadzi do poprawy elastyczności skóry.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Właściwości biochemiczne:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Efekt antyoksydacyjny - Polinukleotydy działają jak wymiatacz wolnych rodników. Dzięki swojej makrocząsteczkowej budowie polinukleotydy wiążą wolne rodniki, co stanowi o ich funkcji ochronnej. Makrocząsteczki są metabolitami enzymatycznej degradacji cząsteczek polinukleotydów.',
                                        'Nawilżenie - Hydrofilowa i polianionowa struktura umożliwia PDRN wiązanie cząsteczek wody, co powoduje intensywne nawilżenie tkanek. Cząsteczki wody wypełniają przestrzenie śródskórne i sprawiają, że skóra staje się jędrniejsza i bardziej nawilżona.',
                                        'Wzrost fibroblastów - Silne nawilżenie i działanie antyoksydacyjne przyczyniają się do stworzenia optymalnego środowiska fizjologicznego dla wzrostu fibroblastów, sprzyjającego przywróceniu elastyczności tkanek.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Preparat Juvenus jest dostępny w dwóch stężeniach, dzięki czemu jest idealnie dopasowany do różnych problemów i indywidualnych potrzeb pacjentów.
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'juvenus medium poprawia elastyczność skóry i chroni ją przed starzeniem.',
                                        'juvenus strong, dodatkowo, posiada znakomite właściwości liftingujące.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Biostymulator tkankowy Pluryal Silk
                                </Typography>
                                <Typography className='paragraph'>
                                    Pluryal to luksemburska marka biostymulatorów, wykorzystywanych w medycynie estetycznej w ponad 70 krajach z całego świata.
                                </Typography>
                                <Typography className='paragraph'>
                                    Dzięki wysoko oczyszczonym polinuleotydom w hybrydowym połączeniu z kwasem hialuronowym oraz mannitolem uzyskano unikalne i innowacyjne połączenie będące doskonałą  odpowiedzią na potrzeby skóry w różnym wieku. Pluryal to bezpieczne, delikatne i w pełni wchłanialne produkty, które pozwalają uzyskać naturalne efekty bez ryzyka powikłań.
                                </Typography>
                                <Typography className='paragraph'>
                                    Biostymulatory Pluryal są sterylnymi, gotowymi do użycia i wstrzykiwań, wysoko standaryzowanymi wyrobami medycznymi, zarezerwowanymi do użytku lekarzy.
                                </Typography>
                                <Typography className='paragraph'>
                                    Pluryal Silk regeneruje skórę w delikatnych obszarach wokół oczu, szyi i dekoltu.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Efekt zabiegu:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'poprawa kolorytu',
                                        'przywrócenie blasku skórze',
                                        'regeneracja delikatnych obszarów'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Wysoko oczyszczone polinukleotydy w formie frakcji naturalnych łańcuchów DNA o masie cząsteczkowej 300-500 Da, wyekstrahowanej z nasienia łososia (unikalny proces produkcyjny) zbliżony do ludzkiego DNA.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Nucleofill
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg Nucleofill to wykorzystanie innowacyjnej biotechnologii do głębokiego nawilżenia i odmłodzenia skóry. Polinukleotydy, w odróżnieniu od kwasu nukleinowego, wnikają do wnętrza komórek i pobudzają produkcję kolagenu i elastyny. Łączą się także z receptorami na powierzchni komórek, co hamuje tworzenie się mediatorów stanu zapalnego. Wiadomo, że stan zapalny jest jednym z głównych czynników odpowiedzialnych za starzenie się skóry. Polinukleotydy mają wpływ na różnicowanie fibroblastów oraz wykazują właściwości antyoksydacyjne – dzięki czemu są w stanie zahamować proces starzenia. Posiadają także zdolność wiązania wody.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Efekt zabiegu:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'ujędrniona, elastyczna skóra',
                                        'zniwelowane oznaki starzenia',
                                        'redukcja zmarszczek',
                                        'przywrócenie blasku skórze',
                                        'lifting skóry twarzy',
                                        'odświeżone spojrzenie',
                                        'głębokie nawilżenie skóry',
                                        'naturalny efekt odmłodzenia',
                                        'niwelowanie blizn i rozstępów'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    Wskazania:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'niedotleniona lub odwodniona skóra',
                                        'skóra narażona na stres oksydacyjny',
                                        'zmęczona skóra, z oznakami starzenia i widocznymi zmarszczkami',
                                        'ziemista, pozbawiona blasku cera',
                                        'wyraźna utrata jędrności twarzy',
                                        'rozstępy i blizny'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Zabieg jest stworzony dla wszystkich osób, które zauważą u siebie utratę elastyczności i objawy starzenia, ale także problemy z odpowiednim nawilżeniem skóry. Z zabiegu można skorzystać niezależnie od płci, wieku, a także rodzaju skóry.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Skinboosters
                                </Typography>
                                <Typography className='paragraph'>
                                    Jest to zabieg, który mocno pobudza fibroblasty do produkcji kolagenu typu I oraz elastyny. "Wznowienie" tej produkcji sprawi, że będziemy wyglądali młodziej, skóra będzie bardziej promienna, wygładzona, a drobne zmarszczki wypłaszczone. Na efekty głębokiej przebudowy skóry trzeba poczekać, regeneracja wymaga czasu. Pierwsze efekty widać po 3-4 tygodniach. Skinboosters oferuje także błyskawiczną poprawę wyglądu skóry - na poziomie naskórka. Z czasem, skóra wygląda po prostu coraz lepiej i zdrowiej.
                                </Typography>
                                <Typography className='paragraph'>
                                    Restylane Skinboosters to innowacyjny produkt do zabiegu rewitalizującego, odświeżającego, wygładzającego i rozjaśniającego skórę. Nie jest wypełniaczem, działa na poziomie skóry właściwej. Jego zadaniem jest stymulacja i odnowa skóry, przywrócenie optymalnego nawilżenia, elastyczności cerze oraz subtelna korekta owalu. Twarz wygląda harmonijnie i naturalnie, jest odświeżona i wypoczęta. Poza głębokim nawilżeniem i stymulacją naturalnej odnowy skóry, produkty Restylane Skinboosters zostały opracowane tak, aby odpowiadać na indywidualne potrzeby pacjentów.
                                </Typography>
                                <Typography className='paragraph'>
                                    By optymalnie i długotrwale nawilżyć skórę, Restylane rekomenduje, aby pierwsza kuracja składała się z 3 zabiegów w odstępach 3-4 tygodniowych.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Wskazania:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'zmarszczki na czole',
                                        'kurze łapki',
                                        'zmarszczki wokół ust',
                                        'rewitalizacja policzków',
                                        'ujędrnianie szyi i dekoltu',
                                        'rewitalizacja dłoni',
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Kolagen
                                </Typography>
                                <Typography className='paragraph'>
                                    Kolagen to najważniejsze włókno podporowe skóry, które sprawia, że jest ona gładka, napięta i odpowiednio nawilżona. Można porównać go do rusztowania skóry. Wraz z upływem czasu staje się on coraz słabszy i mniej stabilny. Delikatna, pozbawiona sprężystości i gęstości skóra łatwo ulega "sile grawitacji" w wyniku czego powieki opadają, a owal twarzy zniekształca się poprzez pojawienie się "chomików" i "obwisłych" podbródków. Możemy temu przeciwdziałać. Najlepszym sposobem w walce z utratą kolagenu jest uzupełnianie jego niedoborów i zniwelowanie efektów jego ubytku.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg LINERASE może być bezpiecznie stosowany bez względu na wiek, nawet u bardzo młodych osób. Cerom dojrzałym dla odzyskania utraconej jędrności i gęstości skóry, leczniczo w celu redukcji rozstępów, czy też blizn w każdym wieku.
                                </Typography>
                                <Typography className='paragraph'>
                                    Wysoki profil bezpieczeństwa i delikatność produktu LINERASE pozwala na jego zastosowanie w każdej, nawet najdelikatniejszej okolicy twarzy, jak i całego ciała. Szczególnie zalecany jest do stosowania w okolicy oczu, ust, dekolcie, szyi, brzucha i powierzchni rąk.
                                </Typography>
                                <Typography className='paragraph'>
                                    Biomateriał LINERASE stanowi nową kategorię stymulatora do rekonstrukcji i odbudowy tkanek. Tworząc optymalne warunki fizjologiczne do wytwarzania nowego kolagenu, terapia LINERASE wykazała wysoką skuteczność                  w: regeneracji i odbudowie ubytków skórnych, leczeniu blizn, rozstępów, spłyceniu drobnych zmarszczek, redukcji wiotkości skóry oraz poprawie elastyczności, sprężystości i gęstości skóry twarzy oraz całego ciała.
                                </Typography>
                            </Box>

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Nici rewitalizujące i liftingujące
                                </Typography>
                                <Typography className='paragraph'>
                                    Nici liftingujące służą do usuwania skutków starzenia grawitacyjnego. Zmiany na skórze spowodowane są utratą sprężystości, zmniejszeniem napięcia mięśni i przemieszczaniem się podskórnej tkanki tłuszczowej. Nici liftingujące są mniej kłopotliwą i inwazyjną alternatywą dla chirurgicznego liftingu.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    Efekty pozabiegowe:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'poprawa owalu twarzy - likwidacja tzw. "chomików" podwójnego podbródka',
                                        'usuwanie asymetrii łuków brwiowych, opadającej powieki',
                                        'spłycenie zmarszczek',
                                        'modelowanie ciała - opadające ramiona, pośladki, biust'
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
                                        'nici rewitalizujące (rozpuszczalne)',
                                        'nici liftingujące właściwe (nierozpuszczalne)'
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

                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header alternative'>
                                    Technologia
                                </Typography>
                                <Box className='card-wrapper technology page'>
                                    {width >= 991.98 ? (
                                        technology.filter(item => item.services.includes('aestheticMedicine')).map((item, index) => (
                                            <CardTechnology
                                                key={index}
                                                cardImage={item.imageMedium}
                                                cardTitle={item.title}
                                                cardPath={item.path}
                                                cardBadge={item.badge}
                                            />
                                        ))
                                    ) : (
                                        technology.filter(item => item.services.includes('aestheticMedicine')).map((item, index) => (
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
                                {services.length ? services.filter(item => item.title !== 'Medycyna estetyczna').map((item, index) => (
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

export default ServicesAestheticMedicinePartial;
