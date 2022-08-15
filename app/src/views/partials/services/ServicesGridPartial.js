import React from 'react';
import { useTheme } from '@mui/material/styles';
import { services } from '../../../data/services';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

const ServicesGridPartial = () => {
    const theme = useTheme();
    return (
        <Box>
            <Grid container spacing={4}>
                {services.map((item, i) => (
                    <Grid item xs={12} sm={6} md={4} xl={3} key={i}>
                        <Box
                            component={'a'}
                            href={''}
                            display={'block'}
                            width={1}
                            height={1}
                            sx={{
                                textDecoration: 'none',
                                transition: 'all .2s ease-in-out',
                                '&:hover': {
                                transform: `translateY(-${theme.spacing(1 / 2)})`,
                                },
                            }}
                        >
                            <Box
                                component={Card}
                                width={1}
                                height={1}
                                display={'flex'}
                                flexDirection={'column'}
                                sx={{ backgroundImage: 'none' }}
                            >
                                <CardMedia
                                    title={item.title}
                                    image={item.media}
                                    sx={{
                                        position: 'relative',
                                        height: { xs: 240, sm: 340, md: 280 },
                                        overflow: 'hidden',
                                    }}
                                >
                                    <Box
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
                                    </Box>
                                    <Box
                                        display={'flex'}
                                        justifyContent={'space-between'}
                                        position={'absolute'}
                                        bottom={0}
                                        padding={2}
                                        width={1}
                                        zIndex={2}
                                    >
                                    </Box>
                                </CardMedia>
                                <CardContent>
                                    <Typography
                                        variant={'h6'}
                                        gutterBottom
                                        align={'left'}
                                        sx={{ fontWeight: 700 }}
                                    >
                                        {item.title}
                                    </Typography>
                                    {/* <Typography align={'left'} color={'text.secondary'}>
                                        {item.description}
                                    </Typography> */}
                                </CardContent>
                                <Box flexGrow={1} />
                                {/* <CardActions sx={{ justifyContent: 'flex-end' }}>
                                    <Button>Learn more</Button>
                                </CardActions> */}
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ServicesGridPartial;
