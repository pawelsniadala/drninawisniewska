import React, { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";

import FmdGoodIcon from "@mui/icons-material/FmdGood";
import DateRangeIcon from "@mui/icons-material/DateRange";
import DescriptionIcon from "@mui/icons-material/Description";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import ApartmentIcon from "@mui/icons-material/Apartment";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import Seo from "../../../components/Seo";
import Container from "../../../components/Container";
import CardProposed from "../../../components/CardProposed";
import CardTeamProposed from "../../../components/CardTeamProposed";
import CardCareerProposed from "../../../components/CardCareerProposed";
import ListBulleted from "../../../components/ListBulleted";
import Image from "../../../components/Image";

import { career, getCareerOfferBySlug } from "../../../data/career";
import { services } from "../../../data/services";
import { team } from "../../../data/team";
import { treatment } from "../../../data/treatment";

const SPECIALIST_CATEGORY_PATHS = {
  dermatology: "dermatologia",
  "aesthetic-medicine": "medycyna-estetyczna",
  cosmetology: "kosmetologia",
  "cosmetic-surgery": "chirurgia-plastyczna",
  "plastic-surgery": "chirurgia-plastyczna",
  allergology: "alergologia",
  "vascular-surgery": "chirurgia-naczyniowa",
  cardiology: "kardiologia",
  psychiatry: "psychiatria",
  hematology: "hematologia",
  urology: "urologia",
};

const CAREER_SPECIALIST_CATEGORY_PATHS = {
  hematologist: "hematologia",
  dermatologist: "dermatologia",
  urologist: "urologia",
  psychiatrist: "psychiatria",
  cosmetologist: "kosmetologia",
};

const getSpecialistPath = (item, careerKey) => {
  const specializations = Array.isArray(item.specialization)
    ? item.specialization
    : [item.specialization].filter(Boolean);

  const specialization = specializations.find(
    (value) => SPECIALIST_CATEGORY_PATHS[value],
  );

  const categoryPath =
    SPECIALIST_CATEGORY_PATHS[specialization] ||
    CAREER_SPECIALIST_CATEGORY_PATHS[careerKey];

  if (!categoryPath) {
    return `/specjalisci/${item.specialist}`;
  }

  return `/specjalisci/${categoryPath}/${item.specialist}`;
};

const CareerDetailsPartial = () => {
  const { stanowisko } = useParams();

  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  const [showMoreSpecialists, setShowMoreSpecialists] = useState(false);
  const [showMoreTreatments, setShowMoreTreatments] = useState(false);
  const [showMoreOffers, setShowMoreOffers] = useState(false);

  const professionItem = getCareerOfferBySlug(stanowisko);
  const careerKey = professionItem?.career;

  const filteredSpecialists = careerKey
    ? team.filter((item) => item.career?.includes(careerKey))
    : [];

  const displayedSpecialists = showMoreSpecialists
    ? filteredSpecialists
    : filteredSpecialists.slice(0, 3);

  const filteredTreatments = careerKey
    ? treatment.filter((item) => item.career?.includes(careerKey))
    : [];

  const displayedTreatments = showMoreTreatments
    ? filteredTreatments
    : filteredTreatments.slice(0, 3);

  const filteredOffers = career.filter((item) => item.career !== careerKey);

  const displayedOffers = showMoreOffers
    ? filteredOffers
    : filteredOffers.slice(0, 3);

  const professionServices = careerKey
    ? services.filter((item) => item.career === careerKey)
    : [];

  const toggleShowMoreSpecialists = () => {
    setShowMoreSpecialists((previousState) => !previousState);
  };

  const toggleShowMoreTreatments = () => {
    setShowMoreTreatments((previousState) => !previousState);
  };

  const toggleShowMoreOffers = () => {
    setShowMoreOffers((previousState) => !previousState);
  };

  const iconProps = {
    sx: {
      width: 20,
      height: 20,
    },
    "aria-hidden": true,
    focusable: false,
  };

  const iconComponents = {
    location: <FmdGoodIcon {...iconProps} />,
    date: <DateRangeIcon {...iconProps} />,
    agreement: <DescriptionIcon {...iconProps} />,
    position: <SignalCellularAltIcon {...iconProps} />,
    type: <TimelapseIcon {...iconProps} />,
    place: <ApartmentIcon {...iconProps} />,
  };

  const renderIcon = (designation) => iconComponents[designation] || null;

  if (!professionItem) {
    return <Navigate to="/kariera" replace />;
  }

  const title = professionItem.title;

  return (
    <>
      <Seo
        title={title}
        description={`Oferta pracy na stanowisko ${title} w Klinice dr Niny Wiśniewskiej w Wyszkowie. Informacje o obowiązkach, wymaganiach oraz warunkach zatrudnienia.`}
        path={professionItem.path}
        image={professionItem.images?.[0]?.src}
        imageAlt={professionItem.images?.[0]?.alt}
      />

      <Box className="team-view">
        <Box className="view-wrapper">
          <Box className="view-header services">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/kariera">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Kariera</Box>
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
                  <Link to="/kariera">Kariera</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    {title}
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  {title}
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper specialists-details">
              <Box className="career-description">
                <Box>
                  {professionItem.details && (
                    <Box
                      className="box-career"
                      sx={{
                        marginBottom: "0 !important",
                      }}
                    >
                      <Box className="box-details">
                        <Box
                          component="ul"
                          className="details"
                          sx={{
                            listStyle: "none",
                            padding: 0,
                            margin: 0,
                          }}
                        >
                          {professionItem.details.map((detail, index) => (
                            <ListItem
                              key={`${detail.designation}-${index}`}
                              component="li"
                              disableGutters
                              sx={{
                                width: "auto",
                                padding: isDesktop ? undefined : 0,
                                paddingTop: isDesktop ? 0 : undefined,
                              }}
                            >
                              <ListItemAvatar
                                sx={{
                                  minWidth: "auto !important",
                                  marginRight: 2,
                                }}
                              >
                                <Avatar
                                  sx={{
                                    width: 40,
                                    height: 40,
                                    backgroundColor: "#ebebeb !important",
                                    color: "#D29A3E",
                                    borderRadius: "8px",
                                    boxShadow:
                                      "1px 2px 3px rgba(0, 0, 0, 0.01)",
                                  }}
                                >
                                  {renderIcon(detail.designation)}
                                </Avatar>
                              </ListItemAvatar>

                              <ListItemText
                                className="list-item-text"
                                primary={detail.label}
                                secondary={
                                  <Box component="span">{detail.value}</Box>
                                }
                              />
                            </ListItem>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  )}

                  {professionItem.images?.length > 0 && (
                    <Box className="box-career">
                      <Box className="box-image">
                        <Image
                          imageSrc={professionItem.images?.[0]?.src}
                          imageAlt={professionItem.images?.[0]?.alt}
                          imageAuthor={professionItem.images?.[0]?.author}
                          imageHref={professionItem.images?.[0]?.href}
                        />
                      </Box>
                    </Box>
                  )}

                  {professionItem.duties && (
                    <Box className="box-career">
                      <Typography
                        component="h2"
                        variant="h5"
                        className="header alternative"
                      >
                        Twoje obowiązki
                      </Typography>

                      <Grid container spacing={0.5} marginBottom={2}>
                        {professionItem.duties.map((item, index) => (
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
                  )}

                  {professionItem.requirements && (
                    <Box className="box-career">
                      <Typography
                        component="h2"
                        variant="h5"
                        className="header alternative"
                      >
                        Nasze wymagania
                      </Typography>

                      <Grid container spacing={0.5} marginBottom={2}>
                        {professionItem.requirements.map((item, index) => (
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
                  )}

                  {professionItem.offer && (
                    <Box className="box-career">
                      <Typography
                        component="h2"
                        variant="h5"
                        className="header alternative"
                      >
                        To oferujemy
                      </Typography>

                      <Grid container spacing={0.5} marginBottom={2}>
                        {professionItem.offer.map((item, index) => (
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
                  )}

                  <Box className="box-career">
                    <Typography className="paragraph">
                      Jeśli jesteś osobą otwartą, komunikatywną, dyspozycyjną i
                      chciałbyś/chciałabyś pracować w prężnie rozwijającej się
                      placówce medycznej, wyślij swoje CV (koniecznie ze
                      zdjęciem) na adres
                      <br />
                      Paulina Sot:{" "}
                      <Typography
                        component="a"
                        href="mailto:klinika.wyszkow@gmail.com"
                        className="link"
                      >
                        klinika.wyszkow@gmail.com
                      </Typography>
                      .
                    </Typography>

                    <Typography className="paragraph">
                      Może szukamy właśnie Ciebie. Odezwiemy się do wybranych
                      osób.
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box className="proposed-wrapper">
                {displayedSpecialists.length > 0 && (
                  <Box className="box-proposed">
                    <Box className="header-wrapper">
                      <Typography component="h2" className="header">
                        Specjaliści
                      </Typography>
                    </Box>

                    <Box id="career-specialists-list" className="card-wrapper">
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
                          cardPath={getSpecialistPath(item, careerKey)}
                        />
                      ))}

                      {filteredSpecialists.length > 3 && (
                        <Fade in>
                          <Button
                            className="show-more-cards"
                            onClick={toggleShowMoreSpecialists}
                            aria-expanded={showMoreSpecialists}
                            aria-controls="career-specialists-list"
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
                )}

                {professionServices.map((item) => (
                  <Box className="box-proposed" key={item.id}>
                    <Box className="header-wrapper">
                      <Typography component="h2" className="header">
                        Specjalizacja
                      </Typography>
                    </Box>

                    <Box className="card-wrapper">
                      <CardProposed
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.image}
                        cardPath={item.path}
                      />
                    </Box>
                  </Box>
                ))}

                {displayedTreatments.length > 0 && (
                  <Box className="box-proposed">
                    <Box className="header-wrapper">
                      <Typography component="h2" className="header">
                        Zabiegi
                      </Typography>
                    </Box>

                    <Box id="career-treatments-list" className="card-wrapper">
                      {displayedTreatments.map((item) => (
                        <CardProposed
                          key={item.id}
                          cardTitle={item.title}
                          cardDescription={item.description}
                          cardImage={item.images?.[0]?.src}
                          cardPath={item.path}
                        />
                      ))}

                      {filteredTreatments.length > 3 && (
                        <Fade in>
                          <Button
                            className="show-more-cards"
                            onClick={toggleShowMoreTreatments}
                            aria-expanded={showMoreTreatments}
                            aria-controls="career-treatments-list"
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
                )}

                {displayedOffers.length > 0 && (
                  <Box className="box-proposed">
                    <Box className="header-wrapper">
                      <Typography component="h2" className="header">
                        Pozostałe oferty
                      </Typography>
                    </Box>

                    <Box id="career-other-offers-list" className="card-wrapper">
                      {displayedOffers.map((item) => (
                        <CardCareerProposed
                          key={item.id}
                          cardTitle={item.title}
                          cardLocation={item.location}
                          cardDate={item.date}
                          cardAgreement={item.agreement}
                          cardPosition={item.position}
                          cardType={item.type}
                          cardPlace={item.place}
                          cardPath={item.path}
                          cardImage={item.image}
                          cardStatus={item.status}
                        />
                      ))}

                      {filteredOffers.length > 3 && (
                        <Fade in>
                          <Button
                            className="show-more-cards"
                            onClick={toggleShowMoreOffers}
                            aria-expanded={showMoreOffers}
                            aria-controls="career-other-offers-list"
                            endIcon={
                              showMoreOffers ? (
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
                            {showMoreOffers ? "Pokaż mniej" : "Pokaż więcej"}
                          </Button>
                        </Fade>
                      )}
                    </Box>
                  </Box>
                )}
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CareerDetailsPartial;
