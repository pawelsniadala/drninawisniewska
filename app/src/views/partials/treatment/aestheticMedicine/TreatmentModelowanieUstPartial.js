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

import { treatment, modelowanieUst } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentModelowanieUstPartial = () => {
    // show specialists
    const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);
    const toggleShowMoreSpecialists = () => {
        setShowMoreSpecialists(prevState => !prevState);
    };
    const filteredSpecialists = team.filter(item => item.treatment.includes('modelowanie-ust'))
    const displayedSpecialists = showMoreSpecialists ? filteredSpecialists : filteredSpecialists.slice(0, 3);

    // show treatments
    const [showMoreTreatments, setShowMoreTreatments] = useState(false);
    const toggleShowMoreTreatments = () => {
        setShowMoreTreatments(prevState => !prevState);
    };
    const filteredTreatments = treatment.filter(item => item.specialization.includes('aesthetic-medicine')).filter(item => item.treatment !== 'modelowanie-ust');
    const displayedTreatments = showMoreTreatments ? filteredTreatments : filteredTreatments.slice(0, 3);

    // show effects
    const [showMoreEffects, setShowMoreEffects] = useState(false);
    const toggleShowMoreEffects = () => {
        setShowMoreEffects(prevState => !prevState);
    };
    const filteredEffects = modelowanieUst.effects;
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
                                    Modelowanie ust
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Modelowanie ust
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Modelowanie i powiększanie czerwieni wargowej z wykorzystaniem kwasu hialuronowego to wciąż jeden z bardziej popularnych zabiegów medycyny estetycznej.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={modelowanieUst.images[0].src}
                                        imageAlt={modelowanieUst.images[0].alt}
                                        imageAuthor={modelowanieUst.images[0].author}
                                        imageHref={modelowanieUst.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Podając preparat z kwasem hialuronowym w strategiczne miejsca jesteśmy w stanie nie tylko uwydatnić i wypełnić usta, ale także zniwelować asymetrię, zredukować dysproporcję między wargą górną a dolną oraz nawilżyć przesuszoną czerwień wargową. Kwas hialuronowy wykazuje bowiem właściwości higroskopijne, czyli wiążące wodę. Dzięki czemu usta natychmiast stają się pełniejsze, mocniej nawilżone i bardziej sprężyste.
                                </Typography>
                                <Typography className='paragraph'>
                                    Kwas hialuronowy to substancja naturalnie występującą w naszym ciele. Dzięki temu wypełniacze na bazie HA są bezpieczne dla naszego ciała. Oczywiście bezpieczeństwo zabiegu zależne jest od jego prawidłowego wykonania oraz stosowania się do zaleceń pozabiegowych. Kluczowe jest zatem zachowanie wszelkich zasad antyseptyki i higieny.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Efekty pozabiegowe</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'nadanie ustom pożądanego kształtu,',
                                        'uwydatnienie i podkreślenie czerwieni wargowej,',
                                        'skorygowanie asymetrii warg,',
                                        'poprawę struktury i kolorytu ust,',
                                        'nadanie pełnego wyglądu,',
                                        'nawilżenie czerwieni wargowej.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Efekt zabiegu utrzymuje się od 6 do 12 miesięcy w zależności od uwarunkowań genetycznych, rodzaju preparatu oraz trybu życia prowadzonego przez pacjenta.
                                </Typography>
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
                                                    <span className='info'>{modelowanieUst.info}</span>
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
                                    {/* <Link className='show-all-cards' to='/team/aesthetic-medicine'>
                                        Zobacz wszystkich
                                    </Link> */}
                                </Box>
                                <Box className='card-wrapper'>
                                    {displayedSpecialists.map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/aesthetic-medicine/${item.specialist}`}
                                        />
                                    ))}
                                    <Fade in={filteredSpecialists.length > 3}>
                                        <Button
                                            className='show-more-cards'
                                            onClick={toggleShowMoreSpecialists}
                                            endIcon={showMoreSpecialists ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            sx={{ display: filteredSpecialists.length <= 3 && 'none' }}
                                        >
                                            {showMoreSpecialists ? 'Pokaż mniej' : 'Pokaż więcej'}
                                        </Button>
                                    </Fade>
                                </Box>
                            </Box>
                            <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Specjalizacja
                                    </Typography>
                                    {/* <Link className='show-all-cards' to='/services'>
                                        Zobacz wszystkie
                                    </Link> */}
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
                                    {/* <Link className='show-all-cards' to='/treatment/aesthetic-medicine'>
                                        Zobacz wszystkie
                                    </Link> */}
                                </Box>
                                <Box className='card-wrapper'>
                                    {displayedTreatments.map((item) => (
                                        <CardProposed
                                            key={item.id}
                                            cardTitle={item.title}
                                            cardDescription={item.description}
                                            cardImage={item.images[0].src}
                                            cardPath={item.path}
                                        />
                                    ))}
                                    <Fade in={filteredTreatments.length > 3}>
                                        <Button
                                            className='show-more-cards'
                                            onClick={toggleShowMoreTreatments}
                                            endIcon={showMoreTreatments ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            sx={{ display: filteredTreatments.length <= 3 && 'none' }}
                                        >
                                            {showMoreTreatments ? 'Pokaż mniej' : 'Pokaż więcej'}
                                        </Button>
                                    </Fade>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TreatmentModelowanieUstPartial);
