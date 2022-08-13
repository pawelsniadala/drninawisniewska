import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const ContactHeadlinePartial = () => {
    // const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: '#f7faff',
                backgroundImage: `linear-gradient(120deg, #fff 0%, #f7faff 100%)`,
                paddingTop: 14,
                paddingBottom: 14
            }}
        >
            <Container>
                <Box>
                    <Typography
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 'medium',
                        }}
                        gutterBottom
                        color={'textSecondary'}
                        align={'center'}
                    >
                        Kontakt
                    </Typography>
                    <Typography variant="h2" align={'center'} fontWeight={700} gutterBottom>
                        Kontakt
                    </Typography>
                    <Typography variant="h6" align={'center'} color={'textSecondary'}>
                        Jesteśmy do Twojej dyspozycji.
                    </Typography>
                </Box>
            </Container>
        </Box>


    );
};

export default ContactHeadlinePartial;
