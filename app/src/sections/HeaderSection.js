import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "../components/Container";

import PhoneSvg from "../assets/svg/PhoneSvg";
import EmailSvg from "../assets/svg/EmailSvg";
import FacebookSvg from "../assets/svg/FacebookSvg";
import InstagramSvg from "../assets/svg/InstagramSvg";
import ClinicSvg from "../assets/svg/ClinicSvg";
import ServicesSvg from "../assets/svg/ServicesSvg";
import TreatmentSvg from "../assets/svg/TreatmentSvg";
import PricesSvg from "../assets/svg/PricesSvg";
import SpecialOfferSvg from "../assets/svg/SpecialOfferSvg";
import TeamSvg from "../assets/svg/TeamSvg";
import CareerSvg from "../assets/svg/CareerSvg";
import ContactSvg from "../assets/svg/ContactSvg";

import logoPng from "../assets/header/logo.png";

const navigationItems = [
  {
    label: "Klinika",
    path: "/klinika",
    Icon: ClinicSvg,
    iconSize: "17px",
  },
  {
    label: "Specjalizacje",
    path: "/specjalizacje",
    Icon: ServicesSvg,
    iconSize: "17px",
  },
  {
    label: "Zabiegi",
    path: "/zabiegi",
    Icon: TreatmentSvg,
    iconSize: "17px",
  },
  {
    label: "Cennik",
    path: "/cennik",
    Icon: PricesSvg,
    iconSize: "16px",
  },
  {
    label: "Promocje",
    path: "/promocje",
    Icon: SpecialOfferSvg,
    iconSize: "16px",
  },
  {
    label: "Specjaliści",
    path: "/specjalisci",
    Icon: TeamSvg,
    iconSize: "17px",
  },
  {
    label: "Kariera",
    path: "/kariera",
    Icon: CareerSvg,
    iconSize: "17px",
  },
  {
    label: "Kontakt",
    path: "/kontakt",
    Icon: ContactSvg,
    iconSize: "17px",
  },
];

