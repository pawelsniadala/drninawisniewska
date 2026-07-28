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

import {
  treatment,
  usuniecieZmianSkornychElektrochirurgiczne,
} from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const electrosurgeryBenefits = [
  "precyzyjność działania,",
  "ładny efekt wizualny po zabiegu,",
  "mała inwazyjność,",
  "szybkość gojenia się ran.",
];

const skinLesions = [
  "brodawek wirusowych (tzw. kurzajek),",
  "brodawek łojotokowych,",
  "brodawek płaskich,",
  "włókniaków miękkich,",
  "naczyniaków gwiaździstych,",
  "prosaków,",
  "mięczaka zakaźnego,",
  "gruczolaków łojowych.",
];

const TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("usuniecie-zmian-skornych-elektrochirurgiczne"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const dermatologySpecialization = services.filter(
    (item) => item.specialization === "dermatology",
  );

  const otherDermatologyTreatments = treatment.filter(
    (item) =>
      item.specialization?.includes("dermatology") &&
      item.treatment !== "usuniecie-zmian-skornych-elektrochirurgiczne",
  );

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Elektrochirurgiczne usuwanie zmian skórnych"
        description="Elektrochirurgiczne usuwanie zmian skórnych w Klinice dr Niny Wiśniewskiej w Wyszkowie jest wykonywane po wcześniejszej konsultacji i kwalifikacji dermatologicznej."
        path="/zabiegi/dermatologia/usuniecie-zmian-skornych-elektrochirurgiczne"
        image={usuniecieZmianSkornychElektrochirurgiczne.images[0]?.src}
        imageAlt={usuniecieZmianSkornychElektrochirurgiczne.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-dermatology">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/zabiegi">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Dermatologia</Box>
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

                  <Link to="/zabiegi">Zabiegi dermatologiczne</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Elektrochirurgiczne usuwanie zmian skórnych
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Elektrochirurgiczne usuwanie zmian skórnych
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Elektrochirurgia</strong>, inaczej{" "}
                    <strong>elektrokoagulacja</strong>, to metoda chirurgiczna
                    polegająca na wykorzystaniu przepływu{" "}
                    <strong>prądu elektrycznego o różnej częstotliwości</strong>{" "}
                    do usuwania, wycinania lub wypalania, wszelkich
                    niepożądanych zmian skórnych.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={
                        usuniecieZmianSkornychElektrochirurgiczne.images[0].src
                      }
                      imageAlt={
                        usuniecieZmianSkornychElektrochirurgiczne.images[0].alt
                      }
                      imageAuthor={
                        usuniecieZmianSkornychElektrochirurgiczne.images[0]
                          .author
                      }
                      imageHref={
                        usuniecieZmianSkornychElektrochirurgiczne.images[0].href
                      }
                    />
                  </Box>

                  <Typography className="paragraph">
                    Zabiegi można podzielić na elektrokoagulację i cięcie, które
                    wykonuje się w znieczuleniu miejscowym. Zabieg
                    elektrokoagulacji wykonuje się za pomocą elektrod o różnym
                    kształcie, odpowiednio dobranych w zależności od rodzaju
                    zmiany.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Głównymi zaletami innowacyjności elektrochirurgii w usuwaniu
                    niezłośliwych zmian skórnych są:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {electrosurgeryBenefits.map((item) => (
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

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Zabiegi elektrochirurgiczne wykonuje się przy usuwaniu zmian
                    skórnych o charakterze:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {skinLesions.map((item) => (
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
                    <strong>
                      Każdy rodzaj zmiany musi być uprzednio zakwalifikowany do
                      zabiegu przez lekarza w naszej Klinice
                    </strong>
                    .
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
                    id="electrosurgery-specialists-list"
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
                        cardPath={`/specjalisci/dermatologia/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="electrosurgery-specialists-list"
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
                    {dermatologySpecialization.map((item) => (
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
                      aria-label="Pozostałe zabiegi dermatologiczne"
                    >
                      Pozostałe zabiegi
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {otherDermatologyTreatments.map((item) => (
                      <CardProposed
                        key={item.id}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.images?.[0]?.src}
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

export default TreatmentUsuniecieZmianSkornychElektrochirurgicznePartial;
