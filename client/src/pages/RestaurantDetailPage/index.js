import './RestaurantDetailPage.css';

// import React, { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AppBar from '../../components/AppBar'
import Commits from '../../components/Commits'

import { Box, Grid } from '@mui/material';

import RestaurantDetailPageHead from './RestaurantDetailPageHead';
import RestaurantDetailPageTabs from './RestaurantDetailPageTabs';

function RestaurantDetailPage(props) {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const fetchRestaurant = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/restaurant/${id}`);
            setRestaurant(response.data);
        };
        fetchRestaurant();
  
        if (!restaurant) {
            // Fetch the restaurant data if it doesn't exist
            fetchRestaurant();
        }
    }, [id, restaurant]);

    /*
    function handleGoBack() {
      // Navigate back to the main page
      window.history.back();
    }
    */
    if (!restaurant) {
        return <div>Loading...</div>;
    }
    /*
    if (!restaurant) {
      // Render a loading spinner or message if the data is still loading
      return <div>Sorry, this restaurant does not exist.</div>;
    }
    */
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
                        <RestaurantDetailPageHead detail={restaurant} />
                        <RestaurantDetailPageTabs detail={restaurant} menu={menu} />
                        <Commits commitList={commits} />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Box>
        </div>
    );
}

export default RestaurantDetailPage;
