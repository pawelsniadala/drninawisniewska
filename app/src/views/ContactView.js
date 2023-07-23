import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import * as bootstrap from 'bootstrap';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';

import Page from '../components/Page';
import Container from '../components/Container';
import PhoneSvg from '../assets/svg/PhoneSvg';
import EmailSvg from '../assets/svg/EmailSvg';

import { contact } from '../data/contact';
import { contactSchema } from '../models/schema/contactSchema';
import { contactModel } from '../models/contactModel';
import {
    emailService,
    emailTemplate,
    emailPublicKey
} from '../config';

const ContactView = () => {
    const theme = useTheme();

    const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
        defaultMatches: true
    });

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(contactSchema),
        defaultValues: contactModel
    });

    const sendEmail = () => {
        emailjs.sendForm(
            emailService,
            emailTemplate,
            '#contact-form',
            emailPublicKey
        ).then((result) => {
            console.log(result.text);
            showToast();
            setTimeout(() => {
                reset();
            }, 1000);
        }, (error) => {
            console.log(error.text);
        });
    }

    const showToast = () => {
        new bootstrap.Toast(
            document.getElementById('successToast')
        ).show();
    }

    const renderIcon = (designation) => {
        switch(designation) {
            case 'phone':
                return <PhoneSvg width='20px' height='20px' color='#fff'/>;
            case 'email':
                return <EmailSvg width='20px' height='20px' color='#fff' />
            case 'address':
                return <FmdGoodIcon />;
            case 'hours':
                return <AccessTimeIcon />;
            default:
        }
    }

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                                <Typography color='text.primary'>
                                    Kontakt
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Kontakt
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper contact'>
                        <Box className='contact-form-wrapper'>
                            <form id='contact-form' noValidate onSubmit={handleSubmit(sendEmail)}>
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
                                <Box>
                                    <label htmlFor='message' className='form-label'>
                                        Wiadomość
                                        <span className='required'>&nbsp;*</span>
                                    </label>
                                    <textarea className='form-control' {...register('message')} rows={isSm ? '6' : '4'} />
                                    {errors.message && <span className='error'>{errors.message.message}</span>}
                                </Box>
                                <span className='form-info'>Pola oznaczone<span className='required'>&nbsp;*</span>&nbsp;są wymagane</span>
                                <Box className='link-contained-submit' width='auto'>
                                    <Button
                                        variant='contained'
                                        color='primary'
                                        size='large'
                                        type='submit'
                                        id='liveToastBtn'
                                        endIcon={<SendIcon />}
                                    >
                                        Wyślij wiadomość
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                        <Box className='contact-details-wrapper'>
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'space-between'}
                                marginBottom={2}
                            >
                                {contact.map((item, index) => (
                                    <Box
                                        key={index}
                                        component='a'
                                        href={item.href}
                                        target='_blank'
                                        className='link'
                                    >
                                        <Box
                                            component={ListItem}
                                            disableGutters
                                            width={'auto'}
                                            padding={0}
                                        >
                                            <Box
                                                component={ListItemAvatar}
                                                minWidth={'auto !important'}
                                                marginRight={2}
                                            >
                                                <Box
                                                    component={Avatar}
                                                    width={40}
                                                    height={40}
                                                    sx={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                                >
                                                    {renderIcon(item.designation)}
                                                </Box>
                                            </Box>
                                            <ListItemText
                                                className='list-item-text'
                                                primary={item.label}
                                                secondary={
                                                    <>
                                                        <Box>{item.value}</Box>
                                                        <Box>{item.value2}</Box>
                                                    </>
                                                }
                                            />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Container>
                    <iframe
                        width='100%'
                        height='100%'
                        title='map'
                        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9694.856415856955!2d21.453784!3d52.592862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ee5a5adb9d581%3A0x2835d4bb585fbf47!2sFryderyka%20Chopina%2013%2C%2007-200%20Wyszk%C3%B3w!5e0!3m2!1spl!2spl!4v1660443766192!5m2!1spl!2spl'
                        style={{
                            minHeight: 500,
                            marginBottom: -6,
                            backgroundColor: '#ebebeb'
                        }}
                    />
                </Box>
            </Box>
        </Box>
    );
}

export default Page(ContactView);
