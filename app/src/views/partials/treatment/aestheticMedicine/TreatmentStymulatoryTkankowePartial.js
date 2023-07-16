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

import { treatment, stymulatoryTkankowe } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentStymulatoryTkankowePartial = () => {
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
                                    Stymulatory tkankowe
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Stymulatory tkankowe
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Box className='box-service'>
                                <Typography className='paragraph'>
                                    Stymulatory tkankowe to substancje lub techniki stosowane w medycynie, które mają na celu pobudzanie wzrostu, regeneracji i funkcjonowania tkanek w organizmie ludzkim. Istnieje wiele różnych rodzajów stymulatorów tkankowych, które są stosowane w zależności od konkretnego zastosowania i potrzeb pacjenta.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={stymulatoryTkankowe.images[0].src}
                                        imageAlt={stymulatoryTkankowe.images[0].alt}
                                        imageAuthor={stymulatoryTkankowe.images[0].author}
                                        imageHref={stymulatoryTkankowe.images[0].href}
                                    />
                                </Box>
                            </Box>

                            <Box className='box-service'>
                                <Typography variant={'h5'} className='header'>
                                    Kolagen
                                </Typography>
                                <Typography className='paragraph'>
                                    <strong>Kolagen</strong> to najważniejsze <strong>włókno podporowe skóry</strong>, które sprawia, że jest ona gładka, napięta i odpowiednio nawilżona. Można porównać go do <strong>rusztowania skóry</strong>. Wraz z upływem czasu staje się on coraz słabszy i mniej stabilny. Delikatna, pozbawiona sprężystości i gęstości skóra łatwo ulega "sile grawitacji" w wyniku czego powieki opadają, a owal twarzy zniekształca się poprzez pojawienie się "chomików" i "obwisłych" podbródków. Możemy temu <strong>przeciwdziałać</strong>. Najlepszym sposobem w walce z utratą kolagenu jest uzupełnianie jego niedoborów i zniwelowanie efektów jego ubytku.
                                </Typography>
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
                                        .filter(item => item.treatment.includes('stymulatory-tkankowe'))
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
                                        .filter(item => item.treatment !== 'stymulatory-tkankowe')
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
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TreatmentStymulatoryTkankowePartial);
