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
  sonoQueenTechnologiaHifu,
} from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const treatmentIndications = [
  "lifting twarzy, szyi oraz dekoltu,",
  "wygładzenie płytkich i głębokich zmarszczek,",
  "wyszczuplanie ciała,",
  "rozświetlenie skóry,",
  "opadające powieki,",
  "ujędrnienie wiotkiej skóry w różnych partiach ciała,",
  "lifting twarzy i ujędrnianie ciała,",
  "napięcie delikatnej skóry w okolicach oczu,",
  "ujędrnienie skóry w okolicy ramion,",
  "lifting wiotkiej skóry na brzuchu,",
  "uniesienie i ujędrnienie pośladków,",
  "wygładzenie skóry w okolicach ud i kolan,",
  'redukcja tzw. "drugiego podbródka",',
  "wygładzenie zmarszczek,",
  "spowolnienie procesu starzenia skóry.",
];

const TreatmentSonoQueenTechnologiaHifuPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("sonoqueen-technologia-hifu"),
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
      item.treatment !== "sonoqueen-technologia-hifu",
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
        title="SonoQueen technologia HIFU"
        description="Zabieg SonoQueen wykorzystujący technologię HIFU w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o działaniu, wskazaniach i efektach zabiegu."
        path="/zabiegi/medycyna-estetyczna/sonoqueen-technologia-hifu"
        image={sonoQueenTechnologiaHifu.images?.[0]?.src}
        imageAlt={sonoQueenTechnologiaHifu.images?.[0]?.alt}
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
                    SonoQueen technologia HIFU
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  SonoQueen technologia HIFU
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>SonoQueen</strong> to nowoczesna technologia
                    wykorzystująca moc HIFU. Najnowsza generacja{" "}
                    <strong>technologii HIFU</strong> (High Intensity Focused
                    Ultrasound) to{" "}
                    <strong>
                      sfokusowane ultradźwięki o wysokiej częstotliwości
                    </strong>{" "}
                    do <strong>bezinwazyjnego</strong>,{" "}
                    <strong>niechirurgicznego liftingu</strong> twarzy i ciała.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={sonoQueenTechnologiaHifu.images?.[0]?.src}
                      imageAlt={sonoQueenTechnologiaHifu.images?.[0]?.alt}
                      imageAuthor={sonoQueenTechnologiaHifu.images?.[0]?.author}
                      imageHref={sonoQueenTechnologiaHifu.images?.[0]?.href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Precyzyjna i skoncentrowana wiązka fali ultradźwiękowej
                    pozwala dotrzeć do 3 warstw - skóry właściwej, tkanki
                    tłuszczowej i powięzi mięśniowej (SMAS), osiągając
                    temperaturę ok. 60°C-70°C wywołuje tym samym punkty
                    termicznej koagulacji. Rozpoczyna to{" "}
                    <strong>proces kolagenogenezy</strong>,{" "}
                    <strong>
                      regeneracji zwiotczałych włókien kolagenowych
                    </strong>{" "}
                    i <strong>obkurczenia tkanek</strong>, dając efekt
                    wielowymiarowego ujędrnienia. Dzięki temu uzyskujemy
                    spektakularny i trwały efekt napięcia aktywowany w głębokiej
                    warstwie skóry.
                  </Typography>

                  <Typography className="paragraph">
                    SonoQueen wyposażone jest w komplet specjalnych kartridży
                    umożliwiających{" "}
                    <strong>
                      precyzyjne działanie na różnych głębokościach tkanki
                    </strong>{" "}
                    - od 2,0 mm do 4,5 mm na twarzy i 6 mm na ciele.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Wskazania:
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

                  <Typography className="paragraph">
                    Zabieg Sonoqueen jest <strong>bezbolesny</strong> dla
                    pacjenta i{" "}
                    <strong>nie wymaga okresu rekonwalescencji</strong>. Seria
                    zabiegowa wynosi od 1 do 3 zabiegów w odstępach co 3-4
                    miesiące, ale w większości przypadków wystarcza jeden.
                    Pierwsze efekty widoczne są bezpośrednio po zabiegu, a
                    pełnym efektem niechirurgicznego liftingu pacjent może
                    cieszyć się już po 3 miesiącach.
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
                    id="sonoqueen-technologia-hifu-specialists-list"
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
                          aria-controls="sonoqueen-technologia-hifu-specialists-list"
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
                    id="sonoqueen-technologia-hifu-other-treatments-list"
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
                          aria-controls="sonoqueen-technologia-hifu-other-treatments-list"
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

export default TreatmentSonoQueenTechnologiaHifuPartial;
