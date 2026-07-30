import React from "react";

import Box from "@mui/material/Box";

import Seo from "../components/Seo";

import HeroSection from "../sections/HeroSection";
import ClinicSection from "../sections/ClinicSection";
import ServicesSection from "../sections/ServicesSection";
import PriceSection from "../sections/PriceSection";
import TeamSection from "../sections/TeamSection";
// import TechnologySection from '../sections/TechnologySection';

import { clinic } from "../data/clinic";

const HomeView = () => {
  return (
    <Box className="home-view">
      <Seo
        title="Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska"
        description="Klinika dr Niny Wiśniewskiej w Wyszkowie oferuje dermatologię, medycynę estetyczną, kosmetologię, diagnostykę oraz konsultacje specjalistyczne."
        path="/"
        image={clinic.pictures[0]?.thumbnail.src}
        imageAlt={clinic.pictures[0]?.alt}
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
