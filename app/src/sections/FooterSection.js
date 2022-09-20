import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';

import FacebookSvg from '../assets/svg/FacebookSvg';
import TwitterSvg from '../assets/svg/TwitterSvg';
import InstagramSvg from '../assets/svg/InstagramSvg';
import Container from '../components/Container';

const FooterSection = () => {
    return (
        <footer>
            <Container className='section-wrapper footer'>
                <Box className='business'>
                    <Typography
                        variant='h6'
                        className='footer-heading'
                    >
                        Klinika
                    </Typography>
                    <Box className='business-wrapper'>
                        <Typography
                            variant='span'
                            className='footer-text'
                        >
                            Dermatologia i Medycyna estetyczna<br/>dr Nina Wiśniewska
                        </Typography>
                        <Tooltip title='Google Maps'>
                            <Typography component='a'
                                href='https://goo.gl/maps/1a3qFdxNqTNJdahY9'
                                target='_blank'
                                rel='noreferrer'
                                className='footer-text link'
                            >
                                ul. Fryderyka Chopina 13/U2,<br />07-200 Wyszków
                            </Typography>
                        </Tooltip>
                    </Box>
                </Box>
                <Box className='services'>
                    <Typography
                        variant='h6'
                        className='footer-heading'
                    >
                        Usługi
                    </Typography>
                    <Box className='services-wrapper'>
                        <Typography
                            component='a'
                            href='/services/dermatology'
                            className='footer-text link'
                        >
                            Dermatologia
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/aesthetic-medicine'
                            className='footer-text link'
                        >
                            Medycyna estetyczna
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/cosmetology'
                            className='footer-text link'
                        >
                            Kosmetologia
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/physioterapy'
                            className='footer-text link'
                        >
                            Fizjoterapia
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/cosmetic-surgery'
                            className='footer-text link'
                        >
                            Chirurgia plastyczna
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/allergology'
                            className='footer-text link'
                        >
                            Alergologia
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/gynecology'
                            className='footer-text link'
                        >
                            Ginekologia
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/orthopedics'
                            className='footer-text link'
                        >
                            Ortopedia
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/vascular-surgery'
                            className='footer-text link'
                        >
                            Chirurgia naczyniowa
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/clinical-dietitian'
                            className='footer-text link'
                        >
                            Dietetyka Kliniczna
                        </Typography>
                        <Typography
                            component='a'
                            href='/services/hematology'
                            className='footer-text link'
                        >
                            Hematologia
                        </Typography>
                    </Box>
                </Box>
                <Box className='technology'>
                    <Typography variant='h6' className='footer-heading'>
                        Technologia
                    </Typography>
                    <Box className='technology-wrapper'>
                        <Typography
                            variant='span'
                            className='footer-text'
                        >
                            {/* Vectus&trade; */}
                            Vectus
                        </Typography>
                        <Typography
                            variant='span'
                            className='footer-text'
                        >
                            {/* Icoone<sup>&reg;</sup> Laser Med 2 */}
                            Icoone Laser Med 2
                        </Typography>
                        <Typography
                            variant='span'
                            className='footer-text'
                        >
                            Accent
                        </Typography>
                        <Typography
                            variant='span'
                            className='footer-text'
                        >
                            SonoQueen
                        </Typography>
                        <Typography
                            variant='span'
                            className='footer-text'
                        >
                            Laser Alma Harmony
                        </Typography>
                        <Typography
                            variant='span'
                            className='footer-text'
                        >
                            Laser CO2
                        </Typography>
                        <Typography
                            variant='span'
                            className='footer-text'
                        >
                            Lampa  UVB
                        </Typography>
                    </Box>
                </Box>
                <Box className='contact'>
                    <Typography
                        variant='h6'
                        className='footer-heading'
                    >
                        Kontakt
                    </Typography>
                    <Box className='contact-wrapper'>
                        <Tooltip title='Zadzwoń' placement='right'>
                            <Typography
                                component='a'
                                href='tel:+48450001550'
                                className='footer-text link'
                            >
                                +48 450 001 550
                            </Typography>
                        </Tooltip>
                        <Tooltip title='Zadzwoń' placement='right'>
                            <Typography
                                component='a'
                                href='tel:+48539968541'
                                className='footer-text link'
                            >
                                +48 539 968 541
                            </Typography>
                        </Tooltip>
                        <Tooltip title='Napisz wiadomość' placement='right'>
                            <Typography
                                component='a'
                                href='mailto:info@drninawisniewska.pl'
                                className='footer-text link'
                            >
                                info@drninawisniewska.pl
                            </Typography>
                        </Tooltip>
                        <Box className='media-wrapper'>
                            <Tooltip title='Facebook'>
                                <Typography
                                    component='a'
                                    href='https://www.facebook.com/profile.php?id=100063736802328'
                                    className='link'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <FacebookSvg width='16px' height='16px' />
                                </Typography>
                            </Tooltip>
                            <Tooltip title='Twitter'>
                                <Typography
                                    component='a'
                                    href='https://www.facebook.com/profile.php?id=100063736802328'
                                    className='link'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <TwitterSvg width='16px' height='16px' />
                                </Typography>
                            </Tooltip>
                            <Tooltip title='Instagram'>
                                <Typography
                                    component='a'
                                    href='https://www.facebook.com/profile.php?id=100063736802328'
                                    className='link'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    <InstagramSvg width='16px' height='16px' />
                                </Typography>
                            </Tooltip>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <div className='section-wrapper info'>
                <div className='copyright'>
                    <div>Copyright © 2022 Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska. All rights reserved.</div>
                    <div>Design by <a href='https://www.linkedin.com/in/pawelsniadala/' className='design' target='_blank' rel='noreferrer'>Paweł Śniadała</a>.</div>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;
