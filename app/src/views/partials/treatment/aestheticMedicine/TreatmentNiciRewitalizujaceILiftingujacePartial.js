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
  niciRewitalizujaceILiftingujace,
} from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const postTreatmentEffects = [
  'poprawa owalu twarzy - likwidacja tzw. "chomików" podwójnego podbródka,',
  "usuwanie asymetrii łuków brwiowych, opadającej powieki,",
  "spłycenie zmarszczek,",
  "modelowanie ciała - opadające ramiona, pośladki, biust.",
];

const threadTypes = [
  "nici rewitalizujące (rozpuszczalne),",
  "nici liftingujące właściwe (nierozpuszczalne).",
];

const TreatmentNiciRewitalizujaceILiftingujacePartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("nici-rewitalizujace-i-liftingujace"),
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
      item.treatment !== "nici-rewitalizujace-i-liftingujace",
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
        title="Nici rewitalizujące i liftingujące"
        description="Nici rewitalizujące i liftingujące w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o rodzajach nici, działaniu oraz efektach pozabiegowych."
        path="/zabiegi/medycyna-estetyczna/nici-rewitalizujace-i-liftingujace"
        image={niciRewitalizujaceILiftingujace.images?.[0]?.src}
        imageAlt={niciRewitalizujaceILiftingujace.images?.[0]?.alt}
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
                    Nici rewitalizujące i liftingujące
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Nici rewitalizujące i liftingujące
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Nici liftingujące</strong> służą do{" "}
                    <strong>usuwania skutków starzenia grawitacyjnego</strong>.
                    Zmiany na skórze spowodowane są utratą sprężystości,
                    zmniejszeniem napięcia mięśni i przemieszczaniem się
                    podskórnej tkanki tłuszczowej. Nici liftingujące są mniej
                    kłopotliwą i inwazyjną alternatywą dla chirurgicznego
                    liftingu.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={
                        niciRewitalizujaceILiftingujace.images?.[0]?.src
                      }
                      imageAlt={
                        niciRewitalizujaceILiftingujace.images?.[0]?.alt
                      }
                      imageAuthor={
                        niciRewitalizujaceILiftingujace.images?.[0]?.author
                      }
                      imageHref={
                        niciRewitalizujaceILiftingujace.images?.[0]?.href
                      }
                    />
                  </Box>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Efekty pozabiegowe:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {postTreatmentEffects.map((item) => (
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

                  <Typography className="paragraph heading">
                    Potocznie nićmi liftingującymi nazywany jest każdy rodzaj
                    nitek służących do podwieszania skóry. W nomenklaturze
                    medycznej nici liftingujące dzielą się na:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {threadTypes.map((item) => (
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
                    Nici rewitalizujące to nici polidioksanowe (PDO). Wykonane
                    są z tego samego tworzywa co szwy chirurgiczne stosowane w
                    operacjach. Nici nazywane przez lekarzy liftingującymi to
                    inaczej nici haczykowate. Są dużo grubsze od nici PDO, a
                    umieszczone na nich w różnych kierunkach haczyki mają za
                    zadanie unosić obwisłą skórę. Stosowane są zwłaszcza u
                    pacjentek w dojrzałym wieku i dają efekt porównywalny do
                    liftingu chirurgicznego. W reakcji na obecność ciała obcego
                    skóra zaczyna stymulować produkcję kolagenu.
                  </Typography>

                  <Typography className="paragraph">
                    Nasza Klinika oferuje oba typy nici.
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
                    id="nici-rewitalizujace-i-liftingujace-specialists-list"
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
                          aria-controls="nici-rewitalizujace-i-liftingujace-specialists-list"
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
                    id="nici-rewitalizujace-i-liftingujace-other-treatments-list"
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
                          aria-controls="nici-rewitalizujace-i-liftingujace-other-treatments-list"
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

export default TreatmentNiciRewitalizujaceILiftingujacePartial;
