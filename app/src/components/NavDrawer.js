import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PhoneSvg from '../assets/svg/PhoneSvg';
import EmailSvg from '../assets/svg/EmailSvg';
import FacebookSvg from '../assets/svg/FacebookSvg';
import InstagramSvg from '../assets/svg/InstagramSvg';

import Container from '../components/Container';

const NavDrawer = () => {
    return (
        <Box className='top-nav'>
            <Container className='nav-wrapper'>
                <Box className='content-wrapper'>
                    <Box className='contact-wrapper'>
                        <Tooltip title='Zadzwoń'>
                            <a className='link'
                                href='tel:+48450001550'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Box className='link-wrapper'>
                                    <PhoneSvg width='14px' height='14px' color='#fff' />
                                    <Typography className='link-text'>
                                        450 001 550
                                    </Typography>
                                </Box>
                            </a>
                        </Tooltip>
                        <Tooltip title='Zadzwoń'>
                            <a className='link'
                                href='tel:+48539968541'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Box className='link-wrapper'>
                                    <PhoneSvg width='14px' height='14px' color='#fff'/>
                                    <Typography className='link-text'>
                                        539 968 541
                                    </Typography>
                                </Box>
                            </a>
                        </Tooltip>
                        <Tooltip title='Napisz Wiadomość'>
                            <a className='link'
                                href='mailto:info@drninawisniewska.pl'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <Box className='link-wrapper'>
                                    <EmailSvg width='14px' height='14px' color='#fff' />
                                    <Typography className='link-text'>
                                        info@drninawisniewska.pl
                                    </Typography>
                                </Box>
                            </a>
                        </Tooltip>
                    </Box>
                    <Box className='media-wrapper'>
                        <Tooltip title='Facebook'>
                            <a className='link'
                                href='https://www.facebook.com/profile.php?id=100063736802328'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FacebookSvg width='14px' height='14px' color='#fff' />
                            </a>
                        </Tooltip>
                        <Tooltip title='Instagram'>
                            <a className='link'
                                href='https://www.instagram.com/klinikawyszkow/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <InstagramSvg width='14px' height='14px' color='#fff' />
                            </a>
                        </Tooltip>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default NavDrawer;
