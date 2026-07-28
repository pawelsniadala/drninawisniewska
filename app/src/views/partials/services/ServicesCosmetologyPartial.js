import React, { useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Seo from "../../../components/Seo";
import Container from "../../../components/Container";
import CardTeamProposed from "../../../components/CardTeamProposed";
import CardCareerProposed from "../../../components/CardCareerProposed";
import CardProposed from "../../../components/CardProposed";
import ListBulleted from "../../../components/ListBulleted";
import Image from "../../../components/Image";

import { services, cosmetology } from "../../../data/services";

import { team } from "../../../data/team";
import { treatment } from "../../../data/treatment";
import { career } from "../../../data/career";

const cosmetologyScope = [
  "ocena kondycji i potrzeb skóry",
  "dobór indywidualnego planu pielęgnacyjnego",
  "pielęgnacja skóry problematycznej i trądzikowej",
  "zabiegi wspierające redukcję oznak starzenia",
  "redukcja przebarwień skórnych",
  "poprawa nawilżenia i kondycji skóry",
  "profilaktyka powstawania niedoskonałości",
  "redukcja widoczności cellulitu",
  "modelowanie sylwetki",
  "ujędrnianie skóry twarzy i ciała",
  "epilacja laserowa",
];

const ServicesCosmetologyPartial = () => {
  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const cosmetologySpecialists = team.filter((item) =>
    item.specialization.includes("cosmetology"),
  );

  const cosmetologyTreatments = treatment.filter((item) =>
    item.specialization.includes("cosmetology"),
  );

  const displayedTreatments = showMoreTreatments
    ? cosmetologyTreatments
    : cosmetologyTreatments.slice(0, 3);

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("cosmetology"),
  );

  const cosmetologyCareerOffers = career.filter((item) =>
    item.specialization?.includes("cosmetology"),
  );

  const toggleShowMoreTreatments = () => {
    setShowMoreTreatments((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Kosmetologia"
        description="Kosmetologia w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje pielęgnację skóry, terapie przeciwstarzeniowe, zabiegi na ciało oraz epilację laserową."
        path="/specjalizacje/kosmetologia"
        image={cosmetology.images[0]?.src}
        imageAlt={cosmetology.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-cosmetology">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/specjalizacje">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Specjalizacje</Box>
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

                  <Link to="/specjalizacje">Specjalizacje</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Kosmetologia
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Kosmetologia
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Kosmetologia</strong> jest dziedziną zajmującą się
                    pielęgnacją, poprawą kondycji oraz wspieraniem prawidłowego
                    funkcjonowania skóry. Wykorzystuje odpowiednio dobrane
                    preparaty kosmetyczne, urządzenia zabiegowe oraz techniki
                    manualne.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={cosmetology.images[0].src}
                      imageAlt={cosmetology.images[0].alt}
                      imageAuthor={cosmetology.images[0].author}
                      imageHref={cosmetology.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Rodzaj zabiegu jest dobierany do aktualnego stanu skóry, jej
                    potrzeb oraz oczekiwanego celu pielęgnacji. Postępowanie
                    kosmetologiczne może obejmować zarówno regularną
                    pielęgnację, jak i procedury wspierające poprawę wyglądu
                    skóry problematycznej, dojrzałej lub wymagającej
                    regeneracji.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Zakres kosmetologii
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {cosmetologyScope.map((item) => (
                      <ListBulleted
                        key={item}
                        ListBulletedItem={item}
                        ListBulletedStyle={{
                          backgroundImage:
                            "linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)",
                        }}
                      />
                    ))}
                  </Grid>

                  <Typography className="paragraph">
                    Kosmetologia korzysta z wiedzy dotyczącej budowy i
                    funkcjonowania skóry oraz pozostaje powiązana z dermatologią
                    i medycyną estetyczną. W przypadku zmian wymagających
                    diagnostyki lub leczenia pacjent może zostać skierowany na
                    konsultację lekarską.
                  </Typography>

                  <Typography className="paragraph">
                    Klinika oferuje indywidualnie dobierane terapie skóry
                    problematycznej, zabiegi przeciwstarzeniowe, procedury na
                    ciało oraz epilację laserową.
                  </Typography>
                </Box>
              </Box>

              <Box className="proposed-wrapper">
                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Specjaliści
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {cosmetologySpecialists.map((item) => (
                      <CardTeamProposed
                        key={item.id}
                        cardTitle={item.name}
                        cardSpeciality={item.speciality}
                        cardExperience={
                          item.experience ||
                          item.education || (
                            <>
                              <br />
                              <br />
                            </>
                          )
                        }
                        cardImage={item.image}
                        cardPath={`/specjalisci/kosmetologia/${item.specialist}`}
                      />
                    ))}
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Zabiegi
                    </Typography>
                  </Box>

                  <Box
                    id="cosmetology-treatments-list"
                    className="card-wrapper"
                  >
                    {displayedTreatments.map((item) => (
                      <CardProposed
                        key={item.id}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.images[0].src}
                        cardPath={item.path}
                      />
                    ))}

                    {cosmetologyTreatments.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreTreatments}
                          aria-expanded={showMoreTreatments}
                          aria-controls="cosmetology-treatments-list"
                          endIcon={
                            showMoreTreatments ? (
                              <KeyboardArrowUpIcon
                                aria-hidden="true"
                                focusable="false"
                              />
                            ) : (
                              <KeyboardArrowDownIcon
                                aria-hidden="true"
                                focusable="false"
                              />
                            )
                          }
                        >
                          {showMoreTreatments ? "Pokaż mniej" : "Pokaż więcej"}
                        </Button>
                      </Fade>
                    )}
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Powiązane specjalizacje
                    </Typography>
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

                {cosmetologyCareerOffers.length > 0 && (
                  <Box className="box-proposed">
                    <Box className="header-wrapper">
                      <Typography component="h2" className="header">
                        Oferty pracy
                      </Typography>
                    </Box>

                    <Box className="card-wrapper">
                      {cosmetologyCareerOffers.map((item) => (
                        <CardCareerProposed
                          key={item.id}
                          cardTitle={item.title}
                          cardLocation={item.location}
                          cardDate={item.date}
                          cardAgreement={item.agreement}
                          cardPosition={item.position}
                          cardType={item.type}
                          cardPlace={item.place}
                          cardPath={item.path}
                          cardImage={item.image}
                          cardStatus={item.status}
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

export default ServicesCosmetologyPartial;
