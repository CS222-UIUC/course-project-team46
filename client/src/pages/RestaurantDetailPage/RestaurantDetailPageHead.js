import React from 'react';
import { Typography, Box, Rating } from '@mui/material';

const RestaurantDetailPageHead = ({ detail }) => {
    return (
        <Box
            sx={{
                height: '50vh',
                backgroundSize: 'cover',
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${detail.restaurant_photo})`,
                display: 'flex',
                alignItems: 'flex-end',
                paddingBottom: 2,
                textAlign: 'left',
                color: 'white',
            }}
        >
            <Box sx={{ marginLeft: 2 }}>
                <Typography variant="h4" component="h1">
                    {detail.restaurant_name}
                </Typography>
                <Rating
                    name={`restaurant-${detail.id}-rating`}
                    defaultValue={detail.restaurant_rating}
                    precision={0.1}
                    readOnly
                />
                <Typography variant="subtitle1">
                    {detail.restaurant_type} | {detail.restaurant_range}
                </Typography>
            </Box>
        </Box>
    );
};

export default RestaurantDetailPageHead;
