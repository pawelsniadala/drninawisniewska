import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Container from "../components/Container";
import Seo from "../components/Seo";

import SpecialistsListPartial from "./partials/team/SpecialistsListPartial";

const specialistPages = [
  {
    path: "/specjalisci",
    tabId: "team-dermatology",
    label: "Dermatologia",
    specialization: "dermatology",
    title: "Specjaliści: dermatologia",
    description:
      "Specjaliści z zakresu dermatologii przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie zajmują się diagnostyką i leczeniem chorób skóry, włosów i paznokci.",
  },
  {
    path: "/specjalisci/medycyna-estetyczna",
    tabId: "team-aesthetic-medicine",
    label: "Medycyna estetyczna",
    specialization: "aesthetic-medicine",
    title: "Specjaliści: medycyna estetyczna",
    description:
      "Specjaliści z zakresu medycyny estetycznej przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie prowadzą konsultacje i wykonują zabiegi estetyczne.",
  },
  {
    path: "/specjalisci/kosmetologia",
    tabId: "team-cosmetology",
    label: "Kosmetologia",
    specialization: "cosmetology",
    title: "Specjaliści: kosmetologia",
    description:
      "Specjaliści z zakresu kosmetologii w Klinice dr Niny Wiśniewskiej w Wyszkowie wykonują zabiegi pielęgnacyjne, przeciwstarzeniowe i wspierające kondycję skóry.",
  },
  {
    path: "/specjalisci/chirurgia-plastyczna",
    tabId: "team-cosmetic-surgery",
    label: "Chirurgia plastyczna",
    specialization: "cosmetic-surgery",
    title: "Specjaliści: chirurgia plastyczna",
    description:
      "Specjaliści z zakresu chirurgii plastycznej przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie prowadzą konsultacje i wykonują wybrane zabiegi.",
  },
  {
    path: "/specjalisci/alergologia",
    tabId: "team-allergology",
    label: "Alergologia",
    specialization: "allergology",
    title: "Specjaliści: alergologia",
    description:
      "Specjaliści z zakresu alergologii przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie prowadzą konsultacje, diagnostykę i leczenie alergii.",
  },
  {
    path: "/specjalisci/usg",
    tabId: "team-usg",
    label: "USG",
    specialization: "usg",
    title: "Specjaliści: USG",
    description:
      "Specjaliści wykonujący badania USG w Klinice dr Niny Wiśniewskiej w Wyszkowie zajmują się diagnostyką obrazową, ginekologiczną i naczyniową.",
  },
  {
    path: "/specjalisci/endokrynologia",
    tabId: "team-endocrinology",
    label: "Endokrynologia",
    specialization: "endocrinology",
    title: "Specjaliści: endokrynologia",
    description:
      "Specjaliści z zakresu endokrynologii przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie zajmują się diagnostyką i leczeniem zaburzeń hormonalnych.",
  },
  {
    path: "/specjalisci/ginekologia",
    tabId: "team-gynecology",
    label: "Ginekologia",
    specialization: "gynecology",
    title: "Specjaliści: ginekologia",
    description:
      "Specjaliści z zakresu ginekologii przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie prowadzą konsultacje, diagnostykę i badania ginekologiczne.",
  },
  {
    path: "/specjalisci/chirurgia-naczyniowa",
    tabId: "team-vascular-surgery",
    label: "Chirurgia naczyniowa",
    specialization: "vascular-surgery",
    title: "Specjaliści: chirurgia naczyniowa",
    description:
      "Specjaliści z zakresu chirurgii naczyniowej przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie zajmują się diagnostyką i leczeniem chorób naczyń.",
  },
  {
    path: "/specjalisci/dietetyka-kliniczna",
    tabId: "team-clinical-dietitian",
    label: "Dietetyka kliniczna",
    specialization: "clinical-dietitian",
    title: "Specjaliści: dietetyka kliniczna",
    description:
      "Specjaliści z zakresu dietetyki klinicznej w Klinice dr Niny Wiśniewskiej w Wyszkowie przygotowują zalecenia żywieniowe dostosowane do potrzeb pacjenta.",
  },
  {
    path: "/specjalisci/kardiologia",
    tabId: "team-cardiology",
    label: "Kardiologia",
    specialization: "cardiology",
    title: "Specjaliści: kardiologia",
    description:
      "Specjaliści z zakresu kardiologii przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie prowadzą konsultacje i diagnostykę chorób układu krążenia.",
  },
  {
    path: "/specjalisci/psychiatria",
    tabId: "team-psychiatry",
    label: "Psychiatria",
    specialization: "psychiatry",
    title: "Specjaliści: psychiatria",
    description:
      "Specjaliści z zakresu psychiatrii przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie prowadzą konsultacje i diagnostykę zdrowia psychicznego.",
  },
  {
    path: "/specjalisci/psychologia",
    tabId: "team-psychology",
    label: "Psychologia",
    specialization: "psychology",
    title: "Specjaliści: psychologia",
    description:
      "Specjaliści z zakresu psychologii przyjmujący w Klinice dr Niny Wiśniewskiej w Wyszkowie prowadzą konsultacje, terapię i diagnostykę psychologiczną.",
  },
  {
    path: "/specjalisci/rejestracja-medyczna",
    tabId: "team-medical-registration",
    label: "Rejestracja medyczna",
    specialization: "medical-registration",
    title: "Zespół rejestracji medycznej",
    description:
      "Zespół rejestracji medycznej Kliniki dr Niny Wiśniewskiej w Wyszkowie pomaga w umawianiu wizyt i udziela informacji organizacyjnych.",
  },
];

const TeamView = () => {
  const location = useLocation();

  const currentPage =
    specialistPages.find((page) => page.path === location.pathname) ||
    specialistPages[0];

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
          <Box className="view-header">
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
                    Specjaliści
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Specjaliści
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper specialists-list">
              <Box className="specialists-navigation">
                <Box className="navigation-wrapper">
                  <Tabs
                    value={currentPage.path}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Specjalizacje członków zespołu"
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
                    {specialistPages.map((page) => (
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
                </Box>
              </Box>

              <Box className="team-tabels">
                <Box
                  className="tab-pane fade show active"
                  id={`${currentPage.tabId}-panel`}
                  role="tabpanel"
                  aria-labelledby={`${currentPage.tabId}-tab`}
                >
                  <SpecialistsListPartial
                    specialization={currentPage.specialization}
                  />
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TeamView;
