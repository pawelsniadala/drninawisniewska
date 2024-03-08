import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
// import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';
// import { Stack } from '@mui/system';
// import { Divider } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';

// import { LazyLoadImage } from 'react-lazy-load-image-component';

// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import AssignmentIcon from '@mui/icons-material/Assignment';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import DateRangeIcon from '@mui/icons-material/DateRange';
import DescriptionIcon from '@mui/icons-material/Description';
// import SubjectIcon from '@mui/icons-material/Subject';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ApartmentIcon from '@mui/icons-material/Apartment';

import Badge from './Badge';

const CardCareer = ({
    cardTitle,
    cardLocation,
    cardDate,
    cardAgreement,
    cardPosition,
    cardType,
    cardPlace,
    cardPath,
    cardImage,
    cardStatus
}) => {
    const setBadgeMode = (cardStatus) => {
        switch (cardStatus) {
            case 'Pilna':
                return 'warning';
            case 'Aktualna':
                return 'warning';
            case 'Wstrzymana':
                return 'warning';
            default:
                return 'default';
        }
    };

    return (
        <Box className='card-career'>
            <Card className='card'>
                <CardMedia className='card-media'>
                    <Box
                        component={LazyLoadImage}
                        height={1}
                        width={1}
                        src={cardImage}
                        alt={cardTitle}
                        effect='blur'
                        // visibleByDefault={cardImageVisible}
                    />
                </CardMedia>
                <CardContent className='card-content'>

                    <Box className='header'>
                        <Typography
                            variant={'h6'}
                            className='card-title'
                        >
                            {cardTitle}
                        </Typography>
                        {cardStatus && (
                            <Box>
                                <Badge
                                    badgeMode={setBadgeMode(cardStatus)}
                                    badgeContent={cardStatus}
                                />
                            </Box>
                        )}
                    </Box>

                    {/* <Stack className='stack location'>
                        <Typography className='typography location'>
                            {cardLocation}
                        </Typography>
                    </Stack>

                    <Stack className='stack date'>
                        <Typography className='typography date'>
                            {cardDate}
                        </Typography>
                    </Stack> */}

                    {/* <Divider className='divider' sx={{ borderStyle: 'dashed', my: 2 }} /> */}

                    <Grid item xs={12} className='grid'>
                        <Box
                            component={ListItem}
                            disableGutters
                            width={'auto'}
                            padding={0}
                        >
                            <Box
                                className='list-item-avatar'
                                component={ListItemAvatar}
                                minWidth={'auto !important'}
                                marginRight={2}
                            >
                                <Box
                                    component={Avatar}
                                    sx={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                    width={20}
                                    height={20}
                                >
                                    <FmdGoodIcon className='icon' />
                                </Box>
                            </Box>
                            <ListItemText primary={cardLocation} className='list-item-text'/>
                        </Box>

                        <Box
                            component={ListItem}
                            disableGutters
                            width={'auto'}
                            padding={0}
                        >
                            <Box
                                className='list-item-avatar'
                                component={ListItemAvatar}
                                minWidth={'auto !important'}
                                marginRight={2}
                            >
                                <Box
                                    component={Avatar}
                                    sx={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                    width={20}
                                    height={20}
                                >
                                    <DateRangeIcon className='icon' />
                                </Box>
                            </Box>
                            <ListItemText primary={cardDate} className='list-item-text'/>
                        </Box>

                        <Box
                            component={ListItem}
                            disableGutters
                            width={'auto'}
                            padding={0}
                        >
                            <Box
                                className='list-item-avatar'
                                component={ListItemAvatar}
                                minWidth={'auto !important'}
                                marginRight={2}
                            >
                                <Box
                                    component={Avatar}
                                    sx={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                    width={20}
                                    height={20}
                                >
                                    <DescriptionIcon className='icon' />
                                </Box>
                            </Box>
                            <ListItemText primary={cardAgreement} className='list-item-text'/>
                        </Box>

                        <Box
                            component={ListItem}
                            disableGutters
                            width={'auto'}
                            padding={0}
                        >
                            <Box
                                className='list-item-avatar'
                                component={ListItemAvatar}
                                minWidth={'auto !important'}
                                marginRight={2}
                            >
                                <Box
                                    component={Avatar}
                                    sx={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                    width={20}
                                    height={20}
                                >
                                    <SignalCellularAltIcon className='icon' />
                                </Box>
                            </Box>
                            <ListItemText primary={cardPosition} className='list-item-text'/>
                        </Box>

                        <Box
                            component={ListItem}
                            disableGutters
                            width={'auto'}
                            padding={0}
                        >
                            <Box
                                className='list-item-avatar'
                                component={ListItemAvatar}
                                minWidth={'auto !important'}
                                marginRight={2}
                            >
                                <Box
                                    component={Avatar}
                                    sx={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                    width={20}
                                    height={20}
                                >
                                    <TimelapseIcon className='icon' />
                                </Box>
                            </Box>
                            <ListItemText primary={cardType} className='list-item-text'/>
                        </Box>

                        <Box
                            component={ListItem}
                            disableGutters
                            width={'auto'}
                            padding={0}
                        >
                            <Box
                                className='list-item-avatar'
                                component={ListItemAvatar}
                                minWidth={'auto !important'}
                                marginRight={2}
                            >
                                <Box
                                    component={Avatar}
                                    sx={{ backgroundImage: 'linear-gradient(45deg, #D29A3E 0%, #DBAF62 51%, #DDBD83 100%)' }}
                                    width={20}
                                    height={20}
                                >
                                    <ApartmentIcon className='icon' />
                                </Box>
                            </Box>
                            <ListItemText primary={cardPlace} className='list-item-text'/>
                        </Box>
                    </Grid>
                </CardContent>
                {/* <CardActions className='card-actions'>
                    <Button
                        className='card-link'
                        component={Link}
                        to={cardPath}
                        variant='outline'
                        size='small'
                    >
                        Zobacz więcej
                    </Button>
                </CardActions> */}
                <Link to={cardPath} className='stretched-link' />
            </Card>
        </Box>
    );
}

export default CardCareer;
