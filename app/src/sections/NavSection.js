import * as React from 'react';
import { NavLink, useLocation } from "react-router-dom";

import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '../components/Container';

import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';

import TopNav from '../components/TopNav';

import { nav } from '../data/nav';

const pages = ['Zespół', 'Dermatologia', 'Medycyna estetyczna', 'Kosmetologia', 'Cennik', 'Vectus', 'Icoone'];



// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavSection = ({ bgcolor = 'transparent' }) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    // const handleCloseUserMenu = () => {
    //     setAnchorElUser(null);
    // };

    const theme = useTheme();
    const location = useLocation();
    const scrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 58,
    });

    const linkColor = location.pathname !== '/drninawisniewska/'
        ? 'text.primary' : (location.pathname === '/drninawisniewska/' && scrollTrigger) ? 'text.primary'
        : 'common.white';

    const iconColor = location.pathname !== '/drninawisniewska/'
        ? '#505050' : (location.pathname === '/drninawisniewska/' && scrollTrigger) ? '#505050'
        : '#ffffff';

    return (
        <Box>
            <TopNav />
        <Box
            // bgcolor={bgcolor}
            // position={'relative'}
        >
            <AppBar
                sx={{
                    // top: 48,
                    // backgroundColor: scrollTrigger ? theme.palette.background.paper : bgcolor,
                    backgroundColor: '#fff',
                    // backgroundColor: 'ghostwhite',
                    // backgroundColor: scrollTrigger ? "transparent" : "transparent",
                    // backgroundColor: scrollTrigger ? '#B2A99E' : bgcolor,
                    // boxShadow:  scrollTrigger ? 'rgb(140 152 164 / 25%) 0px 3px 6px 0px' : 'none',
                    boxShadow: '1px 2px 6px rgb(0 0 0 / 4%)',
                    // boxShadow: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    position: 'relative',
                    // top: scrollTrigger ? '0' : '',
                    // left: scrollTrigger ? '0' : '',
                    // width: scrollTrigger ? '100%' : '',
                    // transition: 'background-color .3s',
                    // boxSizing: 'border-box',
                    // zIndex: '999'
                }}
            >
                <Container paddingY={0}>
                    <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        {/* <AppleIconSvg color={linkColor}/> */}
                        <Box
                            sx={{
                                mr: 3,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            {nav.navLogo.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                                >
                                    <NavLink
                                        className="nav-link"
                                        activeclassname="active"
                                        aria-current="page"
                                        onClick={handleCloseNavMenu}
                                        to={item.path}
                                    >
                                        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center'}}>
                                            <img alt="logo" height="60" src={require('../assets/nav/logo2.png')} />
                                            <Typography
                                                sx={{
                                                    font: '400 14px/20px Google Sans Text,Arial,Helvetica,sans-serif',
                                                    fontSize: '10.5px',
                                                    letterSpacing: '.3px',
                                                    fontWeight: 500,
                                                    whiteSpace: 'nowrap',
                                                    textTransform: 'uppercase',
                                                    lineHeight: "1.4",
                                                    backgroundImage: 'linear-gradient(90deg, #d09636 0%, #d9ab5a 51%, #dbb97b 100%)',
                                                    backgroundClip: 'text',
                                                    color: 'transparent',
                                                }}
                                            >
                                                Dermatologia<br/>
                                                i Medycyna estetyczna<br/>
                                                dr Nina Wiśniewska
                                            </Typography>
                                        </Box>
                                    </NavLink>
                                </Box>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
                        {/* <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                //   fontFamily: 'monospace',
                                fontWeight: 700,
                                //   letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography> */}





















                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                            }}
                        >
                            {nav.navLogo.map((item, index) => (
                                


                                <Box
                                    key={index}
                                    sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}
                                >
                                    <NavLink
                                        className="nav-link"
                                        activeclassname="active"
                                        aria-current="page"
                                        onClick={handleCloseNavMenu}
                                        to={item.path}
                                    >
                                        <Box sx={{ display: 'flex', gap: '7px', alignItems: 'center'}}>
                                            <img alt="logo" height="45" src={require('../assets/nav/logo2.png')} />
                                            {/* <Typography
                                                sx={{
                                                    font: '400 14px/20px Google Sans Text,Arial,Helvetica,sans-serif',
                                                    fontSize: '10.5px',
                                                    letterSpacing: '.3px',
                                                    fontWeight: 500,
                                                    whiteSpace: 'nowrap',
                                                    textTransform: 'uppercase',
                                                    lineHeight: "1.4",
                                                    backgroundImage: 'linear-gradient(90deg, #d09636 0%, #d9ab5a 51%, #dbb97b 100%)',
                                                    backgroundClip: 'text',
                                                    color: 'transparent',
                                                }}
                                            >
                                                Dermatologia<br/>
                                                i Medycyna estetyczna<br/>
                                                dr Nina Wiśniewska
                                            </Typography> */}
                                        </Box>
                                    </NavLink>
                                </Box>
                            ))}
                        </Box>



                        {/* phone */}
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'end',
                                gap: '20px'
                                
                            }}
                        >
                            {nav.navItem.map((item) => (
                                <li
                                    key={item.id}
                                    className="nav-item"
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                    }}
                                >
                                    <NavLink
                                        className="nav-link"
                                        activeclassname="active"
                                        aria-current="page"
                                        onClick={handleCloseNavMenu}
                                        to={item.path}
                                    >
                                        {/* <Button sx={{ my: 2, color: 'white', display: 'block' }}> */}
                                            {/* {item.title} */}
                                        {/* </Button> */}
                                        <Typography
                                            // fontWeight={openedPopoverId === id || hasActiveLink() ? 700 : 400}
                                            color={"text.primary"}
                                            // color={"#fff"}
                                            sx={{
                                                fontSize: '0.8rem',
                                                // fontFamily: '"Roboto", sans-serif',
                                                fontFamily: '"Raleway", sans-serif',
                                                textTransform: 'uppercase',
                                                fontWeight: 400,
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </NavLink>
                                </li>
                            ))}
                        </Box>
                        {/* <Box sx={{ gap: 2, display: { xs: 'none', md: 'flex' } }}>
                         
                        </Box> */}
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
        </Box>
    );
};

export default NavSection;
