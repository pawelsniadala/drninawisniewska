import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Headline = () => {
    return (
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
                    <Typography
                        variant="h2"
                        align={'center'}
                        fontWeight={700}
                        gutterBottom
                    >
                        Usługi
                    </Typography>
                    <Typography
                        variant="h6"
                        align={'center'}
                        color={'textSecondary'}
                    >
                        Usługi dostępne w naszej klinice.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}

export default Headline;
