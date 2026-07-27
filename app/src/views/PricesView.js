import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Seo from "../components/Seo";
import Container from "../components/Container";

import PricesDermatologyPartial from "./partials/prices/PricesDermatologyPartial";
import PricesAestheticMedicinePartial from "./partials/prices/PricesAestheticMedicinePartial";
import PricesCosmetologyPartial from "./partials/prices/PricesCosmetologyPartial";
import PricesCosmeticSurgeryPartial from "./partials/prices/PricesCosmeticSurgeryPartial";
import PricesAllergologyPartial from "./partials/prices/PricesAllergologyPartial";
import PricesUsgPartial from "./partials/prices/PricesUsgPartial";
import PricesEndocrinologyPartial from "./partials/prices/PricesEndocrinologyPartial";
import PricesGynecologyPartial from "./partials/prices/PricesGynecologyPartial";
import PricesVascularSurgeryPartial from "./partials/prices/PricesVascularSurgeryPartial";
import PricesClinicalDietitianPartial from "./partials/prices/PricesClinicalDietitianPartial";
import PricesCardiologyPartial from "./partials/prices/PricesCardiologyPartial";
import PricesPsychiatryPartial from "./partials/prices/PricesPsychiatryPartial";
import PricesPsychologyPartial from "./partials/prices/PricesPsychologyPartial";

const pricePages = [
  {
    path: "/cennik",
    tabId: "prices-dermatology",
    label: "Dermatologia",
    title: "Cennik: dermatologia",
    description:
      "Ceny konsultacji dermatologicznych, badań i zabiegów dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesDermatologyPartial,
  },
  {
    path: "/cennik/medycyna-estetyczna",
    tabId: "prices-aesthetic-medicine",
    label: "Medycyna estetyczna",
    title: "Cennik: medycyna estetyczna",
    description:
      "Ceny konsultacji i zabiegów z zakresu medycyny estetycznej dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesAestheticMedicinePartial,
  },
  {
    path: "/cennik/kosmetologia",
    tabId: "prices-cosmetology",
    label: "Kosmetologia",
    title: "Cennik: kosmetologia",
    description:
      "Ceny zabiegów kosmetologicznych i pielęgnacyjnych dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesCosmetologyPartial,
  },
  {
    path: "/cennik/chirurgia-plastyczna",
    tabId: "prices-cosmetic-surgery",
    label: "Chirurgia plastyczna",
    title: "Cennik: chirurgia plastyczna",
    description:
      "Ceny konsultacji i zabiegów z zakresu chirurgii plastycznej dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesCosmeticSurgeryPartial,
  },
  {
    path: "/cennik/alergologia",
    tabId: "prices-allergology",
    label: "Alergologia",
    title: "Cennik: alergologia",
    description:
      "Ceny konsultacji, diagnostyki i świadczeń alergologicznych dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesAllergologyPartial,
  },
  {
    path: "/cennik/usg",
    tabId: "prices-usg",
    label: "USG",
    title: "Cennik: USG",
    description:
      "Ceny badań USG wykonywanych w Klinice dr Niny Wiśniewskiej w Wyszkowie, z podziałem na dostępne rodzaje diagnostyki.",
    component: PricesUsgPartial,
  },
  {
    path: "/cennik/endokrynologia",
    tabId: "prices-endocrinology",
    label: "Endokrynologia",
    title: "Cennik: endokrynologia",
    description:
      "Ceny konsultacji i diagnostyki endokrynologicznej dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesEndocrinologyPartial,
  },
  {
    path: "/cennik/ginekologia",
    tabId: "prices-gynecology",
    label: "Ginekologia",
    title: "Cennik: ginekologia",
    description:
      "Ceny konsultacji, badań i diagnostyki ginekologicznej dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesGynecologyPartial,
  },
  {
    path: "/cennik/chirurgia-naczyniowa",
    tabId: "prices-vascular-surgery",
    label: "Chirurgia naczyniowa",
    title: "Cennik: chirurgia naczyniowa",
    description:
      "Ceny konsultacji, diagnostyki i zabiegów z zakresu chirurgii naczyniowej w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesVascularSurgeryPartial,
  },
  {
    path: "/cennik/dietetyka-kliniczna",
    tabId: "prices-clinical-dietitian",
    label: "Dietetyka kliniczna",
    title: "Cennik: dietetyka kliniczna",
    description:
      "Ceny konsultacji z zakresu dietetyki klinicznej dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesClinicalDietitianPartial,
  },
  {
    path: "/cennik/kardiologia",
    tabId: "prices-cardiology",
    label: "Kardiologia",
    title: "Cennik: kardiologia",
    description:
      "Ceny konsultacji i badań kardiologicznych dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesCardiologyPartial,
  },
  {
    path: "/cennik/psychiatria",
    tabId: "prices-psychiatry",
    label: "Psychiatria",
    title: "Cennik: psychiatria",
    description:
      "Ceny konsultacji i diagnostyki psychiatrycznej dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesPsychiatryPartial,
  },
  {
    path: "/cennik/psychologia",
    tabId: "prices-psychology",
    label: "Psychologia",
    title: "Cennik: psychologia",
    description:
      "Ceny konsultacji, terapii i diagnostyki psychologicznej dostępnych w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
    component: PricesPsychologyPartial,
  },
];

