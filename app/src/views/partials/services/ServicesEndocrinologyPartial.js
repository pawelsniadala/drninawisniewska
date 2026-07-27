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

import { services, endocrinology } from "../../../data/services";

import { team } from "../../../data/team";

const endocrinologyProblems = [
  "nadczynność i niedoczynność tarczycy",
  "choroba Hashimoto",
  "choroba Gravesa-Basedowa",
  "choroby przysadki mózgowej",
  "zaburzenia pracy nadnerczy",
  "insulinooporność",
];

const ServicesEndocrinologyPartial = () => {
  const endocrinologySpecialists = team.filter((item) =>
    item.specialization.includes("endocrinology"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("endocrinology"),
  );

  return (
    <>
      <Seo
        title="Endokrynologia"
        description="Endokrynologia w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje, diagnostykę i leczenie zaburzeń hormonalnych oraz chorób tarczycy."
        path="/specjalizacje/endokrynologia"
        image={endocrinology.images[0]?.src}
        imageAlt={endocrinology.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-endocrinology">
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
                    Endokrynologia
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Endokrynologia
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Endokrynologia</strong> jest dziedziną medycyny
                    zajmującą się diagnostyką i leczeniem zaburzeń
                    funkcjonowania gruczołów wydzielania wewnętrznego oraz
                    związanych z nimi nieprawidłowości hormonalnych.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={endocrinology.images[0].src}
                      imageAlt={endocrinology.images[0].alt}
                      imageAuthor={endocrinology.images[0].author}
                      imageHref={endocrinology.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Układ hormonalny wpływa między innymi na metabolizm, masę
                    ciała, wzrost, gospodarkę energetyczną, płodność oraz
                    funkcjonowanie wielu narządów. Zaburzenia hormonalne mogą
                    powodować różnorodne objawy, dlatego ich rozpoznanie wymaga
                    zebrania wywiadu, oceny wyników badań i dobrania
                    odpowiedniego postępowania.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Najczęstsze problemy endokrynologiczne
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {endocrinologyProblems.map((item) => (
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
                    Zakres diagnostyki i leczenia jest dobierany indywidualnie
                    na podstawie objawów, historii choroby oraz wyników badań
                    laboratoryjnych i obrazowych.
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

                  <Box className="card-wrapper">
                    {endocrinologySpecialists.map((item) => (
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
                        cardPath={`/specjalisci/endokrynologia/${item.specialist}`}
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

export default Page(ServicesEndocrinologyPartial);
