import React from "react";
import { Link } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Seo from "../../../components/Seo";
import Container from "../../../components/Container";
import CardTeamProposed from "../../../components/CardTeamProposed";
import CardCareerProposed from "../../../components/CardCareerProposed";
import CardProposed from "../../../components/CardProposed";
import Image from "../../../components/Image";

import { services, psychology } from "../../../data/services";

import { team } from "../../../data/team";
import { career } from "../../../data/career";

const ServicesPsychologyPartial = () => {
  const psychologySpecialists = team.filter((item) =>
    item.specialization.includes("psychology"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("psychology"),
  );

  const psychologyCareerOffers = career.filter((item) =>
    item.specialization?.includes("psychology"),
  );

  return (
    <>
      <Seo
        title="Psychologia"
        description="Psychologia w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje, terapię i diagnostykę psychologiczną dzieci, młodzieży i dorosłych."
        path="/specjalizacje/psychologia"
        image={psychology.images[0]?.src}
        imageAlt={psychology.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-psychology">
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
                    Psychologia
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Psychologia
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Psychologia</strong> jest dziedziną zajmującą się
                    funkcjonowaniem człowieka, jego emocjami, zachowaniem,
                    procesami poznawczymi oraz relacjami z innymi osobami. Pomoc
                    psychologiczna może wspierać osoby doświadczające trudności
                    emocjonalnych, stresu, kryzysów życiowych lub problemów w
                    codziennym funkcjonowaniu.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={psychology.images[0].src}
                      imageAlt={psychology.images[0].alt}
                      imageAuthor={psychology.images[0].author}
                      imageHref={psychology.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Konsultacja psychologiczna umożliwia omówienie zgłaszanych
                    trudności, poznanie sytuacji pacjenta oraz określenie
                    odpowiedniej formy dalszego wsparcia. Zakres pomocy jest
                    dobierany indywidualnie do wieku, potrzeb i aktualnej
                    sytuacji pacjenta.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Pomoc psychologiczna
                  </Typography>

                  <Typography className="paragraph">
                    Praca z psychologiem może obejmować konsultacje, terapię,
                    poradnictwo oraz diagnostykę psychologiczną. Jej celem może
                    być lepsze rozumienie własnych emocji i zachowań, rozwijanie
                    sposobów radzenia sobie z trudnościami oraz poprawa
                    codziennego funkcjonowania.
                  </Typography>

                  <Typography className="paragraph">
                    Pomoc psychologiczna może dotyczyć między innymi obniżonego
                    nastroju, lęku, trudności adaptacyjnych, problemów w
                    relacjach, kryzysów życiowych, trudności wychowawczych oraz
                    zaburzeń emocjonalnych.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Diagnostyka psychologiczna
                  </Typography>

                  <Typography className="paragraph">
                    Diagnostyka psychologiczna służy określeniu sposobu
                    funkcjonowania pacjenta i możliwych przyczyn zgłaszanych
                    trudności. W zależności od wskazań może obejmować rozmowę,
                    obserwację oraz odpowiednio dobrane narzędzia diagnostyczne.
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
                    {psychologySpecialists.map((item) => (
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
                        cardPath={`/specjalisci/psychologia/${item.specialist}`}
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

                {psychologyCareerOffers.length > 0 && (
                  <Box className="box-proposed">
                    <Box className="header-wrapper">
                      <Typography component="h2" className="header">
                        Oferty pracy
                      </Typography>
                    </Box>

                    <Box className="card-wrapper">
                      {psychologyCareerOffers.map((item) => (
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

export default ServicesPsychologyPartial;
