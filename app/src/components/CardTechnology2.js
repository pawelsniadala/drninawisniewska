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

const CardTechnology2 = ({
    cardMode,
    cardImage,
    cardTitle,
    cardPath,
}) => {
    return (
        <Box
            className='card-technology-2'
            component={Link}
            to={cardPath}
        >
            <Card className={`card ${cardMode}`}>
                <CardMedia className='card-media'>
                    <Box
                        className='card-image'
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
                </CardContent>
            </Card>
        </Box>
    );
}

export default CardTechnology2;
