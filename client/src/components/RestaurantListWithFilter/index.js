import { React, useState } from "react";

import { Grid } from '@mui/material';
import RestaurantList from '../RestaurantList';
import Filter from '../Filter';

const allTypes = ['fastfood', 'Japanese food', 'Chinese food', 'Grill', 'Korean food', 'Thai food', 'India food', 'Mexican food', 'Other'];

function RestaurantListWithFilter(props) {
    const { restaurantData, page, setPage, maxPage, order, orderBy, handleRequestSort, handleChangePage, setSelectedTypesString } = props;

    const [selectedTypes, setSelectedTypes] = useState(
        allTypes.reduce((acc, type) => {
            acc[type] = true;
            return acc;
        }, {})
    );
    
    const handleTypeChange = (typeName) => {
        setSelectedTypes((prevState) => ({
            ...prevState,
            [typeName]: !prevState[typeName],
        }));
    };
    
    const handleResetSelection = () => {
        setSelectedTypes(
            Object.fromEntries(allTypes.map((type) => [type, true]))
        );
        setSelectedTypesString('All');
    };

    const handleSubmitSelection = () => {
        setSelectedTypesString(
            Object.keys(selectedTypes)
                .filter((type) => selectedTypes[type])
                .join(',')
        );
        setPage(1);
    };

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
                    allTypes={allTypes}
                    selectedTypes={selectedTypes}
                    handleTypeChange={handleTypeChange}
                    handleResetSelection={handleResetSelection}
                    handleSubmitSelection={handleSubmitSelection}
                />
            </Grid>
        </Grid>
    );
}

export default RestaurantListWithFilter;
