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

import { treatment, epilacjaLaserowa } from "../../../../data/treatment";

import { team } from "../../../../data/team";
import { services } from "../../../../data/services";

const melaninReaderBenefits = [
  "Zabieg jest bardziej efektywny.",
  "Możemy zastosować wyższe parametry, jednak ciągle bezpieczne dla pacjenta.",
  "Wyklucza ryzyko poparzenia.",
];

const treatmentPreparation = [
  "Przed zabiegiem należy dokładnie ogolić maszynką obszar, na którym będzie przeprowadzany zabieg. Do 4 tygodni przed zabiegiem zabronione jest usuwanie włosków pęsetą, woskiem, depilatorem.",
  "Obszar skóry, który ma być poddany depilacji laserowej, nie może być podrażniony ani przesuszony.",
  "3 tygodnie przed zabiegiem epilacji Vectus należy pamiętać o odstawieniu wszelkich leków i ziół.",
  "Po kuracji antybiotykami należy odczekać ok. 2 tyg. od momentu odstawienia leków.",
  "4 tygodnie przed zabiegiem nie należy opalać skóry.",
  "Przed i w trakcie serii zabiegów epilacji laserowej nie wolno korzystać z solarium lub samoopalaczy.",
  "Tydzień przed wykonywanym zabiegiem nie należy wykonywać zabiegów złuszczających",
];

const postTreatmentRecommendations = [
  "Nakładania kosmetyków na obszar zabiegu.",
  "Pływania, zwłaszcza w basenach sztucznych zawierających substancje chemiczne.",
  "Gorących kąpieli w wannie, wizyty w jacuzzi czy saunie.",
  "Czynności, które nasilają pocenie się lub podnoszą temperaturę ciała.",
  "Wystawiania na słońce lub opalanie skóry po zabiegu. Należy nałożyć na skórę kosmetyk z filtrem SPF 45 lub wyższym, aby zapobiec zmianie kolorytu skóry.",
  "Intensywnego szorowania oraz używania kosmetyków uszczających na obszarze zabiegu.",
];

const laserBenefits = [
  "Skuteczne zabiegi.",
  "Krótki czas zabiegów.",
  "Bezpieczeństwo i komfort.",
  "100% satysfakcji pacjenta.",
];

