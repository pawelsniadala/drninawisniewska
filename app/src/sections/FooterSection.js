import React from 'react';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

import Container from '../components/Container';
import FacebookSvg from '../assets/svg/FacebookSvg';
import InstagramSvg from '../assets/svg/InstagramSvg';

const FooterSection = () => {
    const year = new Date().getFullYear();

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
                            ul. Fryderyka Chopina 13/U2A,<br />07-200 Wyszków
                        </Typography>
                        <Typography
                            component='a'
                            href='/clinic/regulation'
                            className='footer-text link'
                        >
                            Regulamin organizacyjny
                        </Typography>
                    </Box>
                </Box>
                <Box className='services'>
                    <Typography
                        variant='h6'
                        className='footer-heading'
                    >
                        Specjalizacje
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
                            href='/services/rheumatology'
                            className='footer-text link'
                        >
                            Reumatologia
                        </Typography>
                    </Box>
                </Box>
                <Box className='treatment'>
                    <Typography variant='h6' className='footer-heading'>
                        Zabiegi
                    </Typography>
                    <Box className='treatment-wrapper'>
                        {/* DERMATOLOGIA */}
                        <Typography
                            component='a'
                            href='/treatment/dermatology/fototerapia-chorob-skory'
                            className='footer-text link'
                        >
                            Fototerapia chorób skóry
                        </Typography>
                        {/* MEDYCYNA ESTETYCZNA */}
                        <Typography
                            component='a'
                            href='/treatment/aesthetic-medicine/osocze-bogatopłytkowe'
                            className='footer-text link'
                        >
                            Osocze bogatopłytkowe
                        </Typography>
                        <Typography
                            component='a'
                            href='/treatment/aesthetic-medicine/mezoterapia-iglowa'
                            className='footer-text link'
                        >
                            Mezoterapia igłowa
                        </Typography>
                        {/* KOSMETOLOGIA */}
                        <Typography
                            component='a'
                            href='/treatment/cosmetology/peeling-medyczny'
                            className='footer-text link'
                        >
                            Peeling medyczny
                        </Typography>
                        <Typography
                            component='a'
                            href='/treatment/cosmetology/epilacja-laserowa'
                            className='footer-text link'
                        >
                            Epilacja laserowa
                        </Typography>
                        <Typography
                            component='a'
                            href='/treatment/cosmetology/masaz-prozniowy'
                            className='footer-text link'
                        >
                            Masaż próżniowy
                        </Typography>
                        {/* FIZJOTERAPIA */}
                        <Typography
                            component='a'
                            href='/treatment/physioterapy/rehabilitacja'
                            className='footer-text link'
                        >
                            Rehabilitacja
                        </Typography>
                        <Typography
                            component='a'
                            href='/treatment/physioterapy/kinesiotaping'
                            className='footer-text link'
                        >
                            Kinesiotaping
                        </Typography>
                        {/* CHIRURGIA PLASTYCZNA */}
                        <Typography
                            component='a'
                            href='/treatment/cosmetic-surgery/plastyka-powiek'
                            className='footer-text link'
                        >
                            Plastyka powiek
                        </Typography>
                        {/* ALERGOLOGIA */}
                        <Typography
                            component='a'
                            href='/treatment/allergology/testy-skorne'
                            className='footer-text link'
                        >
                            Testy skórne
                        </Typography>
                        <Typography
                            component='a'
                            href='/treatment/allergology/odczulanie'
                            className='footer-text link'
                        >
                            Odczulanie
                        </Typography>
                        {/* CHIRURGIA NACZYNIOWA */}
                        <Typography
                            component='a'
                            href='/treatment/vascular-surgery/skleroterapia'
                            className='footer-text link'
                        >
                            Skleroterapia
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
                        Copyright © {year} Dermatologia i Medycyna Estetyczna dr Nina Wiśniewska.
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
