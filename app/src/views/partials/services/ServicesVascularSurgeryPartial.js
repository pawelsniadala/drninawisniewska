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

import { services, vascularSurgery } from "../../../data/services";

import { team } from "../../../data/team";
import { treatment } from "../../../data/treatment";

const vascularSurgeryProblems = [
  "miażdżyca i choroby tętnic",
  "tętniaki",
  "przewlekła niewydolność żylna",
  "żylaki kończyn dolnych",
];

const ServicesVascularSurgeryPartial = () => {
  const vascularSurgerySpecialists = team.filter((item) =>
    item.specialization.includes("vascular-surgery"),
  );

  const vascularSurgeryTreatments = treatment.filter((item) =>
    item.specialization.includes("vascular-surgery"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("vascular-surgery"),
  );

  return (
    <>
      <Seo
        title="Chirurgia naczyniowa"
        description="Chirurgia naczyniowa w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje, diagnostykę i leczenie chorób tętnic i żył, w tym żylaków kończyn dolnych."
        path="/specjalizacje/chirurgia-naczyniowa"
        image={vascularSurgery.images[0]?.src}
        imageAlt={vascularSurgery.images[0]?.alt}
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
                    Chirurgia naczyniowa
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Chirurgia naczyniowa
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Chirurgia naczyniowa</strong> jest dziedziną
                    medycyny zajmującą się diagnostyką oraz leczeniem chorób
                    tętnic, żył i naczyń limfatycznych. W zależności od rodzaju
                    schorzenia stosowane może być leczenie zachowawcze,
                    małoinwazyjne lub operacyjne.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={vascularSurgery.images[0].src}
                      imageAlt={vascularSurgery.images[0].alt}
                      imageAuthor={vascularSurgery.images[0].author}
                      imageHref={vascularSurgery.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Konsultacja chirurga naczyniowego może obejmować ocenę
                    zgłaszanych dolegliwości, badanie pacjenta oraz analizę
                    wykonanych wcześniej badań obrazowych. Dalsze postępowanie
                    jest dobierane indywidualnie do rodzaju i stopnia
                    zaawansowania choroby.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Najczęstsze problemy naczyniowe
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {vascularSurgeryProblems.map((item) => (
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
                    Leczenie żylaków
                  </Typography>

                  <Typography className="paragraph">
                    W Klinice wykonywane są zabiegi skleroterapii oraz
                    laserowego leczenia żylaków. Odpowiednia metoda jest
                    dobierana po konsultacji i ocenie układu żylnego pacjenta.
                  </Typography>

                  <Typography className="paragraph">
                    W ramach tej specjalizacji w Klinice nie jest prowadzone
                    leczenie żylaków odbytu, określanych również jako hemoroidy.
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
                    {vascularSurgerySpecialists.map((item) => (
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
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Zabiegi
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {vascularSurgeryTreatments.map((item) => (
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

export default Page(ServicesVascularSurgeryPartial);
