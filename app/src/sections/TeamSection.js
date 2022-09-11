import React from 'react';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItemText from '@mui/material/ListItemText';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
// import Container from '@mui/material/Container';
import Container from '../components/Container'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useTheme } from '@mui/material/styles';
import { team } from '../data/team';
import CardActions from '@mui/material/CardActions';


import CardTeam from '../components/CardTeam';

const TeamSection = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    return (
        <Box sx={{ backgroundColor: '#f5f5f5'}}>
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
                        Zespół
                    </Typography>
                    <Typography
                        variant="h4"
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
                        variant="h6"
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
                        display="flex"
                        flexDirection={{ xs: 'column', sm: 'row' }}
                        alignItems={{ xs: 'stretched', sm: 'flex-start' }}
                        justifyContent={'center'}
                        marginTop={2}
                    >
                        <Box
                            className="link-contained-more"
                            marginTop={{ xs: 2, sm: 0 }}
                            width={{ xs: '100%', md: 'auto' }}
                        >
                            <Button
                                component={Link}
                                to='/team'
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth={isMd ? false : true}
                            >
                                Zobacz cały zespół
                            </Button>
                        </Box>
                    </Box>
                </Box>
                <Box className='section-body'>
                    {/* <Container className="section-wrapper"> */}
                        <Box className="card-wrapper team">
                            {team.slice(0, 4).map((item, index) => (
                                <CardTeam
                                    key={index}
                                    cardType={'card-team-section'}
                                    cardImage={item.image}
                                    cardBackground={item.background}
                                    cardTitle={item.title}
                                    cardName={item.name}
                                    cardSpeciality={item.speciality}
                                    cardPath={item.path}
                                />
                            ))}
                        </Box>
                    {/* </Container> */}
                </Box>

                {/* <Grid container spacing={2}>
                    {team.slice(0, 3).map((item, i) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={i}
                        data-aos={'fade-up'}
                        data-aos-delay={i * 100}
                        data-aos-offset={100}
                        data-aos-duration={600}
                    >
                        <Card
                            sx={{
                                boxShadow: 0,
                                background: 'transparent',
                                backgroundImage: 'none',
                                borderRadius: '8px'
                            }}
                        >
                            <Box
                                component={CardMedia}
                                borderRadius={2}
                                width={1}
                                height={1}
                                minHeight={450}
                                image={item.avatar}
                                sx={{
                                backgroundPosition: 'top center',
                                }}
                            />
                            <Box
                                component={CardContent}
                                bgcolor={'transparent'}
                                marginTop={-5}
                            >
                                <Box
                                    component={Card}
                                    sx={{
                                        boxShadow: '1px 2px 6px rgb(0 0 0 / 4%)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <CardContent>
                                        <Typography
                                            align={'center'}
                                            sx={{
                                                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                                fontSize: "14px",
                                                color: 'rgba(0, 0, 0, 0.7)',
                                                fontWeight: '300',
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            variant={'h6'}
                                            gutterBottom
                                            align={'center'}
                                            sx={{
                                                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                                letterSpacing: '.045em',
                                                fontWeight: '400',
                                                color: 'rgba(0, 0, 0, 0.7)',
                                                fontSize: '1.2rem',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                        <Typography
                                            align={'center'}
                                            sx={{
                                                fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
                                                fontSize: "14px",
                                                color: 'rgba(0, 0, 0, 0.7)',
                                                fontWeight: '300',
                                            }}
                                        >
                                            {item.speciality}
                                        </Typography>
                                    </CardContent>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                    ))}
                </Grid> */}
            </Container>
        </Box>
    );
}

export default TeamSection;
