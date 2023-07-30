import React, { useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';

const CardSpecialOffer = ({
    cardImage,
    cardImageVisible,
    cardTitle,
    cardDate,
    cardDescription1,
    cardDescription2,
    cardDescription3,
    cardDescription4,
    cardDescription5
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
            const description5 = button.getAttribute('data-bs-description-5');
            const imageSrc = button.getAttribute('data-bs-image-src');
            const imageAlt = button.getAttribute('data-bs-image-alt');

            const modalTitle = exampleModal.querySelector('.modal-title');
            const modalTitleMobile = exampleModal.querySelector('.modal-title-mobile');
            const modalDate = exampleModal.querySelector('.modal-date');
            const modalDateMobile = exampleModal.querySelector('.modal-date-mobile');
            const modalDescription1 = exampleModal.querySelector('.modal-description-1');
            const modalDescription2 = exampleModal.querySelector('.modal-description-2');
            const modalDescription3 = exampleModal.querySelector('.modal-description-3');
            const modalDescription4 = exampleModal.querySelector('.modal-description-4');
            const modalDescription5 = exampleModal.querySelector('.modal-description-5');
            const modalImageSrc = exampleModal.querySelector('.modal-image');
            const modalImageAlt = exampleModal.querySelector('.modal-image');

            modalTitle.textContent = `${title}`;
            modalTitleMobile.textContent = `${titleMobile}`;
            modalDate.textContent = `${date}`;
            modalDateMobile.textContent = `${dateMobile}`;
            modalDescription1.textContent = `${description1}`;
            modalDescription2.textContent = `${description2}`;
            modalDescription3.textContent = `${description3}`;
            modalDescription4.textContent = `${description4}`;
            modalDescription5.textContent = `${description5}`;
            modalImageSrc.src = `${imageSrc}`;
            modalImageAlt.alt = `${imageAlt}`;
        })
    }

    useEffect(() => {
        completeModal();
    });

    return (
        <Box
            className='card-special-offer'
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
            data-bs-description-5={cardDescription5}
            data-bs-image-src={cardImage}
            data-bs-image-alt={cardTitle}
        >
            <Card className='card'>
                <CardHeader
                    className='card-header'
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

export default CardSpecialOffer;
