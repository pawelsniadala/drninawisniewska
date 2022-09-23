import React, { useState } from 'react';
import { Link } from "react-router-dom";
import VisibilitySensor from 'react-visibility-sensor';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CountUp from 'react-countup';

import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import Lightbox from 'react-image-lightbox';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Container from '../components/Container'

import { clinic } from '../data/clinic';

const ClinicSection = () => {
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

    return (
        <Box
            component='section'
            className='clinic-section'
            sx={{
                backgroundColor: '#fff',
            }}
        >
            <Container>
                <Box>
                    <Box marginBottom={4}>
                        <Typography
                            gutterBottom
                            align={'center'}
                            data-aos={'fade-right'}
                            sx={{
                                textTransform: 'uppercase',
                                color: '#DBAF62',
                                lineHeight: 1.5,
                                letterSpacing: '0.045em;',
                                fontFamily: 'Raleway, sans-serif',
                                fontSize: '17px',
                                fontWeight: '400',
                            }}
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
                                data-aos={'fade-in'}
                            >
                                <Button
                                    component={Link}
                                    to={`/clinic`}
                                    // to={`/drninawisniewska/`}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth={isMd ? false : true}
                                    endIcon={
                                        <ArrowForwardIcon />
                                    }
                                >
                                    Zobacz pełny opis
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box>
                            <ImageList
                                variant="quilted"
                                cols={3}
                                rowHeight={isMd ? 300 : 200}
                                // gap={isMd ? 16 : 4}
                                gap={4}
                                sx={{ overflowY: 'hidden' }}
                            >
                                {clinic.pictures.map((item, i) => (
                                    <ImageListItem
                                        key={i}
                                        cols={item.cols}
                                        rows={item.rows}
                                    >
                                        <LazyLoadImage
                                            className='lazy-load-image'
                                            height={'100%'}
                                            width={'100%'}
                                            src={item.src}
                                            alt="..."
                                            effect="blur"
                                            visibleByDefault={true}
                                            onClick={() => openLightbox(i)}
                                            style={{
                                                objectFit: 'cover',
                                                filter: theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                                                cursor: 'pointer',
                                                borderTopLeftRadius: item.order === 1 ? '8px' : 'none',
                                                borderTopRightRadius: item.order === 2 ? '8px' : 'none',
                                                borderBottomLeftRadius: item.order === 3 ? '8px' : 'none',
                                                borderBottomRightRadius: item.order === 4 ? '8px' : 'none',
                                                transition: 'opacity, transform ease 0.3s !important',
                                            }}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                        {viewerIsOpen && (
                            <Lightbox
                                mainSrc={clinic.pictures[currentImage].src}
                                nextSrc={clinic.pictures[(currentImage + 1) % clinic.pictures.length].src}
                                prevSrc={clinic.pictures[(currentImage + clinic.pictures.length - 1) % clinic.pictures.length].src}
                                onCloseRequest={() => closeLightbox()}
                                onMovePrevRequest={() => setCurrentImage((currentImage + clinic.pictures.length - 1) % clinic.pictures.length)}
                                onMoveNextRequest={() => setCurrentImage((currentImage + 1) % clinic.pictures.length)}
                                reactModalStyle={{ overlay: { zIndex: 1500 } }}
                            />
                        )}
                    </Box>
                </Box>
                <Box sx={{ paddingTop: "44px" }}>
                    <Grid container spacing={2}>
                        {clinic.statistics.map((item, i) => (
                            <Grid key={i} item xs={12} md={4} >
                                <Typography variant="h3" gutterBottom>
                                    <Box>
                                        <VisibilitySensor
                                            onChange={(isVisible) => setViewPortVisibility(isVisible)}
                                            delayedCall
                                        >
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent:'center',
                                                fontFamily: '"Lato", sans-serif',
                                                fontSize: '40px',
                                                letterSpacing: '.045em',
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
                                <Typography
                                    variant="h6"
                                    align={'center'}
                                    color={'text.secondary'}
                                    // data-aos={'fade-left'}
                                    sx={{

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
}

export default ClinicSection;
