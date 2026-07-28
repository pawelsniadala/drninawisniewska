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
  zamykanieNaczynekILikwidacjaPrzebarwien,
} from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const treatmentIndications = [
  "resurfacing skóry: redukcja zmarszczek, blizn, rozstępów,",
  "zmiany pigmentacyjne, przebarwienia,",
  "melasma,",
  "zmiany naczyniowe, trądzik różowaty, naczyniaki, teleangiektazje,",
  "lifting skóry,",
  "zamykanie naczyń.",
];

const postTreatmentCare = [
  "Do 4 tygodni po zabiegu nie wolno opalać się.",
  "Bezwzględnie należy stosować najwyższą fotoprotekcję.",
  "Należy unikać czynników powodujących rozszerzenie naczyń krwionośnych przez okres 7 dni (wysiłek fizyczny, sauna, basen, zmiany temperatur).",
  "Należy stosować kremy i maści wg zaleceń lekarza.",
];

const treatmentPreparation = [
  "Po terapii doustnymi retinoidami lub izotretynoiną należy odczekać okres 6 miesięcy od momentu odstawienia.",
  "Należy odstawić leki i zioła fototoksyczne i fotouczulające (dziurawiec, pokrzywa, nagietek, herbata typu figura, zioła chińskie) na 3 tygodnie przed zabiegiem.",
  "Po kuracji antybiotykami należy odczekać ok. 2 tygodnie od momentu odstawienia leków.",
  "Tydzień przed zabiegiem nie wykonywać depilacji o okolicy zabiegowej.",
  "Obszar zabiegowy nie może być podrażniony ani przesuszony.",
  "Na 4 tygodnie przed zabiegiem nie należy opalać skóry.",
  "Na 2 tygodnie przed zabiegiem nie należy stosować kremów z retinoidami, innych preparat złuszczających (peelingi, kwasy owocowe, witamina A) oraz kosmetyków brązujących, samoopalaczy.",
];

const getSpecialistPath = (item) => {
  if (item.specialization?.includes("cosmetology")) {
    return `/specjalisci/kosmetologia/${item.specialist}`;
  }

  return `/specjalisci/medycyna-estetyczna/${item.specialist}`;
};

const TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial = () => {
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const [showMoreEffects, setShowMoreEffects] = useState(false);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("zamykanie-naczynek-i-likwidacja-przebarwien"),
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
      item.treatment !== "zamykanie-naczynek-i-likwidacja-przebarwien",
  );

  const displayedTreatments = showMoreTreatments
    ? otherAestheticMedicineTreatments
    : otherAestheticMedicineTreatments.slice(0, 3);

  const treatmentEffects =
    zamykanieNaczynekILikwidacjaPrzebarwien.effects || [];

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
      gallery: "#zamykanie-naczynek-i-likwidacja-przebarwien-gallery",
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
        title="Zamykanie naczynek i likwidacja przebarwień"
        description="Zamykanie naczynek i likwidacja przebarwień w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o wskazaniach, przeciwwskazaniach, przygotowaniu i efektach zabiegu."
        path="/zabiegi/medycyna-estetyczna/zamykanie-naczynek-i-likwidacja-przebarwien"
        image={zamykanieNaczynekILikwidacjaPrzebarwien.images?.[0]?.src}
        imageAlt={zamykanieNaczynekILikwidacjaPrzebarwien.images?.[0]?.alt}
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
                    Zamykanie naczynek i likwidacja przebarwień
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Zamykanie naczynek i likwidacja przebarwień
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    Platforma laserowa, którą posiadamy w naszej Klinice, to
                    produkt izraelskiej firmy Alma Lasers. Obsługuje różne typy
                    zaawansowanych technologii laserowych i innych źródeł
                    światła. Oferuje rozwiązanie na większość problemów
                    estetycznych i dermatologicznych.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={
                        zamykanieNaczynekILikwidacjaPrzebarwien.images?.[0]?.src
                      }
                      imageAlt={
                        zamykanieNaczynekILikwidacjaPrzebarwien.images?.[0]?.alt
                      }
                      imageAuthor={
                        zamykanieNaczynekILikwidacjaPrzebarwien.images?.[0]
                          ?.author
                      }
                      imageHref={
                        zamykanieNaczynekILikwidacjaPrzebarwien.images?.[0]
                          ?.href
                      }
                    />
                  </Box>

                  <Typography className="paragraph">
                    To wszechstronne narzędzie, które umożliwia łączenie różnych
                    typów laserów i technologii podczas jednej procedury
                    zabiegowej. To użytkownik komponuje zabieg dostosowany do
                    potrzeb pacjenta, wybierając spośród ponad 30 głowic.
                    Techniki łączone zdecydowanie zwiększają skuteczność
                    zabiegów.
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

                  <Typography className="paragraph">
                    Laser ma ponad 65 wskazań potwierdzonych certyfikatem FDA.{" "}
                    <strong>Do najważniejszych należą</strong>:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {treatmentIndications.map((item) => (
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

                <Box className="box-treatment">
                  <Typography
                    component="h2"
                    variant="h5"
                    className="header alternative"
                  >
                    Przeciwwskazania
                  </Typography>

                  <Typography className="paragraph">
                    Choroby nowotworowe, ciężkie i niewyrównane schorzenia
                    ogólnoustrojowe (niewydolność nerek, cukrzyca, niestabilna
                    choroba niedokrwienna serca), skłonność do powstawania blizn
                    przerostowych, przyjmowanie w ostatnich 6 miesiącach
                    retinoidów, antybiotyków, leków przeciwdepresyjnych lub
                    immunosupresyjnych, świeża opalenizna, aktywne infekcje
                    skóry poddawanej leczeniu, aktywna opryszczka, przyjmowanie
                    leków światłouczulających, retinoidów, przyjmowanie ziół,
                    stosowanie leków obniżającym krzepliwość krwi, bielactwo,
                    łuszczyca, cukrzyca, padaczka, bliznowce, rozrusznik serca,
                    fotodermatozy, choroby pęcherzowe skóry.
                  </Typography>
                </Box>

                <Box className="box-treatment">
                  <Typography
                    component="h2"
                    variant="h5"
                    className="header alternative"
                  >
                    Najczęściej zadawane pytania
                  </Typography>

                  <Box className="accordion" id="zamykanie-naczynek-faq">
                    <Box className="accordion-item">
                      <h3
                        className="accordion-header"
                        id="zamykanie-naczynek-faq-heading-1"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#zamykanie-naczynek-faq-collapse-1"
                          aria-expanded="false"
                          aria-controls="zamykanie-naczynek-faq-collapse-1"
                        >
                          <Typography
                            component="span"
                            className="accordion-heading"
                          >
                            Jak wygląda skóra po zabiegu?
                          </Typography>
                        </button>
                      </h3>

                      <Box
                        id="zamykanie-naczynek-faq-collapse-1"
                        className="accordion-collapse collapse"
                        aria-labelledby="zamykanie-naczynek-faq-heading-1"
                      >
                        <Box className="accordion-body">
                          <Typography className="paragraph">
                            Głowica wyposażona jest w system chłodzenia, który
                            zapewnia minimalny dyskomfort. Po zabiegu skóra jest
                            zaczerwieniona i obrzęknięta, objawy znikają po 3- 4
                            dniach. W przypadku przebarwień, zmiany objęte
                            leczeniem stają się ciemniejsze i do 4 tygodni
                            rozjaśniają się.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box className="accordion-item">
                      <h3
                        className="accordion-header"
                        id="zamykanie-naczynek-faq-heading-2"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#zamykanie-naczynek-faq-collapse-2"
                          aria-expanded="false"
                          aria-controls="zamykanie-naczynek-faq-collapse-2"
                        >
                          <Typography
                            component="span"
                            className="accordion-heading"
                          >
                            Ile należy wykonać zabiegów?
                          </Typography>
                        </button>
                      </h3>

                      <Box
                        id="zamykanie-naczynek-faq-collapse-2"
                        className="accordion-collapse collapse"
                        aria-labelledby="zamykanie-naczynek-faq-heading-2"
                      >
                        <Box className="accordion-body">
                          <Typography className="paragraph">
                            W zależności od rozległości zmian oraz obszaru
                            ciała, może być konieczne wykonanie serii zabiegów.
                            Najczęściej jest to 1 do 3 zabiegów w odstępach 4
                            tygodni. W praktyce często wystarcza jeden zabieg.
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box className="accordion-item">
                      <h3
                        className="accordion-header"
                        id="zamykanie-naczynek-faq-heading-3"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#zamykanie-naczynek-faq-collapse-3"
                          aria-expanded="false"
                          aria-controls="zamykanie-naczynek-faq-collapse-3"
                        >
                          <Typography
                            component="span"
                            className="accordion-heading"
                          >
                            Jak dbać o skórę po zabiegu?
                          </Typography>
                        </button>
                      </h3>

                      <Box
                        id="zamykanie-naczynek-faq-collapse-3"
                        className="accordion-collapse collapse"
                        aria-labelledby="zamykanie-naczynek-faq-heading-3"
                      >
                        <Box className="accordion-body">
                          <Grid container spacing={0.5}>
                            {postTreatmentCare.map((item) => (
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
                      </Box>
                    </Box>

                    <Box className="accordion-item">
                      <h3
                        className="accordion-header"
                        id="zamykanie-naczynek-faq-heading-4"
                      >
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#zamykanie-naczynek-faq-collapse-4"
                          aria-expanded="false"
                          aria-controls="zamykanie-naczynek-faq-collapse-4"
                        >
                          <Typography
                            component="span"
                            className="accordion-heading"
                          >
                            Jak przygotować się do zabiegu?
                          </Typography>
                        </button>
                      </h3>

                      <Box
                        id="zamykanie-naczynek-faq-collapse-4"
                        className="accordion-collapse collapse"
                        aria-labelledby="zamykanie-naczynek-faq-heading-4"
                      >
                        <Box className="accordion-body">
                          <Grid container spacing={0.5}>
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
                      </Box>
                    </Box>
                  </Box>
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
                      id="zamykanie-naczynek-i-likwidacja-przebarwien-gallery"
                      className="pswp-gallery"
                    >
                      {displayedEffects.map((item, index) => (
                        <a
                          key={`zamykanie-naczynek-effect-${index}`}
                          href={item.original.src}
                          data-pswp-width={item.original.width}
                          data-pswp-height={item.original.height}
                          data-cropped="true"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Powiększ zdjęcie efektu zabiegu: ${
                            item.alt ||
                            "zamykanie naczynek i likwidacja przebarwień"
                          }`}
                        >
                          <Box className="box">
                            <LazyLoadImage
                              src={item.thumbnail.src}
                              alt={
                                item.alt ||
                                "Efekt zabiegu zamykania naczynek i likwidacji przebarwień"
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
                                {zamykanieNaczynekILikwidacjaPrzebarwien.info}
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
                            aria-controls="zamykanie-naczynek-i-likwidacja-przebarwien-gallery"
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
                    id="zamykanie-naczynek-specialists-list"
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
                          aria-controls="zamykanie-naczynek-specialists-list"
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
                    id="zamykanie-naczynek-other-treatments-list"
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
                          aria-controls="zamykanie-naczynek-other-treatments-list"
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

export default TreatmentZamykanieNaczynekILikwidacjaPrzebarwienPartial;
