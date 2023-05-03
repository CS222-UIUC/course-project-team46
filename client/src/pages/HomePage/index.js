import './Homepage.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { Box, Grid } from '@mui/material';

import AppBar from '../../components/AppBar'
import RestaurantListWithFilter from '../../components/RestaurantListWithFilter'
import RestaurantReferral from '../../components/RestaurantReferral'
import Footer from '../../components/Footer'

const restaurantIDs = [17972286928074856000, 6439431995832154000, 14858487583252476000, 14082953212814273000, 6249083880162181000]
const allTypes = ['Chinese restaurant', 'Mexican restaurant', 'Fast food restaurant', 'American restaurant', 'Barbecue restaurant', 'Pizza restaurant', 'Italian restaurant', 'Sandwich shop', 'Other'];
/*
Restaurant: 45
Chinese restaurant: 21
Mexican restaurant: 15
Fast food restaurant: 14
American restaurant: 12
Barbecue restaurant: 9
Pizza restaurant: 9
Italian restaurant: 8
Sandwich shop: 7
Korean restaurant: 6
Bar & grill: 5
Thai restaurant: 5
Breakfast restaurant: 4
Diner: 4
Steak house: 4
Middle Eastern restaurant: 4
Chicken restaurant: 3
Japanese restaurant: 3
Hamburger restaurant: 3
*/

function HomePage(props) {
    const { user, handleLogout } = props;

    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('restaurant_rating');

    // Need to check API is 0-index or 1-index
    const [page, setPage] = useState(1);

    const [maxPage, setMaxPage] = useState(1);

    const [restaurantData, setRestaurantData] = useState([]);

    const [restaurantDetails, setRestaurantDetails] = useState([]);

    const [foodType, setFoodType] = useState('all');

    // initialize selectedTypes state using allTypes array
    const [selectedTypes, setSelectedTypes] = useState(
        allTypes.reduce((acc, type) => {
            acc[type] = true;
            return acc;
        }, {})
    );

    // const [submittedTypes, setSubmittedTypes] = useState(selectedTypes);
    
    // update selectedTypes state on type change
    const handleTypeChange = (typeName) => {
        setSelectedTypes((prevState) => ({
            ...prevState,
            [typeName]: !prevState[typeName],
        }));
    };
    
    // reset selectedTypes state to all types
    const handleResetSelection = () => {
        setSelectedTypes(
            Object.fromEntries(allTypes.map((type) => [type, true]))
        );
        setFoodType('all');
    };

    // update selectedTypesString and page on submit
    const handleSubmitSelection = () => {
        setPage(1);
        const selectedTypesArray = Object.entries(selectedTypes)
            .filter(([_, isSelected]) => isSelected)
            .map(([typeName, _]) => typeName);
        
        setFoodType(selectedTypesArray
            .map((typeName, index) => `${encodeURIComponent(typeName)}`)
            .join(','));
    };

    useEffect(() => {
        const fetchRestaurantDetails = async () => {
            try {
                const requests = restaurantIDs.map((id) =>
                    axios.get(`${process.env.REACT_APP_API_URL}/api/restaurant/${id}`)
                );

                const responses = await Promise.all(requests);
                const details = responses.map((response) => response.data);
                setRestaurantDetails(details);
            } catch (error) {
                console.error('Failed to fetch restaurant details:', error);
            }
        };

        fetchRestaurantDetails();
    }, []);

    // fetch restaurant data of current page, and number of total page
    useEffect(() => {
        /*
        const fetchData = async () => {
            // main page, using for sorting restaurants
            // using SortByName, SortByPrice to change the sort order.
            //  SortByName, SortByPrice cannot occur at the same time (if ouccur, the program would return status 500)

            // using FoodType_1, FoodType_2.... to control the food fliter.
            // for example FoodType_1 == fastfood , return all food with fast food type 
            // upto 9 different food type
            // *BY default, should use all 9 FoodType to show all restaurants*
            // using SortTtype to change (Name| Price)
            // using SortOrder to change (ASC | DESC)

            // return 2 things
            // result : require infomation
            // total_page: total page under fliter

            // e.x.1. http://localhost:8080/api/rest/?SortType=Price&SortOrder=ASC&FoodType_1=fastfood
            // e.x.2. http://localhost:8080/api/rest/?SortType=Price&SortOrder=ASC&FoodType_1=fastfood&FoodType_2=Chinese%20food
            // { "result": [ { "restaurant_id": 123, "restaurant_name": "McDonald's", "restaurant_address": "1234 Main St", "restaurant_price": 1, "restaurant_rating": 4.5, "restaurant_type": "fastfood" }, ... ], "total_page": [{"pages": 21}] }
            // ...
            // TODO: change the url to the real API url

            const submittedTypesArray = Object.entries(submittedTypes)
                .filter(([_, isSelected]) => isSelected)
                .map(([typeName, _]) => typeName);

            const queryParams = submittedTypesArray
                .map((typeName, index) => `FoodType_${index + 1}=${encodeURIComponent(typeName)}`)
                .join('&');

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/rest/?SortType=${orderBy}&SortOrder=${order}&page=${page}&${queryParams}`);

            // console.log(order);
            // console.log(orderBy);
            // console.log(page);

            setMaxPage(response.data.total_page[0].pages); // Get the maxPage from the API response
            setRestaurantData(response.data.result); // Get data from the API response
            
        };
        */
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/restaurant/list?page=${page}&sortField=${orderBy}&sortOrder=${order}&FoodType=${foodType}`);

            // console.log(order);
            // console.log(orderBy);
            // console.log(page);

            setMaxPage(response.data.maxPage); // Get the maxPage from the API response
            setRestaurantData(response.data.data); // Get data from the API response
        };

        fetchData();
    }, [order, orderBy, page, foodType]);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleChangePage = (event, property) => {
        setPage(property);
    };

    return (
        <div className="HomePage">
            <header className="HomePage-header">
                <AppBar 
                    user={user}
                    handleLogout={handleLogout}
                />
                <Box sx={{ mt: 10 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={0.5} />
                        <Grid item xs={11}>
                            <RestaurantReferral restaurantDetails={restaurantDetails} />
                            <Box height={32} /> {/* Add some space between */}
                            <RestaurantListWithFilter
                                restaurantData={restaurantData}
                                page={page}
                                setPage={setPage}
                                maxPage={maxPage}
                                order={order}
                                orderBy={orderBy}
                                handleRequestSort={handleRequestSort}
                                handleChangePage={handleChangePage}
                                allTypes={allTypes}
                                selectedTypes={selectedTypes}
                                handleTypeChange={handleTypeChange}
                                handleResetSelection={handleResetSelection}
                                handleSubmitSelection={handleSubmitSelection}
                            />
                        </Grid>
                        <Grid item xs={0.5} />
                    </Grid>
                </Box>
                <Footer />
            </header>
        </div>
    );
}

export default HomePage;
