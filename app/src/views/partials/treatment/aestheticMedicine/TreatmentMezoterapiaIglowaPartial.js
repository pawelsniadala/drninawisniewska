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

import Seo from "../../../../components/Seo";
import Container from "../../../../components/Container";
import CardTeamProposed from "../../../../components/CardTeamProposed";
import CardProposed from "../../../../components/CardProposed";
import ListBulleted from "../../../../components/ListBulleted";
import Image from "../../../../components/Image";

import { treatment, mezoterapiaIglowa } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const treatmentIndications = [
  "spadek nawilżenia skóry,",
  "profilaktyka przeciwstarzeniowa skóry,",
  "objawy starzenia się skóry,",
  "fotostarzenie,",
  "drobne linie oraz zmarszczki,",
  "utrata jędrności, elastyczności, blasku skóry,",
  "cienie i zmarszczki wokół oczu,",
  "przebarwienia,",
  "łojotok,",
  "rozszerzone pory,",
  "osłabione włosy,",
  "wypadanie włosów i łysienie,",
  "cellulit.",
];

const TreatmentMezoterapiaIglowaPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("mezoterapia-iglowa"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const aestheticMedicineSpecialization = services.filter(
    (item) => item.specialization === "aesthetic-medicine",
  );

  const otherAestheticMedicineTreatments = treatment.filter(
    (item) =>
      item.specialization?.includes("aesthetic-medicine") &&
      item.treatment !== "mezoterapia-iglowa",
  );

  const displayedTreatments = showMoreTreatments
    ? otherAestheticMedicineTreatments
    : otherAestheticMedicineTreatments.slice(0, 3);

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  const toggleShowMoreTreatments = () => {
    setShowMoreTreatments((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Mezoterapia igłowa"
        description="Mezoterapia igłowa w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o działaniu zabiegu, wskazaniach i przeciwwskazaniach."
        path="/zabiegi/medycyna-estetyczna/mezoterapia-iglowa"
        image={mezoterapiaIglowa.images?.[0]?.src}
        imageAlt={mezoterapiaIglowa.images?.[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-aesthetic-medicine">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/zabiegi/medycyna-estetyczna">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Medycyna estetyczna</Box>
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

                  <Link to="/zabiegi">Zabiegi</Link>

                  <Link to="/zabiegi/medycyna-estetyczna">
                    Medycyna estetyczna
                  </Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Mezoterapia igłowa
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Mezoterapia igłowa
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Mezoterapia igłowa</strong> to przede wszystkim{" "}
                    <strong>głębokie nawilżenie skóry</strong>. Zabieg polega na
                    bezpośrednim podaniu małych dawek substancji biologicznie
                    czynnej śródskórnie lub podskórnie w miejsca, które chcemy
                    poddać zabiegowi. Mezoterapia igłowa{" "}
                    <strong>pobudza</strong> również{" "}
                    <strong>mikrokrążenie</strong>, co{" "}
                    <strong>stymuluje komórki</strong> do{" "}
                    <strong>produkcji nowych włókien kolagenowych</strong>. W
                    efekcie uzyskujemy odświeżoną, napiętą skórę.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={mezoterapiaIglowa.images?.[0]?.src}
                      imageAlt={mezoterapiaIglowa.images?.[0]?.alt}
                      imageAuthor={mezoterapiaIglowa.images?.[0]?.author}
                      imageHref={mezoterapiaIglowa.images?.[0]?.href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Mezoterapia igłowa wykorzystuje dwa różne mechanizmy
                    działania. Pierwszym z nich jest{" "}
                    <strong>
                      ogniskowe gojenie się skóry i jej samoregeneracja po
                      licznych nakłuciach, do których dochodzi w trakcie zabiegu
                    </strong>
                    . Drugim zaś jest efekt{" "}
                    <strong>działania substancji wstrzykiwanych w skórę</strong>
                    . Wprowadzany lek bądź inna substancja aktywna nadaje
                    zabiegowi dodatkowych ukierunkowanych właściwości.
                  </Typography>
                </Box>

                <Box className="box-treatment">
                  <Typography
                    component="h2"
                    variant="h5"
                    className="header alternative"
                  >
                    Wskazania
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {treatmentIndications.map((item) => (
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
                </Box>

                <Box className="box-treatment">
                  <Typography
                    component="h2"
                    variant="h5"
                    className="header alternative"
                  >
                    Przeciwwskazania
                  </Typography>

                  <Typography className="paragraph">
                    Ciąża i laktacja, aktywne infekcje wirusowe lub bakteryjne,
                    nadciśnienie tętnicze, choroby autoimmunologiczne, stany
                    zapalne, uczulenie na stosowane substancje, zażywanie
                    antykoagulantów, zażywanie doustnych kortykosteroidów,
                    poważna egzema, łuszczyca, niestabilna cukrzyca, czynna
                    choroba nowotworowa oraz okres do 5 lat od wyleczenia.
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

                  <Box
                    id="mezoterapia-iglowa-specialists-list"
                    className="card-wrapper"
                  >
                    {displayedSpecialists.map((item) => (
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
                        cardPath={`/specjalisci/medycyna-estetyczna/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="mezoterapia-iglowa-specialists-list"
                          endIcon={
                            showMoreSpecialists ? (
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
                          {showMoreSpecialists ? "Pokaż mniej" : "Pokaż więcej"}
                        </Button>
                      </Fade>
                    )}
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Specjalizacja
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {aestheticMedicineSpecialization.map((item) => (
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

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography
                      component="h2"
                      className="header"
                      aria-label="Pozostałe zabiegi medycyny estetycznej"
                    >
                      Pozostałe zabiegi
                    </Typography>
                  </Box>

                  <Box
                    id="mezoterapia-iglowa-other-treatments-list"
                    className="card-wrapper"
                  >
                    {displayedTreatments.map((item) => (
                      <CardProposed
                        key={item.id}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.images?.[0]?.src}
                        cardPath={item.path}
                      />
                    ))}

                    {otherAestheticMedicineTreatments.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreTreatments}
                          aria-expanded={showMoreTreatments}
                          aria-controls="mezoterapia-iglowa-other-treatments-list"
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
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TreatmentMezoterapiaIglowaPartial;
