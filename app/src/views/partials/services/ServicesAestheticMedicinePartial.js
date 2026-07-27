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

import Seo from "../../../components/Seo";
import Container from "../../../components/Container";
import CardTeamProposed from "../../../components/CardTeamProposed";
import CardProposed from "../../../components/CardProposed";
import ListBulleted from "../../../components/ListBulleted";
import Image from "../../../components/Image";

import { services, aestheticMedicine } from "../../../data/services";
import { team } from "../../../data/team";
import { treatment } from "../../../data/treatment";

const aestheticMedicineTreatments = [
  "niwelowanie zmarszczek mimicznych i spłycanie głębokich bruzd",
  "powiększanie, modelowanie i nawilżanie ust",
  "korekta owalu twarzy",
  "wolumetria twarzy",
  "mezoterapia",
  "laseroterapia",
  "zamykanie rozszerzonych naczynek",
  "redukcja blizn i rozstępów",
  "niwelowanie cieni w okolicy oczu",
  "rewitalizacja skóry",
  "leczenie nadpotliwości dołów pachowych, dłoni i stóp",
];

const ServicesAestheticMedicinePartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const aestheticMedicineSpecialists = team.filter((item) =>
    item.specialization.includes("aesthetic-medicine"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? aestheticMedicineSpecialists
    : aestheticMedicineSpecialists.slice(0, 3);

  const filteredTreatments = treatment.filter((item) =>
    item.specialization.includes("aesthetic-medicine"),
  );

  const displayedTreatments = showMoreTreatments
    ? filteredTreatments
    : filteredTreatments.slice(0, 3);

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("aesthetic-medicine"),
  );

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  const toggleShowMoreTreatments = () => {
    setShowMoreTreatments((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Medycyna estetyczna"
        description="Medycyna estetyczna w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje oraz zabiegi wspierające poprawę jakości, kondycji i wyglądu skóry."
        path="/specjalizacje/medycyna-estetyczna"
        image={aestheticMedicine.images[0]?.src}
        imageAlt={aestheticMedicine.images[0]?.alt}
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
                    Medycyna estetyczna
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Medycyna estetyczna
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Medycyna estetyczna</strong> obejmuje małoinwazyjne
                    procedury medyczne służące poprawie jakości, kondycji i
                    wyglądu skóry. Zabiegi są poprzedzane konsultacją, podczas
                    której lekarz ocenia potrzeby pacjenta, możliwe wskazania
                    oraz przeciwwskazania.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={aestheticMedicine.images[0].src}
                      imageAlt={aestheticMedicine.images[0].alt}
                      imageAuthor={aestheticMedicine.images[0].author}
                      imageHref={aestheticMedicine.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Dostępne procedury mogą wspierać rewitalizację skóry,
                    redukcję oznak starzenia oraz korektę wybranych
                    niedoskonałości. Zakres zabiegu i stosowana metoda są
                    dobierane indywidualnie, z uwzględnieniem stanu skóry,
                    oczekiwań pacjenta oraz zachowania naturalnych proporcji.
                  </Typography>

                  <Typography className="paragraph">
                    W medycynie estetycznej wykorzystuje się między innymi
                    preparaty iniekcyjne, laseroterapię, stymulatory tkankowe
                    oraz technologie wspierające regenerację i poprawę napięcia
                    skóry. O wyborze odpowiedniej procedury decyduje lekarz po
                    przeprowadzeniu konsultacji.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Zakres medycyny estetycznej
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {aestheticMedicineTreatments.map((item) => (
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
                    Dostępność konkretnego zabiegu oraz możliwość jego wykonania
                    są ustalane podczas indywidualnej konsultacji.
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
                    id="aesthetic-medicine-specialists-list"
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

                    {aestheticMedicineSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="aesthetic-medicine-specialists-list"
                          endIcon={
                            showMoreSpecialists ? (
                              <KeyboardArrowUpIcon aria-hidden="true" />
                            ) : (
                              <KeyboardArrowDownIcon aria-hidden="true" />
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
                      Zabiegi
                    </Typography>
                  </Box>

                  <Box
                    id="aesthetic-medicine-treatments-list"
                    className="card-wrapper"
                  >
                    {displayedTreatments.map((item) => (
                      <CardProposed
                        key={item.id}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.images[0].src}
                        cardPath={item.path}
                      />
                    ))}

                    {filteredTreatments.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreTreatments}
                          aria-expanded={showMoreTreatments}
                          aria-controls="aesthetic-medicine-treatments-list"
                          endIcon={
                            showMoreTreatments ? (
                              <KeyboardArrowUpIcon aria-hidden="true" />
                            ) : (
                              <KeyboardArrowDownIcon aria-hidden="true" />
                            )
                          }
                        >
                          {showMoreTreatments ? "Pokaż mniej" : "Pokaż więcej"}
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

export default ServicesAestheticMedicinePartial;
