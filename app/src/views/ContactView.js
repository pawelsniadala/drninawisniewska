import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Lightbox from 'react-image-lightbox';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Avatar from '@mui/material/Avatar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import EmailIcon from '@mui/icons-material/Email';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import PhoneSvg from '../assets/svg/PhoneSvg';
import EmailSvg from '../assets/svg/EmailSvg';

import FacebookSvg from '../assets/svg/FacebookSvg';

// import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
// import Grid from '@mui/material/Grid';




import Container from '../components/Container';

import { clinic } from '../data/clinic';

const validationSchema = yup.object({
    firstName: yup
        .string()
        .trim()
        .min(2, 'Please enter a valid name')
        .max(50, 'Please enter a valid name')
        .required('Please specify your first name'),
    lastName: yup
        .string()
        .trim()
        .min(2, 'Please enter a valid name')
        .max(50, 'Please enter a valid name')
        .required('Please specify your last name'),
    email: yup
        .string()
        .trim()
        .email('Please enter a valid email address')
        .required('Email is required.'),
    message: yup
        .string()
        .trim()
        .required('Please specify your message'),
});

const mock = [
    {
        label: 'Telefon',
        value: '450 001 550',
        href: 'tel:+48450001550',
        icon: (
            <PhoneSvg width='20px' height='20px' color='#fff'/>
        ),
    },
    {
        label: 'Telefon',
        value: '539 968 541',
        href: 'tel:+48539968541',
        icon: (
            <PhoneSvg width='20px' height='20px' color='#fff'/>
        ),
    },
    {
        label: 'E-mail',
        value: 'info@drninawisniewska.pl',
        href: 'mailto:info@drninawisniewska.pl',
        icon: (
            <EmailSvg width='20px' height='20px' color='#fff' />
        ),
    },
    {
        label: 'Adres',
        value: 'ul. Fryderyka Chopina 13/U2, 07-200 Wyszków',
        href: 'https://goo.gl/maps/1a3qFdxNqTNJdahY9',
        icon: (
            <FmdGoodIcon />
        ),
    },
    // {
    //     label: 'Facebook',
    //     value: 'Facebook',
    //     href: 'https://www.facebook.com/profile.php?id=100063736802328',
    //     icon: (
    //         <FacebookSvg width='20px' height='20px' color='#fff' />
    //     ),
    // },
    // {
    //     label: 'Godziny',
    //     value: 'poniedziałek - piątek: 10:00 - 18:00',
    //     icon: (
    //       <AccessTimeIcon />
    //     ),
    //   },
  ];

const ContactView = () => {
    const theme = useTheme();

    // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    //     defaultMatches: true,
    // });

    // const [currentImage, setCurrentImage] = useState(0);
    // const [viewerIsOpen, setViewerIsOpen] = useState(false);

    // const openLightbox = (index) => {
    //     setCurrentImage(index);
    //     setViewerIsOpen(true);
    // };

    // const closeLightbox = () => {
    //     setCurrentImage(0);
    //     setViewerIsOpen(false);
    // };


    const ContactDetails = () => {
        return (
            <Box>
                <Box marginBottom={2}>
                    {/* <Typography variant={'h5'} className='header'>
                        Skontaktuj się z nami
                    </Typography> */}
                    <Typography className='paragraph'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare dictum ultricies. In hac habitasse platea dictumst. Integer eget ultricies erat. Duis vestibulum convallis orci, sed sodales diam placerat vel. Nunc blandit massa sapien, sit amet porttitor nisi condimentum.
                    </Typography>
                    <Typography className='paragraph'>
                    Duis aliquet nec quam quis mollis. Fusce elit velit, ullamcorper nec fringilla eget, egestas fringilla sem. Proin accumsan consectetur ex vel scelerisque. Aenean vulputate massa et est semper, varius laoreet nibh porttitor.
                    </Typography>
                </Box>
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    justifyContent={'space-between'}
                    marginBottom={2}
                >
                    {mock.map((item, i) => (
                        <Box component='a' href={item.href} className='link'>
                            <Box
                                key={i}
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
                                    {item.icon}
                                </Box>
                            </Box>
                                <ListItemText primary={item.label} secondary={item.value} />
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        );
    };

    const ContactMap = () => {
        return (
            <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9694.856415856955!2d21.453784!3d52.592862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ee5a5adb9d581%3A0x2835d4bb585fbf47!2sFryderyka%20Chopina%2013%2C%2007-200%20Wyszk%C3%B3w!5e0!3m2!1spl!2spl!4v1660443766192!5m2!1spl!2spl"
                style={{
                    minHeight: 600,
                    borderRadius: 8,
                    boxShadow: '1px 2px 6px rgb(0 0 0 / 4%)'
                }}
            />
        );
    };

 


    const initialValues = {
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    };

    const onSubmit = (values) => {
        return values;
    };

    const formik = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit,
    });

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    <KeyboardDoubleArrowLeftIcon sx={{ mr: 0.5 }} fontSize='smform' />
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
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
                        <Box className='contact-details-wrapper'>
                            <ContactDetails />
                        </Box>
                        <Box
                            className='contact-wrapper-map'
                            data-aos={'fade-in'}
                            data-aos-delay={'300'}
                            // sx={{ backgroundColor: '#dedede', borderRadius: '8px' }}
                        >
                            <ContactMap />
                        </Box>
                        {/* <Box className='contact-form-wrapper'>
                            <Card className='card-form'>
                                <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                sx={{ height: 54 }}
                                                label="Imię"
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                name="firstName"
                                                fullWidth
                                                value={formik.values.firstName}
                                                onChange={formik.handleChange}
                                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                                helperText={formik.touched.firstName && formik.errors.firstName}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                sx={{ height: 54 }}
                                                label="Nazwisko"
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                name="lastName"
                                                fullWidth
                                                value={formik.values.lastName}
                                                onChange={formik.handleChange}
                                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                                helperText={formik.touched.lastName && formik.errors.lastName}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                sx={{ height: 54 }}
                                                label="Email"
                                                type="email"
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                name="email"
                                                fullWidth
                                                value={formik.values.email}
                                                onChange={formik.handleChange}
                                                error={formik.touched.email && Boolean(formik.errors.email)}
                                                helperText={formik.touched.email && formik.errors.email}
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                label="Wiadomość"
                                                multiline
                                                rows={6}
                                                variant="outlined"
                                                color="primary"
                                                size="small"
                                                name="message"
                                                fullWidth
                                                value={formik.values.message}
                                                onChange={formik.handleChange}
                                                error={formik.touched.message && Boolean(formik.errors.message)}
                                                helperText={formik.touched.message && formik.errors.message}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            justifyContent={'center'}
                                            xs={12}
                                            className="button-contained-submit"
                                        >
                                            <Button
                                                sx={{ height: 54, minWidth: 150 }}
                                                variant="contained"
                                                color="primary"
                                                size="medium"
                                                type="submit"
                                                fullWidth
                                            >
                                                Wyślij wiadomość
                                            </Button>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider />
                                        </Grid>
                                        <Grid item container justifyContent={'start'} xs={12}>
                                            <Box>
                                                <Typography className='paragraph' align="left">
                                                    Wysyłając wiadomość zgadzasz się z naszym{' '}
                                                    <Box
                                                        component="a"
                                                        href=""
                                                        color={theme.palette.text.primary}
                                                        fontWeight={'700'}
                                                    >
                                                        Regulaminem organizacyjnym
                                                    </Box>
                                                    .
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </form>
                            </Card>
                        </Box> */}
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactView;
