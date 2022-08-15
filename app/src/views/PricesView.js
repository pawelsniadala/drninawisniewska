import React, { useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import PricesHeadlinePartial from './partials/prices/PricesHeadlinePartial';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import PricesDermatologyPartials from './partials/prices/PricesDermatologyPartials';
import PricesHematologyPartials from './partials/prices/PricesHematologyPartials';
import PricesCosmetologyPartials from './partials/prices/PricesCosmetologyPartials';

import { prices } from '../data/prices';

const PricesView = () => {
    const theme = useTheme();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const renderAccordionDetails = (expanded) => {
        switch(expanded) {
            case "dermatology":
                return (
                    <PricesDermatologyPartials />
                );
            case "aesthetic-medicine":
                return (
                    <PricesDermatologyPartials />
                );
            case "hematology":
                return (
                    <PricesHematologyPartials />
                );
            case "cosmetology":
                return (
                    <PricesCosmetologyPartials />
                );
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, []);

    return (
        <Box>
            <PricesHeadlinePartial />
            <Box sx={{ paddingTop: "64px", paddingBottom: "64px" }}>
                <Container maxWidth="md">
                    {prices.map((item, i) => (
                        <Box
                            component={Accordion}
                            expanded={expanded === item.expanded}
                            onChange={handleChange(item.expanded)}
                            key={i}
                            padding={1}
                            marginBottom={i === item.length - 1 ? 0 : 2}
                            borderRadius={`${theme.spacing(1)} !important`}
                            sx={{
                                '&::before': {
                                    display: 'none',
                                }
                            }}
                        >
                            <Box
                                component={AccordionSummary}
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id={`panel1a-header--${i}`}
                            >
                            <Typography fontWeight={600}>
                                {item.title}
                            </Typography>
                            </Box>
                            <AccordionDetails>
                                {renderAccordionDetails(item.expanded)}
                            </AccordionDetails>
                        </Box>
                    ))}

                </Container>
            </Box>
        </Box>
    );
};

export default PricesView;
