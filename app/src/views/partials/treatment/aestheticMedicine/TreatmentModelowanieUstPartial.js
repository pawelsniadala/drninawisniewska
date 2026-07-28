import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

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

import Seo from "../../../../components/Seo";
import Container from "../../../../components/Container";
import CardTeamProposed from "../../../../components/CardTeamProposed";
import CardProposed from "../../../../components/CardProposed";
import ListBulleted from "../../../../components/ListBulleted";
import Image from "../../../../components/Image";

import {
  treatment,
  modelowanieUst,
} from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const lipModelingEffects = [
  "nadanie ustom pożądanego kształtu,",
  "uwydatnienie i podkreślenie czerwieni wargowej,",
  "skorygowanie asymetrii warg,",
  "poprawę struktury i kolorytu ust,",
  "nadanie pełnego wyglądu,",
  "nawilżenie czerwieni wargowej.",
];

const TreatmentModelowanieUstPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);
  const [showMoreTreatments, setShowMoreTreatments] = useState(false);
  const [showMoreEffects, setShowMoreEffects] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("modelowanie-ust"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const aestheticMedicineSpecialization = services.filter(
    (item) => item.specialization === "aesthetic-medicine",
  );

  const otherAestheticMedicineTreatments = treatment.filter(
    (item) =>
      item.specialization?.includes("aesthetic-medicine") &&
      item.treatment !== "modelowanie-ust",
  );

  const displayedTreatments = showMoreTreatments
    ? otherAestheticMedicineTreatments
    : otherAestheticMedicineTreatments.slice(0, 3);

  const treatmentEffects = modelowanieUst.effects || [];

  const displayedEffects = showMoreEffects
    ? treatmentEffects
    : treatmentEffects.slice(0, 3);

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  const toggleShowMoreTreatments = () => {
    setShowMoreTreatments((previousState) => !previousState);
  };

  const toggleShowMoreEffects = () => {
    setShowMoreEffects((previousState) => !previousState);
  };

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#modelowanie-ust-gallery",
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
        title="Modelowanie ust"
        description="Modelowanie ust kwasem hialuronowym w Klinice dr Niny Wiśniewskiej w Wyszkowie obejmuje korektę kształtu, proporcji i objętości czerwieni wargowej."
        path="/zabiegi/medycyna-estetyczna/modelowanie-ust"
        image={modelowanieUst.images[0]?.src}
        imageAlt={modelowanieUst.images[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-aesthetic-medicine">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/zabiegi/medycyna-estetyczna">
                    <ArrowBackIcon
                      aria-hidden="true"
                      focusable="false"
                    />

                    <Box component="span">
                      Medycyna estetyczna
                    </Box>
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
                  <Link to="/">
                    Strona główna
                  </Link>

                  <Link to="/zabiegi">
                    Zabiegi
                  </Link>

                  <Link to="/zabiegi/medycyna-estetyczna">
                    Medycyna estetyczna
                  </Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Modelowanie ust
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Modelowanie ust
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    Modelowanie i powiększanie czerwieni wargowej
                    z wykorzystaniem kwasu hialuronowego to wciąż
                    jeden z bardziej popularnych zabiegów medycyny
                    estetycznej.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={modelowanieUst.images[0].src}
                      imageAlt={modelowanieUst.images[0].alt}
                      imageAuthor={modelowanieUst.images[0].author}
                      imageHref={modelowanieUst.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Podając preparat z kwasem hialuronowym
                    w strategiczne miejsca jesteśmy w stanie nie
                    tylko uwydatnić i wypełnić usta, ale także
                    zniwelować asymetrię, zredukować dysproporcję
                    między wargą górną a dolną oraz nawilżyć
                    przesuszoną czerwień wargową. Kwas hialuronowy
                    wykazuje bowiem właściwości higroskopijne,
                    czyli wiążące wodę. Dzięki czemu usta
                    natychmiast stają się pełniejsze, mocniej
                    nawilżone i bardziej sprężyste.
                  </Typography>

                  <Typography className="paragraph">
                    Kwas hialuronowy to substancja naturalnie
                    występującą w naszym ciele. Dzięki temu
                    wypełniacze na bazie HA są bezpieczne dla
                    naszego ciała. Oczywiście bezpieczeństwo
                    zabiegu zależne jest od jego prawidłowego
                    wykonania oraz stosowania się do zaleceń
                    pozabiegowych. Kluczowe jest zatem zachowanie
                    wszelkich zasad antyseptyki i higieny.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Efekty pozabiegowe:
                  </Typography>

                  <Grid
                    container
                    spacing={0.5}
                    marginBottom={2}
                  >
                    {lipModelingEffects.map((item, index) => (
                      <ListBulleted
                        key={`${item}-${index}`}
                        ListBulletedItem={item}
                        ListBulletedStyle={{
                          backgroundImage:
                            "linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)",
                        }}
                      />
                    ))}
                  </Grid>

                  <Typography className="paragraph">
                    Efekt zabiegu utrzymuje się od 6 do 12 miesięcy
                    w zależności od uwarunkowań genetycznych,
                    rodzaju preparatu oraz trybu życia prowadzonego
                    przez pacjenta.
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

                    <Box
                      id="modelowanie-ust-gallery"
                      className="pswp-gallery"
                    >
                      {displayedEffects.map((item, index) => (
                        <a
                          key={`modelowanie-ust-effect-${index}`}
                          href={item.original.src}
                          data-pswp-width={item.original.width}
                          data-pswp-height={item.original.height}
                          data-cropped="true"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Powiększ zdjęcie efektu zabiegu: ${
                            item.alt || "modelowanie ust"
                          }`}
                        >
                          <Box className="box">
                            <LazyLoadImage
                              src={item.thumbnail.src}
                              alt={
                                item.alt ||
                                "Efekt modelowania ust"
                              }
                              height="100%"
                              width="100%"
                              effect="blur"
                            />

                            <span className="pswp-caption-content">
                              <span className="description">
                                {item.description}
                              </span>

                              <span className="info">
                                {modelowanieUst.info}
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
                            aria-controls="modelowanie-ust-gallery"
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
                            {showMoreEffects
                              ? "Pokaż mniej"
                              : "Pokaż więcej"}
                          </Button>
                        </Fade>
                      )}
                    </Box>

                    <Typography className="paragraph">
                      Zdjęcia ukazują efekt zabiegu u konkretnego
                      pacjenta. Efekt zabiegu może się różnić
                      w zależności od indywidualnych cech pacjneta,
                      liczby powtórzeń zabiegu, stosowania się
                      pacjenta do zaleceń pozabiegowych oraz
                      umiejętności i doświadczenia osoby
                      przeprowadzającej zabieg.
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box className="proposed-wrapper">
                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography
                      component="h2"
                      className="header"
                    >
                      Specjaliści
                    </Typography>
                  </Box>

                  <Box
                    id="modelowanie-ust-specialists-list"
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
                        cardPath={`/specjalisci/medycyna-estetyczna/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="modelowanie-ust-specialists-list"
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
                          {showMoreSpecialists
                            ? "Pokaż mniej"
                            : "Pokaż więcej"}
                        </Button>
                      </Fade>
                    )}
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography
                      component="h2"
                      className="header"
                    >
                      Specjalizacja
                    </Typography>
                  </Box>

                  <Box className="card-wrapper">
                    {aestheticMedicineSpecialization.map(
                      (item) => (
                        <CardProposed
                          key={item.id}
                          cardTitle={item.title}
                          cardDescription={item.description}
                          cardImage={item.image}
                          cardPath={item.path}
                        />
                      ),
                    )}
                  </Box>
                </Box>

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography
                      component="h2"
                      className="header"
                      aria-label="Pozostałe zabiegi medycyny estetycznej"
                    >
                      Pozostałe zabiegi
                    </Typography>
                  </Box>

                  <Box
                    id="modelowanie-ust-other-treatments-list"
                    className="card-wrapper"
                  >
                    {displayedTreatments.map((item) => (
                      <CardProposed
                        key={item.id}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.images?.[0]?.src}
                        cardPath={item.path}
                      />
                    ))}

                    {otherAestheticMedicineTreatments.length >
                      3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreTreatments}
                          aria-expanded={showMoreTreatments}
                          aria-controls="modelowanie-ust-other-treatments-list"
                          endIcon={
                            showMoreTreatments ? (
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
                          {showMoreTreatments
                            ? "Pokaż mniej"
                            : "Pokaż więcej"}
                        </Button>
                      </Fade>
                    )}
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

export default TreatmentModelowanieUstPartial;