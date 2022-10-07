import React from 'react';
import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Avatar } from '@mui/material';
import { Stack } from '@mui/material';
// import { IconButton } from '@mui/material';
// import { Chip } from '@mui/material';
// import { Divider } from '@mui/material';
// import { Switch } from '@mui/material';
// import { ListItem } from '@mui/material';
// import Button from '@mui/material/Button';

const CardTeamProposed = ({
    cardPath,
    cardImage,
    cardBackground,
    // cardTitle,
    cardName,
    cardSpeciality,
    cardDescription,
    cardServices
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
                        // variant="rounded"
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
