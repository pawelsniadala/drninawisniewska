import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, Navigate, useParams } from "react-router-dom";

import emailjs from "@emailjs/browser";
import * as bootstrap from "bootstrap";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SendIcon from "@mui/icons-material/Send";

import Seo from "../../../components/Seo";
import Container from "../../../components/Container";

import { careerSchema } from "../../../models/schema/careerSchema";
import { careerModel } from "../../../models/careerModel";

import {
  emailService,
  emailTemplateCareer,
  emailPublicKey,
} from "../../../config";

import { application, getCareerOfferBySlug } from "../../../data/career";

const CareerApplicationPartial = () => {
  const formRef = useRef(null);
  const { stanowisko } = useParams();

  const professionItem = getCareerOfferBySlug(stanowisko);
  const title = professionItem?.title || "";

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(careerSchema),
    defaultValues: careerModel,
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
      toastText.innerText = text;
    }

    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  };

  const sendEmail = async () => {
    if (!formRef.current) {
      return;
    }

    try {
      await emailjs.sendForm(
        emailService,
        emailTemplateCareer,
        formRef.current,
        emailPublicKey,
      );

      showToast("success", "Twoja wiadomość została wysłana");

      setTimeout(() => {
        reset();
      }, 1000);
    } catch (error) {
      console.error(error);

      showToast("danger", "Błąd wysyłania wiadomości");
    }
  };

  if (!professionItem) {
    return <Navigate to="/kariera" replace />;
  }

  return (
    <>
      <Seo
        title={`Aplikacja na stanowisko ${title}`}
        description={`Formularz aplikacyjny na stanowisko ${title} w Klinice dr Niny Wiśniewskiej w Wyszkowie.`}
        path={`${professionItem.path}/aplikacja`}
        noIndex
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
                  <Link to={professionItem.path}>
                    <ArrowBackIcon aria-hidden="true" focusable="false" />

                    <Box component="span">{title}</Box>
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
                  <Link to="/kariera">Kariera</Link>
                  <Link to={professionItem.path}>{title}</Link>

                  <Typography
                    component="span"
                    color="text.primary"
                    aria-current="page"
                  >
                    Aplikacja
                  </Typography>
                </Breadcrumbs>
              </Box>

              <Box className="heading-wrapper">
                <Typography
                  component="h1"
                  variant="h4"
                  className="heading-view"
                >
                  Aplikacja
                </Typography>
              </Box>
            </Container>
          </Box>

          <Box className="view-body">
            <Container className="body-wrapper career-application">
              <Box className="career-description">
                <Box className="box-career">
                  <Typography component="h2" variant="h5" className="header">
                    Etapy rekrutacji
                  </Typography>

                  <Box className="stepper-wrapper">
                    <Stepper
                      orientation="vertical"
                      className="stepper"
                      aria-label="Etapy procesu rekrutacji"
                    >
                      {application.recruitment.map((item) => (
                        <Step key={item.label} className="step" active>
                          <StepLabel className="step-label">
                            {item.label}
                          </StepLabel>

                          <StepContent className="step-content">
                            <Typography>{item.description}</Typography>
                          </StepContent>
                        </Step>
                      ))}
                    </Stepper>
                  </Box>
                </Box>
              </Box>

              <Box className="application-wrapper">
                <Box className="box-application">
                  <Box className="header-wrapper">
                    <Typography component="h2" className="header">
                      Twoja aplikacja
                    </Typography>
                  </Box>

                  <Box className="contact-form-wrapper">
                    <form
                      ref={formRef}
                      id="career-form"
                      noValidate
                      encType="multipart/form-data"
                      onSubmit={handleSubmit(sendEmail)}
                    >
                      <input
                        type="hidden"
                        name="profession"
                        value={title}
                        readOnly
                      />

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
                          aria-invalid={errors.name ? "true" : "false"}
                          aria-describedby={
                            errors.name ? "name-error" : undefined
                          }
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
                            aria-invalid={errors.email ? "true" : "false"}
                            aria-describedby={
                              errors.email ? "email-error" : undefined
                            }
                            {...register("email")}
                          />

                          {errors.email && (
                            <span
                              id="email-error"
                              className="error"
                              role="alert"
                            >
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
                            aria-invalid={errors.phone ? "true" : "false"}
                            aria-describedby={
                              errors.phone ? "phone-error" : undefined
                            }
                            {...register("phone")}
                          />

                          {errors.phone && (
                            <span
                              id="phone-error"
                              className="error"
                              role="alert"
                            >
                              {errors.phone.message}
                            </span>
                          )}
                        </Box>
                      </Box>

                      <Box className="file-wrapper">
                        <label htmlFor="application" className="form-label">
                          Aplikacja
                          <span className="required" aria-hidden="true">
                            &nbsp;*
                          </span>
                        </label>

                        <input
                          id="application"
                          className="form-control"
                          type="file"
                          aria-required="true"
                          aria-invalid={errors.application ? "true" : "false"}
                          aria-describedby={
                            errors.application ? "application-error" : undefined
                          }
                          {...register("application")}
                        />

                        {errors.application && (
                          <span
                            id="application-error"
                            className="error"
                            role="alert"
                          >
                            {errors.application.message}
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
                          Wyślij aplikację
                        </Button>
                      </Box>
                    </form>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CareerApplicationPartial;
