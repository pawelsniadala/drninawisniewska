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

import { treatment, peelingMedyczny } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const treatmentEffectsList = [
  "oczyszczenie i dotlenienie skóry,",
  "odmłodzenie skóry,",
  "redukcję zmarszczek,",
  "poprawę gęstości i elastyczności skóry,",
  "rozjaśnienie lub całkowitą redukcję plam i przebarwień różnego pochodzenia,",
  "wyrównanie kolorytu cery,",
  "zwężenie porów skóry,",
  "unormowanie pracy gruczołów łojowych,",
  "zmniejszenie ilości wykwitów trądzikowych.",
];

const postTreatmentRecommendations = [
  "Należy zachować sterylność pozabiegową (świeży ręcznik, pościel).",
  "Miejsce zabiegowe należy smarować kremem regeneracyjnym (Solcoseryl, Zinalfate, Cicalfate) do całkowitego zagojenia.",
  "Nie należy zdrapywanić lub dodatkowo złuszczać odchodzącego naskórka.",
  "Nie należy opalać miejsca zabiegowego, należy chronić skórę przed promieniami słonecznymi (SPF50).",
  "Należy stosować delikatny preparat do mycia (Cetaphil, emulsja PhDoctor).",
  "Na tydzień przed zabiegiem nie stosować kremów, maści z retinolem (witamina A).",
  "Między zabiegami nie stosować innych środków ścierających, peelingów w okolicy zabiegowej.",
  "Nie należy korzystać z sauny, jacuzzi, basenów przez najbliższe 2-3 dni.",
  "Nie należy brać długich rozgrzewających kąpieli bezpośrednio po zabiegu, zalecany szybki letni prysznic.",
  "Należy ograniczyć zabawę ze zwierzętami domowymi by nie nadkazić skóry.",
];

