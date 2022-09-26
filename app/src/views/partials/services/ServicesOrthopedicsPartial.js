import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';

import Container from '../../../components/Container';
import CardProposed from '../../../components/CardProposed';

import { services } from '../../../data/services';
import servicesOrthopedics from '../../../assets/services/servicesOrthopedics.jpg';

const ServicesOrthopedicsPartial = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header services-dermatology'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link to='/services' aria-current='page'>
                                    <NavigateBeforeIcon sx={{ mr: '3px' }} fontSize='smform' />
                                    <Box>Usługi</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link to='/' aria-current='page'>
                                    Home
                                </Link>
                                <Link to='/services' aria-current='page'>
                                    Usługi
                                </Link>
                                <Typography color='text.primary'>
                                    Ortopedia
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Ortopedia
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper services'>
                        <Box className='service-description'>
                            <Typography className='paragraph'>
                                Etiam ac tristique nisl. Praesent eu elit sit amet eros rhoncus convallis. Aliquam eu tristique massa, nec cursus libero. Fusce at nunc sollicitudin, euismod orci vitae, luctus ipsum. Integer tellus est, aliquam in lobortis et, tempor sit amet mi. Nulla a commodo purus. Mauris facilisis libero id purus rhoncus, nec sollicitudin eros bibendum. Curabitur mattis nisl vel odio consequat varius. Nunc maximus, metus sit amet placerat dignissim, leo diam sodales tortor, sit amet eleifend nisl elit non metus. Ut eget lorem euismod, pellentesque lectus ac, malesuada felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi commodo arcu sem, non varius sem vestibulum a. Sed eget tempus mi. Integer faucibus ac erat non pellentesque. Sed hendrerit tortor magna, eu hendrerit enim blandit eget. Pellentesque tincidunt in enim nec sodales.
                            </Typography>
                            <Box marginY={4}>
                                <LazyLoadImage
                                    height={'100%'}
                                    width={'100%'}
                                    src={servicesOrthopedics}
                                    alt='Remote working'
                                    effect='blur'
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: 8,
                                        width: '100%',
                                        height: '100%',
                                        maxHeight: '400px',
                                    }}
                                />
                            </Box>
                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Phasellus metus leo
                                </Typography>
                                <Typography className='paragraph'>
                                    Nulla eu mauris ut leo vulputate tempus ac ut ante. Mauris odio magna, luctus in nisi ut, rhoncus sagittis libero. Mauris porta eget velit non faucibus. Sed nulla nisl, egestas at lacus eu, pretium efficitur tortor. Cras ut metus nec justo dignissim maximus. Duis ligula ligula, varius in iaculis nec, consectetur id purus. Nam malesuada neque quis purus luctus, a varius metus tristique. Cras gravida risus sed erat vestibulum, ut tristique arcu elementum. Sed hendrerit mattis purus. Mauris blandit, diam in condimentum malesuada, lorem nisl posuere magna, venenatis sodales risus ligula nec velit. Aliquam pulvinar vehicula mi eget eleifend.
                                </Typography>
                            </Box>
                            <Box marginBottom={3}>
                                <Typography variant={'h5'} className='header'>
                                    Duis in felis odio
                                </Typography>
                                <Typography className='paragraph'>
                                    Sed dui ligula, imperdiet vel est in, imperdiet euismod ipsum. Sed quis dui ante. Curabitur lacus est, porttitor ac tincidunt ac, aliquet at purus. Aliquam eu eros et magna commodo commodo in eu velit. Fusce nec mauris accumsan, imperdiet nibh vel, viverra est. Vivamus porttitor eget ipsum nec convallis. Nam ullamcorper vitae nisl sed convallis. Aliquam lobortis mauris vulputate euismod cursus.
                                </Typography>
                                <Grid container spacing={1} sx={{ marginTop: 1 }}>
                                {[
                                    'Lorem ipsum dolor sit amet consectetur adipiscing elit',
                                    'Nulla eu mauris ut leo vulputate tempus ac ut ante',
                                    'Sed dui ligula imperdiet vel est in imperdiet euismod ipsum',
                                    'Duis in felis odio vestibulum tempus magna',
                                    'Phasellus metus leo efficitur ac quam quis, porta'
                                ].map((item, i) => (
                                    <Grid item xs={12} key={i}>
                                        <Box
                                            component={ListItem}
                                            disableGutters
                                            width={'auto'}
                                            padding={0}
                                        >
                                            <Box
                                                component={ListItemAvatar}
                                                minWidth={'auto !important'}
                                                marginRight={2}
                                            >
                                                <Box
                                                    component={Avatar}
                                                    sx={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                                    width={20}
                                                    height={20}
                                                >
                                                    <svg
                                                        width={12}
                                                        height={12}
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewBox='0 0 20 20'
                                                        fill='currentColor'
                                                    >
                                                        <path
                                                            fillRule='evenodd'
                                                            d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                            clipRule='evenodd'
                                                        />
                                                    </svg>
                                                </Box>
                                            </Box>
                                            <ListItemText primary={item} className='list-item-text'/>
                                        </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                            <Box>
                                <Typography variant={'h5'} className='header'>
                                    Nulla eu mauris
                                </Typography>
                                <Typography className='paragraph'>
                                    Duis in felis odio. Vestibulum tempus magna sit amet imperdiet tincidunt. Nullam non neque arcu. Nunc venenatis varius hendrerit. In eget felis porta, ultrices libero sed, consectetur purus. Sed maximus risus eget urna volutpat aliquam. Ut ut vehicula lectus. Mauris id tellus orci. Curabitur luctus nisi vel ligula eleifend blandit. Vestibulum feugiat ipsum volutpat tortor consequat, id egestas nisl venenatis. Vivamus aliquam dui nec consectetur convallis.
                                </Typography>
                            </Box>
                        </Box>
                        <Box className='proposed-services'>
                            <Box className='card-wrapper services-proposed'>
                                {services.length ? services.filter(item => item.title !== 'Ortopedia').map((item, index) => (
                                    <CardProposed
                                        key={index}
                                        cardTitle={item.title}
                                        cardDescription={item.description}
                                        cardImage={item.image}
                                        cardPath={item.path}
                                    />
                                )) : (
                                    <Box>Brak danych</Box>
                                )}
                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default ServicesOrthopedicsPartial;
