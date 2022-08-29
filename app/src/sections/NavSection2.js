import { useState } from "react";
import { NavLink } from "react-router-dom";
import HomeSvg from "../assets/nav/HomeSvg";
import CastSvg from "../assets/nav/CastSvg";
import CreatorSvg from "../assets/nav/CreatorSvg";
import PhotoSvg from "../assets/nav/PhotoSvg";
import ContactSvg from "../assets/nav/ContactSvg";
import FacebookSvg from "../assets/nav/FacebookSvg";
import YouTubeSvg from "../assets/nav/YouTubeSvg";
import SpotifySvg from "../assets/nav/SpotifySvg";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Container from '../components/Container'
import logo from '../assets/nav/logo.png';

const NavSection2 = () => {
    const [ state, setState ] = useState({
        left: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List className="home">
                <ListItem disablePadding>
                    <NavLink
                        className="nav-link"
                        activeclassname="active"
                        aria-current="page"
                        to="/"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeSvg />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
            <List className="menu">
                <ListItem disablePadding>
                    <NavLink
                        className="nav-link"
                        activeclassname="active"
                        aria-current="page"
                        to="/cast"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <CastSvg />
                            </ListItemIcon>
                            <ListItemText primary="Obsada" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink
                        className="nav-link"
                        activeclassname="active"
                        aria-current="page"
                        to="/creator"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <CreatorSvg />
                            </ListItemIcon>
                            <ListItemText primary="Twórcy" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink
                        className="nav-link"
                        activeclassname="active"
                        aria-current="page"
                        to="/photo"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <PhotoSvg />
                            </ListItemIcon>
                            <ListItemText primary="Zdjęcia" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
                <ListItem disablePadding>
                    <NavLink
                        className="nav-link"
                        activeclassname="active"
                        aria-current="page"
                        to="/contact"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <ContactSvg />
                            </ListItemIcon>
                            <ListItemText primary="Kontakt" />
                        </ListItemButton>
                    </NavLink>
                </ListItem>
            </List>
            <Divider />
            <List className="media">
                <ListItem disablePadding>
                    <a href="https://www.facebook.com/Radiostory-104327058985831/"
                        className="facebook"
                        title="Facebook"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <FacebookSvg />
                            </ListItemIcon>
                            <ListItemText primary="Facebook" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem disablePadding>
                    <a href="https://www.youtube.com/"
                        className="youtube"
                        title="Youtube"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <YouTubeSvg />
                            </ListItemIcon>
                            <ListItemText primary="Youtube" />
                        </ListItemButton>
                    </a>
                </ListItem>
                <ListItem disablePadding>
                    <a href="https://open.spotify.com/"
                        className="spotify"
                        title="Spotify"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <ListItemButton>
                            <ListItemIcon>
                                <SpotifySvg />
                            </ListItemIcon>
                            <ListItemText primary="Spotify" />
                        </ListItemButton>
                    </a>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top" style={{ backgroundColor: '#e3f2fd' }}>
            <Container className="container container-fluid">
                <div>
                    {["left"].map((anchor) => (
                        <div key={anchor}>
                            <button className="navbar-toggler"
                                onClick={toggleDrawer(anchor, true)}
                                size="large"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </div>
                    ))}
                </div>
                {/* <NavLink
                    className="navbar-brand text-uppercase"
                    activeclassname="active"
                    to="/"
                >
                    Dr Nina Wiśniewska
                </NavLink> */}
                {/* <div className="offcanvas offcanvas-start" */}
                <div className="offcanvas offcanvas-start"
                    tabIndex="-1"
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                >
                    {/* <div className="offcanvas-header">
                        <h5 className="offcanvas-title"
                            id="offcanvasNavbarLabel"
                        >
                            Radiostory
                        </h5>
                        <button type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close">
                        </button>
                    </div> */}
                    <div className="offcanvas-body navbar-light" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-start flex-grow-1">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/about"
                                >
                                    Klinika
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/services"
                                >
                                    Uslugi
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/team"
                                >
                                    Zespół
                                </NavLink>
                            </li>
                        </ul>

                        <NavLink
                            className="navbar-brand text-uppercase"
                            activeclassname="active"
                            to="/"
                        >
                            Dr Nina Wiśniewska
                        </NavLink>


                        <ul className="navbar-nav justify-content-end flex-grow-1">
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/prices"
                                >
                                    Cennik
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/news"
                                >
                                    Aktualności
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    className="nav-link"
                                    activeclassname="active"
                                    aria-current="page"
                                    to="/contact"
                                >
                                    Kontakt
                                </NavLink>
                            </li>
                        </ul>




                        {/* <ul className="navbar-nav justify-content-end flex-grow-1">
                            <li className="nav-item">
                                <a key="" href="https://www.facebook.com/Radiostory-104327058985831/"
                                    className="nav-link"
                                    title="Facebook"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FacebookSvg />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a key="" href="https://www.youtube.com/"
                                    className="nav-link"
                                    title="YouTube"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <YouTubeSvg />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a key="" href="https://open.spotify.com/"
                                    className="nav-link"
                                    title="Spotify"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <SpotifySvg />
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </Container>
        </nav>
    );
}

export default NavSection2;
