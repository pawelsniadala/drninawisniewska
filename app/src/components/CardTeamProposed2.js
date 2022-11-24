import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const CardTeamProposed2 = ({
    cardImage,
    cardTitle,
    cardSpeciality,
    cardExperience,
    cardPath
}) => {
    return (
        <Box
            className='card-team-proposed-2'
            component={Link}
            to={cardPath}
            display={'block'}
            width={1}
            height={1}
            sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
            }}
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
                    <Typography className='card-title'>
                        {cardTitle}
                    </Typography>
                    <Typography className='card-description'>
                        <Typography variant='span' className='card-speciality'>
                            {cardSpeciality}
                        </Typography>
                        <Typography variant='span' className='card-experience'>
                            {cardExperience}
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
            </Card>
        </Box>
    );
}

export default CardTeamProposed2;
