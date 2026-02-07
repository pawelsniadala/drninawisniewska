import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import Image from '../../../components/Image';

import { services } from '../../../data/services';

import {
    ninaWisniewska,
    paulinaSot,
    konradKochan,
    klaudiaMalottki,
    katarzynaMysliwiecCzajka,
    justynaKloniecka,
    aldonaMaciag,
    milenaJuzwiak,
    tomaszMatuszewski,
    olgaLenartowiczWarakomska,
    joannaOjrzenska,
    kamilStepkowski,
    katarzynaRychlik,
    michalRadzio,
    kajaStrojnowskaLapinska,
    jadwigaDowgialloSmolarczyk,
    karolinaRakowska,
    karolPniewski,
    karolinaDobrowolska,
    danielaBorkowska,
    zanetaManko,
    paulinaPedzich,
    juliaNisio
} from '../../../data/team';

const SpecialistsDetailsPartial = () => {
    const {
        specialization,
        specialist
    } = useParams();

    const setSpecialization = () => {
        switch(specialization) {
            case 'dermatology':
                return 'Dermatologia';
            case 'aesthetic-medicine':
                return 'Medycyna estetyczna';
            case 'cosmetology':
                return 'Kosmetologia';
            case 'physioterapy':
                return 'Fizjoterapia';
            case 'cosmetic-surgery':
                return 'Chirurgia plastyczna';
            case 'allergology':
                return 'Alergologia';
            case 'usg':
                return 'USG';
            case 'endocrinology':
                return 'Endokrynologia';
            case 'gynecology':
                return 'Ginekologia';
            case 'vascular-surgery':
                return 'Chirurgia naczyniowa';
            case 'clinical-dietitian':
                return 'Dietetyka Kliniczna';
            case 'cardiology':
                return 'Kardiologia';
            case 'psychiatry':
                return 'Psychiatria';
            case 'psychology':
                return 'Psychologia';
            case 'medical-registration':
                return 'Rejestracja medyczna';
            default:
        }
    }

    const setSpecialist = () => {
        switch(specialist) {
            case 'nina-wisniewska':
                return [{ ...ninaWisniewska }];
            case 'paulina-sot':
                return [{ ...paulinaSot }];
            case 'konrad-kochan':
                return [{ ...konradKochan }];
            case 'klaudia-malottki':
                return [{ ...klaudiaMalottki }];
            case 'katarzyna-mysliwiec-czajka':
                return [{ ...katarzynaMysliwiecCzajka }];
            case 'justyna-kloniecka':
                return [{ ...justynaKloniecka }];
            case 'aldona-maciag':
                return [{ ...aldonaMaciag }];
            case 'milena-juzwiak':
                return [{ ...milenaJuzwiak }];
            case 'tomasz-matuszewski':
                return [{ ...tomaszMatuszewski }];
            case 'olga-lenartowicz-warakomska':
                return [{ ...olgaLenartowiczWarakomska }];
            case 'joanna-ojrzenska':
                return [{ ...joannaOjrzenska }];
            case 'kamil-stepkowski':
                return [{ ...kamilStepkowski }];
            case 'katarzyna-rychlik':
                return [{ ...katarzynaRychlik }];
            case 'michal-radzio':
                return [{ ...michalRadzio }];
            case 'kaja-strojnowska-lapinska':
                return [{ ...kajaStrojnowskaLapinska }];
            case 'jadwiga-dowgiallo-smolarczyk':
                return [{ ...jadwigaDowgialloSmolarczyk }];
            case 'karolina-rakowska':
                return [{ ...karolinaRakowska }];
            case 'karol-pniewski':
                return [{ ...karolPniewski }];
            case 'karolina-dobrowolska':
                return [{ ...karolinaDobrowolska }];
            case 'daniela-borkowska':
                return [{ ...danielaBorkowska }];
            case 'zaneta-manko':
                return [{ ...zanetaManko }];
            case 'paulina-pedzich':
                return [{ ...paulinaPedzich }];
            case 'julia-nisio':
                return [{ ...juliaNisio }];
            default:
        }
    }

    function getWindowDimensions() {
        const { innerWidth: width } = window;
        return { width };
    }

    function useWindowDimensions() {
        const [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

        useEffect(() => {
            function handleResize() {
                setWindowDimensions(getWindowDimensions());
            }

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

        return windowDimensions;
    }

    const { width } = useWindowDimensions();

    return (
        <Box className='team-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-aesthetic-medicine'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs className='breadcrumb back' aria-label='breadcrumb'>
                                <Link to={`${specialization === 'dermatology' ? '/team' : `/team/${specialization}`}`} aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>{setSpecialization()}</Box>
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
                                <Link to='/team' aria-current='page'>
                                    Specjaliści
                                </Link>
                                <Link
                                    to={`${specialization === 'dermatology' ? '/team' : `/team/${specialization}`}`}
                                    aria-current='page'
                                >
                                    <Box>{setSpecialization()}</Box>
                                </Link>
                                <Typography color='text.primary'>
                                    {setSpecialist()[0].name}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {setSpecialist()[0].name}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper specialists-details'>
                        <Box className='specialists-description'>
                            {setSpecialist().map((item, index) => (
                                <Box key={index}>
                                    <Box className='box-specialists' style={{ marginTop: '-12px' }}>
                                        <Typography className='paragraph' style={{ fontSize: '18px' }}>
                                            {item.speciality}
                                        </Typography>
                                    </Box>
                                    {width <= 991.98 && (
                                        <Box className='box-specialists'>
                                            <Box className='box-image'>
                                                <Image
                                                    imageSrc={item.image}
                                                    imageAlt={item.title}
                                                    imageSquare
                                                    noDescription
                                                />
                                            </Box>
                                        </Box>
                                    )}
                                    {item.summary && (
                                        <Box className='box-specialists'>
                                            <Typography
                                                variant={'h5'}
                                                className='header alternative'
                                            >
                                                Wprowadzenie
                                            </Typography>

                                            <Typography className='paragraph'>
                                                {item.summary}
                                            </Typography>
                                        </Box>
                                    )}
                                    {item.education && (
                                        <Box className='box-specialists'>
                                            <Typography
                                                variant={'h5'}
                                                className='header alternative'
                                            >
                                                Edukacja
                                            </Typography>

                                            <Typography className='paragraph'>
                                                {item.education}
                                            </Typography>
                                        </Box>
                                    )}
                                    {item.experience && (
                                        <Box className='box-specialists'>
                                            <Typography
                                                variant={'h5'}
                                                className='header alternative'
                                            >
                                                Doświadczenie
                                            </Typography>

                                            <Typography className='paragraph'>
                                                {item.experience}
                                            </Typography>
                                        </Box>
                                    )}
                                    {item.interested && (
                                        <Box className='box-specialists'>
                                            <Typography
                                                variant={'h5'}
                                                className='header alternative'
                                            >
                                                Zainteresowania
                                            </Typography>

                                            <Typography className='paragraph'>
                                                {item.interested}
                                            </Typography>
                                        </Box>
                                    )}
                                </Box>
                            ))}
                        </Box>
                        <Box className='proposed-wrapper'>
                            {width >= 991.98 && (
                                <Box className='box-proposed'>
                                    {setSpecialist().map((item, index) => (
                                        <Image
                                            key={index}
                                            imageSrc={item.image}
                                            imageAlt={item.title}
                                            imageSquare
                                            noDescription
                                        />
                                    ))}
                                </Box>
                            )}
                            {/* <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Specjalizacje
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {services
                                        .filter(item => item.specialists2.includes(specialist))
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
                            </Box> */}
                            {services.filter(item => item.specialists2.includes(specialist)).length > 0 && (
                                <Box className='box-proposed'>
                                    <Box className='header-wrapper'>
                                        <Typography className='header'>
                                            Specjalizacje
                                        </Typography>
                                    </Box>
                                    <Box className='card-wrapper'>
                                        {services
                                            .filter(item => item.specialists2.includes(specialist))
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
                            )}
                            {/* <Box className='box-proposed'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Wykonywane zabiegi
                                    </Typography>
                                </Box>
                                <Box className='card-wrapper'>
                                    {treatment
                                        .filter(item => item.specialist.includes(specialist))
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

export default Page(SpecialistsDetailsPartial);
