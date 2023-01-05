import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

const CardSpecialOfferProposed = ({
    cardImage,
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
            const titleMobile = button.getAttribute('data-bs-title-mobile');
            const date = button.getAttribute('data-bs-date');
            const dateMobile = button.getAttribute('data-bs-date-mobile');
            const description1 = button.getAttribute('data-bs-description-1');
            const description2 = button.getAttribute('data-bs-description-2');
            const description3 = button.getAttribute('data-bs-description-3');
            const description4 = button.getAttribute('data-bs-description-4');
            const image = button.getAttribute('data-bs-image');

            const modalTitle = exampleModal.querySelector('.modal-title');
            const modalTitleMobile = exampleModal.querySelector('.modal-title-mobile');
            const modalDate = exampleModal.querySelector('.modal-date');
            const modalDateMobile = exampleModal.querySelector('.modal-date-mobile');
            const modalDescription1 = exampleModal.querySelector('.modal-description-1');
            const modalDescription2 = exampleModal.querySelector('.modal-description-2');
            const modalDescription3 = exampleModal.querySelector('.modal-description-3');
            const modalDescription4 = exampleModal.querySelector('.modal-description-4');
            const modalImage = exampleModal.querySelector('.modal-image');

            modalTitle.textContent = `${title}`;
            modalTitleMobile.textContent = `${titleMobile}`;
            modalDate.textContent = `${date}`;
            modalDateMobile.textContent = `${dateMobile}`;
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
            className='card-special-offer-proposed'
            data-bs-toggle='modal'
            data-bs-target='#exampleModal'
            data-bs-title={cardTitle}
            data-bs-title-mobile={cardTitle}
            data-bs-date={cardDate}
            data-bs-date-mobile={cardDate}
            data-bs-description-1={cardDescription1}
            data-bs-description-2={cardDescription2}
            data-bs-description-3={cardDescription3}
            data-bs-description-4={cardDescription4}
            data-bs-image={cardImage}
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
                        {cardDescription1}
                    </Typography>
                    <Button
                        className='card-link'
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

export default CardSpecialOfferProposed;
