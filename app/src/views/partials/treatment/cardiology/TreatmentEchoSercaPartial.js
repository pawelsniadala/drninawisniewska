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

import { echoSerca } from "../../../../data/treatment";
import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const TreatmentEchoSercaPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("echo-serca"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const cardiologySpecialization = services.filter(
    (item) => item.specialization === "cardiology",
  );

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Echo serca"
        description="Echo serca w Klinice dr Niny Wiśniewskiej w Wyszkowie to nieinwazyjne badanie obrazowe wykorzystujące fale dźwiękowe do oceny struktur serca."
        path="/zabiegi/kardiologia/echo-serca"
        image={echoSerca.images?.[0]?.src}
        imageAlt={echoSerca.images?.[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-cardiology">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/zabiegi/kardiologia">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Kardiologia</Box>
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

                  <Link to="/zabiegi/kardiologia">Kardiologia</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Echo serca
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Echo serca
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Echo serca</strong>, czyli echokardiografia, to
                    bezpieczne i nieinwazyjne badanie obrazowe serca, które
                    wykorzystuje fale dźwiękowe o wysokiej częstotliwości do
                    tworzenia obrazów struktur serca. Zabieg ten przeprowadza
                    się za pomocą urządzenia zwanych echokardiografami, które
                    emitują fale dźwiękowe przez specjalną sondę umieszczoną na
                    klatce piersiowej pacjenta.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={echoSerca.images?.[0]?.src}
                      imageAlt={echoSerca.images?.[0]?.alt}
                      imageAuthor={echoSerca.images?.[0]?.author}
                      imageHref={echoSerca.images?.[0]?.href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Podczas echo serca pacjent leży na stole badawczym, a
                    technik medyczny lub lekarz przesuwa sondę po powierzchni
                    klatki piersiowej w różnych pozycjach. Fale dźwiękowe
                    odbijają się od struktur serca, a odbicia są przechwytywane
                    przez sondę i przekształcane w obrazy na monitorze.
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
                    id="echo-serca-specialists-list"
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
                        cardPath={`/specjalisci/kardiologia/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="echo-serca-specialists-list"
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
                    {cardiologySpecialization.map((item) => (
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
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default TreatmentEchoSercaPartial;
