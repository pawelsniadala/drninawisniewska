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

const TeamSection = () => {
    const theme = useTheme();
    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });

    return (
        <Box sx={{
            // paddingTop: "64px",
            // paddingBottom: "64px",
            backgroundColor: '#f2f7ff',
            backgroundImage: `linear-gradient(#fff, #f7faff)`,
            // boxShadow: 'rgb(0 0 0 / 5%) 0px 0px 0px 1px;',
        }}>
            <Container>
             





                <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            // color: '#f8b01b',
            color: '#DBAF62',
            // fontWeight: 600,
            lineHeight: 1.5,
            letterSpacing: '0.045em;',
            // fontFamily: '"Lato", sans-serif',

            fontFamily: '"Roboto", sans-serif',
            fontSize: '18px',
            fontWeight: '400',

          }}
          // className={"tests"}
          gutterBottom
          // color={'secondary'}
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
            // fontWeight: 400,
            // textTransform: 'uppercase',
            // letterSpacing: '0.045em;',
            // fontFamily: '"Lato", sans-serif',
            fontFamily: 'Lato,sans-serif',
            fontSize: '30px',
            lineHeight: '1.208em',
            letterSpacing: '.045em',
            textTransform: 'uppercase',
            // color: '#212529',
            color: '#444'
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
            // fontFamily: '"Roboto", sans-serif',
            fontSize: '18px',
            fontWeight: '400',
            // color: '#838383'
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
                  to={`/team`}
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth={isMd ? false : true}
                  endIcon={
              // <Box
              //   component={'svg'}
              //   xmlns="http://www.w3.org/2000/svg"
              //   fill="#fff"
              //   viewBox="0 0 24 24"
              //   stroke="currentColor"
              //   width={24}
              //   height={24}
              // >

              //   <path
              //     strokeLinecap="round"
              //     strokeLinejoin="round"
              //     strokeWidth={2}
              //     d="M17 8l4 4m0 0l-4 4m4-4H3"
              //   />
              // </Box>
              // <ChevronRightIcon />
              <ArrowForwardIcon />
            }
              >
                 Zobacz cały zespół
              </Button>
          </Box>





        </Box>
      </Box>







                <Grid container spacing={4}>
                    {team.slice(0, 4).map((item, i) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={3}
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
                            }}
                        >
                        <Box
                            component={CardMedia}
                            borderRadius={2}
                            width={1}
                            height={1}
                            minHeight={320}
                            image={item.avatar}
                        />
                        <Box
                            component={CardContent}
                            bgcolor={'transparent'}
                            marginTop={-5}
                        >
                            <Box
                                component={Card}
                                sx={{
                                    boxShadow: '0 3px 6px 0 rgb(140 152 164 / 25%)',
                                    borderRadius: '8px'
                                }}
                            >
                            <CardContent>
                                <ListItemText primary={item.name} secondary={item.title} />
                            </CardContent>
                            </Box>
                        </Box>
                        </Card>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default TeamSection;
