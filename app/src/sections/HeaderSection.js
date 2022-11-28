import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Container from '../components/Container';
import PhoneSvg from '../assets/svg/PhoneSvg';
import EmailSvg from '../assets/svg/EmailSvg';
import FacebookSvg from '../assets/svg/FacebookSvg';
import InstagramSvg from '../assets/svg/InstagramSvg';

import ClinicSvg from '../assets/svg/ClinicSvg';
import ServicesSvg from '../assets/svg/ServicesSvg';
import PricesSvg from '../assets/svg/PricesSvg';
import TeamSvg from '../assets/svg/TeamSvg';
import TechnologySvg from '../assets/svg/TechnologySvg';
import ContactSvg from '../assets/svg/ContactSvg';

const HeaderSection = () => {
    const [ state, setState ] = useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
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

    const drawerList = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className='logo'>
                <ListItem className='list-item' disablePadding>
                    <NavLink
                        className='navbar-brand text-uppercase'
                        activeclassname='active'
                        to='/'
                    >
                        <img alt='logo' height='51' src={require('../assets/header/logo.png')} />
                        <Typography className='brand-text'>
                            Dermatologia<br/>i Medycyna estetyczna<br/>dr Nina Wiśniewska
                        </Typography>
                    </NavLink>
                </ListItem>
            </List>
            {/* <Divider /> */}
            <List className='menu'>
                <ListItem disablePadding>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/clinic'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <ClinicSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Klinika' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                {/* <Divider className='divider' disablePadding/> */}
                <ListItem disablePadding>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/services'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <ServicesSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Usługi' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                {/* <Divider className='divider' disablePadding/> */}
                <ListItem disablePadding>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/prices'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <PricesSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Cennik' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                {/* <Divider className='divider' disablePadding/> */}
                <ListItem disablePadding>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/team'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <TeamSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Zespół' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                {/* <Divider className='divider' disablePadding/> */}
                <ListItem disablePadding>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/technology'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <TechnologySvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Technologia' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                {/* <Divider className='divider' disablePadding/> */}
                <ListItem disablePadding>
                    <NavLink
                        className='nav-link'
                        activeclassname='active'
                        aria-current='page'
                        to='/contact'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <ContactSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Kontakt' />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
            <Divider />
            <List className='media'>
                <ListItem disablePadding>
                    <a href='https://www.facebook.com/profile.php?id=100063736802328'
                        className='link'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <FacebookSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Facebook' />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem disablePadding>
                    <a href='https://www.instagram.com/klinikawyszkow/'
                        className='link'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <ListItemButton className='list-item-button'>
                            <ListItemIcon className='list-item-icon'>
                                <InstagramSvg width='17px' height='17px' />
                            </ListItemIcon>
                            <ListItemText className='list-item-text' primary='Instagram' />
                        </ListItemButton>
                    </a>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Box
            component='header'
            className='header-section'
        >
            <Box className='top-nav'>
                <Container className='nav-wrapper'>
                    <Box className='content-wrapper'>
                        <Box className='contact-wrapper'>
                            <Tooltip title='Zadzwoń'>
                                <a className='link'
                                    href='tel:+48450001550'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Box className='link-wrapper'>
                                        <PhoneSvg width='14px' height='14px' color='#fff' />
                                        <Typography className='link-text'>
                                            450 001 550
                                        </Typography>
                                    </Box>
                                </a>
                            </Tooltip>
                            <Tooltip title='Zadzwoń'>
                                <a className='link'
                                    href='tel:+48539968541'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Box className='link-wrapper'>
                                        <PhoneSvg width='14px' height='14px' color='#fff' />
                                        <Typography className='link-text'>
                                            539 968 541
                                        </Typography>
                                    </Box>
                                </a>
                            </Tooltip>
                            <Tooltip title='Napisz Wiadomość'>
                                <a className='link'
                                    href='mailto:info@drninawisniewska.pl'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <Box className='link-wrapper'>
                                        <EmailSvg width='14px' height='14px' color='#fff' />
                                        <Typography className='link-text'>
                                            info@drninawisniewska.pl
                                        </Typography>
                                    </Box>
                                </a>
                            </Tooltip>
                        </Box>
                        <Box className='media-wrapper'>
                            <Tooltip title='Facebook'>
                                <a className='link'
                                    href='https://www.facebook.com/profile.php?id=100063736802328'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FacebookSvg width='14px' height='14px' color='#fff' />
                                </a>
                            </Tooltip>
                            <Tooltip title='Instagram'>
                                <a className='link'
                                    href='https://www.instagram.com/klinikawyszkow/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <InstagramSvg width='14px' height='14px' color='#fff' />
                                </a>
                            </Tooltip>
                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box component='nav' className='navbar navbar-light navbar-expand-lg'>
                <Container className='container container-fluid'>
                    <NavLink
                        className='navbar-brand text-uppercase'
                        activeclassname='active'
                        to='/'
                    >
                        {width <= 991.98 ? (
                            <img alt='logo' height='51' src={require('../assets/header/logo.png')} />
                        ) : (
                            <img alt='logo' height='60' src={require('../assets/header/logo.png')} />
                        )}
                        <Typography className='brand-text'>
                            Dermatologia<br/>i Medycyna estetyczna<br/>dr Nina Wiśniewska
                        </Typography>
                    </NavLink>
                    <Box>
                        {['left'].map((anchor) => (
                            <Box key={anchor}>
                                <button className='navbar-toggler'
                                    onClick={toggleDrawer(anchor, true)}
                                    size='large'
                                >
                                    <span className='navbar-toggler-icon'></span>
                                </button>
                                <Drawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                >
                                    {drawerList(anchor)}
                                </Drawer>
                            </Box>
                        ))}
                    </Box>
                    <Box className='offcanvas offcanvas-start'
                        tabIndex='-1'
                        id='offcanvasNavbar'
                        aria-labelledby='offcanvasNavbarLabel'
                    >
                        <Box className='offcanvas-header'>
                            <h5 className='offcanvas-title'
                                id='offcanvasNavbarLabel'
                            >
                                {/* TODO */}
                            </h5>
                            <button type='button'
                                className='btn-close'
                                data-bs-dismiss='offcanvas'
                                aria-label='Close'>
                            </button>
                        </Box>
                        <Box className='offcanvas-body navbar-light' id='navbarSupportedContent'>
                            <ul className='navbar-nav'>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/clinic'
                                    >
                                        Klinika
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/services'
                                    >
                                        Usługi
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/prices'
                                    >
                                        Cennik
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/team'
                                    >
                                        Zespół
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/technology'
                                    >
                                        Technologia
                                    </NavLink>
                                </li>
                                <li className='nav-item'>
                                    <NavLink
                                        className='nav-link'
                                        activeclassname='active'
                                        aria-current='page'
                                        to='/contact'
                                    >
                                        Kontakt
                                    </NavLink>
                                </li>
                            </ul>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

export default HeaderSection;
