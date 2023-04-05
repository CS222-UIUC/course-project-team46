import './RestaurantDetailPage.css';

// import React, { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AppBar from '../../components/AppBar'
import Comments from '../../components/Comments'

import { Box, Grid } from '@mui/material';

import RestaurantDetailPageHead from './RestaurantDetailPageHead';
import RestaurantDetailPageTabs from './RestaurantDetailPageTabs';

function RestaurantDetailPage(props) {
    const { user, handleLogout } = props;

    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [commits, setCommits] = useState([]);
    const [menu, setMenu] = useState([]);

    // fetch restaurant detail data
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

    useEffect(() => {
        setCommits([
            {
                "commits_id": 1,
                "user_id": 123,
                "username": "Peter",
                "createdAt": "2 days ago",
                "user_rate": 4,
                "score": 12,
                "user_avatar": "/static/images/avatar/Default.jpeg",
                "detail": "this is a commit"
            },
            {
                "commits_id": 2,
                "user_id": 123,
                "username": "Peter",
                "createdAt": "2 weeks ago",
                "user_rate": 3,
                "score": 2,
                "user_avatar": "/static/images/avatar/Default.jpeg",
                "detail": "this is another commit"
            },
            {
                "commits_id": 3,
                "user_id": 123,
                "username": "Peter",
                "createdAt": "1 month ago",
                "user_rate": 5,
                "score": 7,
                "user_avatar": "/static/images/avatar/Default.jpeg",
                "detail": "Hello"
            }
        ]);
        setMenu([
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
            }]);
    }, []);

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

    return (
        <div>
            <AppBar 
                user={user}
                handleLogout={handleLogout}
            />
            <Box sx={{ mt: 10 }}>
                <Grid container spacing={2}>
                    <Grid item xs={1} />
                    <Grid item xs={10}>
                        <RestaurantDetailPageHead detail={restaurant} />
                        <RestaurantDetailPageTabs detail={restaurant} menu={menu} />
                        <Comments commitList={commits} />
                    </Grid>
                    <Grid item xs={1} />
                </Grid>
            </Box>
        </div>
    );
}

export default RestaurantDetailPage;
