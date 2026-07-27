import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Seo from "../components/Seo";
import Container from "../components/Container";
import ListBulleted from "../components/ListBulleted";

import { clinic } from "../data/clinic";

const ClinicView = () => {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#my-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
      padding: {
        top: 50,
        bottom: 50,
      },
    });

    new PhotoSwipeDynamicCaption(lightbox, {
      type: "below",
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, []);

  return (
    <>
      <Seo
        title="Klinika"
        description="Informacje o Klinice dr Niny Wiśniewskiej w Wyszkowie, jej działalności, wnętrzach oraz zakresie świadczonej opieki medycznej."
        path="/klinika"
        image={clinic.pictures[3]?.original.src}
        imageAlt={clinic.pictures[3]?.alt}
      />

      <Box className="clinic-view">
        <Box className="view-wrapper">
          <Box className="view-header">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Powrót do strony głównej"
                >
                  <Link to="/">
                    <ArrowBackIcon />
                    <Box component="span">Strona główna</Box>
                  </Link>
                </Breadcrumbs>

                <Breadcrumbs
                  className="breadcrumb nav"
                  separator={<NavigateNextIcon fontSize="small" />}
                  aria-label="Ścieżka nawigacyjna"
                >
                  <Link to="/">Strona główna</Link>

                  <Typography color="text.primary" aria-current="page">
                    Klinika
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Klinika
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper clinic">
              <Box className="clinic-description-wrapper">
                <Box>
                  <Typography className="paragraph">
                    W Klinice dr Niny Wiśniewskiej znajdziecie Państwo pomoc w
                    zakresie leczenia trądzika, trądzika różowatego, łuszczycy,
                    atopowego zapalenia skóry, łojotokowego zapalenia skóry,
                    egzemy i innych chorób.
                  </Typography>
                </Box>

                <Box>
                  <Typography className="paragraph">
                    Dodatkowym atutem jest lampa do fototerapii UVB 311 nm i
                    PUVA-bath, przeznaczona dla pacjentów z łuszczycą, AZS i
                    wypryskiem, a także możliwość wykonania płatkowych testów
                    kontaktowych.
                  </Typography>
                </Box>
              </Box>

              <Box className="photos-wrapper">
                <Box className="pswp-gallery" id="my-gallery">
                  {clinic.pictures.map((item, index) => (
                    <a
                      key={`my-gallery-${index}`}
                      href={item.original.src}
                      data-pswp-width={item.original.width}
                      data-pswp-height={item.original.height}
                      data-cropped="true"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Box className="box">
                        <LazyLoadImage
                          src={item.thumbnail.src}
                          alt={item.designation}
                          height="100%"
                          width="100%"
                          effect="blur"
                        />

                        <span className="pswp-caption-content">
                          Autor: {item.author}
                        </span>
                      </Box>
                    </a>
                  ))}
                </Box>
              </Box>

              <Box className="clinic-services-wrapper">
                <Typography className="paragraph">
                  Możecie Państwo liczyć na profesjonalne usługi z zakresu
                  medycyny estetycznej pod nadzorem lekarza. Dodatkowo oferujemy
                  usługi takich specjalistów jak: ortopeda, chirurg naczyniowy,
                  fizjoterapeuta, dietetyk kliniczny oraz
                  ginekolog-endokrynolog.
                </Typography>

                <Typography className="paragraph">
                  Aby uzyskać szczegółowe informacje dotyczące sposobu
                  funkcjonowania naszej placówki, polecamy zapoznanie się z{" "}
                  <Link className="link" to="/klinika/regulamin-organizacyjny">
                    Regulaminem organizacyjnym
                  </Link>
                  , który zawiera istotne informacje dotyczące zasad i procedur
                  działania placówki.
                </Typography>

                <Box className="services-item-wrapper">
                  <Grid container spacing={1} sx={{ marginTop: 0 }}>
                    {[
                      "Dermatologia",
                      "Medycyna estetyczna",
                      "Kosmetologia",
                      "Chirurgia plastyczna",
                      "Alergologia",
                      "Ginekologia",
                      "Endokrynologia",
                    ].map((item, index) => (
                      <ListBulleted
                        key={index}
                        ListBulletedItem={item}
                        ListBulletedStyle={{
                          backgroundImage:
                            "linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)",
                        }}
                      />
                    ))}
                  </Grid>

                  <Grid container spacing={1} sx={{ marginTop: 0 }}>
                    {[
                      "USG",
                      "Chirurgia naczyniowa",
                      "Dietetyka kliniczna",
                      "Kardiologia",
                      "Psychiatria",
                      "Psychologia",
                    ].map((item, index) => (
                      <ListBulleted
                        key={index}
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
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ClinicView;
