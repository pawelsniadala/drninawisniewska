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

import { services, psychiatry } from "../../../data/services";

import { team } from "../../../data/team";
import { treatment } from "../../../data/treatment";
import { career } from "../../../data/career";

const ServicesPsychiatryPartial = () => {
  const psychiatrySpecialists = team.filter((item) =>
    item.specialization.includes("psychiatry"),
  );

  const psychiatryTreatments = treatment.filter((item) =>
    item.specialization.includes("psychiatry"),
  );

  const relatedServices = services.filter((item) =>
    item.relatedSpecializations.includes("psychiatry"),
  );

  const psychiatryCareerOffers = career.filter((item) =>
    item.specialization?.includes("psychiatry"),
  );

  return (
    <>
      <Seo
        title="Psychiatria"
        description="Psychiatria w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje konsultacje i diagnostykę psychiatryczną dzieci i młodzieży."
        path="/specjalizacje/psychiatria"
        image={psychiatry.images[0]?.src}
        imageAlt={psychiatry.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-psychiatry">
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
                    Psychiatria
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Psychiatria
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper services">
              <Box className="service-description">
                <Box className="box-service">
                  <Typography className="paragraph">
                    <strong>Psychiatria</strong> jest dziedziną medycyny
                    zajmującą się rozpoznawaniem, leczeniem i profilaktyką
                    zaburzeń psychicznych oraz problemów wpływających na emocje,
                    zachowanie i codzienne funkcjonowanie pacjenta.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={psychiatry.images[0].src}
                      imageAlt={psychiatry.images[0].alt}
                      imageAuthor={psychiatry.images[0].author}
                      imageHref={psychiatry.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Konsultacja psychiatryczna obejmuje rozmowę z pacjentem,
                    ocenę zgłaszanych objawów oraz zebranie informacji
                    dotyczących zdrowia, rozwoju i funkcjonowania w codziennym
                    życiu. W przypadku dzieci i młodzieży ważnym elementem
                    wizyty może być również rozmowa z rodzicem lub opiekunem.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Konsultacje psychiatryczne dzieci i młodzieży
                  </Typography>

                  <Typography className="paragraph">
                    W Klinice dr Niny Wiśniewskiej prowadzone są konsultacje i
                    diagnostyka psychiatryczna dzieci oraz młodzieży. Zakres
                    wizyty jest dostosowywany do wieku pacjenta, zgłaszanych
                    trudności i indywidualnych potrzeb.
                  </Typography>

                  <Typography className="paragraph">
                    W zależności od rozpoznanego problemu dalsze postępowanie
                    może obejmować psychoedukację, zalecenia dotyczące terapii
                    psychologicznej, współpracę z innymi specjalistami lub
                    leczenie farmakologiczne, gdy istnieją do tego wskazania.
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
                    {psychiatrySpecialists.map((item) => (
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
                        cardPath={`/specjalisci/psychiatria/${item.specialist}`}
                      />
                    ))}
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Konsultacje i diagnostyka
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {psychiatryTreatments.map((item) => (
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

                {psychiatryCareerOffers.length > 0 && (
                  <Box className="box-proposed">
                    <Box className="header-wrapper">
                      <Typography component="h2" className="header">
                        Oferty pracy
                      </Typography>
                    </Box>

                    <Box className="card-wrapper">
                      {psychiatryCareerOffers.map((item) => (
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

export default ServicesPsychiatryPartial;
