import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';

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

import { treatment, peelingMedyczny } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentPeelingMedycznyPartial = () => {
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#my-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            padding: {
                top: 50,
                bottom: 50
            }
        });

        const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, {
            type: 'below'
        });

        lightbox.init(captionPlugin);
    }, []);

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
                                <Link to='/treatment/cosmetology' aria-current='page'>
                                    <Box>Kosmetologia</Box>
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
                                <Link to='/treatment/cosmetology' aria-current='page'>
                                    Kosmetologia
                                </Link>
                                <Typography>
                                    Peeling medyczny
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Peeling medyczny
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Peelingi chemiczne to <strong>kondycjonujące</strong> i <strong>rewitalizujące</strong> skórę zabiegi dermokosmetyczne. W zależności od zastosowanego preparatu zabiegi oferują <strong>różne efekty terapeutyczne</strong>; tj. oczyszczające i przeciwtrądzikowe, regenerujące i przeciwzmarszczkowe, rozjaśniające i redukujące przebarwienia.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={peelingMedyczny.images[0].src}
                                        imageAlt={peelingMedyczny.images[0].alt}
                                        imageAuthor={peelingMedyczny.images[0].author}
                                        imageHref={peelingMedyczny.images[0].href}
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
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Efekty zabiegu
                                </Typography>
                                <Box className="pswp-gallery" id='my-gallery'>
                                    {peelingMedyczny.effects.map((item, index) => (
                                        <a key={`my-gallery-${index}`}
                                            href={item.original.src}
                                            data-pswp-width={item.original.width}
                                            data-pswp-height={item.original.height}
                                            data-cropped='true'
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Box className='box'>
                                                <LazyLoadImage
                                                    src={item.thumbnail.src}
                                                    alt={item.alt}
                                                    height='100%'
                                                    width='100%'
                                                    effect='blur'
                                                />
                                                <span className="pswp-caption-content">
                                                    {item.description}
                                                </span>
                                            </Box>
                                        </a>
                                    ))}
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
                                        .filter(item => item.treatment.includes('peeling-medyczny'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/cosmetology/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'cosmetology')
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
                                        .filter(item => item.specialization.includes('cosmetology'))
                                        .filter(item => item.treatment !== 'peeling-medyczny')
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

export default Page(TreatmentPeelingMedycznyPartial);
