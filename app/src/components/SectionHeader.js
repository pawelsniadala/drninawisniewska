import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const SectionHeader = ({
    sectionTitle,
    sectionHeader,
    sectionSubheader,
    sectionLinkText,
    sectionLinkPath,
    sectionDescription,
    sectionWrapperClass
}) => (
    <Box className={(`section-header ${sectionWrapperClass}`).trim()}>
        <Typography
            className='title'
            data-aos={'fade-right'}
        >
            {sectionTitle}
        </Typography>
        <Typography
            className='header'
            variant='h4'
            data-aos={'fade-right'}
        >
            {sectionHeader}
        </Typography>
        <Typography
            variant='h6'
            className='subheader'
            data-aos={'fade-right'}
        >
            {sectionSubheader}
        </Typography>
        {sectionDescription}
        <Box
            className='link-contained'
            display='flex'
            alignItems={'center'}
            justifyContent={'center'}
            marginTop={2}
            data-aos={'fade-in'}
        >
            <Box
                className='link-contained-more'
                width='auto'
            >
                <Button
                    component={Link}
                    to={sectionLinkPath}
                    variant='contained'
                    color='primary'
                    size='large'
                    endIcon={<ArrowForwardIcon />}
                >
                    {sectionLinkText}
                </Button>
            </Box>
        </Box>
    </Box>
);

export default SectionHeader;
