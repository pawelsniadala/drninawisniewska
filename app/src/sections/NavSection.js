import * as React from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { nav } from '../data/nav';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import useScrollTrigger from '@mui/material/useScrollTrigger';
// import AdbIcon from '@mui/icons-material/Adb';
import BinanceLogoSvg from '../assets/svg/BinanceLogoSvg';



const pages = ['Zespół', 'Dermatologia', 'Medycyna estetyczna', 'Kosmetologia', 'Cennik', 'Vectus', 'Icoone'];



const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const NavSection = ({ bgcolor = 'transparent' }) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const theme = useTheme();
    const location = useLocation();
    const scrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 38,
    });

    const linkColor = location.pathname !== '/'
        ? 'text.primary' : (location.pathname === '/' && scrollTrigger) ? 'text.primary'
        : 'common.white';

    return (
        <Box bgcolor={bgcolor} position={'relative'}>
            <AppBar
                sx={{
                    top: 0,
                    backgroundColor: scrollTrigger ? theme.palette.background.paper : bgcolor,
                    boxShadow:  scrollTrigger ? 'rgb(140 152 164 / 25%) 0px 3px 6px 0px' : 'none'
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                    {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
                        {/* <AppleIconSvg color={linkColor}/> */}
                        <Box sx={{
                            mr: 3,
                            display: { xs: 'none', md: 'flex' },
                        }}>
                            {nav.navLogo.map((item) => (
                                <Box key={item.id}>
                                    <NavLink
                                        className="nav-link"
                                        activeclassname="active"
                                        aria-current="page"
                                        onClick={handleCloseNavMenu}
                                        to={item.path}
                                    >
                                        <BinanceLogoSvg />
                                    </NavLink>
                                </Box>
                            ))}
                        </Box>

                        {/* <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                //   fontFamily: 'monospace',
                                fontWeight: 700,
                                //   letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                                textTransform: "uppercase"
                            }}
                        >
                            Logo
                        </Typography> */}

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                // color={linkColor}
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
                            {nav.navLogo.map((item) => (
                                <Box key={item.id}>
                                    <NavLink
                                        className="nav-link"
                                        activeclassname="active"
                                        aria-current="page"
                                        onClick={handleCloseNavMenu}
                                        to={item.path}
                                    >
                                        <BinanceLogoSvg />
                                    </NavLink>
                                </Box>
                            ))}
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            {nav.navItem.map((item) => (
                                <li key={item.id} className="nav-item" sx={{ my: 2, color: 'white', display: 'block' }}>
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
                                            color={linkColor}
                                        >
                                            {item.title}
                                        </Typography>
                                    </NavLink>
                                </li>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                                >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};
export default NavSection;
