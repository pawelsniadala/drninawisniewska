import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';

import Container from '../components/Container'
import CardTeam from '../components/CardTeam';

import { team } from '../data/team';

const TeamSection = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    return (
        <Box
            component='section'
            className='team-section'
            sx={{ backgroundColor: '#f5f5f5'}}
        >
            <Container>
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
                        Zespół
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
                        Zaufaj profesjonalistom
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
                        Nasz zespół składa się ze specjalistów o bardzo szerokim spektrum kompetencji
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
                            data-aos={'fade-in'}
                        >
                            <Button
                                component={Link}
                                to='/team'
                                variant='contained'
                                color='primary'
                                size='large'
                                fullWidth={isMd ? false : true}
                                endIcon={<ArrowForwardIcon />}
                            >
                                Zobacz cały zespół
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='section-body'>
                    <Box className='card-wrapper team'>
                        {team.slice(0, 4).map((item, index) => (
                            <Box
                                data-aos={'fade-up'}
                                data-aos-delay={index * 100}
                                data-aos-offset={100}
                                data-aos-duration={600}
                            >
                                <CardTeam
                                    key={index}
                                    cardImage={item.image}
                                    cardBackground={item.background}
                                    cardTitle={item.title}
                                    cardName={item.name}
                                    cardSpeciality={item.speciality}
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

export default TeamSection;
