import React from 'react';
import Box from '@mui/material/Box';
import InfoIcon from '@mui/icons-material/Info';

export const Toast = () => (
    <Box className='toast-container position-fixed top-0 end-0'>
        <Box className='toast align-items-center border-0'
            id='dynamicToast'
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
            data-bs-delay='5000'
        >
            <Box className='d-flex'>
                <Box className='toast-body'>
                    <InfoIcon />
                    <Box className='toast-text'></Box>
                </Box>
                {/* <button type='button'
                    className='btn-close btn-close-white me-2 m-auto'
                    data-bs-dismiss='toast'
                    aria-label='Close'
                /> */}
            </Box>
        </Box>
    </Box>
);

export default Toast;
