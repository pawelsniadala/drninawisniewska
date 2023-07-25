import React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { treatment, platkoweTestyKontaktowe } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        borderBottom: '1px solid rgba(224, 224, 224, 0.65)',
        padding: '12px 16px',
        lineHeight: 1.25,
        whiteSpace: 'nowrap',
        color: '#535353',
        background: 'transparent'
    },
    [`&.${tableCellClasses.body}`]: {
        borderBottom: '1px solid rgba(224, 224, 224, 0.65)',
        padding: '12px 16px',
        lineHeight: 1.25,
        fontWeight: 300,
        color: '#535353',
        background: 'transparent'
    }
}));

const StyledTableRow = styled(TableRow)(() => ({
    '&:last-child td, &:last-child th': {
        border: 0,
    }
}));

const Table1 = () => {
    function createData(num, substance, amount, petal, occurrence) {
        return { num, substance, amount, petal, occurrence };
    }

    const rows = [
        createData('01', 'Siarczan niklu', 200, 106, 'biżuteria, elementy odzieży (guziki, zamki, klamry, haftki itp.), klamki, nożyczki, monety, przybory kuchenne, sztućce, żywność z puszki'),
        createData('02', 'Alkohole sterolowe z lanoliny', 1000, 810, 'kremy, maści i szampony lecznicze, kosmetyki: kremy, samoopalacze, pomadki, podkłady, pudry, kremy do golenia; dom – pasty do butów i do mebli'),
        createData('03', 'Siarczan neomycyny', 600, 486, 'antybiotyk, krople i maści do oczu, kremy, aerozole'),
        createData('04', 'Dichromian potasu', 54, 44, 'preparaty antykorozyjne, farby, kleje, barwniki, wybielacze, art.fotograficzne, wyroby ceramiczne, przedmioty skórzane, nici chirurgiczne, preparaty do konserwacji drewna, odczynniki laboratoryjne, materiały budowlane, atrament, protezy dentystyczne'),
        createData('05', 'Mieszanina kain', 630, 510, 'miejscowe środki znieczulające, maści, kremy, aerozole, pasty do zębów, tabletki do ssania, roztwory'),
        createData('06', 'Mieszanina substancji zapachowych', 430, 348, 'perfumy, kosmetyki - dezodoranty, mydła, kremy, wody toaletowe, płyny po goleniu, pasty do zębów, guma do żucia, napoje, itp.'),
        createData('07', 'Kalafonia', 1200, 972, 'tworzywa sztuczne, kosmetyki, mydła, plastry, lakiery, kleje, guma do żucia, woski do depilacji, nici dentystyczne woskowane, pasty do polerowania mebli'),
        createData('08', 'Mieszanina parabenów', 100, 810, 'środki konserwujące, zastosowanie: kosmetyki - pudry, tusze, kremy, mleczka, toniki, dezodoranty, mydła, pasty do zębów; leki - maści, krople do oczu, nosa i uszu; wyroby spożywcze – majonezy, sosy, dżemy, słodycze'),
        createData('09', 'Pusty płatek', '', '', ''),
        createData('10', 'Balsam peruwiański', 800, 800, 'preparaty lecznicze: czopki, maści doodbytnicze, maści rozgrzewające (Anusol, Depulol, Hemorectal, Neo Aesculan, Pulmex, Rectosec, Rectosol), pasty do zębów, płyny do płukania ust, cement dentystyczny; kosmetyki: dezodoranty, płyny po goleniu, kremy do opalania; napoje bezalkoholowe, przyprawy, dezodoranty, odświeżacze powietrza, świece zapachowe, papierosy'),
        createData('11', 'Etylenodiaminy dichlorowodorek', 50, 41, 'emulgator, środek konserwujący, rozpuszczalnik, wybielacze, atrament'),
        createData('12', 'Chlorek kobaltu', 20, 20, 'barwnik do szkła, ceramiki, glazury, składnik farb, żywic poliestrowych, atramentu, materiałów budowlanych')
    ];

    return (
        <TableContainer className='table-container'>
            <Table className='table' size='small' aria-label='customized table'>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className='featured'>
                        Num
                    </StyledTableCell>
                    <StyledTableCell className='featured'>
                        Substancja czynna
                    </StyledTableCell>
                    <StyledTableCell className='featured'>
                        μg/cm²
                    </StyledTableCell>
                    <StyledTableCell className='featured'>
                        μg/płatek
                    </StyledTableCell>
                    <StyledTableCell>
                        Występowanie alergenów w środowisku
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.num}>
                            <StyledTableCell component='th' scope='row'>
                                {row.num}
                            </StyledTableCell>
                            <StyledTableCell component='th' scope='row'>
                                {row.substance}
                            </StyledTableCell>
                            <StyledTableCell component='th' scope='row'>
                                {row.amount}
                            </StyledTableCell>
                            <StyledTableCell component='th' scope='row'>
                                {row.petal}
                            </StyledTableCell>
                            <StyledTableCell>
                                {row.occurrence}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const Table2 = () => {
    function createData(num, substance, amount, petal, occurrence) {
        return { num, substance, amount, petal, occurrence};
    }

    const rows = [
        createData('13', 'Żywica p-tertbutylofenolowo-formaldehydowa', 45, 36, 'preparaty dentystyczne i dezynfekujące, dezodoranty, kleje, taśmy klejące, włókno szklane, produkty gumowe, sklejka, tworzywa sztuczne'),
        createData('14', 'Żywica epoksydowa', 50, 41, 'farby, kleje, tworzywa sztuczne, materiały wykończeniowe w budownictwie, panele podłogowe i ścienne, laminaty, lakiery, taśmy klejące'),
        createData('15', 'Mieszanina pochodnych węglowych', 250, 203, 'przedmioty wykonane z gumy, fungicydy, pestycydy'),
        createData('16', 'Mieszanina czarnej gumy', 75, 61, 'wyroby z czarnej gumy (opony, buty)'),
        createData('17', 'Cl + Me - izotiazolinon (Kathon CG)', 4, 3, 'kosmetyki: szampony, kremy, odżywki, płyny do kąpieli, mydła, żele, podkłady, samoopalacze, tusze do rzęs, cienie do powiek; detergenty, preparaty czyszczące, pasty, kleje, emulsje lateksowe'),
        createData('18', 'Quaternium-15', 100, 81, 'kosmetyki: szampony, kremy, odżywki, płyny do kąpieli, mydła, żele, podkłady, samoopalacze, tusze do rzęs, cienie do powiek; pasty, kleje, farby lateksowe, środki czystości, papierosy, dym papierosowy'),
        createData('19', 'Metylodibromoglutaronitryl', 5, '4,1', 'produkty kosmetyczne i środki higieny osobistej takie jak kremy do twarzy, balsamy do twarzy i rąk, filtry przeciwsłoneczne, lotiony dla dzieci, żele pod prysznic, żel ultradźwiękowy, papier toaletowy, szampony i olejki do masażu. Produkty przemysłowe takie jak oleje do cięcia, oleje do wiercenia, kleje i chłodziwa'),
        createData('20', 'Parafenylenodiamina', 80, 65, 'barwniki, farby do włosów, odczynniki fotograficzne, atrament, wyroby gumowe'),
        createData('21', 'Formaldehyd', 180, 146, 'kleje, farby, atrament, środki czyszczące, kosmetyki: mydła, szampony, kosmetyki kolorowe, kremy, materiały budowlane, dym palonego węgla, drewna, papierosów'),
        createData('22', 'Mieszanina pochodnych merkaptanowych', 75, 61, 'przedmioty z gumy naturalnej: paski, słuchawki, prezerwatywy, buty, rękawiczki, zabawki, węże itp.'),
        createData('23', 'Tiomersal', 7, 6, 'szczepionki i surowice, leki stosowane w leczeniu oczu, uszu i nosa, aerozole antyseptyczne'),
        createData('24', 'Mieszanina tiuramów', 27, 22, 'przedmioty z gumy: paski, słuchawki, prezerwatywy, buty, rękawiczki, zabawki, węże, kable elektryczne, pestycydy, fungicydy')
    ];

    return (
        <TableContainer className='table-container'>
            <Table size='small' aria-label='customized table'>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className='featured'>
                        Num
                    </StyledTableCell>
                    <StyledTableCell className='featured'>
                        Substancja czynna
                    </StyledTableCell>
                    <StyledTableCell className='featured'>
                        μg/cm²
                    </StyledTableCell>
                    <StyledTableCell className='featured'>
                        μg/płatek
                    </StyledTableCell>
                    <StyledTableCell>
                        Występowanie alergenów w środowisku
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.num}>
                            <StyledTableCell component='th' scope='row'>
                                {row.num}
                            </StyledTableCell>
                            <StyledTableCell component='th' scope='row'>
                                {row.substance}
                            </StyledTableCell>
                            <StyledTableCell component='th' scope='row'>
                                {row.amount}
                            </StyledTableCell>
                            <StyledTableCell component='th' scope='row'>
                                {row.petal}
                            </StyledTableCell>
                            <StyledTableCell>
                                {row.occurrence}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const Table3 = () => {
    function createData(num, substance, amount, petal, occurrence) {
        return { num, substance, amount, petal, occurrence};
    }

    const rows = [
        createData(26, 'Diazolidynylomocznik', 550, 450, 'produkty do pielęgnacji ciała, higieny i pielęgnacji włosów, kosmetyki, środki czyszczące, mydła w płynie; szampony dla zwierząt'),
        createData(27, '21-piwalan tiksokortolu', 3, '2,4', 'środki przeciwzapalne / na receptę i bez recepty, zawiesiny do nosa, na nieżyt nosa, pastylki na zapalenie gardła, zawiesina doodbytnicza na wrzodziejące zapalenie jelita grubego'),
        createData(28, 'Tiosiarczan sodowy złota', 75, 61, 'złoto w biżuterii, zawodowa ekspozycja na złoto, materiały stomatologiczne, preparaty wykorzystywane w leczeniu reumatoidalnego zapalenia stawów, pozłacane stenty wewnątrzwieńcowe'),
        createData(29, 'Imidazolidynylomocznik', 600, 490, 'produkty do pielęgnacji ciała, higieny i pielęgnacji włosów, kosmetyki, środki czyszczące, mydła w płynie, preparaty nawilżające'),
        createData(30, 'Budezonid', 1, '0,81', 'środki przeciwzapalne, kremy, balsamy, maści i pudry, krople do uszu, nosa i oczu, leki wziewne, tabletki i zastrzyki, zawiesina doodbytnicza (leczenie zapalenia okrężnicy)'),
        createData(31, '17-maślan hydrokortyzonu', 20, 16, 'leki o działaniu miejscowym dostępne bez recepty (OTC) i na receptę'),
        createData(32, 'Merkaptobenzotiazol', 75, 61, 'stosowany do produkcji przedmiotów z kauczuku naturalnego, kauczuku butylowego, nitrylu lub neoprenu: produkty przemysłowe i ochronne takie jak buty, kleje, zatyczki, gogle, maty, słuchawki, maski, respiratory, fartuchy, rękawice, węże, rurki, izolacje i folie, produkty biurowe takie jak gumki, gumki do ścierania, maty i rękawiczki użytkowe, sprzęt medyczny taki jak rękawiczki medyczne i użytkowe, maski, prześcieradła, znieczulenie, sprzęt, fartuchy i materiały jednorazowe, sprzęt sportowy i artykuły gospodarstwa domowego takie jak rękawiczki, stroje kąpielowe, zabawki, pianki, buty, maski, rakiety i uchwyty do kijów'),
        createData(33, 'Bacytracyna', 600, 490, 'stosowana jako antybiotyk do leczenia pooperacyjnego i pielęgnacji ran. Jest to często miejscowy środek pierwszego rzutu w przypadku wielu urazów skóry i dermatoz, a także chorób oczu i uszu'),
        createData(34, 'Partenolid', 3, '2,4', 'występuje naturalnie w tysiącach roślin, w tym w stokrotkach i magnolii'),
        createData(35, 'Błękit zawiesinowy 106', 50, 41, 'używany jako barwnik do tekstyliów. Występuje w tkaninach w kolorze ciemnoniebieskim, brązowym, czarnym, fioletowym i niektórych zielonych: octan i poliester w tekstyliach i wyściółki, pościel, odzież, nylonowe pończochy, stroje kąpielowe, rajstopy (Spandex i Lycra), welur, pieluchy dziecięce'),
        createData(36, '2-bromo-2-nitropropano-1,3-diol', 250, 200, 'używany jako środek konserwujący zapobiegający zmianom chemicznym lub działaniu drobnoustrojów: produkty kosmetyczne i do pielęgnacji ciała, leki do stosowania miejscowego')
    ];

    return (
        <TableContainer className='table-container'>
            <Table size='small' aria-label='customized table'>
                <TableHead>
                    <TableRow>
                    <StyledTableCell className='featured'>
                        Num
                    </StyledTableCell>
                    <StyledTableCell className='featured'>
                        Substancja czynna
                    </StyledTableCell>
                    <StyledTableCell className='featured'>
                        μg/cm²
                    </StyledTableCell>
                    <StyledTableCell className='featured'>
                        μg/płatek
                    </StyledTableCell>
                    <StyledTableCell>
                        Występowanie alergenów w środowisku
                    </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.num}>
                            <StyledTableCell component='th' scope='row'>
                                {row.num}
                            </StyledTableCell>
                            <StyledTableCell component='th' scope='row'>
                                {row.substance}
                            </StyledTableCell>
                            <StyledTableCell component='th' scope='row'>
                                {row.amount}
                            </StyledTableCell>
                            <StyledTableCell component='th' scope='row'>
                                {row.petal}
                            </StyledTableCell>
                            <StyledTableCell>
                                {row.occurrence}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

const TreatmentPlatkoweTestyKontaktowePartial = () => {
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
                                <Link to='/treatment/allergology' aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>Alergologia</Box>
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
                                <Link to='/treatment/allergology' aria-current='page'>
                                    Alergologia
                                </Link>
                                <Typography>
                                    Płatkowe testy kontaktowe
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Płatkowe testy kontaktowe
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Płatkowe testy kontaktowe, znane również jako testy skórne płatkowe lub testy płatkowe na alergeny, są diagnostycznym narzędziem stosowanym w medycynie w celu identyfikacji alergii kontaktowych. Są one wykorzystywane do wykrywania uczuleń skórnych, które mogą powodować reakcje alergiczne, takie jak swędzenie, zaczerwienienie, wysypka, pokrzywka czy łuszczenie się skóry.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={platkoweTestyKontaktowe.images[0].src}
                                        imageAlt={platkoweTestyKontaktowe.images[0].alt}
                                        imageAuthor={platkoweTestyKontaktowe.images[0].author}
                                        imageHref={platkoweTestyKontaktowe.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    <strong>TRUE TEST</strong> to gotowy do użycia plaster do prób prowokacyjnych. TRUE TEST przeznaczony jest do <strong>diagnostyki alergicznego kontaktowego zapalenia skóry</strong>. Nowy, ulepszony plaster jest bardziej komfortowy dla pacjenta, gdyż giętka taśma poliestrowa jest bardzo elastyczna i lepiej przylega do skóry. Każdy zestaw testów TRUE TEST składa się z trzech paneli po 12 płatków, które <strong>zawierają 35 substancji testujących</strong>.
                                </Typography>
                                <Typography className='paragraph'>
                                    Aby odczyt był najdokładniejszy plastry należy usunąć po upływie 48 godzin. Reakcje należy ocenić po usunięciu plastra i ponownie po 1-2 dniach, ponieważ w tym czasie ustępują łagodne podrażnienia skóry i rozwijają się w pełni reakcje alergiczne. Odczytu dokonujemy przy użyciu wzorca dołączonego do każdego testu. Siarczan neomycyny i parafenylenodiamina powodują czasami reakcje, które ujawniają się dopiero po 4-5 dniach od aplikacji testu. Pacjenci powinni być o tym poinformowani. Należy zweryfikować opóźnioną reakcję podczas dodatkowej wizyty u lekarza.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    W praktyce wygląda to następująco:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        '1 dzień - założenie testów na skórę pleców,',
                                        '3 dzień - zdjęcie testów w klinice i pierwsza ocena,',
                                        '5 dzień - kolejny odczyt testów.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Lista alergenów i miejsca ich występowania pacjent otrzymuje wraz z odczytem testów.
                                </Typography>
                                <Typography className='paragraph'>
                                    Lista dostępna również poniżej.
                                </Typography>
                                <Box className='accordion' id='accordionExample'>
                                    <Box className='accordion-item'>
                                        <h2 className='accordion-header' id='headingOne'>
                                            <button className='accordion-button collapsed'
                                                type='button'
                                                data-bs-toggle='collapse'
                                                data-bs-target='#collapseOne'
                                                aria-expanded='false'
                                                aria-controls='collapseOne'
                                            >
                                                <Typography className='accordion-heading'>
                                                    Panel 1.1
                                                </Typography>
                                            </button>
                                        </h2>
                                        <Box
                                            id='collapseOne'
                                            className='accordion-collapse collapse'
                                            aria-labelledby='headingOne'
                                        >
                                            <Box className='accordion-body'>
                                                <Table1 />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className='accordion-item'>
                                        <h2 className='accordion-header' id='headingTwo'>
                                            <button
                                                className='accordion-button collapsed'
                                                type='button'
                                                data-bs-toggle='collapse'
                                                data-bs-target='#collapseTwo'
                                                aria-expanded='false'
                                                aria-controls='collapseTwo'
                                            >
                                                <Typography className='accordion-heading'>
                                                    Panel 2.2
                                                </Typography>
                                            </button>
                                        </h2>
                                        <Box
                                            id='collapseTwo'
                                            className='accordion-collapse collapse'
                                            aria-labelledby='headingTwo'
                                        >
                                            <Box className='accordion-body'>
                                                <Table2 />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className='accordion-item'>
                                        <h2 className='accordion-header' id='headingThree'>
                                            <button
                                                className='accordion-button collapsed'
                                                type='button'
                                                data-bs-toggle='collapse'
                                                data-bs-target='#collapseThree'
                                                aria-expanded='false'
                                                aria-controls='collapseThree'
                                            >
                                                <Typography className='accordion-heading'>
                                                    Panel 3.3
                                                </Typography>
                                            </button>
                                        </h2>
                                        <Box
                                            id='collapseThree'
                                            className='accordion-collapse collapse'
                                            aria-labelledby='headingThree'
                                        >
                                            <Box className='accordion-body'>
                                                <Table3 />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
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
                                        .filter(item => item.treatment.includes('platkowe-testy-kontaktowe'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/allergology/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'allergology')
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
                                        .filter(item => item.specialization.includes('allergology'))
                                        .filter(item => item.treatment !== 'platkowe-testy-kontaktowe')
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

export default Page(TreatmentPlatkoweTestyKontaktowePartial);
