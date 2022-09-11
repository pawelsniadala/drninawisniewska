import React from 'react';
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Tooltip from '@mui/material/Tooltip';
import CardActions from '@mui/material/CardActions';

import FacebookSvg from '../assets/svg/FacebookSvg';
import TwitterSvg from '../assets/svg/TwitterSvg';
import InstagramSvg from '../assets/svg/InstagramSvg';


const CardTeam = ({
    cardPath,
    cardType,
    cardImage,
    cardBackground,
    cardTitle,
    cardName,
    cardSpeciality
}) => {
    return (
        <Box
            className={cardType}
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
                        effect="blur"
                    />
                ) : (
                    <Box className='card-background-color' />
                )}
                 <Box
                    className='card-image'
                    component={LazyLoadImage}
                    src={cardImage}
                    alt={cardTitle}
                    effect="blur"
                />
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
                <CardActions className='card-actions'>
                    <Tooltip title="Facebook">
                        <a key="" href="https://www.facebook.com/profile.php?id=100063736802328"
                            className="nav-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FacebookSvg width="18px" height="18px" color="#d6a44d" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Twitter">
                        <a key="" href="https://www.facebook.com/profile.php?id=100063736802328"
                            className="nav-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <TwitterSvg width="18px" height="18px" color="#d6a44d" />
                        </a>
                    </Tooltip>
                    <Tooltip title="Instagram">
                        <a key="" href="https://www.facebook.com/profile.php?id=100063736802328"
                            className="nav-link"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <InstagramSvg width="18px" height="18px" color="#d6a44d" />
                        </a>
                    </Tooltip>
                </CardActions>
            </Card>
        </Box>
    );
}

export default CardTeam;