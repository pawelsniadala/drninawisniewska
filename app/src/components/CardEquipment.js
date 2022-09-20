import React from 'react';
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Tooltip from '@mui/material/Tooltip';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import FacebookSvg from '../assets/svg/FacebookSvg';
import TwitterSvg from '../assets/svg/TwitterSvg';
import InstagramSvg from '../assets/svg/InstagramSvg';


const CardEquipment = ({
    cardPath,
    cardType,
    cardImage,
    cardName,
    cardDescription,
    cardEvenNumbers
}) => {
    return (
        <Box
            className={cardType}
            component={Link}
            to={cardPath}
        >
            <Card className='card'>
                {cardEvenNumbers && (
                    <CardMedia
                        component="img"
                        className='card-media'
                        image={cardImage}
                        alt={cardName}
                    />
                )}
                <CardContent className='card-content'>
                    <Typography
                        className='card-name'
                        title={cardName}>
                        {cardName}
                    </Typography>
                    <Typography className='card-description'>
                        {cardDescription}
                    </Typography>

                    <Button
                        className='card-link'
                        component={Link}
                        to={cardPath}
                        variant="outline"
                        size="small"
                    >
                        Zobacz więcej
                    </Button>

                </CardContent>
                {!cardEvenNumbers && (
                    <CardMedia
                        component="img"
                        className='card-media'
                        image={cardImage}
                        alt={cardName}
                    />
                )}
            </Card>
        </Box>
    );
}

export default CardEquipment;