const PricesView = () => {
  const location = useLocation();

  const isDesktop = useMediaQuery("(min-width: 991.98px)", {
    defaultMatches: true,
  });

  const currentPage =
    pricePages.find((page) => page.path === location.pathname) || pricePages[0];

  const CurrentPrices = currentPage.component;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  return (
    <>
      <Seo
        title={currentPage.title}
        description={currentPage.description}
        path={currentPage.path}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header prices">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Strona główna</Box>
                  </Link>
                </Breadcrumbs>

                <Breadcrumbs
                  className="breadcrumb nav"
                  separator={
                    <NavigateNextIcon
                      fontSize="small"
                      aria-hidden="true"
                      focusable="false"
                    />
                  }
                  aria-label="Ścieżka nawigacyjna"
                >
                  <Link to="/">Strona główna</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Cennik
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Cennik
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper prices">
              <Box className="prices-navigation">
                <Box className="navigation-wrapper">
                  {isDesktop ? (
                    <List className="list" aria-label="Kategorie cennika">
                      {pricePages.map((page, index) => {
                        const isCurrentPage = currentPage.path === page.path;

                        return (
                          <React.Fragment key={page.path}>
                            <ListItem className="list-item" disablePadding>
                              <ListItemButton
                                id={`${page.tabId}-tab`}
                                component={Link}
                                to={page.path}
                                className="list-item-button"
                                selected={isCurrentPage}
                                aria-current={
                                  isCurrentPage ? "page" : undefined
                                }
                                aria-controls={`${page.tabId}-panel`}
                              >
                                <ListItemText
                                  className="list-item-text"
                                  primary={page.label}
                                />

                                <ListItemIcon className="list-item-icon">
                                  <KeyboardArrowRightIcon
                                    aria-hidden="true"
                                    focusable="false"
                                  />
                                </ListItemIcon>
                              </ListItemButton>
                            </ListItem>

                            {index < pricePages.length - 1 && (
                              <Divider className="divider" />
                            )}
                          </React.Fragment>
                        );
                      })}
                    </List>
                  ) : (
                    <Tabs
                      value={currentPage.path}
                      variant="scrollable"
                      scrollButtons="auto"
                      aria-label="Kategorie cennika"
                      TabIndicatorProps={{
                        style: {
                          background: "transparent",
                        },
                      }}
                      sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                          "&.Mui-disabled": {
                            opacity: 0.3,
                          },
                        },
                      }}
                    >
                      {pricePages.map((page) => (
                        <Tab
                          key={page.path}
                          id={`${page.tabId}-tab`}
                          label={page.label}
                          component={Link}
                          to={page.path}
                          value={page.path}
                          aria-controls={`${page.tabId}-panel`}
                        />
                      ))}
                    </Tabs>
                  )}
                </Box>
              </Box>

              <Box className="prices-tabels">
                <Box
                  className="tab-pane fade show active"
                  id={`${currentPage.tabId}-panel`}
                  role="tabpanel"
                  aria-labelledby={`${currentPage.tabId}-tab`}
                >
                  <CurrentPrices />
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PricesView;
