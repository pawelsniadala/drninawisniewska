import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Container from "../components/Container";

import hero1 from "../assets/hero/hero1.jpg";
import hero2 from "../assets/hero/hero2.jpg";
import hero3 from "../assets/hero/hero3.jpg";
import hero4 from "../assets/hero/hero4.jpg";

const HeroSection = () => {
  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  const buttonIcon = <ArrowForwardIcon aria-hidden="true" focusable="false" />;

  return (
    <Box
      component="section"
      className="hero-section"
      aria-label="Najważniejsze informacje o klinice"
    >
      {isDesktop ? (
        <Box
          id="hero-carousel"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="5000"
          data-bs-pause="hover"
          data-bs-touch="true"
          data-bs-wrap="true"
          role="region"
          aria-roledescription="karuzela"
          aria-label="Oferta Kliniki dr Niny Wiśniewskiej"
        >
          <Box className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slajd 1: Zadbaj o swoje zdrowie"
            />

            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="1"
              aria-label="Slajd 2: Dermatologia"
            />

            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="2"
              aria-label="Slajd 3: Medycyna estetyczna"
            />

            <button
              type="button"
              data-bs-target="#hero-carousel"
              data-bs-slide-to="3"
              aria-label="Slajd 4: Kosmetologia"
            />
          </Box>

          <Box className="carousel-inner">
            {/* SPECJALIZACJE */}
            <Box
              className="carousel-item active"
              role="group"
              aria-roledescription="slajd"
              aria-label="1 z 4"
            >
              <img
                className="carousel-image"
                width="100%"
                src={hero1}
                alt=""
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              <Box
                className="carousel-caption d-none d-md-block"
                sx={{ bottom: "1.25rem" }}
              >
                <Container>
                  <Typography
                    component="h1"
                    className="carousel-header"
                    variant="h4"
                    align="left"
                    data-aos="fade-in"
                    data-aos-delay="100"
                  >
                    Zadbaj o swoje zdrowie
                  </Typography>

                  <Typography
                    component="p"
                    variant="h6"
                    className="carousel-subheader"
                    align="left"
                    data-aos="fade-in"
                    data-aos-delay="100"
                  >
                    Zapoznaj się z treścią naszych specjalizacji
                  </Typography>

                  <Box
                    display="flex"
                    justifyContent="flex-start"
                    marginTop={2}
                    data-aos="fade-in"
                    data-aos-delay="100"
                  >
                    <Box className="link-contained-more" width="auto">
                      <Button
                        component={Link}
                        to="/specjalizacje"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={buttonIcon}
                      >
                        Zobacz nasze Specjalizacje
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>

            {/* DERMATOLOGIA */}
            <Box
              className="carousel-item"
              role="group"
              aria-roledescription="slajd"
              aria-label="2 z 4"
            >
              <LazyLoadImage
                className="carousel-image"
                width="100%"
                src={hero2}
                alt=""
                effect="blur"
              />

              <Box
                className="carousel-caption d-none d-md-block"
                sx={{ bottom: "1.25rem" }}
              >
                <Container>
                  <Typography
                    component="h2"
                    className="carousel-header"
                    variant="h4"
                    align="right"
                  >
                    Dermatologia
                  </Typography>

                  <Typography
                    component="p"
                    variant="h6"
                    className="carousel-subheader"
                    align="right"
                  >
                    Zapoznaj się z cennikiem naszych usług
                  </Typography>

                  <Box display="flex" justifyContent="flex-end" marginTop={2}>
                    <Box className="link-contained-more" width="auto">
                      <Button
                        component={Link}
                        to="/cennik"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={buttonIcon}
                      >
                        Zobacz cennik usług
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>

            {/* MEDYCYNA ESTETYCZNA */}
            <Box
              className="carousel-item"
              role="group"
              aria-roledescription="slajd"
              aria-label="3 z 4"
            >
              <LazyLoadImage
                className="carousel-image"
                width="100%"
                src={hero3}
                alt=""
                effect="blur"
              />

              <Box
                className="carousel-caption d-none d-md-block"
                sx={{ top: "1.25rem" }}
              >
                <Container>
                  <Typography
                    component="h2"
                    className="carousel-header"
                    variant="h4"
                    align="right"
                  >
                    Medycyna estetyczna
                  </Typography>

                  <Typography
                    component="p"
                    variant="h6"
                    className="carousel-subheader"
                    align="right"
                  >
                    Korzystamy z najnowszych technologii medycznych
                  </Typography>

                  <Box display="flex" justifyContent="flex-end" marginTop={2}>
                    <Box className="link-contained-more" width="auto">
                      <Button
                        component={Link}
                        to="/zabiegi/medycyna-estetyczna"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={buttonIcon}
                      >
                        Zobacz nasze zabiegi
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>

            {/* KOSMETOLOGIA */}
            <Box
              className="carousel-item"
              role="group"
              aria-roledescription="slajd"
              aria-label="4 z 4"
            >
              <LazyLoadImage
                className="carousel-image"
                width="100%"
                src={hero4}
                alt=""
                effect="blur"
              />

              <Box
                className="carousel-caption d-none d-md-block"
                sx={{ top: "1.25rem" }}
              >
                <Container>
                  <Typography
                    component="h2"
                    className="carousel-header"
                    variant="h4"
                    align="left"
                  >
                    Kosmetologia
                  </Typography>

                  <Typography
                    component="p"
                    variant="h6"
                    className="carousel-subheader"
                    align="left"
                  >
                    Nasz zespół składa się z wysokiej klasy specjalistów
                  </Typography>

                  <Box display="flex" justifyContent="flex-start" marginTop={2}>
                    <Box className="link-contained-more" width="auto">
                      <Button
                        component={Link}
                        to="/specjalisci/kosmetologia"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={buttonIcon}
                      >
                        Zobacz naszych specjalistów
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>

          <button
            type="button"
            className="carousel-control-prev"
            data-bs-target="#hero-carousel"
            data-bs-slide="prev"
            aria-label="Poprzedni slajd"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="carousel-control-next"
            data-bs-target="#hero-carousel"
            data-bs-slide="next"
            aria-label="Następny slajd"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
          </button>
        </Box>
      ) : (
        <Box className="jumbotron">
          <Box className="photo-wrapper">
            <Box
              className="content-wrapper"
              minHeight={{
                xs: 590,
                sm: 650,
                md: 790,
              }}
            >
              <Box className="description-wrapper">
                <Container>
                  <Typography
                    component="h1"
                    variant="h4"
                    className="jumbotron-header"
                    align="center"
                    data-aos="fade-in"
                    data-aos-delay="100"
                  >
                    Zadbaj o swoje zdrowie
                  </Typography>

                  <Typography
                    component="p"
                    variant="h6"
                    className="jumbotron-subheader"
                    align="center"
                    data-aos="fade-in"
                    data-aos-delay="100"
                  >
                    Zapoznaj się z treścią naszych usług
                  </Typography>

                  <Box display="flex" justifyContent="center" marginTop={2}>
                    <Box className="link-contained-more" width="auto">
                      <Button
                        component={Link}
                        to="/specjalizacje"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={buttonIcon}
                      >
                        Zobacz nasze Specjalizacje
                      </Button>
                    </Box>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HeroSection;
