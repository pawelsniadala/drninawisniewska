/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

const ContactMapPartials = () => {
  const theme = useTheme();
  return (
    <Box>
      {/* <Box>
        <Box marginBottom={1}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
            }}
          >
            Skontaktuj się z nami
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" color={'text.secondary'}>
            Chętnie odpowiemy na Twoje pytania.
          </Typography>
        </Box>
      </Box> */}
      <Box
        // marginY={3}
        sx={{ marginBottom: 3 }}
      >
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
            minHeight: 370,
            borderRadius: 8,
            filter:
              theme.palette.mode === 'dark'
                ? 'grayscale(0.5) opacity(0.7)'
                : 'none',
          }}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Zadzwoń do nas:
          </Typography>
          <Typography variant={'subtitle1'}>
            +48 450 001 550
          </Typography>
          <Typography variant={'subtitle1'}>
            +48 539 968 541
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Wyślij wiadomość:
          </Typography>
          <Typography variant={'subtitle1'}>
            info@drninawisniewska.pl
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={'body1'}
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
            Adres:
          </Typography>
          <Typography variant={'subtitle1'}>
            ul. Fryderyka Chopina 13/U2, Wyszków
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMapPartials;
