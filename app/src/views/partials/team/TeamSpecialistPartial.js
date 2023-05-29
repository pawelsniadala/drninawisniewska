import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Alert from '@mui/material/Alert';
import InfoIcon from '@mui/icons-material/Info';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardTeamProposed from '../../../components/CardTeamProposed';

import {
    team,
    ninaWisniewska,
    justynaFilipek,
    paulinaBudna,
    konradKochan,
    wojciechKaszewski,
    klaudiaMalottki,
    katarzynaMysliwiecCzajka,
    justynaKloniecka,
    aldonaMaciag,
    milenaJuzwiak,
    paulinaTatara,
    tomaszMatuszewski,
    olgaLenartowiczWarakomska,
    katarzynaZbronska,
    joannaOjrzenska,
    aleksandraGorczynska,
    agataSkwerekSzewczyk,
    kamilStepkowski,
    katarzynaRychlik,
    patrykKrokwinski,
    michalRadzio
} from '../../../data/team';

const TeamSpecialistPartial = () => {
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
            case 'orthopedics':
                return 'Ortopedia';
            case 'vascular-surgery':
                return 'Chirurgia naczyniowa';
            case 'clinical-dietitian':
                return 'Dietetyka Kliniczna';
            case 'rheumatology':
                return 'Reumatologia';
            case 'cardiology':
                return 'Kardiologia';
            default:
        }
    }

    const setSpecialist = () => {
        switch(specialist) {
            case 'nina-wisniewska':
                return [{ ...ninaWisniewska }];
            case 'justyna-filipek':
                return [{ ...justynaFilipek }];
            case 'paulina-budna':
                return [{ ...paulinaBudna }];
            case 'konrad-kochan':
                return [{ ...konradKochan }];
            case 'wojciech-kaszewski':
                return [{ ...wojciechKaszewski }];
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
            case 'paulina-tatara':
                return [{ ...paulinaTatara }];
            case 'tomasz-matuszewski':
                return [{ ...tomaszMatuszewski }];
            case 'olga-lenartowicz-warakomska':
                return [{ ...olgaLenartowiczWarakomska }];
            case 'katarzyna-zbronska':
                return [{ ...katarzynaZbronska }];
            case 'joanna-ojrzenska':
                return [{ ...joannaOjrzenska }];
            case 'aleksandra-gorczynska':
                return [{ ...aleksandraGorczynska }];
            case 'agata-skwerek-szewczyk':
                return [{ ...agataSkwerekSzewczyk }];
            case 'kamil-stepkowski':
                return [{ ...kamilStepkowski }];
            case 'katarzyna-rychlik':
                return [{ ...katarzynaRychlik }];
            case 'patryk-krokwinski':
                return [{ ...patrykKrokwinski }];
            case 'michal-radzio':
                return [{ ...michalRadzio }];
            default:
        }
    }

    const teamProposed = team
        .filter(item => item.specialization.includes(specialization))
        .filter(item => item.specialist !== specialist);

    return (
        <Box className='team-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-aesthetic-medicine'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/team' aria-current='page'>
                                    <Box>Home</Box>
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
                                <Typography color='text.primary'>
                                    {setSpecialist()[0].name}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Specjaliści
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper team'>
                        <Box className='team-navigation'>
                            <Box className='navigation-wrapper specialist'>
                                <Tabs
                                    value={specialization === 'dermatology' ? `/team` : `/team/${specialization}`}
                                    variant='scrollable'
                                    scrollButtons='auto'
                                    aria-label='scrollable auto tabs example'
                                    TabIndicatorProps={{ style: { background: 'transparent' }}}
                                    sx={{
                                        [`& .${tabsClasses.scrollButtons}`]: {
                                            '&.Mui-disabled': { opacity: 0.3 },
                                        },
                                    }}
                                >
                                    <Tab
                                        label={setSpecialization()}
                                        component={Link}
                                        to={specialization === 'dermatology' ? `/team` : `/team/${specialization}`}
                                        value={specialization === 'dermatology' ? `/team` : `/team/${specialization}`}
                                    />
                                </Tabs>
                            </Box>
                        </Box>
                        <Box className='team-description'>
                            <Box className='team-details'>
                                {setSpecialist().map((item, index) => (
                                    <Box key={index}>
                                        <Card className='card-introduction'>
                                            {item.background ? (
                                                <Box
                                                    className='card-background'
                                                    component={LazyLoadImage}
                                                    height={1}
                                                    width={1}
                                                    src={item.background}
                                                    alt={item.title}
                                                    effect='blur'
                                                />
                                            ) : (
                                                <Box className='card-background-color' />
                                            )}
                                            <Box
                                                className='card-image'
                                                component={LazyLoadImage}
                                                src={item.image}
                                                alt={item.title}
                                                effect='blur'
                                            />
                                            <CardContent className='card-content'>
                                                <Typography className='card-name'>
                                                    {item.name}
                                                </Typography>
                                                <Typography className='card-speciality'>
                                                    {item.speciality}
                                                </Typography>
                                                {item.summary && (
                                                    <Typography className='card-text'>
                                                        {item.summary}
                                                    </Typography>
                                                )}
                                            </CardContent>
                                        </Card>
                                        {item.education && (
                                            <Card className='card-education'>
                                                <CardContent className='card-content'>
                                                    <Typography className='card-header'>
                                                        Wykształcenie
                                                    </Typography>
                                                    <Typography className='card-text'>
                                                        {item.education}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        )}
                                        {item.experience && (
                                            <Card className='card-experience'>
                                                <CardContent className='card-content'>
                                                    <Typography className='card-header'>
                                                        Doświadczenie
                                                    </Typography>
                                                    <Typography className='card-text'>
                                                        {item.experience}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        )}
                                        {item.interested && (
                                            <Card className='card-interested'>
                                                <CardContent className='card-content'>
                                                    <Typography className='card-header'>
                                                        Zainteresowania
                                                    </Typography>
                                                    <Typography className='card-text'>
                                                        {item.interested}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        )}
                                    </Box>
                                ))}
                            </Box>
                            <Box className='team-proposed'>
                                <Box className='card-wrapper team-proposed'>
                                    {teamProposed.length > 0 ? teamProposed.map((item) => (
                                        <CardTeamProposed
                                            key={item.id}
                                            cardTitle={item.name}
                                            cardSpeciality={item.speciality}
                                            cardExperience={item.experience ? item.experience : item.education ? item.education : <><br/><br/></> }
                                            cardImage={item.image}
                                            cardPath={`/team/${specialization}/${item.specialist}`}
                                        />
                                    )) : (
                                        <Alert
                                            className='alert-info'
                                            severity="info"
                                            icon={<InfoIcon fontSize='small' />}
                                        >
                                            Brak podobnych specjalistów
                                        </Alert>
                                    )}
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(TeamSpecialistPartial);
