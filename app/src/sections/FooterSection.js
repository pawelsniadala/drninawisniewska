import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Container from '../components/Container';
import FacebookSvg from '../assets/svg/FacebookSvg';
import InstagramSvg from '../assets/svg/InstagramSvg';

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
                        <Typography component='a'
                            href='https://goo.gl/maps/1a3qFdxNqTNJdahY9'
                            target='_blank'
                            rel='noreferrer'
                            className='footer-text link'
                        >
                            ul. Fryderyka Chopina 13/U2,<br />07-200 Wyszków
                        </Typography>
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
                            href='/services/usg'
                            className='footer-text link'
                        >
                            USG
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
                            component='a'
                            href='/technology/vectus'
                            className='footer-text link'
                        >
                            Vectus
                        </Typography>
                        <Typography
                            component='a'
                            href='/technology/alma-harmony-xl-pro'
                            className='footer-text link'
                        >
                            Alma Harmony XL Pro
                        </Typography>
                        <Typography
                            component='a'
                            href='/technology/icoone-laser-med2'
                            className='footer-text link'
                        >
                            Icoone Laser Med 2
                        </Typography>
                        <Typography
                            component='a'
                            href='/technology/fons-svr-fraction-laser-co2'
                            className='footer-text link'
                        >
                            Fons SVR Laser Frakcyjny CO<sub>2</sub>
                        </Typography>
                        <Typography
                            component='a'
                            href='/technology/alma-accent-ultra-v-shape'
                            className='footer-text link'
                        >
                            Alma Accent Ultra V Shape
                        </Typography>
                        <Typography
                            component='a'
                            href='/technology/biolitec-leonardo-mini'
                            className='footer-text link'
                        >
                            Biolitec Leonardo Mini
                        </Typography>
                        <Typography
                            component='a'
                            href='/technology/hettich-arthrex-acp'
                            className='footer-text link'
                        >
                            Hettich Arthrex ACP
                        </Typography>
                        <Typography
                            component='a'
                            href='/technology/foto-finder-dermoscope-vexia'
                            className='footer-text link'
                        >
                            FotoFinder Dermoscope Vexia
                        </Typography>
                        <Typography
                            component='a'
                            href='/technology/philips-ultrasonograf-affiniti-50'
                            className='footer-text link'
                        >
                            Philips Ultrasonograf Affiniti 50
                        </Typography>
                        <Typography
                            component='a'
                            href='/technology/sono-queen'
                            className='footer-text link'
                        >
                            SonoQueen
                        </Typography>


                        {/* <Typography
                            variant='span'
                            className='footer-text'
                        >
                            Lampa  UVB
                        </Typography> */}
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
                        <Typography
                            component='a'
                            href='tel:+48450001550'
                            className='footer-text link'
                        >
                            450 001 550
                        </Typography>
                        <Typography
                            component='a'
                            href='tel:+48539968541'
                            className='footer-text link'
                        >
                            539 968 541
                        </Typography>
                        <Typography
                            component='a'
                            href='mailto:info@drninawisniewska.pl'
                            className='footer-text link'
                        >
                            info@drninawisniewska.pl
                        </Typography>
                        <Box className='media-wrapper'>
                            <Typography
                                component='a'
                                href='https://www.facebook.com/profile.php?id=100063736802328'
                                className='link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <FacebookSvg width='16px' height='16px' />
                            </Typography>
                            <Typography
                                component='a'
                                href='https://www.instagram.com/klinikawyszkow/'
                                className='link'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <InstagramSvg width='16px' height='16px' />
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Container>
            <Box className='section-wrapper info'>
                <Box className='copyright'>
                    <Box>
                        Copyright © 2022 Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska.
                    </Box>
                    <Box>
                        All rights reserved.
                        Photos designed by <a href='https://www.freepik.com' className='design' target='_blank' rel='noreferrer'>Freepik</a>.
                        Design by <a href='https://www.linkedin.com/in/pawelsniadala/' className='design' target='_blank' rel='noreferrer'>Paweł Śniadała</a>.
                    </Box>
                </Box>
            </Box>
        </footer>
    );
}

export default FooterSection;
