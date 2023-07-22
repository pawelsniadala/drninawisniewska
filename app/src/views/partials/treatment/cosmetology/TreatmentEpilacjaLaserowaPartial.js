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

import { treatment, epilacjaLaserowa } from '../../../../data/treatment';
import { team } from '../../../../data/team';
import { services } from '../../../../data/services';

const TreatmentEpilacjaLaserowaPartial = () => {
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
                                    Epilacja laserowa
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Epilacja laserowa
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper treatment-details'>
                        <Box className='treatment-description'>
                            <Box className='box-treatment'>
                                <Typography className='paragraph'>
                                    Laser diodowy to produkt amerykańskiej firmy, która stworzyła pierwszą na świecie technologię laserowego usuwania owłosienia, do dziś chronioną patentem. Urządzenie jest owocem trwających kilkanaście lat doświadczeń i badań nad udoskonaleniem systemu lasera diodowego. Wykorzystano w nim wiele nowatorskich rozwiązań decydujących o wyjątkowej skuteczności, bezpieczeństwie i komforcie pacjenta.
                                </Typography>
                                <Box className='box-image'>
                                    <Image
                                        imageSrc={epilacjaLaserowa.images[0].src}
                                        imageAlt={epilacjaLaserowa.images[0].alt}
                                        imageAuthor={epilacjaLaserowa.images[0].author}
                                        imageHref={epilacjaLaserowa.images[0].href}
                                    />
                                </Box>
                                <Typography className='paragraph'>
                                    Innowacyjny laser diodowy posiada certyfikat bezpieczeństwa i skuteczności wydany przez Amerykański Urząd ds. Żywności i Leków FDA, honorowany na całym świecie, dopuszczający je na rynek jako urządzenie do trwałego usuwania włosów.
                                </Typography>
                                <Typography className='paragraph'>
                                    Urządzenie to, jako jedyne na świecie, wyposażone jest w inteligentny czytnik poziomu melaniny w skórze – SkintelTM. W praktyce oznacza to, że przed zabiegiem czytnik przykładany jest do skóry pacjenta w miejscu, z którego usuwane będzie owłosienie. SkintelTM określa poziom melaniny i na podstawie tego odczytu ustawia w urządzeniu indywidualnie dobrane parametry zabiegu. Korzyści wynikających z tego jest kilka.
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Zabieg jest bardziej efektywny.',
                                        'Możemy zastosować wyższe parametry, jednak ciągle bezpieczne dla pacjenta.',
                                        'Wyklucza ryzyko poparzenia.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    Na skuteczność zabiegu wpływa również <strong>opatentowana technologia Photon Recycling</strong>, która polega na ponownym wykorzystaniu światła, w naturalny sposób odbijającego się od skóry. Światło, dzięki wbudowanym w głowicy lustrom, powraca , co powoduje, że impuls światła wykorzystywany jest w stu procentach radykalnie zwiększając efektywność procedury.
                                </Typography>
                                <Typography className='paragraph'>
                                    Komfort pacjenta zapewnia nie tylko bardzo szybkie tempo pracy lasera, ale również zastosowana w głowicy technologia <strong>Advanced Contact Cooling</strong>. Oznacza to, że skóra jest chłodzona przed, w trakcie i po emisji światła.
                                </Typography>
                                <Typography className='paragraph'>
                                    Kontaktowe chłodzenie powoduje, że wyczuwalność ciepła w trakcie zabiegu jest minimalna. Pozwala to zastosować wyższą energię w trakcie zabiegu, a tym samym w znaczący sposób zwiększyć jego skuteczność.
                                </Typography>
                                <Typography className='paragraph heading'>
                                    <strong>Jak się przygotować do zabiegu depilacji laserowej?</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Przed zabiegiem należy dokładnie ogolić maszynką obszar, na którym będzie przeprowadzany zabieg. Do 4 tygodni przed zabiegiem zabronione jest usuwanie włosków pęsetą, woskiem, depilatorem.',
                                        'Obszar skóry, który ma być poddany depilacji laserowej, nie może być podrażniony ani przesuszony.',
                                        '3 tygodnie przed zabiegiem epilacji Vectus należy pamiętać o odstawieniu wszelkich leków i ziół.',
                                        'Po kuracji antybiotykami należy odczekać ok. 2 tyg. od momentu odstawienia leków.',
                                        '4 tygodnie przed zabiegiem nie należy opalać skóry.',
                                        'Przed i w trakcie serii zabiegów epilacji laserowej nie wolno korzystać z solarium lub samoopalaczy.',
                                        'Tydzień przed wykonywanym zabiegiem nie należy wykonywać zabiegów złuszczających'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Zalecenia pozabiegowe</strong>
                                </Typography>
                                <Typography className='paragraph'>
                                    Bezpośrednio po zabiegu skóra może być delikatnie zaczerwieniona. <strong>Do ustąpienia zaczerwienienia zaleca się unikanie poniższych czynności</strong>.
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Nakładania kosmetyków na obszar zabiegu.',
                                        'Pływania, zwłaszcza w basenach sztucznych zawierających substancje chemiczne.',
                                        'Gorących kąpieli w wannie, wizyty w jacuzzi czy saunie.',
                                        'Czynności, które nasilają pocenie się lub podnoszą temperaturę ciała.',
                                        'Wystawiania na słońce lub opalanie skóry po zabiegu. Należy nałożyć na skórę kosmetyk z filtrem SPF 45 lub wyższym, aby zapobiec zmianie kolorytu skóry.',
                                        'Intensywnego szorowania oraz używania kosmetyków uszczających na obszarze zabiegu.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph heading'>
                                    <strong>Laser diodowy gwarantuje</strong>
                                </Typography>
                                <Grid container spacing={0.5} marginBottom={2}>
                                    {[
                                        'Skuteczne zabiegi.',
                                        'Krótki czas zabiegów.',
                                        'Bezpieczeństwo i komfort.',
                                        '100% satysfakcji pacjenta.'
                                    ].map((item, index) => (
                                        <ListBulleted
                                            key={index}
                                            ListBulletedItem={item}
                                            ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                        />
                                    ))}
                                </Grid>
                                <Typography className='paragraph'>
                                    <strong>Przeciwwskazania</strong>: świeża opalenizna, ciąża, laktacja, przerwana ciągłość naskórka, epilepsja, przyjmowanie leków, w tym ziół fotouczulających, terapia retinoidami (witamina A), przyjmowanie leków obniżających krzepliwość krwi, bielactwo, cukrzyca, bliznowce, aktywne infekcje skórne, rozrusznik serca, niedawno przebyte zabiegi chirurgiczne.
                                </Typography>
                            </Box>

                            <Box className='box-treatment'>
                                <Typography
                                    variant={'h5'}
                                    className='header alternative'>
                                    Efekty zabiegu
                                </Typography>
                                <Box className="pswp-gallery" id='my-gallery'>
                                    {epilacjaLaserowa.effects.map((item, index) => (
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
                                        .filter(item => item.treatment.includes('epilacja-laserowa'))
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
                                        .filter(item => item.treatment !== 'epilacja-laserowa')
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

export default Page(TreatmentEpilacjaLaserowaPartial);
