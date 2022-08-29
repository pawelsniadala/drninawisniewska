

import React from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import { alpha, useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Container from '../components/Container';

const mock = [
    {
      feedback:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Clara Bertoletti',
      title: 'MUI lover',
      avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    },
    {
      feedback:
        'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      name: 'Jhon Anderson',
      title: 'Senior Frontend Developer',
      avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    },
    {
      feedback:
        'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      name: 'Chary Smith',
      title: 'SEO at Comoti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
  ];

const ReviewsSection2 = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      defaultMatches: true,
    });
  
    const sliderOpts = {
      dots: !isMd,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: isMd,
    };

    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                // paddingTop: "64px",
                // paddingBottom: "64px"
            }}>
            <Container>
            <Box position={'relative'} zIndex={2}>
            <Box marginBottom={4}>
                    {/* <Typography
                        sx={{
                            textTransform: 'uppercase',
                            color: '#DBAF62',
                            lineHeight: 1.5,
                            letterSpacing: '0.045em;',
                            fontFamily: '"Roboto", sans-serif',
                            fontSize: '18px',
                            fontWeight: '400',
                        }}
                        gutterBottom
                        align={'center'}
                    >
                        Usługi
                    </Typography> */}
                    <Typography
                        variant="h4"
                        align={'center'}
                        data-aos={'fade-right'}
                        gutterBottom
                        sx={{
                            fontFamily: 'Lato,sans-serif',
                            fontSize: '30px',
                            lineHeight: '1.208em',
                            letterSpacing: '.045em',
                            textTransform: 'uppercase',
                            color: '#444'
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
                            fontSize: '18px',
                            fontWeight: '400',
                        }}
                    >
                        Zapoznaj się z treścią naszych usług
                    </Typography>
                    {/* <Box
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
                                to={`/services`}
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
                    </Box> */}
                </Box>
        <Box
          sx={{
            height: { xs: 'auto', md: 1 },
            '& .slick-slide img': {
              objectFit: 'cover',
            },
            '& .slick-list, & .slick-slider, & .slick-track, & .slick-slide > div': {
              height: { xs: 'auto', md: 1 },
            },
            '& .slick-prev, & .slick-next': {
              zIndex: 2,
              bottom: 0,
              top: '100%',
              left: '100%',
              right: 0,
              transform: `translate(-100%, calc(-100% - ${theme.spacing(2)}))`,
              marginLeft: theme.spacing(-2),
              width: 32,
              height: 32,
              '&:before': {
                fontSize: 32,
                color: 'primary.main',
              },
            },
            '& .slick-prev': {
              marginLeft: theme.spacing(-7),
            },
          }}
        >
          <Slider {...sliderOpts}>
            {mock.map((item, i) => (
              <Box key={i}>
                <Card
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    boxShadow: 0,
                    background: 'transparent',
                  }}
                >
                  <CardMedia
                    image={item.avatar}
                    sx={{
                      height: 200,
                      width: '100%',
                      maxWidth: 200,
                    //   borderRadius: 2,
                      margin: { xs: '0 auto', md: 'none' },
                      borderRadius: '50%'
                    }}
                  />
                  <CardContent
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      marginLeft: { sx: 0, md: 2 },
                    }}
                  >
                    <Box>
                      {/* <Typography
                        color="text.primary"
                        variant={'h6'}
                        sx={{
                          textAlign: { xs: 'center', md: 'left' },
                        }}
                      >
                        {item.feedback}
                      </Typography> */}
                      <Typography
                        align={'center'}
                        color={'text.secondary'}
                        sx={{
                            fontSize: "18px",
                            textAlign: { xs: 'center', md: 'left' },
                        }}
                    >
                            {item.feedback}
                    </Typography>
                      <ListItem
                        component="div"
                        disableGutters
                        sx={{ padding: 0, marginTop: 2 }}
                      >
                        <ListItemText
                          sx={{ margin: 0 }}
                          primary={item.name}
                          secondary={item.title}
                          primaryTypographyProps={{
                            variant: 'h6',
                            fontWeight: 'bold',
                            sx: { textAlign: { xs: 'center', md: 'left' } },
                          }}
                          secondaryTypographyProps={{
                            variant: 'subtitle1',
                            sx: { textAlign: { xs: 'center', md: 'left' } },
                          }}
                        />
                      </ListItem>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
        </Box>
      </Box>
            </Container>
        </Box>
    );
};

export default ReviewsSection2;
