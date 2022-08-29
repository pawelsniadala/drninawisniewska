import React, { useEffect } from 'react';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Container from '../components/Container';
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
            <Box
                sx={{
                    // backgroundColor: '#FAFCFF',
                    // backgroundColor: '#F5F9FF',
                    backgroundColor: '#fbfbfd',
                    // backgroundColor: '#f5f5f7',
                    // boxShadow: 'rgb(0 0 0 / 5%) 0px 0px 0px 1px;',
                }}
            >
                <Container>
                    <ServicesGridPartial />
                </Container>
            </Box>
        </Box>
    );
};

export default ServicesView;
