import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { Avatar, CardActions } from '@mui/material';
import { Stack } from '@mui/material';
import { Chip } from '@mui/material';
import { Divider } from '@mui/material';

const CardTeam = ({
    cardPath,
    cardImage,
    cardBackground,
    cardTitle,
    cardName,
    cardSpeciality,
    cardDescription,
    cardServices
}) => {
    return (
        <Box
            className='card-team'
            component={Link}
            to={cardPath}
        >
            <Card className='card'>
                <Box sx={{ p: '15px', display: 'flex', justifyContent: 'start', gap: '15px' }}>
                    <Avatar
                        className='avatar'
                        variant='rounded'
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
                </Box>
                <Box style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                    <Divider />
                </Box>
                <CardActions className='card-actions'>
                    <Box className='link-wrapper'>
                        {cardServices && cardServices.map((item, index) => (
                            <Box key={index}>
                                <Link className='link' to={item.path}>
                                    <Chip className='chip' label={item.text} size='small' />
                                </Link>
                            </Box>
                        ))}
                    </Box>
                </CardActions>
            </Card>
        </Box>
    );
}

export default CardTeam;
