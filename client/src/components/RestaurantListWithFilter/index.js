
import { Grid } from '@mui/material';
import RestaurantList from '../RestaurantList';
import Filter from '../Filter';

function RestaurantListWithFilter(props) {
    const { restaurantData, page, maxPage, order, orderBy, handleRequestSort, handleChangePage, allTypes, selectedTypes, handleTypeChange, handleResetSelection, handleSubmitSelection } = props;

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
