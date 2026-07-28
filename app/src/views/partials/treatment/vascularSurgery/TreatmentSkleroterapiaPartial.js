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

import { treatment, skleroterapia } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const TreatmentSkleroterapiaPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("skleroterapia"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const vascularSurgerySpecialization = services.filter(
    (item) => item.specialization === "vascular-surgery",
  );

  const otherVascularSurgeryTreatments = treatment.filter(
    (item) =>
      item.specialization?.includes("vascular-surgery") &&
      item.treatment !== "skleroterapia",
  );

  const displayedTreatments = showMoreTreatments
    ? otherVascularSurgeryTreatments
    : otherVascularSurgeryTreatments.slice(0, 3);

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  const toggleShowMoreTreatments = () => {
    setShowMoreTreatments((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Skleroterapia"
        description="Skleroterapia w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje zamykanie rozszerzonych naczyń żylnych po wcześniejszej ocenie układu żylnego."
        path="/zabiegi/chirurgia-naczyniowa/skleroterapia"
        image={skleroterapia.images?.[0]?.src}
        imageAlt={skleroterapia.images?.[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-vascular-surgery">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/zabiegi/chirurgia-naczyniowa">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Chirurgia naczyniowa</Box>
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

                  <Link to="/zabiegi/chirurgia-naczyniowa">
                    Chirurgia naczyniowa
                  </Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Skleroterapia
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Skleroterapia
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Skleroterapia</strong> to{" "}
                    <strong>
                      nieinwazyjny zabieg zamykania rozszerzonych naczyń
                      krwionośnych
                    </strong>
                    . Procedura polega na podaniu do problematycznej żyły
                    substancji obliterującej, która powoduje jej zamknięcie. W
                    porównaniu z leczeniem operacyjnym jest to metoda bezpieczną
                    i zdecydowanie mniej bolesną. Zabieg skleroterapii
                    poprzedzony jest dokładną oceną układu żył głównych oraz
                    powierzchniowych przy pomocy badania ultrasonograficznego z
                    dopplerem, które jest wykonywane w naszej Klinice.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={skleroterapia.images[0].src}
                      imageAlt={skleroterapia.images[0].alt}
                      imageAuthor={skleroterapia.images[0].author}
                      imageHref={skleroterapia.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Zabieg składa się z kilku lub kilkunastu{" "}
                    <strong>wstrzyknięć preparatu</strong> do zmienionych naczyń
                    żylnych, a następnie założenia{" "}
                    <strong>uciskowych pończoch</strong> lub{" "}
                    <strong>rajstop</strong>.
                  </Typography>

                  <Typography className="paragraph">
                    Podanie środka obliterującego rozpoczyna proces zamknięcia
                    naczyń. Sam proces zamykania trwa od 3 do 4 tygodni,
                    następnie rozpoczyna się proces wchłaniania naczynia.
                    Wchłanianie trwa od kilku tygodni do kilku miesięcy zależnie
                    od wielkości zamykanego naczynia.
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
                    id="skleroterapia-specialists-list"
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
                        cardPath={`/specjalisci/chirurgia-naczyniowa/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="skleroterapia-specialists-list"
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
                    {vascularSurgerySpecialization.map((item) => (
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
                      aria-label="Pozostałe zabiegi chirurgii naczyniowej"
                    >
                      Pozostałe zabiegi
                    </Typography>
                  </Box>

                  <Box
                    id="skleroterapia-other-treatments-list"
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

                    {otherVascularSurgeryTreatments.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreTreatments}
                          aria-expanded={showMoreTreatments}
                          aria-controls="skleroterapia-other-treatments-list"
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

export default TreatmentSkleroterapiaPartial;
