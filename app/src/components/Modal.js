import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Modal = () => {
    return (
        <Box className='modal' id='exampleModal' tabIndex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
            <Box className='modal-dialog modal-dialog-centered modal-xl'>
                <Box className='modal-content'>
                    <Box className='modal-body'>
                        <Box className='image-wrapper'>
                            <Box
                                className='modal-image'
                                component={LazyLoadImage}
                                height={1}
                                width={1}
                                src=''
                                alt='...'
                                effect='blur'
                                visibleByDefault='false'
                            />
                        </Box>
                        <Box className='content-wrapper'>
                            <Box className='modal-header'>
                                <Box>
                                    <Box className='modal-title' id='exampleModalLabel'></Box>
                                    <Box className='modal-date' id='exampleModalLabel'></Box>
                                </Box>
                                <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                            </Box>
                            <Box className='description-wrapper'>
                                <Typography className='modal-description-1'></Typography>
                                <Typography className='modal-description-2'></Typography>
                                <Typography className='modal-description-3'></Typography>
                                <Typography className='modal-description-4'></Typography>
                            </Box>
                            <Box className='modal-footer'>
                                <Box
                                    className='link-contained-close'
                                    width='auto'
                                >
                                    <Button
                                        variant='contained'
                                        data-bs-dismiss='modal'
                                        color='primary'
                                        size='large'
                                        type='submit'
                                        id='liveToastBtn'
                                    >
                                        Zamknij
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Modal;
