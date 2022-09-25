import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollArrow = () => {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <Box
            className='scrollup'
            onClick={scrollTop}
            style={{ display: showScroll ? 'flex' : 'none' }}
        >
            <Button variant='contained'>
                <KeyboardDoubleArrowUpIcon />
            </Button>
        </Box>
    );
}

export default ScrollArrow;
