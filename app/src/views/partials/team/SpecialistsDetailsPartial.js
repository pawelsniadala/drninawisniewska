import React, { useEffect } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";

import useMediaQuery from "@mui/material/useMediaQuery";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Page from "../../../components/Page";
import Seo from "../../../components/Seo";
import Container from "../../../components/Container";
import CardProposed from "../../../components/CardProposed";
import Image from "../../../components/Image";

import { services } from "../../../data/services";
import { team } from "../../../data/team";

const specializationBySlug = {
  dermatologia: {
    label: "Dermatologia",
    specialization: "dermatology",
    path: "/specjalisci",
  },
  "medycyna-estetyczna": {
    label: "Medycyna estetyczna",
    specialization: "aesthetic-medicine",
    path: "/specjalisci/medycyna-estetyczna",
  },
  kosmetologia: {
    label: "Kosmetologia",
    specialization: "cosmetology",
    path: "/specjalisci/kosmetologia",
  },
  "chirurgia-plastyczna": {
    label: "Chirurgia plastyczna",
    specialization: "cosmetic-surgery",
    path: "/specjalisci/chirurgia-plastyczna",
  },
  alergologia: {
    label: "Alergologia",
    specialization: "allergology",
    path: "/specjalisci/alergologia",
  },
  usg: {
    label: "USG",
    specialization: "usg",
    path: "/specjalisci/usg",
  },
  endokrynologia: {
    label: "Endokrynologia",
    specialization: "endocrinology",
    path: "/specjalisci/endokrynologia",
  },
  ginekologia: {
    label: "Ginekologia",
    specialization: "gynecology",
    path: "/specjalisci/ginekologia",
  },
  "chirurgia-naczyniowa": {
    label: "Chirurgia naczyniowa",
    specialization: "vascular-surgery",
    path: "/specjalisci/chirurgia-naczyniowa",
  },
  "dietetyka-kliniczna": {
    label: "Dietetyka kliniczna",
    specialization: "clinical-dietitian",
    path: "/specjalisci/dietetyka-kliniczna",
  },
  kardiologia: {
    label: "Kardiologia",
    specialization: "cardiology",
    path: "/specjalisci/kardiologia",
  },
  psychiatria: {
    label: "Psychiatria",
    specialization: "psychiatry",
    path: "/specjalisci/psychiatria",
  },
  psychologia: {
    label: "Psychologia",
    specialization: "psychology",
    path: "/specjalisci/psychologia",
  },
  "rejestracja-medyczna": {
    label: "Rejestracja medyczna",
    specialization: "medical-registration",
    path: "/specjalisci/rejestracja-medyczna",
  },
};

const SpecialistsDetailsPartial = () => {
  const { specialization, specialist } = useParams();
  const location = useLocation();

  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  const currentSpecialization = specializationBySlug[specialization];

  const currentSpecialist = team.find((item) => item.specialist === specialist);

  const isValidSpecialist =
    currentSpecialization &&
    currentSpecialist &&
    currentSpecialist.specialization.includes(
      currentSpecialization.specialization,
    );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname]);

  if (!isValidSpecialist) {
    return <Navigate to="/specjalisci" replace />;
  }

  const relatedServices = services.filter((item) =>
    item.specialists2?.includes(specialist),
  );

  const seoDescription =
    `${currentSpecialist.name}: ${currentSpecialist.speciality.trim()}. ` +
    "Profil członka zespołu Kliniki dr Niny Wiśniewskiej w Wyszkowie, informacje o doświadczeniu zawodowym i obszarze pracy.";

  return (
    <>
      <Seo
        title={currentSpecialist.name}
        description={seoDescription}
        path={location.pathname}
        image={currentSpecialist.image}
        imageAlt={`Portret ${currentSpecialist.name}`}
      />

      <Box className="team-view">
        <Box className="view-wrapper">
          <Box className="view-header services-aesthetic-medicine">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to={currentSpecialization.path}>
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">{currentSpecialization.label}</Box>
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

                  <Link to="/specjalisci">Specjaliści</Link>

                  {specialization !== "dermatologia" && (
                    <Link to={currentSpecialization.path}>
                      {currentSpecialization.label}
                    </Link>
                  )}

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    {currentSpecialist.name}
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  {currentSpecialist.name}
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper specialists-details">
              <Box className="specialists-description">
                <Box>
                  <Box
                    className="box-specialists"
                    style={{ marginTop: "-12px" }}
                  >
                    <Typography
                      className="paragraph"
                      style={{ fontSize: "18px" }}
                    >
                      {currentSpecialist.speciality}
                    </Typography>
                  </Box>

                  {!isDesktop && (
                    <Box className="box-specialists">
                      <Box className="box-image">
                        <Image
                          imageSrc={currentSpecialist.image}
                          imageAlt={`Portret ${currentSpecialist.name}`}
                          imageSquare
                          noDescription
                        />
                      </Box>
                    </Box>
                  )}

                  {currentSpecialist.summary && (
                    <Box className="box-specialists">
                      <Typography
                        component="h2"
                        variant="h5"
                        className="header alternative"
                      >
                        Wprowadzenie
                      </Typography>

                      <Typography className="paragraph">
                        {currentSpecialist.summary}
                      </Typography>
                    </Box>
                  )}

                  {currentSpecialist.education && (
                    <Box className="box-specialists">
                      <Typography
                        component="h2"
                        variant="h5"
                        className="header alternative"
                      >
                        Edukacja
                      </Typography>

                      <Typography className="paragraph">
                        {currentSpecialist.education}
                      </Typography>
                    </Box>
                  )}

                  {currentSpecialist.experience && (
                    <Box className="box-specialists">
                      <Typography
                        component="h2"
                        variant="h5"
                        className="header alternative"
                      >
                        Doświadczenie
                      </Typography>

                      <Typography className="paragraph">
                        {currentSpecialist.experience}
                      </Typography>
                    </Box>
                  )}

                  {currentSpecialist.interested && (
                    <Box className="box-specialists">
                      <Typography
                        component="h2"
                        variant="h5"
                        className="header alternative"
                      >
                        Zainteresowania
                      </Typography>

                      <Typography className="paragraph">
                        {currentSpecialist.interested}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Box>

              <Box className="proposed-wrapper">
                {isDesktop && (
                  <Box className="box-proposed">
                    <Image
                      imageSrc={currentSpecialist.image}
                      imageAlt={`Portret ${currentSpecialist.name}`}
                      imageSquare
                      noDescription
                    />
                  </Box>
                )}

                {relatedServices.length > 0 && (
                  <Box className="box-proposed">
                    <Box className="header-wrapper">
                      <Typography className="header">Specjalizacje</Typography>
                    </Box>

                    <Box className="card-wrapper">
                      {relatedServices.map((item) => (
                        <CardProposed
                          key={item.id}
                          cardTitle={item.title}
                          cardDescription={item.description}
                          cardImage={item.image}
                          cardPath={item.path}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page(SpecialistsDetailsPartial);
