import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as bootstrap from "bootstrap";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";

import Seo from "../components/Seo";
import Container from "../components/Container";

import PhoneSvg from "../assets/svg/PhoneSvg";
import EmailSvg from "../assets/svg/EmailSvg";

import { contact } from "../data/contact";
import { contactSchema } from "../models/schema/contactSchema";
import { contactModel } from "../models/contactModel";

import { emailService, emailTemplate, emailPublicKey } from "../config";

const ContactView = () => {
  const formRef = useRef(null);

  const theme = useTheme();

  const isSm = useMediaQuery(theme.breakpoints.up("sm"));

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: contactModel,
  });

  const showToast = (mode, text) => {
    const toastElement = document.getElementById("dynamicToast");

    if (!toastElement) {
      return;
    }

    toastElement.classList.remove("success", "danger");

    toastElement.classList.add(mode);

    const toastText = toastElement.querySelector(".toast-text");

    if (toastText) {
      toastText.textContent = text;
    }

    const toast = new bootstrap.Toast(toastElement);

    toast.show();
  };

  const sendEmail = async () => {
    if (!formRef.current) {
      return;
    }

    try {
      const result = await emailjs.sendForm(
        emailService,
        emailTemplate,
        formRef.current,
        emailPublicKey,
      );

      console.log(result.text);

      showToast("success", "Twoja wiadomość została wysłana");

      setTimeout(() => {
        reset();
      }, 1000);
    } catch (error) {
      console.error(error);

      showToast("danger", "Błąd wysyłania wiadomości");
    }
  };

  const renderIcon = (designation) => {
    const iconProps = {
      width: 20,
      height: 20,
      color: "#ffffff",
      "aria-hidden": true,
      focusable: false,
    };

    switch (designation) {
      case "phone":
        return <PhoneSvg {...iconProps} />;

      case "email":
        return <EmailSvg {...iconProps} />;

      case "address":
        return <FmdGoodIcon {...iconProps} />;

      case "hours":
        return <AccessTimeIcon {...iconProps} />;

      default:
        return null;
    }
  };

  return (
    <>
      <Seo
        title="Kontakt"
        description="Dane kontaktowe Kliniki dr Niny Wiśniewskiej w Wyszkowie: numery telefonów, adres e-mail, godziny otwarcia, lokalizacja oraz formularz kontaktowy."
        path="/kontakt"
      />

      <Box className="contact-view">
        <Box className="view-wrapper">
          <Box className="view-header">
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
                    Kontakt
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Kontakt
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper contact">
              <Box className="contact-form-wrapper">
                <form
                  ref={formRef}
                  id="contact-form"
                  noValidate
                  aria-label="Formularz kontaktowy"
                  onSubmit={handleSubmit(sendEmail)}
                >
                  <Box className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Imię i nazwisko
                      <span className="required" aria-hidden="true">
                        &nbsp;*
                      </span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name")}
                    />

                    {errors.name && (
                      <span id="name-error" className="error" role="alert">
                        {errors.name.message}
                      </span>
                    )}
                  </Box>

                  <Box className="row">
                    <Box className="col-sm-12 col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">
                        Adres e-mail
                        <span className="required" aria-hidden="true">
                          &nbsp;*
                        </span>
                      </label>

                      <input
                        id="email"
                        type="email"
                        className="form-control"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={
                          errors.email ? "email-error" : undefined
                        }
                        {...register("email")}
                      />

                      {errors.email && (
                        <span id="email-error" className="error" role="alert">
                          {errors.email.message}
                        </span>
                      )}
                    </Box>

                    <Box className="col-sm-12 col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">
                        Numer telefonu
                        <span className="required" aria-hidden="true">
                          &nbsp;*
                        </span>
                      </label>

                      <input
                        id="phone"
                        type="tel"
                        className="form-control"
                        autoComplete="tel"
                        aria-required="true"
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={
                          errors.phone ? "phone-error" : undefined
                        }
                        {...register("phone")}
                      />

                      {errors.phone && (
                        <span id="phone-error" className="error" role="alert">
                          {errors.phone.message}
                        </span>
                      )}
                    </Box>
                  </Box>

                  <Box>
                    <label htmlFor="message" className="form-label">
                      Wiadomość
                      <span className="required" aria-hidden="true">
                        &nbsp;*
                      </span>
                    </label>

                    <textarea
                      id="message"
                      className="form-control"
                      rows={isSm ? 6 : 4}
                      aria-required="true"
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={
                        errors.message ? "message-error" : undefined
                      }
                      {...register("message")}
                    />

                    {errors.message && (
                      <span id="message-error" className="error" role="alert">
                        {errors.message.message}
                      </span>
                    )}
                  </Box>

                  <span className="form-info">
                    Pola oznaczone
                    <span className="required" aria-hidden="true">
                      &nbsp;*
                    </span>
                    &nbsp;są wymagane.
                  </span>

                  <Box className="link-contained-submit" width="auto">
                    <Button
                      variant="contained"
                      color="primary"
                      size="large"
                      type="submit"
                      id="liveToastBtn"
                      disabled={isSubmitting}
                      endIcon={
                        <SendIcon aria-hidden="true" focusable="false" />
                      }
                    >
                      {isSubmitting ? "Wysyłanie..." : "Wyślij wiadomość"}
                    </Button>
                  </Box>
                </form>
              </Box>

              <Box className="contact-details-wrapper">
                <Box
                  component="ul"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  marginBottom={2}
                  sx={{
                    listStyle: "none",
                    padding: 0,
                  }}
                >
                  {contact.map((item) => {
                    const isExternalLink = item.href?.startsWith("http");

                    const contactContent = (
                      <ListItem
                        component="div"
                        disableGutters
                        sx={{
                          width: "auto",
                          padding: 0,
                        }}
                      >
                        <ListItemAvatar
                          sx={{
                            minWidth: "auto !important",
                            marginRight: 2,
                          }}
                        >
                          <Avatar
                            sx={{
                              width: 40,
                              height: 40,
                              backgroundImage:
                                "linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)",
                            }}
                          >
                            {renderIcon(item.designation)}
                          </Avatar>
                        </ListItemAvatar>

                        <ListItemText
                          className="list-item-text"
                          primary={item.label}
                          primaryTypographyProps={{
                            component: "div",
                          }}
                          secondaryTypographyProps={{
                            component: "div",
                          }}
                          secondary={
                            <>
                              <Box component="span" display="block">
                                {item.value}
                              </Box>

                              {item.value2 && (
                                <Box component="span" display="block">
                                  {item.value2}
                                </Box>
                              )}
                            </>
                          }
                        />
                      </ListItem>
                    );

                    return (
                      <Box
                        component="li"
                        key={`${item.designation}-${item.label}`}
                      >
                        {item.href ? (
                          <Box
                            component="a"
                            href={item.href}
                            className="link"
                            {...(isExternalLink && {
                              target: "_blank",
                              rel: "noreferrer",
                            })}
                          >
                            {contactContent}
                          </Box>
                        ) : (
                          <Box className="link">{contactContent}</Box>
                        )}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Container>

            <iframe
              width="100%"
              height="100%"
              title="Mapa dojazdu do Kliniki dr Niny Wiśniewskiej w Wyszkowie"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9694.856415856955!2d21.453784!3d52.592862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ee5a5adb9d581%3A0x2835d4bb585fbf47!2sFryderyka%20Chopina%2013%2C%2007-200%20Wyszk%C3%B3w!5e0!3m2!1spl!2spl!4v1660443766192!5m2!1spl!2spl"
              loading="lazy"
              style={{
                minHeight: 500,
                marginBottom: -6,
                backgroundColor: "#ebebeb",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ContactView;
