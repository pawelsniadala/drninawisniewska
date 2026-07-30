import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import PhotoSwipeDynamicCaption from "photoswipe-dynamic-caption-plugin";

import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

import { clinic } from "../data/clinic";

const ClinicSection = () => {
  const [viewPortEntered, setViewPortEntered] = useState(false);

  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#clinic-gallery",
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

  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      setViewPortEntered(true);
    }
  };

  return (
    <Box component="section" className="clinic-section">
      <Container>
        <SectionHeader
          sectionTitle="Klinika"
          sectionHeader="Kilka słów o naszej klinice"
          sectionSubheader="Dowiedz się więcej o naszej klinice"
          sectionLinkText="Zobacz pełny opis"
          sectionLinkPath="/klinika"
          sectionWrapperClass="clinic"
          sectionDescription={
            isDesktop ? (
              <Box className="description" data-aos="fade-in">
                <Box>
                  <Typography className="paragraph">
                    W Klinice dr Niny Wiśniewskiej znajdziecie Państwo pomoc w
                    zakresie leczenia trądzika, trądzika różowatego, łuszczycy,
                    atopowego zapalenie skóry, łojotokowego zapalenia skóry,
                    egzemy i innych chorób.
                  </Typography>
                </Box>

                <Box>
                  <Typography className="paragraph">
                    Dodatkowym atutem jest lampa do fototerapii UVB 311 nm i
                    PUVA - bath przeznaczona dla pacjentów z łuszczycą, AZS,
                    wypryskiem, a także możliwość wykonania płatkowych testów
                    kontaktowych.{" "}
                    <Link className="link" to="/klinika">
                      Zobacz więcej{" "}
                      <ArrowForwardIcon
                        aria-hidden="true"
                        focusable="false"
                        sx={{ fontSize: 14 }}
                      />
                    </Link>
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Box>
                <Typography
                  className="paragraph"
                  data-aos="fade-right"
                  sx={{ textAlign: "center" }}
                >
                  W Klinice dr Niny Wiśniewskiej znajdziecie Państwo pomoc w
                  zakresie leczenia trądzika, trądzika różowatego, łuszczycy,
                  atopowego zapalenie skóry, egzemy i innych chorób.
                </Typography>
              </Box>
            )
          }
        />

        <Box className="photos-wrapper">
          <Box className="pswp-gallery" id="clinic-gallery">
            {clinic.pictures?.map((item, index) => {
              const pictureKey =
                item.id ?? item.original?.src ?? `clinic-picture-${index}`;

              return (
                <a
                  key={pictureKey}
                  href={item.original?.src}
                  data-pswp-width={item.original?.width}
                  data-pswp-height={item.original?.height}
                  data-cropped="true"
                  aria-label={`Powiększ zdjęcie: ${item.alt}`}
                >
                  <Box className="box">
                    <LazyLoadImage
                      src={item.thumbnail?.src}
                      alt={item.alt}
                      height="100%"
                      width="100%"
                      effect="blur"
                    />

                    <span className="pswp-caption-content">
                      Fotograf: {item.author}
                    </span>
                  </Box>
                </a>
              );
            })}
          </Box>
        </Box>

        <VisibilitySensor
          onChange={handleVisibilityChange}
          delayedCall
          partialVisibility
        >
          <Box className="statistics-wrapper">
            <Grid container spacing={2}>
              {clinic.statistics?.map((item, index) => {
                const statisticKey =
                  item.id ?? `${item.title}-${item.subtitle}-${index}`;

                return (
                  <Grid key={statisticKey} item xs={12} md={4}>
                    <Typography
                      component="p"
                      variant="h4"
                      className="counter"
                      aria-label={`${item.title}${item.suffix ?? ""} ${item.subtitle}`}
                    >
                      <Box component="span" aria-hidden="true">
                        <CountUp
                          duration={2}
                          end={viewPortEntered ? item.title : 0}
                          start={0}
                          suffix={item.suffix}
                        />
                      </Box>
                    </Typography>

                    <Typography
                      component="p"
                      variant="h6"
                      className="description"
                    >
                      {item.subtitle}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </VisibilitySensor>
      </Container>
    </Box>
  );
};

export default ClinicSection;
