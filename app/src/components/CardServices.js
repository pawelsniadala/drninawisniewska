import React from 'react';
import { Link } from "react-router-dom";
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

const users = [
    'https://assets.maccarianagency.com/avatars/img1.jpg',
    // 'https://assets.maccarianagency.com/avatars/img2.jpg',
    // 'https://assets.maccarianagency.com/avatars/img3.jpg',
    // 'https://assets.maccarianagency.com/avatars/img4.jpg',
    // 'https://assets.maccarianagency.com/avatars/img5.jpg',
  ];

const CardServices = ({
    cardName,
    cardImage,
    cardTitle,
    cardDescription,
    cardSpecialist,
    cardMorePath,
    cardPricePath
}) => {
    return (
        <Box
            className={cardName}
            component={Link}
            to={cardMorePath}
            display={'block'}
            width={1}
            height={1}
            sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                borderRadius: '8px',
                '&:hover': {
                    boxShadow: '2px 4px 12px rgb(0 0 0 / 8%)'
                },
            }}
        >
            <Box
                component={Card}
                width={1}
                height={1}
                display={'flex'}
                flexDirection={'column'}
                marginBottom={1}
                sx={{
                    backgroundImage: 'none',
                    boxShadow: '1px 2px 6px rgb(0 0 0 / 4%)',
                    borderRadius: '8px',
                }}
            >
                <CardMedia
                    className='card-media'
                    title={cardTitle}
                    // image={cardImage}
                    sx={{
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        component={LazyLoadImage}
                        height={1}
                        width={1}
                        src={cardImage}
                        alt={cardTitle}
                        effect="blur"
                    />
                </CardMedia>
                <CardContent className='card-content'>
                    <Typography variant={'h6'} className='card-title'>
                        {cardTitle}
                    </Typography>
                    <Typography className='card-description'>
                        {cardDescription}
                    </Typography>
                    {cardSpecialist && (
                        <AvatarGroup className='card-avatar-group' max={4}>
                            {cardSpecialist.map((item, index) => (
                                <Avatar key={index} src={item} />
                            ))}
                        </AvatarGroup>
                    )}
                </CardContent>
                <CardActions className='card-actions'>
                    <Button
                        className='card-link'
                        component={Link}
                        to={cardMorePath}
                        variant="outline"
                        size="small"
                    >
                        Zobacz więcej
                    </Button>
                    <Button
                        className='card-link'
                        component={Link}
                        to={cardPricePath}
                        variant="outline"
                        size="small"
                    >
                        Cennik
                    </Button>
                </CardActions>
            </Box>
        </Box>
    );
}

export default CardServices;
