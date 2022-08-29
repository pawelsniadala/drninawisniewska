import React, { useState } from 'react';
import { Link } from "react-router-dom";

import CountUp from 'react-countup';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Container from '@mui/material/Container';
import Container from '../components/Container'
import { reviews } from '../data/reviews';
import VisibilitySensor from 'react-visibility-sensor';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from '@mui/material/Button';

import useMediaQuery from '@mui/material/useMediaQuery';


// import { LazyLoadImage } from 'react-lazy-load-image-component';
import Lightbox from 'react-image-lightbox';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
// import Button from '@mui/material/Button';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


import { about } from '../data/about';

const AboutSection = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
      });
    
      const [viewPortEntered, setViewPortEntered] = useState(false);
      const setViewPortVisibility = (isVisible) => {
        if (viewPortEntered) {
          return;
        }
    
        setViewPortEntered(isVisible);
      };



      // const theme = useTheme();
      const [currentImage, setCurrentImage] = useState(0);
      const [viewerIsOpen, setViewerIsOpen] = useState(false);
    
      const openLightbox = (index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
      };
    
      const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
      };
    
      // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
      //   defaultMatches: true,
      // });


      const photos = [
        {
          src: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
          source: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
          rows: 1,
          cols: 2,
        },
        {
          src: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
          source: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
          rows: 1,
          cols: 1,
        },
        {
          src: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
          source: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
          rows: 1,
          cols: 1,
        },
        {
          src: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
          source: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
          rows: 1,
          cols: 2,
        },
      ];

    const mock = [
        {
          title: 10,
          subtitle:
            'Ponad 10 lat działalności',
          suffix: '+',
        },
        {
          title: 7120,
          subtitle:
            '7120 wykonanych zabiegów w 2021 roku',
          suffix: '',
        },
        {
          title: 99,
          subtitle: '99% zadowolonych klientów',
          suffix: '%',
        },
      ];

    return (
    <Box
      sx={{
        // position: 'relative',
        // backgroundColor: '#f7faff',
        // backgroundImage: `linear-gradient(120deg, #fff 0%, #f7faff 100%)`,
        // marginTop: -13,
        // paddingTop: 13,
        // paddingTop: "64px", paddingBottom: "64px",

        // backgroundColor: '#f2f7ff',
        // backgroundImage: `linear-gradient(#fff, #f7faff)`,
        backgroundColor: '#fff',
      }}
    >
      <Container>
        <Box>
          
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            color: '#DBAF62',
            lineHeight: 1.5,
            letterSpacing: '0.045em;',
            fontFamily: 'Raleway, sans-serif',
            fontSize: '17px',
            fontWeight: '400',
          }}
          // className={"tests"}
          gutterBottom
          // color={'secondary'}
          align={'center'}
        >
          Klinika
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
            Kilka słów o naszej klinice
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
          Dowiedz się więcej o naszej klinice
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
                  // to={`/about`}
                  to={`/drninawisniewska/`}
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
                  Zobacz pełny opis
              </Button>
          </Box>





        </Box>
      </Box>









          <Box>
          {/* <Box display={'flex'} justifyContent={'flex-end'} marginBottom={2}>
        <Button
          color="primary"
          size="large"
          endIcon={
            <svg
              width={16}
              height={16}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          }
          onClick={() => openLightbox(0)}
        >
          Open the gallery
        </Button>
      </Box> */}
      <Box>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 200}
          gap={isMd ? 16 : 4}
          sx={{
            overflowY: 'hidden',
          }}
        >
          {about.map((item, i) => (
            <ImageListItem key={i} cols={item.cols} rows={item.rows}>
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                effect="blur"
                onClick={() => openLightbox(i)}
                style={{
                  objectFit: 'cover',
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                  cursor: 'poiner',
                  borderRadius: 8,
                }}
                // sx={{
                //       transition: 'opacity, transform ease 0.3s !important',
                //       '&:hover': {
                //         transform: 'scale(1.2)',
                //       },
                //     }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {viewerIsOpen && (
        <Lightbox
          mainSrc={about[currentImage].src}
          nextSrc={about[(currentImage + 1) % about.length].src}
          prevSrc={
            about[(currentImage + about.length - 1) % about.length].src
          }
          onCloseRequest={() => closeLightbox()}
          onMovePrevRequest={() =>
            setCurrentImage((currentImage + about.length - 1) % about.length)
          }
          onMoveNextRequest={() =>
            setCurrentImage((currentImage + 1) % about.length)
          }
          reactModalStyle={{ overlay: { zIndex: 1500 } }}
        />
      )}
    </Box>











       
        </Box>
        <Box sx={{ paddingTop: "44px" }}>
            <Grid container spacing={2}>
                {mock.map((item, i) => (
                    <Grid key={i} item xs={12} md={4} >
                    <Typography variant="h3" gutterBottom>
                        <Box>
                            <VisibilitySensor
                                onChange={(isVisible) =>
                                    setViewPortVisibility(isVisible)
                                }
                                delayedCall
                            >
                                <Box sx={{
                                  display: 'flex',
                                  justifyContent:'center',

                                  // fontFamily: 'Lato,sans-serif',
                                  // fontFamily: 'Raleway, sans-serif',
                                  font: '400 14px/20px Google Sans Text,Arial,Helvetica,sans-serif',
                                  fontSize: '45px',
                                  // lineHeight: '1.208em',
                                  letterSpacing: '.045em',
                                  // textTransform: 'uppercase',
                                  // color: '#444',
                                  color: 'rgba(0, 0, 0, 0.6)'
                                }}>
                                    <CountUp
                                        duration={2}
                                        end={viewPortEntered ? item.title : 0}
                                        start={0}
                                        suffix={item.suffix}
                                    />
                                </Box>
                            </VisibilitySensor>
                        </Box>
                    </Typography>
                    {/* <Typography color="text.secondary" component="p" align='center'>
                        {item.subtitle}
                    </Typography> */}
                    <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          // data-aos={'fade-left'}
          sx={{
            // fontFamily: '"Lato", sans-serif',
            // fontSize: '18px',
            // fontWeight: '400',
            // color: '#838383'

            // fontFamily: 'Raleway, sans-serif',
            // font: '400 14px/20px Google Sans Text,Arial,Helvetica,sans-serif',
                            // fontSize: '18px',
                            // fontWeight: '400',
                            // color: 'rgba(0, 0, 0, 0.6)'

                            fontFamily: 'Raleway, sans-serif',
                            fontSize: '18px',
                            fontWeight: '400',
          }}
        >
          {item.subtitle}
        </Typography>
                    </Grid>
                ))}
            </Grid>
        </Box>
      </Container>
    </Box>
  );

};

export default AboutSection;