const HeaderSection = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 991.98px)");

  useEffect(() => {
    if (!isMobile) {
      setIsDrawerOpen(false);
    }
  }, [isMobile]);

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  const getNavLinkClassName = ({ isActive }) =>
    `nav-link${isActive ? " active" : ""}`;

  const drawerList = (
    <Box id="mobile-navigation" sx={{ width: 250 }} role="presentation">
      {/* LOGO */}
      <List className="logo">
        <ListItem className="list-item">
          <NavLink
            className="navbar-brand text-uppercase"
            to="/"
            end
            aria-label="Strona główna Kliniki dr Niny Wiśniewskiej"
            onClick={closeDrawer}
          >
            <img src={logoPng} alt="" height="51" />

            <Typography className="brand-text">
              Dermatologia
              <br />
              i Medycyna estetyczna
              <br />
              dr Nina Wiśniewska
            </Typography>
          </NavLink>
        </ListItem>
      </List>

      {/* MENU GŁÓWNE */}
      <List className="menu">
        {navigationItems.map(({ label, path, Icon, iconSize }) => (
          <ListItem className="list-item" key={path}>
            <NavLink
              className={getNavLinkClassName}
              to={path}
              onClick={closeDrawer}
            >
              <ListItemButton className="list-item-button">
                <ListItemIcon className="list-item-icon">
                  <Icon
                    width={iconSize}
                    height={iconSize}
                    aria-hidden="true"
                    focusable="false"
                  />
                </ListItemIcon>

                <ListItemText className="list-item-text" primary={label} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>

      <Divider />

      {/* MEDIA SPOŁECZNOŚCIOWE */}
      <List className="media">
        <ListItem className="list-item">
          <a
            href="https://www.facebook.com/profile.php?id=100063736802328"
            className="link"
            target="_blank"
            rel="noreferrer"
            onClick={closeDrawer}
          >
            <ListItemButton className="list-item-button">
              <ListItemIcon className="list-item-icon">
                <FacebookSvg
                  width="16px"
                  height="16px"
                  aria-hidden="true"
                  focusable="false"
                />
              </ListItemIcon>

              <ListItemText className="list-item-text" primary="Facebook" />
            </ListItemButton>
          </a>
        </ListItem>

        <ListItem className="list-item">
          <a
            href="https://www.instagram.com/klinikawyszkow/"
            className="link"
            target="_blank"
            rel="noreferrer"
            onClick={closeDrawer}
          >
            <ListItemButton className="list-item-button">
              <ListItemIcon className="list-item-icon">
                <InstagramSvg
                  width="16px"
                  height="16px"
                  aria-hidden="true"
                  focusable="false"
                />
              </ListItemIcon>

              <ListItemText className="list-item-text" primary="Instagram" />
            </ListItemButton>
          </a>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box component="header" className="header-section">
      {/* GÓRNY PASEK KONTAKTOWY */}
      <Box className="top-nav">
        <Container className="nav-wrapper">
          <Box className="content-wrapper">
            <Box className="contact-wrapper">
              <Tooltip title="Zadzwoń">
                <a className="link" href="tel:+48450001550">
                  <Box className="link-wrapper">
                    <PhoneSvg
                      width="14px"
                      height="14px"
                      color="#ffffff"
                      aria-hidden="true"
                      focusable="false"
                    />

                    <Typography className="link-text">450 001 550</Typography>
                  </Box>
                </a>
              </Tooltip>

              <Tooltip title="Zadzwoń">
                <a className="link" href="tel:+48539968541">
                  <Box className="link-wrapper">
                    <PhoneSvg
                      width="14px"
                      height="14px"
                      color="#ffffff"
                      aria-hidden="true"
                      focusable="false"
                    />

                    <Typography className="link-text">539 968 541</Typography>
                  </Box>
                </a>
              </Tooltip>

              <Tooltip title="Napisz wiadomość">
                <a className="link" href="mailto:info@drninawisniewska.pl">
                  <Box className="link-wrapper">
                    <EmailSvg
                      width="14px"
                      height="14px"
                      color="#ffffff"
                      aria-hidden="true"
                      focusable="false"
                    />

                    <Typography className="link-text">
                      info@drninawisniewska.pl
                    </Typography>
                  </Box>
                </a>
              </Tooltip>
            </Box>

            <Box
              component="nav"
              className="media-wrapper"
              aria-label="Media społecznościowe"
            >
              <Tooltip title="Facebook">
                <a
                  className="link"
                  href="https://www.facebook.com/profile.php?id=100063736802328"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook Kliniki dr Niny Wiśniewskiej"
                >
                  <FacebookSvg
                    width="14px"
                    height="14px"
                    color="#ffffff"
                    aria-hidden="true"
                    focusable="false"
                  />
                </a>
              </Tooltip>

              <Tooltip title="Instagram">
                <a
                  className="link"
                  href="https://www.instagram.com/klinikawyszkow/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram Kliniki dr Niny Wiśniewskiej"
                >
                  <InstagramSvg
                    width="14px"
                    height="14px"
                    color="#ffffff"
                    aria-hidden="true"
                    focusable="false"
                  />
                </a>
              </Tooltip>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* GŁÓWNA NAWIGACJA */}
      <Box
        component="nav"
        className="navbar navbar-light navbar-expand-lg"
        aria-label="Główna nawigacja"
      >
        <Container className="container container-fluid">
          <NavLink
            className="navbar-brand text-uppercase"
            to="/"
            end
            aria-label="Strona główna Kliniki dr Niny Wiśniewskiej"
          >
            <img src={logoPng} alt="" height={isMobile ? 51 : 60} />

            <Typography className="brand-text">
              Dermatologia
              <br />
              i Medycyna estetyczna
              <br />
              dr Nina Wiśniewska
            </Typography>
          </NavLink>

          {/* MENU MOBILNE */}
          {isMobile && (
            <>
              <button
                type="button"
                className="navbar-toggler"
                onClick={openDrawer}
                aria-label="Otwórz menu główne"
                aria-controls="mobile-navigation"
                aria-expanded={isDrawerOpen}
              >
                <span className="navbar-toggler-icon" aria-hidden="true" />
              </button>

              <Drawer anchor="left" open={isDrawerOpen} onClose={closeDrawer}>
                {drawerList}
              </Drawer>
            </>
          )}

          {/* MENU DESKTOPOWE */}
          <Box
            className="offcanvas offcanvas-start"
            tabIndex={-1}
            id="offcanvasNavbar"
          >
            <Box
              className="offcanvas-body navbar-light"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                {navigationItems.map(({ label, path }) => (
                  <li className="nav-item" key={path}>
                    <NavLink className={getNavLinkClassName} to={path}>
                      {label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HeaderSection;
