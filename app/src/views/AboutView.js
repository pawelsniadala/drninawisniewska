import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ContactHeadlinePartial from './partials/contact/ContactHeadlinePartial';
import ContactMapPartials from './partials/contact/ContactMapPartials';
import ContactFormPartials from './partials/contact/ContactFormPartials';

const AboutView = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box>
                    <Box
            sx={{
                // backgroundColor: '#f7faff',
                backgroundColor: '#f2f7ff',
                // backgroundImage: `linear-gradient(120deg, #fff 0%, #f7faff 100%)`,
                paddingTop: 14,
                paddingBottom: 14
            }}
        >
            <Container>
                <Box>
                    {/* <Typography
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 'medium',
                        }}
                        gutterBottom
                        color={'textSecondary'}
                        align={'center'}
                    >
                        Kontakt
                    </Typography> */}
                    <Typography
                        variant="h2"
                        align={'center'}
                        fontWeight={700}
                        gutterBottom
                    >
                        Dr n. med. Nina Wiśniewska
                    </Typography>
                    <Typography
                        variant="h6"
                        align={'center'}
                        color={'textSecondary'}
                    >
                        Specjalista w zakresie Dermatologii i Wenerologii, lekarz medycyny estetycznej
                    </Typography>
                </Box>
            </Container>
        </Box>
            <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
                {/* <Container maxWidth="xl">
                    <Grid
                        container
                        spacing={isMd ? 8 : 4}
                        spacing={4}
                    >
                        <Grid item xs={12} md={6}>
                            <ContactMapPartials />
                        </Grid>
                        <Grid item container xs={12} md={6} alignItems={'center'}>
                            <ContactFormPartials />
                        </Grid>
                    </Grid>
                </Container> */}
            </Box>
        </Box>
    );
};

export default AboutView;
