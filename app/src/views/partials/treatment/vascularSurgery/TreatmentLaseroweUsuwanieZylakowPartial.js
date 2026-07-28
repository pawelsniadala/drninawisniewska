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

import { treatment, laseroweUsuwanieZylakow } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const treatmentBenefits = [
  "Najwyższa skuteczność spośród dostępnych metod - ponad 97% po 3 latach od zabiegu.",
  "Natychmiastowe uruchomienie po zabiegu i szybki powrót do normalnej aktywności.",
  "Minimalny ból lub całkowity brak odczuć bólowych w czasie rekonwalescencji.",
  "Maksymalny komfort w czasie zabiegu.",
  "Krótki czas zabiegu.",
  "Brak blizn i małe ryzyko wystąpienia zasinień po zabiegu.",
  "Doskonały wynik medyczny i kosmetyczny.",
];

const TreatmentLaseroweUsuwanieZylakowPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("laserowe-usuwanie-zylakow"),
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
      item.treatment !== "laserowe-usuwanie-zylakow",
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
        title="Laserowe usuwanie żylaków"
        description="Laserowe usuwanie żylaków w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o przebiegu zabiegu, metodach leczenia chorób żył i korzyściach dla pacjenta."
        path="/zabiegi/chirurgia-naczyniowa/laserowe-usuwanie-zylakow"
        image={laseroweUsuwanieZylakow.images?.[0]?.src}
        imageAlt={laseroweUsuwanieZylakow.images?.[0]?.alt}
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
                    Laserowe usuwanie żylaków
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Laserowe usuwanie żylaków
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    Żylaki kończyn dolnych są dziś jedną z najbardziej
                    powszechnych chorób. Około 40% kobiet i 20% mężczyzn ma
                    objawy w postaci: zmęczonych, ciężkich nóg oraz obrzęków nóg
                    i żył widocznych przez skórę. Jej główne przyczyny to:
                    wrodzona słabość tkanki łącznej, zmiany hormonalne, a także
                    długotrwałe przebywanie w pozycji siedzącej lub stojącej.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={laseroweUsuwanieZylakow.images?.[0]?.src}
                      imageAlt={laseroweUsuwanieZylakow.images?.[0]?.alt}
                      imageAuthor={laseroweUsuwanieZylakow.images?.[0]?.author}
                      imageHref={laseroweUsuwanieZylakow.images?.[0]?.href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Najprostszą formą leczenia chorób żył jest kompresjoterapia
                    (pończochy lub podkolanówki uciskowe). Jej działanie polega
                    na zmniejszeniu szerokości żyły poprzez wywieranie na nią
                    zewnętrznego ucisku. Przyspiesza to przepływ krwi w żyle.
                    Jednakże gdy żyła się raz rozciągnie, nigdy już nie
                    zmniejszy się do pierwotnego rozmiaru więc kompresjoterapię
                    trzeba stosować przez resztę życia.
                  </Typography>

                  <Typography className="paragraph">
                    Metodami mniej inwazyjnymi są skleroterapia i zabiegi z
                    wykorzystaniem prądu RF.
                  </Typography>

                  <Typography className="paragraph">
                    Zabieg z wykorzystaniem prądu RF polega na wprowadzeniu do
                    żyły cewnika i podgrzaniu jej ścian od wewnątrz za pomocą
                    fal RF. Ściany żyły wraz z przylegającymi tkankami ulegają
                    denaturacji i obkurczeniu, a w ciągu kilku tygodni ściana
                    włóknieje. Jednak sonda RF jest dość gruba i metoda nie
                    nadaje się do wszystkich średnic żył.
                  </Typography>

                  <Typography className="paragraph">
                    Zabieg laserowego usuwania żylaków przeprowadzany jest w
                    warunkach ambulatoryjnych, w znieczuleniu miejscowym. Pod
                    kontrolą USG lekarz wprowadza do chorej żyły przez małe
                    nakłucie cienki światłowód, a następnie naświetla żyłę od
                    wewnątrz światłem lasera. Zabiegowi towarzyszy tylko
                    minimalny ból w trakcie miejscowego podawania znieczulenia
                    wokół żyły. Pacjent może wrócić do normalnej aktywności
                    bezpośrednio po zabiegu. Jest to najbezpieczniejszymi i
                    najskuteczniejszym zabiegiem, zapewniającym wysoki komfort
                    pacjenta w tracie i po zabiegu.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Korzyści dla pacjenta wynikające z wyboru zabiegu:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {treatmentBenefits.map((item) => (
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
              </Box>

              <Box className="proposed-wrapper">
                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Specjaliści
                    </Typography>
                  </Box>

                  <Box
                    id="laserowe-usuwanie-zylakow-specialists-list"
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
                          aria-controls="laserowe-usuwanie-zylakow-specialists-list"
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
                    id="laserowe-usuwanie-zylakow-other-treatments-list"
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
                          aria-controls="laserowe-usuwanie-zylakow-other-treatments-list"
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

export default TreatmentLaseroweUsuwanieZylakowPartial;
