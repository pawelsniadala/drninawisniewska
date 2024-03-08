import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useParams } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import * as bootstrap from 'bootstrap';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
// import Tooltip from '@mui/material/Tooltip';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SendIcon from '@mui/icons-material/Send';
// import InfoIcon from '@mui/icons-material/Info';
// import IconButton from '@mui/material/IconButton';

import Page from '../../../components/Page';
import Container from '../../../components/Container';

import { careerSchema } from '../../../models/schema/careerSchema';
import { careerModel } from '../../../models/careerModel';

import {
    emailService,
    emailTemplateCareer,
    emailPublicKey
} from '../../../config';

import { application } from '../../../data/career';
import {
    receptionist,
    hematologist,
    dermatologist,
    urologist,
    psychiatrist,
    cosmetologist
} from '../../../data/career';

const CareerApplicationPartial = () => {
    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(careerSchema),
        defaultValues: careerModel
    });

    const sendEmail = async () => {
        try {
            const form = document.getElementById('career-form');
            const result = await emailjs.sendForm(emailService, emailTemplateCareer, form, emailPublicKey);
            console.log(result.text);
            showToast('success', 'Twoja wiadomość została wysłana');
            setTimeout(reset, 1000);
        } catch (error) {
            console.log(error.text);
            showToast('danger', 'Błąd wysyłania wiadomości');
        }
    }

    const showToast = (mode, text) => {
        const toast = new bootstrap.Toast(document.getElementById('dynamicToast'));
        const toastElement = document.getElementById('dynamicToast');
        toastElement.classList.remove('success', 'danger');
        toastElement.classList.add(mode);
        document.querySelector('.toast-text').innerText = text;
        toast.show();
    }

    // set profession
    const { profession } = useParams();
    const professionData = {
        receptionist: [{ ...receptionist }],
        hematologist: [{ ...hematologist }],
        dermatologist: [{ ...dermatologist }],
        urologist: [{ ...urologist }],
        psychiatrist: [{ ...psychiatrist }],
        cosmetologist: [{ ...cosmetologist }]
    };
    const setProfession = () => professionData[profession] || [];

    const title = setProfession()[0].title;

    // showToast('success', 'Twoja wiadomość została wysłana');
    // showToast('danger', 'Błąd wysyłania wiadomości');

    // const tooltip = (title) => (
    //     <Tooltip title={title}>
    //         <IconButton
    //             sx={{
    //                 height: '12px',
    //                 width: '12px',
    //                 marginLeft: '8px',
    //                 color: '#d9ab5a'
    //             }}
    //         >
    //             <InfoIcon fontSize='small' />
    //         </IconButton>
    //     </Tooltip>
    // );

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs className='breadcrumb back' aria-label='breadcrumb'>
                                <Link to={`/career/${profession}`} aria-current='page'>
                                    <ArrowBackIcon />
                                    <Box>{title}</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/' aria-current='page'>
                                    Home
                                </Link>
                                <Link to='/team' aria-current='page'>
                                    Kariera
                                </Link>
                                <Link to={`/career/${profession}`} aria-current='page'>
                                    {title}
                                </Link>
                                <Typography color='text.primary'>
                                    Aplikacja
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Aplikacja
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper career-application'>
                        <Box className='career-description'>
                            <Box className='box-career'>
                                <Typography variant={'h5'} className='header'>
                                    Etapy rekrutacji
                                </Typography>
                                <Box className='stepper-wrapper'>
                                    <Stepper orientation="vertical" className='stepper'>
                                        {application.recruitment.map((item) => (
                                            <Step key={item.label} className='step' active>
                                                <StepLabel className='step-label'>
                                                    {item.label}
                                                </StepLabel>
                                                <StepContent className='step-content'>
                                                    <Typography>{item.description}</Typography>
                                                </StepContent>
                                            </Step>
                                        ))}
                                    </Stepper>
                                </Box>
                            </Box>
                        </Box>
                        <Box className='application-wrapper'>
                            <Box className='box-application'>
                                <Box className='header-wrapper'>
                                    <Typography className='header'>
                                        Twoja aplikacja
                                    </Typography>
                                </Box>
                                <Box className='contact-form-wrapper'>
                                    <form id='career-form' noValidate encType="multipart/form-data" onSubmit={handleSubmit(sendEmail)}>
                                        <Box className='mb-3'>
                                            <label htmlFor='name' className='form-label'>
                                                Imię i nazwisko
                                                <span className='required'>&nbsp;*</span>
                                            </label>
                                            <input type='text' className='form-control' {...register('name')} />
                                            {errors.name && <span className='error'>{errors.name.message}</span>}
                                        </Box>
                                        <Box className='row'>
                                            <Box className='col-sm-12 col-md-6 mb-3'>
                                                <label htmlFor='email' className='form-label'>
                                                    Adres e-mail
                                                    <span className='required'>&nbsp;*</span>
                                                </label>
                                                <input type='text' className='form-control' {...register('email')} />
                                                {errors.email && <span className='error'>{errors.email.message}</span>}
                                            </Box>
                                            <Box className='col-sm-12 col-md-6 mb-3'>
                                                <label htmlFor='phone' className='form-label'>
                                                    Numer telefonu
                                                    <span className='required'>&nbsp;*</span>
                                                </label>
                                                <input type='tel' className='form-control' {...register('phone')} />
                                                {errors.phone && <span className='error'>{errors.phone.message}</span>}
                                            </Box>
                                        </Box>
                                        {/* <Box>
                                            <label htmlFor='message' className='form-label'>
                                                Wiadomość
                                                <span className='required'>&nbsp;*</span>
                                            </label>
                                            <textarea className='form-control' {...register('message')} rows={isSm ? '2' : '4'} />
                                            {errors.message && <span className='error'>{errors.message.message}</span>}
                                        </Box> */}
                                        <Box className='file-wrapper'>
                                            <label htmlFor="application" className="form-label">
                                                Aplikacja
                                                <span className='required'>&nbsp;*</span>
                                                {/* {tooltip('Akceptujemy jedynie dokumenty w formacie pdf lub docx, a rozmiar pliku nie może przekraczać 500kB')} */}
                                            </label>
                                            <input
                                                className="form-control"
                                                type="file"
                                                {...register('application')}
                                                // onChange={(e) => setFile(e.target.files[0])}
                                            />
                                            {errors.application && <span className='error'>{errors.application.message}</span>}
                                        </Box>
                                        {/* <span className='form-info'>Wybierz plik w formacie pdf lub docx o rozmiarze nieprzekraczającym 500kB.</span> */}
                                        <span className='form-info'>Pola oznaczone<span className='required'>&nbsp;*</span>&nbsp;są wymagane.</span>
                                        <Box className='link-contained-submit' width='auto'>
                                            <Button
                                                variant='contained'
                                                color='primary'
                                                size='large'
                                                type='submit'
                                                id='liveToastBtn'
                                                endIcon={<SendIcon />}
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
    );
}

export default Page(CareerApplicationPartial);
