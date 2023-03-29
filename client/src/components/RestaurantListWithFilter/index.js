import { React, useState } from "react";

import { Grid } from '@mui/material';
import RestaurantList from '../RestaurantList';
import Filter from '../Filter';

const allCuisines = ['fastfood', 'Japanese food', 'Chinese food', 'Grill', 'Korean food', 'Thai food', 'India food', 'Mexican food', 'Other'];

function RestaurantListWithFilter(props) {
    const { restaurantData, page, maxPage, order, orderBy, handleRequestSort, handleChangePage } = props;

    const [selectedCuisines, setSelectedCuisines] = useState(
        allCuisines.reduce((acc, cuisine) => {
            acc[cuisine] = true;
            return acc;
        }, {})
    );

    const [selectedAllCuisines, setSelectedAllCuisines] = useState(true);
    
    const handleCuisineChange = (cuisineName) => {
        setSelectedCuisines((prevState) => ({
            ...prevState,
            [cuisineName]: !prevState[cuisineName],
        }));
        setSelectedAllCuisines(Object.values(selectedCuisines).every((selected) => selected));
    };
    
    const handleClearSelection = () => {
        setSelectedCuisines((prevState) =>
            allCuisines.reduce((acc, cuisine) => {
                acc[cuisine] = true;
                return acc;
            }, {})
        );
        setSelectedAllCuisines(true);
    };

    // Filter out restaurants that do not contain the currently selected cuisine
    const filteredRestaurantData = restaurantData.filter((restaurant) => {
        if (selectedAllCuisines) {
            return true;
        } else {
            return selectedCuisines[restaurant.restaurant_type];
        }
    });

    return (
        <Grid container spacing={2}>
            <Grid item xs={0.3}>
                <div />
            </Grid>
            <Grid item xs={8} >
                <RestaurantList
                    restaurantData={restaurantData}
                    page={page}
                    maxPage={maxPage}
                    order={order}
                    orderBy={orderBy}
                    handleRequestSort={handleRequestSort}
                    handleChangePage={handleChangePage}
                />
            </Grid>
            <Grid item xs={3} >
                <Filter
                    allCuisines={allCuisines}
                    selectedCuisines={selectedCuisines}
                    handleCuisineChange={handleCuisineChange}
                    handleClearSelection={handleClearSelection}
                />
            </Grid>
        </Grid>
    );
}

export default RestaurantListWithFilter;
