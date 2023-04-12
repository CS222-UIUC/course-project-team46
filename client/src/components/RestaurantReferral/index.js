import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

import RestaurantReferralCard from '../RestaurantReferralCard';

function RestaurantReferral({ restaurantDetails }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % restaurantDetails.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
        currentIndex === 0 ? restaurantDetails.length - 1 : currentIndex - 1
        );
    };

    const getVisibleCards = () => {
        const visibleIndices = [
            currentIndex,
            (currentIndex + 1) % restaurantDetails.length,
            (currentIndex + 2) % restaurantDetails.length,
        ];

        return visibleIndices.map((index) => restaurantDetails[index]);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom align="left">
                Recommended Restaurants
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton onClick={prevSlide}>
                    <ArrowBackIosIcon />
                </IconButton>

                <Box sx={{ display: 'flex', overflow: 'hidden', width: '100%' }}>
                    {getVisibleCards().map((detail, index) => (
                    <Box
                        key={index}
                        sx={{
                        width: '33.33%',
                        }}
                    >
                        <RestaurantReferralCard restaurantData={detail} />
                    </Box>
                    ))}
                </Box>

                <IconButton onClick={nextSlide}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>
        </Box>
        
    );
}

export default RestaurantReferral;
