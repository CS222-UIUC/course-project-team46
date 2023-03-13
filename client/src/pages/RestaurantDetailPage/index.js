import './RestaurantDetailPage.css';

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppBar from '../../components/AppBar'

import { Box, Rating, Typography } from '@mui/material';

function RestaurantDetailPage(props) {
    const { id } = useParams();
    const { detailData } = props;
    // const [restaurant, setRestaurant] = useState(null);

    const restaurant = detailData.find((item) => item.restaurant_id === Number(id));

    /*
    useEffect(() => {
      async function fetchRestaurant() {
        // Fetch the restaurant data from the backend
        const response = await fetch(`/api/restaurant/${id}`);
        const data = await response.json();
        setRestaurant(data);
      }
  
      if (!restaurant) {
        // Fetch the restaurant data if it doesn't exist
        fetchRestaurant();
      }
    }, [id, restaurant]);
  
    function handleGoBack() {
      // Navigate back to the main page
      window.history.back();
    }
    */
  
    if (!restaurant) {
      // Render a loading spinner or message if the data is still loading
      return <div>Sorry, this restaurant does not exist.</div>;
    }

  return (
    <div>
      <AppBar 
                />
    <h1>{restaurant.restaurant_name}</h1>

    <div className="restaurant-details">
        <div className="restaurant-address">
            <Typography variant="body1">{restaurant.address}</Typography>
        </div>
        <div className="restaurant-rating">
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Rating
                name="restaurant-rating"
                value={restaurant.restaurant_rating}
                precision={0.1}
                readOnly
            />
            <Typography variant="body1" sx={{ ml: 1 }}>
                {restaurant.restaurant_rating.toFixed(1)}
            </Typography>
            </Box>
        </div>
        <div className="restaurant-type">
            <Typography variant="body1">{restaurant.restaurant_type}</Typography>
        </div>
        <div className="restaurant-avg-price">
            <Typography variant="body1">{restaurant.restaurant_avg_price}</Typography>
        </div>
    </div>

    <h2>Menu</h2>

    {restaurant.restaurant_menu && restaurant.restaurant_menu.length > 0 ? (
        <ul>
            {restaurant.restaurant_menu.map((item) => (
            <li key={item.dish_id}>
                {item.dish_name} - {item.dish_price} - {item.recommand_numebr}/5.0
            </li>
            ))}
        </ul>
    ) : (
        <div>No menu available.</div>
    )}
    
  </div>
  );
}

export default RestaurantDetailPage;