const TreatmentPeelingMedycznyPartial = () => {
  const [showMoreEffects, setShowMoreEffects] = useState(false);
  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);
  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentEffects = peelingMedyczny.effects || [];

  const displayedEffects = showMoreEffects
    ? treatmentEffects
    : treatmentEffects.slice(0, 3);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("peeling-medyczny"),
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
      item.treatment !== "peeling-medyczny",
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
      gallery: "#peeling-medyczny-gallery",
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
        title="Peeling medyczny"
        description="Peelingi medyczne w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o działaniu peelingów chemicznych, efektach, pielęgnacji skóry i przeciwwskazaniach."
        path="/zabiegi/kosmetologia/peeling-medyczny"
        image={peelingMedyczny.images?.[0]?.src}
        imageAlt={peelingMedyczny.images?.[0]?.alt}
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
                    Peeling medyczny
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Peeling medyczny
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    Peelingi chemiczne to <strong>kondycjonujące</strong> i{" "}
                    <strong>rewitalizujące</strong> skórę zabiegi
                    dermokosmetyczne. W zależności od zastosowanego preparatu
                    zabiegi oferują <strong>różne efekty terapeutyczne</strong>;
                    tj. oczyszczające i przeciwtrądzikowe, regenerujące i
                    przeciwzmarszczkowe, rozjaśniające i redukujące
                    przebarwienia.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={peelingMedyczny.images[0].src}
                      imageAlt={peelingMedyczny.images[0].alt}
                      imageAuthor={peelingMedyczny.images[0].author}
                      imageHref={peelingMedyczny.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    <strong>Mechanizm działania</strong> peelingów chemicznych
                    polega na <strong>kontrolowanym złuszczaniu</strong>{" "}
                    powierzchownych warstw naskórka i/lub górnych warstw skóry
                    właściwej. Peelingi rozluźniają połączenia międzykomórkowe
                    keratynocytów, komórek skóry, dzięki czemu dochodzi do
                    złuszczania jej zewnętrznych warstw. Pobudzone zostają
                    naturalne procesy gojenia a także następuje przyspieszona
                    przebudowa skóry dzięki{" "}
                    <strong>
                      stymulacji skóry do syntezy nowego kolagenu i elastyny
                    </strong>
                    . W konsekwencji powierzchniowe defekty estetyczne zostają
                    usunięte, a problemy zlokalizowane w głębszych warstwach
                    zostają zniwelowane.
                  </Typography>

                  <Typography className="paragraph">
                    Peelingi chemiczne to zabiegi <strong>pielęgnacyjne</strong>{" "}
                    oraz <strong>lecznicze</strong>. Stanowią dobrą opcję dla
                    osób, które nie chcą zdecydować się na bardziej inwazyjny
                    zabieg z medycyny estetycznej lub szukają{" "}
                    <strong>alternatywnego leczenia skór problemowych</strong>.
                    Zastosowanie kwasów pomaga w usunięciu przebarwień,
                    likwidowaniu blizn i leczeniu trądziku.
                  </Typography>

                  <Typography className="paragraph">
                    W zależności od rodzaju, stężenia, pH zastosowanego
                    preparatu oraz szeregu innych czynników uzyskujemy różną
                    siłę i efekt działania. Dzięki peelingom medycznym
                    uzyskujemy:
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {treatmentEffectsList.map((item) => (
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

                  <Typography className="paragraph">
                    Zabiegi są <strong>bezbolesne</strong>, odczuwalne może być
                    jedynie delikatne pieczenie lub uczucie ściągnięcia skóry.
                    Najlepsze efekty terapeutyczne przynosi pełna seria
                    zabiegowa.
                  </Typography>

                  <Typography className="paragraph">
                    Szerokie grono peelingów chemicznych o odmiennych
                    właściwościach oraz różnych głębokościach działania pozwala
                    na stworzenie zabiegów dedykowanych dla każdego pacjenta.
                    Dodatkowo tworzone są także mieszanki kilku różnych
                    substancji złuszczających o specyficznych właściwościach,
                    które można wykorzystać w pielęgnacji konkretnego rodzaju
                    cery. Nasza Klinika oferuje szeroką gamę marek i peelingów
                    pozwalające na stworzenie procedury zabiegowej dobranej
                    indywidualnie pod potrzeby każdej cery.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Jak należy pielęgnować skórę po zabiegu eksfoliacji
                    chemicznej?
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {postTreatmentRecommendations.map((item) => (
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

                  <Typography className="paragraph">
                    Przeciwwskazania: stany zapalne skóry, aktywne infekcje
                    bakteryjne lub wirusowe, przerwana ciągłość naskórka,
                    aktywna opryszczka, przyjmowanie retinoidów (a także 6
                    miesięcy od ostatniej dawki), fototerapia, ciąża lub
                    karmienie piersią, bezpośrednio po depilacji, choroby
                    autoimmunologiczne, radioterapia, bliznowce lub blizny
                    przerostowe, podrażniona skóra, świeża opalenizna.
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

                    <Box id="peeling-medyczny-gallery" className="pswp-gallery">
                      {displayedEffects.map((item, index) => (
                        <a
                          key={`peeling-medyczny-effect-${index}`}
                          href={item.original.src}
                          data-pswp-width={item.original.width}
                          data-pswp-height={item.original.height}
                          data-cropped="true"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Powiększ zdjęcie efektu zabiegu: ${
                            item.alt || "peeling medyczny"
                          }`}
                        >
                          <Box className="box">
                            <LazyLoadImage
                              src={item.thumbnail.src}
                              alt={item.alt || "Efekt peelingu medycznego"}
                              height="100%"
                              width="100%"
                              effect="blur"
                            />

                            <span className="pswp-caption-content">
                              <span className="description">
                                {item.description}
                              </span>

                              <span className="info">
                                {peelingMedyczny.info}
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
                            aria-controls="peeling-medyczny-gallery"
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
                    id="peeling-medyczny-specialists-list"
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
                          aria-controls="peeling-medyczny-specialists-list"
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
                    id="peeling-medyczny-other-treatments-list"
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
                          aria-controls="peeling-medyczny-other-treatments-list"
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

export default TreatmentPeelingMedycznyPartial;
