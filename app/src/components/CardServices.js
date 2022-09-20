import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import AvatarGroup from '@mui/material/AvatarGroup';
import Avatar from '@mui/material/Avatar';

const CardServices = ({
    cardImage,
    cardTitle,
    cardDescription,
    cardSpecialist,
    cardPath,
    cardPrice
}) => {
    return (
        <Box
            className='card-services'
            component={Link}
            to={cardPath}
        >
            <Card className='card'>
                <CardMedia className='card-media'>
                    <Box
                        component={LazyLoadImage}
                        height={1}
                        width={1}
                        src={cardImage}
                        alt={cardTitle}
                        effect='blur'
                    />
                </CardMedia>
                <CardContent className='card-content'>
                    <Typography
                        variant={'h6'}
                        className='card-title'
                    >
                        {cardTitle}
                    </Typography>
                    <Typography className='card-description'>
                        {cardDescription}
                    </Typography>
                    {cardSpecialist && (
                        <AvatarGroup className='card-avatar-group' max={4}>
                            {cardSpecialist.map((item, index) => (
                                <Avatar
                                    className='card-avatar'
                                    key={index}
                                    src={item}
                                />
                            ))}
                        </AvatarGroup>
                    )}
                </CardContent>
                <CardActions className='card-actions'>
                    <Button
                        className='card-link'
                        component={Link}
                        to={cardPath}
                        variant='outline'
                        size='small'
                    >
                        Zobacz więcej
                    </Button>
                    <Button
                        className='card-link'
                        component={Link}
                        to={cardPrice}
                        variant='outline'
                        size='small'
                    >
                        Cennik
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}

export default CardServices;
