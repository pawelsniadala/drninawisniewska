import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { treatment, ultradzwiekiIFalaRadiowa } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentUltradzwiekiIFalaRadiowaPartial = () => {
    // show effects
    const [showMoreEffects, setShowMoreEffects] = useState(false);
    const toggleShowMoreEffects = () => {
        setShowMoreEffects(prevState => !prevState);
    };
    const filteredEffects = ultradzwiekiIFalaRadiowa.effects;
    const displayedEffects = showMoreEffects ? filteredEffects : filteredEffects.slice(0, 3);

    // photoswipe
    useEffect(() => {
        const lightbox = new PhotoSwipeLightbox({
            gallery: '#my-gallery',
            children: 'a',
            pswpModule: () => import('photoswipe'),
            padding: { top: 50, bottom: 50 }
        });
        const captionPlugin = new PhotoSwipeDynamicCaption(lightbox, { type: 'below' });
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
                                    <ArrowBackIcon />
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
                                    Ultradzwieki i fala radiowa
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Ultradzwieki i fala radiowa
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Ultradźwięki połączone z falą radiową to zabieg, który w bezpieczny sposób redukuje cellulit i tkankę tłuszczową, niweluje wiotkość skóry oraz modeluje twarz. Dzięki połączeniu dwóch technologii intensyfikujemy efekty terapeutyczne.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={ultradzwiekiIFalaRadiowa.images[0].src}
                                        imageAlt={ultradzwiekiIFalaRadiowa.images[0].alt}
                                        imageAuthor={ultradzwiekiIFalaRadiowa.images[0].author}
                                        imageHref={ultradzwiekiIFalaRadiowa.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Ultradźwięki selektywnie niszczą błony komórkowe adipocytów, czyli komórek tłuszczowych. Następnie fala radiowa przyśpiesza metabolizm usprawniając działanie układu limfatycznego oraz usuwanie uwolnionego tłuszczu z organizmu. Radiofrekwencja pobudza również fibroblasty co skutkuje ujędrnieniem skóry w okolicy zabiegowej.
                                </Typography>
                                <Typography className='paragraph'>
                                    Zabieg ten jest <strong>alternatywą dla procedur chirurgicznych</strong>. Można przeprowadzać go w każdej okolicy ciała lub twarzy, bez pominięcia szyi, brzucha, pośladków czy ud. Już po jednorazowej procedurze kondycja skóra ulega widocznej poprawie. By osiągnąć trwałe rezultaty zalecana jest seria 5 zabiegów w odstępach dwutygodniowych.
                                </Typography>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Wskazania
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
                                        'likwidacja drugiego podbródka,',
                                        'redukcja blizn',
                                        'redukcja rozstępów.',
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
                                </Typography>
                                <Box className="pswp-gallery" id='my-gallery'>
                                    {displayedEffects.map((item, index) => (
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
                                                    <span className='description'>{item.description}</span>
                                                    <span className='info'>{ultradzwiekiIFalaRadiowa.info}</span>
                                                </span>
                                            </Box>
                                        </a>
                                    ))}
                                    <Fade in={filteredEffects.length > 3}>
                                        <Button
                                            className='show-more-cards'
                                            onClick={toggleShowMoreEffects}
                                            endIcon={showMoreEffects ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            sx={{ display: filteredEffects.length <= 3 && 'none' }}
                                        >
                                            {showMoreEffects ? 'Pokaż mniej' : 'Pokaż więcej'}
                                        </Button>
                                    </Fade>
                                </Box>
                                <Typography className='paragraph'>
                                    Zdjęcia ukazują efekt zabiegu u konkretnego pacjenta. Efekt zabiegu może się różnić w zależności od indywidualnych cech pacjneta, liczby powtórzeń zabiegu, stosowania się pacjenta do zaleceń pozabiegowych oraz umiejętności i doświadczenia osoby przeprowadzającej zabieg.
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
                                    {team
                                        .filter(item => item.treatment.includes('ultradzwieki-i-fala-radiowa'))
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
                                        .filter(item => item.treatment !== 'ultradzwieki-i-fala-radiowa')
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

export default Page(TreatmentUltradzwiekiIFalaRadiowaPartial);
