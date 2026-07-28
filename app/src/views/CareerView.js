import React, { useState } from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Tooltip from "@mui/material/Tooltip";
import useMediaQuery from "@mui/material/useMediaQuery";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Seo from "../components/Seo";
import Container from "../components/Container";
import CardCareer from "../components/CardCareer";
import CardCareerProposed from "../components/CardCareerProposed";

import SearchSvg from "../assets/svg/SearchSvg";
import CloseSvg from "../assets/svg/CloseSvg";

import { career } from "../data/career";

const CareerView = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase("pl-PL");

  const filteredCareer = career.filter((item) =>
    item.title?.toLocaleLowerCase("pl-PL").includes(normalizedSearchTerm),
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clearSearchTerm = () => {
    setSearchTerm("");
  };

  return (
    <>
      <Seo
        title="Kariera"
        description="Aktualne oferty pracy w Klinice dr Niny Wiśniewskiej w Wyszkowie wraz z informacjami o stanowiskach, lokalizacji i formie zatrudnienia."
        path="/kariera"
      />

      <Box className="contact-view">
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
                    Kariera
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Kariera
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper">
              <Box
                component="form"
                role="search"
                className="input-group search-wrapper"
                onSubmit={(event) => event.preventDefault()}
              >
                <Box
                  component="span"
                  className="input-group-text search"
                  aria-hidden="true"
                >
                  <SearchSvg width={16} height={16} color="#a2a2a2" />
                </Box>

                <input
                  id="career-search"
                  type="search"
                  className="form-control"
                  placeholder="Wyszukaj"
                  aria-label="Wyszukaj ofertę pracy"
                  aria-controls="career-results"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />

                {searchTerm.length > 0 && (
                  <Tooltip title="Wyczyść">
                    <Box
                      component="button"
                      type="button"
                      className="input-group-text close"
                      aria-label="Wyczyść wyszukiwanie"
                      onClick={clearSearchTerm}
                    >
                      <Box component="span" aria-hidden="true">
                        <CloseSvg width={11} height={11} />
                      </Box>
                    </Box>
                  </Tooltip>
                )}
              </Box>

              <Box
                id="career-results"
                className="card-wrapper career"
                aria-live="polite"
              >
                {filteredCareer.map((item) => {
                  const cardProps = {
                    cardTitle: item.title,
                    cardLocation: item.location,
                    cardDate: item.date,
                    cardAgreement: item.agreement,
                    cardPosition: item.position,
                    cardType: item.type,
                    cardPlace: item.place,
                    cardPath: item.path,
                    cardImage: item.image,
                    cardStatus: item.status,
                  };

                  if (isDesktop) {
                    return <CardCareer key={item.id} {...cardProps} />;
                  }

                  return <CardCareerProposed key={item.id} {...cardProps} />;
                })}

                {filteredCareer.length === 0 && (
                  <Box className="alert alert-empty" role="status">
                    Brak wyników wyszukiwania
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

export default CareerView;
