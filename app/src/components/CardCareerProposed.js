import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const CardCareerProposed = ({
    cardTitle,
    cardLocation,
    cardDate,
    cardAgreement,
    cardPosition,
    cardType,
    cardPlace,
    cardPath,
    cardImage,
}) => {
    return (
        <Box
            className='card-career-proposed'
            display={'block'}
            width={1}
            height={1}
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
                        effect='none'
                    />
                </CardMedia>
                <CardContent className='card-content'>
                    <Typography className='card-title'>
                        {cardTitle}
                    </Typography>
                    <Typography className='card-description'>
                        <Typography variant='span' className='card-speciality'>
                            {cardDate}, {cardLocation}
                        </Typography>
                        <Typography variant='span' className='card-experience'>
                            {cardType}, {cardAgreement}
                        </Typography>
                        <Typography variant='span' className='card-experience'>
                            {cardPosition}, {cardType}, {cardPlace}
                        </Typography>
                    </Typography>
                    <Button
                        className='card-link'
                        component={Link}
                        to={cardPath}
                        variant='outline'
                        size='small'
                    >
                        Zobacz więcej
                    </Button>
                </CardContent>
                <Link to={cardPath} className='stretched-link' />
            </Card>
        </Box>
    );
}

export default CardCareerProposed;
