import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const CardTeam = ({
    cardPath,
    cardImage,
    cardBackground,
    cardTitle,
    cardName,
    cardSpeciality
}) => {
    return (
        <Box
            className='card-team'
            component={Link}
            to={cardPath}
        >
            <Card className='card'>
                {cardBackground ? (
                    <Box
                        className='card-background'
                        component={LazyLoadImage}
                        height={1}
                        width={1}
                        src={cardBackground}
                        alt={cardTitle}
                        effect='none'
                    />
                ) : (
                    <Box className='card-background-color' />
                )}
                <Box className='card-image-background'>
                    <Box
                        className='card-image'
                        component={LazyLoadImage}
                        src={cardImage}
                        alt={cardTitle}
                        effect='none'
                    />
                </Box>
                <CardContent className='card-content'>
                    <Typography
                        className='card-name'
                        title={cardName}>
                        {cardName}
                    </Typography>
                    <Typography
                        className='card-speciality'
                        title={cardSpeciality}>
                        {cardSpeciality}
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CardTeam;
