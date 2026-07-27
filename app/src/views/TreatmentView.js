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

import TreatmentListPartial from "./partials/treatment/TreatmentListPartial";

const treatmentPages = [
  {
    path: "/zabiegi",
    tabId: "treatment-dermatology",
    label: "Dermatologia",
    specialization: "dermatology",
    title: "Zabiegi: dermatologia",
    description:
      "Oferta zabiegów dermatologicznych w Klinice dr Niny Wiśniewskiej w Wyszkowie, obejmująca procedury stosowane w leczeniu i poprawie kondycji skóry.",
  },
  {
    path: "/zabiegi/medycyna-estetyczna",
    tabId: "treatment-aesthetic-medicine",
    label: "Medycyna estetyczna",
    specialization: "aesthetic-medicine",
    title: "Zabiegi: medycyna estetyczna",
    description:
      "Procedury z zakresu medycyny estetycznej dostępne w Klinice dr Niny Wiśniewskiej w Wyszkowie. Zakres zabiegów oraz wskazania do ich wykonania.",
  },
  {
    path: "/zabiegi/kosmetologia",
    tabId: "treatment-cosmetology",
    label: "Kosmetologia",
    specialization: "cosmetology",
    title: "Zabiegi: kosmetologia",
    description:
      "Pielęgnacja i zabiegi kosmetologiczne dostępne w Klinice dr Niny Wiśniewskiej w Wyszkowie, dobierane do potrzeb i kondycji skóry.",
  },
  {
    path: "/zabiegi/chirurgia-plastyczna",
    tabId: "treatment-cosmetic-surgery",
    label: "Chirurgia plastyczna",
    specialization: "cosmetic-surgery",
    title: "Zabiegi: chirurgia plastyczna",
    description:
      "Zabiegi z zakresu chirurgii plastycznej w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o dostępnych procedurach i wskazaniach.",
  },
  {
    path: "/zabiegi/alergologia",
    tabId: "treatment-allergology",
    label: "Alergologia",
    specialization: "allergology",
    title: "Zabiegi: alergologia",
    description:
      "Diagnostyka i leczenie alergii oraz konsultacje alergologiczne w Klinice dr Niny Wiśniewskiej w Wyszkowie. Zakres dostępnych świadczeń.",
  },
  {
    path: "/zabiegi/chirurgia-naczyniowa",
    tabId: "treatment-vascular-surgery",
    label: "Chirurgia naczyniowa",
    specialization: "vascular-surgery",
    title: "Zabiegi: chirurgia naczyniowa",
    description:
      "Zabiegi z zakresu chirurgii naczyniowej w Klinice dr Niny Wiśniewskiej w Wyszkowie.",
  },
  {
    path: "/zabiegi/kardiologia",
    tabId: "treatment-cardiology",
    label: "Kardiologia",
    specialization: "cardiology",
    title: "Zabiegi: kardiologia",
    description:
      "Badania i konsultacje kardiologiczne w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o dostępnej diagnostyce i zakresie świadczeń.",
  },
  {
    path: "/zabiegi/psychiatria",
    tabId: "treatment-psychiatry",
    label: "Psychiatria",
    specialization: "psychiatry",
    title: "Zabiegi: psychiatria",
    description:
      "Konsultacje psychiatryczne i diagnostyka w Klinice dr Niny Wiśniewskiej w Wyszkowie, w tym badanie ADOS-2 dla dzieci, młodzieży i dorosłych.",
  },
];

const TreatmentView = () => {
  const location = useLocation();

  const currentPage =
    treatmentPages.find((page) => page.path === location.pathname) ||
    treatmentPages[0];

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

      <Box className="treatment-view">
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
                    Zabiegi
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Zabiegi
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment">
              <Box className="treatment-navigation">
                <Box className="navigation-wrapper">
                  <Tabs
                    value={currentPage.path}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Kategorie zabiegów"
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
                    {treatmentPages.map((page) => (
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

              <Box className="treatment-tabels">
                <Box
                  className="tab-pane fade show active"
                  id={`${currentPage.tabId}-panel`}
                  role="tabpanel"
                  aria-labelledby={`${currentPage.tabId}-tab`}
                >
                  <TreatmentListPartial
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

export default TreatmentView;
