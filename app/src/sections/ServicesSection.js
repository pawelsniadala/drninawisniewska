// import React from 'react';
import { Link } from "react-router-dom";

import Slider from 'react-slick';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

import Container from '../components/Container';

import { services } from '../data/services';

const SampleNextArrow = ({ onClick }) => {
    return (
        <div
            className="sample-next-arrow"
            onClick={onClick}
        >
            <KeyboardArrowRightIcon />
        </div>
    );
}

function SamplePrevArrow({ onClick }) {
    return (
        <div
            className="sample-prev-arrow"
            onClick={onClick}
        >
            <KeyboardArrowLeftIcon />
        </div>
    );
}

const ServicesSection = () => {
    const theme = useTheme();

    const isXl = useMediaQuery(theme.breakpoints.up('xl'), {
        defaultMatches: true,
    });

    const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
        defaultMatches: true,
    });

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
        defaultMatches: true,
    });

    const sliderOpts = {
        dots: true,
        arrows: isXl ? true : isLg ? false : isMd ? false : isSm ? false : false,
        // arrows: false,
        infinite: true,
        slidesToShow: isXl ? 3 : isLg ? 3 : isMd ? 2 : isSm ? 2 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <Box
            sx={{
                backgroundColor: '#fbfbfd',
                // backgroundColor: '#f5f5f7',
                // backgroundImage: `linear-gradient(#fff, #f7faff)`,
            }}
        >
            <Container>
                <Box marginBottom={4}>
                    <Typography
                        sx={{
                            textTransform: 'uppercase',
                            color: '#DBAF62',
                            lineHeight: 1.5,
                            letterSpacing: '0.045em;',
                            // fontFamily: '"Roboto", sans-serif',
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: '17px',
                            fontWeight: '400',
                        }}
                        gutterBottom
                        align={'center'}
                    >
                        Usługi
                    </Typography>
                    <Typography
                        variant="h4"
                        align={'center'}
                        data-aos={'fade-right'}
                        gutterBottom
                        sx={{
                            // fontFamily: 'Raleway, sans-serif',
                            fontFamily: 'Lato,sans-serif',
                            fontSize: '30px',
                            lineHeight: '1.208em',
                            letterSpacing: '.045em',
                            textTransform: 'uppercase',
                            fontWeight: '400',
                            color: 'rgba(0, 0, 0, 0.6)'
                        }}
                    >
                        Usługi dostępne w naszej klinice
                    </Typography>
                    <Typography
                        variant="h6"
                        align={'center'}
                        color={'text.secondary'}
                        data-aos={'fade-right'}
                        sx={{
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: '18px',
                            fontWeight: '400',
                        }}
                    >
                        Zapoznaj się z treścią naszych usług
                    </Typography>
                    <Box
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                        justifyContent={'center'}
                        marginTop={2}
                    >
                        <Box
                            className="link-contained-more"
                            marginTop={{ xs: 2, sm: 0 }}
                            width={{ xs: '100%', md: 'auto' }}
                        >
                            <Button
                                component={Link}
                                // to={`/services`} // TODO
                                to={`/drninawisniewska/`}
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth={isMd ? false : true}
                                endIcon={
                                    <ArrowForwardIcon />
                                }
                            >
                                Zobacz wszystkie usługi
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box margin={'0 auto'}>
                    <Slider {...sliderOpts}>
                        {services.slice(1, 7).map((item, i) => (
                            <Box
                                key={i}
                                padding={{ xs: 1, md: 1, lg: 1 }}
                            >
                                <Box
                                    width={1}
                                    height={1}
                                    sx={{
                                        textDecoration: 'none',
                                        transition: 'all .2s ease-in-out',
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
                                            boxShadow: '1px 2px 6px rgb(0 0 0 / 4%)',
                                            borderRadius: '12px',
                                        }}
                                        marginBottom={3}
                                    >
                                        <CardMedia
                                            title={item.title}
                                            image={item.image}
                                            sx={{
                                                position: 'relative',
                                                height: { xs: 240, sm: 340, md: 280, lg: 340 },
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
                                                    // fontFamily: '"Roboto", sans-serif',
                                                    // fontFamily: 'Raleway, sans-serif',
                                                    // textTransform: 'uppercase',
                                                    // letterSpacing: '0.045em;',
                                                    // color: '#444',
                                                    // fontWeight: 500,
                                                    // color: 'rgba(0, 0, 0, 0.75)'

                                                                // fontFamily: 'Raleway, sans-serif',
                                                    fontFamily: 'Lato,sans-serif',
                                                    letterSpacing: '.045em',
                                                    textTransform: 'uppercase',
                                                    fontWeight: '400',
                                                    color: 'rgba(0, 0, 0, 0.7)'
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                align={'center'}
                                                // color={'text.secondary'}
                                                sx={{
                                                    fontSize: "14px",
                                                    // fontFamily: 'Raleway, sans-serif', 
                                                    // font: '400 14px/20px Google Sans Text,Arial,Helvetica,sans-serif',
                                                    color: 'rgba(0, 0, 0, 0.6)',
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                        <Box flexGrow={1} />
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
                                                    // to={`/services`} // TODO
                                                    to={`/drninawisniewska/`}
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
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
}

export default ServicesSection;
