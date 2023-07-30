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

import { treatment, toksynaBotulinowa } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentToksynaBotulinowaPartial = () => {
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
                                    Toksyna botulinowa
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Toksyna botulinowa
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    <strong>Toksyna botulinowa</strong> to jedna z najbardziej popularnych metod <strong>redukcji zmarszczek mimicznych</strong>, które pojawiają się w związku z  powtarzającymi się skurczami mięśni twarzy. Zabieg  pozwala  szybko spłycić  zmarszczki  mimiczne i wygładzić skórę. Wstrzyknięcie małej dawki leku w wybrane mięśnie twarzy likwiduje problemy wywoływane przez kurczenie się mięśni takie jak zmarszczki mimiczne czy  nadmierna kurczliwość.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={toksynaBotulinowa.images[0].src}
                                        imageAlt={toksynaBotulinowa.images[0].alt}
                                        imageAuthor={toksynaBotulinowa.images[0].author}
                                        imageHref={toksynaBotulinowa.images[0].href}
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

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Efekty zabiegu
                                    <TooltipInfo
                                        title='Zdjęcia ukazują efekt zabiegu u konkretnego pacjenta. Efekt zabiegu może się różnić w zależności od indywidualnych cech pacjneta, liczby powtórzeń zabiegu, stosowania się pacjenta do zaleceń pozabiegowych oraz umiejętności i doświadczenia osoby przeprowadzającej zabieg.'
                                    />
                                </Typography>
                                <Box className="pswp-gallery" id='my-gallery'>
                                    {toksynaBotulinowa.effects.map((item, index) => (
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
                                        .filter(item => item.treatment.includes('toksyna-botulinowa'))
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
                                        .filter(item => item.treatment !== 'toksyna-botulinowa')
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

export default Page(TreatmentToksynaBotulinowaPartial);
