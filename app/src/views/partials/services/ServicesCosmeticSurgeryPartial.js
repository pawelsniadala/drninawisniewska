import React from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Page from "../../../components/Page";
import Seo from "../../../components/Seo";
import Container from "../../../components/Container";
import CardTeamProposed from "../../../components/CardTeamProposed";
import CardProposed from "../../../components/CardProposed";
import Image from "../../../components/Image";

import { services, cosmeticSurgery } from "../../../data/services";

import { team } from "../../../data/team";
import { treatment } from "../../../data/treatment";

const ServicesCosmeticSurgeryPartial = () => {
  const cosmeticSurgerySpecialists = team.filter((item) =>
    item.specialization.includes("cosmetic-surgery"),
  );

  const cosmeticSurgeryTreatments = treatment.filter((item) =>
    item.specialization.includes("cosmetic-surgery"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("cosmetic-surgery"),
  );

  return (
    <>
      <Seo
        title="Chirurgia plastyczna"
        description="Chirurgia plastyczna w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje oraz plastykę powiek wykonywaną ze wskazań estetycznych lub funkcjonalnych."
        path="/specjalizacje/chirurgia-plastyczna"
        image={cosmeticSurgery.images[0]?.src}
        imageAlt={cosmeticSurgery.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-cosmetic-surgery">
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
                    Chirurgia plastyczna
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Chirurgia plastyczna
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Chirurgia plastyczna</strong> jest dziedziną
                    medycyny zajmującą się rekonstrukcją oraz korektą wrodzonych
                    i nabytych zmian dotyczących wyglądu oraz funkcjonowania
                    poszczególnych obszarów ciała.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={cosmeticSurgery.images[0].src}
                      imageAlt={cosmeticSurgery.images[0].alt}
                      imageAuthor={cosmeticSurgery.images[0].author}
                      imageHref={cosmeticSurgery.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Zabiegi chirurgii plastycznej mogą być wykonywane ze wskazań
                    estetycznych lub funkcjonalnych. Decyzja o wykonaniu
                    procedury jest podejmowana po konsultacji, podczas której
                    lekarz ocenia stan zdrowia pacjenta, wskazania,
                    przeciwwskazania oraz możliwe efekty leczenia.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Plastyka powiek
                  </Typography>

                  <Typography className="paragraph">
                    W Klinice dr Niny Wiśniewskiej wykonywana jest plastyka
                    powiek, określana również jako blefaroplastyka. Zabieg
                    polega na usunięciu nadmiaru skóry, a w zależności od
                    wskazań także części tkanki tłuszczowej w obrębie powiek.
                  </Typography>

                  <Typography className="paragraph">
                    Plastyka powiek może poprawić wygląd okolicy oczu. W
                    niektórych przypadkach nadmiar skóry powiek górnych może
                    ograniczać pole widzenia, dlatego zabieg może mieć również
                    uzasadnienie funkcjonalne.
                  </Typography>

                  <Typography className="paragraph">
                    Zakres zabiegu oraz możliwość jego wykonania są ustalane
                    indywidualnie podczas konsultacji z chirurgiem plastycznym.
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
                    {cosmeticSurgerySpecialists.map((item) => (
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
                        cardPath={`/specjalisci/chirurgia-plastyczna/${item.specialist}`}
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
                    {cosmeticSurgeryTreatments.map((item) => (
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

export default Page(ServicesCosmeticSurgeryPartial);
