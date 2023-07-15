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

import { services, aestheticMedicine } from '../../../data/services';
import { team } from '../../../data/team';
// import { technology } from '../../../data/technology';

const ServicesAestheticMedicinePartial = () => {
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

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Toksyna botulinowa
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Toksyna botulinowa</strong> to jedna z najbardziej popularnych metod <strong>redukcji zmarszczek mimicznych</strong>, które pojawiają się w związku z  powtarzającymi się skurczami mięśni twarzy. Zabieg  pozwala  szybko spłycić  zmarszczki  mimiczne i wygładzić skórę. Wstrzyknięcie małej dawki leku w wybrane mięśnie twarzy likwiduje problemy wywoływane przez kurczenie się mięśni takie jak zmarszczki mimiczne czy  nadmierna kurczliwość.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={aestheticMedicine.images[0].src}
                                        imageAlt={aestheticMedicine.images[0].alt}
                                        imageAuthor={aestheticMedicine.images[0].author}
                                        imageHref={aestheticMedicine.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph heading'>
                                    <strong>Toksynę botulinową warto wykorzystać w celu</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'redukcji zmarszczek - zmarszczki poprzeczne czoła, zmarszczka między brwiami, zmarszczki wokół oczu,',
                                        'redukcji zmarszczek dolnej części twarzy - "bruzdy marionetki", na szyi czy brodzie,',
                                        'korekcji opadającego nosa,',
                                        'leczenia nadpotliwości pach i dłoni,',
                                        'leczenie bruksizmu - patologiczne tarcie zębów żuchwy o zęby szczęki, nasilające się nocą,',
                                        'korekty opadającego kącika ust oraz opadającej powieki.'
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
                                    Pierwsze efekty jej działania pojawiają się już po kilku dniach od podania, a <strong>pełen efekt jest widoczny do 2 tygodni</strong>. Należy pamiętać że efekt działania może pojawiać się niesymetrycznie - dlatego ważne jest aby poczekać na efekt końcowy. Efekt przeciwzmarszczkowy utrzymuje się średnio przez 3 do 7 miesięcy i jest uzależniony od indywidualnych cech organizmu.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Zalecenia pozabiegowe</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'w ciągu pierwszych 4 godzin po zabiegu nie kłaść się ani nie pochylać głowy,',
                                        'nie masować miejsc wkłucia,',
                                        'nie spożywać alkoholu w pierwszej dobie po zabiegu,',
                                        'nie odbywać podróży samolotem w pierwszej dobie po zabiegu,',
                                        'nie wykonywać intensywnej aktywności fizycznej w pierwszej dobie po zabiegu.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Kolagen
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Kolagen</strong> to najważniejsze <strong>włókno podporowe skóry</strong>, które sprawia, że jest ona gładka, napięta i odpowiednio nawilżona. Można porównać go do <strong>rusztowania skóry</strong>. Wraz z upływem czasu staje się on coraz słabszy i mniej stabilny. Delikatna, pozbawiona sprężystości i gęstości skóra łatwo ulega "sile grawitacji" w wyniku czego powieki opadają, a owal twarzy zniekształca się poprzez pojawienie się "chomików" i "obwisłych" podbródków. Możemy temu <strong>przeciwdziałać</strong>. Najlepszym sposobem w walce z utratą kolagenu jest uzupełnianie jego niedoborów i zniwelowanie efektów jego ubytku.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={aestheticMedicine.images[1].src}
                                        imageAlt={aestheticMedicine.images[1].alt}
                                        imageAuthor={aestheticMedicine.images[1].author}
                                        imageHref={aestheticMedicine.images[1].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Zabieg LINERASE może być bezpiecznie stosowany bez względu na wiek, nawet u bardzo młodych osób. Cerom dojrzałym dla odzyskania <strong>utraconej jędrności i gęstości skóry</strong>, leczniczo w celu <strong>redukcji rozstępów</strong>, czy też <strong>blizn</strong> w każdym wieku.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Wysoki profil bezpieczeństwa</strong> i <strong>delikatność</strong> produktu LINERASE pozwala na jego zastosowanie w każdej, nawet najdelikatniejszej okolicy twarzy, jak i całego ciała. Szczególnie zalecany jest do stosowania w okolicy oczu, ust, dekolcie, szyi, brzucha i powierzchni rąk.
                                </Typography>

                                <Typography className='paragraph'>
                                    Biomateriał LINERASE stanowi nową kategorię stymulatora do <strong>rekonstrukcji i odbudowy tkanek</strong>. Tworząc optymalne warunki fizjologiczne do wytwarzania nowego kolagenu, terapia LINERASE wykazała wysoką skuteczność w: regeneracji i odbudowie ubytków skórnych, leczeniu blizn, rozstępów, spłyceniu drobnych zmarszczek, redukcji wiotkości skóry oraz poprawie elastyczności, sprężystości i gęstości skóry twarzy oraz całego ciała.
                                </Typography>
                            </Box>

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Osocze bogatopłytkowe
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Osocze bogatopłytkowe</strong> uzyskuje się z <strong>krwi własnej pacjenta</strong> poprzez podwójne odwirowanie substancji, które stanowią elementy morfotyczne krwi. Podczas odwirowywania krwi pobranej <strong>bezpośrednio przed zabiegiem</strong> zostają oddzielone krwinki czerwone oraz białe od płytek krwi. Osocze bogatopłytkowe uzyskuje się z standardowego poboru krwi. Po odwirowaniu zyskuje się <strong>płynny składnik</strong> krwi o niezwykłych i <strong>pożądanych</strong> przez nas <strong>właściwościach</strong>. Aby wprowadzić go pod skórę pacjenta wykorzystuje się <strong>mezoterapię</strong>, czyli ostrzykiwanie za pomocą bardzo cienkich igieł. Najczęściej ostrzykiwaniu osoczem poddawane są policzki, linia żuchwy, czoło, powieki oraz okolice oczu. Jednak osocze bogatopłytkowe przynosi również świetne rezultaty w poprawie wyglądu skóry szyi i dekoltu, ramion i dłoni oraz owłosionej skóry głowy.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
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
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: nadwrażliwość na substancje preparatu, infekcje w polu zabiegowym, miastenia rzekomoporaźna, zespół Lamberta-Eatona, stwardnienie boczne zanikowe, wszelkie zaburzenia przewodnictwa nerwowo-mięśniowego.
                                </Typography>
                            </Box>

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Mezoterapia igłowa
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Mezoterapia igłowa</strong> to przede wszystkim <strong>głębokie nawilżenie skóry</strong>. Zabieg polega na bezpośrednim podaniu małych dawek substancji biologicznie czynnej śródskórnie lub podskórnie w miejsca, które chcemy poddać zabiegowi. Mezoterapia igłowa <strong>pobudza</strong> również <strong>mikrokrążenie</strong>, co <strong>stymuluje komórki</strong> do <strong>produkcji nowych włókien kolagenowych</strong>. W efekcie uzyskujemy odświeżoną, napiętą skórę.
                                </Typography>
                                <Typography className='paragraph'>
                                    Mezoterapia igłowa wykorzystuje dwa różne mechanizmy działania. Pierwszym z nich jest  <strong>ogniskowe gojenie się skóry i jej samoregeneracja po licznych nakłuciach, do których dochodzi w trakcie zabiegu</strong>. Drugim zaś jest efekt <strong>działania substancji wstrzykiwanych w skórę</strong>. Wprowadzany lek bądź inna substancja aktywna nadaje zabiegowi dodatkowych ukierunkowanych właściwości.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'spadek nawilżenia skóry,',
                                        'profilaktyka przeciwstarzeniowa skóry,',
                                        'objawy starzenia się skóry,',
                                        'fotostarzenie,',
                                        'drobne linie oraz zmarszczki,',
                                        'utrata jędrności, elastyczności, blasku skóry,',
                                        'cienie i zmarszczki wokół oczu,',
                                        'przebarwienia,',
                                        'łojotok,',
                                        'rozszerzone pory,',
                                        'osłabione włosy,',
                                        'wypadanie włosów i łysienie,',
                                        'cellulit.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: ciąża i laktacja, aktywne infekcje wirusowe lub bakteryjne, nadciśnienie tętnicze, choroby autoimmunologiczne, stany zapalne, uczulenie na stosowane substancje, zażywanie antykoagulantów, zażywanie doustnych kortykosteroidów, poważna egzema, łuszczyca, niestabilna cukrzyca, czynna choroba nowotworowa oraz okres do 5 lat od wyleczenia.
                                </Typography>
                            </Box>

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Skinboosters
                                </Typography>
                                <Typography className='paragraph'>
                                    Jest to zabieg, który mocno <strong>pobudza fibroblasty</strong> do <strong>produkcji kolagenu typu I</strong> oraz <strong>elastyny</strong>. "Wznowienie" tej produkcji sprawi, że będziemy wyglądali młodziej, skóra będzie bardziej promienna, wygładzona, a drobne zmarszczki wypłaszczone. Na efekty <strong>głębokiej przebudowy skóry</strong> trzeba poczekać, regeneracja wymaga czasu. Pierwsze efekty widać po 3-4 tygodniach. Skinboosters oferuje także <strong>błyskawiczną poprawę wyglądu skóry</strong> - na poziomie naskórka. Z czasem, skóra wygląda po prostu coraz lepiej i zdrowiej.
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Restylane Skinboosters</strong> to innowacyjny produkt do zabiegu rewitalizującego, odświeżającego, wygładzającego i rozjaśniającego skórę. <strong>Nie jest wypełniaczem</strong>, działa na poziomie skóry właściwej. Jego zadaniem jest stymulacja i odnowa skóry, przywrócenie optymalnego nawilżenia, elastyczności cerze oraz subtelna korekta owalu. Twarz wygląda harmonijnie i naturalnie, jest odświeżona i wypoczęta. Poza głębokim nawilżeniem i stymulacją naturalnej odnowy skóry, produkty Restylane Skinboosters zostały opracowane tak, aby odpowiadać na <strong>indywidualne potrzeby pacjentów</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    By optymalnie i długotrwale nawilżyć skórę, Restylane rekomenduje, aby pierwsza kuracja składała się z 3 zabiegów w odstępach 3-4 tygodniowych.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Wskazania</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'zmarszczki na czole,',
                                        'kurze łapki,',
                                        'zmarszczki wokół ust,',
                                        'rewitalizacja policzków,',
                                        'ujędrnianie szyi i dekoltu,',
                                        'rewitalizacja dłoni.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Nici rewitalizujące i liftingujące
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Nici liftingujące</strong> służą do <strong>usuwania skutków starzenia grawitacyjnego</strong>. Zmiany na skórze spowodowane są utratą sprężystości, zmniejszeniem napięcia mięśni i przemieszczaniem się podskórnej tkanki tłuszczowej. Nici liftingujące są mniej kłopotliwą i inwazyjną alternatywą dla chirurgicznego liftingu.
                                </Typography>
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
                                    {team.filter(item => item.specialization.includes('aesthetic-medicine')).map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/aesthetic-medicine/${item.specialist}`}
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
                                    {technology.filter(item => item.specialization.includes('aesthetic-medicine')).map((item) => (
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
                                    {services.filter(item => item.title !== 'Medycyna estetyczna').map((item) => (
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

export default Page(ServicesAestheticMedicinePartial);
