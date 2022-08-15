import React, { useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import ServicesHeadlinePartial from './partials/services/ServicesHeadlinePartial';
import ServicesGridPartial from './partials/services/ServicesGridPartial';

const ServicesView = () => {
    // const theme = useTheme();
    // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    //     defaultMatches: true,
    // });

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box>
            <ServicesHeadlinePartial />
            <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
                <Container maxWidth="xl">
                    <ServicesGridPartial />
                </Container>
            </Box>
        </Box>
    );
};

export default ServicesView;
