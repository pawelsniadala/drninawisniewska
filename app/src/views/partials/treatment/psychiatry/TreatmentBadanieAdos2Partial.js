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

import { badanieAdos2 } from "../../../../data/treatment";
import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const TreatmentBadanieAdos2Partial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("badanie-ados-2"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const psychiatrySpecialization = services.filter(
    (item) => item.specialization === "psychiatry",
  );

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Badanie Ados-2"
        description="Badanie Ados-2 w Klinice dr Niny Wiśniewskiej w Wyszkowie dla dzieci, młodzieży i osób dorosłych. Informacje o przebiegu diagnozy i pisemnej opinii."
        path="/zabiegi/psychiatria/badanie-ados-2"
        image={badanieAdos2.images?.[0]?.src}
        imageAlt={badanieAdos2.images?.[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-psychiatry">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/zabiegi/psychiatria">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Psychiatria</Box>
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

                  <Link to="/zabiegi/psychiatria">Psychiatria</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Badanie Ados-2
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Badanie Ados-2
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Badanie Ados-2</strong> dla dzieci, młodzieży i osób
                    dorosłych. Pomaga wykryć spektrum autyzmu (Zespół Aspergera,
                    spektrum autyzmu) u dzieci od 12 miesiąca życia, ale także u
                    młodzieży i u dorosłych.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={badanieAdos2.images?.[0]?.src}
                      imageAlt={badanieAdos2.images?.[0]?.alt}
                      imageAuthor={badanieAdos2.images?.[0]?.author}
                      imageHref={badanieAdos2.images?.[0]?.href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    <strong>Czym jest Ados-2?</strong> Jest to profesjonalny,
                    wielowymiarowy test umożliwiający zweryfikowanie, czy u
                    danej osoby występują cechy spektrum autyzmu. Obecnie
                    określany jest jako "złoty standard" diagnozy autyzmu na
                    świecie. Może dostarczać informacji pomocnych w planowaniu
                    oddziaływań terapeutycznych.
                  </Typography>

                  <Typography className="paragraph">
                    <strong>Z czego składa się Ados-2?</strong> Badanie Ados-2
                    składa się z pięciu modułów przeznaczonych dla badanych
                    różniących się wiekiem i poziomem rozwoju językowego.
                  </Typography>

                  <Typography className="paragraph">
                    <strong>Jak wygląda proces diagnozy?</strong> Na podstawie
                    obserwacji diagnosta ocenia różne aspekty zachowania,
                    reprezentujące pięć kategorii: język i komunikacja,
                    wzajemność w interakcjach społecznych, zabawa/wyobraźnia,
                    zachowania stereotypowe i sztywne zainteresowania, inne
                    zachowania odbiegające od normy. Za trafnością polskiej
                    wersji ADOS-2 przemawiają wysokie korelacje wyników z
                    wynikami innych narzędzi do diagnozy autyzmu.
                  </Typography>

                  <Typography className="paragraph">
                    Proces diagnozy zakończony jest wydaniem pisemnej opinii po
                    badaniu.
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
                    id="badanie-ados-2-specialists-list"
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
                        cardPath={`/specjalisci/psychiatria/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="badanie-ados-2-specialists-list"
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
                    {psychiatrySpecialization.map((item) => (
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

export default TreatmentBadanieAdos2Partial;
