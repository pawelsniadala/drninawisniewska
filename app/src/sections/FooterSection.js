import React from "react";
import { Link } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Container from "../components/Container";

import FacebookSvg from "../assets/svg/FacebookSvg";
import InstagramSvg from "../assets/svg/InstagramSvg";

const listStyles = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <Box component="footer">
      <Container className="section-wrapper footer">
        {/* KLINIKA */}
        <Box
          component="section"
          className="business"
          aria-labelledby="footer-clinic-heading"
        >
          <Typography
            id="footer-clinic-heading"
            component="h2"
            variant="h6"
            className="footer-heading"
          >
            Klinika
          </Typography>

          <Box className="business-wrapper">
            <Typography component="p" className="footer-text">
              Dermatologia i Medycyna estetyczna
              <br />
              dr Nina Wiśniewska
            </Typography>

            <Typography
              component="a"
              href="https://goo.gl/maps/1a3qFdxNqTNJdahY9"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-text link"
            >
              ul. Fryderyka Chopina 13/U2A,
              <br />
              07-200 Wyszków
            </Typography>

            <Typography
              component={Link}
              to="/klinika/regulamin-organizacyjny"
              className="footer-text link"
            >
              Regulamin organizacyjny
            </Typography>
          </Box>
        </Box>

        {/* SPECJALIZACJE */}
        <Box
          component="nav"
          className="services"
          aria-labelledby="footer-services-heading"
        >
          <Typography
            id="footer-services-heading"
            component="h2"
            variant="h6"
            className="footer-heading"
          >
            Specjalizacje
          </Typography>

          <Box component="ul" className="services-wrapper" sx={listStyles}>
            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/dermatologia"
                className="footer-text link"
              >
                Dermatologia
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/medycyna-estetyczna"
                className="footer-text link"
              >
                Medycyna estetyczna
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/kosmetologia"
                className="footer-text link"
              >
                Kosmetologia
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/chirurgia-plastyczna"
                className="footer-text link"
              >
                Chirurgia plastyczna
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/alergologia"
                className="footer-text link"
              >
                Alergologia
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/usg"
                className="footer-text link"
              >
                USG
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/ginekologia"
                className="footer-text link"
              >
                Ginekologia
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/chirurgia-naczyniowa"
                className="footer-text link"
              >
                Chirurgia naczyniowa
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/dietetyka-kliniczna"
                className="footer-text link"
              >
                Dietetyka Kliniczna
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/kardiologia"
                className="footer-text link"
              >
                Kardiologia
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/psychiatria"
                className="footer-text link"
              >
                Psychiatria
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/specjalizacje/psychologia"
                className="footer-text link"
              >
                Psychologia
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ZABIEGI */}
        <Box
          component="nav"
          className="treatment"
          aria-labelledby="footer-treatments-heading"
        >
          <Typography
            id="footer-treatments-heading"
            component="h2"
            variant="h6"
            className="footer-heading"
          >
            Zabiegi
          </Typography>

          <Box component="ul" className="treatment-wrapper" sx={listStyles}>
            {/* Dermatologia */}
            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/dermatologia/badanie-znamion-barwnikowych"
                className="footer-text link"
              >
                Badanie znamion barwnikowych
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/dermatologia/fototerapia-chorob-skory"
                className="footer-text link"
              >
                Fototerapia chorób skóry
              </Typography>
            </Box>

            {/* Medycyna estetyczna */}
            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/medycyna-estetyczna/osocze-bogatoplytkowe"
                className="footer-text link"
              >
                Osocze bogatopłytkowe
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/medycyna-estetyczna/mezoterapia-iglowa"
                className="footer-text link"
              >
                Mezoterapia igłowa
              </Typography>
            </Box>

            {/* Kosmetologia */}
            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/kosmetologia/peeling-medyczny"
                className="footer-text link"
              >
                Peeling medyczny
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/kosmetologia/epilacja-laserowa"
                className="footer-text link"
              >
                Epilacja laserowa
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/kosmetologia/masaz-prozniowy"
                className="footer-text link"
              >
                Masaż próżniowy
              </Typography>
            </Box>

            {/* Chirurgia plastyczna */}
            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/chirurgia-plastyczna/plastyka-powiek"
                className="footer-text link"
              >
                Plastyka powiek
              </Typography>
            </Box>

            {/* Alergologia */}
            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/alergologia/testy-skorne"
                className="footer-text link"
              >
                Testy skórne
              </Typography>
            </Box>

            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/alergologia/odczulanie"
                className="footer-text link"
              >
                Odczulanie
              </Typography>
            </Box>

            {/* Chirurgia naczyniowa */}
            <Box component="li">
              <Typography
                component={Link}
                to="/zabiegi/chirurgia-naczyniowa/skleroterapia"
                className="footer-text link"
              >
                Skleroterapia
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* KONTAKT */}
        <Box
          component="section"
          className="contact"
          aria-labelledby="footer-contact-heading"
        >
          <Typography
            id="footer-contact-heading"
            component="h2"
            variant="h6"
            className="footer-heading"
          >
            Kontakt
          </Typography>

          <Box
            component="address"
            className="contact-wrapper"
            sx={{ fontStyle: "normal" }}
          >
            <Typography
              component="a"
              href="tel:+48450001550"
              className="footer-text link"
            >
              450 001 550
            </Typography>

            <Typography
              component="a"
              href="tel:+48539968541"
              className="footer-text link"
            >
              539 968 541
            </Typography>

            <Typography
              component="a"
              href="mailto:info@drninawisniewska.pl"
              className="footer-text link"
            >
              info@drninawisniewska.pl
            </Typography>

            <Box
              component="nav"
              className="media-wrapper"
              aria-label="Media społecznościowe"
            >
              <Typography
                component="a"
                href="https://www.facebook.com/profile.php?id=100063736802328"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Kliniki dr Niny Wiśniewskiej"
              >
                <FacebookSvg
                  width={16}
                  height={16}
                  aria-hidden="true"
                  focusable="false"
                />
              </Typography>

              <Typography
                component="a"
                href="https://www.instagram.com/klinikawyszkow/"
                className="link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Kliniki dr Niny Wiśniewskiej"
              >
                <InstagramSvg
                  width={16}
                  height={16}
                  aria-hidden="true"
                  focusable="false"
                />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      {/* INFORMACJE PRAWNE I AUTORSKIE */}
      <Box className="section-wrapper info">
        <Box className="copyright">
          <Box>
            Copyright © {year} Dermatologia i Medycyna Estetyczna dr Nina
            Wiśniewska.
          </Box>

          <Box>
            All rights reserved. Photos designed by{" "}
            <a
              href="https://www.freepik.com"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Freepik
            </a>
            . Design by{" "}
            <a
              href="https://www.linkedin.com/in/pawelsniadala/"
              className="design"
              target="_blank"
              rel="noopener noreferrer"
            >
              Paweł Śniadała
            </a>
            .
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FooterSection;
