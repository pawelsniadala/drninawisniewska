/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMediaQuery from '@mui/material/useMediaQuery';

const CardServicesProposed = ({
    cardImage,
    cardTitle,
    cardDescription,
    cardPath
}) => {
    return (
        <Box
            className='card-services-proposed'
            component={Link}
            to={cardPath}
            display={'block'}
            width={1}
            height={1}
            sx={{
                textDecoration: 'none',
                transition: 'all .2s ease-in-out',
                // '&:hover': {
                //     transform: `translateY(-${theme.spacing(1 / 2)})`,
                // },
            }}
        >
                                        <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={0}
              borderRadius={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                    minWidth: { xs: 1, md: '50%' },
                    '& .lazy-load-image-loaded': {
                        height: 1,
                        display: 'flex !important',
                    },
                }}
              >
                <Box
                    component={LazyLoadImage}
                    height={1}
                    width={1}
                    src={cardImage}
                    alt={cardTitle}
                    effect="blur"
                    sx={{
                        objectFit: 'cover',
                        maxHeight: 120,
                        borderRadius: '8px'
                    }}
                />
              </Box>
                <CardContent className='card-content'>
                    <Typography className='card-title'>
                        {cardTitle}
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
                        endIcon={<ChevronRightIcon />}
                    >
                        Dowiedz się więcej
                    </Button>
                </CardContent>
            </Box>
        </Box>
    )
};

export default CardServicesProposed;
