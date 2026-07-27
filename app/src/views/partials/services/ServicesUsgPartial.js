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

import Page from "../../../components/Page";
import Seo from "../../../components/Seo";
import Container from "../../../components/Container";
import CardTeamProposed from "../../../components/CardTeamProposed";
import CardProposed from "../../../components/CardProposed";
import ListBulleted from "../../../components/ListBulleted";
import Image from "../../../components/Image";

import { services, usg } from "../../../data/services";

import { team } from "../../../data/team";

const availableUsgExaminations = [
  "USG jamy brzusznej",
  "USG tarczycy",
  "USG piersi",
  "USG ślinianek",
  "USG węzłów chłonnych",
  "USG prostaty",
  "USG jąder",
  "USG układu moczowego",
  "badanie dopplerowskie tętnic szyjnych",
  "badanie dopplerowskie jednej kończyny dolnej",
  "badanie dopplerowskie obu kończyn dolnych",
];

const ServicesUsgPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const usgSpecialists = team.filter((item) =>
    item.specialization.includes("usg"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? usgSpecialists
    : usgSpecialists.slice(0, 3);

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("usg"),
  );

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="USG"
        description="Badania USG w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmują diagnostykę narządów, tkanek miękkich i naczyń krwionośnych u dzieci i dorosłych."
        path="/specjalizacje/usg"
        image={usg.images[0]?.src}
        imageAlt={usg.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-usg">
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
                    USG
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  USG
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>USG</strong> jest nieinwazyjnym badaniem obrazowym,
                    które wykorzystuje fale ultradźwiękowe do oceny narządów,
                    tkanek miękkich oraz naczyń krwionośnych w czasie
                    rzeczywistym.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={usg.images[0].src}
                      imageAlt={usg.images[0].alt}
                      imageAuthor={usg.images[0].author}
                      imageHref={usg.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Badanie USG może wspierać rozpoznawanie przyczyn
                    dolegliwości, ocenę budowy narządów oraz kontrolowanie
                    wcześniej wykrytych zmian. Zakres badania jest dobierany do
                    objawów, wskazań medycznych i wieku pacjenta.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Dostępne badania USG
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {availableUsgExaminations.map((item) => (
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
                    W ramach diagnostyki naczyniowej wykonywane są również
                    badania dopplerowskie, które pozwalają ocenić kierunek i
                    prędkość przepływu krwi w wybranych naczyniach.
                  </Typography>

                  <Typography className="paragraph heading">
                    Przyjmujemy dzieci w każdym wieku.
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

                  <Box id="usg-specialists-list" className="card-wrapper">
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
                        cardPath={`/specjalisci/usg/${item.specialist}`}
                      />
                    ))}

                    {usgSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="usg-specialists-list"
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
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Page(ServicesUsgPartial);
