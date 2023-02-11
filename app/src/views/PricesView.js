
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Container from '../components/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Page from '../components/Page';
import PricesDermatologyPartial from './partials/prices/PricesDermatologyPartial';
import PricesAestheticMedicinePartial from './partials/prices/PricesAestheticMedicinePartial';
import PricesCosmetologyPartial from './partials/prices/PricesCosmetologyPartial';
import PricesPhysioterapyPartial from './partials/prices/PricesPhysioterapyPartial';
import PricesCosmeticSurgeryPartial from './partials/prices/PricesCosmeticSurgeryPartial';
import PricesAllergologyPartial from './partials/prices/PricesAllergologyPartial';
import PricesUsgPartial from './partials/prices/PricesUsgPartial';
import PricesEndocrinologyPartial from './partials/prices/PricesEndocrinologyPartial';
import PricesGynecologyPartial from './partials/prices/PricesGynecologyPartial';
import PricesOrthopedicsPartial from './partials/prices/PricesOrthopedicsPartial';
import PricesVascularSurgeryPartial from './partials/prices/PricesVascularSurgeryPartial';
import PricesClinicalDietitianPartial from './partials/prices/PricesClinicalDietitianPartial';
import PricesRheumatologyPartial from './partials/prices/PricesRheumatologyPartial';

