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
  ultradzwiekiIFalaRadiowa,
} from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const treatmentIndications = [
  "niszczenie komórek tłuszczowych,",
  "cellulit,",
  "redukcja blizn i rozstępów,",
  "nierówności po liposukcji,",
  "redukcja zmarszczek,",
  "termiczny lifting skóry,",
  "ujędrnienie i modelowanie ciała,",
  "poprawa owalu twarzy,",
  'likwidacja "chomików",',
  "likwidacja drugiego podbródka,",
  "redukcja blizn,",
  "redukcja rozstępów.",
];

const TreatmentUltradzwiekiIFalaRadiowaPartial = () => {
  const [showMoreEffects, setShowMoreEffects] = useState(false);

  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentEffects = ultradzwiekiIFalaRadiowa.effects || [];

  const displayedEffects = showMoreEffects
    ? treatmentEffects
    : treatmentEffects.slice(0, 3);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("ultradzwieki-i-fala-radiowa"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const cosmetologySpecialization = services.filter(
    (item) => item.specialization === "cosmetology",
  );

  const otherCosmetologyTreatments = treatment.filter(
    (item) =>
      item.specialization?.includes("cosmetology") &&
      item.treatment !== "ultradzwieki-i-fala-radiowa",
  );

  const displayedTreatments = showMoreTreatments
    ? otherCosmetologyTreatments
    : otherCosmetologyTreatments.slice(0, 3);

  const toggleShowMoreEffects = () => {
    setShowMoreEffects((previousState) => !previousState);
  };

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  const toggleShowMoreTreatments = () => {
    setShowMoreTreatments((previousState) => !previousState);
  };

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#ultradzwieki-i-fala-radiowa-gallery",
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
        title="Ultradźwięki i fala radiowa"
        description="Zabieg wykorzystujący ultradźwięki i falę radiową w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o działaniu, wskazaniach i efektach zabiegu."
        path="/zabiegi/kosmetologia/ultradzwieki-i-fala-radiowa"
        image={ultradzwiekiIFalaRadiowa.images?.[0]?.src}
        imageAlt={ultradzwiekiIFalaRadiowa.images?.[0]?.alt}
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header services-cosmetology">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/zabiegi/kosmetologia">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Kosmetologia</Box>
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

                  <Link to="/zabiegi/kosmetologia">Kosmetologia</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Ultradźwięki i fala radiowa
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Ultradźwięki i fala radiowa
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    Ultradźwięki połączone z falą radiową to zabieg, który w
                    bezpieczny sposób redukuje cellulit i tkankę tłuszczową,
                    niweluje wiotkość skóry oraz modeluje twarz. Dzięki
                    połączeniu dwóch technologii intensyfikujemy efekty
                    terapeutyczne.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={ultradzwiekiIFalaRadiowa.images[0].src}
                      imageAlt={ultradzwiekiIFalaRadiowa.images[0].alt}
                      imageAuthor={ultradzwiekiIFalaRadiowa.images[0].author}
                      imageHref={ultradzwiekiIFalaRadiowa.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Ultradźwięki selektywnie niszczą błony komórkowe adipocytów,
                    czyli komórek tłuszczowych. Następnie fala radiowa
                    przyśpiesza metabolizm usprawniając działanie układu
                    limfatycznego oraz usuwanie uwolnionego tłuszczu z
                    organizmu. Radiofrekwencja pobudza również fibroblasty co
                    skutkuje ujędrnieniem skóry w okolicy zabiegowej.
                  </Typography>

                  <Typography className="paragraph">
                    Zabieg ten jest{" "}
                    <strong>alternatywą dla procedur chirurgicznych</strong>.
                    Można przeprowadzać go w każdej okolicy ciała lub twarzy,
                    bez pominięcia szyi, brzucha, pośladków czy ud. Już po
                    jednorazowej procedurze kondycja skóra ulega widocznej
                    poprawie. By osiągnąć trwałe rezultaty zalecana jest seria 5
                    zabiegów w odstępach dwutygodniowych.
                  </Typography>
                </Box>

                <Box className="box-treatment">
                  <Typography
                    component="h2"
                    variant="h5"
                    className="header alternative"
                  >
                    Wskazania
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {treatmentIndications.map((item, index) => (
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
                      id="ultradzwieki-i-fala-radiowa-gallery"
                      className="pswp-gallery"
                    >
                      {displayedEffects.map((item, index) => (
                        <a
                          key={`ultradzwieki-i-fala-radiowa-effect-${index}`}
                          href={item.original.src}
                          data-pswp-width={item.original.width}
                          data-pswp-height={item.original.height}
                          data-cropped="true"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Powiększ zdjęcie efektu zabiegu: ${
                            item.alt || "ultradźwięki i fala radiowa"
                          }`}
                        >
                          <Box className="box">
                            <LazyLoadImage
                              src={item.thumbnail.src}
                              alt={
                                item.alt ||
                                "Efekt zabiegu z wykorzystaniem ultradźwięków i fali radiowej"
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
                                {ultradzwiekiIFalaRadiowa.info}
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
                            aria-controls="ultradzwieki-i-fala-radiowa-gallery"
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
                    id="ultradzwieki-i-fala-radiowa-specialists-list"
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
                        cardPath={`/specjalisci/kosmetologia/${item.specialist}`}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="ultradzwieki-i-fala-radiowa-specialists-list"
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
                    {cosmetologySpecialization.map((item) => (
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

                <Box className="box-proposed">
                  <Box className="header-wrapper">
                    <Typography
                      component="h2"
                      className="header"
                      aria-label="Pozostałe zabiegi kosmetologiczne"
                    >
                      Pozostałe zabiegi
                    </Typography>
                  </Box>

                  <Box
                    id="ultradzwieki-i-fala-radiowa-other-treatments-list"
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

                    {otherCosmetologyTreatments.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreTreatments}
                          aria-expanded={showMoreTreatments}
                          aria-controls="ultradzwieki-i-fala-radiowa-other-treatments-list"
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
                          {showMoreTreatments ? "Pokaż mniej" : "Pokaż więcej"}
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

export default TreatmentUltradzwiekiIFalaRadiowaPartial;
