import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import CardHeader from '@mui/material/CardHeader';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { red } from '@mui/material/colors';

import CardMedia from '@mui/material/CardMedia';
// import AvatarGroup from '@mui/material/AvatarGroup';
// import Avatar from '@mui/material/Avatar';

const CardSpecialOffer = ({
    cardImage,
    // cardAvatar,
    cardImageVisible,
    cardTitle,
    cardDate,
    cardDescription1,
    cardDescription2,
    cardDescription3,
    cardDescription4
}) => {

    const completeModal = () => {
        const exampleModal = document.getElementById('exampleModal');

        exampleModal.addEventListener('show.bs.modal', event => {
            const button = event.relatedTarget;

            const title = button.getAttribute('data-bs-title');
            const date = button.getAttribute('data-bs-date');
            const description1 = button.getAttribute('data-bs-description-1');
            const description2 = button.getAttribute('data-bs-description-2');
            const description3 = button.getAttribute('data-bs-description-3');
            const description4 = button.getAttribute('data-bs-description-4');
            const image = button.getAttribute('data-bs-image');

            const modalTitle = exampleModal.querySelector('.modal-title');
            const modalDate = exampleModal.querySelector('.modal-date');
            const modalDescription1 = exampleModal.querySelector('.modal-description-1');
            const modalDescription2 = exampleModal.querySelector('.modal-description-2');
            const modalDescription3 = exampleModal.querySelector('.modal-description-3');
            const modalDescription4 = exampleModal.querySelector('.modal-description-4');
            const modalImage = exampleModal.querySelector('.modal-image');

            modalTitle.textContent = `${title}`;
            modalDate.textContent = `${date}`;
            modalDescription1.textContent = `${description1}`;
            modalDescription2.textContent = `${description2}`;
            modalDescription3.textContent = `${description3}`;
            modalDescription4.textContent = `${description4}`;
            modalImage.src = `${image}`;
        })
    }

    useEffect(() => {
        completeModal();
    });

    return (
        <Box
            className='card-special-offer'
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-title={cardTitle}
            data-bs-date={cardDate}
            data-bs-description-1={cardDescription1}
            data-bs-description-2={cardDescription2}
            data-bs-description-3={cardDescription3}
            data-bs-description-4={cardDescription4}
            data-bs-image={cardImage}
        >
            <Card className='card'>
                <CardHeader
                    className='card-header'
                    // avatar={
                    // <Avatar sx={{ bgcolor: '#f8f8f8' }} aria-label="recipe" src={cardAvatar}>
                    //     R
                    // </Avatar>
                    // }
                    title={cardTitle}
                    subheader={cardDate}
                />
                <CardMedia className='card-media'>
                    <Box
                        component={LazyLoadImage}
                        height={1}
                        width={1}
                        src={cardImage}
                        alt={cardTitle}
                        effect='blur'
                        visibleByDefault={cardImageVisible}
                    />
                </CardMedia>
                <CardContent className='card-content'>
                    {/* <Typography
                        variant={'h6'}
                        className='card-title'
                    >
                        {cardTitle}
                    </Typography> */}
                    <Typography className='card-description'>
                        {cardDescription1}
                    </Typography>
                    {/* {cardSpecialist && (
                        <AvatarGroup className='card-avatar-group' max={7}>
                            {cardSpecialist.map((item, index) => (
                                <Avatar
                                    className='card-avatar'
                                    key={index}
                                    src={item}
                                />
                            ))}
                        </AvatarGroup>
                    )} */}
                </CardContent>
                <CardActions className='card-actions'>
                    <Button
                        className='card-link'
                        // component={Link}
                        // to={cardPath}
                        variant='outline'
                        size='small'
                    >
                        Zobacz więcej
                    </Button>
                    {/* <Button
                        className='card-link'
                        component={Link}
                        to={cardPrice}
                        variant='outline'
                        size='small'
                    >
                        Cennik
                    </Button> */}
                </CardActions>
            </Card>
        </Box>
    );
}

export default CardSpecialOffer;
