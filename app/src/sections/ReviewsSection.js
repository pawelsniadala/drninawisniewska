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
import { reviews } from '../data/reviews';
import Container from '../components/Container';

const ReviewsSection = () => {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                // paddingTop: "64px",
                // paddingBottom: "64px"
            }}>
            <Container>
                <Box marginBottom={4}>
                    <Box
                        display={'flex'}
                        justifyContent={'center'}
                    >
                        {[1, 2, 3, 4, 5].map((item) => (
                            <Box
                                key={item}
                                color={theme.palette.secondary.main}
                            >
                                <svg
                                    width={18}
                                    height={18}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="#f9b934"
                                >
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            </Box>
                        ))}
                    </Box>
                    <Typography
                        variant="h4"
                        align={'center'}
                        data-aos={'fade-up'}
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            marginTop: theme.spacing(1)
                        }}
                    >
                        Nasi klienci to nasi najwięksi fani.
                    </Typography>
                    <Typography
                        variant="h6"
                        align={'center'}
                        color={'text.secondary'}
                        data-aos={'fade-up'}
                    >
                        Nie lubimy się chwalić, ale nie mamy nic przeciwko temu, aby nasi klienci zrobili to za nas.
                    </Typography>
                </Box>
                <Grid
                    container
                    spacing={2}
                >
                    {reviews.map((item, i) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={i}
                            sx={{
                                border: 0,
                                [theme.breakpoints.up('md')]: {
                                    borderRight: `1px solid #edf1f7`,
                                    '&:nth-of-type(2n)': {
                                        borderRight: `1px solid #edf1f7`,
                                    },
                                    '&:nth-of-type(-n+4)': {
                                        borderBottom: 0,
                                    },
                                    '&:nth-of-type(3n)': {
                                        borderRight: 0,
                                    },
                                    '&:nth-of-type(-n+3)': {
                                        borderBottom: `1px solid #edf1f7`,
                                    },
                                },
                            }}
                        >
                            <Box p={2}>
                                <Box marginBottom={2}>
                                    <ListItem
                                        component="div"
                                        disableGutters
                                        sx={{ padding: 0 }}
                                    >
                                        <ListItemAvatar>
                                            <Avatar src={item.avatar} />
                                        </ListItemAvatar>
                                        <ListItemText
                                            sx={{ margin: 0 }}
                                            primary={item.name}
                                            secondary={item.title}
                                        />
                                    </ListItem>
                                </Box>
                                <Typography color="text.secondary">
                                    {item.feedback}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default ReviewsSection;
