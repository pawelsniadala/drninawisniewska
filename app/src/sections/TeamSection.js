import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import Container from "../components/Container";
import SectionHeader from "../components/SectionHeader";
import CardTeam from "../components/CardTeam";
import CardTeamProposed from "../components/CardTeamProposed";

import { team } from "../data/team";

const swiperModules = [Autoplay, Pagination];

const specializationSlugs = {
  dermatology: "dermatologia",
  "aesthetic-medicine": "medycyna-estetyczna",
  cosmetology: "kosmetologia",
  "cosmetic-surgery": "chirurgia-plastyczna",
  allergology: "alergologia",
  usg: "usg",
  endocrinology: "endokrynologia",
  gynecology: "ginekologia",
  "vascular-surgery": "chirurgia-naczyniowa",
  "clinical-dietitian": "dietetyka-kliniczna",
  cardiology: "kardiologia",
  psychiatry: "psychiatria",
  psychology: "psychologia",
  "medical-registration": "rejestracja-medyczna",
};

const getSpecialistPath = (item) => {
  const specialization = item.specialization?.[0];
  const specializationSlug =
    specializationSlugs[specialization] ?? specialization;

  if (!specializationSlug || !item.specialist) {
    return "/specjalisci";
  }

  return `/specjalisci/${specializationSlug}/${item.specialist}`;
};

const TeamSection = () => {
  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  const isSmallMobile = useMediaQuery("(max-width: 539.98px)");

  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  const desktopTeam = team?.slice(0, 7) ?? [];

  const mobileTeam = desktopTeam.slice(0, isSmallMobile ? 4 : 6);

  return (
    <Box
      component="section"
      className="team-section"
      aria-label="Specjaliści pracujący w klinice"
    >
      <Container className="team-container">
        <SectionHeader
          sectionTitle="Specjaliści"
          sectionHeader="Zaufaj profesjonalistom"
          sectionSubheader="Nasz zespół składa się ze specjalistów o bardzo szerokim spektrum kompetencji"
          sectionLinkText="Zobacz naszych specjalistów"
          sectionLinkPath="/specjalisci"
        />

        <Box className="section-body">
          {isDesktop ? (
            <Swiper
              className="mySwiper"
              slidesPerView={4}
              spaceBetween={20}
              speed={prefersReducedMotion ? 0 : 500}
              loop={desktopTeam.length > 4}
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
              aria-label="Wybrani specjaliści"
            >
              {desktopTeam.map((item, index) => {
                const specialistKey =
                  item.id ?? `${item.specialist}-${item.name}`;

                return (
                  <SwiperSlide
                    key={specialistKey}
                    role="group"
                    aria-roledescription="slajd"
                    aria-label={`${index + 1} z ${
                      desktopTeam.length
                    }: ${item.name}`}
                  >
                    <CardTeam
                      cardImage={item.image}
                      cardBackground={item.background}
                      cardTitle={item.title}
                      cardName={item.name}
                      cardSpeciality={item.speciality}
                      cardDescription={item.experience ?? item.education}
                      cardPath={getSpecialistPath(item)}
                      cardServices={item.services}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <Box className="card-wrapper team section">
              {mobileTeam.map((item) => {
                const specialistKey =
                  item.id ?? `${item.specialist}-${item.name}`;

                return (
                  <CardTeamProposed
                    key={specialistKey}
                    cardTitle={item.name}
                    cardSpeciality={item.speciality}
                    cardExperience={item.experience ?? item.education}
                    cardImage={item.image}
                    cardPath={getSpecialistPath(item)}
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

export default TeamSection;
