import React, { useState } from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Pagination from "@mui/material/Pagination";
import useMediaQuery from "@mui/material/useMediaQuery";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Seo from "../components/Seo";
import Container from "../components/Container";
import CardSpecialOffer from "../components/CardSpecialOffer";
import CardSpecialOfferProposed from "../components/CardSpecialOfferProposed";

import { specialOffer } from "../data/specialOffer";

const ITEMS_PER_PAGE = 40;

const SpecialOfferView = () => {
  const [page, setPage] = useState(1);

  const isDesktop = useMediaQuery("(min-width: 991.98px)");

  const pageCount = Math.ceil(specialOffer.length / ITEMS_PER_PAGE);

  const currentData = specialOffer.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE,
  );

  const handlePageChange = (_, value) => {
    setPage(value);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  };

  const getPaginationItemAriaLabel = (type, pageNumber, selected) => {
    if (type === "page") {
      return selected
        ? `Strona ${pageNumber}, bieżąca`
        : `Przejdź do strony ${pageNumber}`;
    }

    if (type === "next") {
      return "Przejdź do następnej strony";
    }

    if (type === "previous") {
      return "Przejdź do poprzedniej strony";
    }

    if (type === "first") {
      return "Przejdź do pierwszej strony";
    }

    if (type === "last") {
      return "Przejdź do ostatniej strony";
    }

    return "Element paginacji";
  };

  return (
    <>
      <Seo
        title="Promocje"
        description="Aktualne promocje na zabiegi dostępne w Klinice dr Niny Wiśniewskiej w Wyszkowie."
        path="/promocje"
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
                    Promocje
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Promocje
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper">
              <Box className="card-wrapper special-offer">
                {currentData.map((item, index) => {
                  const cardKey =
                    item.id ?? `${item.title}-${item.date}-${index}`;

                  if (isDesktop) {
                    return (
                      <CardSpecialOffer
                        key={cardKey}
                        cardTitle={item.title}
                        cardDate={item.date}
                        cardDescription1={item.description1}
                        cardDescription2={item.description2}
                        cardDescription3={item.description3}
                        cardDescription4={item.description4}
                        cardDescription5={item.description5}
                        cardImage={item.image}
                        cardImageVisible={false}
                      />
                    );
                  }

                  return (
                    <CardSpecialOfferProposed
                      key={cardKey}
                      cardTitle={item.title}
                      cardDate={item.date}
                      cardDescription1={item.description1}
                      cardDescription2={item.description2}
                      cardDescription3={item.description3}
                      cardDescription4={item.description4}
                      cardDescription5={item.description5}
                      cardImage={item.image}
                    />
                  );
                })}
              </Box>

              {pageCount > 1 && (
                <Box
                  className="pagination-wrapper"
                  component="nav"
                  aria-label="Paginacja promocji"
                >
                  <Pagination
                    className="pagination"
                    count={pageCount}
                    page={page}
                    onChange={handlePageChange}
                    getItemAriaLabel={getPaginationItemAriaLabel}
                  />
                </Box>
              )}
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SpecialOfferView;
