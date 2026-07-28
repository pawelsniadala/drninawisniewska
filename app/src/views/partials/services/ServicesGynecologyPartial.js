import React from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Seo from "../../../components/Seo";
import Container from "../../../components/Container";
import CardTeamProposed from "../../../components/CardTeamProposed";
import CardProposed from "../../../components/CardProposed";
import ListBulleted from "../../../components/ListBulleted";
import Image from "../../../components/Image";

import { services, gynecology } from "../../../data/services";

import { team } from "../../../data/team";

const gynecologyProblems = [
  "zaburzenia miesiączkowania",
  "infekcje dróg rodnych",
  "dobór odpowiedniej metody antykoncepcji",
  "niepłodność",
  "dolegliwości bólowe w obrębie miednicy",
  "zaburzenia hormonalne związane z układem rozrodczym",
  "profilaktyka i diagnostyka chorób narządów rodnych",
];

const ServicesGynecologyPartial = () => {
  const gynecologySpecialists = team.filter((item) =>
    item.specialization.includes("gynecology"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("gynecology"),
  );

  return (
    <>
      <Seo
        title="Ginekologia"
        description="Ginekologia w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje, diagnostykę, badania USG oraz leczenie problemów ginekologicznych."
        path="/specjalizacje/ginekologia"
        image={gynecology.images[0]?.src}
        imageAlt={gynecology.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-gynecology">
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
                    Ginekologia
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Ginekologia
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Ginekologia</strong> jest dziedziną medycyny
                    zajmującą się profilaktyką, diagnostyką i leczeniem chorób
                    żeńskiego układu rozrodczego. Obejmuje również opiekę
                    związaną ze zdrowiem hormonalnym, płodnością oraz regularną
                    profilaktyką ginekologiczną.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={gynecology.images[0].src}
                      imageAlt={gynecology.images[0].alt}
                      imageAuthor={gynecology.images[0].author}
                      imageHref={gynecology.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Konsultacja ginekologiczna może obejmować wywiad medyczny,
                    badanie ginekologiczne oraz diagnostykę obrazową. Zakres
                    wizyty jest dobierany indywidualnie do wieku, stanu zdrowia,
                    zgłaszanych dolegliwości i potrzeb pacjentki.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Najczęstsze powody konsultacji ginekologicznej
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {gynecologyProblems.map((item) => (
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
                    Diagnostyka ginekologiczna
                  </Typography>

                  <Typography className="paragraph">
                    W zależności od wskazań konsultacja może zostać uzupełniona
                    o badanie USG. Pozwala ono ocenić narządy układu rozrodczego
                    oraz wspiera rozpoznawanie przyczyn zgłaszanych
                    dolegliwości.
                  </Typography>

                  <Typography className="paragraph">
                    Przyjmujemy również pacjentki w wieku rozwojowym. Zakres
                    badania jest dostosowywany do wieku oraz wskazań medycznych.
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
                    {gynecologySpecialists.map((item) => (
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
                        cardPath={`/specjalisci/ginekologia/${item.specialist}`}
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

export default ServicesGynecologyPartial;
