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

import { treatment, odczulanie } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const TreatmentOdczulaniePartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("odczulanie"),
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
      item.treatment !== "odczulanie",
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
        title="Odczulanie"
        description="Odczulanie w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje immunoterapię swoistą stosowaną w leczeniu wybranych rodzajów alergii."
        path="/zabiegi/alergologia/odczulanie"
        image={odczulanie.images?.[0]?.src}
        imageAlt={odczulanie.images?.[0]?.alt}
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
                    Odczulanie
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Odczulanie
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Immunoterapia swoista</strong>, czyli odczulanie, to
                    jedyna <strong>przyczynowa</strong> metoda leczenia alergii.
                  </Typography>

                  <Typography className="paragraph">
                    Odczulanie ma na celu zmniejszyć wrażliwość organizmu na
                    dany czynnik alergizujący, co w następstwie redukuje
                    uciążliwe objawy alergii. Polega ono na podawaniu coraz to
                    większych stężeń alergenu w szczepionce co stopniowo
                    zmniejsza wrażliwość organizmu na hapteny uczulające. Dawka
                    wyciągu alergennego wynosi od 5 do 20 μg podanego w iniekcji
                    podskórnej.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={odczulanie.images[0].src}
                      imageAlt={odczulanie.images[0].alt}
                      imageAuthor={odczulanie.images[0].author}
                      imageHref={odczulanie.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Odczulanie jest procesem czasochłonnym. Zajmuje od 3 do 5
                    lat. Immunoterapia swoista jest szczególnie skuteczna w
                    przypadku alergii na jad owadów bąkoskrzydłych, pyłki
                    roślinne oraz roztocza kurzu domowego. Odczulania nie
                    stosuje się w przypadku alergii pokarmowych.
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
                    id="odczulanie-specialists-list"
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
                          aria-controls="odczulanie-specialists-list"
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
                    id="odczulanie-other-treatments-list"
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
                          aria-controls="odczulanie-other-treatments-list"
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

export default TreatmentOdczulaniePartial;
