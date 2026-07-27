import React from "react";

import Box from "@mui/material/Box";

import Seo from "../components/Seo";

import HeroSection from "../sections/HeroSection";
import ClinicSection from "../sections/ClinicSection";
import ServicesSection from "../sections/ServicesSection";
import PriceSection from "../sections/PriceSection";
import TeamSection from "../sections/TeamSection";
// import TechnologySection from '../sections/TechnologySection';

const HomeView = () => {
  return (
    <Box className="home-view">
      <Seo
        title="Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska"
        description="Klinika dr Niny Wiśniewskiej w Wyszkowie oferuje dermatologię, medycynę estetyczną, kosmetologię, diagnostykę oraz konsultacje specjalistyczne."
        path="/"
        appendBrand={false}
      />

      <HeroSection />
      <ClinicSection />
      <ServicesSection />
      <PriceSection />
      <TeamSection />
      {/* <TechnologySection /> */}
    </Box>
  );
};

export default HomeView;
