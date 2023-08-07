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
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';
import TooltipInfo from '../../../../components/TooltipInfo';

import { treatment, laserFrakcyjny } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentLaserFrakcyjnyPartial = () => {
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
                                <Link to='/treatment/aesthetic-medicine' aria-current='page'>
                                    <ArrowBackIcon />
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
                                    Laser frakcyjny
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Laser frakcyjny
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    <strong>Laser frakcyjny</strong> jest idealnym i sprawdzonym rozwiązaniem znajdującym zastosowanie w wielu dziedzinach medycyny. Laser pozwala na osiągnięcie bardzo dobrych efektów zabiegowych w postaci <strong>likwidacji blizn potrądzikowych</strong>, <strong>poprawy jakości skóry</strong> i <strong>wytworzenia nowych struktur kolagenu</strong>.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={laserFrakcyjny.images[0].src}
                                        imageAlt={laserFrakcyjny.images[0].alt}
                                        imageAuthor={laserFrakcyjny.images[0].author}
                                        imageHref={laserFrakcyjny.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    W porównaniu z tradycyjnymi laserami CO<sub>2</sub>, frakcjonowanie ablacyjne laserami Fons pozwala osiągnąć <strong>dużą głębokość penetracji w skórze</strong>, dając efektywne procedury zabiegowe. Dzięki wysokiej mocy i wszechstronności może być wykorzystywany w wielu wskazaniach. Wygodę i precyzję działania zapewnia siedmioprzegubowe ramię.
                                </Typography>
                                <Typography className='paragraph'>
                                    Ogromną zaletą jest <strong>bezkontaktowa praca</strong> lasera gwarantująca całkowitą czystość pola operacyjnego. Bardzo ważna jest także istotna redukcja krwawienia oraz natychmiastowa koagulacja. W trakcie wykonywania zabiegu uzyskujemy tysiące mikroskopijnych uszkodzeń tkanki, natomiast pozostałe obszary pozostają nienaruszone i to właśnie one przyspieszają odnowę zniszczonych stref skóry. Dzięki temu okres rekonwalescencji jest zredukowany do minimum przy jedoczesnym zachowaniu wysokiej efektywności terapii.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Możliwości zabiegowe</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'resurfacing skóry,',
                                        'lifting i ujędrnianie skóry,',
                                        'usuwanie blizn (potrądzikowych, pourazowych, oparzeniowych),',
                                        'likwidacja rozstępów,',
                                        'redukcja trądziku,',
                                        'usuwanie przebarwień,',
                                        'usuwanie zmarszczek,',
                                        'poprawa jakości skóry',
                                        'skuteczne efekty w niwelowaniu fotostarzenia się skóry,',
                                        'zabiegi chirurgiczne z wykorzystaniem punktowej głowicy lasera frakcyjnego',
                                        'ginekologia estetyczna.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Efekty po zabiegu laserem frakcyjnym są widoczne stopniowo po około 4 tygodniach od zabiegu. Zmiany można zaobserwować już po jednym naświetlaniu, jednak, aby osiągnąć lepsze rezultaty należy wykonać 2-4 zabiegi.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Jak przygotować się do zabiegu?</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Po terapii doustnymi retinoidami lub izotretynoiną należy odczekać okres 6 miesięcy od momentu odstawienia.',
                                        'Należy odstawić leki zioła fototoksyczne i fotouczulające (dziurawiec, pokrzywa, nagietek, herbaty odchudzające typu "figura", zioła chińskie) na 3 tygodnie przed zabiegiem.',
                                        'Po kuracji antybiotykami należy odczekać ok. 2 tygodnie od momentu odstawienia leków.',
                                        'Tydzień przed zabiegiem nie wykonywać depilacji w okolicy zabiegowej.',
                                        'Obszar zabiegowy nie może być podrażniony ani przesuszony.',
                                        'Na 4 tygodnie przed zabiegiem nie należy opalać skóry.',
                                        'Na 2 tygodnie przed zabiegiem nie należy stosować kremów z retinoidami, innych preparatów złuszczających (peelingi, kwasy owocowe, witamina A) oraz kosmetyków brązujących, samoopalaczy.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Efekty zabiegu
                                    <TooltipInfo
                                        title='Zdjęcia ukazują efekt zabiegu u konkretnego pacjenta. Efekt zabiegu może się różnić w zależności od indywidualnych cech pacjneta, liczby powtórzeń zabiegu, stosowania się pacjenta do zaleceń pozabiegowych oraz umiejętności i doświadczenia osoby przeprowadzającej zabieg.'
                                    />
                                </Typography>
                                <Box className="pswp-gallery" id='my-gallery'>
                                    {laserFrakcyjny.effects.map((item, index) => (
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
                                        .filter(item => item.treatment.includes('laser-frakcyjny'))
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
                                        .filter(item => item.treatment !== 'laser-frakcyjny')
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

export default Page(TreatmentLaserFrakcyjnyPartial);
