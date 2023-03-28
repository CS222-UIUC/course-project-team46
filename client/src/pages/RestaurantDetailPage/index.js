import './RestaurantDetailPage.css';

// import React, { useEffect, useState } from 'react';
import React from 'react';
//import { useParams } from 'react-router-dom';
import AppBar from '../../components/AppBar'
import Commits from '../../components/Commits'

import { Box, Grid } from '@mui/material';

import RestaurantDetailPageHead from './RestaurantDetailPageHead';
import RestaurantDetailPageTabs from './RestaurantDetailPageTabs';

function RestaurantDetailPage(props) {
    //const { id } = useParams();
    //const { detailData } = props;
    // const [restaurant, setRestaurant] = useState(null);

    //const restaurant = detailData.find((item) => item.restaurant_id === Number(id));

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
  /*
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
  */
    const detail = {
        "id": 1,
        "name": "Baxters American Grille",
        "site": "https://baxtersgrille.com/",
        "type": "American restaurant",
        "phone": "+1 217-239-9299",
        "full_address": "100 Trade Ctr Dr, Champaign, IL 61820",
        "latitude": 40.0971435,
        "longitude": -88.2457753,
        "rating": 4.4,
        "photo": "https://lh5.googleusercontent.com/p/AF1QipMgsdJy7UC5uMq2j5O2PNltAHmvUlDyjq9A9xOl=w800-h500-k-no",
        "working_hours": {
            "Sunday": "3-8 PM",
            "Monday": "11 AM-9 PM",
            "Tuesday": "11 AM-9 PM",
            "Wednesday": "11 AM-9 PM",
            "Thursday": "11 AM-9 PM",
            "Friday": "11 AM-10 PM",
            "Saturday": "3-10 PM"
        },
        "range": "$$",
        "logo": "https://lh3.googleusercontent.com/-I9sIxSmBT1w/AAAAAAAAAAI/AAAAAAAAAAA/p62QT6Cfr18/s44-p-k-no-ns-nd/photo.jpg",
        "description": "Steaks & American entrees plus wine & cocktails in a relaxed, art-decorated space with live music.",
        "booking_appointment_link": "https://www.opentable.com/restaurant/profile/267232?ref=1068"
    }
    const menu=[
        {
            "dish_id": 1,
            "dish_name": "Bruschette with Tomato",
            "dish_price": 26.89,
            "recommand_numebr": 4.7
        },
        {
            "dish_id": 2,
            "dish_name": "Salmon nigiri",
            "dish_price": 26.72,
            "recommand_numebr": 3.9
        },
        {
            "dish_id": 3,
            "dish_name": "Pasta Carbonara",
            "dish_price": 37.57,
            "recommand_numebr": 2.4
        }]

    const commits=[
        {
            "commits_id": 1,
            "user_id": 123,
            "detail": "this is a commit"
        },
        {
            "commits_id": 2,
            "user_id": 123,
            "detail": "this is another commit"
        },
        {
            "commits_id": 3,
            "user_id": 123,
            "detail": "Hello"
        }
    ]

    return (
        <div>
            <AppBar />
            <Box sx={{ mt: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <RestaurantDetailPageHead detail={detail} />
                        <RestaurantDetailPageTabs detail={detail} menu={menu} />
                        <Commits commitList={commits} />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Box>
        </div>
    );
}

export default RestaurantDetailPage;
