import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

const ListBulleted = ({
    ListBulletedItem,
    ListBulletedStyle,
    ListBulletedIcon
}) => {
    return (
        <Grid item xs={12}>
            <Box
                component={ListItem}
                disableGutters
                width={'auto'}
                padding={0}
            >
                <Box
                    className='list-item-avatar'
                    component={ListItemAvatar}
                    minWidth={'auto !important'}
                    marginRight={2}
                >
                    <Box
                        component={Avatar}
                        sx={ListBulletedStyle}
                        width={20}
                        height={20}
                    >
                        {!ListBulletedIcon ? (
                            <svg
                                width={12}
                                height={12}
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                            >
                                <path
                                    fillRule='evenodd'
                                    d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                    clipRule='evenodd'
                                />
                            </svg>
                        ) : ListBulletedIcon}
                    </Box>
                </Box>
                <ListItemText primary={ListBulletedItem} className='list-item-text'/>
            </Box>
        </Grid>
    );
}

export default ListBulleted;
