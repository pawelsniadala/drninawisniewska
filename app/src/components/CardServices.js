import React from 'react';
import { Link } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
// import { services } from '../../../data/services';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const CardServices = ({
    cardImage,
    cardTitle,
    cardDescription,
    cardPath
}) => {
    // const theme = useTheme();

    // const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    //     defaultMatches: true,
    // });

    return (
        <Box
            className='card-services'
            component={Link}
            to={cardPath}
            display={'block'}
            width={1}
            height={1}
            sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                borderRadius: '12px',
                '&:hover': {
                    // transform: `translateY(-${theme.spacing(1 / 2)})`,
                    boxShadow: '2px 4px 12px rgb(0 0 0 / 8%)'
                },
            }}
        >
            <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{
                    backgroundImage: 'none',
                    boxShadow: '1px 2px 6px rgb(0 0 0 / 4%)',
                    borderRadius: '12px',
                }}
                marginBottom={1}
            >
                <CardMedia
                    title={cardTitle}
                    image={cardImage}
                    sx={{
                        position: 'relative',
                        height: { xs: 240, sm: 340, md: 280, lg: 180 },
                        overflow: 'hidden',
                    }}
                >
                    {/* <Box
                        component={'svg'}
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1921 273"
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            left: 0,
                            bottom: 0,
                            right: 0,
                            zIndex: 1,
                        }}
                    >
                        <polygon
                            fill={theme.palette.background.paper}
                            points="0,273 1921,273 1921,0 "
                        />
                    </Box> */}
                </CardMedia>
                <CardContent className='card-content'>

                    {/* <Typography
                        variant={'h6'}
                        gutterBottom
                        align={'center'}
                        sx={{
                            fontFamily: '"Roboto", sans-serif',
                            textTransform: 'uppercase',
                            letterSpacing: '0.045em;',
                            color: '#444',
                            fontWeight: 400,
                        }}
                    >
                        {cardTitle}
                    </Typography> */}
                    <Typography variant={'h6'} className='card-title'>
                        {cardTitle}
                    </Typography>

                    <Typography
                        // align={'center'}
                        // color={'text.secondary'}
                        // sx={{ fontSize: "14px" }}
                        className='card-description'
                    >
                        {cardDescription}
                    </Typography>
                </CardContent>
                {/* <Box flexGrow={1} /> */}
                <CardActions className='card-actions'
                    sx={{
                        // justifyContent: 'center',
                        // paddingTop: 0
                    }}
                >
                    {/* <Box
                        className="link-outlined-card"
                        marginTop={{ xs: 2, sm: 0 }}
                        width={{ xs: '100%', md: 'auto' }}
                    > */}
                        <Button
                            className='card-link'
                            component={Link}
                            to={cardPath}
                            variant="outline"
                            size="small"
                        >
                            Zobacz więcej
                        </Button>

                        {/* <Button
                            className='card-link'
                            component={Link}
                            // to={cardPath}
                            to={'/prices'}
                            variant="outline"
                            size="small"
                        >
                            Cennik
                        </Button> */}

                    {/* </Box> */}
                </CardActions>
            </Box>
        </Box>
    );
}

export default CardServices;
