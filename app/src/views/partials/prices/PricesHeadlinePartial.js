import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const PricesHeadlinePartial = () => {
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
                        Cennik
                    </Typography>
                    <Typography
                        variant="h6"
                        align={'center'}
                        color={'textSecondary'}
                    >
                        Zapoznaj się z cennikiem naszych usług.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default PricesHeadlinePartial;
