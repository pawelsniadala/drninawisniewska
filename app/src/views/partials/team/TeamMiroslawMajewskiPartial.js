import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

import Container from '../../../components/Container';

import { team, miroslawMajewski } from '../../../data/team';

const TeamMiroslawMajewskiPartial = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const teamCopy = [ ...team ];
    const miroslawMajewskiCopy = [{ ...miroslawMajewski }];

    shuffleArray(teamCopy);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box className='team-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-aesthetic-medicine'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/team' aria-current='page'>
                                    <KeyboardDoubleArrowLeftIcon sx={{ mr: 0.5 }} fontSize='smform' />
                                    <Box>Zespół</Box>
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
                                    {miroslawMajewski.name}
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                {miroslawMajewski.name}
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper team'>
                        <Box className='team-details'>
                            {miroslawMajewskiCopy.map((item, index) => (
                                <Box key={index}>
                                    <Card className='card-introduction'>
                                        {item.background ? (
                                            <Box
                                                className='card-background'
                                                component={LazyLoadImage}
                                                height={1}
                                                width={1}
                                                src={item.background}
                                                alt={item.title}
                                                effect='blur'
                                            />
                                        ) : (
                                            <Box className='card-background-color' />
                                        )}
                                        <Box
                                            className='card-image'
                                            component={LazyLoadImage}
                                            src={item.image}
                                            alt={item.title}
                                            effect='blur'
                                        />
                                        <CardContent className='card-content'>
                                            <Typography className='card-name'>
                                                {item.name}
                                            </Typography>
                                            <Typography className='card-speciality'>
                                                {item.speciality}
                                            </Typography>
                                            {item.summary && (
                                                <Typography className='card-text'>
                                                    {item.summary}
                                                </Typography>
                                            )}
                                        </CardContent>
                                    </Card>
                                    {item.education && (
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
                                    )}
                                    {item.experience && (
                                        <Card className='card-experience'>
                                            <CardContent className='card-content'>
                                                <Typography className='card-header'>
                                                    Doświadczenie
                                                </Typography>
                                                <Typography className='card-text'>
                                                    {item.experience}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    )}
                                    {item.interested && (
                                        <Card className='card-interested'>
                                            <CardContent className='card-content'>
                                                <Typography className='card-header'>
                                                    Zainteresowania
                                                </Typography>
                                                <Typography className='card-text'>
                                                    {item.interested}
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    )}
                                </Box>
                            ))}
                        </Box>
                        <Box className='team-proposed'>
                            {teamCopy.filter(item => item.designation !== 'miroslawMajewski').slice(0, 8).map((item, index) => (
                                <Box className='card-team-proposed' component={Link} to={item.path} key={index}>
                                    <Card className='card'>
                                        <CardContent className='card-content'>
                                            <Avatar
                                                className='card-image'
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

export default TeamMiroslawMajewskiPartial;
