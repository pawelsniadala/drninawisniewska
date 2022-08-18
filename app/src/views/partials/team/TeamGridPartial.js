import React from 'react';
// import { useTheme } from '@mui/material/styles';
import { team } from '../../../data/team';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';

const TeamGridPartial = () => {
    return (
        <Box>
            <Grid
                container
                spacing={4}
            >
                {team.map((item, i) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        xl={3}
                        key={i}
                    >
                        <Card
                            sx={{
                                boxShadow: 0,
                                background: 'transparent',
                                backgroundImage: 'none',
                                borderRadius: '8px'
                            }}
                        >
                            <Box
                                component={CardMedia}
                                borderRadius={2}
                                width={1}
                                height={1}
                                minHeight={320}
                                image={item.avatar}
                            />
                            <Box
                                component={CardContent}
                                bgcolor={'transparent'}
                                marginTop={-5}
                            >
                                <Box
                                    component={Card}
                                    sx={{
                                        boxShadow: '0 3px 6px 0 rgb(140 152 164 / 25%)',
                                        borderRadius: '8px'
                                    }}
                                >
                                    <CardContent>
                                        <ListItemText
                                            primary={item.name}
                                            secondary={item.title}
                                        />
                                    </CardContent>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default TeamGridPartial;
