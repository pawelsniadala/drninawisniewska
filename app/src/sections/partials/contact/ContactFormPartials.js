/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

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

const ContactFormPartials = () => {
    const theme = useTheme();

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

    return (
        <Box>
            <Box
                // padding={{ xs: 3, sm: 6 }}
                padding={4}
                width={1}
                component={Card}
                boxShadow={1}
                marginBottom={4}
                sx={{
                    boxShadow: '0 3px 6px 0 rgb(140 152 164 / 25%)',
                    borderRadius: '8px'
                }}
            >
                <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                sx={{ height: 54 }}
                                label="Imię"
                                variant="outlined"
                                color="primary"
                                size="medium"
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
                                size="medium"
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
                                size="medium"
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
                                size="medium"
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
                        <Grid item container justifyContent={'center'} xs={12}>
                            <Box>
                                <Typography component="p" variant="body2" align="left">
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
                                    {/* ,{' '}
                                    <Box
                                        component="a"
                                        href=""
                                        color={theme.palette.text.primary}
                                        fontWeight={'700'}
                                    >
                                        Polityką danych
                                    </Box>{' '}
                                    i{' '}
                                    <Box
                                        component="a"
                                        href=""
                                        color={theme.palette.text.primary}
                                        fontWeight={'700'}
                                    >
                                        Polityką plików cookie
                                    </Box>
                                    . */}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
            <Box>
                <Typography color="text.secondary" align={'center'}>
                    Odezwiemy się w ciągu 1-2 dni roboczych.
                </Typography>
            </Box>
        </Box>
    );
}

export default ContactFormPartials;
