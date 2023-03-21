import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Avatar } from '@mui/material';
import { Stack } from '@mui/material';

const CardTeamProposed = ({
    cardPath,
    cardImage,
    cardName,
    cardSpeciality,
    cardDescription
}) => {
    return (
        <Box
            className='card-team-proposed'
            component={Link}
            to={cardPath}
        >
            <Card className='card'>
                <CardContent className='card-content'>
                    <Avatar
                        className='avatar'
                        src={cardImage}
                    />
                    <Stack spacing={0.5}>
                        <Typography className='card-title'>
                            {cardName}
                        </Typography>
                        <Typography className='card-speciality'>
                            {cardSpeciality}
                        </Typography>
                        <Typography className='card-description'>
                            {cardDescription}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CardTeamProposed;
