import React from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Page from "../../../components/Page";
import Seo from "../../../components/Seo";
import Container from "../../../components/Container";
import CardTeamProposed from "../../../components/CardTeamProposed";
import CardProposed from "../../../components/CardProposed";
import ListBulleted from "../../../components/ListBulleted";
import Image from "../../../components/Image";

import { services, cardiology } from "../../../data/services";

import { team } from "../../../data/team";
import { treatment } from "../../../data/treatment";

const commonCardiovascularDiseases = [
  "nadciśnienie tętnicze",
  "zaburzenia rytmu serca",
  "choroba wieńcowa",
  "niewydolność serca",
  "miażdżyca",
  "choroby zastawek serca",
  "choroby osierdzia",
  "zapalenie mięśnia sercowego",
  "kardiomiopatie",
  "wrodzone i nabyte wady serca",
  "zatorowość płucna",
  "choroby aorty",
];

const ServicesCardiologyPartial = () => {
  const cardiologySpecialists = team.filter((item) =>
    item.specialization.includes("cardiology"),
  );

  const cardiologyTreatments = treatment.filter((item) =>
    item.specialization.includes("cardiology"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("cardiology"),
  );

  return (
    <>
      <Seo
        title="Kardiologia"
        description="Kardiologia w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje, diagnostykę chorób serca, badanie EKG oraz echo serca."
        path="/specjalizacje/kardiologia"
        image={cardiology.images[0]?.src}
        imageAlt={cardiology.images[0]?.alt}
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
                    Kardiologia
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Kardiologia
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Kardiologia</strong> jest dziedziną medycyny
                    zajmującą się diagnostyką, leczeniem i profilaktyką chorób
                    serca oraz układu krążenia. Obejmuje między innymi
                    zaburzenia rytmu serca, chorobę wieńcową, nadciśnienie
                    tętnicze, wady serca oraz schorzenia mięśnia sercowego i
                    zastawek.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={cardiology.images[0].src}
                      imageAlt={cardiology.images[0].alt}
                      imageAuthor={cardiology.images[0].author}
                      imageHref={cardiology.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Konsultacja kardiologiczna może być wskazana między innymi w
                    przypadku bólu w klatce piersiowej, kołatania serca,
                    duszności, omdleń, podwyższonego ciśnienia tętniczego lub
                    obniżonej tolerancji wysiłku. Zakres diagnostyki jest
                    dobierany do objawów, wywiadu medycznego i stanu zdrowia
                    pacjenta.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Najczęstsze choroby serca i układu krążenia
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {commonCardiovascularDiseases.map((item) => (
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
                    Diagnostyka kardiologiczna
                  </Typography>

                  <Typography className="paragraph">
                    Klinika oferuje konsultacje kardiologiczne, spoczynkowe
                    badanie EKG z opisem oraz echo serca. Badania umożliwiają
                    ocenę pracy serca, jego budowy, rytmu oraz funkcjonowania
                    zastawek.
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

                  <Box className="card-wrapper">
                    {cardiologySpecialists.map((item) => (
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
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Badania i świadczenia
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {cardiologyTreatments.map((item) => (
                      <CardProposed
                        key={item.id}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.images[0].src}
                        cardPath={item.path}
                      />
                    ))}
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

export default Page(ServicesCardiologyPartial);
