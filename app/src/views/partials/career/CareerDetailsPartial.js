import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DescriptionIcon from '@mui/icons-material/Description';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ApartmentIcon from '@mui/icons-material/Apartment';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Page from '../../../components/Page';
import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';
import CardTeamProposed from '../../../components/CardTeamProposed';
import CardCareerProposed from '../../../components/CardCareerProposed';
import ListBulleted from '../../../components/ListBulleted';
import Image from '../../../components/Image';

import { career } from '../../../data/career';
import { services } from '../../../data/services';
import { team } from '../../../data/team';
import { treatment } from '../../../data/treatment';
import {
    receptionist,
    hematologist,
    dermatologist,
    urologist,
    psychiatrist,
    cosmetologist
} from '../../../data/career';

const CareerDetailsPartial = () => {
    const { profession } = useParams();

    const setProfession = () => {
        switch(profession) {
            case 'receptionist':
                return [{ ...receptionist }];
            case 'hematologist':
                return [{ ...hematologist }];
            case 'dermatologist':
                return [{ ...dermatologist }];
            case 'urologist':
                return [{ ...urologist }];
            case 'psychiatrist':
                return [{ ...psychiatrist }];
            case 'cosmetologist':
                return [{ ...cosmetologist }];
            default:
        }
    }

    // const setSpecialization = setProfession()[0].specialization;

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

    const renderIcon = (designation) => {
        const iconProps = { width: '20px', height: '20px', color: '#fff' };
        switch(designation) {
            case 'location':
                return <FmdGoodIcon {...iconProps} />;
            case 'date':
                return <DateRangeIcon {...iconProps} />
            case 'agreement':
                return <DescriptionIcon {...iconProps} />;
            case 'position':
                return <SignalCellularAltIcon {...iconProps} />;
            case 'type':
                return <TimelapseIcon {...iconProps} />
            case 'place':
                return <ApartmentIcon {...iconProps} />;
            default:
        }
    }

    // show specialists
    const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);
    const toggleShowMoreSpecialists = () => {
        setShowMoreSpecialists(prevState => !prevState);
    };
    const filteredSpecialists = team.filter(item => item.career?.includes(profession));
    const displayedSpecialists = showMoreSpecialists ? filteredSpecialists : filteredSpecialists.slice(0, 3);
    // const showAllSpecialists = `/team${setSpecialization !== 'dermatology' ? `/${setSpecialization}` : ''}`;

    // show treatments
    const [showMoreTreatments, setShowMoreTreatments] = useState(false);
    const toggleShowMoreTreatments = () => {
        setShowMoreTreatments(prevState => !prevState);
    };
    const filteredTreatments = treatment.filter(item => item.career?.includes(profession));
    const displayedTreatments = showMoreTreatments ? filteredTreatments : filteredTreatments.slice(0, 3);
    // const showAllTreatments = `/treatment${setSpecialization !== 'dermatology' ? `/${setSpecialization}` : ''}`;

    // show offers
    const [showMoreOffers, setShowMoreOffers] = useState(false);
    const toggleShowMoreOffers = () => {
        setShowMoreOffers(prevState => !prevState);
    };
    const filteredOffers = career.filter(item => item.career !== profession)
    const displayedOffers = showMoreOffers ? filteredOffers : filteredOffers.slice(0, 3);

    return (
        <Box className='team-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-aesthetic-medicine'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs className='breadcrumb back' aria-label='breadcrumb'>
                                <Link to='/career' aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>Kariera</Box>
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
                                    Kariera
                                </Link>
                                <Typography color='text.primary'>
                                    {setProfession()[0].title}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {setProfession()[0].title}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper specialists-details'>
                        <Box className='career-description'>
                            {setProfession().map((item, index) => (
                                <Box key={index}>
                                    {item.details && (
                                        <Box className='box-career' sx={{ marginBottom: '0 !important' }}>
                                            <Box className='box-details'>
                                                <Box className='details'>
                                                    {item.details.map((item, index) => (
                                                        <Box
                                                            key={index}
                                                            component={ListItem}
                                                            disableGutters
                                                            width={'auto'}
                                                            padding={width <= 991.98 ? 0 : null}
                                                            paddingTop={width > 991.98 ? 0 : null}
                                                        >
                                                            <Box
                                                                component={ListItemAvatar}
                                                                minWidth={'auto !important'}
                                                                marginRight={2}
                                                            >
                                                                <Box
                                                                    component={Avatar}
                                                                    width={40}
                                                                    height={40}
                                                                    sx={{
                                                                        backgroundColor: '#ebebeb !important',
                                                                        color: '#D29A3E',
                                                                        borderRadius: '8px'
                                                                    }}
                                                                >
                                                                    {renderIcon(item.designation)}
                                                                </Box>
                                                            </Box>
                                                            <ListItemText
                                                                className='list-item-text'
                                                                primary={item.label}
                                                                secondary={<Box>{item.value}</Box>}
                                                            />
                                                        </Box>
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Box>
                                    )}
                                    {item.images && (
                                        <Box className='box-career'>
                                            <Box className='box-image'>
                                                <Image
                                                    imageSrc={item.images[0].src}
                                                    imageAlt={item.images[0].alt}
                                                    imageAuthor={item.images[0].author}
                                                    imageHref={item.images[0].href}
                                                />
                                            </Box>
                                        </Box>
                                    )}
                                    {item.duties && (
                                        <Box className='box-career'>
                                            <Typography
                                                variant={'h5'}
                                                className='header alternative'
                                            >
                                                Twoje obowiązki
                                            </Typography>
                                            <Grid container spacing={0.5} marginBottom={2}>
                                                {item.duties.map((item, index) => (
                                                    <ListBulleted
                                                        key={index}
                                                        ListBulletedItem={item}
                                                        ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                                    />
                                                ))}
                                            </Grid>
                                        </Box>
                                    )}
                                    {item.requirements && (
                                        <Box className='box-career'>
                                            <Typography
                                                variant={'h5'}
                                                className='header alternative'
                                            >
                                                Nasze wymagania
                                            </Typography>
                                            <Grid container spacing={0.5} marginBottom={2}>
                                                {item.requirements.map((item, index) => (
                                                    <ListBulleted
                                                        key={index}
                                                        ListBulletedItem={item}
                                                        ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                                    />
                                                ))}
                                            </Grid>
                                        </Box>
                                    )}
                                    {item.offer && (
                                        <Box className='box-career'>
                                            <Typography
                                                variant={'h5'}
                                                className='header alternative'
                                            >
                                                To oferujemy
                                            </Typography>
                                            <Grid container spacing={0.5} marginBottom={2}>
                                                {item.offer.map((item, index) => (
                                                    <ListBulleted
                                                        key={index}
                                                        ListBulletedItem={item}
                                                        ListBulletedStyle={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                                    />
                                                ))}
                                            </Grid>
                                        </Box>
                                    )}
                                    <Box className='box-career'>
                                        <Typography className='paragraph'>
                                            Jeśli jesteś osobą otwartą, komunikatywną, dyspozycyjną i chciałbyś/chciałabyś pracować w prężnie rozwijającej się placówce medycznej, wyślij swoje CV (koniecznie ze zdjęciem) na adres <Typography component='a' href='mailto:info@drninawisniewska.pl' className='link'>info@drninawisniewska.pl</Typography>.
                                        </Typography>
                                        <Typography className='paragraph'>
                                            Może szukamy właśnie Ciebie. Odezwiemy się do wybranych osób.
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        <Box className='proposed-wrapper'>
                            {displayedSpecialists.length > 0 && (
                                <Box className='box-proposed'>
                                    <Box className='header-wrapper'>
                                        <Typography className='header'>
                                            Specjaliści
                                        </Typography>
                                        {/* <Link className='show-all-cards' to={showAllSpecialists}>
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
                                                cardPath={`/team/cosmetology/${item.specialist}`}
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
                            )}


                            {services
                                .filter(item => item.career === profession)
                                .map((item) => (
                                    <Box
                                        className='box-proposed'
                                        key={item.id}
                                    >
                                        <Box className='header-wrapper'>
                                            <Typography className='header'>
                                                Specjalizacja
                                            </Typography>
                                            {/* <Link className='show-all-cards' to="/services">
                                                Zobacz wszystkie
                                            </Link> */}
                                        </Box>
                                        <Box className='card-wrapper'>
                                            <CardProposed
                                                cardTitle={item.title}
                                                cardDescription={item.description}
                                                cardImage={item.image}
                                                cardPath={item.path}
                                            />
                                        </Box>
                                    </Box>
                                ))
                            }

                            {displayedTreatments.length > 0 && (
                                <Box className='box-proposed'>
                                    <Box className='header-wrapper'>
                                        <Typography className='header'>
                                            Zabiegi
                                        </Typography>
                                        {/* <Link className='show-all-cards' to={showAllTreatments}>
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
                            )}
                            {displayedOffers.length > 0 && (
                                <Box className='box-proposed'>
                                    <Box className='header-wrapper'>
                                        <Typography className='header'>
                                            Pozostałe oferty
                                        </Typography>
                                        {/* <Link className='show-all-cards' to="/career">
                                            Zobacz wszystkie
                                        </Link> */}
                                    </Box>
                                    <Box className='card-wrapper'>
                                        {displayedOffers.map((item) => (
                                            <CardCareerProposed
                                                key={item.id}
                                                cardTitle={item.title}
                                                cardLocation={item.location}
                                                cardDate={item.date}
                                                cardAgreement={item.agreement}
                                                cardPosition={item.position}
                                                cardType={item.type}
                                                cardPlace={item.place}
                                                cardPath={item.path}
                                                cardImage={item.image}
                                                cardStatus={item.status}
                                            />
                                        ))}
                                        <Fade in={filteredOffers.length > 3}>
                                            <Button
                                                className='show-more-cards'
                                                onClick={toggleShowMoreOffers}
                                                endIcon={showMoreOffers ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                            >
                                                {showMoreOffers ? 'Pokaż mniej' : 'Pokaż więcej'}
                                            </Button>
                                        </Fade>
                                    </Box>
                                </Box>
                            )}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(CareerDetailsPartial);
