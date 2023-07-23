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
// import Tooltip from '@mui/material/Tooltip';
// import InfoIcon from '@mui/icons-material/Info';
// import IconButton from '@mui/material/IconButton';

import Page from '../../../../components/Page';
import Container from '../../../../components/Container';
import CardTeamProposed from '../../../../components/CardTeamProposed';
import CardProposed from '../../../../components/CardProposed';
import ListBulleted from '../../../../components/ListBulleted';
import Image from '../../../../components/Image';

import { treatment, zamykanieNaczynekILikwidacjaPrzebarwien } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial = () => {
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

    // const tooltip = (title) => (
    //     <Tooltip title={title}>
    //         <IconButton
    //             sx={{
    //                 height: '12px',
    //                 width: '12px',
    //                 marginLeft: '8px',
    //                 color: '#008AC9'
    //             }}
    //         >
    //         <InfoIcon fontSize='small' />
    //         </IconButton>
    //     </Tooltip>
    // );

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
                                    Zamykanie naczynek i likwidacja przebarwień
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Zamykanie naczynek i likwidacja przebarwień
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Platforma laserowa, którą posiadamy w naszej Klinice, to  produkt izraelskiej firmy Alma Lasers. Obsługuje różne typy zaawansowanych technologii laserowych i innych źródeł światła. Oferuje rozwiązanie na większość problemów estetycznych i dermatologicznych.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={zamykanieNaczynekILikwidacjaPrzebarwien.images[0].src}
                                        imageAlt={zamykanieNaczynekILikwidacjaPrzebarwien.images[0].alt}
                                        imageAuthor={zamykanieNaczynekILikwidacjaPrzebarwien.images[0].author}
                                        imageHref={zamykanieNaczynekILikwidacjaPrzebarwien.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    To wszechstronne narzędzie, które umożliwia łączenie różnych typów laserów i technologii podczas jednej procedury zabiegowej. To użytkownik komponuje zabieg dostosowany do potrzeb pacjenta, wybierając spośród ponad 30 głowic. Techniki łączone zdecydowanie zwiększają skuteczność zabiegów.
                                </Typography>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Wskazania
                                </Typography>
                                <Typography className='paragraph'>
                                    Laser ma ponad 65 wskazań potwierdzonych certyfikatem FDA. <strong>Do najważniejszych należą</strong>:
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'resurfacing skóry: redukcja zmarszczek, blizn, rozstępów,',
                                        'zmiany pigmentacyjne, przebarwienia,',
                                        'melasma,',
                                        'zmiany naczyniowe, trądzik różowaty, naczyniaki, teleangiektazje,',
                                        'lifting skóry,',
                                        'zamykanie naczyń.'
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
                                    Przeciwwskazania
                                </Typography>
                                <Typography className='paragraph'>
                                    Choroby nowotworowe, ciężkie i niewyrównane schorzenia ogólnoustrojowe (niewydolność nerek, cukrzyca, niestabilna choroba niedokrwienna serca), skłonność do powstawania blizn przerostowych, przyjmowanie w ostatnich 6 miesiącach retinoidów, antybiotyków, leków przeciwdepresyjnych lub immunosupresyjnych, świeża opalenizna, aktywne infekcje skóry poddawanej leczeniu, aktywna opryszczka, przyjmowanie leków światłouczulających, retinoidów, przyjmowanie ziół, stosowanie leków obniżającym krzepliwość krwi, bielactwo, łuszczyca, cukrzyca, padaczka, bliznowce, rozrusznik serca, fotodermatozy, choroby pęcherzowe skóry.
                                </Typography>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Najczęściej zadawane pytania
                                </Typography>
                                <Box className='accordion' id='accordionExample'>
                                    <Box className='accordion-item'>
                                        <h2 className='accordion-header' id='headingOne'>
                                            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='false' aria-controls='collapseOne'>
                                                <Typography className='accordion-heading'>
                                                    Jak wygląda skóra po zabiegu?
                                                </Typography>
                                            </button>
                                        </h2>
                                        <Box id='collapseOne' className='accordion-collapse collapse' aria-labelledby='headingOne'>
                                            <Box className='accordion-body'>
                                                <Typography className='paragraph'>
                                                    Głowica wyposażona jest w system chłodzenia, który zapewnia minimalny dyskomfort. Po zabiegu skóra jest zaczerwieniona i obrzęknięta, objawy znikają po 3- 4 dniach. W przypadku przebarwień, zmiany objęte leczeniem stają się ciemniejsze i do 4 tygodni rozjaśniają się.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className='accordion-item'>
                                        <h2 className='accordion-header' id='headingTwo'>
                                            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
                                                <Typography className='accordion-heading'>
                                                    Ile należy wykonać zabiegów?
                                                </Typography>
                                            </button>
                                        </h2>
                                        <Box id='collapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo'>
                                            <Box className='accordion-body'>
                                                <Typography className='paragraph'>
                                                    W zależności od rozległości zmian oraz obszaru ciała, może być konieczne wykonanie serii zabiegów. Najczęściej jest to 1 do 3 zabiegów w odstępach 4 tygodni. W praktyce często wystarcza jeden zabieg.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box className='accordion-item'>
                                        <h2 className='accordion-header' id='headingThree'>
                                            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
                                                <Typography className='accordion-heading'>
                                                    Jak dbać o skórę po zabiegu?
                                                </Typography>
                                            </button>
                                        </h2>
                                        <Box id='collapseThree' className='accordion-collapse collapse' aria-labelledby='headingThree'>
                                            <Box className='accordion-body'>
                                                <Grid container spacing={0.5}>
                                                    {[
                                                        'Do 4 tygodni po zabiegu nie wolno opalać się.',
                                                        'Bezwzględnie należy stosować najwyższą fotoprotekcję.',
                                                        'Należy unikać czynników powodujących rozszerzenie naczyń krwionośnych przez okres 7 dni (wysiłek fizyczny, sauna, basen, zmiany temperatur).',
                                                        'Należy stosować kremy i maści wg zaleceń lekarza.'
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
                                    </Box>
                                    <Box className='accordion-item'>
                                        <h2 className='accordion-header' id='headingFour'>
                                            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFour' aria-expanded='false' aria-controls='collapseFour'>
                                                <Typography className='accordion-heading'>
                                                    Jak przygotować się do zabiegu?
                                                </Typography>
                                            </button>
                                        </h2>
                                        <Box id='collapseFour' className='accordion-collapse collapse' aria-labelledby='headingFour'>
                                            <Box className='accordion-body'>
                                                <Grid container spacing={0.5}>
                                                    {[
                                                        'Po terapii doustnymi retinoidami lub izotretynoiną należy odczekać okres 6 miesięcy od momentu odstawienia.',
                                                        'Należy odstawić leki i zioła fototoksyczne i fotouczulające (dziurawiec, pokrzywa, nagietek, herbata typu figura, zioła chińskie) na 3 tygodnie przed zabiegiem.',
                                                        'Po kuracji antybiotykami należy odczekać ok. 2 tygodnie od momentu odstawienia leków.',
                                                        'Tydzień przed zabiegiem nie wykonywać depilacji o okolicy zabiegowej.',
                                                        'Obszar zabiegowy nie może być podrażniony ani przesuszony.',
                                                        'Na 4 tygodnie przed zabiegiem nie należy opalać skóry.',
                                                        'Na 2 tygodnie przed zabiegiem nie należy stosować kremów z retinoidami, innych preparat złuszczających (peelingi, kwasy owocowe, witamina A) oraz kosmetyków brązujących, samoopalaczy.'
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
                                    </Box>
                                </Box>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography variant={'h5'} className='header alternative'>
                                    Efekty zabiegu
                                </Typography>
                                <Box className="pswp-gallery" id='my-gallery'>
                                    {zamykanieNaczynekILikwidacjaPrzebarwien.effects.map((item, index) => (
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
                                        .filter(item => item.treatment.includes('zamykanie-naczynek-i-likwidacja-przebarwien'))
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
                                        .filter(item => item.treatment !== 'zamykanie-naczynek-i-likwidacja-przebarwien')
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

export default Page(TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial);
