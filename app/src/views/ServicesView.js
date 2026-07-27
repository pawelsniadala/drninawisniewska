import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "../components/Container";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Tooltip from "@mui/material/Tooltip";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import CardServices from "../components/CardServices";
import CardProposed from "../components/CardProposed";
import Seo from "../components/Seo";

import SearchSvg from "../assets/svg/SearchSvg";
import CloseSvg from "../assets/svg/CloseSvg";

import { services } from "../data/services";

const ServicesView = () => {
  // search engine
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredServices = services.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  // window dimensions
  function getWindowDimensions() {
    const { innerWidth: width } = window;
    return { width };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions(),
    );
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }
  const { width } = useWindowDimensions();

  return (
    <>
      <Seo
        title="Specjalizacje"
        description="Zakres specjalizacji Kliniki dr Niny Wiśniewskiej w Wyszkowie obejmuje dermatologię, medycynę estetyczną, kosmetologię, chirurgię i inne dziedziny medycyny."
        path="/specjalizacje"
      />
      <Box className="services-view">
        <Box className="view-wrapper">
          <Box className="view-header services">
            <Container className="header-wrapper">
              <Box className="nav-wrapper">
                <Breadcrumbs
                  className="breadcrumb back"
                  aria-label="Nawigacja powrotna"
                >
                  <Link to="/">
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">Strona główna</Box>
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

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Specjalizacje
                  </Typography>
                </Breadcrumbs>
              </Box>
              <Box className="heading-wrapper">
                <Typography variant="h4" className="heading-view">
                  Specjalizacje
                </Typography>
              </Box>
            </Container>
          </Box>
          <Box className="view-body">
            <Container className="body-wrapper">
              <Box className="input-group search-wrapper">
                <span className="input-group-text search">
                  <SearchSvg width={16} height={16} color="#acacac" />
                </span>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Wyszukaj"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchTerm.length > 0 && (
                  <Tooltip title="Wyczyść">
                    <span
                      className="input-group-text close"
                      onClick={clearSearchTerm}
                    >
                      <CloseSvg width={11} height={11} color="#acacac" />
                    </span>
                  </Tooltip>
                )}
              </Box>
              <Box className="card-wrapper services">
                {width >= 991.98
                  ? filteredServices.map((item) => (
                      <CardServices
                        key={item.id}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardPath={item.path}
                        cardPathSpecialist={item.pathSpecialist}
                        cardPathPrices={item.pathPrices}
                        cardSpecialist={item.specialists}
                        cardImage={item.image}
                        cardImageVisible={false}
                      />
                    ))
                  : filteredServices.map((item) => (
                      <CardProposed
                        key={item.id}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.image}
                        cardPath={item.path}
                      />
                    ))}
                {filteredServices.length === 0 && (
                  <div class="alert alert-empty" role="alert">
                    Brak wyników wyszukiwania
                  </div>
                )}
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ServicesView;
