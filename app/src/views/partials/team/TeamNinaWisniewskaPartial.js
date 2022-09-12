import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// import Avatar from '@mui/material/Avatar';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import Container from '../../../components/Container';
import CardServicesProposed from '../../../components/CardServicesProposed';

import { services } from '../../../data/services';
import ninaWisniewskaImage from '../../../assets/team/ninaWisniewska/ninaWisniewskaImage.jpg';

import CardTeam from '../../../components/CardTeam';

import { team } from '../../../data/team';


import { ninaWisniewska } from '../../../data/team/ninaWisniewska';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import CardActions from '@mui/material/CardActions';




// import { Gallery, Item } from "react-photoswipe-gallery";



const TeamNinaWisniewskaPartial = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const teamCopy = [...team];

    shuffleArray(teamCopy);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box className='team-view'>
            <Box className='view-wrapper team'>
                <Box className='view-header services-aesthetic-medicine'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/team' aria-current='page'>
                                    <KeyboardDoubleArrowLeftIcon sx={{ mr: 0.5 }} fontSize='smform' />
                                    <Box>Cofnij</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/' aria-current='page'>
                                    Home
                                </Link>
                                <Link to='/team' aria-current='page'>
                                    Zespół
                                </Link>
                                <Typography color='text.primary'>
                                    dr n. med. Nina Wiśniewska
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Zespół
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper'>
                        <Box className='team-details'>
                            {ninaWisniewska.map((item) => (
                                <>
                                    <Card className='card-introduction'>
                                        {item.background ? (
                                            <Box
                                                className='card-background'
                                                component={LazyLoadImage}
                                                height={1}
                                                width={1}
                                                src={item.background}
                                                alt={item.title}
                                                // effect="blur"
                                            />
                                        ) : (
                                            <Box className='card-background-color' />
                                        )}
                                        <Box
                                            className='card-image'
                                            component={LazyLoadImage}
                                            src={item.image}
                                            alt={item.title}
                                            // effect="blur"
                                        />
                                        <CardContent className='card-content'>
                                            <Typography className='card-name'>
                                                {item.name}
                                            </Typography>
                                            <Typography className='card-speciality'>
                                                {item.speciality}
                                            </Typography>
                                            <Typography className='card-text'>
                                                {item.summary}
                                            </Typography>
                                            <Typography className='card-text'>
                                                {item.experience}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    <Card className='card-education'>
                                        <CardContent className='card-content'>
                                            <Typography className='card-header'>
                                                Wykształcenie
                                            </Typography>
                                            <Typography className='card-text'>
                                                {item.education}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                    {/* <Card className='card-gallery'>
                                        <CardContent className='card-content'>
                                            <Typography className='card-gallery-header'>
                                                Galeria
                                            </Typography>
                                            <Gallery withCaption>
                                                <Item
                                                    // key={item.id}
                                                    original={item.gallery.original.src}
                                                    thumbnail={item.gallery.thumbnail.src}
                                                    width={item.gallery.original.width}
                                                    height={item.gallery.original.height}
                                                    // title={item.title}
                                                    // alt={item.title}
                                                    // caption={item.title}
                                                    cropped
                                                >
                                                    {({ ref, open }) => (
                                                        <Box className='gallery-box' ref={ref}>
                                                            <Box
                                                                className='card-'
                                                                component={LazyLoadImage}
                                                                height={1}
                                                                width={1}
                                                                cardPhotoSrc={item.gallery.thumbnail.src}
                                                                onClick={open}
                                                            />
                                                        </Box>
                                                    )}
                                                </Item>
                                            </Gallery>
                                        </CardContent>
                                    </Card> */}
                                </>
                            ))}
                        </Box>
                        <Box className='team-proposed'>
                            {teamCopy.filter(item => item.name !== 'dr n. med. Nina Wiśniewska').slice(0, 8).map((item) => (
                                <Box className='card-proposed' component={Link} to={item.path}>
                                    <Card className='card'>
                                        <CardContent className='card-content'>
                                            <Avatar
                                                alt={item.name}
                                                src= {item.image}
                                                sx={{ width: 80, height: 80 }}
                                            />
                                            <Box>
                                                <Typography className='card-name'>
                                                    {item.name}
                                                </Typography>
                                                <Typography className='card-speciality '>
                                                    {item.speciality}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Box>
                            ))}
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default TeamNinaWisniewskaPartial;
