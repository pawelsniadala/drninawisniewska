import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Seo from "../../../../components/Seo";
import Container from "../../../../components/Container";
import CardTeamProposed from "../../../../components/CardTeamProposed";
import CardProposed from "../../../../components/CardProposed";
import Image from "../../../../components/Image";

import { plastykaPowiek } from "../../../../data/treatment";
import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const TreatmentPlastykaPowiekPartial = () => {
  const [showMoreEffects, setShowMoreEffects] = useState(false);
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const treatmentEffects = plastykaPowiek.effects || [];

  const displayedEffects = showMoreEffects
    ? treatmentEffects
    : treatmentEffects.slice(0, 3);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("plastyka-powiek"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const plasticSurgerySpecialization = services.filter(
    (item) => item.specialization === "cosmetic-surgery",
  );

  const toggleShowMoreEffects = () => {
    setShowMoreEffects((previousState) => !previousState);
  };

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#plastyka-powiek-gallery",
      children: "a",
      pswpModule: () => import("photoswipe"),
      padding: {
        top: 50,
        right: 20,
        bottom: 50,
        left: 20,
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
        title="Plastyka powiek"
        description="Plastyka powiek w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje korektę powiek górnych i dolnych oraz usunięcie nadmiaru skóry wokół oczu."
        path="/zabiegi/chirurgia-plastyczna/plastyka-powiek"
        image={plastykaPowiek.images?.[0]?.src}
        imageAlt={plastykaPowiek.images?.[0]?.alt}
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
                  <Link to="/zabiegi/chirurgia-plastyczna">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Chirurgia plastyczna</Box>
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

                  <Link to="/zabiegi">Zabiegi</Link>

                  <Link to="/zabiegi/chirurgia-plastyczna">
                    Chirurgia plastyczna
                  </Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Plastyka powiek
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Plastyka powiek
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Plastyka powiek</strong>, inaczej blefaroplastyka,
                    to zabieg mający na celu usunięcie nadmiaru skóry wokół
                    oczu. W zakres blefaroplastyki wchodzi zarówno{" "}
                    <strong>korekta powieki górnej jak i dolnej</strong>.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={plastykaPowiek.images[0].src}
                      imageAlt={plastykaPowiek.images[0].alt}
                      imageAuthor={plastykaPowiek.images[0].author}
                      imageHref={plastykaPowiek.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Zabieg przeprowadzany jest w znieczuleniu miejscowym.
                    Bezpośrednio po zabiegu skóra jest zaczerwieniona i widoczne
                    są delikatne punkty sublimacji. Drugiego dnia po zabiegu
                    może pojawić się lekki obrzęk, który utrzymuje się
                    maksymalnie cztery dni. Drobne strupki odpadają po sześciu
                    dniach.
                  </Typography>
                </Box>

                {treatmentEffects.length > 0 && (
                  <Box className="box-treatment">
                    <Typography
                      component="h2"
                      variant="h5"
                      className="header alternative"
                    >
                      Efekty zabiegu
                    </Typography>

                    <Box id="plastyka-powiek-gallery" className="pswp-gallery">
                      {displayedEffects.map((item, index) => (
                        <a
                          key={`plastyka-powiek-effect-${index}`}
                          href={item.original.src}
                          data-pswp-width={item.original.width}
                          data-pswp-height={item.original.height}
                          data-cropped="true"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Powiększ zdjęcie efektu zabiegu: ${
                            item.alt || "plastyka powiek"
                          }`}
                        >
                          <Box className="box">
                            <LazyLoadImage
                              src={item.thumbnail.src}
                              alt={item.alt || "Efekt plastyki powiek"}
                              height="100%"
                              width="100%"
                              effect="blur"
                            />

                            <span className="pswp-caption-content">
                              <span className="description">
                                {item.description}
                              </span>

                              <span className="info">
                                {plastykaPowiek.info}
                              </span>
                            </span>
                          </Box>
                        </a>
                      ))}

                      {treatmentEffects.length > 3 && (
                        <Fade in>
                          <Button
                            className="show-more-cards"
                            onClick={toggleShowMoreEffects}
                            aria-expanded={showMoreEffects}
                            aria-controls="plastyka-powiek-gallery"
                            endIcon={
                              showMoreEffects ? (
                                <KeyboardArrowUpIcon
                                  aria-hidden="true"
                                  focusable="false"
                                />
                              ) : (
                                <KeyboardArrowDownIcon
                                  aria-hidden="true"
                                  focusable="false"
                                />
                              )
                            }
                          >
                            {showMoreEffects ? "Pokaż mniej" : "Pokaż więcej"}
                          </Button>
                        </Fade>
                      )}
                    </Box>

                    <Typography className="paragraph">
                      Zdjęcia ukazują efekt zabiegu u konkretnego pacjenta.
                      Efekt zabiegu może się różnić w zależności od
                      indywidualnych cech pacjneta, liczby powtórzeń zabiegu,
                      stosowania się pacjenta do zaleceń pozabiegowych oraz
                      umiejętności i doświadczenia osoby przeprowadzającej
                      zabieg.
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box className="proposed-wrapper">
                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Specjaliści
                    </Typography>
                  </Box>

                  <Box
                    id="plastyka-powiek-specialists-list"
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
                        cardPath={`/specjalisci/chirurgia-plastyczna/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="plastyka-powiek-specialists-list"
                          endIcon={
                            showMoreSpecialists ? (
                              <KeyboardArrowUpIcon
                                aria-hidden="true"
                                focusable="false"
                              />
                            ) : (
                              <KeyboardArrowDownIcon
                                aria-hidden="true"
                                focusable="false"
                              />
                            )
                          }
                        >
                          {showMoreSpecialists ? "Pokaż mniej" : "Pokaż więcej"}
                        </Button>
                      </Fade>
                    )}
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Specjalizacja
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {plasticSurgerySpecialization.map((item) => (
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

export default TreatmentPlastykaPowiekPartial;
