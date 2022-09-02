import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import { services } from '../../../data/services';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

// import Container from '../components/Container';

const ServicesGridPartial = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
    return (
        <Box>
            <Grid container spacing={3}>
                {services.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} xl={3} key={i}>
                        <Box
                            component={'a'}
                            href={''}
                            display={'block'}
                            width={1}
                            height={1}
                            sx={{
                                textDecoration: 'none',
                                transition: 'all .2s ease-in-out',
                                // '&:hover': {
                                //     transform: `translateY(-${theme.spacing(1 / 2)})`,
                                // },
                            }}
                        >
                            <Box
                                component={Card}
                                width={1}
                                height={1}
                                display={'flex'}
                                flexDirection={'column'}
                                sx={{
                                    backgroundImage: 'none',
                                    // boxShadow: '0 3px 6px 0 rgb(140 152 164 / 25%)',
                                    // boxShadow: 'rgb(0 0 0 / 5%) 0px 0px 0px 1px;',
                                    // boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
                                    // boxShadow: '0 1px 2px rgb(0 0 0 / 20%)',
                                    // boxShadow: '0px 0px 12px 4px rgba(240, 246, 255, 1)',
                                    // boxShadow: '2px 4px 12px rgba(0,0,0,.08)',
                                    boxShadow: '1px 2px 6px rgb(0 0 0 / 4%)',
                                    // boxShadow: 'none',
                                    borderRadius: '12px',
                                }}
                                marginBottom={1}
                            >
                                <CardMedia
                                    title={item.title}
                                    image={item.media}
                                    sx={{
                                        position: 'relative',
                                        height: { xs: 240, sm: 340, md: 280, lg: 220 },
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Box
                                        component={'svg'}
                                        preserveAspectRatio="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 1921 273"
                                        sx={{
                                            position: 'absolute',
                                            width: '100%',
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            zIndex: 1,
                                        }}
                                    >
                                        <polygon
                                            fill={theme.palette.background.paper}
                                            points="0,273 1921,273 1921,0 "
                                        />
                                    </Box>
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        variant={'h6'}
                                        gutterBottom
                                        align={'center'}
                                        sx={{
                                            fontFamily: '"Roboto", sans-serif',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.045em;',
                                            color: '#444',
                                            fontWeight: 400,
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        align={'center'}
                                        color={'text.secondary'}
                                        sx={{ fontSize: "14px" }}
                                    >
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                {/* <Box flexGrow={1} /> */}
                                <CardActions
                                    sx={{
                                        justifyContent: 'center',
                                        paddingTop: 0
                                    }}
                                >
                                    <Box
                                        className="link-outlined-card"
                                        marginTop={{ xs: 2, sm: 0 }}
                                        width={{ xs: '100%', md: 'auto' }}
                                    >
                                        <Button
                                            component={Link}
                                            to={`/services`}
                                            variant="outline"
                                            size="small"
                                            fullWidth={isMd ? false : true}
                                            endIcon={<ChevronRightIcon />}
                                        >
                                            Dowiedz się więcej
                                        </Button>
                                    </Box>
                                </CardActions>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServicesGridPartial;
