import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import CardServices from "../components/CardServices";
import CardProposed from "../components/CardProposed";

import { services } from "../data/services";

const swiperModules = [Autoplay, Pagination];

const ServicesSection = () => {
  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  const isSmallMobile = useMediaQuery("(max-width: 539.98px)");

  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  const desktopServices = services?.slice(0, 6) ?? [];

  const mobileServices = desktopServices.slice(0, isSmallMobile ? 4 : 6);

  return (
    <Box
      component="section"
      className="services-section"
      aria-label="Specjalizacje dostępne w klinice"
    >
      <Container className="services-container">
        <SectionHeader
          sectionTitle="Specjalizacje"
          sectionHeader="Specjalizacje dostępne w naszej klinice"
          sectionSubheader="Zapoznaj się z treścią naszych specjalizacji"
          sectionLinkText="Zobacz wszystkie specjalizacje"
          sectionLinkPath="/specjalizacje"
        />

        <Box className="section-body">
          {isDesktop ? (
            <Swiper
              className="mySwiper"
              slidesPerView={3}
              spaceBetween={20}
              speed={prefersReducedMotion ? 0 : 500}
              loop={desktopServices.length > 3}
              watchOverflow
              pagination={{
                clickable: true,
              }}
              autoplay={
                prefersReducedMotion
                  ? false
                  : {
                      delay: 4000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }
              }
              modules={swiperModules}
              aria-label="Wybrane specjalizacje"
            >
              {desktopServices.map((item, index) => {
                const serviceKey = item.id ?? `${item.path}-${item.title}`;

                return (
                  <SwiperSlide
                    key={serviceKey}
                    aria-label={`${index + 1} z ${
                      desktopServices.length
                    }: ${item.title}`}
                  >
                    <CardServices
                      cardTitle={item.title}
                      cardDescription={item.description}
                      cardPath={item.path}
                      cardPathSpecialist={item.pathSpecialist}
                      cardPathPrices={item.pathPrices}
                      cardSpecialist={item.specialists}
                      cardImage={item.image}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <Box className="card-wrapper services">
              {mobileServices.map((item) => {
                const serviceKey = item.id ?? `${item.path}-${item.title}`;

                return (
                  <CardProposed
                    key={serviceKey}
                    cardTitle={item.title}
                    cardDescription={item.description}
                    cardImage={item.image}
                    cardPath={item.path}
                  />
                );
              })}
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default ServicesSection;
