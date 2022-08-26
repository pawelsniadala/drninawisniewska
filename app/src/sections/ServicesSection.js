import React from 'react';
import { Link } from "react-router-dom";
import Slider from 'react-slick';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
// import AvatarGroup from '@mui/material/AvatarGroup';
// import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Container from '@mui/material/Container';
import Container from '../components/Container'

import { useTheme } from '@mui/material/styles';
// import { colors } from '@mui/material';
import { services } from '../data/services';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "red" }}
    //   onClick={onClick}
    // />
   <div className="sample-next-arrow" onClick={onClick} style={{  }}>
      <KeyboardArrowRightIcon />
    </div>
  );
}

 

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
    <div className="sample-prev-arrow" onClick={onClick} style={{  }}>
       <KeyboardArrowLeftIcon />
     </div>
  );
}

    {/* <div className="sample-prev-arrow" onClick={onClick} style={{  }}>
      <KeyboardArrowRightIcon />
    </div> */}

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
        // arrows: isXl ? true : isLg ? false : isMd ? false : isSm ? false : false,
        arrows: false,
        infinite: false,
        slidesToShow: isXl ? 3 : isLg ? 3 : isMd ? 2 : isSm ? 2 : 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

  return (
    <Box sx={{
      // paddingTop: "64px",
      // paddingBottom: "64px",
      backgroundColor: '#f2f7ff',
      backgroundImage: `linear-gradient(#fff, #f7faff)`,
      // boxShadow: 'rgb(0 0 0 / 5%) 0px 0px 0px 1px;',
    }}>
    <Container>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            // color: '#f8b01b',
            color: '#DBAF62',
            // fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '0.045em;',
            // fontFamily: '"Lato", sans-serif',

            fontFamily: '"Roboto", sans-serif',
            fontSize: '18px',
            fontWeight: '400',

          }}
          // className={"tests"}
          gutterBottom
          // color={'secondary'}
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
            // fontWeight: 400,
            // textTransform: 'uppercase',
            // letterSpacing: '0.045em;',
            // fontFamily: '"Lato", sans-serif',
            fontFamily: 'Lato,sans-serif',
            fontSize: '30px',
            lineHeight: '1.208em',
            letterSpacing: '.045em',
            textTransform: 'uppercase',
            // color: '#212529',
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
            // fontFamily: '"Roboto", sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            // color: '#838383'
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
                  to={`/services`}
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                  endIcon={
              // <Box
              //   component={'svg'}
              //   xmlns="http://www.w3.org/2000/svg"
              //   fill="#fff"
              //   viewBox="0 0 24 24"
              //   stroke="currentColor"
              //   width={24}
              //   height={24}
              // >

              //   <path
              //     strokeLinecap="round"
              //     strokeLinejoin="round"
              //     strokeWidth={2}
              //     d="M17 8l4 4m0 0l-4 4m4-4H3"
              //   />
              // </Box>
              // <ChevronRightIcon />
              <ArrowForwardIcon />
            }
              >
                  Zobacz wszystkie usługi
              </Button>
          </Box>





        </Box>
      </Box>
      <Box
        // maxWidth={{ xs: 420, sm: 620, md: 1 }}
        // maxWidth={{ xs: 420, sm: 620, md: 1 }}
        margin={'0 auto'}
        >
        <Slider {...sliderOpts}>
          {services.slice(1, 7).map((item, i) => (
            <Box key={i}
              padding={{ xs: 1, md: 1, lg: 1 }}
              >
              <Box
                // display={'block'}
                width={1}
                height={1}
                sx={{
                  textDecoration: 'none',
                  transition: 'all .2s ease-in-out',
                  // '&:hover': {
                  //   transform: `translateY(-${theme.spacing(1 / 2)})`,
                  // },

                  // display: 'grid !important',
                  // gap: '18px'
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

                    boxShadow: 'none',
                    borderRadius: '8px',
                    // border: '1px solid rgba(0,0,0,.125)',
                    // boxShadow: '0 1px 2px rgb(0 0 0 / 20%)'
                  }}
                  marginBottom={3}

                >
                  <CardMedia
                    title={item.title}
                    image={item.media}
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
                    {/* <Box
                      display={'flex'}
                      justifyContent={'space-between'}
                      position={'absolute'}
                      bottom={0}
                      padding={2}
                      width={1}
                      zIndex={2}
                    >
                      <Box
                        padding={1}
                        bgcolor={'background.paper'}
                        boxShadow={1}
                        borderRadius={2}
                      >
                        <Typography sx={{ fontWeight: 600 }}>
                          od 100zł
                        </Typography>
                      </Box>
                      <Button
                        variant={'contained'}
                        color="primary"
                        size="large"
                        startIcon={
                          <Box
                            component={'svg'}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            width={16}
                            height={16}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                          </Box>
                        }
                      >
                        Save
                      </Button>
                    </Box> */}
                  </CardMedia>
                  <CardContent>
                    <Typography
                      variant={'h6'}
                      gutterBottom
                      align={'center'}
                      sx={{
                        // fontWeight: 500,
                        fontFamily: '"Roboto", sans-serif',
                        textTransform: 'uppercase',
                        letterSpacing: '0.045em;',
                        color: '#444'
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography align={'center'} color={'text.secondary'} sx={{ fontSize: "14px" }}>
                      {/* {item.description} */}
                      Integer eleifend eget purus ut tincidunt. Vivamus venenatis risus orci, non ullamcorper nisi faucibus nec. Donec non elit in enim volutpat finibus.
                    </Typography>
                    {/* <Box display={'flex'} alignItems={'center'} marginY={2}>
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                        marginRight={1}
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </Box>
                      <Typography variant={'subtitle1'} color="text.secondary">
                        {item.tutor}
                      </Typography>
                    </Box> */}
                    {/* <Box
                      marginTop={2}
                      display={'flex'}
                      justifyContent={'space-between'}
                    >
                      <AvatarGroup max={4}>
                        {item.users.map((u) => (
                          <Avatar key={u} src={u} />
                        ))}
                      </AvatarGroup>
                      <Box display={'flex'} alignItems={'center'}>
                        <Box
                          component={'svg'}
                          width={20}
                          height={20}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          color={colors.yellow[700]}
                          marginRight={1}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </Box>
                        <Typography sx={{ fontWeight: 700 }}>5.0</Typography>
                      </Box>
                    </Box> */}
                  </CardContent>
                  <Box flexGrow={1} />
                  <CardActions sx={{ justifyContent: 'center', paddingTop: 0 }}>
                    {/* <Button>Dowiedz się więcej</Button> */}

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
                  endIcon={
<ChevronRightIcon />
                    
                  }
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
};

export default ServicesSection;
