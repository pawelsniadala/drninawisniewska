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

import { treatment, laserFrakcyjny } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const treatmentPossibilities = [
  "resurfacing skóry,",
  "lifting i ujędrnianie skóry,",
  "usuwanie blizn (potrądzikowych, pourazowych, oparzeniowych),",
  "likwidacja rozstępów,",
  "redukcja trądziku,",
  "usuwanie przebarwień,",
  "usuwanie zmarszczek,",
  "poprawa jakości skóry,",
  "skuteczne efekty w niwelowaniu fotostarzenia się skóry,",
  "zabiegi chirurgiczne z wykorzystaniem punktowej głowicy lasera frakcyjnego,",
  "ginekologia estetyczna.",
];

const treatmentPreparation = [
  "Po terapii doustnymi retinoidami lub izotretynoiną należy odczekać okres 6 miesięcy od momentu odstawienia.",
  'Należy odstawić leki zioła fototoksyczne i fotouczulające (dziurawiec, pokrzywa, nagietek, herbaty odchudzające typu "figura", zioła chińskie) na 3 tygodnie przed zabiegiem.',
  "Po kuracji antybiotykami należy odczekać ok. 2 tygodnie od momentu odstawienia leków.",
  "Tydzień przed zabiegiem nie wykonywać depilacji w okolicy zabiegowej.",
  "Obszar zabiegowy nie może być podrażniony ani przesuszony.",
  "Na 4 tygodnie przed zabiegiem nie należy opalać skóry.",
  "Na 2 tygodnie przed zabiegiem nie należy stosować kremów z retinoidami, innych preparatów złuszczających (peelingi, kwasy owocowe, witamina A) oraz kosmetyków brązujących, samoopalaczy.",
];

const getSpecialistPath = (item) => {
  if (item.specialization?.includes("cosmetology")) {
    return `/specjalisci/kosmetologia/${item.specialist}`;
  }

  if (item.specialization?.includes("cosmetic-surgery")) {
    return `/specjalisci/chirurgia-plastyczna/${item.specialist}`;
  }

  return `/specjalisci/medycyna-estetyczna/${item.specialist}`;
};

const TreatmentLaserFrakcyjnyPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const [showMoreEffects, setShowMoreEffects] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("laser-frakcyjny"),
  );

  const displayedSpecialists = showMoreSpecialists
    ? treatmentSpecialists
    : treatmentSpecialists.slice(0, 3);

  const otherAestheticMedicineTreatments = treatment.filter(
    (item) =>
      item.specialization?.includes("aesthetic-medicine") &&
      item.treatment !== "laser-frakcyjny",
  );

  const displayedTreatments = showMoreTreatments
    ? otherAestheticMedicineTreatments
    : otherAestheticMedicineTreatments.slice(0, 3);

  const treatmentEffects = laserFrakcyjny.effects || [];

  const displayedEffects = showMoreEffects
    ? treatmentEffects
    : treatmentEffects.slice(0, 3);

  const aestheticMedicineSpecialization = services.filter(
    (item) => item.specialization === "aesthetic-medicine",
  );

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
      gallery: "#laser-frakcyjny-gallery",
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
        title="Laser frakcyjny"
        description="Zabiegi laserem frakcyjnym w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o możliwościach zabiegowych, przygotowaniu, przebiegu i efektach terapii."
        path="/zabiegi/medycyna-estetyczna/laser-frakcyjny"
        image={laserFrakcyjny.images?.[0]?.src}
        imageAlt={laserFrakcyjny.images?.[0]?.alt}
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
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Medycyna estetyczna</Box>
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

                  <Link to="/zabiegi/medycyna-estetyczna">
                    Medycyna estetyczna
                  </Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Laser frakcyjny
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Laser frakcyjny
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    <strong>Laser frakcyjny</strong> jest idealnym i sprawdzonym
                    rozwiązaniem znajdującym zastosowanie w wielu dziedzinach
                    medycyny. Laser pozwala na osiągnięcie bardzo dobrych
                    efektów zabiegowych w postaci{" "}
                    <strong>likwidacji blizn potrądzikowych</strong>,{" "}
                    <strong>poprawy jakości skóry</strong> i{" "}
                    <strong>wytworzenia nowych struktur kolagenu</strong>.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={laserFrakcyjny.images?.[0]?.src}
                      imageAlt={laserFrakcyjny.images?.[0]?.alt}
                      imageAuthor={laserFrakcyjny.images?.[0]?.author}
                      imageHref={laserFrakcyjny.images?.[0]?.href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    W porównaniu z tradycyjnymi laserami CO
                    <sub>2</sub>, frakcjonowanie ablacyjne laserami Fons pozwala
                    osiągnąć <strong>dużą głębokość penetracji w skórze</strong>
                    , dając efektywne procedury zabiegowe. Dzięki wysokiej mocy
                    i wszechstronności może być wykorzystywany w wielu
                    wskazaniach. Wygodę i precyzję działania zapewnia
                    siedmioprzegubowe ramię.
                  </Typography>

                  <Typography className="paragraph">
                    Ogromną zaletą jest <strong>bezkontaktowa praca</strong>{" "}
                    lasera gwarantująca całkowitą czystość pola operacyjnego.
                    Bardzo ważna jest także istotna redukcja krwawienia oraz
                    natychmiastowa koagulacja. W trakcie wykonywania zabiegu
                    uzyskujemy tysiące mikroskopijnych uszkodzeń tkanki,
                    natomiast pozostałe obszary pozostają nienaruszone i to
                    właśnie one przyspieszają odnowę zniszczonych stref skóry.
                    Dzięki temu okres rekonwalescencji jest zredukowany do
                    minimum przy jedoczesnym zachowaniu wysokiej efektywności
                    terapii.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Możliwości zabiegowe:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {treatmentPossibilities.map((item, index) => (
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
                    Efekty po zabiegu laserem frakcyjnym są widoczne stopniowo
                    po około 4 tygodniach od zabiegu. Zmiany można zaobserwować
                    już po jednym naświetlaniu, jednak, aby osiągnąć lepsze
                    rezultaty należy wykonać 2-4 zabiegi.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Jak przygotować się do zabiegu?
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

                    <Box id="laser-frakcyjny-gallery" className="pswp-gallery">
                      {displayedEffects.map((item, index) => (
                        <a
                          key={`laser-frakcyjny-effect-${index}`}
                          href={item.original.src}
                          data-pswp-width={item.original.width}
                          data-pswp-height={item.original.height}
                          data-cropped="true"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Powiększ zdjęcie efektu zabiegu: ${
                            item.alt || "laser frakcyjny"
                          }`}
                        >
                          <Box className="box">
                            <LazyLoadImage
                              src={item.thumbnail.src}
                              alt={
                                item.alt || "Efekt zabiegu laserem frakcyjnym"
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
                                {laserFrakcyjny.info}
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
                            aria-controls="laser-frakcyjny-gallery"
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
                    id="laser-frakcyjny-specialists-list"
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
                        cardPath={getSpecialistPath(item)}
                      />
                    ))}

                    {treatmentSpecialists.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreSpecialists}
                          aria-expanded={showMoreSpecialists}
                          aria-controls="laser-frakcyjny-specialists-list"
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
                    {aestheticMedicineSpecialization.map((item) => (
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
                      aria-label="Pozostałe zabiegi medycyny estetycznej"
                    >
                      Pozostałe zabiegi
                    </Typography>
                  </Box>

                  <Box
                    id="laser-frakcyjny-other-treatments-list"
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

                    {otherAestheticMedicineTreatments.length > 3 && (
                      <Fade in>
                        <Button
                          className="show-more-cards"
                          onClick={toggleShowMoreTreatments}
                          aria-expanded={showMoreTreatments}
                          aria-controls="laser-frakcyjny-other-treatments-list"
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

export default TreatmentLaserFrakcyjnyPartial;
