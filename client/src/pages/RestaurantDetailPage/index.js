import './RestaurantDetailPage.css';

// import React, { useEffect, useState } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AppBar from '../../components/AppBar'
import Comments from '../../components/Comments'
import Footer from '../../components/Footer'

import { Box, Grid, Paper} from '@mui/material';

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
                        <Box sx={{ mt: 3 }}>
                            <Paper sx={{ p: 3 }}>
                                <RestaurantDetailPageHead detail={restaurant} />
                            </Paper>
                        </Box>

                        <Paper sx={{ p: 3 }}>
                            <RestaurantDetailPageTabs detail={restaurant} menu={menu} />
                            <Comments 
                                user={user}
                                commitList={commits}
                            />
                        </Paper>
                    </Grid>

                    <Grid item xs={1} />
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}



/*
return (
    <div>
        <AppBar user={user} handleLogout={handleLogout} />
        <Box sx={{ mt: 10 }}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <RestaurantDetailPageHead detail={restaurant} />
                    </Grid>
                    <Grid item xs={12}>
                        <RestaurantDetailPageTabs detail={restaurant} menu={menu} />
                    </Grid>
                    <Grid item xs={12}>
                        <Comments commitList={commits} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </div>
  );

//
return (
    <div>
        <AppBar 
            user={user}
            handleLogout={handleLogout}
        />
        <Box sx={{ mt: 10 }}>
            <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                <Box sx={{ mb: 3 }}>
                    <RestaurantDetailPageHead detail={restaurant} />
                </Box>
                <Box sx={{ mb: 3 }}>
                    <RestaurantDetailPageTabs detail={restaurant} menu={menu} />
                </Box>
                <Box sx={{ mb: 3 }}>
                    <Comments commitList={commits} />
                </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                <Box sx={{ mb: 3 }}>
                    <RestaurantDetailPageInfo detail={restaurant} />
                </Box>
                <Box sx={{ mb: 3 }}>
                    <RestaurantDetailPageMap detail={restaurant} />
                </Box>
                </Grid>
            </Grid>
            </Container>
        </Box>
    </div>
);
  


return (
    <div>
        <AppBar user={user} handleLogout={handleLogout} />
        <Box sx={{ mt: 10 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                    <Box sx={{ mb: 4 }}>
                        <RestaurantDetailPageHead detail={restaurant} />
                    </Box>
                    <Box sx={{ mb: 4 }}>
                        <RestaurantDetailPageTabs detail={restaurant} menu={menu} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                    <Box sx={{ mb: 4 }}>
                        <Comments commitList={commits} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    </div>
);
  







// add paper component from mui
return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar user={user} handleLogout={handleLogout} />
        <Box sx={{ p: 3 }}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Paper>
                        <RestaurantDetailPageHead detail={restaurant} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <RestaurantDetailPageTabs detail={restaurant} menu={menu} />
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper>
                        <Comments commitList={commits} />
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    </Box>
);

//
return (
    <div>
      <AppBar user={user} handleLogout={handleLogout} />
        <Container maxWidth="lg">
            <Box sx={{ mt: 3 }}>
                <Paper sx={{ p: 3 }}>
                    <RestaurantDetailPageHead detail={restaurant} />
                </Paper>
            </Box>
            <Box sx={{ mt: 3 }}>
                <Paper sx={{ p: 3 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8}>
                            <RestaurantDetailPageTabs detail={restaurant} menu={menu} />
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Paper sx={{ p: 3 }}>
                                <Comments commitList={commits} />
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    </div>
);
*/
  


export default RestaurantDetailPage;
