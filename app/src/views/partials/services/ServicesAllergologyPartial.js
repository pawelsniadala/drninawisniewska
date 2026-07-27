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

import { services, allergology } from "../../../data/services";

import { team } from "../../../data/team";
import { treatment } from "../../../data/treatment";

const allergologyScope = [
  "diagnostyka chorób alergicznych",
  "leczenie objawowe",
  "leczenie przyczynowe",
  "profilaktyka i ograniczanie kontaktu z alergenami",
];

const commonAllergicDiseases = [
  "alergie pokarmowe",
  "atopowe zapalenie skóry",
  "pokrzywka alergiczna",
  "alergiczny nieżyt nosa",
  "astma alergiczna",
  "alergiczne zapalenie spojówek",
];

const ServicesAllergologyPartial = () => {
  const allergologySpecialists = team.filter((item) =>
    item.specialization.includes("allergology"),
  );

  const allergologyTreatments = treatment.filter((item) =>
    item.specialization.includes("allergology"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("allergology"),
  );

  return (
    <>
      <Seo
        title="Alergologia"
        description="Alergologia w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje, diagnostykę i leczenie alergii u dzieci i dorosłych, w tym testy skórne i immunoterapię."
        path="/specjalizacje/alergologia"
        image={allergology.images[0]?.src}
        imageAlt={allergology.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-allergology">
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
                    Alergologia
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Alergologia
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Alergologia</strong> jest dziedziną medycyny
                    zajmującą się rozpoznawaniem, leczeniem i profilaktyką
                    chorób alergicznych. Alergia jest nieprawidłową reakcją
                    układu odpornościowego na substancje, które u większości
                    osób nie wywołują objawów. Mogą nimi być między innymi pyłki
                    roślin, roztocza, pokarmy, leki, alergeny zwierzęce oraz
                    składniki kosmetyków.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={allergology.images[0].src}
                      imageAlt={allergology.images[0].alt}
                      imageAuthor={allergology.images[0].author}
                      imageHref={allergology.images[0].href}
                    />
                  </Box>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Zakres alergologii
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {allergologyScope.map((item) => (
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
                    Diagnostyka jest dobierana do rodzaju objawów, wieku
                    pacjenta oraz podejrzewanego źródła alergii. W zależności od
                    wskazań może obejmować wywiad lekarski, testy skórne oraz
                    inne badania pomagające ustalić przyczynę dolegliwości.
                  </Typography>

                  <Typography className="paragraph">
                    Choroby alergiczne mogą występować w każdym wieku. U dzieci
                    częściej obserwuje się między innymi alergie pokarmowe i
                    atopowe zapalenie skóry, natomiast u starszych pacjentów
                    także alergiczny nieżyt nosa, astmę i alergiczne zapalenie
                    spojówek.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Najczęstsze choroby alergiczne
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {commonAllergicDiseases.map((item) => (
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

                  <Box className="card-wrapper">
                    {allergologySpecialists.map((item) => (
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
                        cardPath={`/specjalisci/alergologia/${item.specialist}`}
                      />
                    ))}
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Zabiegi
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {allergologyTreatments.map((item) => (
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

export default Page(ServicesAllergologyPartial);
