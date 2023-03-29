import './Homepage.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

import { Box, Grid } from '@mui/material';

import AppBar from '../../components/AppBar'
import RestaurantList from '../../components/RestaurantList'

function HomePage(props) {
    const [order, setOrder] = useState('desc');
    const [orderBy, setOrderBy] = useState('rate');

    // 这里注意 API 是 0-index or 1-index
    const [page, setPage] = useState(1);

    const [maxPage, setMaxPage] = useState(1);

    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/restaurant/list?page=${page}&sortField=${orderBy}&sortOrder=${order}`);

            // console.log(order);
            // console.log(orderBy);
            // console.log(page);

            setMaxPage(response.data.maxPage); // Get the maxPage from the API response
            setRestaurantData(response.data.data); // Get data from the API response
        };

        fetchData();
    }, [order, orderBy, page]);

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
                <AppBar />
                <Box sx={{ mt: 10 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={1} />
                        <Grid item xs={10}>
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
                        <Grid item xs={1} />
                    </Grid>
                </Box>
            </header>
        </div>
    );
}

export default HomePage;
