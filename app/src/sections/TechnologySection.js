import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

import Container from '../components/Container';
import CardTechnology from '../components/CardTechnology';

import { technology } from '../data/technology';

const TechnologySection = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    const evenNumbers = (item) => {
        return (item + 1) % 2 === 0 ? false : true;
    }

    return (
        <Box sx={{ backgroundColor: '#fbfbfd'}}>
            <Container>
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
                        gutterBottom
                        align={'center'}
                    >
                        Technologia
                    </Typography>
                    <Typography
                        variant='h4'
                        align={'center'}
                        data-aos={'fade-right'}
                        gutterBottom
                        sx={{
                            fontFamily: 'Lato, sans-serif',
                            fontSize: '30px',
                            lineHeight: '1.208em',
                            letterSpacing: '.045em',
                            textTransform: 'uppercase',
                            fontWeight: '400',
                            color: 'rgba(0, 0, 0, 0.6)'
                        }}
                    >
                        Nowoczsne rozwiązania
                    </Typography>
                    <Typography
                        variant='h6'
                        align={'center'}
                        color={'text.secondary'}
                        data-aos={'fade-right'}
                        sx={{
                            fontFamily: 'Raleway, sans-serif',
                            fontSize: '18px',
                            fontWeight: '400',
                        }}
                    >
                        Dla twojej wygody korzystamy z najnowszych technologii
                    </Typography>
                    <Box
                        display='flex'
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                        justifyContent={'center'}
                        marginTop={2}
                    >
                        <Box
                            className='link-contained-more'
                            marginTop={{ xs: 2, sm: 0 }}
                            width={{ xs: '100%', md: 'auto' }}
                        >
                            <Button
                                component={Link}
                                to='/technology'
                                variant='contained'
                                color='primary'
                                size='large'
                                fullWidth={isMd ? false : true}
                                endIcon={<ArrowForwardIcon />}
                            >
                                Zobacz technologie
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='section-body'>
                    <Box className='card-wrapper technology'>
                        {technology.slice(0, 4).map((item, index) => (
                            <Box data-aos={evenNumbers(index) ? 'fade-right' : 'fade-left'}>
                                <CardTechnology
                                    key={index}
                                    cardEvenNumbers={evenNumbers(index)}
                                    cardImage={item.image}
                                    cardName={item.name}
                                    cardDescription={item.description}
                                    cardPath={item.path}
                                />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default TechnologySection;
