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

import { services, clinicalDietitian } from "../../../data/services";

import { team } from "../../../data/team";

const consultationReasons = [
  "wsparcie w uzupełnianiu niedoborów żywieniowych",
  "bezpieczna i racjonalna redukcja masy ciała",
  "zmiana dotychczasowych nawyków żywieniowych",
  "dostosowanie sposobu żywienia do chorób współistniejących",
  "przygotowanie indywidualnych zaleceń żywieniowych",
];

const ServicesClinicalDietitianPartial = () => {
  const clinicalDietitianSpecialists = team.filter((item) =>
    item.specialization.includes("clinical-dietitian"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("clinical-dietitian"),
  );

  return (
    <>
      <Seo
        title="Dietetyka kliniczna"
        description="Dietetyka kliniczna w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje i indywidualne zalecenia żywieniowe dostosowane do stanu zdrowia i potrzeb pacjenta."
        path="/specjalizacje/dietetyka-kliniczna"
        image={clinicalDietitian.images[0]?.src}
        imageAlt={clinicalDietitian.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-clinical-dietitian">
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
                    Dietetyka kliniczna
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Dietetyka kliniczna
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Dietetyka kliniczna</strong> jest dziedziną
                    zajmującą się sposobem żywienia osób zdrowych oraz pacjentów
                    zmagających się z różnymi problemami zdrowotnymi.
                    Odpowiednio dobrane zalecenia żywieniowe mogą wspierać
                    leczenie, poprawę samopoczucia oraz budowanie prawidłowych
                    nawyków.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={clinicalDietitian.images[0].src}
                      imageAlt={clinicalDietitian.images[0].alt}
                      imageAuthor={clinicalDietitian.images[0].author}
                      imageHref={clinicalDietitian.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Podczas konsultacji dietetyk analizuje sposób żywienia, stan
                    zdrowia, styl życia oraz indywidualne potrzeby pacjenta. Na
                    tej podstawie może przygotować zalecenia pomagające
                    uporządkować codzienną dietę i dostosować ją do wyznaczonego
                    celu.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Najczęstsze powody konsultacji dietetycznej
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {consultationReasons.map((item) => (
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
                    Zalecenia są ustalane indywidualnie, z uwzględnieniem
                    aktualnych wyników badań, przyjmowanych leków, chorób
                    współistniejących oraz możliwości pacjenta.
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
                    {clinicalDietitianSpecialists.map((item) => (
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
                        cardPath={`/specjalisci/dietetyka-kliniczna/${item.specialist}`}
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

export default ServicesClinicalDietitianPartial;