const TreatmentEpilacjaLaserowaPartial = () => {
  const [showMoreEffects, setShowMoreEffects] = useState(false);

  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);

  const [showMoreTreatments, setShowMoreTreatments] = useState(false);

  const treatmentEffects = epilacjaLaserowa.effects || [];

  const displayedEffects = showMoreEffects
    ? treatmentEffects
    : treatmentEffects.slice(0, 3);

  const treatmentSpecialists = team.filter((item) =>
    item.treatment?.includes("epilacja-laserowa"),
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
      item.treatment !== "epilacja-laserowa",
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
      gallery: "#epilacja-laserowa-gallery",
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
        title="Epilacja laserowa"
        description="Epilacja laserowa w Klinice dr Niny Wiśniewskiej w Wyszkowie wykonywana laserem diodowym. Informacje o przygotowaniu, zaleceniach pozabiegowych i przeciwwskazaniach."
        path="/zabiegi/kosmetologia/epilacja-laserowa"
        image={epilacjaLaserowa.images?.[0]?.src}
        imageAlt={epilacjaLaserowa.images?.[0]?.alt}
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
                    Epilacja laserowa
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Epilacja laserowa
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper treatment-details">
              <Box className="treatment-description">
                <Box className="box-treatment">
                  <Typography className="paragraph">
                    Laser diodowy to produkt amerykańskiej firmy, która
                    stworzyła pierwszą na świecie technologię laserowego
                    usuwania owłosienia, do dziś chronioną patentem. Urządzenie
                    jest owocem trwających kilkanaście lat doświadczeń i badań
                    nad udoskonaleniem systemu lasera diodowego. Wykorzystano w
                    nim wiele nowatorskich rozwiązań decydujących o wyjątkowej
                    skuteczności, bezpieczeństwie i komforcie pacjenta.
                  </Typography>

                  <Box className="box-image">
                    <Image
                      imageSrc={epilacjaLaserowa.images[0].src}
                      imageAlt={epilacjaLaserowa.images[0].alt}
                      imageAuthor={epilacjaLaserowa.images[0].author}
                      imageHref={epilacjaLaserowa.images[0].href}
                    />
                  </Box>

                  <Typography className="paragraph">
                    Innowacyjny laser diodowy posiada certyfikat bezpieczeństwa
                    i skuteczności wydany przez Amerykański Urząd ds. Żywności i
                    Leków FDA, honorowany na całym świecie, dopuszczający je na
                    rynek jako urządzenie do trwałego usuwania włosów.
                  </Typography>

                  <Typography className="paragraph">
                    Urządzenie to, jako jedyne na świecie, wyposażone jest w
                    inteligentny czytnik poziomu melaniny w skórze – SkintelTM.
                    W praktyce oznacza to, że przed zabiegiem czytnik
                    przykładany jest do skóry pacjenta w miejscu, z którego
                    usuwane będzie owłosienie. SkintelTM określa poziom melaniny
                    i na podstawie tego odczytu ustawia w urządzeniu
                    indywidualnie dobrane parametry zabiegu. Korzyści
                    wynikających z tego jest kilka.
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {melaninReaderBenefits.map((item) => (
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
                    Na skuteczność zabiegu wpływa również{" "}
                    <strong>opatentowana technologia Photon Recycling</strong>,
                    która polega na ponownym wykorzystaniu światła, w naturalny
                    sposób odbijającego się od skóry. Światło, dzięki wbudowanym
                    w głowicy lustrom, powraca , co powoduje, że impuls światła
                    wykorzystywany jest w stu procentach radykalnie zwiększając
                    efektywność procedury.
                  </Typography>

                  <Typography className="paragraph">
                    Komfort pacjenta zapewnia nie tylko bardzo szybkie tempo
                    pracy lasera, ale również zastosowana w głowicy technologia{" "}
                    <strong>Advanced Contact Cooling</strong>. Oznacza to, że
                    skóra jest chłodzona przed, w trakcie i po emisji światła.
                  </Typography>

                  <Typography className="paragraph">
                    Kontaktowe chłodzenie powoduje, że wyczuwalność ciepła w
                    trakcie zabiegu jest minimalna. Pozwala to zastosować wyższą
                    energię w trakcie zabiegu, a tym samym w znaczący sposób
                    zwiększyć jego skuteczność.
                  </Typography>

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Jak się przygotować do zabiegu depilacji laserowej?
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
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Zalecenia pozabiegowe
                  </Typography>

                  <Typography className="paragraph">
                    Bezpośrednio po zabiegu skóra może być delikatnie
                    zaczerwieniona.{" "}
                    <strong>
                      Do ustąpienia zaczerwienienia zaleca się unikanie
                      poniższych czynności
                    </strong>
                    .
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

                  <Typography
                    component="h2"
                    variant="h5"
                    className="paragraph heading"
                  >
                    Laser diodowy gwarantuje
                  </Typography>

                  <Grid container spacing={0.5} marginBottom={2}>
                    {laserBenefits.map((item) => (
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
                    <strong>Przeciwwskazania</strong>: świeża opalenizna, ciąża,
                    laktacja, przerwana ciągłość naskórka, epilepsja,
                    przyjmowanie leków, w tym ziół fotouczulających, terapia
                    retinoidami (witamina A), przyjmowanie leków obniżających
                    krzepliwość krwi, bielactwo, cukrzyca, bliznowce, aktywne
                    infekcje skórne, rozrusznik serca, niedawno przebyte zabiegi
                    chirurgiczne.
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
                      id="epilacja-laserowa-gallery"
                      className="pswp-gallery"
                    >
                      {displayedEffects.map((item, index) => (
                        <a
                          key={`epilacja-laserowa-effect-${index}`}
                          href={item.original.src}
                          data-pswp-width={item.original.width}
                          data-pswp-height={item.original.height}
                          data-cropped="true"
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`Powiększ zdjęcie efektu zabiegu: ${
                            item.alt || "epilacja laserowa"
                          }`}
                        >
                          <Box className="box">
                            <LazyLoadImage
                              src={item.thumbnail.src}
                              alt={item.alt || "Efekt epilacji laserowej"}
                              height="100%"
                              width="100%"
                              effect="blur"
                            />

                            <span className="pswp-caption-content">
                              <span className="description">
                                {item.description}
                              </span>

                              <span className="info">
                                {epilacjaLaserowa.info}
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
                            aria-controls="epilacja-laserowa-gallery"
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
                    id="epilacja-laserowa-specialists-list"
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
                          aria-controls="epilacja-laserowa-specialists-list"
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
                    id="epilacja-laserowa-other-treatments-list"
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
                          aria-controls="epilacja-laserowa-other-treatments-list"
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

export default TreatmentEpilacjaLaserowaPartial;
