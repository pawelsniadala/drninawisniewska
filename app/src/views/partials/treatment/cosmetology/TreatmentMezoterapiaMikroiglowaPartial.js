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

import { treatment, mezoterapiaMikroiglowa } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const dermapenTechnologyBenefits = [
  "Precyzyjnie dobrana głębokość nakłuć pozwala na pełną kontrolę wykonywanego zabiegu i całkowite spersonalizowanie protokołu.",
  "Automatyczna kontrola głębokości nakłuć - podczas jednego zabiegu możliwość nakłuwania skóry na różnych głębokościach.",
  "Zwiększone przenikanie substancji czynnych - indywidualizacja terapii w zależności od wskazań.",
  "Zwiększone przenikanie substancji czynnych - indywidualizacja terapii w zależności od wskazań.",
  "Minimalne odczucia bólowe i większy komfort zabiegu dla pacjenta.",
  "Pełna sterylność i krótki okres trwania zabiegu.",
];

const treatmentPreparation = [
  "dzień przed zabiegiem nie spożywać alkoholu i unikać substancji odwadniających,",
  "na 3 dni przed zabiegiem nie zażywać NLPZ (niesteroidowych leków przeciwzapalnych), takich jak Ibuprom, Polopiryna, Pyralgina, Ketonal, Nurofen, Aspiryna.",
];

const treatmentSteps = [
  "Procedura trwa około 30-60 minut.",
  "Miejsce poddawane zabiegowi jest dezynfekowane.",
  "Indywidualnie dobrane substancje aktywne z linii MG Collection będą nakładane na skórę podczas zabiegu.",
  "W trakcie zabiegu skóra jest równomiernie zaczerwieniona.",
  "Po zabiegu na skórę zostanie nałożona specjalna maska łagodząca z linii Dp Dermaceuticals, krem pozabiegowy lub podkład medyczny z filtrem UV Cover Recover.",
  "Następnego dnia skóra może być zaróżowiona, napięta i nadwrażliwa. Warto wtedy nakładać specjalne preparaty o działaniu kojącym i regenerującym.",
  "Po 3-4 dniach może pojawić się delikatne złuszczanie.",
];

const TreatmentMezoterapiaMikroiglowaPartial = () => {
  const [showMoreEffects, setShowMoreEffects] = useState(false);

  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentEffects = mezoterapiaMikroiglowa.effects || [];

  const displayedEffects = showMoreEffects
    ? treatmentEffects
    : treatmentEffects.slice(0, 3);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("mezoterapia-mikroiglowa"),
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
      item.treatment !== "mezoterapia-mikroiglowa",
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
      gallery: "#mezoterapia-mikroiglowa-gallery",
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
        title="Mezoterapia mikroigłowa"
        description="Mezoterapia mikroigłowa Dermapen 4 w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o przebiegu zabiegu, przygotowaniu i przeciwwskazaniach."
        path="/zabiegi/kosmetologia/mezoterapia-mikroiglowa"
        image={mezoterapiaMikroiglowa.images?.[0]?.src}
        imageAlt={mezoterapiaMikroiglowa.images?.[0]?.alt}
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
                    Mezoterapia mikroigłowa
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Mezoterapia mikroigłowa
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    Mezoterapia mikroigłowa to zabieg polegający na wykonywaniu
                    kontrolowanych mikronakłuć skóry. Stymuluje naturalne
                    procesy regeneracyjne, wspiera produkcję kolagenu i elastyny
                    oraz ułatwia wprowadzanie składników aktywnych w głąb skóry.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={mezoterapiaMikroiglowa.images[0].src}
                      imageAlt={mezoterapiaMikroiglowa.images[0].alt}
                      imageAuthor={mezoterapiaMikroiglowa.images[0].author}
                      imageHref={mezoterapiaMikroiglowa.images[0].href}
                    />
                  </Box>

                  <Typography component="h2" variant="h5" className="header">
                    Dermapen™ 4
                  </Typography>

                  <Typography className="paragraph">
                    Najnowszy Dermapen™ jest w pełni cyfrowym oryginalnym
                    urządzeniem do mikronakłuwania frakcyjnego skóry.
                  </Typography>

                  <Typography className="paragraph">
                    Dermapen™ to zabieg wspierający regenerację skóry oraz
                    umożliwiający uzyskanie przyspieszonych efektów stosowanych
                    podczas procedury z zastosowaniem preparatów. Mikroskopijne
                    nakłucia wspomagają penetracje składników aktywnych w
                    głębsze warstwy skóry, dzięki czemu ich działanie jest
                    znacznie intensywniejsze niż w przypadku powierzchownej
                    aplikacji na naskórek. W zależności od doboru preparatów
                    Dermapen™ pomaga redukować rozmaite problemy skórne.
                  </Typography>

                  <Typography
                    component="h3"
                    variant="h6"
                    className="paragraph heading"
                  >
                    Na co pozwala technologia zastosowana w urządzeniu Dermapen™
                    4
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {dermapenTechnologyBenefits.map((item, index) => (
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

                  <Typography
                    component="h3"
                    variant="h6"
                    className="paragraph heading"
                  >
                    Przygotowanie do zabiegu:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {treatmentPreparation.map((item) => (
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
                    component="h3"
                    variant="h6"
                    className="paragraph heading"
                  >
                    Jak przebiega zabieg z zastosowaniem Dermapen™ 4?
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {treatmentSteps.map((item, index) => (
                      <ListBulleted
                        key={`${item}-${index}`}
                        ListBulletedItem={item}
                        ListBulletedStyle={{
                          backgroundImage:
                            "linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)",
                        }}
                        ListBulletedNumber={index + 1}
                      />
                    ))}
                  </Grid>

                  <Typography className="paragraph">
                    Przeciwwskazania: choroby skóry: łuszczyca, egzema w
                    aktywnej fazie, trądzik ropowiczy, stan zapalny skóry:
                    zakażenia, podrażnienia skóry, ciąża i karmienie piersią,
                    choroby nowotworowe, schizofrenia, epilepsja, cukrzyca:
                    zwłaszcza w przypadku słabego gojenia się ran.
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
                      id="mezoterapia-mikroiglowa-gallery"
                      className="pswp-gallery"
                    >
                      {displayedEffects.map((item, index) => (
                        <a
                          key={`mezoterapia-mikroiglowa-effect-${index}`}
                          href={item.original.src}
                          data-pswp-width={item.original.width}
                          data-pswp-height={item.original.height}
                          data-cropped="true"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Powiększ zdjęcie efektu zabiegu: ${
                            item.alt || "mezoterapia mikroigłowa"
                          }`}
                        >
                          <Box className="box">
                            <LazyLoadImage
                              src={item.thumbnail.src}
                              alt={item.alt || "Efekt mezoterapii mikroigłowej"}
                              height="100%"
                              width="100%"
                              effect="blur"
                            />

                            <span className="pswp-caption-content">
                              <span className="description">
                                {item.description}
                              </span>

                              <span className="info">
                                {mezoterapiaMikroiglowa.info}
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
                            aria-controls="mezoterapia-mikroiglowa-gallery"
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
                    id="mezoterapia-mikroiglowa-specialists-list"
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
                          aria-controls="mezoterapia-mikroiglowa-specialists-list"
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
                    id="mezoterapia-mikroiglowa-other-treatments-list"
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
                          aria-controls="mezoterapia-mikroiglowa-other-treatments-list"
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

export default TreatmentMezoterapiaMikroiglowaPartial;
