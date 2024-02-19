import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeDynamicCaption from 'photoswipe-dynamic-caption-plugin';

import Breadcrumbs from '@mui/material/Breadcrumbs';
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
import Image from '../../../../components/Image';

import { plastykaPowiek } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentPlastykaPowiekPartial = () => {
    // show effects
    const [showMoreEffects, setShowMoreEffects] = useState(false);
    const toggleShowMoreEffects = () => {
        setShowMoreEffects(prevState => !prevState);
    };
    const filteredEffects = plastykaPowiek.effects;
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
                                <Link to='/treatment/cosmetic-surgery' aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>Chirurgia plastyczna</Box>
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
                                <Link to='/treatment/cosmetic-surgery' aria-current='page'>
                                    Chirurgia plastyczna
                                </Link>
                                <Typography>
                                    Plastyka powiek
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Plastyka powiek
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    <strong>Plastyka powiek</strong>, inaczej blefaroplastyka, to zabieg mający na celu usunięcie nadmiaru skóry wokół oczu. W zakres blefaroplastyki wchodzi zarówno <strong>korekta powieki górnej jak i dolnej</strong>.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={plastykaPowiek.images[0].src}
                                        imageAlt={plastykaPowiek.images[0].alt}
                                        imageAuthor={plastykaPowiek.images[0].author}
                                        imageHref={plastykaPowiek.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Zabieg przeprowadzany jest w znieczuleniu miejscowym. Bezpośrednio po zabiegu skóra jest zaczerwieniona i widoczne są delikatne punkty sublimacji. Drugiego dnia po zabiegu może pojawić się lekki obrzęk, który utrzymuje się maksymalnie cztery dni. Drobne strupki odpadają po sześciu dniach.
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
                                                    <span className='info'>{plastykaPowiek.info}</span>
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
                                        .filter(item => item.treatment.includes('plastyka-powiek'))
                                        .map((item) => (
                                            <CardTeamProposed
                                                key={item.id}
                                                cardTitle={item.name}
                                                cardSpeciality={item.speciality}
                                                cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                                cardImage={item.image}
                                                cardPath={`/team/cosmetic-surgery/${item.specialist}`}
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
                                        .filter(item => item.specialization === 'cosmetic-surgery')
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
                            {/* <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Pozostałe zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment
                                        .filter(item => item.specialization.includes('cosmetic-surgery'))
                                        .filter(item => item.treatment !== 'plastyka-powiek')
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
                            </Box> */}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TreatmentPlastykaPowiekPartial);
