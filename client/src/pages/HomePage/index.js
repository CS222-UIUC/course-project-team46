import './Homepage.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { Box, Grid } from '@mui/material';

import AppBar from '../../components/AppBar'
import RestaurantListWithFilter from '../../components/RestaurantListWithFilter'
import RestaurantReferral from '../../components/RestaurantReferral'

const restaurantIDs = [17972286928074856000, 6439431995832154000, 14858487583252476000, 14082953212814273000, 6249083880162181000]


function HomePage(props) {
    const { user, handleLogout } = props;

    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('rate');

    // Need to check API is 0-index or 1-index
    const [page, setPage] = useState(1);

    const [maxPage, setMaxPage] = useState(1);

    const [restaurantData, setRestaurantData] = useState([]);

    const [selectedTypesString, setSelectedTypesString] = useState('All');

    const [restaurantDetails, setRestaurantDetails] = useState([]);

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
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/restaurant/list?page=${page}&sortField=${orderBy}&sortOrder=${order}&type=${selectedTypesString}`);

            // console.log(order);
            // console.log(orderBy);
            // console.log(page);
            console.log(selectedTypesString);

            setMaxPage(response.data.maxPage); // Get the maxPage from the API response
            setRestaurantData(response.data.data); // Get data from the API response
        };

        fetchData();
    }, [order, orderBy, page, selectedTypesString]);

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
                                setSelectedTypesString={setSelectedTypesString}
                            />
                        </Grid>
                        <Grid item xs={0.5} />
                    </Grid>
                </Box>
            </header>
        </div>
    );
}

export default HomePage;
