import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ContactHeadlinePartial from './partials/contact/ContactHeadlinePartial';
import ContactMapPartials from './partials/contact/ContactMapPartials';
import ContactFormPartials from './partials/contact/ContactFormPartials';

const ContactView = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box>
            <ContactHeadlinePartial />
            <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
                <Container maxWidth="xl">
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
        </Box>
    );
};

export default ContactView;
