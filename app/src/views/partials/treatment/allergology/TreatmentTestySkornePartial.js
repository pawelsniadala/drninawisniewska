import React, { useState } from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
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
import Image from "../../../../components/Image";

import { treatment, testySkorne } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const TreatmentTestySkornePartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("testy-skorne"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const allergologySpecialization = services.filter(
    (item) => item.specialization === "allergology",
  );

  const otherAllergologyTreatments = treatment.filter(
    (item) =>
      item.specialization?.includes("allergology") &&
      item.treatment !== "testy-skorne",
  );

  const displayedTreatments = showMoreTreatments
    ? otherAllergologyTreatments
    : otherAllergologyTreatments.slice(0, 3);

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  const toggleShowMoreTreatments = () => {
    setShowMoreTreatments((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Testy skórne"
        description="Testy skórne w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmują diagnostykę alergii z wykorzystaniem zestawu alergenów i prób kontrolnych."
        path="/zabiegi/alergologia/testy-skorne"
        image={testySkorne.images?.[0]?.src}
        imageAlt={testySkorne.images?.[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-allergology">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/zabiegi/alergologia">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Alergologia</Box>
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

                  <Link to="/zabiegi/alergologia">Alergologia</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Testy skórne
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Testy skórne
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Testy skórne</strong> są jedną z popularniejszej
                    oraz prostszej metody diagnostycznej alergii. Największą
                    zaletą testów skórnych jest ich{" "}
                    <strong>krótki czas oczekiwania na wyniki</strong>.
                  </Typography>

                  <Typography className="paragraph">
                    Badanie przeprowadza się na wewnętrznej części przedramienia
                    lub skórze pleców. Przebieg testów polega na naniesieniu
                    kropli różnych zawiesin z alergenami z zestawu przesiewowego
                    zawierającego takie substancje uczulające jak{" "}
                    <strong>rośliny wiatropylne</strong>, <strong>trawy</strong>
                    , <strong>pleśnie</strong>, <strong>sierść zwierząt</strong>
                    , <strong>jad owadów</strong> czy{" "}
                    <strong>roztocza kurzu domowego</strong>.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={testySkorne.images[0].src}
                      imageAlt={testySkorne.images[0].alt}
                      imageAuthor={testySkorne.images[0].author}
                      imageHref={testySkorne.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Jednorazowo wykonuje się do 20 alergenów oraz 2 próby
                    kontrolne. Następnie każdą kroplę alergenu należy delikatnie
                    nakłuć (bez wywołania krwawienia) by zawarte antygeny
                    przedostały się do powierzchniowych warstw skóry.
                  </Typography>

                  <Typography className="paragraph">
                    Alergenowe testy skórne powinny być wykonywane w momencie
                    kiedy nie występują objawy alergii, ponieważ na tydzień
                    przed planowanymi testami należy odstawić leki
                    przeciwalergiczne, które mogą zaburzyć wyniki testów. W
                    miejscu aplikacji alergenów nie należy stosować maści
                    zewnętrznych zawierających glikokortykosteroidy lub
                    inhibitory kalcyneuryny.
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
                    id="testy-skorne-specialists-list"
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
                        cardPath={`/specjalisci/alergologia/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="testy-skorne-specialists-list"
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
                    {allergologySpecialization.map((item) => (
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
                      aria-label="Pozostałe zabiegi alergologiczne"
                    >
                      Pozostałe zabiegi
                    </Typography>
                  </Box>

                  <Box
                    id="testy-skorne-other-treatments-list"
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

                    {otherAllergologyTreatments.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreTreatments}
                          aria-expanded={showMoreTreatments}
                          aria-controls="testy-skorne-other-treatments-list"
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

export default TreatmentTestySkornePartial;
