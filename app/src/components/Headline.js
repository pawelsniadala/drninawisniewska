import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Headline = () => {
    return (
        // <Box className="contact-view">
        //     <Box className="view-wrapper">
                <Box className="view-header">
                    <Container className="header-wrapper">
                        <Breadcrumbs
                            separator={<NavigateNextIcon fontSize="smform" />}
                            aria-label="breadcrumb"
                        >
                            <Link
                                to="/"
                                aria-current="page"
                            >
                                Home
                            </Link>
                            <Typography color="text.primary">
                                Kontakt
                            </Typography>
                        </Breadcrumbs>
                        {/* <HeaderPage header="Kontakt" /> */}

                    </Container>
                </Box>
        //     </Box>
        // </Box>
    );
}

export default Headline;

     // <Box
        //     sx={{
        //         // backgroundColor: '#f7faff',
        //         backgroundColor: '#f2f7ff',
        //         // backgroundImage: `linear-gradient(120deg, #fff 0%, #f7faff 100%)`,
        //         paddingTop: 14,
        //         paddingBottom: 14
        //     }}
        // >
        //     <Container>
        //         <Box>
        //             <Typography
        //                 variant="h2"
        //                 align={'center'}
        //                 fontWeight={700}
        //                 gutterBottom
        //             >
        //                 Usługi
        //             </Typography>
        //             <Typography
        //                 variant="h6"
        //                 align={'center'}
        //                 color={'textSecondary'}
        //             >
        //                 Usługi dostępne w naszej klinice.
        //             </Typography>
        //         </Box>
        //     </Container>
        // </Box>