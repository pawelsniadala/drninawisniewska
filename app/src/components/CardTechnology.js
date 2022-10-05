import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const badge = (title) => (
    <span className='badge'>
        {title}
    </span>
);

const CardTechnology = ({
    cardImage,
    cardTitle,
    cardPath,
    cardBadge,
}) => {
    return (
        <Box
            className='card-technology'
            component={Link}
            to={cardPath}
        >
            <Card className='card'>
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
                    {cardBadge && (
                        badge(cardBadge)
                    )}
                </CardContent>
            </Card>
        </Box>
    );
}

export default CardTechnology;
