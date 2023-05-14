import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Image = ({
    imageSrc,
    imageAlt,
    imageHref,
    imageAuthor
}) => {
    const [ imageLoaded, setImageLoaded ] = useState(false);

    return (
        <Box className='image'>
            <Box className='lazy-load-image-wrapper'>
                <LazyLoadImage
                    className='lazy-load-image'
                    height={'100%'}
                    width={'100%'}
                    src={imageSrc}
                    alt={imageAlt}
                    effect='blur'
                    afterLoad={() => setImageLoaded(true)}
                />
            </Box>
            <Box className={`description ${imageLoaded ? 'show' : 'hide'}`}>
                <Typography className='source'>
                    {imageAlt}<span className="dot-divider">&bull;</span>{imageHref ? (
                        <Typography
                            component='a'
                            className='author link'
                            href={imageHref}
                            target='_blank'
                            rel='noreferrer'
                        >
                            {imageAuthor}
                        </Typography>
                    ) : (
                        <Typography
                            variant='span'
                            className='author'
                        >
                            {imageAuthor}
                        </Typography>
                    )}
                </Typography>
            </Box>
        </Box>
    );
}

export default Image;
