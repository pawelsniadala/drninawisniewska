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

import { treatment, masazProzniowy } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const tissueEffects = [
  "w naturalny sposób rozkłada komórki tłuszczowe do glicerolu i wolnych kwasów tłuszczowych,",
  "redukuje cellulit poprzez zmniejszenie objętości adipocytów,",
  "przyśpiesza metabolizm komórkowy oraz metabolizm całego ustroju.",
];

const treatmentBenefits = [
  "nie niszczy błony komórek tłuszczowych, a jedynie redukuje w sposób znaczny i kontrolowany ich zawartość i objętość,",
  "mocne działanie na głęboko zlokalizowany tłuszcz,",
  "nie uszkadza sąsiednich tkanek i naczyń krwionośnych,",
  "zabieg jest bezbolesny.",
];

const treatmentIndications = [
  "problemy naczyniowe i obrzęki,",
  "nadanie promiennego, zdrowego wyglądu skóry twarzy,",
  "walka z głęboko zlokalizowanym tłuszczem,",
  "kobiety po porodach,",
  "problemy z zaparciami,",
  "nadmiernie wiotka skóra,",
  "walka z cellulitem lub nadwagą,",
  "blizny pooperacyjne i pooparzeniowe,",
  "po liposukcji oraz zabiegach chirurgicznych,",
  "bóle mięśni, pleców i karku.",
];

const TreatmentMasazProzniowyPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("masaz-prozniowy"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const cosmetologySpecialization = services.filter(
    (item) => item.specialization === "cosmetology",
  );

  const otherCosmetologyTreatments = treatment.filter(
    (item) =>
      item.specialization?.includes("cosmetology") &&
      item.treatment !== "masaz-prozniowy",
  );

  const displayedTreatments = showMoreTreatments
    ? otherCosmetologyTreatments
    : otherCosmetologyTreatments.slice(0, 3);

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  const toggleShowMoreTreatments = () => {
    setShowMoreTreatments((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Masaż próżniowy"
        description="Masaż próżniowy w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o technologii Roboderm, wpływie na tkanki, zaletach i wskazaniach."
        path="/zabiegi/kosmetologia/masaz-prozniowy"
        image={masazProzniowy.images?.[0]?.src}
        imageAlt={masazProzniowy.images?.[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-cosmetology">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/zabiegi/kosmetologia">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Kosmetologia</Box>
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

                  <Link to="/zabiegi/kosmetologia">Kosmetologia</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Masaż próżniowy
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Masaż próżniowy
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    Masaż próżniowy inspirowany jest intuicją{" "}
                    <strong>profesora Jean-Claude&apos;a Guimberteau</strong>,
                    specjalisty w dziedzinie chirurgii rekonstrukcyjnej, który
                    poświęcił wiele lat na obserwację skóry w zakresie struktury
                    tkanki łącznej. Guimberteau wykazał, że{" "}
                    <strong>skóra musi być pojmowana jako żywa</strong>,{" "}
                    <strong>ciągła materia</strong>, a tkanka podskórna składa
                    się z sieci <strong>mikrowakuoli</strong>, które tworzą
                    funkcjonalną jednostkę struktury tkanki. Ta nowa wizja
                    całkowicie zastępuje tradycyjną koncepcję tkanki warstwowej,
                    a tym samym narzuca potrzebę nowego sposobu leczenia skóry.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={masazProzniowy.images[0].src}
                      imageAlt={masazProzniowy.images[0].alt}
                      imageAuthor={masazProzniowy.images[0].author}
                      imageHref={masazProzniowy.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    <strong>
                      Najnowsza, opatentowana technologia Roboderm<sup>®</sup>{" "}
                      zapewnia zaskakujące rezultaty
                    </strong>
                    . Dzięki ekskluzywnemu, rozszerzonemu na skalę
                    międzynarodową patentowi Roboderm<sup>®</sup>, oferuje w
                    pełni konfigurowalny zabieg odmładzania skóry i modelowania
                    sylwetki. Roboderm<sup>®</sup>jest unikalną technologią na
                    świecie zdolną do generowania Multi{" "}
                    <strong>Mikropęcherzykowej Stymulacji (M.M.S.A.)</strong> za
                    pomocą zestawu mikrootworów obecnych na powierzchni
                    mikrostymulatorów znajdujących się w głowicach zabiegowych.
                    Mikrostymulatory obracają się tam i z powrotem, precyzyjnie
                    i skutecznie stymulując skórę na całej powierzchni,
                    docierając do najmniejszych jej części i generując{" "}
                    <strong>do 21 600 mikrostymulacji na minutę</strong>.
                  </Typography>

                  <Typography className="paragraph">
                    Działanie stymulujące odbywa się na{" "}
                    <strong>3 powierzchniach jednocześnie</strong>: 2
                    niezależne, zmotoryzowane mikrostymulatory, które poruszają
                    się jednocześnie na tym samym obszarze, uzupełniając swoje
                    działanie i generując gimnastykę tkankową z efektem
                    ujędrniającym oraz 1 centralna komora umieszczona pomiędzy
                    mikrostymulatorami, która oddziałuje dogłębniej na tkankę
                    tłuszczową.
                  </Typography>

                  <Typography className="paragraph">
                    Technologia Roboderm<sup>®</sup>umożliwia{" "}
                    <strong>potrojenie powierzchni stymulacji</strong>,
                    uzyskując głębszą i bardziej efektywną stymulację skóry.
                    Dzięki takiemu mechanizmowi działania ciało jest pobudzane
                    na poziomie naskórka, skóry właściwej, tkanki podskórnej
                    oraz tkanki mięśniowej.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Wpływ na tkanki:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {tissueEffects.map((item) => (
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
                    Zalety:
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
                    id="masaz-prozniowy-specialists-list"
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
                        cardPath={`/specjalisci/kosmetologia/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="masaz-prozniowy-specialists-list"
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
                    {cosmetologySpecialization.map((item) => (
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
                      aria-label="Pozostałe zabiegi kosmetologiczne"
                    >
                      Pozostałe zabiegi
                    </Typography>
                  </Box>

                  <Box
                    id="masaz-prozniowy-other-treatments-list"
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

                    {otherCosmetologyTreatments.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreTreatments}
                          aria-expanded={showMoreTreatments}
                          aria-controls="masaz-prozniowy-other-treatments-list"
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

export default TreatmentMasazProzniowyPartial;