const PricesView = () => {
    const location = useLocation();

    const [ pricesTab, setTab ] = useState(() => {
        const pathname = window.location.pathname;

        const selectTab = (pathname) => {
            switch(pathname) {
                case '/prices':
                    return (
                        'prices-dermatology'
                    );
                case '/prices/aesthetic-medicine':
                    return (
                        'prices-aesthetic-medicine'
                    );
                case '/prices/cosmetology':
                    return (
                        'prices-cosmetology'
                    );
                case '/prices/physioterapy':
                    return (
                        'prices-physioterapy'
                    );
                case '/prices/cosmetic-surgery':
                    return (
                        'prices-cosmetic-surgery'
                    );
                case '/prices/allergology':
                    return (
                        'prices-allergology'
                    );
                case '/prices/usg':
                    return (
                        'prices-usg'
                    );
                case '/prices/endocrinology':
                    return (
                        'prices-endocrinology'
                    );
                case '/prices/gynecology':
                    return (
                        'prices-gynecology'
                    );
                case '/prices/orthopedics':
                    return (
                        'prices-orthopedics'
                    );
                case '/prices/vascular-surgery':
                    return (
                        'prices-vascular-surgery'
                    );
                case '/prices/clinical-dietitian':
                    return (
                        'prices-clinical-dietitian'
                    );
                case '/prices/rheumatology':
                    return (
                        'prices-rheumatology'
                    );
                default:
            }
        }

        return selectTab(pathname);
    });

    const renderTabContent = (photoTab) => {
        switch(photoTab) {
            case 'prices-dermatology':
                return (
                    <PricesDermatologyPartial />
                );
            case 'prices-aesthetic-medicine':
                return (
                    <PricesAestheticMedicinePartial />
                );
            case 'prices-cosmetology':
                return (
                    <PricesCosmetologyPartial />
                );
            case 'prices-physioterapy':
                return (
                    <PricesPhysioterapyPartial />
                );
            case 'prices-cosmetic-surgery':
                return (
                    <PricesCosmeticSurgeryPartial />
                );
            case 'prices-allergology':
                return (
                    <PricesAllergologyPartial />
                );
            case 'prices-usg':
                return (
                    <PricesUsgPartial />
                );
            case 'prices-endocrinology':
                return (
                    <PricesEndocrinologyPartial />
                );
            case 'prices-gynecology':
                return (
                    <PricesGynecologyPartial />
                );
            case 'prices-orthopedics':
                return (
                    <PricesOrthopedicsPartial />
                );
            case 'prices-vascular-surgery':
                return (
                    <PricesVascularSurgeryPartial />
                );
            case 'prices-clinical-dietitian':
                return (
                    <PricesClinicalDietitianPartial />
                );
            case 'prices-rheumatology':
                return (
                    <PricesRheumatologyPartial />
                );
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
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header prices'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                                <Typography color='text.primary'>
                                    Cennik
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Cennik
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper prices'>
                        <Box className='prices-navigation'>
                            <Box className='navigation-wrapper'>
                                {width >= 991.98 ? (
                                    <List className='list'>
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-dermatology'}
                                                onClick={() => setTab('prices-dermatology')}
                                            >
                                                <ListItemText className='list-item-text' primary='Dermatologia' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/aesthetic-medicine'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-aesthetic-medicine'}
                                                onClick={() => setTab('prices-aesthetic-medicine')}
                                            >
                                                <ListItemText className='list-item-text' primary='Medycyna estetyczna' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/cosmetology'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-cosmetology'}
                                                onClick={() => setTab('prices-cosmetology')}
                                            >
                                                <ListItemText className='list-item-text' primary='Kosmetologia' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/physioterapy'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-physioterapy'}
                                                onClick={() => setTab('prices-physioterapy')}
                                            >
                                                <ListItemText className='list-item-text' primary='Fizjoterapia' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/cosmetic-surgery'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-cosmetic-surgery'}
                                                onClick={() => setTab('prices-cosmetic-surgery')}
                                            >
                                                <ListItemText className='list-item-text' primary='Chirurgia plastyczna' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/allergology'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-allergology'}
                                                onClick={() => setTab('prices-allergology')}
                                            >
                                                <ListItemText className='list-item-text' primary='Alergologia' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/usg'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-usg'}
                                                onClick={() => setTab('prices-usg')}
                                            >
                                                <ListItemText className='list-item-text' primary='USG' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/endocrinology'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-endocrinology'}
                                                onClick={() => setTab('prices-endocrinology')}
                                            >
                                                <ListItemText className='list-item-text' primary='Endokrynologia' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/gynecology'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-gynecology'}
                                                onClick={() => setTab('prices-gynecology')}
                                            >
                                                <ListItemText className='list-item-text' primary='Ginekologia' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/orthopedics'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-orthopedics'}
                                                onClick={() => setTab('prices-orthopedics')}
                                            >
                                                <ListItemText className='list-item-text' primary='Ortopedia' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/vascular-surgery'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-vascular-surgery'}
                                                onClick={() => setTab('prices-vascular-surgery')}
                                            >
                                                <ListItemText className='list-item-text' primary='Chirurgia naczyniowa' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/clinical-dietitian'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-clinical-dietitian'}
                                                onClick={() => setTab('prices-clinical-dietitian')}
                                            >
                                                <ListItemText className='list-item-text' primary='Dietetyka Kliniczna' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                        <Divider className='divider' />
                                        <ListItem className='list-item'>
                                            <ListItemButton
                                                component={Link}
                                                to='/prices/rheumatology'
                                                className='list-item-button'
                                                aria-current='page'
                                                selected={pricesTab === 'prices-rheumatology'}
                                                onClick={() => setTab('prices-rheumatology')}
                                            >
                                                <ListItemText className='list-item-text' primary='Reumatologia' />
                                                <ListItemIcon className='list-item-icon'>
                                                    <KeyboardArrowRightIcon />
                                                </ListItemIcon>
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                ) : (
                                    <Tabs
                                        value={location.pathname}
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
                                            label='Dermatologia'
                                            component={Link}
                                            to={`/prices`}
                                            value={`/prices`}
                                            selected={pricesTab === 'prices-clinical-dietitian'}
                                            onClick={() => setTab('prices-dermatology')}
                                        />
                                        <Tab
                                            label='Medycyna estetyczna'
                                            component={Link}
                                            to={`/prices/aesthetic-medicine`}
                                            value={`/prices/aesthetic-medicine`}
                                            onClick={() => setTab('prices-aesthetic-medicine')}
                                        />
                                        <Tab
                                            label='Kosmetologia'
                                            component={Link}
                                            to={`/prices/cosmetology`}
                                            value={`/prices/cosmetology`}
                                            onClick={() => setTab('prices-cosmetology')}
                                        />
                                        <Tab
                                            label='Fizjoterapia'
                                            component={Link}
                                            to={`/prices/physioterapy`}
                                            value={`/prices/physioterapy`}
                                            onClick={() => setTab('prices-physioterapy')}
                                        />
                                        <Tab
                                            label='Chirurgia plastyczna'
                                            component={Link}
                                            to={`/prices/cosmetic-surgery`}
                                            value={`/prices/cosmetic-surgery`}
                                            onClick={() => setTab('prices-cosmetic-surgery')}
                                        />
                                        <Tab
                                            label='Alergologia'
                                            component={Link}
                                            to={`/prices/allergology`}
                                            value={`/prices/allergology`}
                                            onClick={() => setTab('prices-allergology')}
                                        />
                                        <Tab
                                            label='USG'
                                            component={Link}
                                            to={`/prices/usg`}
                                            value={`/prices/usg`}
                                            onClick={() => setTab('prices-usg')}
                                        />
                                        <Tab
                                            label='Endokrynologia'
                                            component={Link}
                                            to={`/prices/endocrinology`}
                                            value={`/prices/endocrinology`}
                                            onClick={() => setTab('prices-endocrinology')}
                                        />
                                        <Tab
                                            label='Ginekologia'
                                            component={Link}
                                            to={`/prices/gynecology`}
                                            value={`/prices/gynecology`}
                                            onClick={() => setTab('prices-gynecology')}
                                        />
                                        <Tab
                                            label='Ortopedia'
                                            component={Link}
                                            to={`/prices/orthopedics`}
                                            value={`/prices/orthopedics`}
                                            onClick={() => setTab('prices-orthopedics')}
                                        />
                                        <Tab
                                            label='Chirurgia naczyniowa'
                                            component={Link}
                                            to={`/prices/vascular-surgery`}
                                            value={`/prices/vascular-surgery`}
                                            onClick={() => setTab('prices-vascular-surgery')}
                                        />
                                        <Tab
                                            label='Dietetyka Kliniczna'
                                            component={Link}
                                            to={`/prices/clinical-dietitian`}
                                            value={`/prices/clinical-dietitian`}
                                            onClick={() => setTab('prices-clinical-dietitian')}
                                        />
                                        <Tab
                                            label='Reumatologia'
                                            component={Link}
                                            to={`/prices/rheumatology`}
                                            value={`/prices/rheumatology`}
                                            onClick={() => setTab('prices-rheumatology')}
                                        />
                                    </Tabs>
                                )}
                            </Box>
                        </Box>
                        <Box className='prices-tabels'>
                            <Box
                                className='tab-pane fade show active'
                                id={`pills-${pricesTab}`}
                                role='tabpanel'
                                aria-labelledby={`pills-${pricesTab}-tab`}
                            >
                                {renderTabContent(pricesTab)}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default Page(PricesView);
