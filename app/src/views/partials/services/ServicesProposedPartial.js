import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Breadcrumbs from '@mui/material/Breadcrumbs';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import Avatar from '@mui/material/Avatar';
// import Grid from '@mui/material/Grid';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// import Container from '../../../components/Container';
import CardServicesProposed from '../../../components/CardServicesProposed';

import { services } from '../../../data/services';

const ServicesProposedPartial = () => {
    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(services);
    return (
        <Box className='proposed-services'>
            <Box className='card-wrapper services-proposed'>
                {services.length ? services.filter(item => item.title !== 'Dermatologia').map((item, index) => (
                    <CardServicesProposed
                        key={index}
                        cardTitle={item.title}
                        cardDescription={item.description}
                        cardImage={item.image}
                        cardPath={item.path}
                    />
                )) : (
                    <Box>Brak danych</Box>
                )}
            </Box>
        </Box>
    );
};

export default ServicesProposedPartial;
