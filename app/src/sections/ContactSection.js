// import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Container from '@mui/material/Container';
// import Container from '../components/Container'
import Container from '../components/Container'
import { reviews } from '../data/reviews';

import ContactMapPartials from './partials/contact/ContactMapPartials';
import ContactFormPartials from './partials/contact/ContactFormPartials';

const ContactSection = () => {
    // const theme = useTheme();

    return (
        <Box sx={{
            // paddingTop: "64px",
            // paddingBottom: "64px",
            backgroundColor: '#f2f7ff',
      backgroundImage: `linear-gradient(#fff, #f7faff)`,
        }}>
            <Container>
                <Grid
                    container
                    // spacing={isMd ? 8 : 4}
                    spacing={4}
                >
                    <Grid item xs={12} md={6}>
                        <ContactMapPartials />
                    </Grid>
                    <Grid item container xs={12} md={6} alignItems={'center'}>
                        <ContactFormPartials />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ContactSection;
