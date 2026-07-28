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
import CardCareerProposed from "../../../components/CardCareerProposed";
import CardProposed from "../../../components/CardProposed";
import ListBulleted from "../../../components/ListBulleted";
import Image from "../../../components/Image";

import { services, dermatology } from "../../../data/services";
import { team } from "../../../data/team";
import { treatment } from "../../../data/treatment";
import { career } from "../../../data/career";

const dermatologyProblems = [
  "kontrola znamion barwnikowych",
  "trądzik pospolity",
  "trądzik różowaty",
  "atopowe zapalenie skóry",
  "łojotokowe zapalenie skóry",
  "łuszczyca",
  "pokrzywka",
  "kontaktowe zapalenie skóry",
  "liszaj płaski",
  "łysienie",
  "łupież",
  "grzybice skóry i paznokci",
  "choroby przenoszone drogą płciową",
];

const ServicesDermatologyPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const dermatologySpecialists = team.filter((item) =>
    item.specialization.includes("dermatology"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? dermatologySpecialists
    : dermatologySpecialists.slice(0, 3);

  const dermatologyTreatments = treatment.filter((item) =>
    item.specialization.includes("dermatology"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("dermatology"),
  );

  const dermatologyCareerOffers = career.filter((item) =>
    item.specialization?.includes("dermatology"),
  );

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  return (
    <>
      <Seo
        title="Dermatologia"
        description="Dermatologia w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje diagnostykę, leczenie i profilaktykę chorób skóry, włosów i paznokci u dzieci i dorosłych."
        path="/specjalizacje/dermatologia"
        image={dermatology.images[0]?.src}
        imageAlt={dermatology.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-dermatology">
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
                    Dermatologia
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Dermatologia
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Dermatologia</strong> jest dziedziną medycyny
                    zajmującą się diagnostyką, leczeniem i profilaktyką chorób
                    skóry, włosów, paznokci oraz błon śluzowych. Obejmuje
                    zarówno częste schorzenia, takie jak trądzik, atopowe
                    zapalenie skóry i łuszczyca, jak również zmiany wymagające
                    pogłębionej diagnostyki.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={dermatology.images[0].src}
                      imageAlt={dermatology.images[0].alt}
                      imageAuthor={dermatology.images[0].author}
                      imageHref={dermatology.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Postępowanie dermatologiczne jest dobierane do rodzaju
                    zmian, objawów i potrzeb pacjenta. W zależności od wskazań
                    może obejmować badanie dermatoskopowe, fototerapię oraz
                    zabiegi usuwania wybranych zmian skórnych. Istotnym
                    elementem opieki jest również profilaktyka nowotworów skóry
                    i ochrona przed szkodliwym działaniem promieniowania UV.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Najczęstsze problemy dermatologiczne
                  </Typography>

                  <Typography className="paragraph">
                    Do kliniki można zgłosić się między innymi z następującymi
                    problemami:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {dermatologyProblems.map((item) => (
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

                  <Box
                    id="dermatology-specialists-list"
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
                        cardPath={`/specjalisci/dermatologia/${item.specialist}`}
                      />
                    ))}

                    <Fade in={dermatologySpecialists.length > 3}>
                      <Button
                        className="show-more-cards"
                        onClick={toggleShowMoreSpecialists}
                        aria-expanded={showMoreSpecialists}
                        aria-controls="dermatology-specialists-list"
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
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Zabiegi
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {dermatologyTreatments.map((item) => (
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

                {dermatologyCareerOffers.length > 0 && (
                  <Box className="box-proposed">
                    <Box className="header-wrapper">
                      <Typography component="h2" className="header">
                        Oferty pracy
                      </Typography>
                    </Box>

                    <Box className="card-wrapper">
                      {dermatologyCareerOffers.map((item) => (
                        <CardCareerProposed
                          key={item.id}
                          cardTitle={item.title}
                          cardLocation={item.location}
                          cardDate={item.date}
                          cardAgreement={item.agreement}
                          cardPosition={item.position}
                          cardType={item.type}
                          cardPlace={item.place}
                          cardPath={item.path}
                          cardImage={item.image}
                          cardStatus={item.status}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServicesDermatologyPartial;
