import React, { useEffect } from "react";

import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";

import pricesJpg1 from "../assets/prices/prices1.jpg";

const sectionHeaderProps = {
  sectionTitle: "Cennik",
  sectionHeader: "Aktualne ceny naszych usług",
  sectionSubheader: "Zapoznaj się z cennikiem naszych usług",
  sectionLinkText: "Zobacz cennik usług",
  sectionLinkPath: "/cennik",
  sectionWrapperClass: "prices",
};

const PriceSection = () => {
  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) {
      return undefined;
    }

    let isMounted = true;
    let destroyJarallax;

    const initializeJarallax = async () => {
      const jarallaxElements = document.querySelectorAll(
        ".price-section .jarallax",
      );

      if (jarallaxElements.length === 0) {
        return;
      }

      try {
        const { jarallax } = await import("jarallax");

        if (!isMounted) {
          return;
        }

        jarallax(jarallaxElements, {
          speed: 0.2,
        });

        destroyJarallax = () => {
          jarallax(jarallaxElements, "destroy");
        };
      } catch (error) {
        console.error("Nie udało się uruchomić efektu parallax.", error);
      }
    };

    initializeJarallax();

    return () => {
      isMounted = false;
      destroyJarallax?.();
    };
  }, [isDesktop, prefersReducedMotion]);

  return (
    <Box
      component="section"
      className="price-section"
      aria-label="Cennik usług"
    >
      {isDesktop ? (
        <Box
          className="jarallax"
          position="relative"
          minHeight={{
            xs: 590,
            sm: 650,
            md: 790,
          }}
          display="flex"
          alignItems="center"
          sx={{
            paddingTop: "1.25rem",
            paddingBottom: "1.25rem",
            overflow: "hidden",
          }}
        >
          <Box
            className="jarallax-img"
            aria-hidden="true"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              zIndex: -1,
              objectFit: "cover",
              fontFamily: "object-fit: cover;",
              backgroundImage: `url(${pricesJpg1})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          />

          <Box
            aria-hidden="true"
            sx={{
              position: "absolute",
              inset: 0,
              width: 1,
              height: 1,
              background: alpha("#161c2d", 0.25),
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <Container
            sx={{
              position: "relative",
              zIndex: 2,
              padding: 0,
            }}
          >
            <SectionHeader {...sectionHeaderProps} />
          </Container>
        </Box>
      ) : (
        <Box className="jumbotron">
          <Box className="photo-wrapper">
            <Box
              className="content-wrapper"
              minHeight={{
                xs: 590,
                sm: 650,
                md: 790,
              }}
            >
              <Box className="description-wrapper">
                <Container>
                  <SectionHeader {...sectionHeaderProps} />
                </Container>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PriceSection;
