import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

import Container from '../components/Container';
import PhoneSvg from '../assets/svg/PhoneSvg';
import EmailSvg from '../assets/svg/EmailSvg';

import { contact } from '../data/contact';

const ContactView = () => {
    const renderIcon = (designation) => {
        switch(designation) {
            case "phone":
                return (
                    <PhoneSvg width='20px' height='20px' color='#fff'/>
                );
            case "email":
                return (
                    <EmailSvg width='20px' height='20px' color='#fff' />
                );
            case "address":
                return (
                    <FmdGoodIcon />
                );
            default:
        }
    }

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, []);

    return (
        <Box className='contact-view'>
            <Box className='view-wrapper'>
                <Box className='view-header'>
                    <Container className='header-wrapper'>
                        <Box className='nav-wrapper'>
                            <Breadcrumbs
                                className='breadcrumb back'
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    {/* <NavigateBeforeIcon sx={{ mr: '3px' }} fontSize='smform' /> */}
                                    <Box>Home</Box>
                                </Link>
                            </Breadcrumbs>
                            <Breadcrumbs
                                className='breadcrumb nav'
                                separator={<NavigateNextIcon fontSize='smform' />}
                                aria-label='breadcrumb'
                            >
                                <Link
                                    to='/'
                                    aria-current='page'
                                >
                                    Home
                                </Link>
                                <Typography color='text.primary'>
                                    Kontakt
                                </Typography>
                            </Breadcrumbs>
                        </Box>
                        <Box className='heading-wrapper'>
                            <Typography variant='h4' className='heading-view'>
                                Kontakt
                            </Typography>
                        </Box>
                    </Container>
                </Box>
                <Box className='view-body'>
                    <Container className='body-wrapper contact'>
                        <Box className='contact-details-wrapper'>
                            <Box marginBottom={2}>
                                <Typography className='paragraph'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ornare dictum ultricies. In hac habitasse platea dictumst. Integer eget ultricies erat. Duis vestibulum convallis orci, sed sodales diam placerat vel. Nunc blandit massa sapien, sit amet porttitor nisi condimentum.
                                </Typography>
                            </Box>
                            <Box
                                display={'flex'}
                                flexDirection={'column'}
                                justifyContent={'space-between'}
                                marginBottom={2}
                            >
                                {contact.map((item, index) => (
                                    <Box key={index} component='a' href={item.href} className='link'>
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
                                                width={40}
                                                height={40}
                                                sx={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                            >
                                                {renderIcon(item.designation)}
                                            </Box>
                                        </Box>
                                            <ListItemText primary={item.label} secondary={item.value} />
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                        <Box
                            className='contact-wrapper-map'
                            data-aos={'fade-in'}
                            data-aos-delay={'300'}
                        >
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                title="map"
                                marginHeight={0}
                                marginWidth={0}
                                scrolling="no"
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9694.856415856955!2d21.453784!3d52.592862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ee5a5adb9d581%3A0x2835d4bb585fbf47!2sFryderyka%20Chopina%2013%2C%2007-200%20Wyszk%C3%B3w!5e0!3m2!1spl!2spl!4v1660443766192!5m2!1spl!2spl"
                                style={{
                                    minHeight: 500,
                                    borderRadius: 8,
                                    boxShadow: '1px 2px 6px rgb(0 0 0 / 4%)'
                                }}
                            />
                        </Box>
                    </Container>
                </Box>
            </Box>
        </Box>
    );
}

export default ContactView;
