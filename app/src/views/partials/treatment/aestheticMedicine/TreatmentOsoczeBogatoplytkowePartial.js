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

import { treatment, osoczeBogatoplytkowe } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const treatmentIndications = [
  "rewitalizacja skóry twarzy,",
  "skóra zmęczona, bez napięcia,",
  "niejednolity kolor,",
  "skóra wysuszona, wiotka, pozbawiona blask,",
  "oznaki starzenia się skóry,",
  "fałdy,",
  "zmarszczki,",
  "zapadnięta skóra,",
  "zmniejszona gęstość skóry,",
  "przebyte zabiegi medycyny estetycznej,",
  "regeneracja skóry,",
  "przyspieszenie gojenia,",
  "łysienie androgenowe i inne,",
  "rozstępy,",
  "blizny zanikowe,",
  "blizny po cięciu cesarskim,",
  "blizny potrądzikowe.",
];

const TreatmentOsoczeBogatoplytkowePartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("osocze-bogatoplytkowe"),
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
      item.treatment !== "osocze-bogatoplytkowe",
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
        title="Osocze bogatopłytkowe"
        description="Zabieg osoczem bogatopłytkowym w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o przebiegu zabiegu, wskazaniach i przeciwwskazaniach."
        path="/zabiegi/medycyna-estetyczna/osocze-bogatoplytkowe"
        image={osoczeBogatoplytkowe.images?.[0]?.src}
        imageAlt={osoczeBogatoplytkowe.images?.[0]?.alt}
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
                    Osocze bogatopłytkowe
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Osocze bogatopłytkowe
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Osocze bogatopłytkowe</strong> uzyskuje się z{" "}
                    <strong>krwi własnej pacjenta</strong> poprzez podwójne
                    odwirowanie substancji, które stanowią elementy morfotyczne
                    krwi. Podczas odwirowywania krwi pobranej{" "}
                    <strong>bezpośrednio przed zabiegiem</strong> zostają
                    oddzielone krwinki czerwone oraz białe od płytek krwi.
                    Osocze bogatopłytkowe uzyskuje się z standardowego poboru
                    krwi. Po odwirowaniu zyskuje się{" "}
                    <strong>płynny składnik</strong> krwi o niezwykłych i{" "}
                    <strong>pożądanych</strong> przez nas{" "}
                    <strong>właściwościach</strong>. Aby wprowadzić go pod skórę
                    pacjenta wykorzystuje się <strong>mezoterapię</strong>,
                    czyli ostrzykiwanie za pomocą bardzo cienkich igieł.
                    Najczęściej ostrzykiwaniu osoczem poddawane są policzki,
                    linia żuchwy, czoło, powieki oraz okolice oczu. Jednak
                    osocze bogatopłytkowe przynosi również świetne rezultaty w
                    poprawie wyglądu skóry szyi i dekoltu, ramion i dłoni oraz
                    owłosionej skóry głowy.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={osoczeBogatoplytkowe.images?.[0]?.src}
                      imageAlt={osoczeBogatoplytkowe.images?.[0]?.alt}
                      imageAuthor={osoczeBogatoplytkowe.images?.[0]?.author}
                      imageHref={osoczeBogatoplytkowe.images?.[0]?.href}
                    />
                  </Box>
                </Box>

                <Box className="box-treatment">
                  <Typography
                    component="h2"
                    variant="h5"
                    className="header alternative"
                  >
                    Wskazania
                  </Typography>

                  <Grid container spacing={0.5}>
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
                    Nadwrażliwość na substancje preparatu, infekcje w polu
                    zabiegowym, miastenia rzekomoporaźna, zespół
                    Lamberta-Eatona, stwardnienie boczne zanikowe, wszelkie
                    zaburzenia przewodnictwa nerwowo-mięśniowego.
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
                    id="osocze-bogatoplytkowe-specialists-list"
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
                          aria-controls="osocze-bogatoplytkowe-specialists-list"
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
                    id="osocze-bogatoplytkowe-other-treatments-list"
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
                          aria-controls="osocze-bogatoplytkowe-other-treatments-list"
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

export default TreatmentOsoczeBogatoplytkowePartial;
